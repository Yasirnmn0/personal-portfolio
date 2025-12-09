"use client";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import React, { forwardRef, useState } from "react";
import { X, ArrowRightCircle } from "lucide-react";
import { ProtfolioProjects } from "@/lib/Static-Data";
import AnimatedSection from "@/lib/Animate-on-scroll";

const ProjectSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section ref={ref} className="pb-16 lg:py-24">
      <div className="container">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Real-world Results"
            title="Featured Projects"
            description="See how I transformed concepts into engaging digital experiences."
          />
        </AnimatedSection>
        {/* New Headings */}
        {/* <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
              Real-world Results
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            Featured Projects
          </h2> */}

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {ProtfolioProjects.map((project, idx) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-0"
              style={{ top: `calc(64px + ${idx * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.result.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-full flex flex-col md:flex-col lg:flex-row xl:flex-col gap-4 mt-8 items-center lg:items-start">
                    <a href={project.link} className="w-full">
                      <button className="w-full bg-white text-gray-950 h-12 px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>

                    <button
                      className="w-full bg-gradient-to-l from-emerald-300 to-sky-400 text-white h-12 px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                      onClick={() => setSelectedProject(idx)}
                    >
                      <span>Read More</span>
                      <ArrowRightCircle size={22} strokeWidth={2} />
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal: Only Card Style + Full Details */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <Card className="max-w-5xl w-full px-8 py-10 relative">
            {/* Close Button with Lucide Icon */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <X size={28} strokeWidth={2} />
            </button>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Project Heading */}

              <div>
                {/* Project Heading */}
                <h2 className="text-3xl font-bold text-white mb-6">
                  {ProtfolioProjects[selectedProject].title}
                </h2>
                {/* Project Details with Check Icons */}
                <div className="space-y-4 text-white/80">
                  {ProtfolioProjects[selectedProject].fullDetails.map(
                    (result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50 list-none"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 text-green-500" />
                        <span>{result.title}</span>
                      </li>
                    )
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <Image
                  src={ProtfolioProjects[selectedProject].image}
                  alt={ProtfolioProjects[selectedProject].title}
                  className="rounded-lg max-h-72 object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </section>
  );
});

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
