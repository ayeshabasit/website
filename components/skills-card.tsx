import Image, { StaticImageData } from "next/image";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { ReactElement } from "react";

type SkillsCardProps = {
  icon: ReactElement;
  title: string;
  details: string;
};

export default function SkillsCard({ icon, title, details }: SkillsCardProps) {
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      {icon}
      <h4 className="text-athenix-dark-green h4 mb-2 mt-2">{title}</h4>
      <p className="text-lg text-gray-400 text-center">{details}</p>
    </div>
  );
}
