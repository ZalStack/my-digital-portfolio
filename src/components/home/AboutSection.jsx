// src/components/home/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMapPin,
  FiMail,
  FiDownload,
  FiAward,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiCompass,
} from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";

const AboutSection = ({ reducedMotion }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-purple font-semibold">
              01 // Background &amp; Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary">
            Engineering with <span className="text-gradient">Precision</span> &amp; Purpose
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-2xl">
            A deep dive into my professional journey, software engineering standards, and how I bridge technical robustness with seamless usability.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: PROFILE PHOTO & STATUS CARD */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Layered glowing gradient border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-purple/40 to-accent-red/40 opacity-70 blur-md group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-surface-card border border-border-dark p-4 overflow-hidden">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-surface">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Role Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-surface/90 backdrop-blur-md border border-border-dark flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-sm text-text-primary">
                        {personalInfo.name}
                      </p>
                      <p className="font-mono text-[11px] text-accent-purple">
                        {personalInfo.role}
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Quick Info Specs */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-border-dark/60">
                    <span className="text-text-muted flex items-center gap-2">
                      <FiMapPin className="text-accent-red" /> Location
                    </span>
                    <span className="text-text-primary font-medium">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-dark/60">
                    <span className="text-text-muted flex items-center gap-2">
                      <FiMail className="text-accent-purple" /> Direct Contact
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-text-primary hover:text-accent-purple transition-colors truncate max-w-[200px]"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-text-muted flex items-center gap-2">
                      <FiAward className="text-accent-purple" /> Focus Area
                    </span>
                    <span className="text-emerald-400 font-semibold">Fullstack Architecture</span>
                  </div>
                </div>

                {/* Download CV CTA */}
                <div className="mt-6 pt-4 border-t border-border-dark">
                  <a
                    href={personalInfo.cvPath}
                    download
                    className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-surface border border-border-dark hover:border-accent-purple text-xs font-mono text-white transition-all duration-300 hover:shadow-neon-purple/20"
                  >
                    <FiDownload className="text-accent-purple" />
                    <span>Download Official CV (.PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: COMPREHENSIVE BIO & ENGINEERING PILLARS */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Detailed Bio Paragraphs */}
            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              {personalInfo.bio.map((para, idx) => (
                <p key={idx} className="bg-surface/30 p-4 rounded-xl border border-border-dark/50">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Engineering Principles */}
            <div>
              <h3 className="text-xl font-bold font-display text-text-primary mb-4 flex items-center gap-2">
                <FiCompass className="text-accent-red" />
                <span>Core Engineering Principles</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-surface-card border border-border-dark hover:border-accent-purple/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border-dark flex items-center justify-center font-mono text-xs font-bold text-accent-purple mb-3">
                        0{idx + 1}
                      </div>
                      <h4 className="font-display font-bold text-sm text-text-primary mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Professional Credentials Strip */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-surface-card to-surface border border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                  <FiCpu size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    STT Terpadu Nurul Fikri
                  </h4>
                  <p className="font-mono text-xs text-text-muted">
                    Informatics Engineering &bull; Software Engineering Teaching Assistant
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded bg-surface border border-border-dark text-text-secondary">
                2022 - Present
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
