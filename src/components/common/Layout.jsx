import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowLeft, FiSun, FiMoon, FiInstagram } from "react-icons/fi"
import { useNavigate, useLocation } from "react-router-dom"
import DigitalClock from "./DigitalClock"

const Layout = ({ children, title, showBack = false }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [darkMode, mounted])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const handleBack = () => {
    navigate(-1)
  }

  const goHome = () => {
    navigate('/')
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className={`fixed w-full py-2 xs:py-3 px-3 sm:px-5 md:px-6 flex items-center justify-between z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 dark:bg-gray-800/90 shadow-sm' : 'bg-transparent'}`}>
        <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
          {showBack ? (
            <motion.button
              onClick={handleBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-1 xs:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Go Back"
            >
              <FiArrowLeft className="text-lg xs:text-xl text-gray-700 dark:text-gray-300"/>
            </motion.button>
          ) : (
            <div className="w-8 xs:w-10"></div>
          )}
          
          <motion.button
            onClick={goHome}
            whileHover={{ scale: 1.05 }}
            className="text-lg xs:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            My Digital Portfolio
          </motion.button>
        </div>

        <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5"> 
          <div className="flex items-center">
            <DigitalClock />
          </div>

          <motion.a
            href="https://instagram.com/maszal_08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <FiInstagram className="mr-1 text-sm xs:text-base"/>
            <span className="hidden xs:inline text-xs sm:text-sm">@maszal_08</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-1 xs:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FiSun className="text-lg xs:text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-lg xs:text-xl text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
        </div>
      </header>

      <main className="flex-grow pt-16 xs:pt-20 pb-8 xs:pb-10 px-3 sm:px-5 md:px-6 max-w-6xl w-full mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-3 xs:py-4 text-center text-xs xs:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          © {new Date().getFullYear()} Muhammad Fakhrizal Garnindyo. All rights reserved | Built with Next JS V 16.1.6
        </div>
      </footer>
    </div>
  )
}

export default Layout