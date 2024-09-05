import Image from "next/image";

import { projectsDictionary, technologyIcons } from "@/components/constants";

export default function Project({ params }: { params: { project: string } }) {
  return (
    <div className="relative text-left pb-12 md:pb-16 mx-4 md:mx-12 pt-8 md:pt-20  ">
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="pr-8">
          <h1
            className="text-4xl md:text-6xl mb-4 font-medium text-athenix-dark-green"
            data-aos="fade-up"
          >
            {projectsDictionary[params.project].name} Case Study
          </h1>
          <p className="text-athenix-dark-green">
            {projectsDictionary[params.project].intro}
          </p>
          <br></br>
          <p className="text-athenix-dark-green">
            {projectsDictionary[params.project].description}
          </p>
          <div
            className="mt-8 md:mt-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              className="btn bg-athenix-dark-green hover:bg-athenix-button-highlight w-auto mb-4 mx-2 rounded-md"
              href="https://calendly.com/athenix-discovery-call/30min"
              target="_blank"
            >
              Tell us about your project
            </a>

            {projectsDictionary[params.project].url && (
              <a
                className="btn text-black bg-athenix-white hover:bg-athenix-gray hover:text-black w-auto mb-4  mx-2 rounded-md border-1 border-athenix-dark-green"
                href={projectsDictionary[params.project].url}
                target="_blank"
              >
                Visit {projectsDictionary[params.project].name}
              </a>
            )}
          </div>
        </div>
        <div
          className={`${
            projectsDictionary[params.project].isMobile
              ? "flex justify-center items-center "
              : ""
          }`}
        >
          <Image
            className={`rounded-2xl object-contain ${
              projectsDictionary[params.project].isMobile
                ? "w-[300px] md:min-w-[300px] lg:min-w-[400px] mt-8"
                : "w-[1500px]  mt-8 md:mt-20"
            }`}
            src={projectsDictionary[params.project].img}
            alt={params.project}
          />
        </div>
      </div>
      <h1
        className="text-2xl md:text-4xl mb-4 mt-16 font-medium text-athenix-dark-green text-center"
        data-aos="fade-up"
      >
        What <span className="text-athenix-bright-green">Technologies</span> are
        used?
      </h1>
      <div className="flex justify-center px-12 py-4">
        {projectsDictionary[params.project].technologies.map((technology) => {
          return technologyIcons[technology];
        })}
      </div>
    </div>
  );
}
