import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden border-t border-bone/8"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(201,165,91,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <SectionLabel index="05" label="Start a conversation" />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-10 font-serif text-[clamp(3rem,11vw,11rem)] leading-[0.95] tracking-tightest text-bone">
            Let&apos;s talk
            <br />
            <span className="italic text-bone-muted">
              about your team.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-[58ch] text-bone-muted text-[15px] leading-[1.85]">
            I&apos;m actively interviewing for{" "}
            <span className="text-bone">
              junior analyst and analytics-track roles
            </span>{" "}
            in corporate finance, capital markets, and strategy. Remote-friendly,
            travel-comfortable, and available to start within a notice period
            of two weeks.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-4 md:gap-5">
          <Reveal className="col-span-12 md:col-span-6" delay={120}>
            <ContactCard
              icon={<Mail size={20} strokeWidth={1.4} />}
              label="Direct"
              value="danielshaulov4@gmail.com"
              href="mailto:danielshaulov4@gmail.com"
              cta="Send an email"
              accent
            />
          </Reveal>
          <Reveal className="col-span-12 md:col-span-3" delay={200}>
            <ContactCard
              icon={<Linkedin size={20} strokeWidth={1.4} />}
              label="Professional"
              value="LinkedIn"
              href="https://www.linkedin.com/in/danielshaulov/"
              cta="Connect"
            />
          </Reveal>
          <Reveal className="col-span-12 md:col-span-3" delay={280}>
            <ContactCard
              icon={<Github size={20} strokeWidth={1.4} />}
              label="Engineering"
              value="GitHub"
              href="https://github.com/hickennoace"
              cta="Browse code"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  cta,
  accent = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  cta: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className={`group block glass glass-hover rounded-2xl p-7 h-full relative overflow-hidden ${
        accent ? "md:p-10" : ""
      }`}
    >
      {accent && (
        <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-gold/15 blur-3xl group-hover:bg-gold/25 transition-all duration-1000" />
      )}
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
          {label}
        </span>
        <span className="text-gold">{icon}</span>
      </div>
      <p
        className={`relative mt-${
          accent ? "12" : "10"
        } font-serif ${
          accent ? "text-3xl md:text-5xl" : "text-2xl"
        } leading-tight text-bone group-hover:text-gold transition-colors duration-500 break-all`}
      >
        {value}
      </p>
      <div className="relative mt-8 flex items-center justify-between text-bone-muted">
        <span className="font-mono text-[11px] tracking-widest uppercase">
          {cta}
        </span>
        <span className="w-9 h-9 rounded-full border border-bone/15 grid place-items-center group-hover:border-gold group-hover:text-gold group-hover:rotate-45 transition-all duration-700">
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </span>
      </div>
    </a>
  );
}
