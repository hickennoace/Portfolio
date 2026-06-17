"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Hidden delight: the Konami code (↑↑↓↓←→←→ B A) triggers a confetti party and
 * a short toast. Confetti is lazy-imported and skipped under reduced motion;
 * the toast still shows. Renders nothing until triggered.
 */
export default function KonamiEasterEgg() {
  const [show, setShow] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    let idx = 0;

    const party = () => {
      setShow(true);
      window.setTimeout(() => setShow(false), 3200);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      import("canvas-confetti").then(({ default: confetti }) => {
        const colors = ["#3b82f6", "#6366f1", "#60a5fa", "#a5b4fc", "#ffffff"];
        const end = performance.now() + 2400;
        const frame = () => {
          if (performance.now() > end) return;
          confetti({ particleCount: 4, angle: 60, spread: 60, origin: { x: 0 }, colors });
          confetti({ particleCount: 4, angle: 120, spread: 60, origin: { x: 1 }, colors });
          requestAnimationFrame(frame);
        };
        frame();
      });
    };

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQUENCE[idx]) {
        idx += 1;
        if (idx === SEQUENCE.length) {
          idx = 0;
          party();
        }
      } else {
        idx = key === SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[160] rounded-full
                     bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                     px-6 py-3 text-[14px] font-semibold
                     shadow-[0_12px_40px_-6px_rgba(59,130,246,0.6)]"
          role="status"
        >
          {t.misc.konami}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
