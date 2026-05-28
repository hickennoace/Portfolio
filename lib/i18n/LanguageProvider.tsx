"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dictionary, Dictionary, Lang } from "./dictionary";

type Direction = "ltr" | "rtl";

interface LanguageContextValue {
  lang: Lang;
  dir: Direction;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

function isLang(v: unknown): v is Lang {
  return v === "en" || v === "he";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    const dir: Direction = lang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = dictionary[lang].meta.pageTitle;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  };

  const value: LanguageContextValue = {
    lang,
    dir: lang === "he" ? "rtl" : "ltr",
    t: dictionary[lang],
    setLang,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
