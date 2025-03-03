import { useContext, useState } from "react";
import { AnimalsProps, ContestResultProps } from "../types";
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
  const [isBackCard, setIsBackCard] = useState<boolean>(false);

  const infoCards = [
    {
      animalName: "Alasığın",
      animalSpecies: "Geyik",
      animalDesc:
        "Doğa ve yaşam, zarafet, denge, kutsallık, şifa verme yeteneği, huzur ve barış",
    },
    {
      animalName: "Tulpar",
      animalSpecies: "At",
      animalDesc:
        "Sürat ve çeviklik, özgürlük, kahramanlık, savaşçılık, sadakat, engelleri aşma",
    },
    {
      animalName: "Gökbörü",
      animalSpecies: "Kurt",
      animalDesc:
        "Cesaret ve liderlik, bağımsızlık, kurtuluş, kutsal rehberlik, dayanıklılık",
    },
    {
      animalName: "Simurg",
      animalSpecies: "Anka Kuşu",
      animalDesc:
        "Sonsuz yaşam ve yeniden doğuş, bilgelik, dönüşüm ve arınma, evrenin dengesi",
    },
    {
      animalName: "Evreğen",
      animalSpecies: "Ejderha",
      animalDesc:
        "Evrensel denge, yaratım, büyük güç ve kudret, koruyuculuk, doğaüstü enerji",
    },
  ];

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

  const animalImage = getAnimalImage(score);

  const getCard = (score: number) => {
    if (score >= 0 && score <= 2) return infoCards[0];
    if (score > 2 && score <= 4) return infoCards[1];
    if (score > 4 && score <= 6) return infoCards[2];
    if (score > 6 && score <= 8) return infoCards[3];
    return infoCards[4];
  };

  const handleClickCard = () => {
    setIsBackCard((prev) => !prev);
  };

  const { animalName, animalSpecies, animalDesc }: AnimalsProps =
    getCard(score);

  const getResultText = (score: number) => {
    if (score >= 0 && score <= 2) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bildin ve{" "}
          <span className="text-brick-default">Alasığın</span> ile eşleştin.
          Alasığın, kutsal ve doğayla özdeşleşmiş bir geyik figürüdür.
          Genellikle ormanların koruyucusu, doğanın ve yaşamın simgesi olarak
          görülür. Bu geyik, bir yandan zarafet ve dengeyi simgelerken, diğer
          yandan mistik bir güçle ilişkilendirilir. Alasığının, şifa verme ve
          insanları koruma gibi özel güçlere sahip olduğuna inanılır.
        </p>
      );
    } else if (score > 2 && score <= 4) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtlayarak{" "}
          <span className="text-brick-default">Tulpar</span> unvanını kazandın.
          Tulpar, Türk mitolojisinde kanatlı bir at olarak bilinir. Özellikle
          savaşlarda ve kahramanlık hikayelerinde rol alır. Hız ve özgürlüğün
          simgesidir. Tulpar, kahramanın yolculuklarında ona yardımcı olan güçlü
          ve hızlı bir varlık olarak görülür. Aynı zamanda gökyüzüyle
          bağlantılıdır ve uçma yeteneğiyle de anlamlı bir şekilde özgürlüğü
          simgeler.
        </p>
      );
    } else if (score > 4 && score <= 6) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesine doğru cevap verdin ve{" "}
          <span className="text-brick-default">Gökbörü</span> oldun. Gökbörü,
          Türk mitolojisinde göksel bir varlık olarak kabul edilir. Bu kurt,
          Türk halkının en değerli sembollerinden biridir ve halk arasında
          cesaret, liderlik ve özgürlüğü temsil eder. Gökbörü, gökyüzüne dair
          güçlü bağlantıları olan bir kurt figürü olarak, Türklerin tarihsel
          yolculuklarında önemli bir yer tutar.
        </p>
      );
    } else if (score > 6 && score <= 8) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bilerek{" "}
          <span className="text-brick-default">Simurg</span> ile eşleştin.
          Simurg, Türk ve Orta Asya mitolojisinde bazen "Zümrüdüanka" olarak
          anılır ve halk arasında "Sonsuz yaşam ve yeniden doğuş" ile
          ilişkilendirilir. Aynı zamanda bilgelik ve gücü simgeler. Bu kuş,
          tüyleriyle ölümsüzlük, yaşamın yenilenmesi ve evrenin korunması gibi
          derin anlamları taşır.
        </p>
      );
    } else {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtladın ve en yüksek unvan olan{" "}
          <span className="text-brick-default">Evreğen</span>'i kazandın.
          Evreğen, Türk mitolojisinde çoğunlukla gökyüzü ve yer arasındaki
          dengeyi sağlayan, güçlü ve kudretli bir yaratık olarak kabul edilir.
          Genellikle yıkıcı gücüyle tanınsa da, doğru ellerde bu güç koruma ve
          iyileştirme amacını taşır. Bu ejderha, bazen yaratıcı, bazen de yıkıcı
          bir figür olarak yer alır.
        </p>
      );
    }
  };

  const resultText = getResultText(score);

  return (
    <div className="gap-8 items-center flex flex-col fade-in-long">
      <div
        className={`items-center animal-div flip-card ${
          isBackCard ? "flipped" : ""
        }`}
      >
        <div className="flip-card-inner w-64 h-64">
          <div
            className={`flip-card-back border-2 rounded-lg border-gray-800 p-3 text-[20px] ${
              isBackCard ? "" : ""
            }`}
            onClick={handleClickCard} // Click on the back
          >
            <span className="flex flex-row gap-2">
              <p className="text-mustard-default">Adı:</p> {animalName}
            </span>
            <div className="flex flex-row gap-2">
              <p className="text-mustard-default">Türü:</p> {animalSpecies}
            </div>

            <span className="flex flex-wrap items-start">
              <p className="text-mustard-default whitespace-nowrap">
                Simgelediği:
              </p>
              <p className="whitespace-normal">{animalDesc}</p>
            </span>
          </div>

          <div
            className={`flip-card-front border-2 rounded-lg border-gray-800 ${
              isBackCard ? "" : ""
            }`}
            onClick={handleClickCard}
          >
            <Image
              src={animalImage}
              alt="animal"
              className="items-center animal"
            />
          </div>
        </div>
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
