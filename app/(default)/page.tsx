export const metadata = {
  title: "Athenix",
  description:
    "Transforming your idea into an MVP with Supabase, Next.js, and React Native",
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
      <Testimonials />
      <WaysWeCanWorkWithYou />
      <Features />
      <Newsletter />
    </>
  );
}
