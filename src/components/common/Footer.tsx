import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-transparent text-brand-contrast p-4">
      <div className="max-w-7xl mx-auto flex flex-col items-end gap-2">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hxnain619"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-primary transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/hxnain619"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-primary transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Grid Layout Generator</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
