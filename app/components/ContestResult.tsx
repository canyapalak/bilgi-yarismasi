import { useContext, useState } from "react";
import { ContestResultProps } from "../types";
import { ScoreContext } from "../context/ScoreContext";
import Image from "next/image";
import supermanImg from "@/public/assets/h-img01.png";
import batmanImg from "@/public/assets/h-img02.png";
import wonderwomanImg from "@/public/assets/h-img03.png";
import spidermanImg from "@/public/assets/h-img04.png";
import wolverineImg from "@/public/assets/h-img05.png";
import hulkImg from "@/public/assets/h-img06.png";
import supermanLogo from "@/public/assets/h-logo01.png";
import batmanLogo from "@/public/assets/h-logo02.png";
import wonderwomanLogo from "@/public/assets/h-logo03.png";
import spidermanLogo from "@/public/assets/h-logo04.png";
import wolverineLogo from "@/public/assets/h-logo05.png";
import hulkLogo from "@/public/assets/h-logo06.png";

export default function ContestResult({
  closeContestResult,
}: ContestResultProps) {
  const { score } = useContext(ScoreContext);
  const [isBackCard, setIsBackCard] = useState<boolean>(false);

  const getHeroImage = (score: number) => {
    if (score >= 0 && score <= 1) {
      return hulkImg;
    } else if (score >= 2 && score <= 3) {
      return wolverineImg;
    } else if (score >= 4 && score <= 5) {
      return spidermanImg;
    } else if (score >= 6 && score <= 7) {
      return wonderwomanImg;
    } else if (score >= 8 && score <= 9) {
      return batmanImg;
    } else {
      return supermanImg;
    }
  };

  const getHeroLogo = (score: number) => {
    if (score >= 0 && score <= 1) {
      return hulkLogo;
    } else if (score >= 2 && score <= 3) {
      return wolverineLogo;
    } else if (score >= 4 && score <= 5) {
      return spidermanLogo;
    } else if (score >= 6 && score <= 7) {
      return wonderwomanLogo;
    } else if (score >= 8 && score <= 9) {
      return batmanLogo;
    } else {
      return supermanLogo;
    }
  };

  const getHeroName = (score: number) => {
    if (score >= 0 && score <= 1) {
      return "HULK";
    } else if (score >= 2 && score <= 3) {
      return "WOLVERINE";
    } else if (score >= 4 && score <= 5) {
      return "SPIDER-MAN";
    } else if (score >= 6 && score <= 7) {
      return "WONDER WOMAN";
    } else if (score >= 8 && score <= 9) {
      return "BATMAN";
    } else {
      return "SUPERMAN";
    }
  };

  const heroImage = getHeroImage(score);
  const heroLogo = getHeroLogo(score);
  const heroName = getHeroName(score);

  const handleClickCard = () => {
    setIsBackCard((prev) => !prev);
  };

  const getResultText = (score: number) => {
    if (score >= 0 && score <= 1) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bildin ve{" "}
          <span className="text-brick-default">Hulk</span> oldun! Üzülme çünkü
          sen inanılmaz bir güce ve büyük bir kalbe sahipsin. Bazen her şeyi bir
          anda çözmek zor olabilir ama önemli olan her zaman gelişmek ve
          öğrenmeye devam etmek. Senin içinde harika bir kahraman var!
        </p>
      );
    } else if (score >= 2 && score <= 3) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtladın ve{" "}
          <span className="text-brick-default">Wolverine</span> oldun! Güçlü,
          dayanıklı ve çok kararlısın. Zorluklar seni asla durduramaz, her zaman
          en iyisini yapmak için çalışırsın. Ayrıca arkadaşlarına karşı çok
          sadık bir kahramansın!
        </p>
      );
    } else if (score >= 4 && score <= 5) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bilerek{" "}
          <span className="text-brick-default">Spider-Man</span> oldun! Hızlı,
          çevik ve çok zekisin! Her zaman enerjik ve pozitif biri olarak
          sorunların üstesinden geliyorsun. Eğlenceli kişiliğin ve cesaretin
          sayesinde herkesin sevgisini kazanıyorsun!
        </p>
      );
    } else if (score >= 6 && score <= 7) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesine doğru cevap verdin ve{" "}
          <span className="text-brick-default">Wonder Woman</span> oldun! Güçlü,
          kararlı ve cesursun. Adaletin savunucusu olarak başkalarına ilham
          veriyorsun. Sadece fiziksel gücünle değil, bilgeliğin ve iyiliğinle de
          herkese örnek oluyorsun!
        </p>
      );
    } else if (score >= 8 && score <= 9) {
      return (
        <p className="text-justify px-3">
          10 sorudan <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtladın ve{" "}
          <span className="text-brick-default">Batman</span> oldun! Zekân,
          cesaretin ve harika planların sayesinde her sorunu çözebiliyorsun.
          Teknoloji ve aklını kullanarak her zaman bir adım önde oluyorsun.
          Geceyi aydınlatan bir kahraman olarak herkesin güvenini kazanıyorsun!
        </p>
      );
    } else {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">10</span>'unu da doğru
          bildin ve <span className="text-brick-default">Superman</span> oldun!
          Süper güçlerin, hızın ve uçma yeteneğinle herkesin hayran olduğu bir
          kahramansın. Yardımsever, cesur ve her zaman iyilik için çalışan biri
          olarak dünyayı daha güzel bir yer haline getiriyorsun!
        </p>
      );
    }
  };

  const resultText = getResultText(score);

  return (
    <div className="gap-8 items-center flex flex-col fade-in-long">
      <div
        className={`items-center flip-card flex flex-col ${
          isBackCard ? "flipped" : ""
        }`}
      >
        <div className="flip-card-inner w-[18rem] h-[18rem] mb-6">
          <div
            className={`flip-card-back hero border-2 rounded-lg border-yellow-900 p-3 text-[20px] flex items-center justify-center ${
              isBackCard ? "" : ""
            }`}
            onClick={handleClickCard}
          >
            <span className="flex flex-col items-center gap-2">
              <p className="text-center text-black text-4xl font-bolder mt-4">
                {heroName}
              </p>
              <Image
                src={heroLogo}
                alt="Superhero-Logo"
                className="w-[13rem] h-[13rem]"
              />
            </span>
          </div>

          <div
            className={`flip-card-front hero border-2 rounded-lg border-yellow-900 flex justify-center items-center ${
              isBackCard ? "" : ""
            }`}
            onClick={handleClickCard}
          >
            <Image
              src={heroImage}
              alt="Superhero-Img"
              className="items-center w-[17rem] h-[17rem]"
            />
          </div>
        </div>
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
