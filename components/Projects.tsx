"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { EASE, SPRING_SNAPPY } from "@/lib/motion";
import ScrambleText from "@/components/ScrambleText";
import { useLang } from "@/lib/i18n/LanguageProvider";

const PER_PAGE = 4;

type Config = { id: string; title: string; tags: string[]; href: string; repo: string };

const projectConfig: Config[] = [
  {
    id: "01",
    title: "🚀 MyAnalyst",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ECharts", "Web Worker"],
    href: "https://myanalyst.net",
    repo: "https://github.com/hickennoace/MyAnalyst",
  },
  {
    id: "02",
    title: "📈 Ethereum Macro Analysis",
    tags: ["Python", "Jupyter Notebook", "Pandas", "Statistical tests"],
    href: "https://github.com/hickennoace/Ethereum-Macro-Analysis",
    repo: "https://github.com/hickennoace/Ethereum-Macro-Analysis",
  },
  {
    id: "03",
    title: "🛒 Craftiverse Customer Behaviour",
    tags: ["PowerBI", "Python", "SQL", "DAX", "TMDL"],
    href: "https://github.com/hickennoace/CustomerBehaviour",
    repo: "https://github.com/hickennoace/CustomerBehaviour",
  },
  {
    id: "04",
    title: "🚔 L.A. Crime Rate",
    tags: ["PowerBI", "Power Query", "DAX", "Python"],
    href: "https://github.com/hickennoace/LA-Crime-Rate-PowerBI",
    repo: "https://github.com/hickennoace/LA-Crime-Rate-PowerBI",
  },
  {
    id: "05",
    title: "📊 TickerIO",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "TradingView", "SSE", "Gemini AI"],
    href: "https://ticker-io.vercel.app",
    repo: "https://github.com/hickennoace/TickerIO",
  },
  {
    id: "06",
    title: "🚗 Car Company",
    tags: ["Power BI", "DAX", "TMDL", "Power Query"],
    href: "https://github.com/hickennoace/Car-Company",
    repo: "https://github.com/hickennoace/Car-Company",
  },
  {
    id: "07",
    title: "🌐 Developer Portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    href: "https://github.com/hickennoace/Portfolio",
    repo: "https://github.com/hickennoace/Portfolio",
  },
];

const pageVariants: Variants = {
  enter: (dir: number) => ({ x: dir >= 0 ? 60 : -60, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE, staggerChildren: 0.09, delayChildren: 0.04 },
  },
  exit: (dir: number) => ({
    x: dir >= 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

const cardVariants: Variants = {
  enter: { opacity: 0, y: 28 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, staggerChildren: 0.05, delayChildren: 0.18 } },
  exit: { opacity: 0, y: 0, transition: { duration: 0.2 } },
};

const tagsWrap: Variants = {
  enter: {},
  center: { transition: { staggerChildren: 0.05, delayChildren: 0.22 } },
};

const tagItem: Variants = {
  enter: { opacity: 0, scale: 0.8 },
  center: { opacity: 1, scale: 1, transition: SPRING_SNAPPY },
  exit: { opacity: 0 },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();

  const projects = t.projects.items.map((it, i) => ({ ...projectConfig[i], ...it }));

  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + totalPages) % totalPages);
  };
  const goTo = (target: number) => {
    if (target === page) return;
    setDirection(target > page ? 1 : -1);
    setPage(target);
  };

  const pageItems = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const hasPager = totalPages > 1;

  const ArrowBtn = ({ dir, children }: { dir: number; children: React.ReactNode }) => (
    <motion.button
      type="button"
      onClick={() => paginate(dir)}
      aria-label={dir > 0 ? "Next projects" : "Previous projects"}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileTap={{ scale: 0.9 }}
      className="shrink-0 self-center w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.09] dark:border-white/[0.09] text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-400/55 hover:bg-blue-500/[0.07] hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] transition-all duration-300"
    >
      {children}
    </motion.button>
  );

  return (
    <section id="work" ref={ref} className="py-28 sm:py-36 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-5"
        >
          <ScrambleText text={t.projects.eyebrow} />
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

        <div className="flex items-stretch gap-2 sm:gap-4">
          {hasPager && (
            <ArrowBtn dir={-1}>
              <ChevronLeft size={20} strokeWidth={1.75} className="rtl:-scale-x-100" />
            </ArrowBtn>
          )}

          <div className="flex-1 min-w-0 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={page}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate={inView ? "center" : "enter"}
                exit="exit"
                className="grid sm:grid-cols-2 gap-4 sm:gap-5"
              >
                {pageItems.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                    style={{ perspective: 1000 }}
                  >
                  <TiltCard className="group relative block h-full p-6 sm:p-9 rounded-2xl bg-black/[0.04] dark:bg-white/[0.025] border border-black/[0.09] dark:border-white/[0.07] hover:border-blue-400/55 hover:bg-black/[0.06] dark:hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(59,130,246,0.13),0_0_1px_rgba(59,130,246,0.25)] transition-all duration-300 overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-500/[0.12] via-transparent to-transparent rounded-2xl" />

                    {/* Primary stretched link → live site / project */}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={project.title}
                      className="absolute inset-0 z-10"
                    />

                    <div className="relative z-20 pointer-events-none">
                      <div className="flex items-start justify-between mb-6 gap-4">
                        <div>
                          <p className="text-[10px] font-semibold text-blue-600/70 dark:text-blue-400/70 tracking-[0.22em] uppercase mb-2">
                            {project.category}
                          </p>
                          <h3 className="text-[19px] sm:text-[20px] font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-200 leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        {/* Source on GitHub - clickable above the stretched link */}
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} source on GitHub`}
                          title="Source on GitHub"
                          className="pointer-events-auto relative z-30 w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-200"
                        >
                          <Github size={15} strokeWidth={2} className="text-blue-600 dark:text-blue-400" />
                        </a>
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 text-[14px] leading-[1.88] mb-6">
                        {project.description}
                      </p>

                      <motion.div variants={tagsWrap} className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            variants={tagItem}
                            className="px-2.5 py-1 rounded-md bg-blue-500/[0.09] border border-blue-500/[0.18] text-[11px] text-blue-700/80 dark:text-blue-300/80 font-medium"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {hasPager && (
            <ArrowBtn dir={1}>
              <ChevronRight size={20} strokeWidth={1.75} className="rtl:-scale-x-100" />
            </ArrowBtn>
          )}
        </div>

        {hasPager && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex items-center justify-center gap-2.5 mt-10"
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                aria-current={i === page}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-7 bg-blue-500"
                    : "w-2 bg-slate-400/40 dark:bg-white/20 hover:bg-slate-400/70 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
