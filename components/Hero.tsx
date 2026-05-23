"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import MeteorShower from "@/components/MeteorShower";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.28 } },
};

const up = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Meteor shower — contained by parent overflow-hidden */}
      <MeteorShower />

      {/* Main content: text ←→ image */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-14 lg:gap-20">

          {/* ── Text block ── */}
          <div className="flex-1 min-w-0 text-center sm:text-left order-2 sm:order-1">
            <motion.p
              variants={up}
              className="text-[11px] font-semibold text-blue-400 tracking-[0.26em] uppercase mb-6"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={up}
              className="text-[clamp(2.8rem,7vw,5rem)] font-bold tracking-tighter leading-[0.9] text-white mb-6"
            >
              Daniel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400">
                Shaulov
              </span>
            </motion.h1>

            <motion.p
              variants={up}
              className="text-[15px] sm:text-[17px] text-slate-400 font-light max-w-[460px] mx-auto sm:mx-0 mb-10 leading-relaxed"
            >
              Economics &amp; Management student —{" "}
              <span className="text-slate-300">
                targeting Data and Junior Analyst roles.
              </span>
            </motion.p>

            <motion.div
              variants={up}
              className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap"
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
          </div>

          {/* ── Profile image ── */}
          <motion.div variants={up} className="order-1 sm:order-2 shrink-0">
            <div
              className="group relative w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full
                         ring-2 ring-white/[0.07] transition-all duration-500
                         hover:ring-blue-400/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/copy.png"
                  alt="Daniel Shaulov"
                  fill
                  priority
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 240px, 288px"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
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
