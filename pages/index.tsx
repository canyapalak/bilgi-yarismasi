import HowToPlay from "@/app/components/HowToPlay";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import { useState } from "react";

export default function Home() {
  const [isHowToPlay, setIsHowToPlay] = useState(false);

  const openHowToPlay = (): void => {
    setIsHowToPlay(true);
  };

  const closeHowToPlay = (): void => {
    setIsHowToPlay(false);
  };

  return (
    <div className="text-2xl">
      {!isHowToPlay && <WelcomeButtons openHowToPlay={openHowToPlay} />}
      {isHowToPlay && <HowToPlay closeHowToPlay={closeHowToPlay} />}
    </div>
  );
}
