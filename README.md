# Portfolio site

My personal landing page, built as a single-page Next.js site and deployed on Vercel. It's where I send recruiters and people asking what I'm working on.

The site itself is one long page with anchored sections (Hero, About, What I Do, Experience, Projects, Connect) and a contact modal that actually sends mail via Resend. Light theme by default, with a dark toggle. There's a custom cursor on desktop, a slow meteor-shower effect behind the hero, and a few framer-motion reveals as you scroll.

## Stack

- Next.js 14 with the App Router.
- TypeScript in strict mode.
- Tailwind CSS for styling.
- framer-motion for section reveals and the small flourishes.
- lucide-react for icons.
- next-themes for light/dark theming (defaulted to light, no system follow).
- Resend for the contact form (`RESEND_API_KEY` env var required for emails to actually send).

Fonts: Inter (variable) for everything, JetBrains Mono for data accents (dates, metrics, section indices). Both are self-hosted via `@fontsource` packages (imported in `layout.tsx`), so there's no Google Fonts call at runtime.

## Local development

```bash
npm install
npm run dev
```

Then http://localhost:3000.

## Building and deploying

```bash
npm run build
```

Deploys happen automatically on push via Vercel. To deploy manually:

```bash
vercel deploy --prod
```

Set `RESEND_API_KEY` in the Vercel project's environment variables so the contact form route can send mail.

## What each component does

```
app/
  layout.tsx           Root layout. Fonts, metadata, OpenGraph, ThemeProvider.
  page.tsx             The whole page in one composition.
  globals.css          Tailwind base + custom CSS variables and design tokens.
  api/contact/route.ts Server route that sends the contact form via Resend.
components/
  Nav.tsx              Top nav with anchor links to each section.
  Hero.tsx             Headline, CV download, call to action.
  About.tsx            Bio and background.
  WhatIDo.tsx          What I'm focused on right now.
  Experience.tsx       Roles and timeline.
  Projects.tsx         Featured projects with links.
  Connect.tsx          Contact section with social links and CTA.
  ContactModal.tsx     Email form, posts to /api/contact.
  BackgroundOrbs.tsx   Soft gradient orbs that sit behind everything.
  CustomCursor.tsx     Desktop-only cursor. Disabled on coarse pointers.
  MeteorShower.tsx     Slow meteor streaks behind the hero. Sparse on purpose.
  ThemeToggle.tsx      Light/dark toggle (with a placeholder before mount).
public/                CV PDF (Daniel Shaulov - Resume.pdf), headshot, favicons.
```

A couple of details worth knowing if you fork this:

- The cursor was eating a lot of frame budget when I did the element check on `mousemove` directly. Moving the `closest()` call to fire on `mouseover` instead got desktop perf back. See `CustomCursor.tsx`.
- The meteor shower is intentionally sparse - fewer streaks with longer gaps. Earlier versions felt busy. If you want it denser, the timing constants are at the top of `MeteorShower.tsx`.
- `ThemeToggle` renders a same-size placeholder before mount so there's no layout shift when next-themes hydrates.

## To make it yours

- Swap the CV PDF in `public/` (`Daniel Shaulov - Resume.pdf`).
- Replace the headshot reference in `Hero.tsx`.
- Edit copy directly in each component. No CMS, everything is colocated with the component.
- Update social links wherever they appear (`Nav.tsx`, `Connect.tsx`).
- Set `RESEND_API_KEY` in your env if you want the contact form to actually send mail. Without it the form will fall back to copying the address.
- The theme default lives in `layout.tsx` (`defaultTheme="light"`, `enableSystem={false}`). Flip those if you want dark by default or want to follow the OS.

## Notes

- Site title and OpenGraph metadata are in `app/layout.tsx`. Update both when you fork it or social previews will still say my name.
