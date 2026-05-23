"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Work",       href: "#work"       },
  { label: "Connect",    href: "#connect"    },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d1a]/80 backdrop-blur-xl border-b border-blue-500/10 shadow-[0_2px_48px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="text-[15px] font-semibold text-white/90 hover:text-blue-400 transition-colors duration-200 tracking-tight shrink-0"
        >
          Daniel Shaulov
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Availability badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-55" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-400" />
          </span>
          <span className="text-[12px] text-emerald-400/80 font-medium hidden sm:block">
            Available
          </span>
        </div>
      </nav>
    </motion.header>
  );
}
