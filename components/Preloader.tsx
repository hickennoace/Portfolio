"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { getLenis } from "@/lib/smoothScroll";

const HOLD_MS = 1500;

/**
 * Branded first-paint intro: the "DS" monogram tile pops in over a dark veil,
 * a progress line fills, then the whole overlay lifts away like a curtain to
 * reveal the page. Shown once per session (sessionStorage). Locks scroll while
 * visible. Under reduced motion it skips entirely (no veil, no delay).
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("ds-preloaded") === "1";
    } catch {
      /* sessionStorage unavailable — just show once */
    }
    if (seen || reduce) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    getLenis()?.stop();

    const id = window.setTimeout(() => {
      try {
        sessionStorage.setItem("ds-preloaded", "1");
      } catch {
        /* ignore */
      }
      setVisible(false);
    }, HOLD_MS);

    return () => window.clearTimeout(id);
  }, [reduce]);

  // Release scroll lock once the curtain has lifted.
  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      getLenis()?.start();
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-950"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Soft radial glow behind the mark */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-7">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl
                         bg-gradient-to-br from-blue-500 to-blue-700
                         shadow-[0_10px_50px_-6px_rgba(59,130,246,0.7)]"
            >
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
                className="text-3xl font-bold tracking-tighter text-white"
              >
                DS
              </motion.span>
            </motion.div>

            {/* Progress line */}
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: HOLD_MS / 1000 - 0.2, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
