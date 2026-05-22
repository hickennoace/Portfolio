"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, Linkedin, Mail, MapPin, X, ZoomIn } from "lucide-react";

const skills = ["Python", "SQL", "Power BI", "Excel", "Java"];

type TagColor = "indigo" | "violet" | "cyan" | "amber" | "emerald";

const tagStyles: Record<TagColor, string> = {
  indigo: "bg-indigo-50 text-indigo-600 border border-indigo-100",
  violet: "bg-violet-50 text-violet-600 border border-violet-100",
  cyan:   "bg-cyan-50 text-cyan-600 border border-cyan-100",
  amber:  "bg-amber-50 text-amber-700 border border-amber-100",
  emerald:"bg-emerald-50 text-emerald-700 border border-emerald-100",
};

const projects: {
  id: string;
  title: string;
  tag: string;
  tagColor: TagColor;
  stack: string;
  metric: string;
  metricLabel: string;
  year: string;
}[] = [
  {
    id: "01",
    title: "Equity Screener: TA-125",
    tag: "Capital Markets",
    tagColor: "indigo",
    stack: "Python · SQL · Power BI",
    metric: "+14.2%",
    metricLabel: "alpha vs. benchmark",
    year: "2025",
  },
  {
    id: "02",
    title: "DCF Lab — Sensitivity Grids",
    tag: "Valuation",
    tagColor: "violet",
    stack: "Excel · VBA · Python",
    metric: "10,000",
    metricLabel: "scenarios / run",
    year: "2025",
  },
  {
    id: "03",
    title: "Macro Morning Dashboard",
    tag: "Analytics",
    tagColor: "cyan",
    stack: "Power BI · SQL · DAX",
    metric: "27 KPIs",
    metricLabel: "tracked pre-open",
    year: "2024",
  },
  {
    id: "04",
    title: "Credit-Risk Simulator",
    tag: "Risk · OOP",
    tagColor: "amber",
    stack: "Java · JUnit5",
    metric: "98%",
    metricLabel: "test coverage",
    year: "2024",
  },
  {
    id: "05",
    title: "Earnings-Call Sentiment Tracker",
    tag: "NLP · Markets",
    tagColor: "emerald",
    stack: "Python · SQL · spaCy",
    metric: "0.61 IC",
    metricLabel: "on 1-week drift",
    year: "2026",
  },
];

const contacts = [
  { href: "https://www.linkedin.com/in/danielshaulov/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/hickennoace",             Icon: Github,   label: "GitHub"   },
  { href: "mailto:danielshaulov4@gmail.com",            Icon: Mail,     label: "Email"    },
] as const;

