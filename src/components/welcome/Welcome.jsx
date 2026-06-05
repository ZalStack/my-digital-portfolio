// src/components/welcome/Welcome.jsx
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
    const timer1 = setTimeout(() => setShowInput(true), 2000)
    const timer2 = setTimeout(() => setShowButton(true), 3500)
    
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E201E] via-[#3C3D37] to-[#1E201E]">
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(236,223,204,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#697565] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3C3D37] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ECDFCC] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ECDFCC]/10 backdrop-blur-sm rounded-full border border-[#ECDFCC]/20">
            <span className="text-2xl">👋</span>
            <span className="text-sm text-[#ECDFCC]/80">Welcome to My Digital Portfolio</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-[#ECDFCC]">Muhammad </span>
            <span className="text-[#697565]">
              Fakhrizal
            </span>
          </h1>
          <h2 className="text-[#ECDFCC]/70 text-lg sm:text-xl md:text-2xl mt-2">
            Garnindyo
          </h2>
        </motion.div>

        {/* Rotating Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ECDFCC]/10 backdrop-blur-sm rounded-full border border-[#ECDFCC]/20"
            >
              <span className="text-[#697565] text-xl">{roles[currentRole].icon}</span>
              <span className="text-[#ECDFCC] text-lg sm:text-xl font-medium">
                {roles[currentRole].title}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {["React.js", "Next.js", "Laravel", "Express.js", "TypeScript", "Python", "TailwindCSS", "MySQL"].map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-[#ECDFCC]/5 backdrop-blur-sm rounded-full text-[#ECDFCC]/50 text-xs sm:text-sm hover:bg-[#ECDFCC]/10 hover:text-[#ECDFCC]/70 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Name Input */}
        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6"
            >
              <div className="relative max-w-sm mx-auto">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#ECDFCC]/40" size={18} />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your name"
                  className="w-full px-12 py-3 rounded-xl bg-[#ECDFCC]/10 backdrop-blur-sm text-[#ECDFCC] placeholder-[#ECDFCC]/30 border border-[#ECDFCC]/20 focus:outline-none focus:ring-2 focus:ring-[#697565] focus:border-transparent transition-all"
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={handleEnter}
                disabled={showInput && !userName.trim()}
                className={`group relative px-8 py-3 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 ${
                  showInput && !userName.trim()
                    ? "bg-[#ECDFCC]/10 text-[#ECDFCC]/30 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#1E201E] via-[#3C3D37] to-[#697565] text-[#ECDFCC] hover:shadow-xl hover:shadow-[#1E201E]/25"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enter Portfolio
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#3C3D37] via-[#697565] to-[#3C3D37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Motivational Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-10 text-[#ECDFCC]/30 text-xs sm:text-sm"
        >
          "Building innovative digital solutions with modern technology"
        </motion.p>
      </div>
    </div>
  )
}

export default Welcome