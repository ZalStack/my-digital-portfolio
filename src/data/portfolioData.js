// src/data/portfolioData.js
// Centralized data repository for Muhammad Fakhrizal Garnindyo

// Project images
import Project1 from "../assets/images/project1/project.png";
import Project2 from "../assets/images/project2/project.png";
import Project3 from "../assets/images/project3/project.png";
import Project4 from "../assets/images/project4/project.png";
import Project5 from "../assets/images/project5/project.png";
import Project6 from "../assets/images/project6/project.png";
import Project7 from "../assets/images/project7/project.png";
import Project8 from "../assets/images/project8/project.png";
import Project9 from "../assets/images/project9/project.png";
import Project10 from "../assets/images/project10/project.png";
import Project11 from "../assets/images/project11/project.png";
import ProfileImg from "../assets/images/profile/profile.jpg";

export const personalInfo = {
  name: "Muhammad Fakhrizal Garnindyo",
  shortName: "Fakhrizal",
  role: "Software Engineer",
  subRole: "Fullstack Web & System Developer",
  tagline: "Architecting resilient fullstack platforms, high-performance backends, and immersive digital interfaces.",
  status: "Available for Software Engineering Roles & High-Impact Projects",
  location: "Jakarta, Indonesia",
  email: "fakhrizalgarnindyo@gmail.com",
  phone: "+62 821-2343-9604",
  whatsapp: "6282123439604",
  github: "https://github.com/muhammadfakhrizal",
  linkedin: "https://www.linkedin.com/in/muhammadfakhrizalgarnindyo",
  profileImage: ProfileImg,
  cvPath: "/cv/CV - MUHAMMAD FAKHRIZAL GARNINDYO.pdf",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Completed Projects", value: "11+" },
    { label: "Professional Certs", value: "14+" },
    { label: "Code Commitment", value: "100%" },
  ],
  bio: [
    "I am an enthusiastic Software Engineer and Fullstack Developer specializing in modern web ecosystems, cloud architectures, and scalable distributed systems.",
    "Currently building enterprise finance & HR management solutions at Parthaistic Digital Agency and mentoring aspiring computer scientists as an Assistant Lecturer in Software Engineering at STT Nurul Fikri.",
    "My focus centers on high-reliability backend engineering (Laravel, Node.js, Go), sleek modern reactive frontends (React, Next.js, Three.js, Tailwind CSS), and disciplined UI/UX engineering with Activity-Centered Design."
  ],
  principles: [
    {
      title: "Clean & Maintainable Architecture",
      desc: "Writing modular, self-documenting code with SOLID patterns that easily scales under traffic.",
    },
    {
      title: "Performance & Reliability First",
      desc: "Optimizing database queries, caching layers, and rendering cycles to maintain sub-100ms response times.",
    },
    {
      title: "User-Centric & Accessible UX",
      desc: "Bridging complex system engineering with intuitive, responsive, and WCAG AA-accessible interfaces.",
    },
  ]
};

export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      badge: "UI / 3D / Reactive",
      skills: [
        { name: "React.js / Next.js", level: 90, highlight: true },
        { name: "JavaScript (ES6+) / TypeScript", level: 88, highlight: true },
        { name: "Tailwind CSS / PostCSS", level: 94, highlight: true },
        { name: "Three.js / WebGL", level: 82, highlight: true },
        { name: "HTML5 / CSS3 / Animations", level: 95, highlight: false },
        { name: "Bootstrap / Alpine.js", level: 85, highlight: false },
      ]
    },
    {
      id: "backend",
      title: "Backend & Systems",
      badge: "APIs / Architecture",
      skills: [
        { name: "Laravel (PHP 8+)", level: 92, highlight: true },
        { name: "Node.js / Express.js", level: 86, highlight: true },
        { name: "RESTful API & Webhooks", level: 90, highlight: true },
        { name: "Python / Scripting", level: 82, highlight: false },
        { name: "Golang (Fundamentals)", level: 72, highlight: false },
        { name: "Authentication / JWT / OAuth", level: 85, highlight: false },
      ]
    },
    {
      id: "database",
      title: "Database & DevOps",
      badge: "Storage / Deployments",
      skills: [
        { name: "MySQL / Relational Modeling", level: 90, highlight: true },
        { name: "PostgreSQL", level: 80, highlight: false },
        { name: "MongoDB / NoSQL", level: 75, highlight: false },
        { name: "Git / GitHub Workflows", level: 88, highlight: true },
        { name: "Docker / Containerization", level: 70, highlight: false },
        { name: "Vercel / Cloudflare / Linux", level: 82, highlight: false },
      ]
    },
    {
      id: "design-tools",
      title: "Design & Methodologies",
      badge: "Design / Workflow",
      skills: [
        { name: "UI/UX Design (Figma)", level: 82, highlight: true },
        { name: "Activity-Centered Design (ACD)", level: 85, highlight: false },
        { name: "Midtrans Payment Integration", level: 86, highlight: true },
        { name: "Agile / Scrum Methodologies", level: 84, highlight: false },
      ]
    }
  ],
  softSkills: [
    "Problem Solving",
    "Technical Mentorship",
    "System Design Thinking",
    "Cross-functional Collaboration",
    "Clean Code Practices",
    "Fast Adaptive Learner"
  ]
};

