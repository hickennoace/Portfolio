"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { setLenis, SCROLL_OFFSET } from "@/lib/smoothScroll";

/**
 * Initialises Lenis for a weighted, buttery scroll feel — but ONLY on desktop
 * fine-pointer devices with reduced-motion off. On touch / coarse pointers we
 * leave native scrolling alone (Lenis on mobile fights the OS and the
 * performance budget). Renders nothing.
 *
 * While active it intercepts in-page anchor clicks so #links glide via
 * lenis.scrollTo with the fixed-nav offset. Framer's useScroll keeps working
 * because Lenis drives the real window scroll position.
 */
export default function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    setLenis(lenis);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href === "#") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.1 });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: SCROLL_OFFSET, duration: 1.1 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return null;
}
