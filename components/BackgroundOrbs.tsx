export default function BackgroundOrbs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ contain: "layout style paint", transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      {/* Quiet, near-neutral wash. The grain overlay does most of the texture work now;
          orbs just add a faint atmospheric depth so the page isn't flat slate-on-slate. */}

      {/* Top-left: warm bone in light, deep indigo in dark */}
      <div className="orb-1 absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-slate-400/[0.08] dark:bg-indigo-900/[0.18] blur-[140px]" />

      {/* Top-right: very subtle ochre — the only warm hint */}
      <div className="orb-2 absolute -top-20 right-[10%] w-[460px] h-[460px] rounded-full bg-ochre-500/[0.05] dark:bg-ochre-500/[0.04] blur-[130px]" />

      {/* Mid-right: cool slate */}
      <div className="orb-3 absolute top-[42%] -right-40 w-[540px] h-[540px] rounded-full bg-slate-500/[0.06] dark:bg-slate-700/[0.18] blur-[150px]" />

      {/* Bottom-left: faint blue (only one) */}
      <div className="orb-4 absolute bottom-[8%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-700/[0.05] dark:bg-blue-900/[0.14] blur-[140px]" />

      {/* Bottom-right: deep ink wash */}
      <div className="orb-5 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-slate-600/[0.05] dark:bg-slate-900/[0.3] blur-[130px]" />
    </div>
  );
}
