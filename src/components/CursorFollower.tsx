"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  // Set initial off-screen coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("pointermove", handleMouseMove);

    // Watch theme class shifts on documentElement
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("light"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Set initial state
    setIsLight(document.documentElement.classList.contains("light"));

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`fixed pointer-events-none z-[9999] w-12 h-12 rounded-full border blur-[3px] transition-[background,border-color,box-shadow] duration-300 hidden md:block ${
        isLight
          ? "bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border-indigo-500/20 mix-blend-darken shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          : "bg-gradient-to-r from-indigo-500/25 to-purple-500/25 border-indigo-400/25 mix-blend-screen shadow-[0_0_20px_rgba(99,102,241,0.2)]"
      }`}
    />
  );
}
