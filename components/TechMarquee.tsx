"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/ScrambleText";
import { VIEWPORT_ONCE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

// Curated, fixed order — duplicated once for a seamless CSS loop.
const TECH = [
  "Python", "SQL", "Pandas", "NumPy", "Power BI", "DAX", "Excel",
  "Statsmodels", "Jupyter", "Power Query", "Next.js", "TypeScript",
  "React", "Tailwind CSS", "Git", "ECharts",
];

export default function TechMarquee() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);
  const { t } = useLang();

  return (
    <section ref={ref} aria-label={t.misc.techStack} className="py-12 sm:py-16 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-8"
      >
        <ScrambleText text={t.misc.techStack} />
      </motion.p>

      <div className="marquee group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
        <div className="marquee-track flex shrink-0 items-center gap-3 pe-3">
          {[...TECH, ...TECH].map((tech, i) => (
            <span
              key={i}
              aria-hidden={i >= TECH.length}
              className="flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5
                         bg-black/[0.04] dark:bg-white/[0.03]
                         border border-black/[0.08] dark:border-white/[0.07]
                         text-[13px] font-medium text-slate-700 dark:text-slate-300
                         hover:border-blue-400/45 hover:text-blue-600 dark:hover:text-blue-300
                         transition-colors duration-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
