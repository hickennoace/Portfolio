"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, BarChart3, TrendingUp, Sparkles, GraduationCap, LucideIcon } from "lucide-react";
import { EASE, VIEWPORT_ONCE } from "@/lib/motion";
import ScrambleText from "@/components/ScrambleText";
import { useLang } from "@/lib/i18n/LanguageProvider";

const rowConfig: { Icon: LucideIcon; tags: string[] }[] = [
  {
    Icon: BarChart3,
    tags: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Statsmodels", "Power BI", "DAX", "Excel", "Jupyter Notebook"],
  },
  {
    Icon: TrendingUp,
    tags: ["Financial Statements", "Financial Modeling", "Excel", "Python", "Statsmodels"],
  },
  {
    Icon: Sparkles,
    tags: ["Claude", "Gemini", "Python", "Prompt Engineering", "AI Automation", "API Integration"],
  },
  {
    Icon: GraduationCap,
    tags: ["Coursera", "Udemy", "Online Courses", "Documentation", "Hands-on Projects", "Continuous Learning"],
  },
];

export default function WhatIDo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();

  const rows = t.whatIDo.rows.map((r, i) => ({ ...r, ...rowConfig[i] }));

  return (
    <section id="what-i-do" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          <ScrambleText text={t.whatIDo.eyebrow} />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white mb-14 leading-[1.1]"
        >
          {t.whatIDo.titleStart}{" "}
          <span className="text-blue-600 dark:text-blue-400">{t.whatIDo.titleEnd}</span>
        </motion.h2>

        <div className="flex flex-col gap-3 sm:gap-4">
          {rows.map((row, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 + i * 0.1, ease: EASE }}
                className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-black/[0.05] dark:bg-white/[0.035] border-blue-500/40 dark:border-blue-400/35 shadow-[0_0_40px_rgba(59,130,246,0.12),0_0_1px_rgba(59,130,246,0.25)]"
                    : "bg-black/[0.04] dark:bg-white/[0.025] border-black/[0.09] dark:border-white/[0.07] hover:border-blue-400/35 hover:bg-black/[0.06] dark:hover:bg-white/[0.035]"
                }`}
              >
                {/* Animated left-edge accent on the open row */}
                <motion.span
                  aria-hidden="true"
                  className="absolute start-0 top-0 bottom-0 w-[3px] origin-top bg-gradient-to-b from-blue-500 to-indigo-500"
                  initial={false}
                  animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`whatido-panel-${i}`}
                  className="w-full flex items-center gap-4 sm:gap-5 p-6 sm:p-7 text-start"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-blue-500/20 text-blue-600 dark:text-blue-300"
                        : "bg-blue-500/12 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/18"
                    }`}
                  >
                    <row.Icon size={18} strokeWidth={1.6} />
                  </div>

                  {/* Title + subtitle */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] sm:text-[16px] font-bold tracking-[0.12em] text-slate-900 dark:text-white">
                      {row.title}
                    </p>
                    <p className="text-[13px] sm:text-[13.5px] text-slate-500 dark:text-slate-400 mt-1 font-light leading-snug">
                      {row.subtitle}
                    </p>
                  </div>

                  {/* Toggle indicator */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.32, ease: EASE }}
                    className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg border transition-colors duration-300 ${
                      isOpen
                        ? "border-blue-500/45 text-blue-600 dark:text-blue-300 bg-blue-500/10"
                        : "border-black/[0.1] dark:border-white/[0.08] text-slate-500 dark:text-slate-400 group-hover:border-blue-500/35 group-hover:text-blue-600 dark:group-hover:text-blue-300"
                    }`}
                  >
                    <Plus size={16} strokeWidth={2} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`whatido-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.42, ease: EASE },
                        opacity: { duration: 0.32, ease: EASE, delay: 0.06 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-7 ps-[4.25rem] sm:ps-[4.5rem]">
                        <div className="h-px w-full bg-gradient-to-r from-blue-500/30 via-blue-500/10 to-transparent mb-5" />
                        <p className="text-slate-600 dark:text-slate-400 text-[14px] sm:text-[14.5px] leading-[1.85] mb-5 max-w-3xl">
                          {row.description}
                        </p>
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial="hidden"
                          animate="show"
                          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.18 } } }}
                        >
                          {row.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              variants={{
                                hidden: { opacity: 0, y: 8, scale: 0.9 },
                                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: EASE } },
                              }}
                              className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-700 dark:text-blue-300 text-[12px] font-medium tracking-wide hover:bg-blue-500/15 hover:border-blue-400/40 transition-colors duration-200"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
