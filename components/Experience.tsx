"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, Shield, Lock, Users, LucideIcon } from "lucide-react";
import { EASE, SPRING_SNAPPY, VIEWPORT_ONCE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

type Config = { Icon: LucideIcon; tags: string[]; accent: boolean };

const itemConfig: Config[] = [
  {
    Icon: Lock,
    tags: ["Security Operations", "Access Control", "Protocols", "Service Delivery"],
    accent: true,
  },
  {
    Icon: Briefcase,
    tags: ["Data Analysis", "Web Development", "Plugin Dev", "Power BI", "SQL"],
    accent: true,
  },
  {
    Icon: Users,
    tags: ["Programme Management", "Mentorship", "Multi-tasking", "Coordination"],
    accent: false,
  },
  {
    Icon: Shield,
    tags: ["Combat Infantry", "Rapid Decision-Making", "Field Operations"],
    accent: false,
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);
  const reduce = useReducedMotion();
  const { t } = useLang();

  const experiences = t.experience.items.map((it, i) => ({ ...it, ...itemConfig[i] }));

  return (
    <section id="experience" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          {t.experience.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white mb-14"
        >
          {t.experience.title}
        </motion.h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.1 + i * 0.13, ease: EASE }}
              whileHover={reduce ? undefined : { y: -4, transition: SPRING_SNAPPY }}
              className="group p-6 sm:p-9 rounded-2xl bg-black/[0.04] dark:bg-white/[0.025] border border-black/[0.09] dark:border-white/[0.07] hover:border-blue-400/48 hover:bg-black/[0.06] dark:hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(59,130,246,0.1),0_0_1px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    exp.accent
                      ? "bg-blue-500/15 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/22"
                      : "bg-slate-500/12 text-slate-500 dark:text-slate-400 group-hover:bg-slate-500/20"
                  }`}
                >
                  <exp.Icon size={18} strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <p className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white leading-tight">
                        {exp.role}
                      </p>
                      <p className={`text-[13px] font-medium mt-0.5 ${exp.accent ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-[12px] text-slate-500 font-mono shrink-0 mt-0.5">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-[14px] leading-[1.9]">
                    {exp.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.07] text-[11px] text-slate-600 dark:text-slate-400 font-medium tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
