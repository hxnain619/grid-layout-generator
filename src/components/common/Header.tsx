import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-brand-contrast">
            Grid<span className="text-brand-primary">Layout</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="backdrop-blur-md hidden md:flex flex-col items-start justify-end space-x-8 mt-16">
            {["Home", "Guidelines", "Grid Generator", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-brand-contrast/70 hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-contrast/70 hover:text-brand-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-2 py-4">
            {["Home", "Guidelines", "Grid Generator", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "px-4 py-3 rounded-xl text-brand-contrast/70 hover:text-brand-primary",
                  "bg-brand-contrast/5 backdrop-blur-sm border border-brand-contrast/20",
                  "hover:bg-brand-contrast/10 transition-all duration-200",
                  "flex items-center gap-2"
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50" />
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
