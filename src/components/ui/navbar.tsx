"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logoUrl: string;
  logoAlt: string;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function Navbar({ logoUrl, logoAlt, links, ctaLabel, ctaHref }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logoUrl} alt={logoAlt} className="h-12 md:h-14" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#111827] hover:text-[#4169E1] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-[#4169E1] hover:bg-[#3158c9] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              {ctaLabel}
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#111827] hover:text-[#4169E1] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#111827] hover:text-[#4169E1] text-base font-medium py-3 border-b border-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {ctaLabel && ctaHref && (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 bg-[#4169E1] hover:bg-[#3158c9] text-white text-center font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  {ctaLabel}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
