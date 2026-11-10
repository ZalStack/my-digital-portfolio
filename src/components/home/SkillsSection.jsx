// src/components/home/SkillsSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiServer,
  FiDatabase,
  FiPenTool,
  FiCheck,
  FiZap,
} from "react-icons/fi";
import { skillsData } from "../../data/portfolioData";

const categoryIcons = {
  frontend: <FiLayers className="text-accent-purple" />,
  backend: <FiServer className="text-accent-red" />,
  database: <FiDatabase className="text-accent-purple" />,
  "design-tools": <FiPenTool className="text-accent-red" />,
};

const SkillsSection = ({ reducedMotion }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories =
    activeCategory === "all"
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-red" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-red font-semibold">
              02 // Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary">
            Skills &amp; <span className="text-gradient">Competencies</span>
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-2xl">
            A comprehensive breakdown of tools, programming languages, and frameworks I use to engineer robust end-to-end software solutions.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-accent-purple to-accent-red text-white font-semibold shadow-sm"
                  : "bg-surface-card border border-border-dark text-text-secondary hover:text-white"
              }`}
            >
              All Domains
            </button>
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? "bg-surface border border-accent-purple text-white font-semibold"
                    : "bg-surface-card border border-border-dark text-text-secondary hover:text-white"
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border-dark hover:border-border-light transition-all duration-300 shadow-card-glow"
            >
              {/* Category Title Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-border-dark">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-lg">
                    {categoryIcons[category.id]}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-text-primary">
                      {category.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted">
                      {category.skills.length} core proficiencies
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface border border-border-dark text-accent-purple">
                  {category.badge}
                </span>
              </div>

              {/* Skills Progress Bars List */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-text-primary group-hover:text-white font-medium flex items-center gap-1.5">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                        )}
                        {skill.name}
                      </span>
                      <span className="text-text-muted group-hover:text-accent-purple transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-surface border border-border-dark overflow-hidden p-[1px]">
                      <motion.div
                        initial={reducedMotion ? { width: `${skill.level}%` } : { width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          skill.highlight
                            ? "bg-gradient-to-r from-accent-purple to-accent-red"
                            : "bg-gradient-to-r from-accent-purple/80 to-accent-purple/50"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Working Methodologies Badges */}
        <div className="p-8 rounded-2xl bg-surface border border-border-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FiZap className="text-accent-red" />
              <h4 className="font-display font-bold text-base text-text-primary">
                Professional &amp; Soft Competencies
              </h4>
            </div>
            <p className="text-xs text-text-muted">
              Qualities cultivated through team leadership, lecturing, and agency client collaboration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {skillsData.softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-surface-card border border-border-dark text-xs font-mono text-text-secondary hover:text-white hover:border-accent-purple transition-all duration-200 flex items-center gap-1.5"
              >
                <FiCheck className="text-accent-purple text-xs" />
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
