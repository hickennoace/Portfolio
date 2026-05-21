import { Compass, Crosshair, GraduationCap, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 vignette-tl pointer-events-none opacity-60" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <SectionLabel index="01" label="The Operator" />
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: narrative */}
          <Reveal className="col-span-12 lg:col-span-7">
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1] tracking-tightest text-bone">
              I learned to think clearly{" "}
              <span className="italic text-bone-muted">when it mattered.</span>
            </h2>

            <div className="mt-10 space-y-6 text-bone-muted text-[15px] leading-[1.85] max-w-[58ch]">
              <p>
                Before the spreadsheets and the seminars, there were briefings,
                kit checks, and decisions that didn&apos;t wait. Four years as a{" "}
                <span className="text-bone">combat soldier in the IDF</span>{" "}
                taught me what most early-career analysts can&apos;t fake: how
                to remain composed under noise, prepare relentlessly, and own
                an outcome.
              </p>
              <p>
                Today I&apos;m reading{" "}
                <span className="text-bone">Economics &amp; Management</span>{" "}
                at the Open University — by deliberate choice. The format
                rewards independence and self-imposed structure, the same
                muscles I built in service. I&apos;m drawn to corporate
                finance, capital markets, and the analytical roles where a
                clean model and a defensible thesis still beat a louder room.
              </p>
              <p>
                I write code to interrogate data, not to perform. My goal is
                simple: shorten the distance between a question a stakeholder
                cares about and a credible, decision-ready answer.
              </p>
            </div>

            <Reveal delay={250}>
              <figure className="mt-14 border-l-2 border-gold pl-8 max-w-[52ch]">
                <Quote
                  size={20}
                  strokeWidth={1.4}
                  className="text-gold mb-3 -ml-1"
                />
                <blockquote className="font-serif text-2xl italic leading-[1.4] text-bone">
                  Slow is smooth. Smooth is fast. The same principle that kept
                  us alive in the field keeps a model honest at 2 a.m. before a
                  deadline.
                </blockquote>
                <figcaption className="mt-4 font-mono text-[11px] tracking-widest uppercase text-bone-muted">
                  — Operating principle
                </figcaption>
              </figure>
            </Reveal>
          </Reveal>

          {/* Right: bento facts */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
            <Reveal className="col-span-2" delay={120}>
              <FactCard
                icon={<Crosshair size={18} strokeWidth={1.4} />}
                label="Service"
                title="IDF · Combat Infantry"
                detail="Squad-level leadership, operational planning, sustained performance under load."
              />
            </Reveal>
            <Reveal delay={200}>
              <FactCard
                icon={<GraduationCap size={18} strokeWidth={1.4} />}
                label="Education"
                title="B.A. Econ & Management"
                detail="Open University · 2024 — present"
              />
            </Reveal>
            <Reveal delay={280}>
              <FactCard
                icon={<Compass size={18} strokeWidth={1.4} />}
                label="Trajectory"
                title="Junior Analyst track"
                detail="Corporate finance · capital markets · valuation."
              />
            </Reveal>
            <Reveal className="col-span-2" delay={360}>
              <div className="glass glass-hover rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-gold/10 blur-2xl" />
                <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
                  Operating tempo
                </p>
                <div className="mt-3 flex items-baseline gap-4">
                  <span className="font-serif text-5xl text-bone tabular">
                    07:00
                  </span>
                  <span className="font-serif text-bone-muted italic">
                    daily standup with myself
                  </span>
                </div>
                <p className="mt-4 text-sm text-bone-muted leading-relaxed">
                  Briefing, deep work block, market read, lectures, build. I
                  ship before noon and review before sundown.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactCard({
  icon,
  label,
  title,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between text-bone-muted">
        <span className="font-mono text-[10px] tracking-widest uppercase">
          {label}
        </span>
        <span className="text-gold">{icon}</span>
      </div>
      <div className="mt-8">
        <p className="font-serif text-xl text-bone leading-tight">{title}</p>
        <p className="mt-2 text-[13px] text-bone-muted leading-relaxed">
          {detail}
        </p>
      </div>
    </div>
  );
}
