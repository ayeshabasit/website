import Link from "next/link";
import { ReactNode } from "react";

interface HeadingWithLinkProps {
  id: string;
  children: ReactNode;
}

// Reusable Heading component
export const HeadingWithLink: React.FC<HeadingWithLinkProps> = ({
  id,
  children,
}) => {
  return (
    <h2 id={id} className="group relative scroll-mt-24">
      {children}
      <a
        href={`#${id}`}
        className="ml-2 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${children}`}
      >
        #
      </a>
    </h2>
  );
};
