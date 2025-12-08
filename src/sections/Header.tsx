import { useState, useEffect } from "react";

type HeaderSectionProps = {
  activeSection: string;
};

export const HeaderSection = ({ activeSection }: HeaderSectionProps) => {
  const [activeLink, setActiveLink] = useState("home");

  // Update active link when scrolling changes the active section
  useEffect(() => {
    if (activeSection) {
      setActiveLink(activeSection);
    }
  }, [activeSection]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#hero-section"
          className={`nav-item ${
            activeLink === "home"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>

        <a
          href="#projects-section"
          className={`nav-item ${
            activeLink === "projects"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </a>

        {/* <a
          href="#resume-section"
          className={`nav-item ${
            activeLink === "resume"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
          onClick={() => handleLinkClick("resume")}
        >
          Resume
        </a> */}

        <a
          href="#about-section"
          className={`nav-item ${
            activeLink === "about"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </a>

        <a
          href="#contact-section"
          className={`nav-item ${
            activeLink === "contact"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
