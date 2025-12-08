"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { GraduationCap, Layers, Download, User } from "lucide-react";
import avatarImage from "@/assets/images/memoji-avatar-1.png";
import { education, experience, summary } from "@/lib/Static-Data";
import AnimatedSection from "@/lib/Animate-on-scroll";
import { Card } from "@/components/Card";

export const ResumeSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <AnimatedSection>
          {/* Section Heading */}
          <SectionHeader
            eyebrow="My Journey"
            title="Resume"
            description="A snapshot of my education, professional experience, and summary."
          />
        </AnimatedSection>

        {/* Profile Row */}
        <AnimatedSection>
          <div className="flex flex-col items-center md:flex-row md:items-center justify-between mt-12 mb-8 md:mb-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 ml-2 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src={avatarImage}
                    alt="Muhammad Yasir"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Yasir Noman</h2>
                <p className="text-gray-400">
                  MERN Stack Developer | React.js | Next.js | Node.js |
                  Express.js | MongoDB
                </p>
              </div>
            </div>

            <a
              href="/M-Yasir.pdf"
              download
              className="mt-4 md:mt-0 bg-gradient-to-tr from-emerald-400 to-sky-500 text-white font-semibold px-4 py-3 rounded-lg inline-flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-8 mt-12">
          {/* Summary */}
          <AnimatedSection>
            <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <User className="text-emerald-400 w-6 h-6" />
                <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Summary
                </span>
              </h3>
              <div className="space-y-3 text-sm text-white/80 leading-relaxed">
                {summary.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection>
            <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <GraduationCap className="text-emerald-400 w-6 h-6" />
                <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h3>
              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                {education.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold">{item.degree}</h4>
                    <p className="text-white/70">{item.institution}</p>
                    <p className="mt-1 text-white/60">{item.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection>
            <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Layers className="text-emerald-400 w-6 h-6" />
                <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h3>
              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                {experience.map((item, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold">{item.role}</h4>
                    <p className="font-medium">
                      {item.company} {item.year && `• ${item.year}`}
                    </p>
                    <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
