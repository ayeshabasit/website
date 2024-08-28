import Image from "next/image";
import dynamic from "next/dynamic";

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
