export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import PortfolioCarousel from "@/components/portfolio-carousel";
import WaysWeCanWorkWithYou from "@/components/ways-we-can-work-with-you";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioCarousel />
      <Testimonials />
      <WaysWeCanWorkWithYou />
      <Zigzag />
      <Features />
      <Newsletter />
    </>
  );
}
