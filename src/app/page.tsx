"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      {/* Profile Image with Pulse Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-32 h-32 mb-8"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 animate-pulse blur-md opacity-50"></div>
        <div className="relative w-full h-full rounded-full border-2 border-slate-700 overflow-hidden bg-slate-800">
          <Image
            src="/assets/logo.png"
            alt="Devendra Sonawane"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Main Intro */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, World!</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-2">
          I am{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold">
            Devendra Sonawane
          </span>
          ,
        </h2>
        <h3 className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
          A Web Developer and Android Enthusiast
        </h3>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <SocialLink href="https://github.com/DevSon1024" icon={<FaGithub />} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/devendra-sonawane-93763636a/" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="https://www.instagram.com/dev.s0nawane" icon={<FaInstagram />} label="Instagram" />
      </motion.div>

      {/* Welcome Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 w-full max-w-3xl p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
      >
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
          Welcome to My Portfolio
        </h3>
        <p className="text-slate-300 leading-relaxed">
          This is my personal portfolio website where I showcase my journey as a developer. 
          Feel free to explore and learn more about my work, skills, and projects.
        </p>
      </motion.div>
    </div>
  );
}

// Reusable component for the social buttons
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all group"
    >
      <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
}