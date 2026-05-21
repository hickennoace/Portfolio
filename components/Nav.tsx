"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 backdrop-blur-xl bg-ink/70 border-b border-bone/5"
          : "py-7 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Daniel Shaulov — home"
        >
          <span className="font-serif text-2xl tracking-tightest leading-none text-bone group-hover:text-gold transition-colors duration-500">
            Daniel{" "}
            <span className="italic text-gold">Shaulov</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-widest uppercase text-bone-muted">
          <a href="#about" className="underline-gold">About</a>
          <a href="#work" className="underline-gold">Work</a>
          <a href="#stack" className="underline-gold">Stack</a>
          <a href="#writing" className="underline-gold">Writing</a>
          <a href="#contact" className="underline-gold">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/danielshaulov/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-full border border-bone/10 hover:border-gold/60 hover:text-gold transition-all duration-500 hover:rotate-[8deg]"
          >
            <Linkedin size={14} strokeWidth={1.6} />
          </a>
          <a
            href="https://github.com/hickennoace"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="w-9 h-9 grid place-items-center rounded-full border border-bone/10 hover:border-gold/60 hover:text-gold transition-all duration-500 hover:rotate-[8deg]"
          >
            <Github size={14} strokeWidth={1.6} />
          </a>
          <a
            href="mailto:danielshaulov4@gmail.com"
            aria-label="Email"
            className="hidden sm:grid w-9 h-9 place-items-center rounded-full border border-bone/10 hover:border-gold/60 hover:text-gold transition-all duration-500 hover:rotate-[8deg]"
          >
            <Mail size={14} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </header>
  );
}
