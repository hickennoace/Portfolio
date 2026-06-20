"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE, SPRING_SNAPPY, VIEWPORT_ONCE } from "@/lib/motion";
import ScrambleText from "@/components/ScrambleText";
import { useLang } from "@/lib/i18n/LanguageProvider";

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
  "Power BI", "DAX", "Power Query", "Excel", "Jupyter Notebook", "Conda",
  "Financial Statements",
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Git", "AI Automation",
];

// Proficiency per language, in dictionary order (Hebrew, English, Russian).
const LANG_LEVELS = [100, 90, 80];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);
  const reduce = useReducedMotion();
  const { t } = useLang();
  const slide = -24;

  return (
    <section id="about" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          <ScrambleText text={t.about.eyebrow} />
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: slide }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.82, delay: 0.08, ease: EASE }}
          >
            <h2 className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              {t.about.titleStart}{" "}
              <span className="text-blue-600 dark:text-blue-400">{t.about.titleEnd}</span>
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
            <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-4">
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
                  whileHover={reduce ? undefined : { scale: 1.08, y: -2, transition: SPRING_SNAPPY }}
                  className="cursor-default px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-[13px] font-medium hover:bg-blue-500/18 hover:border-blue-400/38 hover:shadow-[0_4px_18px_rgba(59,130,246,0.18)] transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {t.about.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={SPRING_SNAPPY}
                  className="p-5 rounded-xl bg-black/[0.04] dark:bg-white/[0.025] border border-black/[0.09] dark:border-white/[0.07] hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] transition-colors duration-300"
                >
                  <p className="text-[15px] text-blue-600/80 dark:text-blue-400/80 font-semibold">{stat.label}</p>
                  <p className="text-[13px] text-slate-500 mt-1">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-6 border-t border-black/[0.07] dark:border-white/[0.05]">
              <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-4">
                {t.about.languagesLabel}
              </p>
              <div className="space-y-4">
                {t.about.languages.map(({ lang, level }, i) => (
                  <div key={lang}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[13px] text-slate-700 dark:text-slate-300 font-medium">{lang}</span>
                      <span className="text-[12px] text-slate-500">{level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.07] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        initial={{ width: reduce ? `${LANG_LEVELS[i]}%` : 0 }}
                        animate={inView ? { width: `${LANG_LEVELS[i]}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: EASE }}
                      />
                    </div>
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
