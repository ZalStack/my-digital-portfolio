import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiCode, FiDatabase, FiLayers, FiPenTool, FiGitBranch, FiCpu, FiUsers, FiClock, FiAward, FiMessageSquare, FiServer, FiSmartphone, FiShield } from 'react-icons/fi'

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayers className="text-[#697565]" size={24} />,
      skills: [
        { name: 'HTML5/CSS3', level: 95, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'JavaScript/TypeScript', level: 90, color: 'from-[#3C3D37] to-[#1E201E]' },
        { name: 'React.js', level: 85, color: 'from-[#1E201E] to-[#697565]' },
        { name: 'Next.js', level: 82, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'Tailwind CSS', level: 88, color: 'from-[#3C3D37] to-[#1E201E]' },
        { name: 'Bootstrap', level: 85, color: 'from-[#1E201E] to-[#697565]' },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer className="text-[#697565]" size={24} />,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'Express.js', level: 85, color: 'from-[#3C3D37] to-[#1E201E]' },
        { name: 'Laravel', level: 85, color: 'from-[#1E201E] to-[#697565]' },
        { name: 'PHP', level: 85, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'Python', level: 80, color: 'from-[#3C3D37] to-[#1E201E]' },
        { name: 'Golang', level: 70, color: 'from-[#1E201E] to-[#697565]' },
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase className="text-[#697565]" size={24} />,
      skills: [
        { name: 'MySQL', level: 85, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'PostgreSQL', level: 75, color: 'from-[#3C3D37] to-[#1E201E]' },
        { name: 'MongoDB', level: 70, color: 'from-[#1E201E] to-[#697565]' },
        { name: 'Git/GitHub', level: 85, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'Docker', level: 65, color: 'from-[#3C3D37] to-[#1E201E]' },
      ]
    },
    {
      title: "Design & Others",
      icon: <FiPenTool className="text-[#697565]" size={24} />,
      skills: [
        { name: 'UI/UX Design', level: 80, color: 'from-[#1E201E] to-[#697565]' },
        { name: 'Figma', level: 78, color: 'from-[#697565] to-[#3C3D37]' },
        { name: 'Canva', level: 85, color: 'from-[#3C3D37] to-[#1E201E]' },
        { name: 'RESTful APIs', level: 85, color: 'from-[#1E201E] to-[#697565]' },
      ]
    }
  ]

  const softSkills = [
    { name: 'Communication', icon: <FiMessageSquare className="text-[#697565]" size={20} /> },
    { name: 'Team Work', icon: <FiUsers className="text-[#697565]" size={20} /> },
    { name: 'Time Management', icon: <FiClock className="text-[#697565]" size={20} /> },
    { name: 'Leadership', icon: <FiAward className="text-[#697565]" size={20} /> },
    { name: 'Problem Solving', icon: <FiCode className="text-[#697565]" size={20} /> },
    { name: 'Adaptability', icon: <FiShield className="text-[#697565]" size={20} /> },
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E201E] mb-4">
            Technical <span className="text-[#697565]">Expertise</span>
          </h2>
          <p className="text-lg text-[#3C3D37] max-w-2xl mx-auto">
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
              className="bg-[#ECDFCC] rounded-2xl shadow-lg overflow-hidden border border-[#697565]/30"
            >
              <div className="p-5 bg-gradient-to-r from-[#3C3D37]/10 to-[#1E201E]/10 border-b border-[#697565]/30 flex items-center">
                <div className="p-2 rounded-xl bg-[#ECDFCC] shadow-sm mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1E201E]">{category.title}</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-[#3C3D37]">{skill.name}</span>
                        <span className="text-xs font-medium text-[#697565]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#3C3D37]/20 rounded-full h-2.5 overflow-hidden">
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
          className="bg-[#ECDFCC] rounded-2xl shadow-lg p-6 border border-[#697565]/30"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-xl bg-[#3C3D37] text-[#ECDFCC] mr-3">
              <FiUsers size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#1E201E]">Soft Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col items-center p-4 bg-[#3C3D37]/10 rounded-xl hover:bg-[#3C3D37]/20 transition-all group cursor-pointer"
              >
                <div className="p-3 rounded-full bg-[#ECDFCC] shadow-sm mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center text-[#1E201E]">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-[#3C3D37] to-[#1E201E] rounded-2xl p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#ECDFCC]">Professional Certifications</h3>
              <p className="text-sm text-[#ECDFCC]/70">Recognized by Python Institute, MySkill, and more</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ECDFCC] text-[#1E201E] rounded-full text-sm font-medium shadow-sm">PCEP - Python</span>
              <span className="px-3 py-1 bg-[#ECDFCC] text-[#1E201E] rounded-full text-sm font-medium shadow-sm">Project Management</span>
              <span className="px-3 py-1 bg-[#ECDFCC] text-[#1E201E] rounded-full text-sm font-medium shadow-sm">Leadership Training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default MySkills