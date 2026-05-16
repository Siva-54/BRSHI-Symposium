import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/heronit.jpg";
import jtte from "@/assets/jtte.jpeg";
import springer from "@/assets/springer.jfif";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";

const NAV_HEIGHT = 80;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 text-primary-foreground flex flex-col h-full"
        style={{
          paddingTop: `${NAV_HEIGHT + 10}px`,
          paddingBottom: "24px",
        }}
      >

        {/* ================= TOP SECTION ================= */}
        <div className="text-center mb-8">

          {/* Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs mb-3 backdrop-blur-md">
            National Symposium 2026
          </span>

          {/* Title */}
          <h1
            className="font-extrabold leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            Building Resilient and Sustainable
            <br />
            <span className="text-accent">
              Highway Infrastructure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base opacity-90 max-w-2xl mx-auto mb-4">
            A national-level technical forum bringing together policymakers,
            engineers, researchers, and industry professionals
          </p>

          {/* Date + Location */}
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base">
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
        <div className="flex-1 flex items-center justify-center">

          <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-4 lg:gap-6 items-center">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col items-center text-center">

              {/* Countdown */}
              <div className="mb-5 flex justify-center">
                <CountdownTimer targetDate="2026-06-26T09:00:00" />
              </div>

              {/* Brochure Button */}
              <a
                href="https://drive.google.com/file/d/1M35yhO_VHLlJrNkCwm1EIlHEPWGT2bBo/view"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mb-4
                  text-sm
                  border border-white/30
                  px-5 py-2
                  rounded-xl
                  hover:bg-white/20
                  transition
                  text-orange-300
                  backdrop-blur-md
                "
              >
                📄 View Brochure
              </a>

              {/* Register Button */}
              <Link
                to="/registration"
                className="
                  btn-accent
                  px-7 py-3
                  text-sm
                  inline-flex
                  items-center
                  rounded-xl
                  shadow-lg
                "
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="w-full flex justify-center">

              <div
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  rounded-2xl
                  px-4 py-4
                  shadow-xl
                  w-full
                  max-w-sm
                "
              >

                {/* Heading */}
                <h3 className="text-lg font-semibold text-center mb-4 text-white">
                  Partner Journals
                </h3>

                {/* Journal Grid */}
                <div className="grid grid-cols-2 gap-3">

                  {/* Journal 1 */}
                  <div className="
                      group
                      bg-white
                      rounded-xl
                      overflow-hidden
                      hover:scale-[1.02]
                      transition duration-300
                      shadow-md
                    ">
                    <div className="
                      h-44
                      overflow-hidden
                    ">
                      <img
                        src={jtte}
                        alt="Transportation in Developing Economies"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Journal 2 */}
                  <div className="
                      group
                      bg-white
                      rounded-xl
                      overflow-hidden
                      hover:scale-[1.02]
                      transition duration-300
                      shadow-md
                    ">
                    <div className="
                      h-44
                      overflow-hidden
                    ">
                      <img
                        src={springer}
                        alt="Transportation Research Record"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;