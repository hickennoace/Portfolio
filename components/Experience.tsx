"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Briefcase, Shield, Lock, Users, LucideIcon } from "lucide-react";
import { EASE, SPRING_SNAPPY, VIEWPORT_ONCE } from "@/lib/motion";
import SectionLabel from "@/components/SectionLabel";
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
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);
  const reduce = useReducedMotion();
  const { t } = useLang();

  // The connector line "fills" as the timeline scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (process.env.NODE_ENV !== "production" && itemConfig.length !== t.experience.items.length) {
    throw new Error("Experience: itemConfig length must match dictionary items");
  }

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
          <SectionLabel index="03">{t.experience.eyebrow}</SectionLabel>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.06 }}
          className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white mb-14"
        >
          {t.experience.title}
        </motion.h2>

        <div ref={listRef} className="relative">
          {/* Timeline track + scroll-linked gradient fill (rail centre ≈ 13px) */}
          <div className="absolute top-5 bottom-5 start-[12px] w-[2px] rounded-full bg-black/[0.08] dark:bg-white/[0.08]" />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : fill }}
            className="absolute top-5 bottom-5 start-[12px] w-[2px] origin-top rounded-full bg-gradient-to-b from-blue-500 via-blue-500 to-indigo-500"
          />

          <div className="flex flex-col gap-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.72, delay: 0.1 + i * 0.13, ease: EASE }}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                {/* Rail node */}
                <div className="relative z-10 shrink-0 w-[26px] flex justify-center pt-7">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.18 + i * 0.13, type: "spring", stiffness: 400, damping: 20 }}
                    className={`block w-3 h-3 rounded-full ring-4 ring-[#f1f5f9] dark:ring-[#0a0a0a] ${
                      exp.accent
                        ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                        : "bg-slate-400 dark:bg-slate-500"
                    }`}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={reduce ? undefined : { y: -4, transition: SPRING_SNAPPY }}
                  className="group flex-1 min-w-0 p-6 sm:p-9 rounded-2xl bg-black/[0.04] dark:bg-white/[0.025] border border-black/[0.09] dark:border-white/[0.07] hover:border-blue-400/48 hover:bg-black/[0.06] dark:hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(59,130,246,0.1),0_0_1px_rgba(59,130,246,0.2)] transition-all duration-300"
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
                          <h3 className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-white leading-tight">
                            {exp.role}
                          </h3>
                          <p className={`text-[13px] font-medium mt-0.5 ${exp.accent ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"}`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-[12px] text-slate-600 dark:text-slate-400 font-mono shrink-0 mt-0.5">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
