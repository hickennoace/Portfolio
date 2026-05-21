export default function SectionLabel({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 font-mono text-[11px] tracking-widest uppercase text-bone-muted ${className}`}
    >
      <span className="text-gold tabular">{index}</span>
      <span className="h-px w-10 bg-bone/20" />
      <span>{label}</span>
    </div>
  );
}