export default function Page() {
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    if (!photoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhotoOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [photoOpen]);

  return (
    <>
      <div className="min-h-screen bg-slate-100 flex flex-col">

        {/* ── Header ── */}
        <header className="sticky top-0 z-40 h-14 bg-slate-900 px-8 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            {/* Pulsing availability dot + name */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[13px] font-semibold text-white tracking-tight">
                Daniel Shaulov
              </span>
            </div>
            {/* Available badge */}
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-semibold text-emerald-400 tracking-wide uppercase">
              Available for hire
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-1 text-[11px] text-slate-400">
              <MapPin size={11} strokeWidth={1.5} /> Tel Aviv
            </span>
            <div className="w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-0.5">
              {contacts.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-150"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* ── Main ── */}
        <main className="flex-1 p-5 grid grid-cols-[300px_1fr] gap-5 max-w-[1400px] mx-auto w-full">

          {/* ── Left panel ── */}
          <aside className="flex flex-col gap-3">

            {/* Bio card */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
              {/* Gradient top section */}
              <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-4 pt-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  {/* Clickable photo */}
                  <button
                    onClick={() => setPhotoOpen(true)}
                    aria-label="Expand photo"
                    className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0 shadow-md ring-2 ring-white cursor-zoom-in transition-all duration-200 group hover:ring-indigo-300 hover:shadow-lg"
                  >
                    <img
                      src="/copy.png"
                      alt="Daniel Shaulov"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn size={16} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </button>

                  <div className="min-w-0">
                    <p className="text-[14px] font-bold text-slate-900 leading-tight">
                      Daniel Shaulov
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Junior Analyst · Finance & Data
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin size={9} strokeWidth={1.5} />
                      Tel Aviv, Israel
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio text */}
              <div className="px-4 py-3">
                <p className="text-[12px] text-slate-600 leading-[1.75]">
                  Economics & Management student at the Open University of Israel
                  (GPA&nbsp;92) and former IDF combat soldier with 3 years of service,
                  including squad-level leadership. I build data-driven answers to
                  financial questions — from equity screening and DCF modeling to macro
                  dashboards — using Python, SQL, and Power&nbsp;BI. Targeting junior
                  analyst roles in corporate finance and capital markets where rigour
                  and composure under pressure matter most.
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4">
                  {contacts.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      <Icon size={11} strokeWidth={1.6} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-2.5">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-[11px] font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-2.5 text-[10px] text-slate-400 leading-relaxed">
                Also: Git · VBA · DAX · spaCy · LaTeX · Tableau
              </p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-[3px] border-l-indigo-500 shadow-sm p-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-2.5">
                Education
              </p>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[13px] font-bold text-slate-800">
                    B.A. Economics & Management
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Open University of Israel</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">2024 – present</p>
                </div>
                <span className="shrink-0 px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-[11px] font-bold text-indigo-600">
                  GPA 92
                </span>
              </div>
            </div>

            {/* Military */}
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-[3px] border-l-slate-400 shadow-sm p-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2.5">
                Military Service
              </p>
              <p className="text-[13px] font-bold text-slate-800">Combat Infantry · IDF</p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                3 years · Squad-level leadership
              </p>
            </div>

          </aside>

          {/* ── Right panel: Projects ── */}
          <section className="flex flex-col">

            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-indigo-500">
                  Top 5 Projects
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Selected analytical work · 2024–2026
                </p>
              </div>
              <a
                href="https://github.com/hickennoace"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-indigo-600 transition-colors px-3 py-1.5 rounded-lg border border-slate-200 hover:border-indigo-200 bg-white shadow-sm"
              >
                Full archive <ExternalLink size={10} />
              </a>
            </div>

            <div className="grid grid-rows-5 gap-2.5" style={{ minHeight: "420px" }}>
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-sm px-5 h-20 flex items-center gap-5 hover:border-indigo-300 hover:shadow-md hover:-translate-y-px transition-all duration-200 group cursor-default"
                >
                  {/* Number */}
                  <span className="w-8 shrink-0 text-[20px] font-light text-slate-200 group-hover:text-indigo-300 tabular-nums leading-none transition-colors duration-200">
                    {p.id}
                  </span>

                  {/* Title + tag + stack */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-slate-800 group-hover:text-slate-900 truncate leading-tight">
                      {p.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded font-semibold ${tagStyles[p.tagColor]}`}>
                        {p.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 truncate">{p.stack}</span>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="shrink-0 text-right min-w-[80px]">
                    <p className="text-[16px] font-bold text-indigo-600 tabular-nums leading-tight">
                      {p.metric}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                      {p.metricLabel}
                    </p>
                  </div>

                  {/* Year + icon */}
                  <div className="shrink-0 text-right w-10">
                    <p className="text-[11px] font-medium text-slate-400 tabular-nums">{p.year}</p>
                    <ExternalLink
                      size={12}
                      strokeWidth={1.5}
                      className="ml-auto mt-1.5 text-slate-200 group-hover:text-indigo-400 transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>

          </section>

        </main>

        {/* ── Footer ── */}
        <footer className="mt-5 py-4 px-8 border-t border-slate-200 bg-white">
          <p className="text-center text-[11px] text-slate-400">
            © {new Date().getFullYear()} Daniel Shaulov · Built with Next.js · Deployed on Wasmer Edge
          </p>
        </footer>

      </div>

      {/* ── Photo lightbox ── */}
      {photoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setPhotoOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src="/copy.png"
              alt="Daniel Shaulov"
              className="max-h-[82vh] max-w-[82vw] rounded-2xl shadow-2xl ring-1 ring-white/20"
            />
            <button
              onClick={() => setPhotoOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
