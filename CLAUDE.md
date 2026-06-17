# CLAUDE.md — Portfolio Animation Overhaul

Guidance for Claude Code (and humans) working in this repo. This file documents the
codebase as it stands **and** the plan for the current initiative: making the site
feel more alive, interactive, and rewarding to explore — without sacrificing the
performance discipline that's already baked in.

---

## 1. Project overview

Personal portfolio for **Daniel Shaulov** (data / junior-analyst roles).
Live at https://danielshaulov.vercel.app — deployed on Vercel.

**Stack**
- Next.js 14.2 (App Router) · React 18 · TypeScript
- Tailwind CSS 3.4 (class-based dark mode)
- Framer Motion 12 — the primary animation tool
- `next-themes` (light default, no system theme) · custom i18n (EN/HE + RTL)
- `lucide-react` icons · `resend` for the contact form
- Fonts: Inter Variable (body), JetBrains Mono, Instrument Serif

**Layout**
```
app/
  layout.tsx        ThemeProvider → LanguageProvider → children
  page.tsx          Composes the section components in order
  globals.css       Theme vars, cursor-hiding, orb/meteor keyframes, scrollbar
  api/contact/      Resend-backed contact endpoint
components/         One file per section + ambient effects (see §3)
lib/i18n/           LanguageProvider + dictionary (all copy lives here)
```

Section order on the page: `Hero → About → WhatIDo → Experience → Projects → Connect`,
with `Nav`, `BackgroundOrbs`, and `CustomCursor` mounted globally.

---

## 2. Running locally

```bash
nvm use            # honours .nvmrc
npm install
npm run dev        # http://localhost:3000
npm run build      # always run before declaring a change done
npm run lint
```

The contact API needs `RESEND_API_KEY` in `.env.local`; the rest of the site runs
without env vars.

---

## 3. Current animation inventory (what already exists — don't rebuild it)

| Area | What's there today |
|------|--------------------|
| **Entrance** | Every section uses `useInView({ once: true })` + `motion` fade/slide-up reveals with the shared `EASE = [0.22, 1, 0.36, 1]` curve and staggered children. |
| **Hero** | Staggered headline/role/CTA reveal, gradient name, profile-image glow, animated CV dropdown (`AnimatePresence`), CSS bounce scroll-cue, dot-grid backdrop. |
| **Ambient** | `BackgroundOrbs` (5 blurred CSS-keyframe orbs), `MeteorShower` (7 CSS streaks), `CustomCursor` (spring-follow ring + exact dot, hover-aware). |
| **Projects** | Paginated 4-up carousel with directional `AnimatePresence` page transitions + per-card stagger; `whileHover={{ y: -6 }}`; hover glow. |
| **WhatIDo** | Accordion with animated height + `Plus`-icon rotate. |
| **Nav** | Slide-down header, scroll-aware blur, animated hamburger↔X, staggered mobile overlay. |
| **Connect** | Reveal + `whileHover` lift on contact cards. |

### Hard-won performance constraints — DO NOT REGRESS
The author already fought GPU crashes on mobile. Respect these:
- **Orbs**: hidden `≤767px` (a 700px element + 140px blur exhausts mobile GPU memory).
- **Meteors**: hidden `≤639px` (continuous transforms are the dominant mobile cost).
- **CustomCursor**: only mounts on `(hover: hover) and (pointer: fine)`.
- `will-change` / `transform: translateZ(0)` / `contain` are deliberate — keep them.
- The bounce arrow and ping dot were moved to CSS specifically to avoid
  `repeat: Infinity` Framer loops. **New always-on loops should follow the same
  rule**: prefer CSS keyframes for infinite ambient motion; reserve Framer Motion
  for interaction- and scroll-driven motion.

---

## 4. The goal of this initiative

Make the site **interactive and exploratory**, not just "animated on load." Today
motion is almost entirely entrance-only — elements fade in once and then sit still.
The upgrade adds motion that **responds to the visitor**: to their cursor, their
scroll position, and their hovers — so the page rewards exploration.

Guiding principles:
1. **Tasteful, not noisy.** This is an analyst's portfolio — motion should read as
   "crafted," never as a tech demo. Subtle > flashy.
2. **Accessibility first.** Honour `prefers-reduced-motion` everywhere (currently
   missing entirely — see Phase 0).
3. **Performance parity.** Nothing may reintroduce the mobile GPU issues above.
   Interaction effects are desktop-first and pointer-gated.
4. **Reuse, don't fork.** Centralise variants/easing so the codebase stays DRY.

---

## 5. Plan of work (phased)

