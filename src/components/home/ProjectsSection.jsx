// src/components/home/ProjectsSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
  FiFolder,
  FiLayers,
  FiEye,
} from "react-icons/fi";
import { projectsData } from "../../data/portfolioData";
import ProjectModal from "../common/ProjectModal";

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "Fullstack Apps", value: "fullstack" },
  { label: "AI & Healthcare", value: "ai" },
  { label: "Management Systems", value: "management" },
  { label: "UI/UX & Product Design", value: "design" },
];

const ProjectsSection = ({ reducedMotion }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categoryFilter === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-red/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-purple" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-purple font-semibold">
                03 // Selected Deployments
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-3 text-base text-text-secondary max-w-xl">
              Production-ready web applications, distributed APIs, and intelligent machine learning integrations.
            </p>
          </div>

          <div className="font-mono text-xs text-text-muted">
            Displaying <span className="text-white font-semibold">{filteredProjects.length}</span> of {projectsData.length} projects
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-dark">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeFilter === option.value
                  ? "bg-surface border border-accent-purple text-white font-semibold shadow-sm"
                  : "bg-surface-card border border-border-dark text-text-muted hover:text-text-primary hover:border-border-light"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                exit={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl bg-surface-card border border-border-dark hover:border-accent-purple/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card-glow hover:shadow-neon-purple/10"
              >
                {/* Image Container with Hover Zoom */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-surface cursor-pointer"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                    {project.category}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-surface-card/80 backdrop-blur-sm border border-border-dark text-[10px] font-mono text-text-muted">
                    {project.year}
                  </div>

                  {/* Hover Quick View Trigger Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-card/90 border border-border-light text-xs font-mono text-white shadow-lg">
                      <FiEye className="text-accent-purple" /> Inspect Architecture
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-display font-bold text-lg text-text-primary group-hover:text-white transition-colors cursor-pointer mb-2 flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <FiArrowUpRight className="text-text-muted group-hover:text-accent-purple transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-5">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Tech Tags & External Links */}
                  <div className="pt-4 border-t border-border-dark/60">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-surface border border-border-dark text-[10px] font-mono text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-surface border border-border-dark text-[10px] font-mono text-accent-purple">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-text-secondary hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Details</span> &rarr;
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-md hover:bg-surface text-text-muted hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <FiGithub size={15} />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-md hover:bg-surface text-text-muted hover:text-white transition-colors"
                          aria-label="Live Demo Link"
                        >
                          <FiExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for detail view */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
