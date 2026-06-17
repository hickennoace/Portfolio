"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Cycles through a list of words in place, each blurring/sliding in and out.
 * Used for the hero's rotating job title. Under reduced motion it crossfades
 * gently instead of moving.
 */
export default function RotatingText({
  words,
  className,
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = window.setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block align-bottom">
      {/* Invisible sizer keeps width = widest word to avoid reflow jitter */}
      <span aria-hidden="true" className="invisible inline-block whitespace-nowrap">
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      <span className="absolute inset-0 flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.55em", filter: "blur(6px)" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-0.55em", filter: "blur(6px)" }}
            transition={{ duration: reduce ? 0.25 : 0.45, ease: EASE }}
            className={`whitespace-nowrap ${className ?? ""}`}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
