// src/components/home/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiTerminal,
  FiCheckCircle,
  FiLayers,
} from "react-icons/fi";
import Hero3DCanvas from "../canvas/Hero3DCanvas";
import ErrorBoundary from "../common/ErrorBoundary";
import { personalInfo } from "../../data/portfolioData";

const HeroSection = ({ reducedMotion }) => {
  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Laravel",
    "Node.js",
    "Three.js",
    "MySQL",
    "Docker",
    "REST APIs",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO HEADLINE & ACTIONS */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Live Availability Badge */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: -15 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card border border-border-dark text-xs font-mono text-text-secondary mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            {/* Sub-eyebrow */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0 }}
              animate={reducedMotion ? {} : { opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="h-px w-6 bg-accent-purple" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-purple font-semibold">
                Software Engineer &bull; Fullstack Developer
              </span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h1
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-text-primary leading-[1.1] mb-6"
            >
              Building Resilient{" "}
              <span className="text-gradient">Architectures</span> &amp; High-Impact Digital Solutions.
            </motion.h1>

            {/* Bio summary */}
            <motion.p
              initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
            >
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. I design and engineer scalable web ecosystems, robust backend services, and immersive interactive web experiences with clean, testable code.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-red text-white text-sm font-semibold tracking-wide hover:shadow-neon-dual transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="text-base" />
              </a>

              <a
                href={personalInfo.cvPath}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-card border border-border-dark hover:border-accent-purple text-text-primary hover:text-white text-sm font-mono transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FiDownload className="text-accent-purple" />
                <span>Download CV</span>
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2.5 mt-2 sm:mt-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-surface border border-border-dark text-text-secondary hover:text-white hover:border-accent-purple transition-all"
                  aria-label="GitHub Profile"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-surface border border-border-dark text-text-secondary hover:text-white hover:border-accent-purple transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics Cards */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-border-dark"
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs text-text-muted mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 3D HOLOGRAPHIC CORE EMBLEM */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing backdrop circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent-purple/10 blur-3xl pointer-events-none" />
            
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-surface/50 border border-border-dark/80 backdrop-blur-sm p-4 flex flex-col items-center justify-center shadow-card-glow overflow-hidden">
              {/* Terminal corner badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[11px] text-text-muted">
                <FiTerminal className="text-accent-red" />
                <span>3D_ENGINE // THREE.JS</span>
              </div>
              
              <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[10px] text-accent-purple px-2 py-0.5 rounded bg-accent-purple/10 border border-accent-purple/20">
                <span>INTERACTIVE</span>
              </div>

              {/* 3D Canvas Container */}
              <div className="w-full h-full flex items-center justify-center pt-4">
                <ErrorBoundary fallback={null}>
                  <Hero3DCanvas reducedMotion={reducedMotion} />
                </ErrorBoundary>
              </div>

              {/* Bottom engineering note */}
              <div className="w-full pt-2 flex items-center justify-between border-t border-border-dark/60 font-mono text-[10px] text-text-muted">
                <span>CORE: WIREFRAME_MESH</span>
                <span className="text-emerald-400">60 FPS REALTIME</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TECH STACK TICKER */}
        <div className="mt-16 pt-8 border-t border-border-dark/60">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4 text-center sm:text-left">
            Core Engineering Stack
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-surface-card border border-border-dark hover:border-accent-purple/50 text-xs font-mono text-text-secondary hover:text-white transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
