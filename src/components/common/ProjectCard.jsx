import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="relative group overflow-hidden rounded-xl cursor-pointer h-full flex flex-col bg-surface border border-line hover:border-accent/50 hover:shadow-lg transition-all"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onClick?.() }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label={`View ${project.title} project`}
    >
      <div className="relative h-56 w-full overflow-hidden bg-ink">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            e.target.alt = 'Default project image'
          }}
        />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-ink/85 text-bg text-xs font-mono-tech uppercase tracking-wide rounded-md backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-bg/90 text-ink opacity-0 group-hover:opacity-100 transition-opacity">
            <FiArrowUpRight size={16} />
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-ink group-hover:text-accent-dark transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-muted font-mono-tech shrink-0 ml-2">
              {project.year}
            </span>
          </div>
          <p className="text-muted mb-4 line-clamp-2 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-3 border-t border-line">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="px-2.5 py-1 bg-bg text-slate text-xs font-medium rounded-md border border-line"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1 bg-bg text-muted text-xs font-medium rounded-md border border-line">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard