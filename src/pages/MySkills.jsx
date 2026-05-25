import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiCode, FiDatabase, FiLayers, FiPenTool, FiGitBranch, FiCpu, FiUsers, FiClock, FiAward, FiMessageSquare, FiServer, FiSmartphone, FiShield } from 'react-icons/fi'

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayers className="text-blue-500" size={24} />,
      skills: [
        { name: 'HTML5/CSS3', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-500 to-amber-500' },
        { name: 'React.js', level: 85, color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', level: 82, color: 'from-gray-600 to-gray-800' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-500 to-cyan-500' },
        { name: 'Bootstrap', level: 85, color: 'from-purple-600 to-indigo-600' },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer className="text-purple-500" size={24} />,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-600 to-emerald-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'Laravel', level: 85, color: 'from-red-500 to-orange-500' },
        { name: 'PHP', level: 85, color: 'from-indigo-500 to-purple-500' },
        { name: 'Python', level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Golang', level: 70, color: 'from-sky-500 to-blue-500' },
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase className="text-green-500" size={24} />,
      skills: [
        { name: 'MySQL', level: 85, color: 'from-blue-600 to-cyan-600' },
        { name: 'PostgreSQL', level: 75, color: 'from-sky-600 to-blue-600' },
        { name: 'MongoDB', level: 70, color: 'from-green-600 to-emerald-600' },
        { name: 'Git/GitHub', level: 85, color: 'from-orange-600 to-red-600' },
        { name: 'Docker', level: 65, color: 'from-blue-500 to-sky-500' },
      ]
    },
    {
      title: "Design & Others",
      icon: <FiPenTool className="text-amber-500" size={24} />,
      skills: [
        { name: 'UI/UX Design', level: 80, color: 'from-rose-500 to-pink-500' },
        { name: 'Figma', level: 78, color: 'from-purple-500 to-fuchsia-500' },
        { name: 'Canva', level: 85, color: 'from-teal-500 to-green-500' },
        { name: 'RESTful APIs', level: 85, color: 'from-indigo-500 to-blue-500' },
      ]
    }
  ]

  const softSkills = [
    { name: 'Communication', icon: <FiMessageSquare className="text-rose-500" size={20} /> },
    { name: 'Team Work', icon: <FiUsers className="text-sky-500" size={20} /> },
    { name: 'Time Management', icon: <FiClock className="text-emerald-500" size={20} /> },
    { name: 'Leadership', icon: <FiAward className="text-yellow-500" size={20} /> },
    { name: 'Problem Solving', icon: <FiCode className="text-purple-500" size={20} /> },
    { name: 'Adaptability', icon: <FiShield className="text-blue-500" size={20} /> },
  ]

  return (
    <Layout title="My Skills" showBack>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My proficiency across various technologies and development domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <div className="p-2 rounded-xl bg-white dark:bg-gray-700 shadow-sm mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.05 * skillIndex }}
                          className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mr-3">
              <FiUsers size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Soft Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-full bg-white dark:bg-gray-600 shadow-sm mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Professional Certifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Recognized by Python Institute, MySkill, and more</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm">PCEP - Python</span>
              <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm">Project Management</span>
              <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm">Leadership Training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default MySkills