import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiBriefcase, FiAward, FiUsers, FiShield, FiCode, FiCalendar, FiMapPin } from 'react-icons/fi'

const Journey = () => {
  const timeline = [
    {
      year: '2025 - Present',
      title: 'Fullstack Web Developer',
      company: 'Parthaistic Digital Agency',
      description: 'Developing Finance and HR Management System using Laravel, Livewire, Tailwind CSS, and MySQL. Implementing scalable backend architecture and financial management features.',
      icon: <FiBriefcase />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      year: '2025 - 2026',
      title: 'Assistant Lecturer',
      company: 'STT Nurul Fikri',
      description: 'Teaching Assistant for Software Engineering course, guiding 3rd semester students in software development methodologies, system design, and practical implementations.',
      icon: <FiUsers />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      year: '2025 - 2026',
      title: 'UI Designer',
      company: 'Student Identity Management App',
      description: 'Designed UI/UX using Activity-Centered Design methodology for student identity management application.',
      icon: <FiCode />,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    },
    {
      year: '2025 - Present',
      title: 'Core Team GDGoC',
      company: 'STT NF Innovation Lab',
      description: 'Building collaborative technology learning environment and facilitating backend development programs.',
      icon: <FiShield />,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    },
    {
      year: '2025 - 2026',
      title: 'HRD Staff',
      company: 'Nurul Fikri Student Cybersecurity Community',
      description: 'Managing recruitment, member development, and fostering positive organizational culture.',
      icon: <FiUsers />,
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30',
    },
    {
      year: '2024 - Present',
      title: 'Freelance Fullstack Developer',
      company: 'Self-Employed',
      description: 'Building custom web applications using React.js, Next.js, Laravel, Express.js, and MySQL for various clients.',
      icon: <FiCode />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
    },
    {
      year: '2024',
      title: 'PCEP - Python Certification',
      company: 'Python Institute',
      description: 'International Python programming certification demonstrating proficiency in software development.',
      icon: <FiAward />,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/30',
    },
  ]

  return (
    <Layout title="My Journey" showBack>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My career path, experiences, and professional growth timeline
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2"></div>
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`relative mb-12 flex ${isEven ? 'justify-start' : 'justify-end'} md:justify-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900 z-10 transform md:-translate-x-1/2 top-5"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} pl-12 md:pl-0`}>
                  <div className={`${item.bgColor} rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all`}>
                    <div className="flex items-start mb-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-md mr-3`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center">
                            <FiCalendar className="mr-1" size={12} /> {item.year}
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Future Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">🚀 What's Next?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Continuously expanding my expertise in fullstack development, cloud architecture, and cybersecurity. 
              Open to new opportunities, collaborations, and challenging projects that make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Cloud Computing</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">DevOps</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">System Design</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Journey