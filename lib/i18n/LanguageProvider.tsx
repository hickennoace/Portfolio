"use client";

import { dictionary, type Dictionary } from "./dictionary";

// The site is English-only. This hook keeps the existing `t.section.key`
// call sites working without a runtime language switcher.
export function useLang(): { t: Dictionary } {
  return { t: dictionary };
}
