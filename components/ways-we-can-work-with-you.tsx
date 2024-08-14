"use client";
import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";
import Octilearn from "@/public/images/octilearn-1.png";
import { useState } from "react";

import Lottie from "react-lottie-player";

import staffAugmentationLottie from "@/public/lottie/staff_augmentation.json";

export default function WaysWeCanWorkWithYou() {
  const [staffAugmentation, setStaffAugmentation] = useState<boolean>(true);
  const [teams, setTeams] = useState<boolean>(false);
  const [Outsourcing, setOutsourcing] = useState<boolean>(false);
  return (
    <section>
      <div className="bg-athenix-dark-green w-full mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Flexible Ways We Can Work With You</h1>
            {staffAugmentation && (
              <div className="flex flex-row justify-between  align-center items-center ">
                <p
                  className={`text-xl text-gray-400 transition-opacity duration-500 ease-out ${
                    staffAugmentation
                      ? "opacity-100 animate-fade-up"
                      : "opacity-0"
                  }`}
                >
                  Our software developers in your team.
                </p>
                <Lottie
                  loop
                  animationData={staffAugmentationLottie}
                  play
                  style={{ width: 400, height: 400 }}
                  className={`${
                    staffAugmentation
                      ? "opacity-100 animate-fade-up"
                      : "opacity-0"
                  }`}
                />
              </div>
            )}
            {teams && (
              <div className="flex flex-row justify-between  align-center items-center ">
                <p
                  className={`text-xl text-gray-400 transition-opacity duration-500 ease-out ${
                    teams ? "opacity-100 animate-fade-up" : "opacity-0"
                  }`}
                >
                  Our teams in your organization.
                </p>
                <Lottie
                  loop
                  animationData={staffAugmentationLottie}
                  play
                  style={{ width: 400, height: 400 }}
                  className={`${
                    teams ? "opacity-100 animate-fade-up" : "opacity-0"
                  }`}
                />{" "}
              </div>
            )}
            {Outsourcing && (
              <div className="flex flex-row justify-between  align-center items-center ">
                <p
                  className={`text-xl text-gray-400 transition-opacity duration-500 ease-out ${
                    Outsourcing ? "opacity-100 animate-fade-up" : "opacity-0"
                  }`}
                >
                  Our PM and software developments teams building for you.
                </p>
                <Lottie
                  loop
                  animationData={staffAugmentationLottie}
                  play
                  style={{ width: 400, height: 400 }}
                  className={`${
                    Outsourcing ? "opacity-100 animate-fade-up" : "opacity-0"
                  }`}
                />
              </div>
            )}
          </div>
          {/* toggler */}
          <div className="w-full flex justify-center cursor-pointer">
            <div className="bg-athenix-gray h-14 rounded-lg flex items-center p-4">
              <div
                className={`rounded-lg btn text-athenix-dark-green ${
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
                Staff Augmentation
              </div>
              <div
                className={`rounded-lg btn text-athenix-dark-green ${
                  teams ? "duration-500 bg-gray-800 text-athenix-white" : ""
                }`}
                onClick={() => {
                  setStaffAugmentation(false);
                  setTeams(true);
                  setOutsourcing(false);
                }}
              >
                Software Development Teams
              </div>
              <div
                className={`rounded-lg btn text-athenix-dark-green ${
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
                Software Development Outsourcing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
