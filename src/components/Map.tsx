import Image from "next/image";
import smileMemoji from "@/assets/images/memoji-smile.png";

export default function LocationCard() {
  return (
    <div className="h-[320px] p-0 relative rounded-2xl overflow-hidden shadow-lg">
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1701.768882133554!2d74.281024!3d31.45439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919016f5d621e1f%3A0xd3f7a72c42bfa0f0!2sPlot%20234%2C%20Block%20A%20Revenue%20Society%20Block%20A%20Revenue%20Employees%20Cooperative%20Housing%20Society%2C%20Lahore%2C%2054770%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1753534970128!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>

      {/* Animated Ping + Memoji Marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 "></div>
        <Image src={smileMemoji} alt="simle memoji" className="size-20" />
      </div>
    </div>
  );
}
