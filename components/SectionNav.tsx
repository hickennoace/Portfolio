"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/useActiveSection";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * Vertical dot navigator pinned to the side (desktop only). Each dot maps to a
 * section; the active one grows and fills, and a label slides in on hover.
 * Clicks are plain in-page anchors, so SmoothScroll's handler glides to them
 * (and native scroll handles the no-Lenis case). Reuses useActiveSection — no
 * extra scroll cost.
 */
// Stable module-level id list so useActiveSection's effect subscribes once
// instead of rebuilding its IntersectionObserver on every render.
const SECTION_IDS = ["top", "about", "what-i-do", "experience", "work", "connect"];

export default function SectionNav() {
  const { t } = useLang();

  const items = [
    { id: "top", label: t.misc.home, href: "#" },
    { id: "about", label: t.nav.about, href: "#about" },
    { id: "what-i-do", label: t.nav.whatIDo, href: "#what-i-do" },
    { id: "experience", label: t.nav.experience, href: "#experience" },
    { id: "work", label: t.nav.work, href: "#work" },
    { id: "connect", label: t.nav.connect, href: "#connect" },
  ];

  const active = useActiveSection(SECTION_IDS);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed end-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4"
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center justify-center w-4 h-4"
          >
            {/* Label that slides in on hover */}
            <span
              className="pointer-events-none absolute end-full me-3 whitespace-nowrap rounded-md
                         bg-white/90 dark:bg-neutral-900/90 backdrop-blur px-2 py-1
                         text-[11px] font-medium text-slate-700 dark:text-slate-200
                         border border-black/[0.06] dark:border-white/[0.08] shadow-sm
                         opacity-0 translate-x-1
                         group-hover:opacity-100 group-hover:translate-x-0
                         transition-all duration-200"
            >
              {item.label}
            </span>

            <motion.span
              className="block rounded-full"
              animate={{
                height: isActive ? 18 : 8,
                width: 8,
                backgroundColor: isActive ? "rgb(59,130,246)" : "rgba(148,163,184,0.45)",
              }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            />
          </a>
        );
      })}
    </nav>
  );
}
