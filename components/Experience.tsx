"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Shield, Lock, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const experiences = [
  {
    Icon: Lock,
    role: "Security & Access Control",
    company: "Team 3",
    period: "2023 – Present",
    description:
      "Managing access control and facility security operations in a professional service environment. Responsible for maintaining strict operational protocols, controlling access across multiple points, and delivering high-quality, consistent service across diverse security scenarios.",
    tags: ["Security Operations", "Access Control", "Protocols", "Service Delivery"],
    accent: true,
  },
  {
    Icon: Briefcase,
    role: "Freelance Analyst & Developer",
    company: "Freelancer",
    period: "2022 – Present",
    description:
      "Providing comprehensive freelance services across data analytics, web development, gaming, and capital markets. I design and execute full data pipelines that surface actionable insights from complex datasets, delivering clear, stakeholder-ready reporting. On the technical side, I architect and deploy robust, responsive websites tailored to client needs, and build custom plugins and solutions for game environments in the gaming industry. In parallel, I actively engage in capital market trading — applying rigorous market analysis, disciplined risk management, and financial acumen to Proprietary (Prop/Nostro) trading strategies across equity and derivative instruments.",
    tags: ["Data Analysis", "Web Development", "Plugin Dev", "Prop Trading", "Capital Markets"],
    accent: true,
  },
  {
    Icon: Users,
    role: "Military Prep Coordinator",
    company: "Midor Ledor Association",
    period: "2022 – 2023",
    description:
      "Managed military preparation programs for service candidates, coordinating multiple concurrent workstreams under time pressure. Provided structured mentorship and logistical support to ensure candidates were thoroughly prepared for the demands of military service.",
    tags: ["Programme Management", "Mentorship", "Multi-tasking", "Coordination"],
    accent: false,
  },
  {
    Icon: Shield,
    role: "Combat Soldier & Gunner",
    company: "Israel Defense Forces (IDF)",
    period: "2020 – 2022",
    description:
      "Operated advanced technological systems in high-stakes, rapidly evolving field environments, exercising rapid decision-making under pressure. Participated in Guardian of the Walls operations. Developed the disciplined operational planning and analytical composure that directly translates to demanding data and finance roles.",
    tags: ["Advanced Tech Systems", "Rapid Decision-Making", "Guardian of the Walls", "Field Operations"],
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
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white mb-14"
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
