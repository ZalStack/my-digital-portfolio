// src/pages/HomePage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navigation/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ExperienceSection from "../components/home/ExperienceSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/common/Footer";
import ThreeBackground from "../components/canvas/ThreeBackground";
import ErrorBoundary from "../components/common/ErrorBoundary";

const HomePage = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
    if (!reducedMotion) {
      document.documentElement.classList.add("reduced-motion");
    } else {
      document.documentElement.classList.remove("reduced-motion");
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-main text-text-primary overflow-x-hidden">
      {/* Interactive 3D Three.js Ambient Background */}
      <ErrorBoundary fallback={null}>
        <ThreeBackground isHeroOnly={false} reducedMotion={reducedMotion} />
      </ErrorBoundary>

      {/* Subtle Engineering Grid Texture */}
      <div className="fixed inset-0 bg-grid-tech opacity-20 pointer-events-none -z-0" />

      {/* Sticky Header Navbar */}
      <Navbar
        reducedMotion={reducedMotion}
        toggleReducedMotion={toggleReducedMotion}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection reducedMotion={reducedMotion} />
        <AboutSection reducedMotion={reducedMotion} />
        <SkillsSection reducedMotion={reducedMotion} />
        <ProjectsSection reducedMotion={reducedMotion} />
        <ExperienceSection reducedMotion={reducedMotion} />
        <ContactSection reducedMotion={reducedMotion} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
