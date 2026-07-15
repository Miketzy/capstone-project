import React from "react";
import { Facebook, Mail, Github } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-[#379564] to-[#22573b] text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Copyright */}
        <p className="text-sm text-center sm:text-left text-white/90">
          © {year} <span className="font-semibold">Dav-Or BioExplorer</span>. All rights reserved.
        </p>

        {/* Center: Quick links */}
        <div className="flex items-center gap-4 text-sm text-white/80">
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Email"
            className="text-white/80 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Github"
            className="text-white/80 hover:text-white transition-colors"
          >
          
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;