"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaPython,
  FaCode,
  FaDownload,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa";

import projectsData from "@/data/projects.json";

const getProjectIcon = (iconName?: string) => {
  switch (iconName) {
    case "FaLaptopCode":
      return <FaLaptopCode className="text-3xl text-purple-500" />;
    case "FaCode":
      return <FaCode className="text-3xl text-indigo-500" />;
    case "FaDumbbell":
      return <FaDumbbell className="text-3xl text-amber-500" />;
    case "FaPlaneDeparture":
      return <FaPlaneDeparture className="text-3xl text-indigo-500" />;
    case "FaPython":
      return <FaPython className="text-3xl text-[#3776AB]" />;
    default:
      return <FaCode className="text-3xl text-indigo-500" />;
  }
};

const projects = [...projectsData].sort((a, b) => {
  const aLatest = !!a.isLatest;
  const bLatest = !!b.isLatest;
  if (aLatest !== bLatest) {
    return aLatest ? -1 : 1;
  }
  if (aLatest && bLatest) {
    const aOrder =
      typeof (a as any).latestOrder === "number"
        ? (a as any).latestOrder
        : typeof (a as any).order === "number"
        ? (a as any).order
        : Infinity;
    const bOrder =
      typeof (b as any).latestOrder === "number"
        ? (b as any).latestOrder
        : typeof (b as any).order === "number"
        ? (b as any).order
        : Infinity;
    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }
  }
  const aIndex = projectsData.indexOf(a);
  const bIndex = projectsData.indexOf(b);
  return aIndex - bIndex;
});


const isProjectNew = (dateString: string) => {
  const projectDate = new Date(dateString);
  const currentDate = new Date();
  const daysDifference = Math.floor(
    (currentDate.getTime() - projectDate.getTime()) / (24 * 60 * 60 * 1000),
  );
  return daysDifference <= 90; // Up to 90 days is considered new
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Android", "Web", "Others"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <div className="py-8 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">
            Projects
          </span>
        </h1>
        <p className="text-slate-400 font-mono text-xs tracking-widest uppercase">
          INDEX // SHIPPED APPLICATIONS & WORK logs
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex justify-center mb-12"
      >
        <div className="flex p-1.5 rounded-2xl bg-slate-950/50 border border-white/5 backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3 sm:px-6 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-slate-100"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-project-tab"
                    className="absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card glow-card-indigo flex flex-col p-6 sm:p-8 rounded-3xl"
            >
              {/* Top Banner Badges */}
              <div className="flex justify-between items-start gap-4 mb-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/50 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0 relative">
                  {project.imageIcon ? (
                    <Image
                      src={project.imageIcon}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    getProjectIcon(project.icon)
                  )}
                </div>

                <div className="flex gap-2">
                  {isProjectNew(project.date) && (
                    <span className="px-2.5 py-0.5 text-3xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
                      New
                    </span>
                  )}
                  {project.isLatest && (
                    <span className="px-2.5 py-0.5 text-3xs font-extrabold uppercase tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/30 rounded-full animate-pulse">
                      Latest
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300 group-hover:from-indigo-300 group-hover:to-purple-300 mb-3 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-slate-400 bg-slate-950/65 border border-white/5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/60 text-slate-200 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 hover:border-indigo-500/30"
                >
                  <FaGithub className="text-base" /> GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Live Demo <FaArrowRight className="text-xs" />
                  </a>
                )}

                {project.detailPage && (
                  <Link
                    href={project.detailPage}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Get APK <FaDownload className="text-xs" />
                  </Link>
                )}

                {project.uptodown && !project.detailPage && (
                  <a
                    href={project.uptodown}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold shadow-[0_4px_15px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <img
                      src="https://stc.utdstc.com/img/mediakit/isotipo.png"
                      alt="Uptodown"
                      className="w-4 h-4 object-contain brightness-0 invert"
                    />
                    Uptodown
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Coming Soon Card */}
        <motion.div
          layout
          className="col-span-1 md:col-span-2 glass-card glow-card-amber p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[300px]"
        >
          <div className="w-12 h-12 mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shadow-lg">
            <FaCode className="text-xl text-amber-400 animate-pulse" />
          </div>
          <h3 className="text-2xl font-extrabold mb-3 text-slate-100">
            More Projects Commencing Soon!
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mb-8 leading-relaxed">
            I am constantly developing automated scraping services, multimedia
            rendering pipelines, and custom Android utilities.
          </p>
          <div className="flex gap-4 flex-wrap justify-center font-mono text-xs">
            <a
              href="https://github.com/DevSon1024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <FaGithub /> FOLLOW GATEWAY
            </a>
            <a
              href="https://www.linkedin.com/in/devendra-sonawane-93763636a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-950/40 border border-indigo-500/25 text-indigo-400 hover:bg-indigo-950/65 transition-colors"
            >
              <FaLinkedin /> CONNECTION LOG
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
