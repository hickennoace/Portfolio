"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.28 } },
};

const up = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-6 overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl mx-auto text-center"
      >
        {/* Pre-heading */}
        <motion.p
          variants={up}
          className="text-[11px] font-semibold text-blue-400 tracking-[0.26em] uppercase mb-7"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={up}
          className="text-[clamp(3rem,11vw,9rem)] font-bold tracking-tighter leading-[0.88] text-white mb-8"
        >
          Daniel{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400">
            Shaulov
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={up}
          className="text-[17px] sm:text-xl text-slate-400 font-light max-w-[500px] mx-auto mb-12 leading-relaxed"
        >
          Economics &amp; Management student at the Open University —{" "}
          <span className="text-slate-300">
            targeting Data and Junior Analyst roles.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={up}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          <a
            href="#work"
            className="inline-flex items-center px-7 sm:px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-[2px] active:scale-[0.97]"
          >
            View Work
          </a>
          <a
            href="#connect"
            className="inline-flex items-center px-7 sm:px-8 py-3.5 border border-blue-500/30 text-blue-300 hover:border-blue-400/60 hover:text-white hover:bg-blue-500/[0.08] font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.97]"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={15} strokeWidth={1.5} />
        </motion.div>
        <span className="text-[9px] tracking-[0.26em] uppercase font-medium">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
