export default function BackgroundOrbs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Top-left: large deep blue */}
      <div className="orb-1 absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-blue-700/[0.12] dark:bg-blue-700/[0.08] blur-[140px]" />

      {/* Top-right: indigo */}
      <div className="orb-2 absolute -top-20 right-[10%] w-[460px] h-[460px] rounded-full bg-indigo-600/[0.1] dark:bg-indigo-600/[0.06] blur-[120px]" />

      {/* Mid-right: electric blue */}
      <div className="orb-3 absolute top-[42%] -right-40 w-[540px] h-[540px] rounded-full bg-blue-500/[0.09] dark:bg-blue-500/[0.055] blur-[155px]" />

      {/* Bottom-left: sky */}
      <div className="orb-4 absolute bottom-[8%] left-[10%] w-[500px] h-[500px] rounded-full bg-sky-600/[0.08] dark:bg-sky-600/[0.045] blur-[140px]" />

      {/* Bottom-right: deep blue */}
      <div className="orb-5 absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-blue-800/[0.11] dark:bg-blue-800/[0.07] blur-[130px]" />
    </div>
  );
}
