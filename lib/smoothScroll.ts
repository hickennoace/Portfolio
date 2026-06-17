import type Lenis from "lenis";

/**
 * Tiny module-level handle to the active Lenis instance so non-provider
 * components (scroll-to-top button, preloader) can drive smooth scrolling
 * without prop-drilling a context. Null when Lenis isn't active (mobile /
 * coarse pointer / reduced motion) — callers fall back to native scroll.
 */
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};
export const getLenis = () => instance;

/** Offset for the fixed nav so anchored sections aren't hidden under it. */
export const SCROLL_OFFSET = -80;

export function scrollToTop(reduce = false) {
  if (instance) instance.scrollTo(0, { duration: 1.1 });
  else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}
