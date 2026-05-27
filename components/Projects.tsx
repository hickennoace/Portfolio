"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Config = { id: string; title: string; tags: string[]; href: string };

const projectConfig: Config[] = [
  {
    id: "01",
    title: "Ethereum Macro Analysis",
    tags: ["Python", "Jupyter Notebook", "Pandas", "Statistical tests"],
    href: "https://github.com/hickennoace/Ethereum-Macro-Analysis",
  },
  {
    id: "02",
    title: "Craftiverse Customer Behaviour",
    tags: ["PowerBI", "Python", "SQL", "DAX", "TMDL"],
    href: "https://github.com/hickennoace/CustomerBehaviour",
  },
  {
    id: "03",
    title: "L.A. Crime Rate",
    tags: ["PowerBI", "Power Query", "DAX", "Python"],
    href: "https://github.com/hickennoace/LA-Crime-Rate-PowerBI",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  const projects = t.projects.items.map((it, i) => ({ ...projectConfig[i], ...it }));

  return (
    <section id="work" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-3 mb-6 eyebrow-num"
        >
          <span className="text-[12px] font-mono text-slate-400 dark:text-slate-600">03</span>
          <span className="h-px flex-1 max-w-[28px] bg-slate-300 dark:bg-slate-700" />
          <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 tracking-[0.24em] uppercase">
            {t.projects.eyebrow}
          </span>
        </motion.div>

        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="text-3xl sm:text-[2.7rem] font-bold tracking-[-0.02em] text-slate-900 dark:text-white"
          >
            {t.projects.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-display italic font-normal text-slate-700 dark:text-slate-200">
              {t.projects.title.split(" ").slice(-1)}
            </span>
          </motion.h2>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.14 }}
            href="https://github.com/hickennoace"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
          >
            <Github size={14} strokeWidth={1.5} />
            {t.projects.githubProfile}
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 38 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, delay: 0.1 + i * 0.14, ease: EASE }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="group relative block p-6 sm:p-9 rounded-2xl bg-black/[0.025] dark:bg-white/[0.018] border border-black/[0.08] dark:border-white/[0.06] hover:border-black/[0.20] dark:hover:border-white/[0.16] transition-colors duration-300 overflow-hidden"
            >
              {/* Hairline start-edge accent on hover */}
              <span aria-hidden className="absolute inset-y-6 sm:inset-y-9 start-0 w-px bg-slate-900/0 dark:bg-white/0 group-hover:bg-slate-900/25 dark:group-hover:bg-white/25 transition-colors duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.22em] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-slate-900 dark:text-white transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl border border-slate-900/12 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-slate-900/28 dark:group-hover:border-white/24 transition-all duration-200">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="text-slate-700 dark:text-slate-200 rtl:-scale-x-100 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                    />
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-[14px] leading-[1.88] mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md border border-slate-900/10 dark:border-white/10 text-[11px] text-slate-600 dark:text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
