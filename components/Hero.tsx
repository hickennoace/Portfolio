"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import MeteorShower from "@/components/MeteorShower";
import { useLang } from "@/lib/i18n/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.28 } },
};

const up = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE } },
};

function CvDownloadButton() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const cvOptions = [
    { label: t.hero.cvEn, href: "/cv-en.pdf", flag: "EN" },
    { label: t.hero.cvHe, href: "/cv-he.pdf", flag: "HE" },
  ];

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
        {t.hero.downloadCV}
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
            className="absolute start-1/2 sm:start-0 -translate-x-1/2 rtl:translate-x-1/2 sm:translate-x-0 sm:rtl:translate-x-0 top-full mt-2 w-56 origin-top
                       rounded-xl border border-black/[0.1] dark:border-white/[0.08]
                       bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl
                       shadow-[0_10px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                       z-30 p-1.5"
          >
            {cvOptions.map((opt) => (
              <a
                key={opt.href}
                href={opt.href}
                download
                onClick={() => setOpen(false)}
                role="menuitem"
                className="group/item flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium
                           text-slate-700 dark:text-slate-300
                           hover:bg-slate-900/[0.04] dark:hover:bg-white/[0.05] hover:text-slate-900 dark:hover:text-white
                           transition-colors duration-150"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-md
                                 border border-slate-900/12 dark:border-white/12
                                 text-[10px] font-mono font-bold tracking-wider
                                 text-slate-600 dark:text-slate-300
                                 group-hover/item:border-slate-900/22 dark:group-hover/item:border-white/22">
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
  const { t } = useLang();

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

      {/* Meteor shower — desktop only; CSS animations kill mobile GPU */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
        <MeteorShower />
      </div>

      {/* Main content: text ←→ image */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-14 lg:gap-20">

          {/* ── Text block ── */}
          <div className="flex-1 min-w-0 text-center sm:text-start order-2 sm:order-1">
            <motion.p
              variants={up}
              className="text-[11px] text-ochre-600 dark:text-ochre-400 tracking-[0.28em] uppercase mb-7 font-medium"
            >
              <span className="inline-block w-6 h-px align-middle bg-ochre-500/60 me-3" />
              {t.hero.hello}
            </motion.p>

            <motion.h1
              variants={up}
              className="text-[clamp(2.8rem,7vw,5rem)] font-bold tracking-[-0.025em] leading-[0.92] text-slate-900 dark:text-white mb-7"
            >
              Daniel{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-slate-800 dark:text-slate-100">
                Shaulov
              </span>
            </motion.h1>

            <motion.p
              variants={up}
              className="text-[15px] sm:text-[17px] text-slate-600 dark:text-slate-400 font-light max-w-[460px] mx-auto sm:mx-0 mb-10 leading-[1.7]"
            >
              {t.hero.role}{" "}
              <span className="text-slate-800 dark:text-slate-200">
                {t.hero.roleAccent}
              </span>
            </motion.p>

            <motion.div
              variants={up}
              className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 flex-wrap"
            >
              <a
                href="#work"
                className="inline-flex items-center px-7 sm:px-8 py-3.5 bg-slate-900 dark:bg-slate-100 text-slate-50 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.97]"
              >
                {t.hero.viewWork}
              </a>
              <a
                href="#connect"
                className="inline-flex items-center px-7 sm:px-8 py-3.5 border border-slate-900/20 dark:border-white/20 text-slate-700 dark:text-slate-200 hover:border-slate-900/45 dark:hover:border-white/40 hover:text-slate-900 dark:hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-[2px] active:scale-[0.97]"
              >
                {t.hero.getInTouch}
              </a>
              <CvDownloadButton />
            </motion.div>
          </div>

          {/* ── Profile image — gallery-mat frame ── */}
          <motion.div variants={up} className="order-1 sm:order-2 shrink-0">
            <div className="group relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer hairline mat — sits 8px outside the photo */}
              <div
                aria-hidden
                className="absolute -inset-2 rounded-[1.1rem] border border-slate-900/12 dark:border-white/10 pointer-events-none transition-colors duration-500 group-hover:border-slate-900/22 dark:group-hover:border-white/18"
              />
              {/* Inner photo with its own hairline */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-900/15 dark:border-white/12 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
                <Image
                  src="/copy.png"
                  alt={t.hero.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
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
          {t.hero.scroll}
        </span>
      </motion.div>
    </section>
  );
}
