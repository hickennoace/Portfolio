"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const springCfg = { stiffness: 290, damping: 26, mass: 0.35 };
  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setIsVisible(true);
      const el = e.target as HTMLElement;
      setIsHovering(
        !!el.closest('a, button, [role="button"], input, select, label, [data-cursor]')
      );
    };
    const hide = () => setIsVisible(false);
    const show = () => setIsVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, [mx, my]);

  if (!mounted) return null;

  return (
    <>
      {/* Exact-follow dot */}
      <motion.div
        className="fixed top-0 left-0 w-[5px] h-[5px] rounded-full bg-blue-400 pointer-events-none z-[9999]"
        style={{ x: mx, y: my, marginLeft: -2.5, marginTop: -2.5 }}
        animate={{ scale: isHovering ? 0 : 1, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.13 }}
      />

      {/* Spring-follow ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[9998]"
        style={{ x: sx, y: sy, marginLeft: -20, marginTop: -20 }}
        initial={{ borderColor: "rgba(59,130,246,0.4)", backgroundColor: "transparent", opacity: 0 }}
        animate={{
          scale: isHovering ? 1.75 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering
            ? "rgba(96,165,250,0.75)"
            : "rgba(59,130,246,0.4)",
          backgroundColor: isHovering
            ? "rgba(59,130,246,0.07)"
            : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
