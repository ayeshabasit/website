import Image, { StaticImageData } from "next/image";
import dynamic from "next/dynamic";

type PortfolioCardProps = {
  firstImage: StaticImageData;
  secondImage?: StaticImageData | null;
  title: string;
  year: string;
};

export default function PortfolioCard({
  firstImage,
  secondImage,
  title,
  year,
}: PortfolioCardProps) {
  return (
    <div className="block w-full h-[650px] px-8 py-4">
      <div className="flex flex-row justify-between mb-12">
        <div className="font-bold text-lg text-athenix-dark-green">{title}</div>
        <div className="font-bold text-lg text-athenix-dark-green">{year}</div>
      </div>
      <div className="relative w-full h-full md:h-96 lg:h-[500px]">
        {/* First Image */}
        <div className="relative w-full h-full">
          <Image
            className="rounded-xl shadow-xl shadow-athenix-dark-green"
            src={firstImage}
            alt={`${title}-first-image`}
            // layout="fill"
            // objectFit="cover"
          />
        </div>

        {/* Second Image */}
        {secondImage && (
          <div className="absolute top-1/4 left-1/4 md:top-1/6 md:left-1/6 lg:top-1/8 lg:left-1/8 w-3/4 h-3/4 md:w-full md:h-full lg:w-1/2 lg:h-full">
            <Image
              className="rounded-xl shadow-xl shadow-athenix-dark-green"
              src={secondImage}
              // layout="fill"
              // objectFit="cover"
              alt="second"
            />
          </div>
        )}
      </div>
    </div>
  );
}
