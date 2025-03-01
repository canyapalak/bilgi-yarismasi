import { useContext } from "react";
import { ContestResultProps } from "../types";
import { ScoreContext } from "../context/ScoreContext";
import Image from "next/image";
import deer from "@/public/assets/deer-an.png";
import horse from "@/public/assets/horse-an.png";
import wolf from "@/public/assets/wolf-an.png";
import phoenix from "@/public/assets/phoenix-an.png";
import dragon from "@/public/assets/dragon-an.png";

export default function ContestResult({
  closeContestResult,
}: ContestResultProps) {
  const { score } = useContext(ScoreContext);

  const getAnimalImage = (score: number) => {
    if (score >= 0 && score <= 2) {
      return deer;
    } else if (score > 2 && score <= 4) {
      return horse;
    } else if (score > 4 && score <= 6) {
      return wolf;
    } else if (score > 6 && score <= 8) {
      return phoenix;
    } else {
      return dragon;
    }
  };

  const getResultText = (score: number) => {
    if (score >= 0 && score <= 2) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bildin ve{" "}
          <span className="text-brick-default">Alasığın</span> ile eşleştin.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      );
    } else if (score > 2 && score <= 4) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtlayarak{" "}
          <span className="text-brick-default">Tulpar</span> unvanını kazandın.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      );
    } else if (score > 4 && score <= 6) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesine doğru cevap verdin{" "}
          <span className="text-brick-default">Gökbörü</span> oldun. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      );
    } else if (score > 6 && score <= 8) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bilerek{" "}
          <span className="text-brick-default">Simurg</span> ile eşleştin. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      );
    } else {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtladın ve en yüksek unvan olan{" "}
          <span className="text-brick-default">Evreğen</span>'i kazandın. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      );
    }
  };

  const animalImage = getAnimalImage(score);
  const resultText = getResultText(score);

  return (
    <div className="gap-8 items-center flex flex-col fade-in-long">
      <div className="flex-col flex items-center border-2 rounded-lg border-gray-800 w-64 animal-div">
        <Image src={animalImage} alt="animal" className="items-center animal" />
      </div>
      <div>
        <p className="text-center">{resultText}</p>
      </div>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeContestResult}
      >
        Ana Sayfa
      </div>
    </div>
  );
}
