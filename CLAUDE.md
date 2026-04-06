# Yonkomedia — Project Bible

> This file is auto-loaded by Claude at the start of every session.
> Update it immediately whenever a significant decision is made.

---

## 1. Project Overview

| Field | Value |
|---|---|
| Project | Yonkomedia — Fractional CMO Studio website |
| Type | Agency/marketing homepage (single page) |
| Reference | fletchpmm.com (layout flow inspiration) |
| Local URL | http://localhost:3000 |
| Directory | `d:/Claude-Code/my-app` |
| Live URL | https://yonkomedia.com (Vercel) |

**Start server:**
```bash
export PATH="/c/Program Files/nodejs:$PATH" && cd d:/Claude-Code/my-app && npm run dev
```
Node.js is installed at `C:\Program Files\nodejs\` — not in bash PATH by default, must export manually.

**Deploy:** Push to `origin` (Yonko repo) → Vercel auto-deploys.
```bash
git add . && git commit -m "message" && git push origin master
```

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| UI primitives | shadcn-style (`components/ui/`) |
| Utilities | `clsx` + `tailwind-merge` via `lib/utils.ts` `cn()` |
| Font | Space Grotesk (Google Fonts) |

**Key dependencies in `package.json`:**
- `next`, `react`, `react-dom`, `framer-motion`
- `autoprefixer` — must stay in `dependencies` (not devDependencies), was missing and caused a build error on first run
- `clsx`, `tailwind-merge`

---

## 3. Brand & Design System

### Colors
| Token | Hex | Tailwind alias |
|---|---|---|
| Accent / Lime | `#CCFB55` | `accent` |
| Background | `#010101` | `dark` |
| Text / White | `#FFFFFF` | `light` |

### Font: Space Grotesk
- **Weights used:** 300, 400, 500, 600, 700
- **Loading strategy (dual, both required):**
  1. `next/font/google` in `app/layout.tsx` → for preload performance
  2. `@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap)` at top of `app/globals.css` → guarantees the font renders correctly
- **Applied via CSS (not Tailwind class):** `html` and `body` both have `font-family: 'Space Grotesk', system-ui, sans-serif` in `globals.css`
- **Why the CSS variable alone failed:** `var(--font-space-grotesk)` from `next/font` didn't cascade reliably — body rendered in system serif. The `@import` is the authoritative source. Never remove it.
- **Tailwind config:** both `sans` and `display` families point to `var(--font-space-grotesk)` as backup

### Design Principles
- **Full dark theme throughout** — all sections use `bg-dark` (`#010101`). No light sections.
- Lime (`#CCFB55`) is used for: CTAs, gradient text, highlighted words, borders on hover, icons/bullets, glow effects
- Premium, modern, bold — no generic agency clichés
- Every section entry animation: Framer Motion `whileInView` + `viewport={{ once: true }}`
- Word-by-word heading reveals via `AnimatedHeading` component (outcrowd.io style)

---

## 4. File Structure

```
d:/Claude-Code/my-app/
├── CLAUDE.md                      ← this file
├── package.json
├── next.config.ts
├── tailwind.config.ts             ← custom colors, fonts, all keyframes
├── postcss.config.mjs
├── tsconfig.json
├── public/
│   └── logo.svg                   ← wordmark SVG (yonko white + media lime)
├── lib/
│   └── utils.ts                   ← cn() utility
├── app/
│   ├── layout.tsx                 ← Space Grotesk via next/font, GA4, Clarity, Calendly CSS, favicon
│   ├── icon.svg                   ← favicon (ym monogram, dark bg + lime)
│   ├── globals.css                ← @import font, base styles, keyframes
│   └── page.tsx                   ← imports all section components
└── components/
    ├── ui/
    │   └── border-beam.tsx        ← shadcn BorderBeam component
    ├── AnimatedText.tsx           ← AnimatedHeading, AnimatedP, AnimatedTag
    ├── CalendlyFloat.tsx          ← floating "Book a free call" button (scroll-triggered)
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── GridBackground.tsx
    ├── LogoMarquee.tsx
    ├── ProblemChecklist.tsx
    ├── RevenueLevers.tsx
    ├── BeforeAfter.tsx
    ├── Process.tsx
    ├── CaseStudies.tsx
    ├── FAQ.tsx
    └── Footer.tsx
```

