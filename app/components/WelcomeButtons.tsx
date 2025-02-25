import { useEffect, useState } from "react";
import { Category, WelcomeButtonsProps } from "../types/index.js";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function WelcomeButtons({ openHowToPlay }: WelcomeButtonsProps) {
  const [clickedCategoryButton, setClickedCategoryButton] = useState<
    string | null
  >(null);
  const [isChillInfo, setIsChillInfo] = useState(false);
  const handleOpenInfo: any = () => {
    setIsChillInfo(!isChillInfo);
  };
  const [isCategoryPicked, setIsCategoryPicked] = useState(false);
  const handleContestCategoryClick = (fileName: string, title: string) => {
    setClickedCategoryButton(title);
    setIsCategoryPicked(true);
  };

  useEffect(() => {
    setIsChillMode(false);
  }, []);

  const [isChillMode, setIsChillMode] = useState<boolean | null>(false);

  const handleChillModeClick = () => {
    setIsChillMode(!isChillMode);
  };

  const CategoryArray: Category[] = [
    { title: "Türk Mutfağı", fileName: "Category2" },
    { title: "Coğrafya", fileName: "Category3" },
    { title: "Türk Dili", fileName: "Category4" },
    { title: "Tarih", fileName: "Category5" },
    { title: "Kültür", fileName: "Category5" },
    { title: "Güncel Bilgiler", fileName: "Category5" },
    { title: "Ünlü Kişiler", fileName: "Category5" },
    { title: "Hepsi!", fileName: "All" },
  ];

  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-center text-neutral-700 fade-in text-2xl">
        Bir kategori seç!
      </p>
      <div className="flex flex-wrap gap-6 justify-center fade-in xl:w-9/12">
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
      </div>

      <div className="flex flex-col items-center text-neutral-700 fade-in mb-2">
        <div className="flex flex-row gap-2 text-xl items-center">
          {!isChillMode ? (
            <ToggleOffOutlinedIcon
              onClick={handleChillModeClick}
              className="cursor-pointer text-4xl"
            />
          ) : (
            <ToggleOnOutlinedIcon
              onClick={handleChillModeClick}
              className="cursor-pointer text-4xl text-green-default"
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
