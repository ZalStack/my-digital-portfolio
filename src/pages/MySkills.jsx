import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import { FiCode, FiDatabase, FiLayers, FiPenTool, FiUsers, FiClock, FiAward, FiMessageSquare, FiServer, FiShield } from 'react-icons/fi'

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayers size={20} />,
      skills: [
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 82 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 85 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer size={20} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Laravel', level: 85 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Golang', level: 70 },
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase size={20} />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 65 },
      ]
    },
    {
      title: "Design & Others",
      icon: <FiPenTool size={20} />,
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Figma', level: 78 },
        { name: 'Canva', level: 85 },
        { name: 'RESTful APIs', level: 85 },
      ]
    }
  ]

  const softSkills = [
    { name: 'Communication', icon: <FiMessageSquare size={18} /> },
    { name: 'Team Work', icon: <FiUsers size={18} /> },
    { name: 'Time Management', icon: <FiClock size={18} /> },
    { name: 'Leadership', icon: <FiAward size={18} /> },
    { name: 'Problem Solving', icon: <FiCode size={18} /> },
    { name: 'Adaptability', icon: <FiShield size={18} /> },
  ]

  return (
    <Layout title="My Skills" showBack>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs font-mono-tech uppercase tracking-[0.2em] text-muted">Capabilities</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
            Technical Expertise
          </h2>
          <p className="text-muted max-w-2xl leading-relaxed">
            My proficiency across various technologies and development domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-surface rounded-xl border border-line overflow-hidden"
            >
              <div className="p-5 border-b border-line flex items-center gap-3">
                <div className="p-2 rounded-lg bg-ink text-accent">
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold text-ink">{category.title}</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate">{skill.name}</span>
                        <span className="text-xs font-mono-tech text-accent-dark">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-line rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.7, delay: 0.05 * skillIndex }}
                          className="h-1.5 rounded-full bg-accent"
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
          transition={{ delay: 0.3 }}
          className="bg-surface rounded-xl p-6 border border-line"
        >
          <h3 className="text-base font-semibold text-ink mb-6 flex items-center gap-2">
            <FiUsers className="text-accent" size={20} /> Soft Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 * index }}
                className="flex flex-col items-center gap-2 p-4 bg-bg rounded-lg border border-line hover:border-accent/40 transition-colors"
              >
                <div className="text-accent">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-center text-slate">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-ink rounded-xl p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-bg">Professional Certifications</h3>
              <p className="text-sm text-bg/60 mt-1">Recognized by Python Institute, MySkill, and more</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent text-ink rounded-md text-xs font-medium">PCEP - Python</span>
              <span className="px-3 py-1 bg-bg/10 text-bg rounded-md text-xs font-medium">Project Management</span>
              <span className="px-3 py-1 bg-bg/10 text-bg rounded-md text-xs font-medium">Leadership Training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export default MySkills