---

## 5. Page Sections (order is fixed)

**All sections are full dark (`bg-dark` / `#010101`).**

| # | Component | Description |
|---|---|---|
| 1 | `Navbar` | Fixed, blurs on scroll, mobile hamburger. CTA → Calendly popup |
| 2 | `Hero` | GridBackground beam, 4 floater cards (xl only), formula IP block, 2 CTAs. Primary CTA → Calendly |
| 3 | `LogoMarquee` | CSS infinite scroll marquee |
| 4 | `ProblemChecklist` | 2-col grid, 6 checks, dynamic response (0/1-2/3-4/5-6), CTA at 3+ → Calendly |
| 5 | `RevenueLevers` | 4 tabs (Traffic/Conversion/Retention/Pricing), horizontally scrollable on mobile, left text + right CSS visual |
| 6 | `BeforeAfter` | 4 cards, before→after per lever, SVG icons, hover lime glow |
| 7 | `Process` | id="how-it-works", 2-col Phase 1 (Week 1-2) + Phase 2 (Week 3+), CTA → Calendly |
| 8 | `CaseStudies` | 3 cards, hover expand + icon rotation, AnimatePresence modal with metrics. Modal CTA → Calendly |
| 9 | `FAQ` | id="faq", 6 accordion items, open state = accent border |
| 10 | `Footer` | id="contact", CTA block → Calendly, social links, formula tagline |
| — | `CalendlyFloat` | Fixed bottom-right, only visible after scrolling 60% past hero height |

**Removed components (no longer imported):** `Services.tsx`, `Testimonials.tsx`, `Deliverables.tsx`, `MoreTestimonials.tsx`

## 5b. Brand Copy & IP

**Formula (proprietary IP):** `Revenue = Traffic × Conversion × Retention × Pricing`
— Always use × not • in the formula. Display in footer tagline too.

**Real proof numbers (use in floaters/hero):**
- 30% → 60% direct bookings
- 200K → 670K+ socials
- $1.3M revenue driven
- 11× blended ROAS

**Positioning:** Fractional CMO studio (not "growth studio"). We build the system, not just campaigns.

---

## 6. Key Component Details

### AnimatedText (`components/AnimatedText.tsx`)
- `AnimatedHeading` — word-by-word reveal with staggered Framer Motion, `whileInView`
- `AnimatedTag` — fade+scale reveal for section overline pills
- `AnimatedP` — fade-up for body paragraphs
- Used in: Navbar, Hero, ProblemChecklist, RevenueLevers, BeforeAfter, Process, CaseStudies

### Calendly Integration
- **URL:** `https://calendly.com/akshay-yonkomedia/30min`
- **How it works:** Calendly CSS loaded in `<head>`, JS via `<Script strategy="lazyOnload">` in layout.tsx
- **Pattern used in every CTA component:**
  ```ts
  const CALENDLY_URL = 'https://calendly.com/akshay-yonkomedia/30min'
  const openCalendly = () => (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })
  ```
- **All CTAs converted from `<a href="#contact">` to `<button onClick={openCalendly}>`**
- **FloatingButton:** shows only after `window.scrollY > window.innerHeight * 0.6` to avoid overlapping hero CTAs

### GridBackground (`components/GridBackground.tsx`)
- **Approach:** Pure CSS `div` elements — NOT canvas
- **Why not canvas:** Canvas `clearRect` + transparent gradient stops caused a dark premultiplied-alpha halo around glow strokes. Switching to CSS divs on an `#010101` background eliminated the issue.
- **Grid:** CSS `backgroundImage` with 64px cell size, `rgba(255,255,255,0.04)` line color
- **Beam:** ONE cursor-reactive horizontal beam
  - Uses `closest('section')` to find hero section (critical — parentElement got pointer-events-none wrapper)
  - Smooth lerp: factor `0.1` per rAF frame (~60fps), trails cursor naturally
  - Fades in/out: alpha lerp on hero enter/leave
  - Layers: soft bloom + sharp 1px core with `box-shadow` glow
