import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import brshi_logo from "@/assets/BRSHI_Logo.jpeg";
import { NavLink } from "./NavLink";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Registration", to: "/registration" },
  { label: "Call for Abstract", to: "/abstract" },
  { label: "Speakers", to: "/speakers" },
  { label: "Committee", to: "/committee" },
  { label: "Contact", to: "/contact" },
];

const NAV_HEIGHT = 80;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Header becomes solid on scroll OR non-home pages
  const isSolid = isHome ? isScrolled : true;

  // Text color handling
  const textColor = isSolid
    ? "text-foreground"
    : "text-primary-foreground";

  const activeClass = isSolid
    ? "text-primary bg-primary/10"
    : "text-primary-foreground font-semibold";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background styles
  const headerStyle = isHome
    ? isScrolled
      ? "bg-background/95 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-background shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle}`}
      style={{ height: `${NAV_HEIGHT}px` }} // 👈 fixed height
    >
      <div className="section-container h-full">
        <div className="flex items-center justify-between h-full">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src={logo}
              alt="NIT Rourkela Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <img
              src={brshi_logo}
              alt="BRSHI Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />

            <div className={`hidden sm:block ${textColor}`}>
              <p className="text-[10px] md:text-xs font-medium opacity-80">
                Dept. of Civil Engineering
              </p>
              <p className="text-xs md:text-sm font-bold">
                NIT Rourkela
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`
                  px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${isSolid
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }
                `}
                activeClassName={activeClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition ${textColor}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    px-4 py-3 rounded-lg transition-colors font-medium
                    text-foreground hover:text-primary hover:bg-primary/5
                  "
                  activeClassName="text-primary bg-primary/10"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;