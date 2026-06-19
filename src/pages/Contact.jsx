// src/pages/Contact.jsx
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

    const whatsappMessage =
      `*New Message From Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:*%0A${formData.message}`;

    const phoneNumber = "6282123439604";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

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

  const contactItems = [
    {
      icon: <FiPhone className="h-5 w-5" />,
      title: "WhatsApp Direct",
      value: "+62 821 2343 9604",
      note: "Messages sent directly here",
    },
    {
      icon: <FiMail className="h-5 w-5" />,
      title: "Email",
      value: "fakhrizalgarnindyo@gmail.com",
      note: "For formal inquiries",
    },
    {
      icon: <FiLinkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "fakhrizalgarnindyo",
      note: "For professional networking",
    },
    {
      icon: <FiGithub className="h-5 w-5" />,
      title: "GitHub",
      value: "ZalStack",
      note: "View my projects and code",
    },
    {
      icon: <FiMapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bogor, Indonesia",
      note: "Available for local projects",
    },
  ];

  return (
    <Layout title="Contact" showBack>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="text-xs font-mono-tech uppercase tracking-[0.2em] text-muted">Get In Touch</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-ink">Let's Connect</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface rounded-2xl border border-line overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-14">
              <p className="text-muted mb-8 leading-relaxed">
                Have a project in mind or want to discuss opportunities? Fill
                out the form and your message will be sent directly to my
                WhatsApp.
              </p>

              <div className="space-y-6">
                {contactItems.map((item, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="flex-shrink-0 bg-ink text-accent p-2.5 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="text-slate text-sm">
                        {item.value}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-14 bg-ink">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center bg-accent p-3 rounded-full mb-4">
                    <FiMessageSquare className="h-5 w-5 text-ink" />
                  </div>
                  <h3 className="text-xl font-semibold text-bg mb-1">
                    Send a Message via WhatsApp
                  </h3>
                  <p className="text-sm text-bg/50">I usually reply within a day</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {sendSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-accent/15 border border-accent/30 text-accent rounded-lg p-3.5 text-sm"
                    >
                      <div className="flex items-center">
                        <svg className="h-4 w-4 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message sent successfully! Opening WhatsApp...
                      </div>
                    </motion.div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bg/80 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-4 w-4 text-bg/30" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-4 py-3 rounded-lg bg-bg/5 border border-bg/15 text-bg placeholder-bg/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bg/80 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-4 w-4 text-bg/30" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="block w-full pl-10 pr-4 py-3 rounded-lg bg-bg/5 border border-bg/15 text-bg placeholder-bg/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-bg/80 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiPhone className="h-4 w-4 text-bg/30" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-4 py-3 rounded-lg bg-bg/5 border border-bg/15 text-bg placeholder-bg/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-bg/80 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="block w-full px-4 py-3 rounded-lg bg-bg/5 border border-bg/15 text-bg placeholder-bg/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                      placeholder="Project Inquiry or Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bg/80 mb-2">
                      Your Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3">
                        <FiMessageSquare className="h-4 w-4 text-bg/30" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-4 py-3 rounded-lg bg-bg/5 border border-bg/15 text-bg placeholder-bg/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                        placeholder="Tell me about your project, timeline, and budget..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-1">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSending}
                      className={`w-full flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        isSending
                          ? "bg-bg/15 text-bg/60"
                          : "bg-accent text-ink hover:bg-accent-light"
                      }`}
                    >
                      {isSending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiPhone className="mr-2 h-4 w-4" />
                          Send via WhatsApp
                          <FiArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;