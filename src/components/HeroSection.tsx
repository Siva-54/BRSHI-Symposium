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

        {/* 🔥 SCROLLING NEWS */}
        <div className="max-w-xl mx-auto w-full">
          <div
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 text-left text-xs md:text-sm cursor-pointer relative"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-accent font-semibold text-sm">
                🚨 Updates
              </h3>
              <span className="text-[10px] bg-accent/20 px-2 py-0.5 rounded animate-pulse">
                {isPaused ? "Paused" : "Live"}
              </span>
            </div>

            {/* Scroll Area */}
            <div className="overflow-hidden h-12 relative">

              {/* Fade Top */}
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-black/40 to-transparent z-10" />

              {/* Fade Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-black/40 to-transparent z-10" />

              <motion.div
                animate={{
                  y: isPaused ? 0 : ["0%", "-100%"],
                }}
                transition={{
                  duration: announcements.length * 4,
                  ease: "linear",
                  repeat: isPaused ? 0 : Infinity,
                }}
                className="flex flex-col"
              >
                {[...announcements, ...announcements].map((item, index) => (
                  <div key={index} className="py-1">
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hint */}
            <p className="text-[10px] opacity-70 mt-1 text-right">
              Tap to {isPaused ? "resume" : "pause"}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div>
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