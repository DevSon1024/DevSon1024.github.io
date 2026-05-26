"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    const targetTheme = !isLight;
    const targetBgColor = targetTheme ? "#f4f6fa" : "#05070f";

    // Create the ripple expansion element
    const ripple = document.createElement("div");
    ripple.classList.add("theme-ripple-overlay");
    ripple.style.setProperty("--ripple-x", `${x}px`);
    ripple.style.setProperty("--ripple-y", `${y}px`);
    ripple.style.setProperty("--background-target", targetBgColor);

    document.body.appendChild(ripple);

    // Switch class list class name midway through expansion
    setTimeout(() => {
      if (targetTheme) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
      localStorage.setItem("theme", targetTheme ? "light" : "dark");
      setIsLight(targetTheme);
    }, 380);

    // Remove overlay once animation has run
    setTimeout(() => {
      ripple.remove();
    }, 750);
  };

  if (!mounted) return null;

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="sticky top-6 z-50 mx-auto max-w-xl px-4 sm:px-6 mb-12"
    >
      <div className={`flex items-center justify-between rounded-2xl px-2 sm:px-4 py-2.5 backdrop-blur-xl border transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
        isLight 
          ? "bg-white/70 border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)]" 
          : "bg-slate-950/45 border-white/10"
      }`}>
        <Link href="/" className={`pl-1 sm:pl-3 font-mono text-[11px] sm:text-sm tracking-wider font-bold transition-opacity hover:opacity-85 ${
          isLight ? "text-indigo-600" : "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
        }`}>
          DS // 1024
        </Link>
        
        <div className="flex items-center space-x-0.5 sm:space-x-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-1.5 sm:px-3 py-1.5 text-[10px] sm:text-xs md:text-sm font-semibold transition-colors duration-300 ${
                  isActive 
                    ? (isLight ? "text-indigo-600" : "text-indigo-300") 
                    : (isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-slate-200")
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <>
                    <motion.div
                      layoutId="active-pill"
                      className={`absolute inset-0 rounded-xl border ${
                        isLight
                          ? "bg-indigo-500/10 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                          : "bg-indigo-500/10 border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
                      }`}
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  </>
                )}
              </Link>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className={`p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer ${
              isLight
                ? "bg-slate-200/70 border-slate-300/60 text-slate-700 hover:text-slate-950 hover:border-indigo-500/50 hover:bg-slate-200"
                : "bg-slate-900/50 border-white/5 text-slate-400 hover:text-slate-200 hover:border-indigo-500/30"
            }`}
            aria-label="Toggle Theme"
          >
            {isLight ? <FaMoon className="w-3.5 h-3.5 text-indigo-500" /> : <FaSun className="w-3.5 h-3.5 text-amber-400" />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}