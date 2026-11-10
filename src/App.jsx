// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Welcome from "./components/welcome/Welcome";
import HomePage from "./pages/HomePage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="App font-sans antialiased bg-bg-main text-text-primary min-h-screen selection:bg-accent-purple/30 selection:text-white">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Welcome Screen - First Experience */}
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />

          {/* Home Page - Main Portfolio Hub */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/main" element={<Navigate to="/home" replace />} />

          {/* Fallback routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;