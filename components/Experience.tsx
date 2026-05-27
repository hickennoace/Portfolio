"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Shield, Lock, Users, LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Config = { Icon: LucideIcon; tags: string[]; accent: boolean };

const itemConfig: Config[] = [
  {
    Icon: Lock,
    tags: ["Security Operations", "Access Control", "Protocols", "Service Delivery"],
    accent: true,
  },
  {
    Icon: Briefcase,
    tags: ["Data Analysis", "Web Development", "Plugin Dev", "Prop Trading", "Capital Markets"],
    accent: true,
  },
  {
    Icon: Users,
    tags: ["Programme Management", "Mentorship", "Multi-tasking", "Coordination"],
    accent: false,
  },
  {
    Icon: Shield,
    tags: ["Combat Infantry", "Rapid Decision-Making", "Guardian of the Walls", "Field Operations"],
    accent: false,
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  const experiences = t.experience.items.map((it, i) => ({ ...it, ...itemConfig[i] }));

  return (
    <section id="experience" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-3 mb-6 eyebrow-num"
        >
          <span className="text-[12px] font-mono text-slate-400 dark:text-slate-600">02</span>
          <span className="h-px flex-1 max-w-[28px] bg-slate-300 dark:bg-slate-700" />
          <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 tracking-[0.24em] uppercase">
            {t.experience.eyebrow}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.7rem] font-bold tracking-[-0.02em] text-slate-900 dark:text-white mb-14 font-display italic font-normal"
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
              className="group relative p-6 sm:p-9 rounded-2xl bg-black/[0.025] dark:bg-white/[0.018] border border-black/[0.08] dark:border-white/[0.06] hover:border-black/[0.18] dark:hover:border-white/[0.14] transition-colors duration-300"
            >
              {/* Hairline start-edge accent — only on currently-active roles */}
              {exp.accent && (
                <span
                  aria-hidden
                  className="absolute inset-y-6 sm:inset-y-9 start-0 w-px bg-ochre-500/55 dark:bg-ochre-400/55"
                />
              )}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 border ${
                    exp.accent
                      ? "border-slate-900/22 dark:border-white/22 text-slate-900 dark:text-white"
                      : "border-slate-900/10 dark:border-white/10 text-slate-500 dark:text-slate-400"
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
                      <p className={`text-[13px] font-medium mt-0.5 ${exp.accent ? "text-ochre-600 dark:text-ochre-400" : "text-slate-600 dark:text-slate-400"}`}>
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
                        className="px-3 py-1 rounded-md border border-black/[0.08] dark:border-white/[0.06] text-[11px] text-slate-600 dark:text-slate-400 font-medium tracking-wide"
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
