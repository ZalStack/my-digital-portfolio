// src/components/main-menu/MainMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiMap,
  FiUser,
  FiAward,
  FiMail,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";
import Layout from "../common/Layout";
import { useNavigate, useLocation } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  const menuItems = [
    {
      id: "about",
      title: "About Me",
      icon: <FiUser />,
      desc: "Background, experience, and education",
      tag: "Personal info",
      num: "01",
    },
    {
      id: "projects",
      title: "Projects",
      icon: <FiCode />,
      desc: "Selected work across web and applications",
      tag: "10+ projects",
      num: "02",
    },
    {
      id: "journey",
      title: "Journey",
      icon: <FiMap />,
      desc: "Career timeline and professional milestones",
      tag: "Experience",
      num: "03",
    },
    {
      id: "skills",
      title: "Skills",
      icon: <FiAward />,
      desc: "Technical stack and core competencies",
      tag: "30+ skills",
      num: "04",
    },
    {
      id: "certificate",
      title: "Certificates",
      icon: <FiFileText />,
      desc: "Achievements and professional recognition",
      tag: "14 certificates",
      num: "05",
    },
    {
      id: "contact",
      title: "Contact",
      icon: <FiMail />,
      desc: "Get in touch for roles or collaboration",
      tag: "Let's connect",
      num: "06",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Certifications", value: "14" },
    { label: "Years Experience", value: "2+" },
    { label: "Technologies", value: "20+" },
  ];

  const handleNavigation = (itemId) => {
    navigate(`/${itemId}`);
  };

  return (
    <Layout title="Welcome">
      <div className="py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs font-mono-tech uppercase tracking-[0.2em] text-muted">
              Welcome{userName !== "Guest" ? `, ${userName}` : ""}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-4 max-w-3xl">
            Muhammad Fakhrizal Garnindyo
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Software Engineer & Fullstack Developer building modern,
            scalable, and impactful digital solutions.
          </p>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden mb-12 border border-line"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.08 }}
              className="bg-surface p-5 text-center"
            >
              <div className="font-display text-2xl sm:text-3xl text-ink">{stat.value}</div>
              <div className="text-xs text-muted mt-1.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.07 }}
              whileHover={{ y: -3 }}
              className="group cursor-pointer"
              onClick={() => handleNavigation(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") handleNavigation(item.id) }}
            >
              <div className="relative bg-surface rounded-xl p-6 border border-line hover:border-accent/50 hover:shadow-lg transition-all h-full">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono-tech text-xs text-accent">{item.num}</span>
                  <div className="p-2.5 rounded-lg bg-ink text-bg group-hover:bg-accent group-hover:text-ink transition-colors">
                    <div className="text-lg">{item.icon}</div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-ink mb-1.5">
                  {item.title}
                </h3>

                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech uppercase tracking-wide text-muted">{item.tag}</span>
                  <FiArrowUpRight className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-line"
        >
          <p className="text-xs text-muted font-mono-tech text-center tracking-wide">
            React.js · Next.js · Laravel · Express.js · TypeScript · Python · TailwindCSS · MySQL
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MainMenu;