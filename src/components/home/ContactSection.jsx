// src/components/home/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheck,
  FiTerminal,
  FiMessageSquare,
} from "react-icons/fi";
import { personalInfo } from "../../data/portfolioData";

const ContactSection = ({ reducedMotion }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatted WhatsApp message link
    const text =
      `*PORTFOLIO INQUIRY - MUHAMMAD FAKHRIZAL*%0A%0A` +
      `*From:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Subject:* ${encodeURIComponent(formData.subject)}%0A` +
      `*Message:*%0A${encodeURIComponent(formData.message)}`;

    const waUrl = `https://wa.me/${personalInfo.whatsapp}?text=${text}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-accent-radial opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-purple" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-purple font-semibold">
              05 // Direct Dispatch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary">
            Initiate a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="mt-4 text-base text-text-secondary max-w-2xl">
            Have a project in mind, an engineering position to discuss, or looking for high-tier fullstack development? Let's build something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT CARDS & CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Channel Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-border-dark space-y-6 shadow-card-glow">
              <div className="flex items-center gap-3 pb-5 border-b border-border-dark">
                <div className="w-10 h-10 rounded-xl bg-surface border border-border-dark flex items-center justify-center text-accent-purple">
                  <FiTerminal size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    Direct Contact Channels
                  </h3>
                  <p className="font-mono text-xs text-emerald-400">
                    Average response: &lt; 24 hours
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-border-dark hover:border-accent-purple/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border-dark flex items-center justify-center text-accent-purple group-hover:text-white transition-colors">
                    <FiMail size={16} />
                  </div>
                  <div className="truncate">
                    <p className="font-mono text-[11px] text-text-muted">Electronic Mail</p>
                    <p className="font-medium text-xs sm:text-sm text-text-primary group-hover:text-accent-purple transition-colors truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-border-dark hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border-dark flex items-center justify-center text-emerald-400 group-hover:text-white transition-colors">
                    <FiMessageSquare size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-text-muted">Instant Messaging (WhatsApp)</p>
                    <p className="font-medium text-xs sm:text-sm text-text-primary group-hover:text-emerald-400 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface/50 border border-border-dark">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border-dark flex items-center justify-center text-accent-red">
                    <FiMapPin size={16} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-text-muted">Base Location</p>
                    <p className="font-medium text-xs sm:text-sm text-text-primary">
                      {personalInfo.location} (WIB / GMT+7)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-border-dark">
                <p className="font-mono text-xs text-text-muted mb-3">
                  Professional Networks
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface border border-border-dark hover:border-accent-purple text-xs font-mono text-text-secondary hover:text-white transition-all"
                  >
                    <FiGithub size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface border border-border-dark hover:border-accent-purple text-xs font-mono text-text-secondary hover:text-white transition-all"
                  >
                    <FiLinkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-surface-card border border-border-dark shadow-card-glow relative">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-dark">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Send Direct Message
                  </h3>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    Messages are routed straight to personal inbox &amp; phone
                  </p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>SECURE_PIPE</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block font-mono text-xs text-text-secondary mb-2">
                      Your Name / Organization <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border-dark text-text-primary text-sm placeholder:text-text-muted/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-mono text-xs text-text-secondary mb-2">
                      Email Address <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border-dark text-text-primary text-sm placeholder:text-text-muted/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-xs text-text-secondary mb-2">
                    Subject / Discussion Scope <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Fullstack Project / Engineering Role / Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border-dark text-text-primary text-sm placeholder:text-text-muted/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs text-text-secondary mb-2">
                    Project Details &amp; Message <span className="text-accent-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify timeline, objectives, or role specifications..."
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border-dark text-text-primary text-sm placeholder:text-text-muted/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-red text-white font-semibold text-sm tracking-wide hover:shadow-neon-dual transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 font-mono text-xs">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Dispatching Secure Message...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2 font-mono text-xs text-white">
                      <FiCheck size={16} /> Dispatched Successfully!
                    </span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <FiSend size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
