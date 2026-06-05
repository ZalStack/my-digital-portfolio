// src/pages/AboutMe.jsx
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
  FiBriefcase,
  FiUsers,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

const AboutMe = () => {
  const [showPreview, setShowPreview] = useState(false);

  const cvPath = "/cv/CV - MUHAMMAD FAKHRIZAL GARNINDYO.pdf";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      role: "Fullstack Web Developer",
      company: "Parthaistic Digital Agency",
      period: "Jun 2025 - Present",
      description: "Developing Finance and HR Management System using Laravel, Livewire, Tailwind CSS, and MySQL.",
    },
    {
      role: "Assistant Lecturer",
      company: "STT Nurul Fikri",
      period: "Sep 2025 - Feb 2026",
      description: "Teaching Assistant for Software Engineering course, guiding 3rd semester students.",
    },
    {
      role: "Freelance Fullstack Developer",
      company: "Self-Employed",
      period: "Apr 2024 - Present",
      description: "Building custom web applications for clients using modern technologies.",
    },
  ];

  return (
    <Layout title="About Me" showBack>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#697565] to-[#3C3D37] rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={MyProfile}
                    alt="Muhammad Fakhrizal Garnindyo"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>

              <div className="mt-6 bg-[#ECDFCC] rounded-2xl shadow-lg p-6 border border-[#697565]/30">
                <h3 className="text-lg font-bold mb-4 text-[#1E201E]">Personal Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiMapPin className="text-[#697565] mr-3 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#3C3D37]">Location</p>
                      <p className="font-medium text-[#1E201E]">Bogor, Jawa Barat, Indonesia</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiMail className="text-[#697565] mr-3 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#3C3D37]">Email</p>
                      <p className="font-medium text-[#1E201E] break-all">fakhrizalgarnindyo@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiGlobe className="text-[#697565] mr-3 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#3C3D37]">Languages</p>
                      <p className="font-medium text-[#1E201E]">Indonesian, English</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CV Download */}
              <div className="mt-6 bg-gradient-to-r from-[#3C3D37] to-[#1E201E] rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2 text-[#ECDFCC]">Curriculum Vitae</h3>
                <p className="text-sm text-[#ECDFCC]/70 mb-4">Download my comprehensive CV including professional experience, education, and skills.</p>
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#ECDFCC] text-[#1E201E] rounded-xl font-semibold hover:bg-[#697565] hover:text-[#ECDFCC] transition-all"
                >
                  <FiDownload /> Download CV (PDF)
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1E201E] mb-4">
                Muhammad <span className="text-[#697565]">Fakhrizal Garnindyo</span>
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#3C3D37] text-[#ECDFCC] rounded-full text-sm">Software Engineer</span>
                <span className="px-3 py-1 bg-[#697565] text-[#ECDFCC] rounded-full text-sm">Fullstack Developer</span>
                <span className="px-3 py-1 bg-[#1E201E] text-[#ECDFCC] rounded-full text-sm">Tech Enthusiast</span>
              </div>
              <p className="text-[#3C3D37] leading-relaxed">
                A passionate Software Engineer and Fullstack Developer with strong expertise in both frontend and backend development using modern web technologies. Experienced in building scalable, responsive, and user-friendly web applications, while also ensuring robust system architecture and performance. Actively involved in cybersecurity communities and academic environments, combining technical expertise with leadership, communication, and problem-solving skills.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E201E] mb-4 flex items-center">
                <FiBriefcase className="mr-2 text-[#697565]" /> Work Experience
              </h2>
              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#ECDFCC] rounded-xl p-4 border border-[#697565]/30 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="font-semibold text-[#1E201E]">{exp.role}</h3>
                      <span className="text-xs text-[#697565] flex items-center">
                        <FiCalendar className="mr-1" size={12} /> {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-[#3C3D37] mb-2">{exp.company}</p>
                    <p className="text-sm text-[#697565]">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E201E] mb-4 flex items-center">
                <FiAward className="mr-2 text-[#697565]" /> Education
              </h2>
              <div className="bg-[#ECDFCC] rounded-xl p-4 border border-[#697565]/30">
                <h3 className="font-semibold text-[#1E201E]">Sekolah Tinggi Teknologi Terpadu Nurul Fikri</h3>
                <p className="text-sm text-[#3C3D37]">Bachelor's Degree in Information Systems</p>
                <p className="text-xs text-[#697565] mt-1">Current Student</p>
              </div>
            </div>

            {/* Organizations */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E201E] mb-4 flex items-center">
                <FiUsers className="mr-2 text-[#697565]" /> Organizations & Roles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { role: "Core Team GDGoC", org: "STT NF Innovation Lab", period: "2025-Present" },
                  { role: "HRD Staff", org: "Nurul Fikri Student Cybersecurity Community", period: "2025-2026" },
                  { role: "Assistant Lecturer", org: "Software Engineering Course", period: "2025-2026" },
                  { role: "UI Designer", org: "Student Identity Management App", period: "2025-2026" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#ECDFCC] rounded-xl p-3 border border-[#697565]/30">
                    <h3 className="font-semibold text-sm text-[#1E201E]">{item.role}</h3>
                    <p className="text-xs text-[#3C3D37]">{item.org}</p>
                    <p className="text-xs text-[#697565] mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;