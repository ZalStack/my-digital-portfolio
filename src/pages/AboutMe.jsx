import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import MyProfile from "../assets/images/profile/profile.jpg";
import {
  FiMapPin,
  FiMail,
  FiInstagram,
  FiGlobe,
  FiCode,
  FiCamera,
  FiNavigation,
  FiDownload,
  FiEye,
  FiX,
} from "react-icons/fi";

const AboutMe = () => {
  const [showPreview, setShowPreview] = useState(false);

  const cvPath = "/cv/CV - MUHAMMAD FAKHRIZAL GARNINDYO.pdf"; // Sesuaikan dengan nama file CV Anda

  const interests = [
    { name: "Web Development", icon: <FiCode className="mr-1" /> },
    { name: "UI/UX Design", icon: <FiCode className="mr-1" /> },
    { name: "Photography", icon: <FiCamera className="mr-1" /> },
    { name: "Traveling", icon: <FiNavigation className="mr-1" /> },
    { name: "Hiking", icon: <FiNavigation className="mr-1" /> },
    { name: "Mountaineering", icon: <FiNavigation className="mr-1" /> },
  ];

  const handleDownloadCV = () => {
    // Membuat link sementara untuk download
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "CV_Muhammad_Fakhrizal_Garnindyo.pdf"; // Nama file saat didownload
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewCV = () => {
    setShowPreview(true);
    document.body.style.overflow = "hidden"; // Mencegah scroll saat modal terbuka
  };

  const closePreview = () => {
    setShowPreview(false);
    document.body.style.overflow = "auto"; // Mengembalikan scroll
  };

  return (
    <Layout title="About Me" showBack>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          {/* Profile Image Section */}
          <div className="w-full lg:w-2/5">
            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src={MyProfile}
                  alt="Muhammad Fakhrizal Garnindyo"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Personal Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiMapPin className="text-blue-500 mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Bogor, Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <FiMail className="text-blue-500 mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      fakhrizalgarnindyo@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <FiInstagram className="text-blue-500 mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Instagram
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      @maszal_08
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <FiGlobe className="text-blue-500 mr-3 text-lg" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Languages
                    </p>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Indonesian, English
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Muhammad Fakhrizal Garnindyo
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify">
                A passionate frontend developer with expertise in React.js and
                modern web technologies. I specialize in creating beautiful,
                responsive, and user-friendly interfaces that deliver
                exceptional digital experiences. With a keen eye for design and
                attention to detail, I bridge the gap between functionality and
                aesthetics.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                  <span className="relative z-10">My Journey</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 dark:bg-blue-900/50 z-0"></span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify">
                  From my early days in OSIS MPK at SMA Citra Nusa to becoming a
                  certified Python developer and web development freelancer,
                  I've consistently pursued growth and excellence. My
                  participation in leadership programs and cybersecurity
                  communities reflects my commitment to continuous learning and
                  community engagement.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                  <span className="relative z-10">My Interests</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 dark:bg-blue-900/50 z-0"></span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-sm border border-gray-200 dark:border-gray-600"
                    >
                      {interest.icon}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {interest.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Current Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Currently expanding my expertise in cybersecurity through
                  NFSSC while delivering high-quality web solutions as a
                  freelancer. Passionate about combining technical skills with
                  creative problem-solving to build impactful digital
                  experiences.
                </p>
              </div>

              {/* CV Buttons Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r mt-6 from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold mb-4 text-white">
                  Curriculum Vitae
                </h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Download My Comphensif CV Including Profesional Experience,
                  Education, and Skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Download Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <FiDownload className="text-lg" />
                    <span>Download CV</span>
                  </motion.button>
                </div>

                <p className="text-blue-100 text-xs mt-4">
                  Format: PDF • Size: ~2MB • Last updated: January 2026{" "}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutMe;
