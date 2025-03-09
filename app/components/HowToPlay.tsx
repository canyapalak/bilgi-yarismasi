import { HowToPlayProps } from "../types";

export default function HowToPlay({ closeHowToPlay }: HowToPlayProps) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="text-neutral-700 fade-in break-words text-center">
        Bu oyun, hem bilginizi test etmek hem de süper kahraman dünyasında
        yerinizi almanız için tasarlandı!
        <br />
        <br />
        Önce{" "}
        <span className="text-brick-default">istediğin kategoriyi seç</span> ve
        bilgi yarışmasına başla. Her soru için{" "}
        <span className="text-brick-default">20 saniyen</span> var! Ama rahat
        modda süre sınırı yok, dilediğin kadar düşünebilirsin. Toplam{" "}
        <span className="text-brick-default">10 soru</span> cevapladıktan sonra,
        aldığın puana göre{" "}
        <span className="text-brick-default">
          bir süper kahramanla eşleşeceksin!
        </span>
        <br />
        <br />
        Bakalım bilgi birikimin hangi kahramana daha yakın? Şimdi sıra sende!
        Bilginin gücünü göster ve kahramanını keşfet!
      </p>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeHowToPlay}
      >
        Geri Dön
      </div>
    </div>
  );
}
