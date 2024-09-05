import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import OctilearnLinkedInPicture from "@/public/images/octilearn_linkedin_picture.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";
import TestimonialCard from "./testimonial-card";
import CumulusVideoThumbnail from "@/public/images/cumulus_testimonial_thumbnail.webp";
import OctilearnVideoThumbnail from "@/public/images/octilearn_testimonial_thumbnail.webp";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="max-w-3xl mx-auto text-center text-athenix-dark-green">
              <h2 className="h1 mb-12">Don't take our word for it</h2>
            </div>

            <p className="text-xl text-gray-400">
              Our clients rave about the exceptional results and personalized
              service they receive. Discover their stories and see why they
              trust Athenix to turn their visions into reality.
            </p>
          </div>

          {/* Testimonials */}
          <div className=" mx-auto flex flex-col md:flex-row justify-center align-center items-center">
            {/* <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none"> */}
            {/* 1st testimonial */}
            <TestimonialCard
              src={TestimonialImage01}
              videoThumbnail={CumulusVideoThumbnail}
              name={"Cory Salveson"}
              company={"Cumulus Labs"}
              quote={
                "    — I would highly recommend Athenix for anyone in search of a software company that will treat you like a real partner and not just another client."
              }
              companyLink={"https://app.cumulus.world/login"}
              linkedIn={"https://www.linkedin.com/in/corysalveson/"}
              videoLink={
                "https://www.youtube.com/embed/vnP6NOPKSbw?si=la4DPKeyz6Lsj2d0"
              }
            />
            <TestimonialCard
              src={OctilearnLinkedInPicture}
              videoThumbnail={OctilearnVideoThumbnail}
              name={"Abubakar Sial"}
              company={"Octilearn"}
              quote={
                "    —  It felt like they were just an extension of our startup, so we never felt like we were their client"
              }
              companyLink={"https://app.octilearn.com/"}
              linkedIn={"https://www.linkedin.com/in/abubakar-sial/"}
              videoLink={
                "https://www.youtube.com/embed/aW96sxIFYzE?si=efkvQKJxB9Dy1ixW"
              }
            />
            {/* 3rd testimonial */}
            {/* <TestimonialCard
              src={TestimonialImage03}
              name={"Anastasia Dan"}
              company={"UX Board"}
              quote={
                "    — Athenix lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
              }
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
