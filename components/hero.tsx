import HeroIllustrationRight from "@/components/hero-illustration-right";
import HeroIllustrationLeft from "@/components/hero-illustration-left";

// Technology Icons
import AWS from "@/public/icons/aws";
import Express from "@/public/icons/express-js";
import Firebase from "@/public/icons/firebase";
import NextJS from "@/public/icons/next-js";
import NGINX from "@/public/icons/nginx";
import ReactJS from "@/public/icons/react-js";
import ReactNative from "@/public/icons/react-native";
import Supabase from "@/public/icons/supabase";

export default function Hero() {
  return (
    <section>
      <div className="relative  bg-athenix-dark-green pt-32 pb-10 md:pt-40 md:pb-4">
        <HeroIllustrationRight />
        <HeroIllustrationLeft />
        {/* Hero content split view*/}
        <div className="relative ">
          {/* Section header */}
          <div className="max-w-5xl text-athenix-gray text-left pb-8 md:pb-12 mx-4 md:mx-12 ">
            <h1
              className="text-4xl md:text-6xl mb-4 font-medium"
              data-aos="fade-up"
            >
              Partnering with Startups as If They Were Our Own
            </h1>
            <p
              className="text-xl text-athenix-gray mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              For Startups: Agile, Cost-Effective Solutions Tailored to Your
              Fast-Paced Needs
            </p>
            <div className="flex flex-col ">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-black bg-athenix-white hover:bg-athenix-gray hover:text-black w-auto mb-4 "
                  href="https://calendly.com/athenix-discovery-call/30min"
                  target="_blank"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-row justify-start pl-8">
          <p
            className="text-xl text-gray-400 mb-8 mr-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <NextJS />
          </p>
          <p
            className="text-xl text-gray-400 mb-8 mr-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ReactJS />,
          </p>
          <p
            className="text-xl text-gray-400 mb-8 mr-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Firebase />
          </p>
          <p
            className="text-xl text-gray-400 mb-8 mr-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Supabase />
          </p>

          <p
            className="text-xl text-gray-400 mb-8 mr-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <AWS />
          </p>
        </div> */}
      </div>
    </section>
  );
}
