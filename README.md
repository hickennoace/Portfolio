# Daniel Shaulov — Portfolio

An ultra-premium personal landing page built for analyst / data-driven finance
roles. Next.js (App Router) · TypeScript · Tailwind CSS · deployed on
**Wasmer Edge** as a globally distributed static site.

## Stack
- **Next.js 14** with the App Router, static-exported (`output: "export"`)
- **TypeScript** strict mode
- **Tailwind CSS** with a custom design system (ink / bone / gold palette)
- **lucide-react** for iconography
- **Wasmer static-web-server** for edge hosting

## Design language
Editorial quiet luxury — deep ink black, warm cream typography, muted gold
accents, premium serif (Instrument Serif) paired with Geist sans/mono. Layout
favours asymmetric bento grids, hairline dividers, and discreet glassmorphism.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building for Wasmer Edge

```bash
npm run build
```

This produces a static export in `./out`. The `wasmer.toml` and
`settings/config.toml` wire that directory up to Wasmer's static web server.

## Deploying

```bash
# one-time
wasmer login

# then
npm run build
wasmer deploy
```

## Project structure

```
app/                Next.js App Router entry
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Single landing-page composition
  globals.css      Design tokens, glass, grain, reveals
components/         Modular UI building blocks
  Nav.tsx           Sticky nav with social links
  Hero.tsx          Headline + headshot + stat strip
  About.tsx         Narrative + bento facts
  Projects.tsx      Featured project + ranked Top 5 list
  TechStack.tsx     Bento grid of instruments
  Articles.tsx      Editorial list of writing
  Contact.tsx       CTA + contact bento
  Footer.tsx        Wordmark, live UTC clock, colophon
  Reveal.tsx        IntersectionObserver scroll reveals
  SectionLabel.tsx  Numbered section eyebrow
public/             Static assets (drop headshot.jpg here)
wasmer.toml         Wasmer package manifest
settings/           Static-web-server config
```

## To make it yours
- Replace the placeholder headshot frame with `/public/headshot.jpg`
- Update social URLs in `Nav.tsx`, `Contact.tsx`, `Footer.tsx`
- Edit copy directly in the component files — content is colocated
