// src/components/common/Footer.jsx
import React from "react";
import { FiArrowUp, FiHeart, FiCode, FiCpu, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border-dark bg-bg-main text-text-secondary pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-border-dark/60 items-center">
          
          {/* Logo & Philosophy */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-surface-card border border-border-dark flex items-center justify-center font-mono font-bold text-sm">
                <span className="text-gradient">MF</span>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Muhammad Fakhrizal Garnindyo
              </span>
            </div>
            <p className="text-xs text-text-muted max-w-md leading-relaxed font-sans">
              Dedicated Software Engineer crafting resilient cloud architectures, high-performance web systems, and modern digital products.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-accent-purple transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-accent-purple transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-accent-purple transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-accent-purple transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-accent-purple transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card border border-border-dark hover:border-accent-purple text-xs font-mono text-text-primary hover:text-white transition-all shadow-sm"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <FiArrowUp className="text-accent-purple group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Three.js + React + Tailwind</span>
            </span>
            <span className="text-border-dark">|</span>
            <span className="text-text-secondary">
              Theme: Obsidian, Violet &amp; Crimson
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
