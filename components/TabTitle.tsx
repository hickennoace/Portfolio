"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n/LanguageProvider";

/**
 * Swaps the document title to a friendly nudge when the tab loses focus, and
 * restores the original on return. Pure delight, near-zero cost. Renders nothing.
 */
export default function TabTitle() {
  const { t } = useLang();

  useEffect(() => {
    const original = document.title;
    const onVisibility = () => {
      document.title = document.hidden ? t.misc.tabAway : original;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.title = original;
    };
  }, [t]);

  return null;
}
