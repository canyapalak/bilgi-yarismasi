import { useContext, useState } from "react";
import { ContestResultProps } from "../types";
import { ScoreContext } from "../context/ScoreContext";
import Image from "next/image";
import superman from "@/public/assets/her01-removebg.png";
import hulk from "@/public/assets/her02-removebg.png";
import wolverine from "@/public/assets/her03-removebg.png";
import wonderwoman from "@/public/assets/her04-removebg.png";
import spiderman from "@/public/assets/her05-removebg.png";
import batman from "@/public/assets/her06-removebg.png";

export default function ContestResult({
  closeContestResult,
}: ContestResultProps) {
  const { score } = useContext(ScoreContext);

  const getAnimalImage = (score: number) => {
    if (score >= 0 && score <= 1) {
      return hulk;
    } else if (score >= 2 && score <= 3) {
      return wolverine;
    } else if (score >= 4 && score <= 5) {
      return spiderman;
    } else if (score >= 6 && score <= 7) {
      return wonderwoman;
    } else if (score >= 8 && score <= 9) {
      return batman;
    } else {
      return superman;
    }
  };

  const animalImage = getAnimalImage(score);

  const getResultText = (score: number) => {
    if (score >= 0 && score <= 1) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bildin ve{" "}
          <span className="text-brick-default">Hulk</span> oldun! İnanılmaz bir
          güce ve büyük bir kalbe sahipsin. Bazen her şeyi bir anda çözmek zor
          olabilir ama önemli olan her zaman gelişmek ve öğrenmeye devam etmek.
          Senin içinde harika bir kahraman var!
        </p>
      );
    } else if (score >= 2 && score <= 3) {
      return (
        <p className="text-justify px-3">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru yanıtladın ve{" "}
          <span className="text-brick-default">Wolverine</span> oldun! Güçlü,
          dayanıklı ve çok kararlısın. Zorluklar seni asla durduramaz, her zaman
          en iyisini yapmak için çalışıyorsun. Ayrıca arkadaşlarına karşı çok
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
      <div className="items-center flex flex-col">
        <Image src={animalImage} alt="Superhero" className="w-64 h-64 hero" />
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
