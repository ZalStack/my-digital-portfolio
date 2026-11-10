// src/components/welcome/Welcome.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiTerminal, FiShield, FiCode, FiCpu, FiCompass } from "react-icons/fi";
import ThreeBackground from "../canvas/ThreeBackground";
import Hero3DCanvas from "../canvas/Hero3DCanvas";
import ErrorBoundary from "../common/ErrorBoundary";
import { personalInfo } from "../../data/portfolioData";

const Welcome = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live system clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/home");
    }, 700);
  };

  return (
    <div className="relative min-h-screen w-full bg-bg-main text-text-primary flex flex-col justify-between overflow-hidden select-none">
      {/* Three.js Interactive 3D Background */}
      <ErrorBoundary fallback={null}>
        <ThreeBackground isHeroOnly={true} />
      </ErrorBoundary>

      {/* Cybernetic Tech Grid & Radial Glow Overlay */}
      <div className="absolute inset-0 bg-grid-tech opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-accent-radial pointer-events-none opacity-60 blur-3xl" />

      {/* Cinematic Exit Portal Overlay */}
      <AnimatePresence>
        {isExiting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-bg-main flex items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-accent-purple border-t-accent-red animate-spin" />
              <p className="font-mono text-sm tracking-widest text-text-secondary uppercase">
                // Initializing Workspace Architecture...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP STATUS HUD BAR */}
      <header className="relative z-10 w-full px-6 py-6 md:px-12 flex items-center justify-between border-b border-border-dark/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-purple opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-purple" />
          </div>
          <span className="font-mono text-xs tracking-wider text-text-secondary">
            SYS_STATUS: <span className="text-emerald-400 font-semibold">ONLINE</span>
          </span>
          <span className="hidden sm:inline text-border-dark">|</span>
          <span className="hidden sm:inline font-mono text-xs text-text-muted">
            LOC: JAKARTA (IDN)
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="font-mono text-xs text-text-secondary flex items-center gap-2">
            <FiTerminal className="text-accent-red" />
            <span>UTC+7 {currentTime || "00:00:00"}</span>
          </div>
          <span className="hidden md:inline px-2.5 py-1 text-[11px] font-mono rounded border border-border-dark bg-surface-card/60 text-text-muted">
            V2.5.0
          </span>
        </motion.div>
      </header>

      {/* CENTER HERO CONTENT */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 max-w-6xl mx-auto w-full text-center py-10">
        {/* Software Engineer Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-card/90 border border-border-dark/80 backdrop-blur-md mb-6 shadow-neon-purple/10"
        >
          <FiCode className="text-accent-purple text-sm animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            {personalInfo.role} &bull; {personalInfo.subRole}
          </span>
        </motion.div>

        {/* 3D Interactive Emblem in the background of hero text */}
        <div className="w-44 h-44 sm:w-56 sm:h-56 -mb-6 sm:-mb-8 relative z-0 opacity-90">
          <ErrorBoundary fallback={null}>
            <Hero3DCanvas />
          </ErrorBoundary>
        </div>

        {/* Full Name Prominently Displayed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.05]">
            <span className="block text-text-primary">
              MUHAMMAD FAKHRIZAL
            </span>
            <span className="block text-gradient mt-1 drop-shadow-sm">
              GARNINDYO
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed mb-8 font-sans px-4"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Quick Highlights Pill Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-xl text-xs font-mono text-text-muted"
        >
          <span className="px-3 py-1 rounded bg-surface/80 border border-border-dark flex items-center gap-1.5 hover:border-accent-purple/50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" /> Fullstack @ Parthaistic
          </span>
          <span className="px-3 py-1 rounded bg-surface/80 border border-border-dark flex items-center gap-1.5 hover:border-accent-red/50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-red" /> SE Assistant Lecturer STT NF
          </span>
          <span className="px-3 py-1 rounded bg-surface/80 border border-border-dark flex items-center gap-1.5 hover:border-accent-purple/50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" /> GDGoC Core Team
          </span>
        </motion.div>

        {/* ENTER PORTFOLIO CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative group"
        >
          {/* Ambient Glow behind button */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent-purple to-accent-red opacity-50 blur-lg group-hover:opacity-100 group-hover:blur-xl transition duration-500" />

          <button
            onClick={handleEnter}
            className="relative flex items-center gap-3.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl bg-surface-card border border-border-light hover:border-accent-purple/60 text-white font-medium text-base tracking-wide transition-all duration-300 transform group-hover:-translate-y-0.5 active:translate-y-0 shadow-2xl"
            aria-label="Enter Digital Portfolio"
          >
            <span className="font-semibold tracking-wider font-display">
              ENTER PORTFOLIO
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
              <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </motion.div>

        {/* Micro helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-mono text-[11px] text-text-muted mt-5"
        >
          Press to launch cinematic experience &bull; Press <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border-dark text-text-secondary">Enter</kbd> anytime
        </motion.p>
      </main>

      {/* FOOTER BAR */}
      <footer className="relative z-10 w-full px-6 py-4 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border-dark/60 text-xs font-mono text-text-muted backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Muhammad Fakhrizal Garnindyo</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <FiCpu className="text-accent-purple" /> Three.js + WebGL 60FPS
          </span>
          <span className="flex items-center gap-1.5">
            <FiShield className="text-accent-red" /> WCAG AA Compliant
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;