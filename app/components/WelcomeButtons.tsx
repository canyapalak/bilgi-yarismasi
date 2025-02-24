import { useEffect, useState } from "react";
import { Category } from "../types/index.js";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HowToPlayModal from "@/app/components/HowToPlay";

export default function WelcomeButtons() {
  const [clickedCategoryButton, setClickedCategoryButton] = useState<
    string | null
  >(null);
  const [isInfo, setIsInfo] = useState(false);
  const handleOpenInfo: any = () => {
    setIsInfo(!isInfo);
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

  const [open, setOpen] = useState(false);

  const handleHowToPlayModal: any = () => {
    setOpen(true);
  };

  const CategoryArray: Category[] = [
    { title: "Coğrafya", fileName: "Category1" },
    { title: "Dilbilgisi", fileName: "Category2" },
    { title: "Kültür", fileName: "Category3" },
    { title: "Bilmeceler", fileName: "Category4" },
    { title: "Yemekler", fileName: "Category5" },
    { title: "Hepsi!", fileName: "All" },
  ];

  return (
    <div className="flex flex-col gap-6 items-center">
      <p className="text-center text-neutral-700 fade-in text-2xl">
        Bir kategori seç!
      </p>
      <div className="flex flex-wrap gap-4 justify-center fade-in">
        {CategoryArray.map((cat, index) => (
          <div
            key={index}
            className={`button-prm bg-navy-default text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-40 text-center shadow-lg shadow-zinc-400
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
        {isInfo ? (
          <p className="text-sm absolute mt-7 italic text-gray-default text-brick-light">
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
          className="mt-2 button-prm bg-gray-default hover:bg-gray-light text-neutral-50 text-2xl rounded-md p-3
  cursor-pointer w-48 text-center shadow-lg shadow-zinc-400"
          onClick={handleHowToPlayModal}
        >
          Nasıl Oynanır?
        </div>
        {open ? <HowToPlayModal open={open} setOpen={setOpen} /> : null}
      </div>
    </div>
  );
}
