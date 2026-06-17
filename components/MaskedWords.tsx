"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE } from "@/lib/motion";

type Word = { text: string; className?: string };

/**
 * Renders words that rise up from behind a clip mask, one after another — a more
 * deliberate entrance than a plain fade. Each word sits in an overflow-hidden
 * span so it appears to emerge from below its own baseline.
 *
 * Under reduced-motion the words render statically (no transform), still fading
 * in via the parent's own animation if any.
 */
export default function MaskedWords({
  words,
  className,
  delay = 0,
  stagger = 0.12,
}: {
  words: Word[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
  };

  const word: Variants = {
    hidden: { y: reduce ? 0 : "115%" },
    show: { y: 0, transition: { duration: reduce ? 0.2 : 0.8, ease: EASE } },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      aria-label={words.map((w) => w.text).join(" ")}
    >
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-flex overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <motion.span variants={word} className={`inline-block ${w.className ?? ""}`}>
            {w.text}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
