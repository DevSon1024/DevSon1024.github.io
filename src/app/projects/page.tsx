"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaPython,
  FaCode,
  FaPlayCircle,
  FaImages,
  FaDownload,
} from "react-icons/fa";

// This function checks if a project is less than 60 days old
const isProjectNew = (dateString: string) => {
  const projectDate = new Date(dateString);
  const currentDate = new Date();
  const daysDifference = Math.floor(
    (currentDate.getTime() - projectDate.getTime()) / (24 * 60 * 60 * 1000),
  );
  return daysDifference <= 60;
};

// Your project data
const projects = [
  {
    id: 1,
    title: "Nosved Player",
    description:
      "An advanced Android video player featuring hardware and software decoding (FFmpeg/ExoPlayer), gesture controls, and customizable interfaces.",
    tech: ["Android", "Kotlin", "Jetpack Compose", "ExoPlayer", "2026"],
    github: "https://github.com/DevSon1024/Nosved-Player",
    detailPage: "/projects/nosved-player",
    date: "2026-04-10",
    isLatest: true,
    imageIcon: "/assets/NosvedPlayer_icon.png",
  },
  {
    id: 2,
    title: "PixChive",
    description:
      "A local gallery and comic/manga reader application featuring hierarchical folder management, quick scanning, and optimized performance.",
    tech: ["Android", "Kotlin", "Jetpack Compose", "2026"],
    github: "https://github.com/DevSon1024/PixChive",
    uptodown: "https://pixchive.en.uptodown.com/android",
    detailPage: "/projects/pixchive",
    date: "2026-03-01",
    isLatest: true,
    imageIcon: "/assets/PixChive_icon.png",
  },
  {
    id: 3,
    title: "Gym Management System",
    description:
      "A comprehensive MERN stack web application for managing gym operations including member registrations, attendance tracking, membership plans, and payment processing.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Material-UI", "2024"],
    github: "https://github.com/DevSon1024/gym-management-system",
    date: "2025-12-17",
    isLatest: false,
    icon: <FaDumbbell className="text-4xl text-red-500" />,
  },
  {
    id: 4,
    title: "Tours & Travels Management",
    description:
      "A comprehensive web-based tour package management and booking platform built with CodeIgniter 4. Features admin panel for package management and user authentication.",
    tech: ["PHP 8.1+", "CodeIgniter 4", "MySQL", "Bootstrap 5", "2025"],
    github: "https://github.com/DevSon1024/tours-and-travels-php",
    date: "2025-12-17",
    isLatest: false,
    icon: <FaPlaneDeparture className="text-4xl text-indigo-500" />,
  },
  {
    id: 5,
    title: "RagaDL (Ragalahari Downloader)",
    description:
      "A Flutter mobile application designed to download content from Ragalahari. Features a modern UI with efficient download management.",
    tech: ["Flutter", "Dart", "Mobile App", "2025"],
    github: "https://github.com/DevSon1024/ragalahari_downloader_2025",
    uptodown: "https://ragadl.en.uptodown.com/android",
    date: "2025-01-01",
    isLatest: false,
    imageIcon: "/assets/ragalahari_downloader_icon.png",
  },
  {
    id: 6,
    title: "LinkNest",
    description:
      "A comprehensive link management application built with Flutter. Organize, categorize, and manage your important links with ease.",
    tech: ["Flutter", "Dart", "Link Management", "2025"],
    github: "https://github.com/DevSon1024/LinkNest",
    date: "2025-01-01",
    isLatest: false,
    imageIcon: "/assets/LinkNest_icon.png",
  },
  {
    id: 7,
    title: "Ragalahari Downloader 2024",
    description:
      "A Python-based desktop application for downloading content from Ragalahari. Showcases CLI design, web scraping, and file handling.",
    tech: ["Python", "Web Scraping", "CLI", "2024"],
    github: "https://github.com/DevSon1024/Ragalahari-Downloader-2024",
    date: "2024-06-01",
    isLatest: false,
    icon: <FaPython className="text-4xl text-blue-400" />,
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="py-12 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-slate-400">
          Explore my journey through code and creativity
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group relative flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Badges */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              {isProjectNew(project.date) && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-indigo-500/30">
                  New
                </span>
              )}
              {project.isLatest && (
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-lg shadow-pink-500/30">
                  Latest
                </span>
              )}
            </div>

            {/* Icon */}
            <div className="w-20 h-20 mb-6 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              {project.imageIcon ? (
                <Image
                  src={project.imageIcon}
                  alt={project.title}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              ) : (
                project.icon
              )}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
              {project.title}
            </h3>
            <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-slate-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-auto flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all w-fit"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              {(project as any).detailPage && (
                <Link
                  href={(project as any).detailPage}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all w-fit"
                >
                  <FaDownload className="text-xl" />
                </Link>
              )}
              {project.uptodown && (
                <a
                  href={project.uptodown}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 transition-all w-fit"
                >
                  <img
                    src="https://stc.utdstc.com/img/mediakit/isotipo.png"
                    alt="Uptodown"
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                  Uptodown
                </a>
              )}
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center flex flex-col items-center justify-center"
        >
          <div className="w-16 h-16 mb-6 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
            <FaCode className="text-3xl text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-slate-200">
            More Projects Coming Soon!
          </h3>
          <p className="text-slate-400 max-w-2xl mb-8">
            I am constantly working on new projects and exploring different
            technologies. Stay tuned for more exciting developments.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/DevSon1024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors"
            >
              <FaGithub /> Follow on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/devendra-sonawane-93763636a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl hover:bg-blue-600/30 transition-colors"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
