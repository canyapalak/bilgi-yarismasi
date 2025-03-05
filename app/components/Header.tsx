import Image from "next/image";
import berlinLogo from "@/public/assets/berlin-logo.png";
import mebLogo from "@/public/assets/meb-logo.png";
import turkiyeFlag from "@/public/assets/flag.png";

export default function Header() {
  console.log("Başarılar!");

  return (
    <div className="ml-auto mr-auto mt-4 mb-16 md:mb-20">
      <div className="flex flex-row gap-2 sm:gap-3 lg:gap-8">
        <Image
          src={berlinLogo}
          alt="Başkonsolosluk-Logo"
          className="w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-40"
        />
        <div className="flex flex-col text-center justify-center">
          <p className="header text-xl sm:text-2xl md:text-3xl font-bold">
            T.C. Berlin Başkonsolosluğu Eğitim Ataşeliği
          </p>
        </div>
        <Image
          src={mebLogo}
          alt="MEB-Logo"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36"
        />
      </div>
      <div className="flex flex-row gap-2 justify-center mt-[-0px] sm:mt-[-18px] md:mt-[-28px] w-2/3 items-center mx-auto">
        <Image
          src={turkiyeFlag}
          alt="Türkiye-Bayrak"
          className="w-6 h-6 mt-auto mb-auto hidden md:block"
        />
        <p className="text-base sm:text-lg md:text-xl text-red-600 text-center">
          "Bir Yıldız, Bir Hilal, İlelebet İstiklal" Bilgi Yarışması
        </p>
        <Image
          src={turkiyeFlag}
          alt="Türkiye-Bayrak"
          className="w-6 h-6 mt-auto mb-auto scale-x-[-1] hidden md:block"
        />
      </div>
    </div>
  );
}
