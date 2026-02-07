import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Format pesan untuk WhatsApp
    const whatsappMessage =
      `*New Message From Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:*%0A${formData.message}`;

    // Nomor WhatsApp yang ditentukan
    const phoneNumber = "6282123439604";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Buka WhatsApp dalam tab baru
    window.open(whatsappUrl, "_blank");

    // Reset form dan status
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSendSuccess(false), 5000);
    }, 1500);
  };

  return (
    <Layout title="Contact" showBack>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 bg-white dark:bg-gray-800">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Have a project in mind or want to discuss opportunities? Fill
                  out the form and your message will be sent directly to our
                  WhatsApp.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                      <FiPhone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        WhatsApp Direct
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +62 821 2343 9604
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Messages sent directly here
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                      <FiMail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Email Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        fakhrizalgarnindyo@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        For formal inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                      <FiLinkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Linkedin
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        fakhrizalgarnindyo
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        For professional networking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-900/50 p-3 rounded-lg">
                      <FiGithub className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Github
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Masfahri2005
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        View my projects and code
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                      <FiMapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Our Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Bogor, Indonesia
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Available for local projects
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="p-8 md:p-12 lg:p-16 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-md mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                      <FiMessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Send a Message via WhatsApp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Fill the form below and it will be sent directly to
                      WhatsApp
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {sendSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-xl text-sm"
                      >
                        <div className="flex">
                          <svg
                            className="h-5 w-5 text-green-500 dark:text-green-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Message sent successfully! Opening WhatsApp...
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiPhone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="+62 812 3456 7890"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Project Inquiry or Collaboration"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <FiMessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
                          placeholder="Tell us about your project, timeline, and budget..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSending}
                        className={`w-full flex items-center justify-center px-6 py-4 rounded-xl shadow-sm text-white font-medium transition-all duration-200 ${
                          isSending
                            ? "bg-green-400 dark:bg-green-600"
                            : "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 dark:from-green-700 dark:to-green-600 dark:hover:from-green-800 dark:hover:to-green-700"
                        }`}
                      >
                        {isSending ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiPhone className="mr-2 h-5 w-5" />
                            Send via WhatsApp
                            <FiArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
