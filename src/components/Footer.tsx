import nitLogo from "@/assets/logo.png";
import { Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Info */}
          <div className="flex items-start gap-4">
            <img
              src={nitLogo}
              alt="NIT Rourkela"
              className="w-16 h-16 bg-white rounded-lg p-1"
            />
            <div>
              <h3 className="font-heading font-bold text-lg mb-1">BRSHI 2026</h3>
              <p className="text-sm opacity-80">Department of Civil Engineering</p>
              <p className="text-sm opacity-80">NIT Rourkela, Odisha</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/home" className="hover:opacity-100 transition-opacity">
                  About Symposium
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:opacity-100 transition-opacity">
                  Registration
                </a>
              </li>
              <li>
                <a href="/abstract" className="hover:opacity-100 transition-opacity">
                  Submit Abstract
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:brshinitrkl2k26@gmail.com" className="hover:opacity-100">
                  brshinitrkl2k26@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>NIT Rourkela, Odisha, India - 769008</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} BRSHI | National Institute of Technology Rourkela. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
