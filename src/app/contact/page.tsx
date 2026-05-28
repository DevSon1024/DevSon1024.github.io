"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">(
    "idle",
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = (field: string, val: string) => {
    if (!val) setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    // Simulate API connection
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="py-8 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Initialize{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">
            Connection
          </span>
        </h1>
        <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">
          COMMUNICATION // DIRECT LINK & MESSAGE ROUTER
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Main Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column: Direct Links (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <motion.div variants={itemVariants}>
            <ContactCard
              href="mailto:dpsonawane789@gmail.com"
              icon={<FaEnvelope className="text-rose-400" />}
              title="Direct Email"
              description="dpsonawane789@gmail.com"
              accent="rose"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactCard
              href="https://www.linkedin.com/in/devson1024"
              icon={<FaLinkedin className="text-blue-400" />}
              title="LinkedIn Node"
              description="Devson1024"
              accent="blue"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactCard
              href="https://github.com/DevSon1024"
              icon={<FaGithub className="text-slate-200" />}
              title="GitHub Logs"
              description="DevSon1024"
              accent="slate"
            />
          </motion.div>
        </div>

        {/* Right Column: Connection Form (7 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 glass-card glow-card-indigo p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <h3 className="font-bold text-lg text-slate-100">
              Send Secured Message
            </h3>
            <span className="text-xs font-mono text-slate-500">
              PROTOCOL // SSL_V3
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <FaCheckCircle className="text-5xl text-emerald-400 mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-slate-100 mb-2">
                    Message Dispatched!
                  </h4>
                  <p className="text-slate-400 text-sm max-w-sm font-mono">
                    Connection established. Data package routed successfully.
                    Will reply shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => handleFocus("name")}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-950/60 border border-white/5 rounded-xl font-mono text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors pt-6"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-4 pointer-events-none transition-all duration-300 font-mono text-xs ${
                        focusedField === "name" || formData.name
                          ? "top-1.5 text-indigo-400 text-[10px]"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      SENDER_NAME
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => handleFocus("email")}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-950/60 border border-white/5 rounded-xl font-mono text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors pt-6"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 pointer-events-none transition-all duration-300 font-mono text-xs ${
                        focusedField === "email" || formData.email
                          ? "top-1.5 text-indigo-400 text-[10px]"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      SENDER_EMAIL
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => handleFocus("message")}
                      onBlur={(e) => handleBlur("message", e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-950/60 border border-white/5 rounded-xl font-mono text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors pt-6 resize-none"
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 pointer-events-none transition-all duration-300 font-mono text-xs ${
                        focusedField === "message" || formData.message
                          ? "top-1.5 text-indigo-400 text-[10px]"
                          : "top-4 text-slate-500"
                      }`}
                    >
                      MESSAGE_PAYLOAD
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm tracking-widest font-mono flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] disabled:opacity-55"
                  >
                    {formStatus === "sending" ? (
                      <>DISPATCHING...</>
                    ) : (
                      <>
                        TRANSMIT_MESSAGE <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Reusable card for links
function ContactCard({
  href,
  icon,
  title,
  description,
  accent,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}) {
  const accentClasses: Record<string, string> = {
    rose: "hover:border-rose-500/30 hover:bg-rose-500/5 hover:shadow-[0_0_20px_rgba(244,63,94,0.1)]",
    blue: "hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    slate:
      "hover:border-slate-500/30 hover:bg-slate-500/5 hover:shadow-[0_0_20px_rgba(148,163,184,0.1)]",
  };

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`contact-card-custom flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-2xl group ${accentClasses[accent]}`}
    >
      <div className="contact-icon-custom text-3xl shrink-0 p-3 rounded-xl shadow-inner group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-xs font-mono font-bold text-slate-500 tracking-wider group-hover:text-slate-400 transition-colors uppercase">
          {title}
        </h4>
        <p className="text-sm font-semibold text-slate-200 mt-1 break-all">
          {description}
        </p>
      </div>
    </a>
  );
}
