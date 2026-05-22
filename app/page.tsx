"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, Linkedin, Mail, X, ZoomIn } from "lucide-react";

const skills = ["Python", "SQL", "Power BI", "Excel", "Java"];

const projects = [
  {
    id: "01",
    title: "Equity Screener: TA-125",
    stack: "Python · SQL · Power BI",
    metric: "+14.2% alpha vs. benchmark",
    year: "2025",
  },
  {
    id: "02",
    title: "DCF Lab — Sensitivity Grids",
    stack: "Excel · VBA · Python",
    metric: "10,000 scenarios / run",
    year: "2025",
  },
  {
    id: "03",
    title: "Macro Morning Dashboard",
    stack: "Power BI · SQL · DAX",
    metric: "27 KPIs tracked pre-open",
    year: "2024",
  },
  {
    id: "04",
    title: "Credit-Risk Simulator",
    stack: "Java · JUnit5",
    metric: "98% test coverage",
    year: "2024",
  },
  {
    id: "05",
    title: "Earnings-Call Sentiment Tracker",
    stack: "Python · SQL · spaCy",
    metric: "0.61 IC on 1-week drift",
    year: "2026",
  },
];

const contacts = [
  { href: "https://www.linkedin.com/in/danielshaulov/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/hickennoace", Icon: Github, label: "GitHub" },
  { href: "mailto:danielshaulov4@gmail.com", Icon: Mail, label: "Email" },
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
      <div className="min-h-screen bg-slate-50 flex flex-col">

        {/* ── Header ── */}
        <header className="shrink-0 h-14 bg-slate-900 px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[13px] font-semibold text-white tracking-tight">
              Daniel Shaulov
            </span>
            <span className="text-slate-600 select-none">·</span>
            <span className="text-[12px] text-slate-400">Analyst · Finance & Data</span>
          </div>
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
        </header>

        {/* ── Main ── */}
        <main className="flex-1 p-5 grid grid-cols-[290px_1fr] gap-4">

          {/* ── Left panel ── */}
          <aside className="flex flex-col gap-3">

            {/* Bio card */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-4">
              <div className="flex items-center gap-3 mb-3">

                {/* Clickable photo */}
                <button
                  onClick={() => setPhotoOpen(true)}
                  aria-label="Expand photo"
                  className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-200 shrink-0 ring-2 ring-indigo-100 hover:ring-indigo-400 cursor-zoom-in transition-all duration-200 group"
                >
                  <img
                    src="/copy.png"
                    alt="Daniel Shaulov"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn
                      size={16}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                </button>

                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-slate-900 leading-none">
                    Daniel Shaulov
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Tel Aviv · Open to opportunities
                  </p>
                </div>
              </div>

              {/* Extended bio */}
              <p className="text-[12px] text-slate-600 leading-[1.72]">
                Economics & Management student at the Open University of Israel
                (GPA&nbsp;92) and former IDF combat soldier with 4+ years of
                service, including squad-level leadership. I build data-driven
                answers to financial questions — from equity screening and DCF
                modeling to macro dashboards — using Python, SQL, and Power&nbsp;BI.
                Decisive under pressure and structured in thinking, I&apos;m
                targeting junior analyst roles in corporate finance and capital
                markets where rigour and composure matter most.
              </p>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4">
                {contacts.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <Icon size={11} strokeWidth={1.6} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm p-4">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-500 mb-2.5">
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-[11px] font-medium text-indigo-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-2 border-l-indigo-400 shadow-sm p-4">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-500 mb-2.5">
                Education
              </p>
              <p className="text-[13px] font-semibold text-slate-800">
                B.A. Economics & Management
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Open University of Israel
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                2024 – present · GPA 92
              </p>
            </div>

            {/* Military */}
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-2 border-l-slate-400 shadow-sm p-4">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 mb-2.5">
                Military Service
              </p>
              <p className="text-[13px] font-semibold text-slate-800">
                Combat Infantry · IDF
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                4+ years · Squad-level leadership
              </p>
            </div>

          </aside>

          {/* ── Right panel: Projects ── */}
          <section className="flex flex-col">

            <div className="shrink-0 flex items-center justify-between mb-3">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-500">
                Top 5 Projects
              </p>
              <a
                href="https://github.com/hickennoace"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-600 transition-colors"
              >
                Full archive
                <ExternalLink size={10} className="ml-0.5" />
              </a>
            </div>

            <div className="grid grid-rows-5 gap-2.5" style={{ minHeight: "420px" }}>
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-sm px-5 h-20 flex items-center gap-4 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group cursor-default"
                >
                  <span className="w-8 shrink-0 text-[22px] font-light text-indigo-200 group-hover:text-indigo-400 tabular-nums leading-none transition-colors duration-200">
                    {p.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-slate-800 group-hover:text-slate-900 truncate leading-tight">
                      {p.title}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                      {p.stack}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-[12px] font-semibold text-indigo-600">
                      {p.metric}
                    </p>
                    <p className="text-[11px] text-slate-400 tabular-nums mt-0.5">
                      {p.year}
                    </p>
                  </div>

                  <ExternalLink
                    size={13}
                    strokeWidth={1.5}
                    className="shrink-0 text-slate-200 group-hover:text-indigo-400 transition-colors"
                  />
                </div>
              ))}
            </div>

          </section>

        </main>
      </div>

      {/* ── Photo lightbox ── */}
      {photoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setPhotoOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
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
