import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/heronit.jpg";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import { useState } from "react";

const NAV_HEIGHT = 80;

const announcements = [
  "📅 Paper submission deadline extended to 22 April 2026.",
  "📘 Accepted papers will be published in Springer’s Lecture Notes in Civil Engineering.",
  "🏆 Some selected high-quality papers recommended for publication in the Journal of Traffic and Transportation Engineering (Elsevier), subject to peer review.",
];

const HeroSection = () => {
  const [showUpdates, setShowUpdates] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 text-primary-foreground flex flex-col h-full"
        style={{
          paddingTop: `${NAV_HEIGHT + 10}px`,
          paddingBottom: "20px",
        }}
      >

        {/* ================= TOP SECTION (FULL WIDTH) ================= */}
        <div className="text-center mb-6">
          
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border text-xs mb-3">
            National Symposium 2026
          </span>

          <h1
            className="font-extrabold leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
          >
            Building Resilient and Sustainable
            <br />
            <span className="text-accent">
              Highway Infrastructure
            </span>
          </h1>

          <p className="text-sm opacity-90 mb-3 max-w-2xl mx-auto">
            A national-level technical forum bringing together policymakers,
            engineers, researchers, and industry professionals
          </p>

          {/* Date + Location */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
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

        {/* ================= BOTTOM SECTION ================= */}
        <div className="flex-1 flex items-center">
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center text-center">

              {/* Countdown */}
              <div className="mb-4">
                <CountdownTimer targetDate="2026-06-26T09:00:00" />
              </div>

              {/* Brochure Button */}
             <a
              href="https://drive.google.com/file/d/1M35yhO_VHLlJrNkCwm1EIlHEPWGT2bBo/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 text-xs border border-white/30 px-3 py-1 rounded-lg hover:bg-white/20 transition text-orange-400"
            >
              📄 View Brochure
            </a>

              {/* CTA */}
              <Link
                to="/registration"
                className="btn-accent px-5 py-2 text-sm inline-flex items-center"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* RIGHT SIDE (DESKTOP UPDATES PANEL) */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 shadow-lg">
                
                <h3 className="text-accent font-semibold text-lg mb-3 text-center">
                  🚨 Latest Updates
                </h3>

                <ul className="space-y-3 text-sm max-h-[280px] overflow-y-auto pr-2">
                  {announcements.map((item, index) => (
                    <li key={index} className="border-b pb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* MOBILE UPDATES BUTTON */}
            <div className="md:hidden text-center">
              <button
                onClick={() => setShowUpdates(true)}
                className="mt-4 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm"
              >
                🚨 View Updates
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MOBILE MODAL ================= */}
      {showUpdates && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white text-black rounded-xl w-[90%] max-w-lg p-5 relative">
            
            <button
              onClick={() => setShowUpdates(false)}
              className="absolute top-2 right-3 text-lg font-bold"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-3 text-center">
              🚨 Latest Updates
            </h2>

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
    </section>
  );
};

export default HeroSection;