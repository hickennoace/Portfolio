"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * A tiny line chart that draws itself (pathLength 0→1) when scrolled into view,
 * with a soft area fill fading in beneath. `data` is a list of values; they're
 * normalised to the viewbox. Decorative — an analyst-flavoured accent.
 */
export default function Sparkline({
  data,
  className,
}: {
  data: number[];
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const W = 100;
  const H = 32;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - 3 - ((v - min) / range) * (H - 6);
    return [x, y] as const;
  });

  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L ${W} ${H} L 0 ${H} Z`;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE }}
      />
    </svg>
  );
}
