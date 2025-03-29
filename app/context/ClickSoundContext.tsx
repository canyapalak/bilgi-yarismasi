import { createContext, useContext, ReactNode, useEffect } from "react";
import useSound from "use-sound";

interface ClickSoundContextProps {
  playHover: () => void;
}

const ClickSoundContext = createContext<ClickSoundContextProps | undefined>(
  undefined
);

export const ClickSoundProvider = ({ children }: { children: ReactNode }) => {
  const [playHover] = useSound("/assets/click_sound.wav");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, .button, .button-prm")) {
        playHover();
      }
    };

    document.addEventListener("click", handleClick); // Listen for clicks

    return () => {
      document.removeEventListener("click", handleClick); // Cleanup on unmount
    };
  }, [playHover]);

  return (
    <ClickSoundContext.Provider value={{ playHover }}>
      {children}
    </ClickSoundContext.Provider>
  );
};

export const useClickSound = (): ClickSoundContextProps => {
  const context = useContext(ClickSoundContext);
  if (!context) {
    throw new Error("useClickSound must be used within a ClickSoundProvider");
  }
  return context;
};
