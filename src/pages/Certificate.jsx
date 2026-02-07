import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import Certificate1 from "../assets/images/certificate/sertifikat1.jpg";
import Certificate2 from "../assets/images/certificate/sertifikat2.jpg";
import Certificate3 from "../assets/images/certificate/sertifikat3.png";
import Certificate4 from "../assets/images/certificate/sertifikat4.png";
import Certificate5 from "../assets/images/certificate/sertifikat5.png";
import Certificate6 from "../assets/images/certificate/sertifikat6.png";
import Certificate7 from "../assets/images/certificate/sertifikat7.png";
import Certificate8 from "../assets/images/certificate/sertifikat8.png";
import Certificate9 from "../assets/images/certificate/sertifikat9.png";
import Certificate10 from "../assets/images/certificate/sertifikat10.png";
import Certificate11 from "../assets/images/certificate/sertifikat11.png";
import Certificate12 from "../assets/images/certificate/sertifikat12.png";
import Certificate13 from "../assets/images/certificate/sertifikat13.png";
import Certificate14 from "../assets/images/certificate/sertifikat14.png";

const certificates = [
  {
    id: 1,
    title: "Peserta LDKS SMA Citra Nusa",
    issuer: "SMA Citra Nusa",
    date: "24 Oktober 2021",
    description: "A leadership and character development program aimed at fostering discipline, responsibility, teamwork, and strong leadership values among students.",
    imageUrl: Certificate1,
  },
  {
    id: 2,
    title: "Sertifikat KTI Terbaik",
    issuer: "SMA Citra Nusa",
    date: "17 Juli 2023",
    description:
      "An award granted for outstanding achievement in producing the best scientific paper at the senior high school level, recognizing critical thinking, analytical skills, and scientific methodology.",
    imageUrl: Certificate2,
  },
  {
    id: 3,
    title: "Workshop React JS Al-Quran",
    issuer: "Dunia Coding",
    date: "25 Maret 2025",
    description: "A hands-on workshop focused on web application development using React JS, with a case study on building an Al-Qur’an application to enhance modern programming skills.",
    imageUrl: Certificate3,
  },
  {
    id: 4,
    title: "PCAP - Python Programmer",
    issuer: "Python Institute",
    date: "25 Maret 2025",
    description:
      "An international certification in Python programming organized by NetAcademy, demonstrating proficiency in software development and problem-solving using Python.",
    imageUrl: Certificate4,
  },
  {
    id: 5,
    title: "Class Project Management",
    issuer: "My Skill",
    date: "7 Maret 2024",
    description: "Training covering fundamental project management concepts, including project planning, organization, control, and evaluation in an effective and structured manner.",
    imageUrl: Certificate5,
  },
  {
    id: 6,
    title: "Talk With Study",
    issuer: "BEM STT NF",
    date: "7 September 2023",
    description:
      "A collaborative discussion and networking event with the IT Club of Nurul Fikri Integrated Technology College, focusing on information technology trends, programming, and professional development.",
    imageUrl: Certificate6,
  },
  {
    id: 7,
    title: "GoTech Fest",
    issuer: "GDSC",
    date: "7 September 2023",
    description: "Building Products With Sustainable Impact",
    imageUrl: Certificate7,
  },
  {
    id: 8,
    title: "Webinar Pemanfaatan Artifisial Intellegent",
    issuer: "GDSC",
    date: "28 November 2023",
    description: "A webinar discussing the application and impact of Artificial Intelligence (AI) in education, including learning processes, educational management, and technological innovation.",
    imageUrl: Certificate8,
  },
  {
    id: 9,
    title: "Sertifikat LDMKM",
    issuer: "HIMA SI",
    date: "7 Januari 2024",
    description: "A leadership development program designed to enhance students’ managerial skills, communication abilities, decision-making, and organizational leadership.",
    imageUrl: Certificate9,
  },
  {
    id: 10,
    title: "Sertifikat Event Data Analyst",
    issuer: "Grow With Data",
    date: "20 April 2025",
    description: "Effective Strategies for Processing and Analyzing Data",
    imageUrl: Certificate10,
  },
  {
    id: 11,
    title: "Certificate of Key-Team NFSCC",
    issuer: "NFSCC",
    date: "30 Januari 2026",
    description:
      "This certificate recognizes my consistent involvement, dedication, and contributions to organizational activities throughout the 2025/2026 management period at Sekolah Tinggi Teknologi Terpadu Nurul Fikri.",
    imageUrl: Certificate11,
  },
  {
    id: 12,
    title: "Certificate of Appreciation Events Red Team Vs Blue Team",
    issuer: "NFSCC",
    date: "16 November 2025",
    description:
      "Awarded for serving as a committee member in the cybersecurity program Red Team vs Blue Team: From Attacker to Defender,organized by NFSCC.",
    imageUrl: Certificate12,
  },
  {
    id: 13,
    title: "Certificate of Appreciation Event Cysec 101",
    issuer: "NFSCC",
    date: "28 September 2025",
    description:
      "Awarded for serving as a committee member in the cybersecurity seminar Cyber Security 101: The Basics of Recognizing and Handling Cyber Threats, organized by the Nurul Fikri Student Cybersecurity Community.",
    imageUrl: Certificate13,
  },
  {
    id: 14,
    title: "Sertifikasi Asisten Dosen",
    issuer: "STT NF",
    date: "3 Februari 2026",
    description:
      "A certificate of appreciation awarded for serving as a Teaching Assistant in the Software Engineering course for third-semester students, recognizing contributions to academic and practical learning activities.",
    imageUrl: Certificate14,
  },
];

const Certificate = () => {
  return (
    <Layout title="My Certificates" showBack>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Certificates
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proof of achievements and professional recognition that I have
            obtained
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: certificate.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-md">
                    {certificate.date}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {certificate.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Issuer:</span>
                  <span>{certificate.issuer}</span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 mb-4">
                  {certificate.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Certificate ID: {certificate.id.toString().padStart(3, "0")}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    onClick={() => {
                      window.open(certificate.imageUrl, "_blank");
                    }}
                  >
                    View Certificate →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-2xl border border-blue-100 dark:border-gray-700 inline-block">
            <p className="text-gray-600 dark:text-gray-300">
              Total Certificates:{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {certificates.length}
              </span>{" "}
              • Click "View Certificate" to see full size
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Certificate;
