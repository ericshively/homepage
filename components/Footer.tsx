import Link from "next/link";
import { ReactNode } from "react";

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://linkedin.com/in/ericshively">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/EricShively">
            Twitter
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/resume"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Resume
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/ericshively">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://instagram.com/airshively">
            Instagram
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
