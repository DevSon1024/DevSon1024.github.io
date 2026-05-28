"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaHeart, FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaRocket, FaChevronRight } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="py-8 max-w-5xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">Me</span>
        </h1>
        <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">DIAGNOSTICS // BIOGRAPHY & SKILLSET</p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Main Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8"
      >
        
        {/* Left Column: Education Timeline (6 cols) */}
        <motion.div variants={itemVariants} className="lg:col-span-6 glass-card glow-card-indigo p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400 text-lg shadow-md">
              <FaGraduationCap />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Experience & Education</h2>
          </div>

          <div className="relative pl-8 border-l border-slate-800 space-y-10 my-2">
            {/* Timeline Item: Internship */}
            <div className="relative">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[38px] top-1.5 flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                Internship // 3 Months
              </span>
              <h4 className="text-slate-100 font-bold text-lg mt-3">Frontend Developer Intern</h4>
              <p className="text-slate-300 text-sm font-medium mt-1">CareerSahi Edtech Pvt. Ltd.</p>
              <ul className="text-slate-400 text-xs mt-2 space-y-1.5 list-disc list-inside font-sans">
                <li>Engineered reusable UI components using React.js + Tailwind CSS.</li>
                <li>Collaborated to integrate REST API layers into the client application.</li>
                <li>Optimized rendering efficiency and cross-browser compatibility.</li>
              </ul>
            </div>

            {/* Timeline Item 1 */}
            <div className="relative opacity-90 hover:opacity-100 transition-opacity">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[38px] top-1.5 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                2023 - 2026
              </span>
              <h4 className="text-slate-100 font-bold text-lg mt-3">Bachelor of Computer Applications</h4>
              <p className="text-slate-300 text-sm font-medium mt-1">Udhna Citizen College</p>
              <p className="text-slate-400 text-xs mt-0.5">Veer Narmad South Gujarat University</p>
              <p className="text-indigo-400/80 text-xs mt-2 font-mono font-bold">Status: Graduated / Completed</p>
            </div>

            {/* Timeline Item 2 (Standard High School or Foundation Info) */}
            <div className="relative opacity-65 hover:opacity-100 transition-opacity">
              <div className="absolute -left-[38px] top-1.5 flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-slate-700 ring-4 ring-slate-700/20"></span>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800/40 border border-slate-700/30 px-2 py-0.5 rounded">
                Completed
              </span>
              <h4 className="text-slate-300 font-semibold text-base mt-3">Higher Secondary Education</h4>
              <p className="text-slate-400 text-sm mt-1">Surat, Gujarat</p>
              <p className="text-slate-500 text-xs font-mono">Stream: Commerce with Computer Science Focus</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Skills Categorized (6 cols) */}
        <motion.div variants={itemVariants} className="lg:col-span-6 glass-card glow-card-purple p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 text-lg shadow-md">
              <FaCode />
            </div>
            <h2 className="text-xl font-bold text-slate-100">Technical Directory</h2>
          </div>

          <div className="space-y-6">
            {/* Category: Frontend & Web */}
            <div>
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 border-b border-white/5 pb-1">FRONTEND & WEB</h4>
              <div className="grid grid-cols-2 gap-2">
                <SkillTag icon={<FaReact className="text-[#61DAFB]" />} name="React.js" />
                <SkillTag icon={<SiNextdotjs className="text-white" />} name="Next.js" />
                <SkillTag icon={<SiTailwindcss className="text-[#38BDF8]" />} name="Tailwind" />
                <SkillTag icon={<FaJs className="text-[#F7DF1E]" />} name="JavaScript" />
              </div>
            </div>

            {/* Category: Native & Mobile */}
            <div>
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 border-b border-white/5 pb-1">MOBILE & NATIVE</h4>
              <div className="grid grid-cols-2 gap-2">
                <SkillTag icon={<SiKotlin className="text-[#7F52FF]" />} name="Kotlin" />
                <SkillTag icon={<SiFlutter className="text-[#02569B]" />} name="Flutter" />
              </div>
            </div>

            {/* Category: Languages & Scripts */}
            <div>
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 border-b border-white/5 pb-1">LANGUAGES & SCRIPTS</h4>
              <div className="grid grid-cols-2 gap-2">
                <SkillTag icon={<FaPython className="text-[#3776AB]" />} name="Python" />
                <SkillTag icon={<FaHtml5 className="text-[#E34F26]" />} name="HTML5 / CSS3" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Row 2: Journey Console & Interests */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        
        {/* Card 3: Journey Custom Terminal Console (8 cols) */}
        <motion.div variants={itemVariants} className="lg:col-span-8 glass-card glow-card-indigo">
          {/* Custom Terminal Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-slate-950/40">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-xs font-mono text-slate-500 tracking-wider">devendra_journey_logs.sh</span>
            <div className="w-12"></div>
          </div>
          
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 space-y-4">
            <div className="flex gap-2">
              <span className="text-indigo-400">devendra@portfolio:~$</span>
              <span className="text-slate-100">cat journey.txt</span>
            </div>
            
            <p className="text-slate-400 border-l-2 border-indigo-500/20 pl-4 py-1 italic">
              "I'm a BCA graduate and a passionate developer progressing in Python, Web, and Native Android App Development using structured clean code."
            </p>

            <p className="text-slate-300">
              My journey started with a strong curiosity of how systems orchestrate data under the hood. Graduating with a BCA degree gave me the theoretical base, but building apps is where my passion took off.
            </p>

            <p className="text-slate-300">
              I specialize in writing custom solutions, prioritizing modular composition and clean state architecture. I love building tools that automate repetitive tasks, as well as multimedia mobile applications that offer high-performance playback.
            </p>

            <div className="flex items-center gap-1.5 text-indigo-400 pt-2 animate-pulse">
              <span>●</span> Running diagnosis complete. Ready to compile new ideas.
            </div>
          </div>
        </motion.div>

        {/* Card 4: Interests & Focus (4 cols) */}
        <motion.div variants={itemVariants} className="lg:col-span-4 glass-card glow-card-amber p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-400 text-lg shadow-md">
                <FaHeart />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Interests & Focus</h2>
            </div>

            <ul className="space-y-3.5 text-slate-300 font-medium text-sm">
              <li className="flex items-start gap-2.5">
                <FaChevronRight className="text-amber-500 mt-1 shrink-0 text-2xs" />
                <span>Responsive Web App Development</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaChevronRight className="text-amber-500 mt-1 shrink-0 text-2xs" />
                <span>Android Jetpack Compose & Kotlin</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaChevronRight className="text-amber-500 mt-1 shrink-0 text-2xs" />
                <span>Cross-platform mobile apps (Flutter)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaChevronRight className="text-amber-500 mt-1 shrink-0 text-2xs" />
                <span>Modern Clean UI/UX Architectures</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-white/5 pt-6 mt-8 flex items-center gap-2 text-slate-400 font-mono text-xs">
            <FaRocket className="text-amber-400" /> CONSTANTLY GROWING
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

// Simple reusable skill tag
function SkillTag({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-2.5 p-3 bg-slate-950/40 border border-white/5 rounded-xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group cursor-default">
      <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-semibold text-xs text-slate-200">{name}</span>
    </div>
  );
}