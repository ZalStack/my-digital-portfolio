// src/components/main-menu/MainMenu.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiMap,
  FiUser,
  FiAward,
  FiMail,
  FiFileText,
  FiBriefcase,
  FiTrendingUp,
  FiStar,
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
      color: "from-[#697565] to-[#3C3D37]",
      desc: "Get to know me better",
      stats: "Personal Info",
    },
    {
      id: "projects",
      title: "Projects",
      icon: <FiCode />,
      color: "from-[#1E201E] to-[#3C3D37]",
      desc: "View my portfolio projects",
      stats: "10+ Projects",
    },
    {
      id: "journey",
      title: "Journey",
      icon: <FiMap />,
      color: "from-[#697565] to-[#1E201E]",
      desc: "My career timeline",
      stats: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
      icon: <FiAward />,
      color: "from-[#3C3D37] to-[#697565]",
      desc: "Technical expertise",
      stats: "30+ Skills",
    },
    {
      id: "certificate",
      title: "Certificates",
      icon: <FiFileText />,
      color: "from-[#1E201E] to-[#697565]",
      desc: "My achievements",
      stats: "14 Certificates",
    },
    {
      id: "contact",
      title: "Contact",
      icon: <FiMail />,
      color: "from-[#3C3D37] to-[#1E201E]",
      desc: "Get in touch",
      stats: "Let's Connect",
    },
  ];

  const handleNavigation = (itemId) => {
    navigate(`/${itemId}`);
  };

  return (
    <Layout title="Welcome">
      <div className="py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3C3D37] rounded-full mb-4">
            <FiStar className="text-[#ECDFCC]" size={14} />
            <span className="text-xs font-medium text-[#ECDFCC]">
              Welcome{userName !== "Guest" ? `, ${userName}` : ""}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#1E201E]">Muhammad </span>
            <span className="text-[#697565]">
              Fakhrizal Garnindyo
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-[#3C3D37] max-w-2xl mx-auto">
            Software Engineer & Fullstack Developer passionate about building modern, 
            scalable, and impactful digital solutions.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Projects Completed", value: "10+", trend: "+2 this year" },
            { label: "Certifications", value: "14", trend: "National/International" },
            { label: "Years Experience", value: "2+", trend: "Active" },
            { label: "Technologies", value: "20+", trend: "Modern Stack" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-[#ECDFCC] rounded-2xl p-4 text-center shadow-sm border border-[#697565]/30 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl font-bold text-[#1E201E]">{stat.value}</div>
              <div className="text-xs text-[#697565] mt-1">{stat.label}</div>
              <div className="text-[10px] text-[#3C3D37] mt-1">{stat.trend}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => handleNavigation(item.id)}
            >
              <div className="relative bg-[#ECDFCC] rounded-2xl p-6 shadow-sm border border-[#697565]/30 hover:shadow-xl transition-all h-full">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-[#ECDFCC] shadow-md`}>
                    <div className="text-xl">{item.icon}</div>
                  </div>
                  <span className="text-xs font-medium text-[#697565]">{item.stats}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-[#1E201E] mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#3C3D37] mb-4">
                  {item.desc}
                </p>
                
                <div className="flex items-center text-xs font-medium text-[#697565] group-hover:gap-2 transition-all">
                  Explore <FiTrendingUp className="ml-1 group-hover:translate-x-1 transition-transform" size={12} />
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
          className="mt-12 pt-8 text-center border-t border-[#697565]/30"
        >
          <p className="text-xs text-[#697565]">
            Tech Stack: React.js • Next.js • Laravel • Express.js • TypeScript • Python • TailwindCSS • MySQL
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default MainMenu;