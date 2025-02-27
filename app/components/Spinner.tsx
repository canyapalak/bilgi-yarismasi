import Image from "next/image";
import flagSpinner from "@/public/assets/flag.png";

export default function Spinner() {
  return (
    <div className="mb-10 mt-10 spinning">
      <Image src={flagSpinner} alt="Loading" className="w-28 h-28" />
    </div>
  );
}
