import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"
import { useNavigate } from "react-router-dom"
import particlesConfig from "../../config/particles-config"

const Welcome = () => {
  const [showButton, setShowButton] = useState(false)
  const [userName, setUserName] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [particlesInitialized, setParticlesInitialized] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS && !particlesInitialized) {
      try {
        window.particlesJS("particles-js", particlesConfig)
        setParticlesInitialized(true)
      } catch (error) {
        console.error("Error initializing particles.js:", error)
      }
    }

    // Show input after 4 seconds
    const timer1 = setTimeout(() => setShowInput(true), 4000)
    // Show button after 5 seconds
    const timer2 = setTimeout(() => setShowButton(true), 5000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [particlesInitialized])

  const handleEnter = () => {
    if (userName.trim() || !showInput) {
      navigate('/main', { state: { userName: userName.trim() || 'Guest' } })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter()
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div id="particles-js" className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-1 bg-gradient-to-br from-transparent via-transparent to-transparent">
        <div className="absolute top-0 left-0 w-full h-full animate-gradient-xy bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-text-gradient">
            Hi, My Name is Muhammad Fakhrizal Garnindyo
          </h1>
          <div className="text-2xl md:text-4xl h-16 mb-8 font-medium text-white">
            <ReactTyped
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "UI Designer",
                "UX Research",
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop
              cursorChar="▋"
              showCursor={true}
              className="text-shadow-glow"
            />
          </div>
        </motion.div>

        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What's your name?"
              className="px-4 py-3 w-64 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white/50 text-center backdrop-blur-sm"
              autoFocus
            />
          </motion.div>
        )}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <button
              onClick={handleEnter}
              disabled={showInput && !userName.trim()}
              className={`relative px-8 py-4 bg-transparent border-2 ${
                showInput && !userName.trim()
                  ? "border-white/10 cursor-not-allowed"
                  : "border-white/30 hover:border-transparent"
              } text-white text-lg font-semibold rounded-full overflow-hidden group transition-all duration-500`}
              aria-label="Begin Exploration"
            >
              <span
                className={`absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-0 ${
                  !showInput || userName.trim() ? "group-hover:opacity-100" : ""
                } transition-opacity duration-500 animate-gradient-x`}
              ></span>

              <span className="absolute inset-0 backdrop-blur-sm bg-white/5 group-hover:bg-white/10 transition-all duration-500"></span>

              <span className="relative z-10 flex items-center justify-center">
                Begin Exploration
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>

              <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-1/3 h-full bg-white/30 transform -skew-x-12 animate-shine group-hover:translate-x-[400%] transition-all duration-1000"></span>
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Welcome