"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, ChevronDown } from "lucide-react";
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

const CV_OPTIONS = [
  { label: "CV (English)", href: "/cv-en.pdf", flag: "EN" },
  { label: "CV (Hebrew)",  href: "/cv-he.pdf", flag: "HE" },
];

function CvDownloadButton() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 border border-black/[0.12] dark:border-white/[0.12] text-slate-600 dark:text-slate-400 hover:border-black/[0.25] dark:hover:border-white/25 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05] font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.97]"
      >
        <Download size={14} strokeWidth={2} />
        Download CV
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: EASE }}
          className="flex"
        >
          <ChevronDown size={14} strokeWidth={2} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 top-full mt-2 w-56 origin-top
                       rounded-xl border border-black/[0.1] dark:border-white/[0.08]
                       bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl
                       shadow-[0_10px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                       z-30 p-1.5"
          >
            {CV_OPTIONS.map((opt) => (
              <a
                key={opt.href}
                href={opt.href}
                download
                onClick={() => setOpen(false)}
                role="menuitem"
                className="group/item flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium
                           text-slate-700 dark:text-slate-300
                           hover:bg-blue-500/10 hover:text-blue-700 dark:hover:text-blue-300
                           transition-colors duration-150"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md
                                 bg-blue-500/10 border border-blue-500/20
                                 text-[10px] font-bold tracking-wider
                                 text-blue-600 dark:text-blue-400
                                 group-hover/item:bg-blue-500/18">
                  {opt.flag}
                </span>
                <span className="flex-1">{opt.label}</span>
                <Download size={13} strokeWidth={2} className="opacity-60 group-hover/item:opacity-100" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 overflow-hidden">
      {/* Dot-grid — light mode: dark dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.028] block dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15,23,42,0.9) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
      {/* Dot-grid — dark mode: slate dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018] hidden dark:block"
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
              className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.26em] uppercase mb-6"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={up}
              className="text-[clamp(2.8rem,7vw,5rem)] font-bold tracking-tighter leading-[0.9] text-slate-900 dark:text-white mb-6"
            >
              Daniel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">
                Shaulov
              </span>
            </motion.h1>

            <motion.p
              variants={up}
              className="text-[15px] sm:text-[17px] text-slate-600 dark:text-slate-400 font-light max-w-[460px] mx-auto sm:mx-0 mb-10 leading-relaxed"
            >
              Economics &amp; Management student —{" "}
              <span className="text-slate-800 dark:text-slate-300">
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
                className="inline-flex items-center px-7 sm:px-8 py-3.5 border border-blue-500/35 text-blue-700 dark:text-blue-300 hover:border-blue-500/60 hover:text-blue-900 dark:hover:text-white hover:bg-blue-500/[0.08] font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.97]"
              >
                Get in Touch
              </a>
              <CvDownloadButton />
            </motion.div>
          </div>

          {/* ── Profile image — large square, full color, permanent blue glow ── */}
          <motion.div variants={up} className="order-1 sm:order-2 shrink-0">
            <div
              className="group relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl
                         ring-2 ring-blue-500/30 dark:ring-blue-400/25
                         shadow-[0_10px_45px_-8px_rgba(59,130,246,0.45),0_0_0_1px_rgba(59,130,246,0.15)]
                         dark:shadow-[0_12px_55px_-6px_rgba(59,130,246,0.55),0_0_0_1px_rgba(96,165,250,0.2)]
                         hover:ring-blue-500/55 dark:hover:ring-blue-400/50
                         hover:shadow-[0_15px_60px_-6px_rgba(59,130,246,0.6),0_0_0_1px_rgba(59,130,246,0.25)]
                         dark:hover:shadow-[0_18px_70px_-4px_rgba(59,130,246,0.7),0_0_0_1px_rgba(96,165,250,0.3)]
                         transition-all duration-500"
            >
              {/* Soft blue aura behind image */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.4rem] bg-gradient-to-br from-blue-500/25 via-blue-400/10 to-indigo-500/20 blur-2xl opacity-80 pointer-events-none -z-10"
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/copy.png"
                  alt="Daniel Shaulov"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
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
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
      >
        <div className="animate-bounce-arrow">
          <ArrowDown size={15} strokeWidth={1.5} />
        </div>
        <span className="text-[9px] tracking-[0.26em] uppercase font-medium">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
