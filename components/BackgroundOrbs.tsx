export default function BackgroundOrbs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Top-left: large deep blue */}
      <div className="orb-1 absolute -top-48 -left-48 w-[750px] h-[750px] rounded-full bg-blue-700/[0.07] blur-[140px]" />

      {/* Top-center-right: indigo */}
      <div className="orb-2 absolute -top-24 right-[12%] w-[480px] h-[480px] rounded-full bg-indigo-600/[0.06] blur-[120px]" />

      {/* Mid-right: electric blue */}
      <div className="orb-3 absolute top-[42%] -right-44 w-[580px] h-[580px] rounded-full bg-blue-500/[0.06] blur-[160px]" />

      {/* Bottom-center-left: sky */}
      <div className="orb-4 absolute bottom-[8%] left-[12%] w-[520px] h-[520px] rounded-full bg-sky-600/[0.05] blur-[140px]" />

      {/* Bottom-right: deep blue */}
      <div className="orb-5 absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-blue-800/[0.08] blur-[130px]" />
    </div>
  );
}
