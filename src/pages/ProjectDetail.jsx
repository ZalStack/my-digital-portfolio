import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import {
  FiGithub,
  FiExternalLink,
  FiCalendar,
  FiLayers,
  FiArrowLeft,
} from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import Project2 from "../assets/images/project2/project.png";
import Project1 from "../assets/images/project1/project.png";
import Project3 from "../assets/images/project3/project.png";
import Project4 from "../assets/images/project4/project.png";
import Project5 from "../assets/images/project5/project.png";
import Project6 from "../assets/images/project6/project.png";
import Project7 from "../assets/images/project7/project.png";
import Project8 from "../assets/images/project8/project.png";
import Project9 from "../assets/images/project9/project.png";
import Project10 from "../assets/images/project10/project.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id) || 1;

  const projects = [
    {
      id: 1,
      title: "Campus Vehicle Parking",
      description:
        "Campus Vehicle Parking is a web-based parking data management application developed as a final project for the Web Programming 2 course. This application is designed to simplify parking data management for vehicles on campus, improve data efficiency and accuracy, and provide users with quick and effective access to parking information.",
      longDescription: [
        "The Campus Parking System is a comprehensive solution designed to streamline parking operations in university environments. The system addresses common challenges such as parking space allocation, vehicle management, driver coordination, and more.",
        "The system features real-time parking slot availability visualization using campus data input by users.",
        "Administrators benefit from an advanced dashboard with parking usage pattern analysis and user management tools for campus parking services.",
      ],
      tags: ["Laravel", "Bootstrap", "MySQL"],
      technologies: ["Laravel", "Bootstrap 5", "MySQL"],
      features: [
        "Real-time parking slot availability",
        "Vehicle registration and management",
        "Parking history and reports",
        "User role management (Admin, Staff, User)",
        "Payment system integration",
        "QR code based entry/exit",
      ],
      imageUrl: Project2,
      githubUrl:
        "https://github.com/junabrayy/prakweb2/tree/projek2laravel/project-laravel",
      liveUrl: null,
      category: "Web Application",
      year: "2024",
    },
    {
      id: 2,
      title: "Puskesmas Data Management",
      description:
        "Comprehensive healthcare data management system for community health centers.",
      longDescription: [
        "The Puskesmas Data Management System revolutionizes how community health centers in Indonesia manage patient data, Puskesmas staff, and health reports.",
        "This comprehensive solution replaces paper-based systems with a secure and efficient digital platform that integrates patient medical records and fulfills government reporting requirements.",
      ],
      tags: ["PHP Native", "Bootstrap", "MySQL"],
      technologies: ["PHP", "Bootstrap 4", "MySQL"],
      features: [
        "Patient registration and medical records",
        "Appointment scheduling",
        "Medicine inventory management",
        "Staff management system",
        "Report generation",
        "Data backup and recovery",
      ],
      imageUrl: Project1,
      githubUrl: "https://github.com/maszal_2005/puskesmas-system",
      liveUrl: null,
      category: "Management System",
      year: "2024",
    },
    {
      id: 3,
      title: "Anime List",
      description:
        "Interactive platform for anime enthusiasts with personalized recommendations.",
      longDescription: [
        "The Anime List platform provides a comprehensive database of anime series and movies with personalized recommendations based on user preferences.",
        "Features include user comments, watchlists, and seasonal anime tracking",
        "The system uses machine learning to suggest new anime based on user comments.",
      ],
      tags: ["Next.js", "Express.js", "Tailwind CSS", "Framer Motion"],
      technologies: [
        "Next.js",
        "Express.js",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
      ],
      features: [
        "Anime database with search and filter",
        "User watchlist and favorites",
        "Rating and review system",
        "Personalized recommendations",
        "Seasonal anime tracking",
        "User profiles and social features",
      ],
      imageUrl: Project3,
      githubUrl: "https://github.com/Masfahri2005/animelist-new-update.git",
      liveUrl: null,
      category: "Entertainment",
      year: "2024",
    },
    {
      id: 4,
      title: "Medcare AI Website",
      description:
        "AI-powered healthcare platform with symptom checker and doctor matching.",
      longDescription: [
        "Medcare AI is an advanced healthcare platform that uses artificial intelligence to provide preliminary health assessments.",
        "The system analyzes symptoms and medical history to suggest possible conditions and recommend appropriate specialists.",
        "It also features telemedicine integration for virtual consultations with healthcare professionals.",
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Gemini API",
        "Node.js",
      ],
      features: [
        "AI-powered symptom checker",
        "Doctor matching system",
        "Telemedicine integration",
        "Medical record management",
        "Appointment scheduling",
        "Health articles and resources",
      ],
      imageUrl: Project4,
      githubUrl: "https://github.com/Masfahri2005/mecare-ai.git",
      liveUrl: null,
      category: "Healthcare AI",
      year: "2025",
    },
    {
      id: 5,
      title: "AI Career Advisor",
      description:
        "Intelligent career guidance system with personality assessment.",
      longDescription: [
        "The AI Career Advisor helps users discover suitable career paths based on their skills, interests, and personality traits.",
        "It uses advanced algorithms to match users with potential careers and provides learning paths to acquire necessary skills.",
        "The system also offers resume building tools and interview preparation resources.",
      ],
      tags: ["React", "TypeScript", "Gemini API", "JSDPF"],
      technologies: ["React", "TypeScript", "Gemini API", "JSDPF", "Node.js"],
      features: [
        "Personality and skills assessment",
        "Career matching algorithm",
        "Learning path recommendations",
        "Resume builder tool",
        "Interview preparation",
        "Job market insights",
      ],
      imageUrl: Project5,
      githubUrl: "https://github.com/Masfahri2005/ai-career-advisor.git",
      liveUrl: null,
      category: "Career Development",
      year: "2025",
    },
    {
      id: 6,
      title: "GO-MAT INFORMATION",
      description:
        "Go-Mat is an online mathematics learning platform designed to help you improve your math skills from basic to advanced.",
      longDescription: [
        "GO-MAT is a comprehensive mathematics learning platform covering topics from basic arithmetic to advanced calculus.",
        "The platform features interactive lessons, practice problems with instant feedback, and progress tracking.",
        "Adaptive learning technology adjusts difficulty based on user performance for personalized learning experience.",
      ],
      tags: ["React", "TypeScript", "Tailwindcss"],
      technologies: ["React", "TypeScript", "Tailwindcss"],
      features: [
        "Interactive math lessons",
        "Practice problems with solutions",
        "Progress tracking",
        "Adaptive learning algorithm",
        "Math games and challenges",
        "Teacher dashboard",
      ],
      imageUrl: Project6,
      githubUrl: "https://github.com/Masfahri2005/Jago-Matematika.git",
      liveUrl: null,
      category: "Academic",
      year: "2025",
    },
    {
      id: 7,
      title: "QURAN DIGITAL APP",
      description:
        "QURAN DIGITAL APP is a digital application that provides easy access to the Quran, the holy book of Islam. This application is designed to help users read, understand, and appreciate the Quran better.",
      longDescription: [
        "The Quran Digital App provides a complete digital Quran experience with multiple translations, tafsir, and recitations.",
        "Features include bookmarking, note-taking, and search functionality across the entire text.",
        "The app also includes prayer times, qibla direction, and Islamic calendar integration.",
      ],
      tags: ["React", "TypeScript", "Tailwindcss"],
      technologies: ["React", "TypeScript", "Tailwindcss"],
      features: [
        "Complete Quran text with translations",
        "Audio recitations",
        "Bookmarks and notes",
        "Search functionality",
        "Prayer times and qibla direction",
        "Islamic calendar",
      ],
      imageUrl: Project7,
      githubUrl: "https://github.com/Masfahri2005/elquran-app.git",
      liveUrl: null,
      category: "Islamic",
      year: "2025",
    },
    {
      id: 8,
      title: "SMART KIA",
      description:
        "SmartKIA is a digital platform designed to securely and systematically record maternal and child health information. This application offers essential features such as health history records, immunization reminders, and online consultations with medical professionals.",
      longDescription: [
        "SMART KIA is a comprehensive maternal and child health platform for tracking pregnancies, child development, and vaccinations.",
        "The system provides automated reminders for checkups and immunizations, and allows secure communication with healthcare providers.",
        "Features include growth tracking, health record management, and educational resources for parents.",
      ],
      tags: ["UI/UX", "Figma"],
      technologies: ["Figma", "Prototyping"],
      features: [
        "Pregnancy tracking",
        "Child growth monitoring",
        "Immunization schedule",
        "Health record management",
        "Doctor consultation",
        "Educational resources",
      ],
      imageUrl: Project8,
      githubUrl:
        "https://www.figma.com/design/WR2EZhLzTGhT6FLmuU8y0m/PSI-SMART-KIA?node-id=0-1&t=P4klYPIXnusGTrp8-1",
      liveUrl: null,
      category: "Healthy",
      year: "2024",
    },
    {
      id: 9,
      title: "RELIEF SALING SILANG",
      description:
        "Saling Silang App is designed to facilitate digital communication, collaboration, and exchange of goods or services. With integrated modern technology, this app aims to create an efficient digital ecosystem that supports community-based activities.",
      longDescription: [
        "RELIEF SALING SILANG is a community platform for sharing resources, services, and information.",
        "The app connects people who need help with those who can provide assistance, creating a supportive community network.",
        "Features include resource sharing, service exchange, community announcements, and volunteer coordination.",
      ],
      tags: ["UI/UX", "Figma"],
      technologies: ["Figma", "Prototyping"],
      features: [
        "Resource sharing platform",
        "Service exchange system",
        "Community announcements",
        "Volunteer coordination",
        "Emergency response",
        "Event management",
      ],
      imageUrl: Project9,
      githubUrl:
        "https://www.figma.com/design/S8E53QL21tRKaRGg9mUsS2/RPL-SALING-SILANG_SI05?node-id=0-1&t=JSKpOpYpbEJ6uegu-1",
      liveUrl: null,
      category: "Community Platform",
      year: "2024",
    },
    {
      id: 10,
      title: "PARTHAFIN FINANCIAL WEB",
      description:
        "As Backend Developer, I designed and built a comprehensive financial management platform using Laravel and MySQL.",
      longDescription: [
        "Parthafin is a comprehensive financial management platform developed for PT Parthaistic Digital Agency, designed to streamline financial operations, provide real-time insights, and leverage AI-powered analytics for data-driven decision-making. As the Backend Developer, I led the end-to-end development of the system’s backend infrastructure, ensuring scalability, security, and seamless integration with the frontend.",
        "The platform features a robust dashboard for tracking income, expenses, and financial reports, along with an integrated AI engine for advanced financial analysis. Built with Laravel and MySQL, the system supports role-based access, automated calculations, and secure data handling—empowering finance teams to manage transactions, generate reports, and analyze financial health with precision and efficiency",
      ],
      tags: ["Laravel 12", "MySQL"],
      technologies: ["Larevel", "MySQL", "Google AI Studio"],
      features: [
        "CRUD Income/Expense, Invoice, Payment Receipt, Pocket",
        "AI Analysis Financial",
        "Role-Based Access Control (Admin, Finance Staff)",
        "Dashboard User Admin & Finance Staff",
        "PDF reports with password protection",
        "Wallet system with auto-balance calculation & transfers",
        "Category management with account codes"
      ],
      imageUrl: Project10,
      githubUrl:
        "",
      liveUrl: null,
      category: "Company",
      year: "2025",
    },
  ];

  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <Layout title={project.title} showBack>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          onClick={() => navigate("/projects")}
          whileHover={{ x: -5 }}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <FiCalendar className="mr-1" /> {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={`${tech}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors shadow-lg"
                  aria-label="View project on GitHub"
                >
                  <FiGithub className="mr-2 text-lg" /> GitHub Repository
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all shadow-lg"
                  aria-label="Live Demo Project"
                >
                  <FiExternalLink className="mr-2 text-lg" /> Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FiLayers className="mr-3 text-blue-500" />
                Project Overview
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                {project.longDescription.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600"
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Project Details Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-6"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                Project Details
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Category
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.category}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Year Completed
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.year}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                    Share This Project
                  </h4>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={`https://twitter.com/intent/tweet?text=Check out ${project.title} by @maszal_08&url=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${project.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
