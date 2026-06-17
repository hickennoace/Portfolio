"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "@/components/CountUp";
import Sparkline from "@/components/Sparkline";
import { EASE, VIEWPORT_ONCE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

type Config = { to: number; suffix: string; spark: number[] };

// Real, defensible numbers; sparklines are decorative upward trends.
const config: Config[] = [
  { to: 90, suffix: "", spark: [62, 70, 68, 78, 84, 88, 90] },
  { to: 7, suffix: "", spark: [1, 2, 2, 4, 5, 6, 7] },
  { to: 20, suffix: "+", spark: [4, 7, 9, 12, 15, 18, 20] },
  { to: 3, suffix: "", spark: [1, 1, 2, 2, 3, 3, 3] },
];

export default function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);
  const { t } = useLang();

  const items = t.metrics.items.map((it, i) => ({ ...it, ...config[i] }));

  return (
    <section ref={ref} className="py-16 sm:py-20 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="block text-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-[0.24em] uppercase mb-10"
        >
          {t.metrics.eyebrow}
        </motion.span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl p-5 sm:p-6
                         bg-black/[0.04] dark:bg-white/[0.025]
                         border border-black/[0.09] dark:border-white/[0.07]
                         hover:border-blue-400/45 transition-colors duration-300"
            >
              <p className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">
                <CountUp to={m.to} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-[12px] sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                {m.label}
              </p>
              <Sparkline
                data={m.spark}
                className="mt-4 h-8 w-full text-blue-500/70 dark:text-blue-400/70"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
