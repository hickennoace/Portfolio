"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-[58px] h-9" />;

  const toggle = () => setLang(lang === "en" ? "he" : "en");

  return (
    <button
      onClick={toggle}
      aria-label={t.language.toggleAria}
      title={t.language.toggleAria}
      className="relative flex items-center h-9 px-1 rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.04] hover:border-black/[0.18] dark:hover:border-white/[0.18] transition-colors duration-200"
    >
      <span
        className={`px-2 py-0.5 text-[11px] font-semibold tracking-wider rounded-md transition-colors duration-200 ${
          lang === "en"
            ? "bg-slate-900/8 dark:bg-white/12 text-slate-900 dark:text-white"
            : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {t.language.en}
      </span>
      <span
        className={`px-2 py-0.5 text-[11px] font-semibold tracking-wider rounded-md transition-colors duration-200 ${
          lang === "he"
            ? "bg-slate-900/8 dark:bg-white/12 text-slate-900 dark:text-white"
            : "text-slate-500 dark:text-slate-400"
        }`}
      >
        {t.language.he}
      </span>
    </button>
  );
}
