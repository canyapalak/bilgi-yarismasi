import Contest from "@/app/components/Contest";
import HowToPlay from "@/app/components/HowToPlay";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import { useState } from "react";

export default function Home() {
  const [isHowToPlay, setIsHowToPlay] = useState(false);
  const [isContest, setIsContest] = useState(false);

  const openHowToPlay = (): void => {
    setIsHowToPlay(true);
  };

  const closeHowToPlay = (): void => {
    setIsHowToPlay(false);
  };

  const openContest = (): void => {
    setIsContest(true);
  };

  const closeContest = (): void => {
    setIsContest(false);
  };

  return (
    <div className="text-2xl">
      {!isHowToPlay && !isContest && (
        <WelcomeButtons
          openHowToPlay={openHowToPlay}
          openContest={openContest}
        />
      )}
      {isHowToPlay && !isContest && (
        <HowToPlay closeHowToPlay={closeHowToPlay} />
      )}
      {!isHowToPlay && isContest && <Contest closeContest={closeContest} />}
    </div>
  );
}
