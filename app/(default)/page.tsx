export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/skills";
import Newsletter from "@/components/schedule-consultation";
import Testimonials from "@/components/testimonials";
import PortfolioCarousel from "@/components/portfolio-carousel";
import WaysWeCanWorkWithYou from "@/components/ways-we-can-work-with-you";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioCarousel />
      {/* <Testimonials /> */}
      <WaysWeCanWorkWithYou />
      <Features />
      <Newsletter />
    </>
  );
}
