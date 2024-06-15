import HeroIllustrationRight from "@/components/hero-illustration-right";
import HeroIllustrationLeft from "@/components/hero-illustration-left";

export default function Hero() {
  return (
    <section>
      <div className="relative  bg-athenix-dark-green">
        <HeroIllustrationRight />
        <HeroIllustrationLeft />

        {/* Hero content split view*/}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-5xl mx-auto text-athenix-gray text-left pb-12 ml-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Trusted by startups all over the world
            </h1>
            <p
              className="text-xl text-athenix-gray mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Onboard Top-Tier Developers in as Little as 48 Hours.
            </p>
            <div className="flex flex-col ">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-black bg-athenix-white hover:bg-athenix-gray hover:text-black w-auto mb-4 "
                  href="#0"
                >
                  Tell us about your project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly">
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted call
          </p>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted call
          </p>

          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted call
          </p>

          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted call
          </p>
        </div>
      </div>
    </section>
  );
}
