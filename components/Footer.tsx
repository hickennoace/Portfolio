"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative pt-20 pb-12 border-t border-bone/8">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Big wordmark */}
        <div className="overflow-hidden -mx-1">
          <p className="font-serif text-[clamp(4rem,18vw,18rem)] leading-[0.85] tracking-tightest text-bone/8 select-none whitespace-nowrap">
            Daniel <span className="italic">Shaulov</span>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-5">
            <p className="font-serif italic text-2xl text-bone leading-snug max-w-[28ch]">
              Built quietly in Tel Aviv, served globally on Wasmer Edge.
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 font-mono text-[11px] tracking-widest uppercase text-bone-muted space-y-2">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-jade animate-shimmer" />
              <span className="tabular">{time}</span>
            </p>
            <p>v 0.1.0 · MMXXVI</p>
            <p>colophon · serif: Instrument · sans: Geist</p>
          </div>

          <div className="col-span-12 md:col-span-4 flex md:justify-end items-center gap-2">
            <FootLink href="https://www.linkedin.com/in/danielshaulov/" label="LinkedIn">
              <Linkedin size={14} strokeWidth={1.6} />
            </FootLink>
            <FootLink href="https://github.com/hickennoace" label="GitHub">
              <Github size={14} strokeWidth={1.6} />
            </FootLink>
            <FootLink href="mailto:danielshaulov4@gmail.com" label="Email">
              <Mail size={14} strokeWidth={1.6} />
            </FootLink>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-widest uppercase text-bone-dim text-bone-muted/70">
          <span>© 2026 Daniel Shaulov · All rights reserved</span>
          <span>
            Crafted with Next.js · Tailwind · deployed on Wasmer Edge
          </span>
        </div>
      </div>
    </footer>
  );
}

function FootLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      aria-label={label}
      className="w-10 h-10 grid place-items-center rounded-full border border-bone/10 hover:border-gold/60 hover:text-gold transition-all duration-500"
    >
      {children}
    </a>
  );
}
