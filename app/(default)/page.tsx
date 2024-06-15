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

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioCarousel />
      <Zigzag />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  );
}
