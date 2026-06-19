import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FiUser, FiArrowRight, FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi"

const Welcome = () => {
  const [showInput, setShowInput] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [userName, setUserName] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const navigate = useNavigate()

  const roles = [
    { title: "Software Engineer", icon: <FiCode /> },
    { title: "Fullstack Developer", icon: <FiServer /> },
    { title: "UI/UX Designer", icon: <FiLayout /> },
    { title: "Tech Enthusiast", icon: <FiDatabase /> },
  ]

  useEffect(() => {
    const timer1 = setTimeout(() => setShowInput(true), 1400)
    const timer2 = setTimeout(() => setShowButton(true), 2200)

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearInterval(roleInterval)
    }
  }, [roles.length])

  const handleEnter = () => {
    if (!showInput || userName.trim()) {
      navigate('/main', { state: { userName: userName.trim() || 'Guest' } })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter()
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#F7F6F2 1px, transparent 1px), linear-gradient(90deg, #F7F6F2 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      ></div>

      {/* Soft accent glow, restrained */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Eyebrow / case file label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-bg/15 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs text-bg/70 font-mono-tech uppercase tracking-[0.2em]">Portfolio · 2026</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mb-5"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-bg">
            Muhammad Fakhrizal
            <br />
            <span className="text-accent">Garnindyo</span>
          </h1>
        </motion.div>

        {/* Rotating Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-accent text-lg">{roles[currentRole].icon}</span>
              <span className="text-bg/80 text-lg sm:text-xl font-medium tracking-wide">
                {roles[currentRole].title}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-12 font-mono-tech text-xs"
        >
          {["React.js", "Next.js", "Laravel", "Express.js", "TypeScript", "Python", "TailwindCSS", "MySQL"].map((tech, idx) => (
            <span key={idx} className="text-bg/40">
              {tech}{idx < 7 && <span className="text-accent/50 ml-4">/</span>}
            </span>
          ))}
        </motion.div>

        {/* Name Input */}
        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mb-6"
            >
              <div className="relative max-w-sm mx-auto">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-bg/30" size={17} />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your name"
                  className="w-full px-12 py-3.5 rounded-lg bg-bg/5 text-bg placeholder-bg/30 border border-bg/15 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enter Button */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleEnter}
                disabled={showInput && !userName.trim()}
                className={`group relative px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 ${
                  showInput && !userName.trim()
                    ? "bg-bg/10 text-bg/30 cursor-not-allowed"
                    : "bg-accent text-ink hover:bg-accent-light"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enter Portfolio
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Welcome