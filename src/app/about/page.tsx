"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaHeart, FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaRocket } from "react-icons/fa";
import { SiFlutter, SiKotlin } from "react-icons/si";

export default function About() {
  // Framer Motion variants for a staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-12 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-slate-400">Get to know the person behind the code</p>
      </motion.div>

      {/* Main Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
      >
        {/* Education Card */}
        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-indigo-500/20">
            <FaGraduationCap />
          </div>
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="relative pl-6 border-l-2 border-indigo-500/50">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-2"></div>
            <h4 className="text-indigo-400 font-semibold text-lg">Bachelor of Computer Applications</h4>
            <p className="text-slate-200 font-medium mt-1">Udhna Citizen College</p>
            <p className="text-slate-400 text-sm">Veer Narmad South Gujarat University</p>
            <p className="text-slate-500 text-sm font-bold mt-2">2023 - 2026</p>
          </div>
        </motion.div>

        {/* Technical Skills Card */}
        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-indigo-500/20">
            <FaCode />
          </div>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <SkillBadge icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
            <SkillBadge icon={<FaCss3Alt className="text-blue-500" />} name="CSS3" />
            <SkillBadge icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
            <SkillBadge icon={<FaPython className="text-blue-400" />} name="Python" />
            <SkillBadge icon={<FaReact className="text-cyan-400" />} name="React" />
            <SkillBadge icon={<SiFlutter className="text-sky-400" />} name="Flutter" />
            <SkillBadge icon={<SiKotlin className="text-sky-400" />} name="Kotlin" />
          </div>
        </motion.div>
      </motion.div>

      {/* Interests & Journey Row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8"
      >
        {/* Interests Card */}
        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-indigo-500/20">
            <FaHeart />
          </div>
          <h2 className="text-2xl font-bold mb-6">Interests & Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Web Development</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Android Development</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Problem Solving</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Open Source</li>
            </ul>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Learning New Tech</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Building Creative Solutions</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> UI/UX Design</li>
            </ul>
          </div>
        </motion.div>

        {/* Journey Card */}
        <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-indigo-500/20 mx-auto">
            <FaRocket />
          </div>
          <h2 className="text-2xl font-bold mb-6">My Journey</h2>
          <div className="text-slate-300 space-y-4 max-w-2xl mx-auto leading-relaxed">
            <p>
              I'm a <span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-medium">passionate beginner in coding</span>, rapidly progressing in Python, Web, and App Development with creative, media-driven learning.
            </p>
            <p>
              Currently pursuing my Bachelor's in Computer Applications, I'm dedicated to transforming ideas into functional applications. My journey started with curiosity about how things work behind the scenes, and now I'm building solutions that make a difference.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Reusable component for the small skill tags
function SkillBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-2 p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
      <span className="text-xl">{icon}</span>
      <span className="font-medium text-sm text-slate-200">{name}</span>
    </div>
  );
}