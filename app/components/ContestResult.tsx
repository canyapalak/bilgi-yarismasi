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
  const scoreContext = useContext(ScoreContext);

  if (!scoreContext) {
    throw new Error("ScoreContext must be used within a ScoreProvider");
  }

  const { score, setScore } = scoreContext;
  const [isBackCard, setIsBackCard] = useState<boolean>(false);

  const getHeroDetails = (score: number) => {
    if (score >= 0 && score <= 1) {
      return { image: hulkImg, logo: hulkLogo, name: "HULK" };
    } else if (score >= 2 && score <= 3) {
      return { image: wolverineImg, logo: wolverineLogo, name: "WOLVERINE" };
    } else if (score >= 4 && score <= 5) {
      return { image: spidermanImg, logo: spidermanLogo, name: "SPIDER-MAN" };
    } else if (score >= 6 && score <= 7) {
      return {
        image: wonderwomanImg,
        logo: wonderwomanLogo,
        name: "WONDER WOMAN",
      };
    } else if (score >= 8 && score <= 9) {
      return { image: batmanImg, logo: batmanLogo, name: "BATMAN" };
    } else {
      return { image: supermanImg, logo: supermanLogo, name: "SUPERMAN" };
    }
  };

  const {
    image: heroImage,
    logo: heroLogo,
    name: heroName,
  } = getHeroDetails(score !== null ? score : 0); // Check if score is null and use 0 if so

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
          10 sorunun <span className="text-brick-default">10</span>&apos;unu da
          doğru bildin ve <span className="text-brick-default">Superman</span>{" "}
          oldun! Süper güçlerin, hızın ve uçma yeteneğinle herkesin hayran
          olduğu bir kahramansın. Yardımsever, cesur ve her zaman iyilik için
          çalışan biri olarak dünyayı daha güzel bir yer haline getiriyorsun!
        </p>
      );
    }
  };

  const resultText = score !== null ? getResultText(score) : getResultText(0);

  return (
    <div className="gap-8 items-center flex flex-col fade-in-long">
      <div
        className={`items-center flip-card flex flex-col ${
          isBackCard ? "flipped" : ""
        }`}
      >
        <div className="flip-card-inner w-[14rem] h-[14rem] sm:w-[18rem] sm:h-[18rem] mb-6">
          <div
            className={`flip-card-back hero border-2 rounded-lg border-yellow-900 p-3 text-[20px] flex items-center justify-center ${
              isBackCard ? "" : ""
            }`}
            onClick={handleClickCard}
          >
            <span className="flex flex-col items-center gap-2">
              <p className="text-center text-black text-3xl sm:text-4xl font-bolder mt-4">
                {heroName}
              </p>
              <Image
                src={heroLogo}
                alt="Superhero-Logo"
                className="w-[10rem] h-[10rem] sm:w-[13rem] sm:h-[13rem]"
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
              className="items-center w-[13rem] h-[13rem] sm:w-[17rem] sm:h-[17rem]"
            />
          </div>
        </div>
        <div className="text-center">{resultText}</div>
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
