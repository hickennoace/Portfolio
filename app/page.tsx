import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

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
  return (
    <div className="h-screen overflow-hidden bg-slate-50 flex flex-col">

      {/* ── Header ── */}
      <header className="shrink-0 h-14 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-[13px] font-semibold text-slate-900 tracking-tight">
            Daniel Shaulov
          </span>
          <span className="text-slate-300 select-none">·</span>
          <span className="text-[12px] text-slate-500">Analyst · Finance & Data</span>
        </div>
        <div className="flex items-center gap-0.5">
          {contacts.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-150"
            >
              <Icon size={15} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 min-h-0 p-5 grid grid-cols-[280px_1fr] gap-4">

        {/* ── Left panel ── */}
        <aside className="flex flex-col gap-3 min-h-0">

          {/* Bio */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 ring-2 ring-slate-100">
                <img
                  src="/copy.png"
                  alt="Daniel Shaulov"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-slate-900 leading-none">
                  Daniel Shaulov
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Tel Aviv · Open to opportunities
                </p>
              </div>
            </div>

            <p className="text-[12px] text-slate-600 leading-[1.7]">
              Economics & Management student at the Open University of Israel.
              Former IDF combat soldier targeting junior analyst roles in
              corporate finance and capital markets.
            </p>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4">
              {contacts.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <Icon size={11} strokeWidth={1.6} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-2.5">
              Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-2.5">
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
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-2.5">
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
        <section className="flex flex-col min-h-0">

          <div className="shrink-0 flex items-center justify-between mb-3">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">
              Top 5 Projects
            </p>
            <a
              href="https://github.com/hickennoace"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600 transition-colors"
            >
              Full archive
              <ExternalLink size={10} className="ml-0.5" />
            </a>
          </div>

          <div className="flex-1 min-h-0 grid grid-rows-5 gap-2.5">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-slate-200 px-5 flex items-center gap-4 hover:border-slate-300 hover:shadow-sm transition-all duration-150 group cursor-default min-h-0"
              >
                <span className="w-8 shrink-0 text-[22px] font-light text-slate-200 tabular-nums leading-none">
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
                  <p className="text-[12px] font-medium text-slate-600">
                    {p.metric}
                  </p>
                  <p className="text-[11px] text-slate-400 tabular-nums mt-0.5">
                    {p.year}
                  </p>
                </div>

                <ExternalLink
                  size={13}
                  strokeWidth={1.5}
                  className="shrink-0 text-slate-200 group-hover:text-slate-400 transition-colors"
                />
              </div>
            ))}
          </div>

        </section>

      </main>
    </div>
  );
}
