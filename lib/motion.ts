import type { Variants, Transition } from "framer-motion";

/**
 * Shared motion language for the whole site.
 *
 * Every section used to redeclare `EASE`, `up`, and `stagger` locally. They now
 * live here so the timing/feel stays consistent and is tuned in one place.
 *
 * Reduced-motion: components read Framer's `useReducedMotion()` and, when true,
 * either skip the motion wrappers or pass `distance: 0`. Helpers below accept a
 * `reduce` flag so a component can degrade gracefully without branching markup.
 */

// Signature easing — a soft, confident ease-out used across the site.
export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Springs for interaction-driven motion (tilt, magnetic, spotlight).
export const SPRING_SOFT: Transition = { type: "spring", stiffness: 150, damping: 18, mass: 0.6 };
export const SPRING_SNAPPY: Transition = { type: "spring", stiffness: 320, damping: 28, mass: 0.5 };

/** Container that staggers its children's entrance. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Fade + rise. `reduce` collapses the travel so it becomes a plain fade. */
export const fadeUp = (distance = 28, duration = 0.7, reduce = false): Variants => ({
  hidden: { opacity: 0, y: reduce ? 0 : distance },
  show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : duration, ease: EASE } },
});

/** Fade + horizontal slide (RTL-aware: pass a signed distance). */
export const fadeIn = (x = 0, y = 0, duration = 0.7, reduce = false): Variants => ({
  hidden: { opacity: 0, x: reduce ? 0 : x, y: reduce ? 0 : y },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: reduce ? 0.2 : duration, ease: EASE } },
});

/** Pop in from slightly small — good for chips/badges. */
export const scaleIn = (from = 0.85, duration = 0.35, reduce = false): Variants => ({
  hidden: { opacity: 0, scale: reduce ? 1 : from },
  show: { opacity: 1, scale: 1, transition: { duration: reduce ? 0.2 : duration, ease: EASE } },
});

/** Standard once-per-page in-view trigger. */
export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;
