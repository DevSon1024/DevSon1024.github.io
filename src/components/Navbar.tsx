"use client"; // Required for Framer Motion

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 mb-8"
    >
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 rounded-2xl bg-slate-900/90 px-4 py-3 backdrop-blur-md border border-white/10 shadow-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`relative px-3 py-2 text-sm sm:text-base font-medium transition-colors ${
                isActive ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}