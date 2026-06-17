"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASE } from "@/lib/motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * Fades in once the visitor has scrolled past the hero; springs on hover and
 * smooth-scrolls back to the top. Hidden until needed so it never competes with
 * the hero content.
 */
export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label={t.misc.backToTop}
          title={t.misc.backToTop}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.28, ease: EASE }}
          whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 end-6 z-50 w-11 h-11 rounded-full flex items-center justify-center
                     bg-blue-600 text-white shadow-[0_8px_30px_rgba(59,130,246,0.4)]
                     hover:bg-blue-500 hover:shadow-[0_10px_38px_rgba(59,130,246,0.55)]
                     border border-blue-400/30 backdrop-blur-sm transition-colors duration-200"
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