export const experienceData = [
  {
    period: "Jun 2025 - Present",
    role: "Fullstack Web Developer",
    company: "Parthaistic Digital Agency",
    location: "Jakarta, Indonesia",
    type: "Professional",
    description: "Architecting and implementing scalable enterprise Finance and HR Management System (ParthaFin) using Laravel, Livewire, Tailwind CSS, and MySQL.",
    highlights: [
      "Designed secure database schema handling multi-tier financial transactions and reporting.",
      "Implemented real-time reporting dashboards with responsive data filtering and export features.",
      "Reduced API latency and optimized complex SQL queries by 35%."
    ],
    tech: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "JavaScript"]
  },
  {
    period: "Sep 2025 - Feb 2026",
    role: "Assistant Lecturer - Software Engineering",
    company: "STT Nurul Fikri",
    location: "Depok, Indonesia",
    type: "Academic",
    description: "Mentoring 3rd semester undergraduate students in Software Engineering fundamentals, software development life cycle (SDLC), UML modeling, and practical fullstack projects.",
    highlights: [
      "Guided 40+ students across software architecture paradigms and clean code guidelines.",
      "Conducted weekly lab sessions focusing on modern Git workflows and team-based development."
    ],
    tech: ["Software Engineering", "UML", "System Design", "Git", "Agile"]
  },
  {
    period: "Apr 2024 - Present",
    role: "Freelance Fullstack Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "Freelance",
    description: "Building production-grade custom web applications, SaaS dashboards, and e-commerce platforms with payment gateway integrations for various clients.",
    highlights: [
      "Built SoleMate Store e-commerce platform with automated Midtrans payment gateway.",
      "Developed AI-integrated healthcare diagnostic platforms with Gemini API integration."
    ],
    tech: ["React.js", "Next.js", "Laravel", "Tailwind CSS", "Midtrans", "MySQL"]
  },
  {
    period: "2025 - Present",
    role: "Core Team Member",
    company: "Google Developer Groups on Campus (GDGoC) - STT NF",
    location: "Depok, Indonesia",
    type: "Community",
    description: "Organizing tech workshops, hackathons, and fostering a collaborative developer ecosystem for cloud, web, and AI technology enthusiasts.",
    highlights: [
      "Facilitated backend development workshops and study groups.",
      "Coordinated campus tech events impacting 200+ student developers."
    ],
    tech: ["Community Leadership", "Event Organizing", "Google Cloud", "Web Tech"]
  },
  {
    period: "2024",
    role: "Certified Python Programmer (PCEP / PCAP)",
    company: "Python Institute & OpenEDG",
    location: "International Certification",
    type: "Certification",
    description: "Demonstrated proficiency in core Python programming, data structures, algorithm problem solving, and object-oriented architecture.",
    highlights: [
      "Validated fundamental algorithmic mastery and software design patterns."
    ],
    tech: ["Python", "Algorithms", "OOP", "Data Structures"]
  }
];

