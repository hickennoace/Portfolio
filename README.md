# Portfolio site

My personal landing page. It's a single-page Next.js site that I deploy as a static export to Wasmer Edge.

## Stack

- Next.js 14 (App Router), exported with `output: "export"` for static hosting
- TypeScript (strict)
- Tailwind CSS
- framer-motion for the section reveals and the small animation flourishes
- lucide-react for icons
- next-themes for dark mode (defaults to dark)
- resend for the contact form
- Wasmer static-web-server for hosting

Fonts: Instrument Serif for display, Inter for body, JetBrains Mono for accents.

## Local development

```bash
npm install
npm run dev
```

Then http://localhost:3000.

## Building and deploying to Wasmer

```bash
npm run build
```

That writes a static export into `./out`. `wasmer.toml` and `settings/config.toml` point Wasmer's static-web-server at that directory.

```bash
# once
wasmer login

# then
npm run wasmer:deploy
```

## What's in here

```
app/
  layout.tsx        Root layout, fonts, metadata, ThemeProvider
  page.tsx          The whole page in one composition
  globals.css       Tailwind + custom CSS variables
components/
  Nav.tsx           Top nav
  Hero.tsx          Headline + CV download
  About.tsx         Background and bio
  WhatIDo.tsx       What I'm focused on right now
  Experience.tsx    Roles and timeline
  Projects.tsx      Featured projects
  Connect.tsx       Contact section
  ContactModal.tsx  Email form (uses resend)
  BackgroundOrbs.tsx
  CustomCursor.tsx  Desktop-only custom cursor
  MeteorShower.tsx  Slow background streaks
  ThemeToggle.tsx
public/             Static assets (CV PDFs, headshot, favicons)
wasmer.toml         Wasmer manifest
settings/           Static web server config
```

## To make it yours

- Swap the CV PDFs in `public/` (`cv-en.pdf`, `cv-he.pdf`).
- Replace the headshot reference in `Hero.tsx`.
- Edit copy directly in each component - everything is colocated, no CMS.
- Update social links wherever they appear (`Nav.tsx`, `Connect.tsx`).
- If you want the contact form to actually send mail, set `RESEND_API_KEY` in your env.
