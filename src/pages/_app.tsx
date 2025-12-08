import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Calistoga } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans", // Body text
  weight: ["300", "400", "500", "600", "700"],
});

export const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif", // Headings
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${calistoga.variable}`}>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </div>
  );
}
