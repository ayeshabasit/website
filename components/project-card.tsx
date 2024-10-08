"use client";
import Image, { StaticImageData } from "next/image";
/* eslint-disable react/require-default-props */
import Link from "next/link";

export interface Project {
  name: string;
  slug: string;
  description: string;
  img: StaticImageData;
  industry: string;
  timeline: string;
  technologies: string[];
  github: string;
  url?: string;
  intro?: string;
  isMobile?: boolean;
}

type Props = {
  project: Project;
  filter?: {
    key: string;
    value: string | boolean;
  };
};
const ProjectCard = ({ project, filter }: Props) => {
  return (
    <>
      {/* <Tilt className="Tilt cursor-pointer" options={{ max: 2 }}> */}
      <div
        className="rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:drop-shadow-2xl hover:scale-110 w-[320px] md:w-[470px] 2xl:w-[400px] mt-4 "
      >
        <Link
          className="flex justify-center items-center align-center "
          href={`/projects/${project.slug}`}
        >
          <Image
            className="rounded-2xl object-contain h-[170px] md:h-[250px]"
            src={project.img}
            alt={project.name}
          />
        </Link>
        <div className="flex flex-col md:flex-row items-center justify-between text-athenix-dark-green mt-4">
          <div>
            <div className="text-xl font-semibold text-center md:text-left">
              {project.name}
            </div>
            <div className="text-athenix-light-green">
              {project.technologies.join(" / ")}
            </div>
          </div>
          <div className="text-center md:text-right">
            <div>{project.timeline}</div>
            <div className="text-athenix-light-green">{project.industry}</div>
          </div>
        </div>
      </div>
      {/* </Tilt> */}
    </>
  );
};

export default ProjectCard;
