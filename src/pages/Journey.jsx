import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiUsers, FiAward, FiCode, FiShield, FiGlobe, FiLayers } from 'react-icons/fi'

const Journey = () => {
  const timeline = [
    {
      year: '2024 - Present',
      title: 'Freelancer Web Developer',
      company: 'Self-Employed',
      description: 'Building responsive websites for clients using modern technologies.',
      icon: <FiCode className="text-purple-600" size={18} />,
      color: 'bg-purple-100 dark:bg-purple-900/30',
      border: 'border-purple-500'
    },
    {
      year: '2024 - Present',
      title: 'Commite NFSSC',
      company: 'Nurul Fikri Cyber Security',
      description: 'Organized and supported cybersecurity-related events, workshops, and competitions for student engagement and learning.',
      icon: <FiShield className="text-cyan-600" size={18} />,
      color: 'bg-cyan-100 dark:bg-cyan-900/30',
      border: 'border-cyan-500'
    },
    {
      year: '2024',
      title: 'International Python Certification',
      company: 'Python Institute Academy',
      description: 'Completed professional certification in Python programming covering core and advanced concepts.',
      icon: <FiAward className="text-yellow-600" size={18} />,
      color: 'bg-yellow-100 dark:bg-yellow-900/30',
      border: 'border-yellow-500'
    },
    {
      year: '2024',
      title: 'Leadership Training',
      company: 'LDKMKM STT NF',
      description: 'Completed basic leadership and management training for college students.',
      icon: <FiUsers className="text-blue-600" size={18} />,
      color: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-500'
    },
    {
      year: '2024',
      title: 'General Election Witness',
      company: 'Indonesian General Election',
      description: 'Served as an official witness for the presidential and vice-presidential election process.',
      icon: <FiGlobe className="text-red-600" size={18} />,
      color: 'bg-red-100 dark:bg-red-900/30',
      border: 'border-red-500'
    },
    {
      year: '2020 - 2023',
      title: 'OSIS MPK Member',
      company: 'SMA Citra Nusa',
      description: 'Active member of student council organization, participating in event planning and school activities.',
      icon: <FiLayers className="text-green-600" size={18} />,
      color: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-500'
    },
  ]

  return (
    <Layout title="My Journey" showBack>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">My Journey Timeline</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A chronological overview of my experiences, achievements, and professional growth
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transform md:-translate-x-1/2"></div>
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className={`relative mb-12 ${isEven ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
              >
                <div className="flex items-start">
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 bg-blue-500 z-10 transform md:-translate-x-1/2 mt-6"></div>
                  
                  <div className={`hidden md:block absolute top-6 ${isEven ? 'right-full mr-12 text-right' : 'left-full ml-12'} w-40`}>
                    <span className={`inline-block px-4 py-2 text-sm font-medium rounded-full ${item.color} text-gray-900 dark:text-white shadow-sm`}>
                      {item.year}
                    </span>
                  </div>
                  
                  <div className="md:hidden mb-4 ml-12">
                    <span className={`inline-block px-4 py-2 text-sm font-medium rounded-full ${item.color} text-gray-900 dark:text-white shadow-sm`}>
                      {item.year}
                    </span>
                  </div>
                  
                  <div className={`ml-12 md:ml-0 w-full ${isEven ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'} max-w-md`}>
                    <div className={`relative p-6 rounded-2xl shadow-lg ${item.color} border-l-4 ${item.border} md:border-l-0 ${isEven ? 'md:border-r-4' : 'md:border-l-4'} hover:shadow-xl transition-shadow duration-300`}>
                      <div className="flex items-start mb-4">
                        <div className={`p-3 rounded-xl ${item.color.replace('bg', 'bg-opacity-20')} mr-4 flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                          <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">{item.company}</h4>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Continuous Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I believe in lifelong learning and continuously seek opportunities to expand my skills 
              and contribute to meaningful projects. My journey is just beginning!
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Journey