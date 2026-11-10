// src/components/common/ProjectModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiGithub, FiCalendar, FiTag, FiCheck } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-surface-card border border-border-light shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between p-5 border-b border-border-dark bg-surface">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-purple" />
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Project Detail // ID: {project.id}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-surface-card border border-border-dark text-text-muted hover:text-white hover:border-accent-red transition-colors"
              aria-label="Close Modal"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Image Preview */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border-dark bg-surface">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
                {project.category}
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-text-muted mb-2">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-accent-purple" /> {project.year}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <FiTag className="text-accent-red" /> {project.category}
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-3">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-surface border border-border-dark text-xs font-mono text-text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-border-dark flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-red text-white text-xs font-mono font-semibold hover:opacity-95 transition-opacity"
              >
                <FiGithub size={16} />
                <span>View Source Code</span>
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-surface border border-border-dark hover:border-accent-purple text-xs font-mono text-white transition-colors"
              >
                <FiExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
