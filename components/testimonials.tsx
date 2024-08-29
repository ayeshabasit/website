import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";
import TestimonialCard from "./testimonial-card";

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
          <div className="max-w-sm mx-auto flex justify-center align-center">
            {/* <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none"> */}
            {/* 1st testimonial */}
            <TestimonialCard
              src={TestimonialImage01}
              name={"Cory Salveson"}
              company={"Cumulus Labs"}
              quote={
                "    — I would highly recommend Athenix for anyone in search of a software company that will treat you like a real partner and not just another client."
              }
              companyLink={"https://app.cumulus.world/login"}
              linkedIn={"https://www.linkedin.com/in/corysalveson/"}
            />
            {/* <TestimonialCard
              src={TestimonialImage02}
              name={"Anastasia Dan"}
              company={"UX Board"}
              quote={
                "    — Athenix lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
              }
            /> */}
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
