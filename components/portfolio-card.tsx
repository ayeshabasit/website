import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import Octilearn from "@/public/images/octilearn-1.png";
import Octilearn2 from "@/public/images/octilearn-2.png";
import Octilearn3 from "@/public/images/octilearn-3.png";

type PortfolioCardProps = {
  firstImage: StaticImageData;
  secondImage: StaticImageData;
  title: string;
  year: string;
};

export default function PortfolioCard() {
  return (
    <div className="block w-full h-[650px] px-8 py-4">
      <div className="flex flex-row justify-between mb-12">
        <div className="font-bold text-lg text-athenix-dark-green">Web App</div>
        <div className="font-bold text-lg text-athenix-dark-green ">2024</div>
      </div>
      <Image
        className="max-w-full absolute left-32 top-18 z-10 mx-auto md:max-w-none h-auto rounded-xl shadow-xl shadow-athenix-dark-green"
        src={Octilearn}
        width={540}
        height={405}
        alt="Octilearn"
      />
      <Image
        className="max-w-full absolute left-[540px] z-20  top-64 mx-auto md:max-w-none h-auto rounded-xl shadow-xl shadow-athenix-dark-green"
        src={Octilearn2}
        width={540}
        height={405}
        alt="Octilearn2"
      />
      {/* <Image
        className="max-w-full absolute top-[380px] left-[100px] z-0 mx-auto md:max-w-none h-auto rounded-xl shadow-xl shadow-athenix-dark-green"
        src={Octilearn3}
        width={540}
        height={405}
        alt="Octilearn3"
      /> */}
    </div>
  );
}
