"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, BarChart3, TrendingUp, Sparkles, LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const rowConfig: { Icon: LucideIcon; tags: string[] }[] = [
  {
    Icon: BarChart3,
    tags: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Statsmodels", "Power BI", "DAX", "Excel", "Jupyter Notebook"],
  },
  {
    Icon: TrendingUp,
    tags: ["Financial Statements", "Capital Markets", "Financial Modeling", "Excel", "Python", "Statsmodels"],
  },
  {
    Icon: Sparkles,
    tags: ["Claude", "Gemini", "Python", "Prompt Engineering", "AI Automation", "API Integration"],
  },
];

export default function WhatIDo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();

  const rows = t.whatIDo.rows.map((r, i) => ({ ...r, ...rowConfig[i] }));

  return (
    <section id="what-i-do" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display italic text-[14px] text-slate-500 dark:text-slate-400 mb-5 ms-0.5"
        >
          — {t.whatIDo.eyebrow.toLowerCase()}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.7rem] font-bold tracking-[-0.02em] text-slate-900 dark:text-white mb-14 leading-[1.08]"
        >
          {t.whatIDo.titleStart}{" "}
          <span className="font-display italic font-normal text-slate-700 dark:text-slate-200">
            {t.whatIDo.titleEnd}
          </span>
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
                    ? "bg-black/[0.04] dark:bg-white/[0.028] border-slate-900/22 dark:border-white/[0.18]"
                    : "bg-black/[0.025] dark:bg-white/[0.018] border-black/[0.08] dark:border-white/[0.06] hover:border-black/[0.18] dark:hover:border-white/[0.14]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`whatido-panel-${i}`}
                  className="w-full flex items-center gap-4 sm:gap-5 p-6 sm:p-7 text-start"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 border ${
                      isOpen
                        ? "border-slate-900/22 dark:border-white/22 text-slate-900 dark:text-white"
                        : "border-slate-900/10 dark:border-white/10 text-slate-600 dark:text-slate-300 group-hover:border-slate-900/20 dark:group-hover:border-white/20"
                    }`}
                  >
                    <row.Icon size={18} strokeWidth={1.5} />
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
                        ? "border-slate-900/30 dark:border-white/30 text-slate-900 dark:text-white"
                        : "border-black/[0.1] dark:border-white/[0.08] text-slate-500 dark:text-slate-400 group-hover:border-slate-900/22 dark:group-hover:border-white/22"
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
                        <div className="h-px w-full bg-gradient-to-r from-slate-900/18 dark:from-white/15 via-slate-900/[0.04] dark:via-white/[0.03] to-transparent mb-5" />
                        <p className="text-slate-600 dark:text-slate-400 text-[14px] sm:text-[14.5px] leading-[1.85] mb-5 max-w-3xl">
                          {row.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {row.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-full border border-slate-900/12 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[12px] font-medium tracking-wide hover:border-slate-900/22 dark:hover:border-white/20 transition-colors duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
