"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-reactive constellation canvas for the hero backdrop. Drifting points
 * link to nearby neighbours and reach toward the cursor, which also nudges
 * particles aside — a living, interactive field.
 *
 * Performance-tuned:
 *  - Desktop fine-pointer only; never mounts on touch / small screens / reduced motion.
 *  - DPR capped; particle count scales with area but is firmly bounded.
 *  - ~40fps frame cap (it's a backdrop — full rAF is wasteful).
 *  - Squared-distance comparisons (no per-pair sqrt) and neighbour lines batched
 *    into a single stroke instead of one stroke per line.
 *  - Canvas rect is cached and only recomputed on scroll/resize, so mousemove
 *    never triggers a layout read.
 *  - Loop pauses when the tab is hidden or the hero scrolls out of view.
 */
export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    const LINK_DIST = 120;
    const LINK_DIST2 = LINK_DIST * LINK_DIST;
    const MOUSE_DIST = 170;
    const MOUSE_DIST2 = MOUSE_DIST * MOUSE_DIST;
    const FRAME_MS = 1000 / 40;

    let w = 0;
    let h = 0;
    let rectLeft = 0;
    let rectTop = 0;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let rafId = 0;
    let running = false;
    let last = 0;

    const readRect = () => {
      const r = canvas.getBoundingClientRect();
      rectLeft = r.left;
      rectTop = r.top;
      w = r.width;
      h = r.height;
    };

    const resize = () => {
      readRect();
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      // Lower density than before: ~1 particle / 22k px², hard cap 64.
      const count = Math.min(64, Math.floor((w * h) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    };

    const step = (now: number) => {
      rafId = requestAnimationFrame(step);
      if (now - last < FRAME_MS) return;
      last = now;

      // Refresh the cached canvas offset once per rendered frame (≤40/s) rather
      // than on every scroll event — keeps mouse mapping correct without a
      // forced layout read per scroll frame.
      const r = canvas.getBoundingClientRect();
      rectLeft = r.left;
      rectTop = r.top;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x += w;
        else if (p.x > w) p.x -= w;
        if (p.y < 0) p.y += h;
        else if (p.y > h) p.y -= h;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_DIST2 && d2 > 0) {
          const d = Math.sqrt(d2);
          const force = (1 - d / MOUSE_DIST) * 0.6;
          p.x += (dx / d) * force;
          p.y += (dy / d) * force;
        }
      }

      // Neighbour links — one batched path, single stroke.
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx * dx + dy * dy < LINK_DIST2) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.strokeStyle = "rgba(59,130,246,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Cursor links — separate batched path, brighter.
      ctx.beginPath();
      for (const a of particles) {
        const dx = a.x - mouse.x;
        const dy = a.y - mouse.y;
        if (dx * dx + dy * dy < MOUSE_DIST2) {
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
        }
      }
      ctx.strokeStyle = "rgba(96,165,250,0.28)";
      ctx.stroke();

      // Dots.
      ctx.fillStyle = "rgba(96,165,250,0.5)";
      for (const a of particles) {
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      rafId = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX - rectLeft;
      mouse.y = e.clientY - rectTop;
    };
    const onLeaveWindow = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("visibilitychange", onVisibility);
    io.observe(canvas);
    start();

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
