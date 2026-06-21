import type { ReactNode } from "react";

/**
 * Numbered section eyebrow: a monospace ledger index ("01 /") followed by the
 * label. The mono index is the site's data/analyst typographic signal and the
 * calmer replacement for the old per-letter scramble effect.
 */
export default function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <>
      <span className="font-mono">{index}</span>
      <span aria-hidden className="mx-2 text-blue-500/40 dark:text-blue-400/40">
        /
      </span>
      {children}
    </>
  );
}
