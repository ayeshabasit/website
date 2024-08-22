import Image from "next/image";
import dynamic from "next/dynamic";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

import Octilearn from "@/public/images/octilearn-1.png";

const AutoCarousel = dynamic(
  () => import("@/components/ui/autoscrolling-carousel"),
  {
    ssr: false,
  }
);

export default function PortfolioCarousel() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10">
          <div className="max-w-3xl mx-auto text-center text-athenix-dark-green">
            <h2 className="h1 mb-12">Our Work</h2>
          </div>
          <AutoCarousel />
        </div>
      </div>
    </section>
  );
}
