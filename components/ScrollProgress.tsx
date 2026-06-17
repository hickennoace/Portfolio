"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Thin gradient bar pinned to the top of the viewport that fills as the page
 * scrolls — instant "how far through am I" feedback. Driven by scrollYProgress
 * (0→1) mapped to scaleX. Spring-smoothed unless reduced motion is requested.
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left
                 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500
                 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
    />
  );
}
