"use client";
import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";
import Octilearn from "@/public/images/octilearn-1.png";
import { useState } from "react";

import Lottie from "react-lottie-player";

import staffAugmentationLottie from "@/public/lottie/staff_augmentation.json";
import dedicatedTeamsLottie from "@/public/lottie/dedicated_teams.json";
import softwareOutsourcing from "@/public/lottie/software_outsourcing.json";

export default function WaysWeCanWorkWithYou() {
  const [staffAugmentation, setStaffAugmentation] = useState<boolean>(true);
  const [teams, setTeams] = useState<boolean>(false);
  const [Outsourcing, setOutsourcing] = useState<boolean>(false);
  return (
    <section>
      <div className="bg-athenix-dark-green px-8">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Flexible Ways We Can Work With You</h1>
            {staffAugmentation && (
              <div className="flex flex-col justify-between items-center">
                <p
                  className={`text-xl mb-8 md:text-2xl text-left text-gray-400 transition-opacity duration-500 ease-out ${
                    staffAugmentation
                      ? "opacity-100 animate-fade-up"
                      : "opacity-0"
                  }`}
                >
                  Have developers from Athenix join your team.
                </p>
                <div className="flex relative items-center justify-center w-72 h-72 bg-white rounded-full overflow-hidden">
                  <Lottie
                    loop
                    animationData={staffAugmentationLottie}
                    play
                    style={{ width: "100%", height: "100%" }}
                    className={`${
                      staffAugmentation
                        ? "opacity-100 animate-fade-up"
                        : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            )}

            {teams && (
              <div className="flex flex-col  justify-between items-center">
                <p
                  className={`text-xl mb-8 md:text-2xl text-left text-gray-400 transition-opacity duration-500 ease-out ${
                    teams ? "opacity-100 animate-fade-up" : "opacity-0"
                  }`}
                >
                  Entire teams can join your organization. Designers, project
                  managers, and developers. You work with them directly. They
                  can join your communication platforms and coding repositories
                  as if they were teams you recruited and hired yourself.
                </p>
                <div className="flex relative items-center justify-center w-72 h-72 bg-white rounded-full overflow-hidden">
                  <Lottie
                    loop
                    animationData={dedicatedTeamsLottie}
                    play
                    style={{ width: "100%", height: "100%" }}
                    className={`${
                      teams ? "opacity-100 animate-fade-up" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            )}

            {Outsourcing && (
              <div className="flex flex-col justify-between items-center">
                <p
                  className={`text-xl mb-8 md:text-2xl text-left text-gray-400 transition-opacity duration-500 ease-out ${
                    Outsourcing ? "opacity-100 animate-fade-up" : "opacity-0"
                  }`}
                >
                  Don't want the hassle of running a team? Not a problem. Work
                  directly with our project managers and tech leads while they
                  do the grunt work of running a team behind the scenes.
                </p>
                <div className="flex relative items-center justify-center w-72 h-72 bg-white rounded-full overflow-hidden">
                  <Lottie
                    loop
                    animationData={softwareOutsourcing}
                    play
                    style={{ width: "100%", height: "100%" }}
                    className={`${
                      Outsourcing ? "opacity-100 animate-fade-up" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
          {/* toggler */}
          <div className="flex justify-center cursor-pointer">
            <div className="bg-athenix-gray rounded-lg flex items-center">
              <div
                className={`flex px-2 md:px-8 items-center rounded-lg text-center text-athenix-dark-green h-full text-sm md:text-lg ${
                  staffAugmentation
                    ? "duration-500 bg-gray-800 text-athenix-white"
                    : ""
                }`}
                onClick={() => {
                  setStaffAugmentation(true);
                  setTeams(false);
                  setOutsourcing(false);
                }}
              >
                Take a developer
              </div>
              <div
                className={`flex px-2 py-2 md:py-4 md:px-8 items-center rounded-lg text-center text-athenix-dark-green h-full text-sm md:text-lg ${
                  teams ? "duration-500 bg-gray-800 text-athenix-white" : ""
                }`}
                onClick={() => {
                  setStaffAugmentation(false);
                  setTeams(true);
                  setOutsourcing(false);
                }}
              >
                Take a Team
              </div>
              <div
                className={`flex px-2 md:px-8 items-center rounded-lg text-center text-athenix-dark-green h-full text-sm md:text-lg ${
                  Outsourcing
                    ? "duration-500 bg-gray-800 text-athenix-white"
                    : ""
                }`}
                onClick={() => {
                  setStaffAugmentation(false);
                  setTeams(false);
                  setOutsourcing(true);
                }}
              >
                Give us a project
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
