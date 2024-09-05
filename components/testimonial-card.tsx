import Image, { StaticImageData } from "next/image";
import ModalVideo from "@/components/modal-video";

type TestimonialCardProps = {
  src: StaticImageData;
  videoThumbnail: StaticImageData;
  name: string;
  company: string;
  quote: string;
  linkedIn: string;
  companyLink: string;
  videoLink: string;
};

export default function TestimonialCard({
  src,
  videoThumbnail,
  name,
  company,
  quote,
  companyLink,
  linkedIn,
  videoLink,
}: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col p-6 bg-gray-800 mx-8 my-4 w-80 min-h-[500px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div>
        <div className="relative inline-flex flex-col mb-4">
          <Image
            className="rounded-full"
            src={src}
            width={48}
            height={48}
            alt="Testimonial 02"
          />
          <svg
            className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-athenix-bright-green"
            viewBox="0 0 24 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
          </svg>
        </div>
      </div>
      <ModalVideo
        thumb={videoThumbnail}
        thumbWidth={1024}
        thumbHeight={576}
        thumbAlt="Modal video thumbnail"
        video={videoLink}
        videoWidth={1920}
        videoHeight={1080}
      />
      <blockquote className="text-lg text-gray-400 mt-4 grow">
        {quote}
      </blockquote>
      <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex justify-between items-center">
        <a
          href={linkedIn}
          className="text-gray-200 not-italic flex items-center"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
          </svg>

          {name}
        </a>{" "}
        -{" "}
        <a
          className="text-athenix-bright-green hover:text-gray-200 transition duration-150 ease-in-out"
          href={companyLink}
        >
          {company}
        </a>
      </div>
    </div>
  );
}
