import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/heronit.jpg";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import { useState } from "react";

const NAV_HEIGHT = 80;

const announcements = [
  "📅 The deadline for submission of extended abstract has been extended to 15 April 2026.",
  "📘 Accepted papers will be published in Springer’s Lecture Notes in Civil Engineering.",
  "🏆 Some selected high-quality papers recommended for publication in the Journal of Traffic and Transportation Engineering (Elsevier), subject to peer review.",
];

const HeroSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col justify-between h-full text-center text-primary-foreground"
        style={{
          paddingTop: `${NAV_HEIGHT + 10}px`,
          paddingBottom: "16px",
        }}
      >

        {/* TOP */}
        <div>
          <motion.div className="mb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border text-xs">
              National Symposium 2026
            </span>
          </motion.div>

          <motion.h1
            className="font-extrabold leading-tight mb-2"
            style={{
              fontSize: "clamp(1.6rem, 3.8vw, 3.2rem)",
            }}
          >
            Building Resilient and Sustainable
            <br />
            <span className="text-accent">
              Highway Infrastructure
            </span>
          </motion.h1>

          <p className="text-xs md:text-sm opacity-90 mb-2 max-w-xl mx-auto">
            A national-level technical forum bringing together policymakers,
            engineers, researchers, and industry professionals
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs md:text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-accent" />
              June 26–28, 2026
            </div>

            <div className="hidden sm:block w-px h-4 bg-white/30" />

            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-accent" />
              NIT Rourkela
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div className="scale-90 md:scale-100">
          <CountdownTimer targetDate="2026-06-26T09:00:00" />
        </div>

        {/* ✅ UPDATES BOX */}
        <div className="max-w-xl mx-auto w-full">
          <div
            onClick={() => setShowUpdates(true)}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center cursor-pointer hover:bg-white/20 transition"
          >
            <h3 className="text-accent font-semibold text-sm mb-1">
              🚨 Updates
            </h3>
            <p className="text-xs opacity-80">
              Click to view updates
            </p>
          </div>
        </div>
        {showUpdates && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            
            {/* Modal Box */}
            <div className="bg-white text-black rounded-xl w-[90%] max-w-lg p-5 relative shadow-xl">
              
              {/* Close Button */}
              <button
                onClick={() => setShowUpdates(false)}
                className="absolute top-2 right-3 text-lg font-bold"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-3 text-center">
                🚨 Latest Updates
              </h2>

              {/* Updates List */}
              <ul className="space-y-2 text-sm">
                {announcements.map((item, index) => (
                  <li key={index} className="border-b pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mb-2">
          <Link to="/registration" className="btn-accent px-5 py-2 text-sm">
            Register Now
            <ArrowRight className="ml-2 w-4 h-4 inline" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;