import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowLeft, FiInstagram, FiGithub, FiLinkedin, FiMenu, FiX, FiHome } from "react-icons/fi"
import { useNavigate, useLocation } from "react-router-dom"
import DigitalClock from "./DigitalClock"

const Layout = ({ children, title, showBack = false }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="min-h-screen flex flex-col bg-bg transition-colors duration-300">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md shadow-sm border-b border-line'
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
                  className="p-2 rounded-lg bg-ink hover:bg-slate transition-all"
                  aria-label="Go Back"
                >
                  <FiArrowLeft className="text-bg" size={18} />
                </motion.button>
              ) : (
                <div className="w-10"></div>
              )}

              <motion.button
                onClick={goHome}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 group"
                aria-label="Go to home menu"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ink text-bg font-display text-base">
                  M
                </span>
                <span className="hidden sm:flex flex-col items-start leading-none">
                  <span className="text-sm font-semibold text-ink">Fakhrizal</span>
                  <span className="text-[10px] text-accent font-mono-tech uppercase tracking-widest">Developer</span>
                </span>
              </motion.button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  whileHover={{ y: -1 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'text-ink'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent rounded-full"
                    />
                  )}
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
                  className="p-2 rounded-lg text-muted hover:text-ink hover:bg-line/60 transition-all"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Instagram"
                >
                  <FiInstagram size={18} />
                </motion.a>
                <motion.a
                  href="https://github.com/Masfahri2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-ink hover:bg-line/60 transition-all"
                  whileHover={{ scale: 1.05 }}
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muhammadfakhrizal-748398290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-ink hover:bg-line/60 transition-all"
                  whileHover={{ scale: 1.05 }}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-ink transition-all"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <FiX size={20} className="text-bg" /> : <FiMenu size={20} className="text-bg" />}
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
              className="md:hidden overflow-hidden border-t border-line bg-bg"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${
                      location.pathname === item.path
                        ? 'bg-ink text-bg'
                        : 'text-slate hover:bg-line/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-line">
                  <a href="https://instagram.com/maszal_08" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-ink text-bg" aria-label="Instagram">
                    <FiInstagram size={18} />
                  </a>
                  <a href="https://github.com/Masfahri2005" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-ink text-bg" aria-label="GitHub">
                    <FiGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammadfakhrizal-748398290" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-ink text-bg" aria-label="LinkedIn">
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-line bg-surface/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted">
            <p>© {new Date().getFullYear()} Muhammad Fakhrizal Garnindyo. All rights reserved.</p>
            <p className="text-xs font-mono-tech uppercase tracking-wider text-accent">Software Engineer · Fullstack Developer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout