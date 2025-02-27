import Image from "next/image";
import berlinLogo from "@/public/assets/berlin-logo.png";
import mebLogo from "@/public/assets/meb-logo.png";
import turkiyeFlag from "@/public/assets/flag.png";

export default function Header() {
  console.log("Başarılar!");

  return (
    <div className="ml-auto mr-auto mt-4 mb-20">
      <div className="flex flex-row gap-8">
        <Image
          src={berlinLogo}
          alt="Başkonsolosluk-Logo"
          className="w-32 h-40"
        />
        <div className="flex flex-col text-center justify-center">
          <p className="header text-3xl mt-6 font-bold">
            T.C. Berlin Başkonsolosluğu Eğitim Ataşeliği
          </p>
          <div className="flex flex-row mt-6 mr-12 ml-12 gap-2">
            <Image
              src={turkiyeFlag}
              alt="Türkiye-Bayrak"
              className="w-6 h-6 mt-auto mb-auto"
            />
            <p className="text-xl  text-red-600 ">
              "Bir Yıldız, Bir Hilal, İlelebet İstiklal" Bilgi Yarışması
            </p>
            <Image
              src={turkiyeFlag}
              alt="Türkiye-Bayrak"
              className="w-6 h-6 mt-auto mb-auto scale-x-[-1]"
            />
          </div>
        </div>
        <Image src={mebLogo} alt="MEB-Logo" className="w-36 h-36" />
      </div>
    </div>
  );
}
