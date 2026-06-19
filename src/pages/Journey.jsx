import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiBriefcase, FiAward, FiUsers, FiShield, FiCode, FiCalendar } from 'react-icons/fi'

const Journey = () => {
  const timeline = [
    {
      year: '2025 - Present',
      title: 'Fullstack Web Developer',
      company: 'Parthaistic Digital Agency',
      description: 'Developing Finance and HR Management System using Laravel, Livewire, Tailwind CSS, and MySQL. Implementing scalable backend architecture and financial management features.',
      icon: <FiBriefcase />,
    },
    {
      year: '2025 - 2026',
      title: 'Assistant Lecturer',
      company: 'STT Nurul Fikri',
      description: 'Teaching Assistant for Software Engineering course, guiding 3rd semester students in software development methodologies, system design, and practical implementations.',
      icon: <FiUsers />,
    },
    {
      year: '2025 - 2026',
      title: 'UI Designer',
      company: 'Student Identity Management App',
      description: 'Designed UI/UX using Activity-Centered Design methodology for student identity management application.',
      icon: <FiCode />,
    },
    {
      year: '2025 - Present',
      title: 'Core Team GDGoC',
      company: 'STT NF Innovation Lab',
      description: 'Building collaborative technology learning environment and facilitating backend development programs.',
      icon: <FiShield />,
    },
    {
      year: '2025 - 2026',
      title: 'HRD Staff',
      company: 'Nurul Fikri Student Cybersecurity Community',
      description: 'Managing recruitment, member development, and fostering positive organizational culture.',
      icon: <FiUsers />,
    },
    {
      year: '2024 - Present',
      title: 'Freelance Fullstack Developer',
      company: 'Self-Employed',
      description: 'Building custom web applications using React.js, Next.js, Laravel, Express.js, and MySQL for various clients.',
      icon: <FiCode />,
    },
    {
      year: '2024',
      title: 'PCEP - Python Certification',
      company: 'Python Institute',
      description: 'International Python programming certification demonstrating proficiency in software development.',
      icon: <FiAward />,
    },
  ]

  return (
    <Layout title="My Journey" showBack>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs font-mono-tech uppercase tracking-[0.2em] text-muted">Career Timeline</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
            Professional Journey
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed">
            My career path, experiences, and professional growth timeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px bg-line"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * index, duration: 0.4 }}
              className="relative flex gap-5 sm:gap-6 mb-8 last:mb-0"
            >
              {/* Icon node */}
              <div className="relative shrink-0 z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-ink text-accent flex items-center justify-center text-xl border-4 border-bg">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-surface rounded-xl p-5 border border-line hover:border-accent/40 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-ink">{item.title}</h3>
                  <span className="text-xs font-mono-tech text-accent-dark flex items-center shrink-0">
                    <FiCalendar className="mr-1" size={12} /> {item.year}
                  </span>
                </div>
                <p className="text-sm text-slate font-medium mb-2">{item.company}</p>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="bg-ink rounded-xl p-8 text-bg">
            <h3 className="font-display text-xl mb-3">What's Next</h3>
            <p className="text-bg/70 max-w-2xl leading-relaxed">
              Continuously expanding my expertise in fullstack development, cloud architecture, and cybersecurity.
              Open to new opportunities, collaborations, and challenging projects that make a real impact.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 bg-bg/10 rounded-md text-sm text-accent font-mono-tech">Cloud Computing</span>
              <span className="px-3 py-1 bg-bg/10 rounded-md text-sm text-accent font-mono-tech">DevOps</span>
              <span className="px-3 py-1 bg-bg/10 rounded-md text-sm text-accent font-mono-tech">System Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Journey