- **Critical rule:** Gradient transparent stops use `rgba(204,251,85,0)` — NEVER the CSS keyword `transparent`. `transparent` interpolates through black and creates a dark fringe.

### BorderBeam (`components/ui/border-beam.tsx`)
- shadcn-style component, ready to use on any card
- Brand usage: `colorFrom="#CCFB55" colorTo="#a8d63a"`
- Requires `animate-border-beam` keyframe in tailwind config ✅ already added

### Tailwind Animations (all in `tailwind.config.ts`)
| Name | Used for |
|---|---|
| `marquee` / `marquee2` | LogoMarquee infinite scroll |
| `border-beam` | BorderBeam component on cards |
| `h-beam` / `v-beam` | CSS beam animations (available, not currently active) |

### Logo & Favicon
- **Logo SVG:** `public/logo.svg` — "yonko" (white) + "media" (lime), Space Grotesk Bold, transparent bg
- **Favicon:** `app/icon.svg` — 32×32, dark rounded square, "y" white + "m" lime monogram

### Analytics (in `app/layout.tsx`)
- **Google Analytics 4:** `G-GB8TQ4Y7FJ` — `strategy="afterInteractive"`
- **Microsoft Clarity:** `w7misv1bx6` — `strategy="afterInteractive"`

---

## 7. Known Issues & Fixes Applied

| Issue | Root Cause | Fix Applied |
|---|---|---|
| Space Grotesk not rendering | `var(--font-space-grotesk)` not cascading from next/font | Added `@import` + direct `font-family` in `globals.css` |
| Dark halo on glow strokes | Canvas premultiplied alpha with `transparent` keyword | Switched to CSS divs + `rgba(r,g,b,0)` |
| `autoprefixer` build error | Package was in devDependencies, missing at runtime | Moved to `dependencies` via `npm install autoprefixer` |
| Node.js not in bash PATH | Windows install not added to Git Bash PATH | Must run `export PATH="/c/Program Files/nodejs:$PATH"` before npm commands |
| GridBackground beam not appearing | `parentElement` got pointer-events-none wrapper | Changed to `closest('section')` |
| Calendly not working on live site | Pushed to wrong repo (YonkoMedia vs Yonko) | Always use `git push origin master` — origin = Yonko (Vercel-connected) |
| Floating button overlapping hero CTAs on mobile | Fixed position at bottom of viewport coincided with hero CTAs | Float button now scroll-triggered: only appears after 60% of hero height scrolled |
| RevenueLevers tabs cut off on mobile | `overflow-hidden` on flex container + `flex-1` shrinking labels | Changed to `overflow-x-auto` + `min-w-[90px]` per tab, full labels always shown |

---

## 8. Git & Deployment

| Remote | Repo | Purpose |
|---|---|---|
| `origin` | https://github.com/Mahi746/Yonko | **Vercel-connected — always push here** |
| `yonkomedia` | https://github.com/Mahi746/YonkoMedia | Secondary backup |

- Git user: Mahipal / mahijat746@gmail.com
- **Always push to `origin master`** — Vercel only watches Yonko

---

## 9. Coding Rules (always follow)

- Never add light mode, never change the color palette without being asked
- Never switch fonts without explicit instruction
- `rgba(r,g,b,0)` for all transparent gradient stops — never `transparent`
- Framer Motion `whileInView` + `viewport={{ once: true }}` for all scroll animations
- Do not add comments, docstrings, or refactor untouched code
- shadcn components go in `components/ui/`, page sections go in `components/`
- Keep all section components as separate files — do not merge into `page.tsx`
- Client components need `'use client'` only if they use hooks, state, or browser APIs
- All CTAs use `openCalendly()` — never `href="#contact"` or `href="mailto:..."`
- Always push to `origin master` for live deployment

---

## 10. Roadmap / What's Next

- [ ] Section-by-section mobile responsiveness audit (in progress)
- [ ] Copy refinement per section
- [ ] Additional pages beyond homepage
- [ ] Custom domain email setup
