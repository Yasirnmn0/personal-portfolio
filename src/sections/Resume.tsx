"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { GraduationCap, Layers, Download, User } from "lucide-react";
import avatarImage from "@/assets/images/memoji-avatar-1.png";
import { education, experience, summary } from "@/lib/Static-Data";

export const ResumeSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Heading */}
        <SectionHeader
          eyebrow="My Journey"
          title="Resume"
          description="A snapshot of my education, professional experience, and summary."
        />

        {/* Profile Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 mb-16">
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
                MERN Stack Developer | React.js | Next.js | Node.js | Express.js
                | MongoDB
              </p>
            </div>
          </div>

          {/* Download Resume Button */}
          {/* <button className="mt-6 md:mt-0 bg-gradient-to-tr from-emerald-400 to-sky-500 text-white font-semibold px-4 py-3 rounded-lg inline-flex items-center gap-2 transition-transform hover:scale-105">
            <Download size={20} />
            Download Resume
          </button> */}
          <a
            href="/M-Yasir.pdf"
            download
            className="mt-6 md:mt-0 bg-gradient-to-tr from-emerald-400 to-sky-500 text-white font-semibold px-4 py-3 rounded-lg inline-flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="mt-12 lg:mt-20 flex overflow-x-clip mask-gradient py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left animation-durationcards hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <div key={index} className="flex gap-8">
                {/* Education Card */}
                <Card className="max-w-xs md:max-w-md p-6 md:p-8 flex flex-col items-center text-center hover:-rotate-3 transition duration-300">
                  <GraduationCap className="text-emerald-400 w-10 h-10 mb-3" />
                  <h3 className="text-xl font-semibold mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-medium">{item.degree}</h4>
                        <p className="text-sm text-white/70">
                          {item.institution}
                        </p>
                        <p className="text-sm mt-2 text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Experience Card */}
                <Card className="max-w-xs md:max-w-md p-6 md:p-8 flex flex-col items-center text-center hover:rotate-3 transition duration-300">
                  <Layers className="text-emerald-400 w-10 h-10 mb-3" />
                  <h3 className="text-xl font-semibold mb-6">Experience</h3>
                  <div className="space-y-6">
                    {experience.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold">{item.role}</h4>
                        <p className="text-sm text-white/70 mb-2">
                          {item.company} {item.year && `• ${item.year}`}
                        </p>
                        <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Summary Card */}
                <Card className="max-w-xs md:max-w-md p-6 md:p-8 flex flex-col items-center text-center hover:-rotate-3 transition duration-300">
                  <User className="text-emerald-400 w-10 h-10 mb-3" />
                  <h3 className="text-xl font-semibold mb-6">Summary</h3>
                  <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
                    {summary}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
