"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const skillsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.24 } },
};
const skillItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

const skills = [
  "Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Statsmodels",
  "Power BI", "DAX", "Excel", "Jupyter Notebook",
  "Capital Markets", "Financial Statements",
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Git", "AI Automation",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t, dir } = useLang();
  const slide = dir === "rtl" ? 24 : -24;

  return (
    <section id="about" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-3 mb-6 eyebrow-num"
        >
          <span className="text-[12px] font-mono text-slate-400 dark:text-slate-600">01</span>
          <span className="h-px flex-1 max-w-[28px] bg-slate-300 dark:bg-slate-700" />
          <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 tracking-[0.24em] uppercase">
            {t.about.eyebrow}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: slide }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.82, delay: 0.08, ease: EASE }}
          >
            <h2 className="text-3xl sm:text-[2.7rem] font-bold tracking-[-0.02em] text-slate-900 dark:text-white mb-7 leading-[1.08]">
              {t.about.titleStart}{" "}
              <span className="font-display italic font-normal text-slate-700 dark:text-slate-200">
                {t.about.titleEnd}
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.9] mb-4">
              {t.about.p1Pre}{" "}
              <span className="text-slate-800 dark:text-slate-200 font-medium">{t.about.p1University}</span>{" "}
              {t.about.p1Mid}{" "}
              <span className="text-slate-800 dark:text-slate-200 font-medium">{t.about.p1End}</span>
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.9] mb-4">
              {t.about.p2Pre}{" "}
              <span className="text-slate-800 dark:text-slate-200 font-medium">{t.about.p2Stack}</span>
              {t.about.p2End}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.9]">
              {t.about.p3Pre}{" "}
              <span className="text-slate-700 dark:text-slate-300 font-medium">{t.about.p3Roles}</span>{" "}
              {t.about.p3End}
            </p>
          </motion.div>

          {/* Right: skills + stats + languages */}
          <motion.div
            initial={{ opacity: 0, x: -slide }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.82, delay: 0.16, ease: EASE }}
          >
            <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 tracking-[0.24em] uppercase mb-4">
              {t.about.skillsLabel}
            </p>

            <motion.div
              className="flex flex-wrap gap-2.5 mb-9"
              variants={skillsContainer}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={skillItem}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-900/12 dark:border-white/10 text-slate-700 dark:text-slate-200 text-[13px] font-medium hover:border-slate-900/24 dark:hover:border-white/22 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative p-5 rounded-xl bg-black/[0.025] dark:bg-white/[0.018] border border-black/[0.08] dark:border-white/[0.06] hover:border-black/[0.16] dark:hover:border-white/[0.14] transition-colors duration-300"
                >
                  {/* Hairline start-edge accent */}
                  <span aria-hidden className="absolute inset-y-3 start-0 w-px bg-slate-900/15 dark:bg-white/15" />
                  <p className="text-[15px] text-slate-800 dark:text-slate-100 font-semibold">{stat.label}</p>
                  <p className="text-[13px] text-slate-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-6 border-t border-black/[0.07] dark:border-white/[0.05]">
              <p className="text-[11px] font-medium text-slate-700 dark:text-slate-300 tracking-[0.24em] uppercase mb-4">
                {t.about.languagesLabel}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {t.about.languages.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center gap-1.5">
                    <span className="text-[13px] text-slate-700 dark:text-slate-300 font-medium">{lang}</span>
                    <span className="text-[12px] text-slate-500">— {level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
