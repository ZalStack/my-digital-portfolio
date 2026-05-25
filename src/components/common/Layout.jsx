import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowLeft, FiSun, FiMoon, FiInstagram, FiGithub, FiLinkedin, FiMenu, FiX, FiHome } from "react-icons/fi"
import { useNavigate, useLocation } from "react-router-dom"
import DigitalClock from "./DigitalClock"

const Layout = ({ children, title, showBack = false }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
    navigate('/main')
  }

  const navItems = [
    { path: '/main', label: 'Home', icon: <FiHome /> },
    { path: '/about', label: 'About', icon: null },
    { path: '/projects', label: 'Projects', icon: null },
    { path: '/journey', label: 'Journey', icon: null },
    { path: '/skills', label: 'Skills', icon: null },
    { path: '/certificate', label: 'Certificates', icon: null },
    { path: '/contact', label: 'Contact', icon: null },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left Section */}
            <div className="flex items-center gap-3">
              {showBack ? (
                <motion.button
                  onClick={handleBack}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  aria-label="Go Back"
                >
                  <FiArrowLeft className="text-gray-700 dark:text-gray-300" size={18} />
                </motion.button>
              ) : (
                <div className="w-10"></div>
              )}
              
              <motion.button
                onClick={goHome}
                whileHover={{ scale: 1.02 }}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
              >
                MFG
              </motion.button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  whileHover={{ y: -1 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:block">
                <DigitalClock />
              </div>

              <div className="hidden md:flex items-center gap-1">
                <motion.a
                  href="https://instagram.com/maszal_08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiInstagram size={18} />
                </motion.a>
                <motion.a
                  href="https://github.com/Masfahri2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiGithub size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muhammadfakhrizal-748398290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiLinkedin size={18} />
                </motion.a>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <FiSun className="text-yellow-400" size={18} />
                ) : (
                  <FiMoon className="text-gray-700" size={18} />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all"
              >
                {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full px-4 py-3 rounded-xl text-left font-medium transition-all ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-gray-200 dark:border-gray-800">
                  <a href="https://instagram.com/maszal_08" target="_blank" className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <FiInstagram size={18} />
                  </a>
                  <a href="https://github.com/Masfahri2005" target="_blank" className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammadfakhrizal-748398290" target="_blank" className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 sm:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Muhammad Fakhrizal Garnindyo. All rights reserved.</p>
            <p className="text-xs">Software Engineer | Fullstack Developer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout