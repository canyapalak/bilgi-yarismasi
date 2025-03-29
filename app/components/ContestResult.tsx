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

  const { score } = scoreContext;
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
  } = getHeroDetails(score !== null ? score : 0);

  const handleClickCard = () => {
    setIsBackCard((prev) => !prev);
  };

  const getResultText = (score: number) => {
    if (score >= 0 && score <= 1) {
      return (
        <p className="text-center px-3 break-words">
          10 sorunun <span className="text-brick-default">{score}</span>{" "}
          tanesini doğru bildin ve{" "}
          <span className="text-brick-default">Hulk</span> oldun! Hiç sorun
          değil! Sen de Hulk gibi muazzam bir güce sahipsin, ama bu gücü daha
          iyi yönlendirmek için çalışman gerekiyor. Yarışmadaki performansın,
          öğrenme yolculuğunun henüz başlangıcında olduğunu ama hızla
          ilerleyebileceğini gösteriyor. Önemli olan bu yolculuğa devam etmek ve
          her adımda biraz daha güçlenmek. Unutma, her yolculuk tek bir ilk
          adımla başlar. Şimdi bu gücü kontrol etme ve bilgiyle güçlenme zamanı!
        </p>
      );
    } else if (score >= 2 && score <= 3) {
      return (
        <p className="text-center px-2">
          İyi bir sonuç! 10 sorunun{" "}
          <span className="text-brick-default">{score}</span> tanesini doğru
          yanıtladın ve <span className="text-brick-default">Wolverine</span>{" "}
          oldun! Sen de Wolverine gibi dayanıklısın ve asla pes etmiyorsun.
          Yarışmadaki performansın, doğru yolda ilerlediğini ama keşfedecek çok
          şeyin olduğunu gösteriyor. Bilgi yolculuğunda her adımda daha güçlü
          hale geleceksin. Azmin ve kararlılığın sayesinde, potansiyelini ortaya
          çıkaracak güce sahipsin. Şimdi daha çok çalışmanın ve bu yolculukta
          ilerlemenin tam zamanı!
        </p>
      );
    } else if (score >= 4 && score <= 5) {
      return (
        <p className="text-center px-2">
          Harika bir iş çıkardın! 10 sorudan{" "}
          <span className="text-brick-default">{score}</span> tanesini doğru
          bilerek <span className="text-brick-default">Spider-Man</span> oldun!
          Tıpkı Spider-Man gibi çevik ve zeki birisin. Yarışmada sergilediğin
          performans, öğrenmeye açık ve gelişime yatkın olduğunu gösteriyor. Her
          doğru cevapla, bilgi ağını genişleterek daha güçlü bir konuma
          geliyorsun. Önemli olan cesaretin ve denemeye devam etmen. Unutma,
          büyük güç büyük sorumluluk getirir. Potansiyelinle bilgi yolculuğunda
          çok daha ileriye gideceksin!
        </p>
      );
    } else if (score >= 6 && score <= 7) {
      return (
        <p className="text-center px-2">
          Harikasın! 10 sorunun{" "}
          <span className="text-brick-default">{score}</span> tanesine doğru
          cevap verdin. Senin cesaretin ve gücün tıpkı{" "}
          <span className="text-brick-default">Wonder Woman</span>&apos;a
          benziyor. Kararlılığın ve zekân sayesinde her zorluğun üstesinden
          gelebilirsin. Yarışmada gösterdiğin başarı, bilgiye olan tutkunun ve
          güçlü sezgilerinin ne kadar etkileyici olduğunu gösteriyor. Her soruya
          verdiğin dikkatli cevaplarla öğrenme yolculuğunda ne kadar ileri
          gittiğini kanıtladın.
        </p>
      );
    } else if (score >= 8 && score <= 9) {
      return (
        <p className="text-center px-2">
          Tebrikler! 10 sorudan{" "}
          <span className="text-brick-default">{score}</span> tanesini doğru
          yanıtladın ve <span className="text-brick-default">Batman</span>{" "}
          oldun! Batman gibi karanlıkta bile ışığı bulabiliyor, zorluklar
          karşısında stratejik düşünüyorsun. Yarışmada sergilediğin performans,
          analitik zekânın ve problem çözme yeteneğinin gücünü ortaya koyuyor.
          Senin gibi bir zihin her zaman fark yaratır. Bu başarı, seni ustalığa
          ve büyük işler başarmaya bir adım daha yaklaştıracak!
        </p>
      );
    } else {
      return (
        <p className="text-center px-2">
          Sen inanılmazsın! 10 sorunun{" "}
          <span className="text-brick-default">10</span>&apos;unu da doğru
          bildin ve <span className="text-brick-default">Superman</span> oldun!
          Tıpkı onun gibi en zoru başarıyorsun ve herkesin hayranlıkla izlediği
          bir lider oluyorsun. Gücün, zekân ve azminle dünyayı kurtarmaya
          hazırsın. Yarışmada sergilediğin üstün performans, bilgiye olan
          hakimiyetini ve sınır tanımayan potansiyelini ortaya koyuyor. Her
          soruda gösterdiğin netlik ve hız, tam anlamıyla bir süper kahraman
          olduğunun kanıtı. Bilgi dünyasının zirvesinde, başarıyla parlıyorsun!
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
        <div className="button flip-card-inner w-[14rem] h-[14rem] sm:w-[18rem] sm:h-[18rem] mb-6">
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
