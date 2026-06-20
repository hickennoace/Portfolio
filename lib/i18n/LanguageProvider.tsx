"use client";

import { dictionary, Dictionary } from "./dictionary";

// The site is English-only. This hook keeps the existing `t.section.key`
// call sites working without a runtime language switcher.
export function useLang(): { t: Dictionary; lang: "en"; dir: "ltr" } {
  return { t: dictionary, lang: "en", dir: "ltr" };
}
