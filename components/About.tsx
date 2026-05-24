"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const skills = [
  "Python", "SQL", "Power BI", "Excel", "Java",
  "AI Automation", "Prompt Engineering", "Capital/Crpyto Markets", "Financial Statements",
];

const stats = [
  { value: "90",    label: "GPA",         sub: "Open University of Israel" },
  { value: "3 yrs",     label: "IDF Service", sub: "Combat Infantry & Gunner"  },
];

const languages = [
  { lang: "Hebrew",  level: "Native"           },
  { lang: "English", level: "Professional"     },
  { lang: "Russian", level: "High Proficiency" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          About
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.82, delay: 0.08, ease: EASE }}
          >
            <h2 className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              A focused analyst,{" "}
              <span className="text-blue-600 dark:text-blue-400">in the making.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.9] mb-4">
              Economics and Management student at the{" "}
              <span className="text-slate-800 dark:text-slate-200 font-medium">Open University of Israel</span>{" "}
              with a strong analytical and technological orientation. Highly proficient in data
              processing and analysis using Excel (including PivotTables and VLOOKUP), SQL,
              and PowerBI.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-[1.9]">
              Combines practical programming knowledge with advanced AI tools for workflow
              optimization. Characterized by logical thinking, rapid self-learning abilities,
              and optimal performance in dynamic,{" "}
              <span className="text-slate-700 dark:text-slate-300 font-medium">high-pressure environments.</span>
            </p>
          </motion.div>

          {/* Right: skills + stats + languages */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.82, delay: 0.16, ease: EASE }}
          >
            <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-4">
              Technologies &amp; Skills
            </p>

            <div className="flex flex-wrap gap-2.5 mb-9">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.24 + i * 0.055, duration: 0.38 }}
                  className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-[13px] font-medium hover:bg-blue-500/18 hover:border-blue-400/38 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-black/[0.04] dark:bg-white/[0.025] border border-black/[0.09] dark:border-white/[0.07] hover:border-blue-500/20 transition-colors duration-300"
                >
                  <p className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">{stat.value}</p>
                  <p className="text-[12px] text-blue-600/80 dark:text-blue-400/80 font-semibold mt-0.5">{stat.label}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-6 border-t border-black/[0.07] dark:border-white/[0.05]">
              <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-4">
                Languages
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {languages.map(({ lang, level }) => (
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
