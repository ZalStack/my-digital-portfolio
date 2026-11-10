// src/components/navigation/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiTerminal,
  FiActivity,
  FiExternalLink,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ reducedMotion, toggleReducedMotion }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/85 backdrop-blur-xl border-b border-border-dark/80 shadow-card-glow py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2.5 group"
          aria-label="Muhammad Fakhrizal Garnindyo Home"
        >
          <div className="w-9 h-9 rounded-lg bg-surface-card border border-border-dark flex items-center justify-center font-mono font-bold text-sm text-text-primary group-hover:border-accent-purple group-hover:text-accent-purple transition-all duration-300 shadow-sm">
            <span className="text-gradient font-display text-base font-extrabold">MF</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-text-primary group-hover:text-white transition-colors">
              Fakhrizal<span className="text-accent-red">.dev</span>
            </span>
            <span className="font-mono text-[10px] text-text-muted flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 p-1.5 rounded-full border border-border-dark/70 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-text-secondary hover:text-white hover:bg-surface-hover/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-gradient-to-r from-accent-purple/30 to-accent-red/30 border border-accent-purple/50 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Reduced Motion Toggle Button */}
          <button
            onClick={toggleReducedMotion}
            className="p-2 rounded-lg bg-surface border border-border-dark text-text-muted hover:text-text-primary hover:border-accent-purple/50 transition-colors"
            title={reducedMotion ? "Enable full animations" : "Reduce motion for accessibility"}
            aria-label="Toggle motion setting"
          >
            {reducedMotion ? <FiEyeOff className="text-accent-red" /> : <FiActivity className="text-accent-purple" />}
          </button>

          {/* Download CV CTA */}
          <a
            href={personalInfo.cvPath}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-dark hover:border-accent-purple text-xs font-mono text-text-primary hover:text-white transition-all duration-200 shadow-sm"
          >
            <FiDownload className="text-accent-purple" />
            <span>Resume / CV</span>
          </a>

          {/* Hire / Contact Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-purple to-accent-red text-white text-xs font-mono font-semibold hover:opacity-95 transition-opacity shadow-neon-purple/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleReducedMotion}
            className="p-2 rounded-lg bg-surface border border-border-dark text-text-muted"
            aria-label="Toggle motion setting"
          >
            {reducedMotion ? <FiEyeOff className="text-accent-red" /> : <FiActivity className="text-accent-purple" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-surface border border-border-dark text-text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-card/95 backdrop-blur-2xl border-b border-border-dark px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-sm font-mono text-text-secondary hover:text-white hover:bg-surface flex items-center justify-between border border-transparent hover:border-border-dark transition-all"
                >
                  <span>{link.name}</span>
                  <span className="text-accent-purple text-xs">&rarr;</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-border-dark flex flex-col gap-2.5">
                <a
                  href={personalInfo.cvPath}
                  download
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface border border-border-dark text-xs font-mono text-text-primary"
                >
                  <FiDownload className="text-accent-purple" />
                  <span>Download Curriculum Vitae</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-purple to-accent-red text-white text-xs font-mono font-semibold"
                >
                  Initiate Project Discussion
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
