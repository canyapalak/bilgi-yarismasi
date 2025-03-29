import { useContext, useEffect, useState } from "react";
import { Category, WelcomeButtonsProps } from "../types/index.js";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ContestContext } from "../context/ContestContext";
import { ScoreContext } from "../context/ScoreContext";

export default function WelcomeButtons({
  openHowToPlay,
  openContest,
}: WelcomeButtonsProps) {
  const contestContext = useContext(ContestContext);
  const scoreContext = useContext(ScoreContext);

  if (!contestContext) {
    throw new Error("ContestContext must be used within a ContestProvider");
  }

  if (!scoreContext) {
    throw new Error("ScoreContext must be used within a ScoreProvider");
  }

  const {
    setPickedCategoryFileName,
    setPickedCategoryTitle,
    setIsChillMode,
    isChillMode,
  } = contestContext;
  const { setScore } = scoreContext;

  const [clickedCategoryButton, setClickedCategoryButton] = useState<
    string | null
  >(null);
  const [isChillInfo, setIsChillInfo] = useState(false);
  const handleOpenInfo = () => {
    setIsChillInfo(!isChillInfo);
  };

  const [isCategoryPicked, setIsCategoryPicked] = useState(false);
  const handleContestCategoryClick = (fileName: string, title: string) => {
    setClickedCategoryButton(title);
    setIsCategoryPicked(true);
    setPickedCategoryFileName(fileName);
    setPickedCategoryTitle(title);
  };

  const handleCategory8Click = (fileName: string, title: string) => {
    setClickedCategoryButton(title);
    setIsCategoryPicked(true);
    setPickedCategoryFileName(fileName);
    setPickedCategoryTitle(title);
  };

  useEffect(() => {
    setIsChillMode(false);
    setScore(0);
  }, []);

  const handleChillModeClick = () => {
    setIsChillMode(!isChillMode);
  };

  const handleContestStartClick = () => {
    openContest();
  };

  const CategoryArray: Category[] = [
    { title: "Dil ve Edebiyat", fileName: "Category1" },
    { title: "Coğrafya", fileName: "Category2" },
    { title: "Tarih", fileName: "Category3" },
    { title: "Kültür ve Sanat", fileName: "Category4" },
    { title: "Türk Mutfağı", fileName: "Category5" },
    { title: "Güncel Bilgiler", fileName: "Category6" },
    { title: "Ünlü Kişiler", fileName: "Category7" },
    { title: "Hepsi!", fileName: "Hepsi!" },
  ];

  const Category8Object: Category = {
    title: "!! 2025 Bilgi Yarışması Soruları !!",
    fileName: "Category8",
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-center text-neutral-700 fade-in text-2xl">
        Bir kategori seç!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center fade-in">
        {CategoryArray.map((cat, index) => (
          <div
            key={index}
            className={`button-prm bg-navy-default text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-60 text-center shadow-lg shadow-zinc-400
      ${
        clickedCategoryButton === cat.title
          ? "button-prm-active bg-navy-light"
          : ""
      }`}
            onClick={() => handleContestCategoryClick(cat.fileName, cat.title)}
          >
            {cat.title}
          </div>
        ))}
        <div
          className={`button-prm bg-rose-default text-neutral-50 text-2xl rounded-md p-3 cursor-pointer text-center shadow-lg shadow-zinc-400 w-60 sm:w-full col-span-1 sm:col-span-2
    ${
      clickedCategoryButton === Category8Object.title
        ? "button-prm-active bg-rose-light"
        : ""
    } 
    `}
          onClick={() =>
            handleCategory8Click(
              Category8Object.fileName,
              Category8Object.title
            )
          }
        >
          {Category8Object.title}
        </div>
      </div>

      <div className="flex flex-col items-center text-neutral-700 fade-in mb-2">
        <div className="flex flex-row gap-2 text-xl items-center">
          {!isChillMode ? (
            <ToggleOffOutlinedIcon
              onClick={handleChillModeClick}
              className="button cursor-pointer toggle-icon text-4xl"
            />
          ) : (
            <ToggleOnOutlinedIcon
              onClick={handleChillModeClick}
              className="button cursor-pointer toggle-icon text-4xl text-green-default"
            />
          )}
          <p>Rahat mod</p>
          <InfoOutlinedIcon
            className="w-5 cursor-pointer hover:text-gray-default"
            onClick={handleOpenInfo}
          />
        </div>
        {isChillInfo ? (
          <p className="text-sm absolute mt-7 italic text-brick-light">
            Rahat modda süre sınırlaması yoktur.
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <div
          className={`button-prm bg-green-default hover:bg-green-light text-neutral-50 text-2xl rounded-md p-3
  cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 ${
    isCategoryPicked ? "" : "opacity-50 pointer-events-none"
  }`}
          onClick={handleContestStartClick}
        >
          Başlat
        </div>
        <div
          className="mt-3 button-prm bg-gray-default hover:bg-gray-light text-neutral-50 text-2xl rounded-md p-3
  cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
          onClick={openHowToPlay}
        >
          Nasıl Oynanır?
        </div>
      </div>
    </div>
  );
}
