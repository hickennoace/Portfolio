"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/**
 * A card that tilts in 3D toward the cursor and carries a soft spotlight that
 * follows the pointer across its surface. The tilt is spring-smoothed; the
 * spotlight is a radial gradient positioned from raw pointer coordinates.
 *
 * Pointer- and reduced-motion-gated: on touch / coarse pointers and when the
 * user prefers reduced motion it renders as a plain static card (no listeners,
 * no transforms), so nothing janks on mobile.
 *
 * Children render flat above the 3D plane. Keep the existing stretched-link /
 * pointer-events structure inside — mouse events still bubble up to the tilt
 * handler.
 */
export default function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const [hovered, setHovered] = useState(false);

  // Normalised pointer position within the card (-0.5 … 0.5).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18, mass: 0.6 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18, mass: 0.6 });

  // Raw pixel coords for the spotlight centre.
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${sx}px ${sy}px, rgba(59,130,246,0.16), transparent 72%)`;

  const handleEnter = () => {
    rect.current = ref.current?.getBoundingClientRect() ?? null;
    setHovered(true);
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = rect.current;
    if (!r) return;
    const relX = (e.clientX - r.left) / r.width - 0.5;
    const relY = (e.clientY - r.top) / r.height - 0.5;
    px.set(relX);
    py.set(relY);
    rotateY.set(relX * max * 2);
    rotateX.set(-relY * max * 2);
    sx.set(e.clientX - r.left);
    sy.set(e.clientY - r.top);
  };

  const handleLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {/* Cursor-following spotlight (desktop pointers only) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 hidden sm:block"
        style={{ background: spotlight, opacity: hovered ? 1 : 0 }}
      />
      {children}
    </motion.div>
  );
}
