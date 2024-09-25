import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/athenix-logo-no-background.png";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-athenix-dark-green">
      <div className="flex justify-between items-center mt-4 mb-4 mx-auto px-4 sm:px-8">
        <div className="hidden md:flex md:grow  items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex flex-row items-center shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="w-36 md:w-64 block" aria-label="Athenix">
              <Image
                src={Logo}
                alt="logo"
                // width={180}
                // height={80}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Link>
            {/* <div className="text- text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
              Athenix
            </div> */}
          </div>

          {/* <div className="flex flex-row items-center shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <div className="text- text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                About Us
              </div>
            </Link>
          </div> */}

          <div className="flex flex-row items-center justify-center shrink-0 mr-4 ">
            {/* Logo */}
            <div className="text-white-600 hover:text-athenix-gray px-4 py-3 flex items-center transition duration-150 ease-in-out">
              <Link href="#portfolio">Our Work</Link>
            </div>
            <div className="text-white-600 hover:text-athenix-gray px-4 py-3 flex items-center transition duration-150 ease-in-out">
              <Link href="#testimonials">Testimonials</Link>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <a
                className="btn text-black bg-athenix-white hover:bg-athenix-gray hover:text-black w-auto  "
                href="https://calendly.com/athenix-discovery-call/30min"
                target="_blank"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          {/* <nav className="hidden md:flex md:grow"> */}
          {/* Desktop sign in links */}
          {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul> */}
          {/* </nav> */}
        </div>
        <MobileMenu />
        <div className="md:hidden" data-aos="fade-up" data-aos-delay="400">
          <a
            className="btn text-black bg-athenix-white hover:bg-athenix-gray hover:text-black w-auto  "
            href="https://calendly.com/athenix-discovery-call/30min"
            target="_blank"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
