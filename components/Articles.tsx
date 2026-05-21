import { ArrowUpRight, Clock } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const articles = [
  {
    title: "The discipline of saying ‘I don't know yet'",
    excerpt:
      "On forecasting honesty, junior-analyst overconfidence, and why the strongest reports leave room for what the model can't see.",
    date: "Apr 2026",
    read: "8 min",
    tag: "Essay",
    href: "#",
  },
  {
    title: "DCF, demystified — a soldier's mental model for valuation",
    excerpt:
      "Stripping the discounted cash flow back to its operational core: assumptions, intervals, and the cost of being wrong.",
    date: "Feb 2026",
    read: "12 min",
    tag: "Valuation",
    href: "#",
  },
  {
    title: "Reading the TA-125 like a portfolio, not a flag",
    excerpt:
      "A factor walk through Israel's flagship index — what survives, what doesn't, and what it tells you about the local cycle.",
    date: "Nov 2025",
    read: "10 min",
    tag: "Markets",
    href: "#",
  },
  {
    title: "From the army to alpha: what transfers",
    excerpt:
      "The five habits I keep from four years in uniform that still pay rent every day in front of a terminal.",
    date: "Aug 2025",
    read: "6 min",
    tag: "Career",
    href: "#",
  },
];

export default function Articles() {
  return (
    <section id="writing" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
          <Reveal className="col-span-12 md:col-span-7">
            <SectionLabel index="04" label="Selected Writing" />
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-tightest">
              Notes,{" "}
              <span className="italic text-bone-muted">
                in the long form.
              </span>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:pt-10" delay={120}>
            <p className="text-bone-muted text-[14px] leading-[1.85] max-w-[42ch]">
              Writing is how I prove I understand a topic. These pieces sit
              between markets, methodology, and the operating philosophy I
              brought with me from service.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-bone/8">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <a
                href={a.href}
                className="group block border-b border-bone/8 py-10 md:py-12 transition-colors duration-500 hover:bg-gradient-to-r hover:from-gold/[0.04] hover:to-transparent"
              >
                <div className="grid grid-cols-12 gap-6 items-baseline">
                  <div className="col-span-12 md:col-span-2 flex md:flex-col gap-2 md:gap-1 font-mono text-[11px] tracking-widest uppercase text-bone-muted">
                    <span className="tabular text-gold">{a.date}</span>
                    <span className="hidden md:inline">{a.tag}</span>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-serif text-2xl md:text-4xl leading-[1.05] tracking-tightest text-bone group-hover:text-gold transition-colors duration-500">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-bone-muted leading-relaxed max-w-[62ch]">
                      {a.excerpt}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-3 text-bone-muted">
                    <Clock size={13} strokeWidth={1.4} />
                    <span className="font-mono text-[11px] tracking-widest uppercase">
                      {a.read}
                    </span>
                    <span className="w-9 h-9 rounded-full border border-bone/15 grid place-items-center group-hover:border-gold group-hover:text-gold group-hover:rotate-45 transition-all duration-700">
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
