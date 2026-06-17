export default function BackgroundOrbs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ contain: "layout style paint", transform: "translateZ(0)" }}
      aria-hidden="true"
    >
      {/* Blur radii kept modest: these elements animate continuously, and large
          gaussian blurs on 500–700px layers are the main desktop scroll cost. */}

      {/* Top-left: large deep blue */}
      <div className="orb-1 absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full bg-blue-700/[0.14] dark:bg-blue-700/[0.09] blur-[100px]" />

      {/* Top-right: indigo */}
      <div className="orb-2 absolute -top-20 right-[10%] w-[440px] h-[440px] rounded-full bg-indigo-600/[0.12] dark:bg-indigo-600/[0.07] blur-[90px]" />

      {/* Mid-right: electric blue */}
      <div className="orb-3 absolute top-[42%] -right-40 w-[520px] h-[520px] rounded-full bg-blue-500/[0.1] dark:bg-blue-500/[0.06] blur-[110px]" />

      {/* Bottom-left: sky */}
      <div className="orb-4 absolute bottom-[8%] left-[10%] w-[480px] h-[480px] rounded-full bg-sky-600/[0.09] dark:bg-sky-600/[0.05] blur-[100px]" />
    </div>
  );
}
