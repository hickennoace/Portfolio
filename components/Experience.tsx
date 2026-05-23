"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Shield } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const experiences = [
  {
    Icon: Briefcase,
    role: "Administrator & Developer",
    company: "Craftiverse",
    period: "2022 – 2024",
    description:
      "Managed a Minecraft server network handling hundreds of concurrent players. Architected and continuously balanced the in-game economy, administered server infrastructure, built custom plugins to enhance gameplay, and led community operations — accumulating the player transaction data that later became the foundation of a full customer behaviour analytics project.",
    tags: ["Server Infrastructure", "Economy Design", "Plugin Dev", "Community Ops"],
    accent: true,
  },
  {
    Icon: Shield,
    role: "Combat Soldier & Gunner",
    company: "Israel Defense Forces (IDF)",
    period: "2020 – 2023",
    description:
      "Served three years in combat infantry, operating as a gunner in high-stakes, rapidly evolving environments. Built squad-level leadership, disciplined operational planning, and the analytical composure under pressure that directly translates to high-demand finance and data roles.",
    tags: ["Leadership", "Operational Planning", "High-Stakes Execution", "Discipline"],
    accent: false,
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-white mb-14"
        >
          Where I&apos;ve been.
        </motion.h2>

        <div className="flex flex-col gap-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.1 + i * 0.13, ease: EASE }}
              className="group p-6 sm:p-9 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-blue-500/25 hover:bg-white/[0.035] transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    exp.accent
                      ? "bg-blue-500/15 text-blue-400 group-hover:bg-blue-500/22"
                      : "bg-slate-500/12 text-slate-400 group-hover:bg-slate-500/20"
                  }`}
                >
                  <exp.Icon size={18} strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <p className="text-[16px] sm:text-[17px] font-bold text-white leading-tight">
                        {exp.role}
                      </p>
                      <p className={`text-[13px] font-medium mt-0.5 ${exp.accent ? "text-blue-400" : "text-slate-400"}`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-[12px] text-slate-500 font-mono shrink-0 mt-0.5">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-[14px] leading-[1.9]">
                    {exp.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-[11px] text-slate-400 font-medium tracking-wide"
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
