// src/pages/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import MyProfile from "../assets/images/profile/profile.jpg";
import {
  FiMapPin,
  FiMail,
  FiGlobe,
  FiDownload,
  FiBriefcase,
  FiUsers,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

const AboutMe = () => {
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
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span className="text-xs font-mono-tech uppercase tracking-[0.2em] text-muted">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-xl border border-line">
                <img
                  src={MyProfile}
                  alt="Muhammad Fakhrizal Garnindyo"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              <div className="mt-6 bg-surface rounded-xl p-6 border border-line">
                <h3 className="text-sm font-mono-tech uppercase tracking-wide text-muted mb-4">Personal Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiMapPin className="text-accent mr-3 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="font-medium text-ink">Bogor, Jawa Barat, Indonesia</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiMail className="text-accent mr-3 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted">Email</p>
                      <p className="font-medium text-ink break-all">fakhrizalgarnindyo@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiGlobe className="text-accent mr-3 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted">Languages</p>
                      <p className="font-medium text-ink">Indonesian, English</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CV Download */}
              <div className="mt-6 bg-ink rounded-xl p-6">
                <h3 className="text-sm font-mono-tech uppercase tracking-wide text-accent mb-2">Curriculum Vitae</h3>
                <p className="text-sm text-bg/70 mb-4 leading-relaxed">Download my comprehensive CV including professional experience, education, and skills.</p>
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-ink rounded-lg font-semibold hover:bg-accent-light transition-all"
                >
                  <FiDownload /> Download CV (PDF)
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-ink mb-4">
                Muhammad Fakhrizal Garnindyo
              </h1>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 bg-ink text-bg rounded-md text-sm font-medium">Software Engineer</span>
                <span className="px-3 py-1 bg-surface border border-line text-slate rounded-md text-sm font-medium">Fullstack Developer</span>
                <span className="px-3 py-1 bg-surface border border-line text-slate rounded-md text-sm font-medium">Tech Enthusiast</span>
              </div>
              <p className="text-muted leading-relaxed">
                A passionate Software Engineer and Fullstack Developer with strong expertise in both frontend and backend development using modern web technologies. Experienced in building scalable, responsive, and user-friendly web applications, while also ensuring robust system architecture and performance. Actively involved in cybersecurity communities and academic environments, combining technical expertise with leadership, communication, and problem-solving skills.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-xl font-semibold text-ink mb-5 flex items-center gap-2">
                <FiBriefcase className="text-accent" /> Work Experience
              </h2>
              <div className="space-y-3">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-surface rounded-xl p-5 border border-line hover:border-accent/40 transition-colors"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                      <h3 className="font-semibold text-ink">{exp.role}</h3>
                      <span className="text-xs text-muted font-mono-tech flex items-center shrink-0">
                        <FiCalendar className="mr-1" size={12} /> {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent-dark font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold text-ink mb-5 flex items-center gap-2">
                <FiAward className="text-accent" /> Education
              </h2>
              <div className="bg-surface rounded-xl p-5 border border-line">
                <h3 className="font-semibold text-ink">Sekolah Tinggi Teknologi Terpadu Nurul Fikri</h3>
                <p className="text-sm text-muted mt-1">Bachelor's Degree in Information Systems</p>
                <p className="text-xs text-accent-dark font-mono-tech mt-2 uppercase tracking-wide">Current Student</p>
              </div>
            </div>

            {/* Organizations */}
            <div>
              <h2 className="text-xl font-semibold text-ink mb-5 flex items-center gap-2">
                <FiUsers className="text-accent" /> Organizations & Roles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { role: "Core Team GDGoC", org: "STT NF Innovation Lab", period: "2025-Present" },
                  { role: "HRD Staff", org: "Nurul Fikri Student Cybersecurity Community", period: "2025-2026" },
                  { role: "Assistant Lecturer", org: "Software Engineering Course", period: "2025-2026" },
                  { role: "UI Designer", org: "Student Identity Management App", period: "2025-2026" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-surface rounded-lg p-4 border border-line">
                    <h3 className="font-semibold text-sm text-ink">{item.role}</h3>
                    <p className="text-xs text-muted mt-1">{item.org}</p>
                    <p className="text-xs text-accent-dark font-mono-tech mt-1.5">{item.period}</p>
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