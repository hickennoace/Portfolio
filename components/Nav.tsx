"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLang } from "@/lib/i18n/LanguageProvider";

const LINK_KEYS = [
  { key: "about",      href: "#about"      },
  { key: "whatIDo",    href: "#what-i-do"  },
  { key: "experience", href: "#experience" },
  { key: "work",       href: "#work"       },
  { key: "connect",    href: "#connect"    },
] as const;

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, dir } = useLang();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkSlideX = dir === "rtl" ? 24 : -24;

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.72, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-white/95 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo — initials + last name in italic serif */}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="text-[15px] text-slate-900 dark:text-white/95 hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors duration-200 tracking-tight shrink-0 inline-flex items-baseline gap-1.5"
          >
            <span className="font-semibold">DS</span>
            <span className="font-display italic text-slate-600 dark:text-slate-300 text-[14px]">Shaulov</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {LINK_KEYS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="text-[13px] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 tracking-wide"
              >
                {t.nav[l.key]}
              </a>
            ))}
          </div>

          {/* Right: availability + toggles + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="sm:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-55" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-emerald-400" />
              </span>
              <span className="text-[12px] text-emerald-600 dark:text-emerald-400/80 font-medium hidden sm:block">
                {t.nav.available}
              </span>
            </div>

            <LanguageToggle />
            <ThemeToggle />

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-all duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.16 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.16 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 backdrop-blur-2xl flex flex-col pt-20 px-6 pb-10 md:hidden"
          >
            <nav className="flex flex-col">
              {LINK_KEYS.map((l, i) => (
                <motion.a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: linkSlideX }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.05, duration: 0.32, ease: EASE }}
                  className="text-[2.2rem] font-bold text-slate-900 dark:text-white hover:text-ochre-600 dark:hover:text-ochre-400 py-4 border-b border-black/[0.06] dark:border-white/[0.05] transition-colors duration-200 tracking-[-0.02em]"
                >
                  {t.nav[l.key]}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.32 }}
              className="mt-auto"
            >
              <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-[0.22em] uppercase mb-4">
                {t.nav.getInTouch}
              </p>
              <a
                href="mailto:danielshaulov4@gmail.com"
                className="block text-[15px] text-slate-700 dark:text-slate-200 hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors duration-200 mb-2"
              >
                danielshaulov4@gmail.com
              </a>
              <a
                href="https://github.com/hickennoace"
                target="_blank"
                rel="noreferrer"
                className="block text-[15px] text-slate-700 dark:text-slate-200 hover:text-ochre-600 dark:hover:text-ochre-400 transition-colors duration-200"
              >
                github.com/hickennoace
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
