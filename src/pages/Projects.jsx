import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import ProjectCard from "../components/common/ProjectCard";
import { useNavigate } from "react-router-dom";
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

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Campus Vehicle Parking",
      description:
        "Campus Vehicle Parking is a web-based parking data management application developed as a final project for the Web Programming 2 course. This application is designed to simplify parking data management for vehicles on campus, improve data efficiency and accuracy, and provide users with quick and effective access to parking information.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      imageUrl: Project2,
      category: "Web Application",
      year: "2024",
    },
    {
      id: 2,
      title: "Puskesmas Data Management",
      description:
        "Comprehensive healthcare data management system for community health centers.",
      tags: ["PHP Native", "Bootstrap", "MySQL"],
      imageUrl: Project1,
      category: "Management System",
      year: "2024",
    },
    {
      id: 3,
      title: "Anime List",
      description:
        "Interactive platform for anime enthusiasts with personalized recommendations.",
      tags: ["Next.js", "Express.js", "Tailwind CSS"],
      imageUrl: Project3,
      category: "Entertainment",
      year: "2024",
    },
    {
      id: 4,
      title: "Medcare AI Website",
      description:
        "AI-powered healthcare platform with symptom checker and doctor matching.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
      imageUrl: Project4,
      category: "Healthcare AI",
      year: "2025",
    },
    {
      id: 5,
      title: "AI Career Advisor",
      description:
        "Intelligent career guidance system with personality assessment.",
      tags: ["React", "TypeScript", "Gemini API", "JSDPF"],
      imageUrl: Project5,
      category: "Career Development",
      year: "2025",
    },
    {
      id: 6,
      title: "GO-MAT INFORMATION",
      description:
        "Go-Mat is an online mathematics learning platform designed to help you improve your math skills from basic to advanced.",
      tags: ["React", "Three js", "Tailwindcss"],
      imageUrl: Project6,
      category: "Academic",
      year: "2025",
    },
    {
      id: 7,
      title: "QURAN DIGITAL APP",
      description:
        "QURAN DIGITAL APP is a digital application that provides easy access to the Quran, the holy book of Islam. This application is designed to help users read, understand, and appreciate the Quran better.",
      tags: ["React", "TypeScript", "Tailwindcss"],
      imageUrl: Project7,
      category: "Islamic",
      year: "2025",
    },
    {
      id: 8,
      title: "SMART KIA",
      description:
        "SmartKIA is a digital platform designed to securely and systematically record maternal and child health information. This application offers essential features such as health history records, immunization reminders, and online consultations with medical professionals.",
      tags: ["UI/UX", "Figma"],
      imageUrl: Project8,
      category: "Healthy",
      year: "2024",
    },
    {
      id: 9,
      title: "RELIEF SALING SILANG",
      description:
        "Saling Silang App is designed to facilitate digital communication, collaboration, and exchange of goods or services. With integrated modern technology, this app aims to create an efficient digital ecosystem that supports community-based activities.",
      tags: ["UI/UX", "Figma"],
      imageUrl: Project9,
      category: "Comunity Saling Silang",
      year: "2024",
    },
    {
      id: 10,
      title: "PARTHAFIN FINANCIAL WEB",
      description:
        "As Backend Developer, I designed and built a comprehensive financial management platform using Laravel and MySQL.",
      tags: ["Laravel", "MySQL"],
      imageUrl: Project10,
      category: "Company",
      year: "2025",
    },
  ];

  const handleProjectSelect = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Layout title="My Projects" showBack>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Projects
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some projects that I have created and developed. Each
            project represents a unique challenge that drives me to create
            innovative and effective solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full"
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectSelect(project.id)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            Showing {projects.length} projects • Click on any project to view
            details
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Projects;
