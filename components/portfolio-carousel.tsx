"use client";
import ProjectCard from "./project-card";
import { projects } from "./constants";
import { useState } from "react";
import UpArrow from "@/public/icons/up-arrow";
import DownArrow from "@/public/icons/down-arrow";
import { HeadingWithLink } from "./heading-with-link";

export default function PortfolioCarousel() {
  const [showAll, setShowAll] = useState(false);

  // Toggle the showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the projects to display based on the state
  const featuredProjects = projects.slice(0, 4);
  const showMoreProjects = projects.slice(4);

  return (
    <section>
      <div className="px-2 sm:px-6">
        <div className="mx-4 py-8 md:py-10">
          <div className="max-w-3xl mx-auto text-center text-athenix-dark-green">
            <h1 className="h1">
              <HeadingWithLink id="portfolio">
                What We’ve Delivered
              </HeadingWithLink>
            </h1>
            <p className="text-xl text-gray-400 mb-12 mt-2">
              Take a look at the projects we’ve brought to life, showcasing our
              dedication to delivering top-notch results.
            </p>
          </div>
          <div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center gap-12  overflow-hidden `}
            >
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={{
                    slug: project.slug,
                    description: project.description,
                    img: project.img,
                    name: project.name,
                    github: project.github,
                    technologies: project.technologies,
                    industry: project.industry,
                    timeline: project.timeline,
                  }}
                />
              ))}
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 place-items-center gap-12 transition-all overflow-hidden ease-in-out duration-1000 ${
                showAll ? `max-h-[3000px]` : "max-h-0"
              }`}
            >
              {showMoreProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={{
                    slug: project.slug,
                    description: project.description,
                    img: project.img,
                    name: project.name,
                    github: project.github,
                    technologies: project.technologies,
                    industry: project.industry,
                    timeline: project.timeline,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button
                onClick={toggleShowAll}
                className={`px-4 py-2 text-athenix-dark-green rounded-md text-lg flex flex-col justify-center items-center ${
                  !showAll ? "animate-bounce" : ""
                }`}
              >
                {showAll ? "Show Less" : "Show More"}
                <div className="mt-2">
                  {showAll ? <UpArrow key="001" /> : <DownArrow key="002" />}
                </div>
              </button>
            </div>
          </div>
          {/* <AutoCarousel /> */}
        </div>
      </div>
    </section>
  );
}
