import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type Project = {
  n: string;
  title: string;
  tag: string;
  blurb: string;
  metric: { value: string; label: string };
  stack: string[];
  year: string;
  href: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "Equity screener: TA-125",
    tag: "Capital Markets",
    blurb:
      "A custom screening engine over the Tel Aviv 125 — combining momentum, quality, and accruals factors. SQL pipeline → Python scoring → Power BI surface for weekly review.",
    metric: { value: "+14.2%", label: "Backtest alpha vs. benchmark, 2019–24" },
    stack: ["Python", "SQL", "Power BI"],
    year: "2025",
    href: "#",
  },
  {
    n: "02",
    title: "DCF lab — sensitivity grids that don't lie",
    tag: "Valuation",
    blurb:
      "An Excel-native DCF framework with Monte-Carlo sensitivity, scenario branches, and audit-ready trace. Built after seeing one too many fragile single-point models.",
    metric: { value: "10,000", label: "scenarios simulated per run" },
    stack: ["Excel", "VBA", "Python"],
    year: "2025",
    href: "#",
  },
  {
    n: "03",
    title: "Macro dashboard — the morning read",
    tag: "Power BI",
    blurb:
      "A single-pane briefing for FX, rates, energy and equities. Auto-refreshing, with anomaly flags and a one-page exec summary I deliver to a small mailing list.",
    metric: { value: "27 KPIs", label: "tracked daily, refreshed pre-open" },
    stack: ["Power BI", "SQL", "DAX"],
    year: "2024",
    href: "#",
  },
  {
    n: "04",
    title: "Credit-risk simulator (Java)",
    tag: "Risk · OOP",
    blurb:
      "A toy bank-book stress engine built in Java to internalize OOP patterns through the language of risk: exposures, ratings, transitions, expected loss.",
    metric: { value: "98%", label: "test coverage · JUnit5" },
    stack: ["Java", "JUnit"],
    year: "2024",
    href: "#",
  },
  {
    n: "05",
    title: "Earnings-call sentiment tracker",
    tag: "NLP · Markets",
    blurb:
      "Pipeline that ingests transcripts, scores tone shift quarter-over-quarter, and surfaces the deltas most predictive of post-announcement drift.",
    metric: { value: "0.61 IC", label: "information coefficient on 1-week drift" },
    stack: ["Python", "SQL", "spaCy"],
    year: "2026",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-32 md:py-44 overflow-hidden">
      {/* Soft top divider */}
      <div className="absolute top-0 left-0 right-0 hairline" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal>
            <SectionLabel index="02" label="Quick Access — Top 5" />
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-tightest">
              Five projects.
              <br />
              <span className="italic text-bone-muted">
                Each one ships a decision.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-[34ch] text-bone-muted text-[14px] leading-[1.8]">
              A recruiter typically gives a portfolio 38 seconds. These are
              the five things I&apos;d show first — built to be opened in any
              order and still tell the same story.
            </p>
          </Reveal>
        </div>

        {/* Featured project (top of the list) — larger card */}
        <Reveal>
          <FeaturedProject p={projects[0]} />
        </Reveal>

        {/* Remaining four in a clean numbered list */}
        <div className="mt-6 border-t border-bone/8">
          {projects.slice(1).map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <ProjectRow p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
            <p className="font-mono text-[11px] tracking-widest uppercase text-bone-muted">
              Full case studies on request · NDA-respecting
            </p>
            <a
              href="https://github.com/hickennoace"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 text-bone hover:text-gold transition-colors duration-500"
            >
              <span className="font-serif text-xl italic">
                Browse the full archive
              </span>
              <ArrowUpRight
                size={20}
                strokeWidth={1.4}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      className="group relative block glass glass-hover rounded-3xl p-8 md:p-12 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-all duration-1000" />
      <div className="relative grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center gap-4 font-mono text-[11px] tracking-widest uppercase text-bone-muted mb-6">
            <span className="font-serif italic text-gold text-3xl tabular leading-none">
              {p.n}
            </span>
            <span className="h-px w-10 bg-bone/20" />
            <span>{p.tag}</span>
            <span className="text-bone-dim">·</span>
            <span className="tabular">{p.year}</span>
          </div>
          <h3 className="font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] tracking-tightest text-bone group-hover:text-gold transition-colors duration-500">
            {p.title}
          </h3>
          <p className="mt-6 max-w-[58ch] text-bone-muted text-[15px] leading-[1.8]">
            {p.blurb}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] tracking-widest uppercase border border-bone/15 px-3 py-1.5 rounded-full text-bone-muted group-hover:border-gold/40 group-hover:text-bone transition-all duration-500"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-bone/8">
          <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
            Headline result
          </p>
          <p className="mt-3 font-serif text-7xl md:text-8xl tabular leading-none text-bone group-hover:text-gold transition-colors duration-500">
            {p.metric.value}
          </p>
          <p className="mt-4 text-[13px] text-bone-muted leading-relaxed max-w-[28ch]">
            {p.metric.label}
          </p>

          <div className="mt-12 inline-flex items-center gap-3 text-bone group-hover:text-gold transition-colors duration-500">
            <span className="font-serif italic text-lg">
              Open the case study
            </span>
            <span className="w-10 h-10 rounded-full border border-bone/20 group-hover:border-gold grid place-items-center group-hover:rotate-45 transition-all duration-700">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      className="project-row group flex items-center gap-6 md:gap-10 py-8 md:py-10 border-b border-bone/8 cursor-pointer"
    >
      <span className="font-serif italic text-gold text-3xl md:text-4xl tabular leading-none w-12 shrink-0">
        {p.n}
      </span>
      <div className="flex-1 grid grid-cols-12 gap-4 md:gap-8 items-baseline">
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight text-bone group-hover:text-gold transition-colors duration-500">
            {p.title}
          </h3>
        </div>
        <p className="hidden md:block md:col-span-4 text-[13px] text-bone-muted leading-relaxed">
          {p.blurb.split(".")[0]}.
        </p>
        <div className="md:col-span-2 flex md:flex-col gap-2 md:gap-1">
          <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
            {p.tag}
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-bone-dim tabular">
            {p.year}
          </p>
        </div>
        <div className="hidden md:flex md:col-span-1 justify-end items-center text-bone-muted project-arrow">
          <ArrowUpRight size={22} strokeWidth={1.4} />
        </div>
      </div>
    </a>
  );
}