export const projectsData = [
  {
    id: 11,
    title: "SoleMate Store - Footwear E-Commerce",
    category: "Fullstack Web App",
    categoryFilter: "fullstack",
    featured: true,
    year: "2026",
    description: "Modern e-commerce platform for footwear sales featuring authenticated user portals, product inventory management, cart state, and automated Midtrans payment gateway checkout.",
    tags: ["Laravel", "Tailwind CSS", "Midtrans", "MySQL", "Alpine.js"],
    imageUrl: Project11,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 10,
    title: "ParthaFin Financial & HR Platform",
    category: "Enterprise System",
    categoryFilter: "management",
    featured: true,
    year: "2025",
    description: "Comprehensive enterprise financial tracking and human resource management platform developed for Parthaistic Digital Agency.",
    tags: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    imageUrl: Project10,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 4,
    title: "Medcare AI - Healthcare Diagnostic Platform",
    category: "Healthcare & AI",
    categoryFilter: "ai",
    featured: true,
    year: "2025",
    description: "AI-assisted clinical guidance portal integrating Google Gemini API for intelligent symptom checking, emergency triaging, and specialized doctor recommendations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
    imageUrl: Project4,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 5,
    title: "AI Career Advisor Platform",
    category: "Career & AI",
    categoryFilter: "ai",
    featured: false,
    year: "2025",
    description: "Intelligent career path counseling system featuring automated skills gap analysis, AI interview preparation, and dynamic PDF resume generation.",
    tags: ["React", "TypeScript", "Gemini API", "JSPDF", "Tailwind CSS"],
    imageUrl: Project5,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 6,
    title: "Go-Mat Mathematics Learning Engine",
    category: "Academic & 3D Web",
    categoryFilter: "fullstack",
    featured: false,
    year: "2025",
    description: "Interactive mathematics learning portal with 3D visualization modules, interactive graph simulation, and progressive quiz mechanics.",
    tags: ["React", "Three.js", "Tailwind CSS"],
    imageUrl: Project6,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 7,
    title: "Quran Digital Web App",
    category: "Islamic Web App",
    categoryFilter: "fullstack",
    featured: false,
    year: "2025",
    description: "Modern digital Quran reader with comprehensive Indonesian translation, audio recitations, bookmarking, and dark-mode reading experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Audio API"],
    imageUrl: Project7,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 1,
    title: "Campus Vehicle Parking Management",
    category: "Management System",
    categoryFilter: "management",
    featured: false,
    year: "2024",
    description: "Campus-wide parking slot monitor and barcode vehicle registration application built to enhance security and streamline vehicular check-ins.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    imageUrl: Project2,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 2,
    title: "Puskesmas Medical Records Management",
    category: "Management System",
    categoryFilter: "management",
    featured: false,
    year: "2024",
    description: "Comprehensive public health center information system handling patient queues, outpatient medical logs, and pharmacy inventory.",
    tags: ["PHP", "Bootstrap", "MySQL"],
    imageUrl: Project1,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 3,
    title: "Anime List Community Hub",
    category: "Entertainment Platform",
    categoryFilter: "fullstack",
    featured: false,
    year: "2024",
    description: "Fast fullstack anime exploration portal with custom watchlists, community reviews, and real-time streaming schedule synchronization.",
    tags: ["Next.js", "Express.js", "Tailwind CSS"],
    imageUrl: Project3,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 8,
    title: "SmartKIA Maternal & Child Health System",
    category: "UI/UX & Product Design",
    categoryFilter: "design",
    featured: false,
    year: "2024",
    description: "Systematic digital UI/UX architecture designed to record maternal health milestones, immunization charts, and infant growth curves securely.",
    tags: ["UI/UX Design", "Figma", "Design Systems"],
    imageUrl: Project8,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
  {
    id: 9,
    title: "Relief Saling Silang App",
    category: "UI/UX & Product Design",
    categoryFilter: "design",
    featured: false,
    year: "2024",
    description: "Activity-Centered UI/UX architecture for peer-to-peer social bartering, donation logistics, and disaster community relief distribution.",
    tags: ["UI/UX Design", "Figma", "User Research"],
    imageUrl: Project9,
    demoUrl: "https://github.com/muhammadfakhrizal",
    githubUrl: "https://github.com/muhammadfakhrizal",
  },
];
