import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], // For Poppins
        serif: ["var(--font-serif)", "serif"], // For Calistoga
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maskImage: {
        "gradient-fade":
          " linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, transparent 100%)",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [
    function () {
      const newUtilities = {
        ".mask-gradient-lr": {
          "-webkit-mask-image":
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          "mask-image":
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        },
        ".mask-radial-gradient": {
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        },
      };

      newUtilities;
    },
  ],
};
export default config;
