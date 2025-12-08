"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Mail, Phone, X } from "lucide-react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import AnimatedSection from "@/lib/Animate-on-scroll";
import { toast } from "react-hot-toast";

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  interface ApiResponse {
    success?: string;
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: any = await res.json(); // <-- any type

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Network error.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            />
            <AnimatedSection>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">
                    Let&apos;s Create Something Amazing Together
                  </h2>
                  <p className="text-sm md:text-base mt-2">
                    Ready to bring your next project to life? Let&apos;s connect
                    and discuss how I can help you achieve your goals.
                  </p>
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
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <Card className="max-w-3xl w-full px-8 py-10 relative bg-gray-900">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <X size={28} strokeWidth={2} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-tr from-emerald-400 to-sky-500 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <p className="text-green-400 mt-2">{success}</p>}
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
