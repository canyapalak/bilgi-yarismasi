import Image from "next/image";
import berlinLogo from "@/public/assets/berlin-logo.png";
import mebLogo from "@/public/assets/meb-logo.png";

export default function Header() {
  console.log("Başarılar!");

  return (
    <div className="ml-auto mr-auto mt-6 mb-10">
      <div className="flex flex-row gap-4">
        <Image
          src={berlinLogo}
          alt="Başkonsolosluk-Logo"
          className="w-32 h-32"
        />
        <div className="flex flex-col text-center justify-center">
          <p className="header text-xl">T.C. Berlin Başkonsolosluğu</p>
          <p className="header text-xl">Eğitim Ataşeliği</p>
          <p className="text-lg mt-2">Türkçe Bilgi Yarışması</p>
        </div>
        <Image src={mebLogo} alt="MEB-Logo" className="w-28 h-28 ml-4" />
      </div>
    </div>
  );
}
