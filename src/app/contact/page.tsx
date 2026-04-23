"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="py-12 max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Contact & Materials
        </h1>
        <p className="text-xl text-slate-400">Get in touch or access study materials</p>
      </motion.div>

      {/* Contact Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <ContactCard
          href="mailto:dpsonawane789@gmail.com"
          icon={<FaEnvelope />}
          title="Email"
          description="dpsonawane789@gmail.com"
          color="text-rose-400"
        />
        <ContactCard
          href="https://www.linkedin.com/in/devendra-sonawane-93763636a/"
          icon={<FaLinkedin />}
          title="LinkedIn"
          description="Connect with me"
          color="text-blue-500"
        />
        <ContactCard
          href="https://github.com/DevSon1024"
          icon={<FaGithub />}
          title="GitHub"
          description="View my projects"
          color="text-slate-200"
        />
      </motion.div>
    </div>
  );
}

// Reusable interactive card component
function ContactCard({ href, icon, title, description, color }: { href: string; icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <motion.a
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      href={href}
      target={href.startsWith("mailto") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 hover:border-indigo-500/50 transition-all group shadow-lg"
    >
      <div className={`text-5xl mb-6 ${color} group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-200 mb-2">{title}</h3>
      <p className="text-slate-400 font-medium text-sm">{description}</p>
    </motion.a>
  );
}