# Yonkomedia — Project Bible

> This file is auto-loaded by Claude at the start of every session.
> Update it immediately whenever a significant decision is made.

---

## 1. Project Overview

| Field | Value |
|---|---|
| Project | Yonkomedia — Growth Studio website |
| Type | Agency/marketing homepage (single page) |
| Reference | fletchpmm.com (layout flow inspiration) |
| Local URL | http://localhost:3000 |
| Directory | `d:/Claude-Code/my-app` |

**Start server:**
```bash
export PATH="/c/Program Files/nodejs:$PATH" && cd d:/Claude-Code/my-app && npm run dev
```
Node.js is installed at `C:\Program Files\nodejs\` — not in bash PATH by default, must export manually.

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
- Always dark theme (`#010101` bg). Never introduce light mode unless explicitly asked.
- Lime (`#CCFB55`) is used for: CTAs, gradient text, highlighted words, borders on hover, icons/bullets, glow effects
- Premium, modern, bold — no generic agency clichés
- Every section entry animation: Framer Motion `whileInView` + `viewport={{ once: true }}`

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
├── lib/
│   └── utils.ts                   ← cn() utility
├── app/
│   ├── layout.tsx                 ← Space Grotesk via next/font, metadata
│   ├── globals.css                ← @import font, base styles, keyframes
│   └── page.tsx                   ← imports all section components
└── components/
    ├── ui/
    │   └── border-beam.tsx        ← shadcn BorderBeam component
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── GridBackground.tsx
    ├── LogoMarquee.tsx
    ├── Services.tsx
    ├── Testimonials.tsx
    ├── ProblemChecklist.tsx
    ├── Deliverables.tsx
    ├── Process.tsx
    ├── FAQ.tsx
    ├── MoreTestimonials.tsx
    └── Footer.tsx
```

---

## 5. Page Sections (order is fixed)

**Dark/light alternation:** Hero→dark, LogoMarquee→dark, ProblemChecklist→white, RevenueLevers→#F6F6F4, BeforeAfter→dark, Process→white, CaseStudies→dark, FAQ→#F6F6F4, Footer→dark

| # | Component | bg | Description |
|---|---|---|---|
| 1 | `Navbar` | transparent/dark | Fixed, blurs on scroll, mobile hamburger |
| 2 | `Hero` | `#010101` | Centered, GridBackground, 4 real-metric floater cards (xl only), formula IP block, 2 CTAs |
| 3 | `LogoMarquee` | `#010101` | CSS infinite scroll |
| 4 | `ProblemChecklist` | `#FFFFFF` | 6 checks, dynamic response (0/1-2/3-4/5-6), CTA at 3+ |
| 5 | `RevenueLevers` | `#F6F6F4` | 4 tabs (Traffic/Conversion/Retention/Pricing), Valubyl-style tab bar, left text + right CSS visual |
| 6 | `BeforeAfter` | `#010101` | 4 dark cards with before→after transformation per lever, SVG icons |
| 7 | `Process` | `#FFFFFF` | 2-column Phase 1 (Week 1-2) + Phase 2 (Week 3+), phase pill headers |
| 8 | `CaseStudies` | `#010101` | 3 cards, Apple-style + icon, hover expands + rotates to ×, click opens AnimatePresence modal |
| 9 | `FAQ` | `#F6F6F4` | 6 questions, accordion, dark bg on open state |
| 10 | `Footer` | `#010101` | CTA block, formula in footer tagline |

**Removed components:** `Services.tsx`, `Testimonials.tsx`, `Deliverables.tsx`, `MoreTestimonials.tsx` (no longer imported)

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

### GridBackground (`components/GridBackground.tsx`)
- **Approach:** Pure CSS `div` elements — NOT canvas
- **Why not canvas:** Canvas `clearRect` + transparent gradient stops caused a dark premultiplied-alpha halo around glow strokes. Switching to CSS divs on an `#010101` background eliminated the issue.
- **Grid:** CSS `backgroundImage` with 64px cell size, `rgba(255,255,255,0.04)` line color
- **Beam:** ONE cursor-reactive horizontal beam
  - Snaps to nearest horizontal grid line (multiples of 64px)
  - Smooth lerp: factor `0.1` per rAF frame (~60fps), trails cursor naturally
  - Fades in/out: alpha lerp `0.07` on hero enter/leave
  - Size: 200px total (HALF_LEN = 100px)
  - Layers: soft bloom (blurred 17px div) + sharp 1px core with `box-shadow` glow
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

---

## 7. Known Issues & Fixes Applied

| Issue | Root Cause | Fix Applied |
|---|---|---|
| Space Grotesk not rendering | `var(--font-space-grotesk)` not cascading from next/font | Added `@import` + direct `font-family` in `globals.css` |
| Dark halo on glow strokes | Canvas premultiplied alpha with `transparent` keyword | Switched to CSS divs + `rgba(r,g,b,0)` |
| `autoprefixer` build error | Package was in devDependencies, missing at runtime | Moved to `dependencies` via `npm install autoprefixer` |
| Node.js not in bash PATH | Windows install not added to Git Bash PATH | Must run `export PATH="/c/Program Files/nodejs:$PATH"` before npm commands |

---

## 8. Coding Rules (always follow)

- Never add light mode, never change the color palette without being asked
- Never switch fonts without explicit instruction
- `rgba(r,g,b,0)` for all transparent gradient stops — never `transparent`
- Framer Motion `whileInView` + `viewport={{ once: true }}` for all scroll animations
- Do not add comments, docstrings, or refactor untouched code
- shadcn components go in `components/ui/`, page sections go in `components/`
- Keep all section components as separate files — do not merge into `page.tsx`
- Client components need `'use client'` only if they use hooks, state, or browser APIs

---

## 9. Roadmap / What's Next

Discussed but not yet built:
- [ ] More animation references to implement (user is doing mix-and-match)
- [ ] Additional pages beyond homepage
- [ ] Mobile responsiveness audit
- [ ] Real content / copy refinement
- [ ] Deployment (Vercel)
