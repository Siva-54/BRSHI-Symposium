import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { NavLink } from "./NavLink";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Registration", to: "/registration" },
  { label: "Call for Abstract", to: "/abstract" },
  { label: "Speakers", to: "/speakers" },
  { label: "Committee", to: "/committee" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Solid header logic
  const isSolid = isHome ? isScrolled : true;

  // Text color based on header background
  const textColor = isSolid ? "text-foreground" : "text-primary-foreground";

  // Active class for NavLink
  const activeClass = isSolid
    ? "text-primary bg-primary/10"
    : "text-primary-foreground font-semibold"; // Transparent header → no green

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header background style
  const headerStyle = isHome
    ? isScrolled
      ? "bg-background/95 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-background shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle}`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="NIT Rourkela Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <div className={`hidden sm:block ${textColor}`}>
              <p className="text-xs font-medium opacity-80">
                Dept. of Civil Engineering
              </p>
              <p className="text-sm font-bold">NIT Rourkela</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`
                  px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    textColor === "text-foreground"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${textColor}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 rounded-lg transition-colors font-medium
                    ${textColor}
                    hover:text-primary hover:bg-primary/5
                  `}
                  activeClassName={activeClass}
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
