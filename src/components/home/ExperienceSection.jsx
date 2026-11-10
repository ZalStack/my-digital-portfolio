// src/components/home/ExperienceSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiAward,
  FiUsers,
} from "react-icons/fi";
import { experienceData } from "../../data/portfolioData";

const ExperienceSection = ({ reducedMotion }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-elevated/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-red" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-red font-semibold">
              04 // Professional Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary">
            Career &amp; <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-2xl">
            A chronological timeline of roles in software engineering, technical lecturing, and community tech leadership.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-border-dark/80 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Glowing Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-surface-card border-2 border-accent-purple group-hover:border-accent-red transition-colors flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white group-hover:bg-accent-red transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border-dark hover:border-accent-purple/50 transition-all duration-300 shadow-card-glow">
                
                {/* Period & Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-border-dark/60">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="px-2.5 py-0.5 rounded bg-surface border border-border-dark font-mono text-[11px] text-accent-purple font-medium">
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-text-muted flex items-center gap-1">
                        <FiCalendar size={13} /> {exp.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-text-primary">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="font-sans font-semibold text-sm text-white">
                      {exp.company}
                    </p>
                    <p className="font-mono text-xs text-text-muted flex items-center sm:justify-end gap-1">
                      <FiMapPin size={12} className="text-accent-red" /> {exp.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-text-muted">
                        <FiCheckCircle className="text-accent-purple shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies Used Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border-dark/50">
                  <span className="font-mono text-[11px] text-text-muted mr-1">
                    Stack:
                  </span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-surface border border-border-dark text-[11px] font-mono text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
