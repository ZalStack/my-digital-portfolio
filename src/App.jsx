import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Welcome from './components/welcome/Welcome'
import MainMenu from './components/main-menu/MainMenu'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Journey from './pages/Journey'
import MySkills from './pages/MySkills'
import Contact from './pages/Contact'
import Certificate from './pages/Certificate'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<MainMenu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App