import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiCode, FiDatabase, FiLayers, FiPenTool, FiGitBranch, FiCpu, FiUsers, FiClock, FiAward, FiMessageSquare } from 'react-icons/fi'

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayers className="text-blue-500" size={20} />,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Boostrap', level: 85 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiCpu className="text-purple-500" size={20} />,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 80 },
        { name: 'Golang', level: 70 },
        { name: 'PHP Native', level: 80 },
        { name: 'Laravel Framework', level: 75 },
        { name: 'Python', level: 75 },
        { name: 'Microframework Flask', level: 70 },
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase className="text-green-500" size={20} />,
      skills: [
        { name: 'PHPMyAdmin', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Mariadb', level: 80 },
        { name: 'Sqlite', level: 80 },
        { name: 'Git', level: 85 },
      ]
    },
    {
      title: "Design & Other",
      icon: <FiPenTool className="text-amber-500" size={20} />,
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'MyWorkBench', level: 75 },
        { name: 'Figma', level: 75 },
        { name: 'Canva', level: 85 },
      ]
    }
  ]

  const softSkills = [
    { name: 'Good Comunication', icon: <FiMessageSquare className="text-rose-500" size={18} /> },
    { name: 'Team Work', icon: <FiUsers className="text-sky-500" size={18} /> },
    { name: 'Time Manajement', icon: <FiClock className="text-emerald-500" size={18} /> },
    { name: 'Leadership', icon: <FiAward className="text-yellow-500" size={18} /> },
    { name: 'Work Ethic', icon: <FiGitBranch className="text-indigo-500" size={18} /> }
  ]

  const getColor = (level) => {
    if (level >= 85) return 'from-indigo-500 to-blue-500'
    if (level >= 75) return 'from-purple-500 to-pink-500'
    return 'from-amber-500 to-orange-500'
  }

  return (
    <Layout title="My Skills" showBack>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My expertise across various technologies and development domains
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center">
                <div className="p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.05 * skillIndex }}
                          className={`h-2 rounded-full bg-gradient-to-r ${getColor(skill.level)}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 mr-3">
                <FiUsers size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="p-3 rounded-full bg-white dark:bg-gray-600 shadow-sm mb-3">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
              <FiCode size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Skill Level Indicators</h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="mx-auto w-full bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full mb-2"></div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Expert (85-100%)</span>
            </div>
            <div className="text-center">
              <div className="mx-auto w-full bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full mb-2"></div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Advanced (75-84%)</span>
            </div>
            <div className="text-center">
              <div className="mx-auto w-full bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full mb-2"></div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Intermediate (65-74%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default MySkills