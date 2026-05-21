import { Code2, Database, BarChart3, Table2, Coffee } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type Tool = {
  name: string;
  level: number;
  years: string;
  use: string;
  icon: React.ReactNode;
  cls: string;
};

const tools: Tool[] = [
  {
    name: "Python",
    level: 90,
    years: "3y",
    use: "pandas · numpy · scikit-learn · plotly. The everyday workbench.",
    icon: <Code2 size={20} strokeWidth={1.4} />,
    cls: "md:col-span-3 md:row-span-2",
  },
  {
    name: "SQL",
    level: 92,
    years: "3y",
    use: "Window functions, CTEs, optimization. Where the truth lives.",
    icon: <Database size={20} strokeWidth={1.4} />,
    cls: "md:col-span-3",
  },
  {
    name: "Power BI",
    level: 84,
    years: "2y",
    use: "DAX, modeling, RLS. Decision-grade dashboards.",
    icon: <BarChart3 size={20} strokeWidth={1.4} />,
    cls: "md:col-span-3",
  },
  {
    name: "Excel",
    level: 95,
    years: "5y+",
    use: "Modeling, sensitivity, lookup gymnastics. Still indispensable.",
    icon: <Table2 size={20} strokeWidth={1.4} />,
    cls: "md:col-span-3",
  },
  {
    name: "Java",
    level: 70,
    years: "2y",
    use: "OOP fundamentals. The structure I borrow into my Python.",
    icon: <Coffee size={20} strokeWidth={1.4} />,
    cls: "md:col-span-3",
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-32 md:py-44 bg-ink-50/40 border-y border-bone/5"
    >
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <Reveal className="col-span-12 md:col-span-7">
            <SectionLabel index="03" label="Instruments" />
            <h2 className="mt-6 font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-tightest">
              The tools I reach for{" "}
              <span className="italic text-bone-muted">
                — and what I use them to say.
              </span>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:pt-10" delay={120}>
            <p className="text-bone-muted text-[14px] leading-[1.85] max-w-[42ch]">
              Proficiency without pretense. I prefer to measure skill in
              shipped output, but where benchmarks help — here they are,
              grounded in years of deliberate use.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
          {tools.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={`col-span-12 ${t.cls}`}
            >
              <ToolCard t={t} />
            </Reveal>
          ))}

          <Reveal delay={tools.length * 90} className="col-span-12 md:col-span-3">
            <div className="glass glass-hover rounded-2xl p-6 h-full relative overflow-hidden">
              <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
                Also in the kit
              </p>
              <p className="mt-4 font-serif text-xl italic text-bone leading-snug">
                Git · VBA · DAX · spaCy · Tableau · Bloomberg Terminal
                (familiar) · LaTeX
              </p>
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-jade/10 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ t }: { t: Tool }) {
  return (
    <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
            {t.years} · core
          </p>
          <h3 className="mt-3 font-serif text-3xl text-bone group-hover:text-gold transition-colors duration-500">
            {t.name}
          </h3>
        </div>
        <span className="text-gold">{t.icon}</span>
      </div>

      <p className="mt-4 text-[13px] text-bone-muted leading-relaxed max-w-[34ch]">
        {t.use}
      </p>

      {/* Proficiency bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] tracking-widest uppercase text-bone-muted">
            Proficiency
          </span>
          <span className="font-mono text-[10px] tabular text-gold">
            {t.level}
          </span>
        </div>
        <div className="h-px bg-bone/10 relative overflow-hidden">
          <span
            className="absolute left-0 top-0 h-full bg-gold transition-all duration-1000 ease-out"
            style={{ width: `${t.level}%` }}
          />
        </div>
      </div>
    </div>
  );
}