> **Status (all phases landed on branch `feat/interactive-animations`):**
> ✅ Phase 0 · ✅ Phase 1 · ✅ Phase 2 · ✅ Phase 3 · ✅ Phase 4 · ✅ Phase 5.
> New shared modules: `lib/motion.ts`, `lib/useActiveSection.ts`. New components:
> `ScrollProgress`, `ScrollToTop`, `Magnetic`, `MaskedWords`, `TiltCard`.
> Global `MotionConfig reducedMotion="user"` added in `app/layout.tsx`.
> Note: Phase 4 count-up was intentionally dropped — the "stats" are text labels
> (e.g. "GPA 90" inside prose), not standalone numbers, so a counter would be
> forced; springy skill chips + stat-card lift were done instead.

Each phase is independently shippable. Build → lint → eyeball → commit per phase.

### Phase 0 — Foundation & accessibility *(do first)*
- Add `lib/motion.ts`: export the shared `EASE`, reusable variants (`fadeUp`,
  `stagger`, `scaleIn`…), and small helpers so every section imports one source of
  truth instead of redeclaring `EASE`/`up`/`stagger` locally.
- Introduce a `useReducedMotion()` gate (Framer ships one) and a thin wrapper so
  heavy effects (parallax, tilt, magnetic, infinite loops) collapse to instant/static
  for users who ask for reduced motion. Add the matching `@media (prefers-reduced-motion: reduce)`
  CSS to neutralise the orb/meteor/bounce keyframes too.

### Phase 1 — Scroll feedback (orientation while exploring)
- **Scroll progress bar**: a 2px gradient bar pinned to the top, driven by
  `useScroll().scrollYProgress` → `scaleX`. Immediate "I'm making progress" feel.
- **Active-section nav highlight**: as each section enters view, underline/àhighlight
  its link in `Nav` (IntersectionObserver or per-section `useInView`). Makes the nav
  a live map of the page.
- **Scroll-to-top button**: fades in past the hero; springs on hover.

### Phase 2 — Hero depth
- **Scroll parallax**: subtle `useScroll` + `useTransform` so the portrait, dot-grid,
  and headline drift at slightly different rates as you scroll out of the hero.
- **Headline reveal**: split the name into words/letters with a masked stagger
  reveal (clip-path / y-mask) for a more deliberate entrance than the current fade.
- **Magnetic CTAs**: the primary hero buttons gently pull toward the cursor
  (motion-value based, pointer-gated, reduced-motion-off).

### Phase 3 — Projects as the centrepiece
- **3D tilt cards**: replace the flat `y: -6` hover with pointer-driven
  `rotateX/rotateY` (motion values + spring) and a **cursor-following spotlight**
  (radial gradient that tracks the pointer inside each card). This is the single
  highest-impact "fun to explore" change.
- **Tag pop**: stagger-in the tech tags on card entrance with a tiny spring.
- Keep the existing pagination/`AnimatePresence` flow intact.

### Phase 4 — Section micro-interactions
- **About**: animated count-up for the stat numbers when they scroll into view;
  spring-scale + subtle wave on skill-chip hover.
- **WhatIDo / Experience**: smoother accordion easing; hover-lift parity with cards;
  optional left-border "scan" accent on the active row.
- **Connect**: keep it calm — just align hovers with the new shared variants.

### Phase 5 — Polish pass
- Page-level load orchestration so sections hand off cleanly.
- Audit every new effect against §3 constraints on a throttled mobile profile.
- Final `npm run build` + Lighthouse sanity check (no CLS/perf regressions).

---

## 6. Conventions for this codebase
- **`"use client"`** on any component using hooks/motion (all section components are
  client components; keep `page.tsx`/`layout.tsx` server where possible).
- **Copy lives in `lib/i18n/dictionary.ts`** — never hardcode user-facing strings;
  add EN + HE keys and read them via `useLang()`. Respect `dir` for RTL (note the
  existing `slide = dir === "rtl" ? … : …` pattern).
- **Easing**: import `EASE` from `lib/motion.ts` (after Phase 0); don't redeclare.
- **Styling**: Tailwind utility classes, blue-centric palette
  (`blue-500/600`, indigo accents), `rounded-2xl` cards, `/[0.0x]` alpha borders.
- **Icons**: `lucide-react`, `strokeWidth` ~1.5–2.
- Prefer transform/opacity animations (compositor-friendly); avoid animating
  layout-affecting properties.

## 7. Definition of done (per change)
1. `npm run build` passes (no type errors).
2. `npm run lint` clean.
3. Works in **light + dark** and **EN + HE (RTL)**.
4. Respects `prefers-reduced-motion`.
5. No mobile regression — orbs/meteors/cursor rules from §3 still hold.
6. Committed with a clear message; **pushed only when Daniel asks.**

---

*Initiative owner: Daniel Shaulov. This file is the contract for the animation work —
update it as phases land so it stays the source of truth.*
