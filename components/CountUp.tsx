"use client";

import { useEffect, useRef } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";

/**
 * Counts a number up from 0 to `to` once it scrolls into view. Under reduced
 * motion it snaps straight to the final value. Renders the final value in SSR
 * markup-friendly form (starts at 0 on the client, then animates).
 */
export default function CountUp({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;

    if (reduce) {
      node.textContent = `${to}${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration, reduce]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}
