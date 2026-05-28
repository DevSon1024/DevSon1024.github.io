"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaCode, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiReact, SiNextdotjs, SiPython, SiTailwindcss } from "react-icons/si";

// Reusable springy letter-by-letter typing animation component
function TypingText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 220, damping: 14 } 
    }
  };

  return (
    <motion.span 
      variants={container} 
      initial="hidden" 
      animate="visible" 
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => (
            <motion.span 
              key={charIndex} 
              variants={letterVariants} 
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="py-6 max-w-6xl mx-auto">
      {/* Introduction Bento Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        
        {/* Card 1: Profile & Intro (8 columns) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 glass-card glow-card-indigo p-6 sm:p-8 flex flex-col justify-between min-h-[340px]"
        >
          <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-6">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AVAILABLE FOR OPPORTUNITIES
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-100">
                Hi, I'm{" "}
                <TypingText 
                  text="Devendra Sonawane" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 font-extrabold"
                />
              </h1>
              <p className="text-slate-300 font-medium text-base mt-2 max-w-xl">
                A Web Developer and Android Enthusiast who builds highly functional and visually stunning applications.
              </p>
            </div>
            
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl shrink-0 self-center sm:self-start">
              <Image
                src="/assets/profile.png"
                alt="Devendra Sonawane"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-between border-t border-white/5 pt-6">
            <p className="text-slate-400 text-xs sm:text-sm font-mono flex items-center gap-2">
              <FaLaptopCode className="text-indigo-400 text-base" /> BCA Graduate from UCCSURAT
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              More About Me <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </motion.div>

        {/* Card 2: Stats Display (4 columns) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 glass-card glow-card-amber p-6 sm:p-8 flex flex-col justify-between min-h-[340px]"
        >
          <div>
            <h3 className="font-mono text-xs tracking-widest text-amber-400 font-bold uppercase mb-4">SYSTEM STATS</h3>
            <div className="space-y-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]">07+</span>
                <span className="text-slate-400 font-mono text-xs">ACTIVE PROJECTS</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-100">BCA</span>
                <span className="text-slate-400 font-mono text-xs">GRADUATED (2023 - 2026)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">GIT</span>
                <span className="text-slate-400 font-mono text-xs">HIGH COMMIT ACTIVITY</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-6 text-slate-400 text-xs font-mono">
            CORE INTEREST: MOBILE & FULLSTACK
          </div>
        </motion.div>

        {/* Card 3: Interactive Tech Stack (6 columns) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 glass-card glow-card-violet p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <FaCode className="text-purple-400 text-lg" />
            <h3 className="font-mono text-xs tracking-widest text-slate-400 font-bold uppercase">TECH STACK DIRECTORY</h3>
          </div>
          
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            Hover over elements to initialize terminal diagnostics. Currently developing native and web integrations.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <SkillBadge icon={<SiKotlin className="text-[#7F52FF]" />} name="Kotlin" glow="hover:border-[#7F52FF]/40 hover:bg-[#7F52FF]/5" />
            <SkillBadge icon={<SiFlutter className="text-[#02569B]" />} name="Flutter" glow="hover:border-[#02569B]/40 hover:bg-[#02569B]/5" />
            <SkillBadge icon={<SiReact className="text-[#61DAFB]" />} name="React" glow="hover:border-[#61DAFB]/40 hover:bg-[#61DAFB]/5" />
            <SkillBadge icon={<SiNextdotjs className="text-white" />} name="Next.js" glow="hover:border-white/20 hover:bg-white/5" />
            <SkillBadge icon={<SiPython className="text-[#3776AB]" />} name="Python" glow="hover:border-[#3776AB]/40 hover:bg-[#3776AB]/5" />
            <SkillBadge icon={<SiTailwindcss className="text-[#06B6D4]" />} name="Tailwind" glow="hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/5" />
          </div>
        </motion.div>

        {/* Card 4: Flagship Project - Nosved Player (6 columns) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 glass-card glow-card-indigo p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-indigo-400 text-lg" />
                <h3 className="font-mono text-xs tracking-widest text-slate-400 font-bold uppercase">FLAGSHIP PROJECT</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold">
                LATEST APP
              </span>
            </div>

            <div className="flex gap-4 items-center mb-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-md shrink-0">
                <Image
                  src="/assets/NosvedPlayer_icon.png"
                  alt="Nosved Player"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-100">Nosved Player</h4>
                <p className="text-slate-400 text-xs font-mono">ExoPlayer / FFmpeg / Kotlin</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Advanced video player for Android supporting hardware/software decoding, dynamic gesture controls, and responsive styling.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/5 pt-6">
            <span className="text-xs font-mono text-slate-500">v1.2.0-stable</span>
            <Link 
              href="/projects/nosved-player" 
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              Download APK <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </motion.div>

        {/* Card 5: Connect Hub & Socials (7 columns) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-7 glass-card glow-card-indigo p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-mono text-xs tracking-widest text-slate-400 font-bold uppercase mb-4">CONNECT GATEWAY</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Find my repository codebase, visual works on Instagram, and professional network logs on LinkedIn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://github.com/DevSon1024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group font-mono text-xs"
            >
              <span className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                <FaGithub className="text-lg text-slate-400 group-hover:text-white" /> GITHUB LOGS
              </span>
              <FaArrowRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            <a 
              href="https://www.linkedin.com/in/devendra-sonawane-93763636a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group font-mono text-xs"
            >
              <span className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                <FaLinkedin className="text-lg text-blue-400" /> LINKEDIN NETWORK
              </span>
              <FaArrowRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
            <a 
              href="https://www.instagram.com/dev.s0nawane"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group font-mono text-xs"
            >
              <span className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                <FaInstagram className="text-lg text-pink-400" /> INSTAGRAM
              </span>
              <FaArrowRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* Card 6: Secondary Featured - PixChive (5 columns) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-5 glass-card glow-card-violet p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start gap-4 mb-4">
              <h4 className="font-bold text-slate-100 text-lg">PixChive Gallery</h4>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-2xs font-mono font-bold">
                MANGA / GALLERY
              </span>
            </div>

            <div className="flex gap-3 items-center mb-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                <Image
                  src="/assets/PixChive_icon.png"
                  alt="PixChive"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-slate-400 text-xs font-mono">Jetpack Compose / Android app</p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Local image archiver and optimized reader featuring custom folder trees.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <Link 
              href="/projects/pixchive" 
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 hover:underline inline-flex items-center gap-1"
            >
              Explore Releases <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

// Tech Stack badge component
function SkillBadge({ icon, name, glow }: { icon: React.ReactNode; name: string; glow: string }) {
  return (
    <div className={`flex items-center gap-2 p-2.5 bg-slate-950/40 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer ${glow}`}>
      <span className="text-base shrink-0">{icon}</span>
      <span className="font-mono text-xs text-slate-200 font-semibold">{name}</span>
    </div>
  );
}
