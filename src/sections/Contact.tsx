"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  X,
  Twitter,
} from "lucide-react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
              {/* <h2 className="font-serif text-2xl md:text-3xl">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p> */}
            </div>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Card Style */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <Card className="max-w-5xl w-full px-8 py-10 relative bg-gray-900">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <X size={28} strokeWidth={2} />
            </button>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: Contact Details */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="text-emerald-400 w-6 h-6" />
                  <a
                    href="mailto:yasirnmn@gmail.com"
                    className="text-lg text-white/80 hover:text-emerald-400 transition"
                  >
                    yasirnmn@gmail.com
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <Phone className="text-emerald-400 w-6 h-6" />
                  <a
                    href="https://wa.me/923171648131"
                    target="_blank"
                    className="text-lg text-white/80 hover:text-emerald-400 transition"
                  >
                    0317-1648131
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 mt-6">
                  <a
                    href="https://x.com/Ysirm1?t=whB_JqN24Z1pEBXmlbeOhA&s=09"
                    target="_blank"
                    className="text-lg text-white/80 hover:text-emerald-400 transition"
                  >
                    <Twitter size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yasir-noman-a456aa229/"
                    target="_blank"
                    className="text-white hover:text-emerald-400 transition"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="https://www.facebook.com/yasir.noman.316804/"
                    target="_blank"
                    className="text-white hover:text-emerald-400 transition"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/yasirnmn/"
                    target="_blank"
                    className="text-white hover:text-emerald-400 transition"
                  >
                    <Instagram size={28} />
                  </a>
                </div>
              </div>

              {/* Right: Google Map */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1701.768882133554!2d74.281024!3d31.45439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016f5d621e1f%3A0xd3f7a72c42bfa0f0!2sPlot%20234%2C%20Block%20A%20Revenue%20Society%20Block%20A%20Revenue%20Employees%20Cooperative%20Housing%20Society%2C%20Lahore%2C%2054770%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1753534970128!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
