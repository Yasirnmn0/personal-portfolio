"use client";

import { HeaderSection } from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectSection from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ResumeSection } from "@/sections/Resume";

import { useRef, useEffect, useState } from "react";

type SectionId = "home" | "projects" | "resume" | "about" | "contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const heroRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current)
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    if (contactRef.current)
      contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections: Array<{ id: SectionId; hash: string }> = [
      { id: "home", hash: "hero-section" },
      { id: "projects", hash: "projects-section" },
      { id: "resume", hash: "resume-section" },
      { id: "about", hash: "about-section" },
      { id: "contact", hash: "contact-section" },
    ];

    // improved offset so Home activates correctly when scrolling up
    const activationOffset = 120;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        updateActiveByDistance();
        ticking = false;
      });
    };

    const updateActiveByDistance = () => {
      let best: { id: SectionId; hash: string } | null = null;
      let bestDistance = Infinity;

      for (const s of sections) {
        const el = document.getElementById(s.hash);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - activationOffset);

        if (distance < bestDistance) {
          bestDistance = distance;
          best = s;
        }
      }

      if (best && best.id !== activeSection) {
        setActiveSection(best.id);

        const newHash = `#${best.hash}`;
        if (window.location.hash !== newHash) {
          history.replaceState(null, "", newHash);
        }
      }
    };

    updateActiveByDistance();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeSection]);

  return (
    <div>
      <HeaderSection activeSection={activeSection} />

      <div id="hero-section" ref={heroRef}>
        <HeroSection
          onScrollToProjects={scrollToProjects}
          onScrollToContact={scrollToContact}
        />
      </div>

      <div
        id="projects-section"
        ref={projectsRef}
        className="scroll-mt-24 min-h-[500px]"
      >
        <ProjectSection />
      </div>

      <div id="resume-section" ref={resumeRef}>
        <ResumeSection />
      </div>

      <div id="tape-section">
        <TapeSection />
      </div>

      <div id="about-section" ref={aboutRef}>
        <AboutSection />
      </div>

      <div id="contact-section" ref={contactRef} className="scroll-mt-24">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
