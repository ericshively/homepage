import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition flex items-center gap-2"
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
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Contact : eric (at) exoroad (dot) com
      </p>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <ExternalLink href="/Eric_Shively_Resume.pdf">
            <FaFilePdf /> Resume
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://linkedin.com/in/ericshively">
            <FaLinkedin /> LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/EricShively">
            <FaSquareXTwitter /> / Twitter
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/ericshively">
            <FaGithub /> GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://instagram.com/airshively">
            <FaInstagram /> Instagram
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
