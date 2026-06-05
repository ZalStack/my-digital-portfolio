import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer h-full flex flex-col bg-[#ECDFCC] border border-[#697565]/30"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label={`View ${project.title} project`}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            e.target.alt = 'Default project image'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E201E]/90 via-[#1E201E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#1E201E]/90 text-[#ECDFCC] text-xs font-medium rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1E201E] mb-2 group-hover:text-[#697565] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#3C3D37] mb-4 line-clamp-2 text-sm">
            {project.description}
          </p>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag, index) => (
              <motion.span 
                key={`${tag}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-[#3C3D37] text-[#ECDFCC] text-xs font-medium rounded-full shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 bg-[#3C3D37] text-[#ECDFCC] text-xs font-medium rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#697565]">
              {project.year}
            </span>
            <motion.span 
              className="px-4 py-2 bg-[#1E201E] text-[#ECDFCC] text-xs font-medium rounded-full shadow-lg flex items-center gap-1 hover:bg-[#3C3D37] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-hidden="true"
            >
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard