"use client";

import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-32 md:pt-40 pb-20 overflow-hidden grain"
    >
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 vignette-tl pointer-events-none" />
      <div className="absolute inset-0 vignette-br pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[600px] opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,165,91,0.8), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Top meta strip */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] tracking-widest uppercase text-bone-muted mb-12 animate-fade-in">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-jade opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-jade" />
            </span>
            Open to opportunities · 2026
          </span>
          <span className="hidden md:flex items-center gap-2">
            <MapPin size={12} strokeWidth={1.6} /> Tel Aviv · Remote
          </span>
          <span className="hidden md:flex items-center gap-2">
            <Sparkles size={12} strokeWidth={1.6} /> Portfolio · vol. 04
          </span>
        </div>

        {/* Headline grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Left: main wordmark */}
          <div className="col-span-12 lg:col-span-8 animate-fade-up">
            <p className="font-mono text-[11px] tracking-widest uppercase text-gold mb-6">
              Portfolio / Daniel Shaulov
            </p>
            <h1 className="font-serif text-[clamp(3.5rem,11vw,10.5rem)] leading-[0.92] tracking-tightest text-bone">
              An analyst
              <br />
              <span className="italic text-bone-muted">forged in</span>{" "}
              <span className="relative inline-block">
                <span className="text-gold">discipline.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full opacity-60"
                  height="10"
                  viewBox="0 0 400 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6 Q 100 1 200 5 T 398 4"
                    stroke="#c9a55b"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-10 max-w-[44ch] text-bone-muted text-[15px] leading-[1.75]">
              I&apos;m a former combat soldier reading{" "}
              <span className="text-bone">Economics &amp; Management</span> at
              the Open University. I build clear, defensible answers from messy
              data — and I find the work that finance demands feels familiar:{" "}
              <span className="italic text-bone">prepare, decide, deliver.</span>
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 rounded-full text-sm font-medium hover:bg-gold transition-all duration-500"
              >
                See the work
                <ArrowDownRight
                  size={16}
                  strokeWidth={2}
                  className="group-hover:rotate-[-45deg] transition-transform duration-500"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm border border-bone/15 text-bone hover:border-gold hover:text-gold transition-all duration-500"
              >
                Start a conversation
              </a>
            </div>
          </div>

          {/* Right: headshot frame */}
          <div className="col-span-12 lg:col-span-4 animate-fade-up [animation-delay:200ms]">
            <Headshot />
          </div>
        </div>

        {/* Lower stat strip */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/8 border-y border-bone/8">
          {[
            { k: "4+", v: "Years of service", d: "IDF · Combat" },
            { k: "GPA 92", v: "Econ & Mgmt", d: "Open University" },
            { k: "12", v: "Analytical projects", d: "shipped 2024–26" },
            { k: "5", v: "Languages", d: "PY · SQL · DAX · JV · EN" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-ink px-6 md:px-10 py-8 group hover:bg-ink-50 transition-colors duration-500"
            >
              <p className="font-serif text-4xl md:text-5xl tabular text-bone group-hover:text-gold transition-colors duration-500">
                {s.k}
              </p>
              <p className="mt-2 text-sm text-bone">{s.v}</p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted mt-1">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Headshot() {
  return (
    <div className="relative max-w-[360px] mx-auto lg:ml-auto">
      {/* Frame */}
      <div className="relative aurum-ring rounded-[2px] overflow-hidden bg-ink-100">
        <div className="aspect-[4/5] relative grain overflow-hidden bg-ink-100">
          {/* Photo */}
          <img
            src="/copy.png"
            alt="Daniel Shaulov"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
          />
          {/* Subtle gradient overlay for editorial feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/[0.06] pointer-events-none mix-blend-overlay" />

          {/* Corner ticks */}
          <Tick className="top-2 left-2" />
          <Tick className="top-2 right-2 rotate-90" />
          <Tick className="bottom-2 right-2 rotate-180" />
          <Tick className="bottom-2 left-2 -rotate-90" />
        </div>
      </div>

      {/* Caption */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-serif text-lg italic text-bone leading-tight">
            Daniel Shaulov
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted mt-1">
            est. 2024 · plate № 01
          </p>
        </div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted text-right max-w-[10ch]">
          IDF<br />Veteran
        </p>
      </div>
    </div>
  );
}

function Tick({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute w-4 h-4 text-gold/70 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M2 2 H 8" stroke="currentColor" strokeWidth="1" />
      <path d="M2 2 V 8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
