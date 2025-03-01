import Contest from "@/app/components/Contest";
import ContestResult from "@/app/components/ContestResult";
import HowToPlay from "@/app/components/HowToPlay";
import WelcomeButtons from "@/app/components/WelcomeButtons";
import { useState } from "react";

export default function Home() {
  const [isHowToPlay, setIsHowToPlay] = useState(false);
  const [isContest, setIsContest] = useState(false);
  const [isContestResult, setIsContestResult] = useState(false);

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

  const openContestResult = (): void => {
    setIsContestResult(true);
  };

  const closeContestResult = (): void => {
    setIsContestResult(false);
  };

  return (
    <div className="text-2xl">
      {!isHowToPlay && !isContestResult && !isContest && (
        <WelcomeButtons
          openHowToPlay={openHowToPlay}
          openContest={openContest}
        />
      )}
      {isHowToPlay && !isContestResult && !isContest && (
        <HowToPlay closeHowToPlay={closeHowToPlay} />
      )}
      {!isHowToPlay && !isContestResult && isContest && (
        <Contest
          closeContest={closeContest}
          openContestResult={openContestResult}
        />
      )}
      {!isHowToPlay && !isContest && isContestResult && (
        <ContestResult closeContestResult={closeContestResult} />
      )}
    </div>
  );
}
