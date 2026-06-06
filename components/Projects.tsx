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
  {
    id: "04",
    title: "Car Company",
    tags: ["Power BI", "DAX", "TMDL", "Power Query"],
    href: "https://github.com/hickennoace/Car-Company",
  },
  {
    id: "05",
    title: "Developer Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/hickennoace/Portfolio",
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
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          {t.projects.eyebrow}
        </motion.span>

        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="text-3xl sm:text-[2.6rem] font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {t.projects.title}
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
              className="group relative block p-6 sm:p-9 rounded-2xl bg-black/[0.04] dark:bg-white/[0.025] border border-black/[0.09] dark:border-white/[0.07] hover:border-blue-400/55 hover:bg-black/[0.06] dark:hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(59,130,246,0.13),0_0_1px_rgba(59,130,246,0.25)] transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-500/[0.12] via-transparent to-transparent rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <p className="text-[10px] font-semibold text-blue-600/70 dark:text-blue-400/70 tracking-[0.22em] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-all duration-200">
                    <ArrowUpRight size={14} strokeWidth={2} className="text-blue-600 dark:text-blue-400 rtl:-scale-x-100" />
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-[14px] leading-[1.88] mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-blue-500/[0.09] border border-blue-500/[0.18] text-[11px] text-blue-700/80 dark:text-blue-300/80 font-medium"
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
