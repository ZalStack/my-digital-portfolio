import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiMap,
  FiUser,
  FiAward,
  FiMail,
  FiFileText,
} from "react-icons/fi";
import Layout from "../common/Layout";
import { useNavigate, useLocation } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  const menuItems = [
    {
      id: "projects",
      title: "Projects",
      icon: <FiCode />,
      color: "from-purple-600 to-indigo-600",
      desc: "View my portfolio projects",
    },
    {
      id: "journey",
      title: "Journey",
      icon: <FiMap />,
      color: "from-amber-600 to-orange-600",
      desc: "My career timeline",
    },
    {
      id: "about",
      title: "About Me",
      icon: <FiUser />,
      color: "from-emerald-600 to-teal-600",
      desc: "Get to know me better",
    },
    {
      id: "skills",
      title: "My Skills",
      icon: <FiAward />,
      color: "from-rose-600 to-pink-600",
      desc: "Technical expertise",
    },
    {
      id: "contact",
      title: "Contact",
      icon: <FiMail />,
      color: "from-blue-600 to-cyan-600",
      desc: "Get in touch with me",
    },
    {
      id: "certificate",
      title: "Certificates",
      icon: <FiFileText />,
      color: "from-violet-600 to-fuchsia-600",
      desc: "My achievements",
    },
  ];

  const handleNavigation = (itemId) => {
    navigate(`/${itemId}`);
  };

  return (
    <Layout title="Welcome">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Welcome{userName !== "Guest" ? `, ${userName}` : ""} to My Digital
            Portfolio 👋
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my work, skills, and professional journey. Click on any
            section to learn more!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer"
              onClick={() => handleNavigation(item.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-80 group-hover:opacity-100 transition-opacity`}
              ></div>

              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl h-full flex flex-col items-center text-center group-hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
                <div
                  className={`mb-4 p-3 rounded-full bg-gradient-to-br ${item.color} text-white text-2xl`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {item.desc}
                </p>
                <div className="mt-2 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                  Click to explore
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainMenu;
