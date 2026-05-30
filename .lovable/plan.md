# Portfolio Build Plan — Favour Emmanuel

## Intake confirmed

- **Type**: Personal portfolio
- **Name**: Favour Emmanuel
- **Role**: AI Prompt Engineer
- **Tagline**: "I turn AI into repeatable systems that save time, improve output quality, and make teams faster."
- **Audience**: Hiring companies (broad)
- **Tone**: Warm and human
- **Logo**: None — typographic wordmark
- **Background**: Dark
- **Typography**: Geometric sans
- **Visual style**: Dark luxury / refined dark mode
- **Effects**: Grain texture, custom cursor, magnetic buttons, scroll reveals, parallax
- **Avoid**: Cluttered layouts, generic card grids, template feel
- **Structure**: Single page
- **Sections**: Hero, About, Work, Services, Insights, Contact, Footer
- **Projects**: 4–6 placeholders, hover-reveal cards
- **Bio**: Provided (Turing, DataVale AI, Perplexity/Claude/Gemini)
- **Skills**: AI/Prompt Engineering, Platforms, LLM Training & Eval, Automation
- **Socials**: LinkedIn, Instagram
- **Web3Forms**: `7ff61434-434d-4fd9-ba0a-89de87ec4830`
- **Animation**: Moderate

## Design system

Dark base with warm-paper accents (not cold tech-blue) to honor the "warm and human" tone inside the dark-luxury frame.

- `--background`: oklch(0.16 0.01 60) — deep warm charcoal
- `--foreground`: oklch(0.96 0.01 80) — warm off-white
- `--muted-foreground`: oklch(0.65 0.02 70)
- `--primary`: oklch(0.85 0.13 75) — warm amber (signature accent)
- `--accent`: oklch(0.45 0.06 30) — burnt sienna for hover states
- `--border`: oklch(0.25 0.01 60)
- Type: **Space Grotesk** (display/headings) + **Inter Tight** (body, geometric not default Inter)
- Grain: SVG turbulence overlay at ~6% opacity, fixed
- Cursor: custom dot + ring follower, blend-mode difference

## Signature interaction

A single unforgettable move: the hero name renders as oversized editorial type with **per-character mouse-parallax** — each letter drifts subtly toward the cursor, creating a tactile "the page knows you're there" feel without being gimmicky. Pairs with magnetic CTAs to make warmth physical.

## File structure

```text
src/
  routes/
    index.tsx              → single-page composition
  components/
    portfolio/
      Cursor.tsx           → custom cursor (dot + ring)
      GrainOverlay.tsx     → fixed SVG noise
      Magnetic.tsx         → magnetic button wrapper
      Reveal.tsx           → scroll-reveal primitive (Framer Motion)
      Nav.tsx              → minimal top nav with section anchors
      Hero.tsx             → parallax wordmark + tagline + availability pill
      About.tsx            → editorial bio + portrait placeholder
      Work.tsx             → 6 hover-reveal project cards
      Services.tsx         → 4 service pillars in editorial layout
      Insights.tsx         → 3 thought-pieces / placeholder essays
      Contact.tsx          → Web3Forms-wired form
      Footer.tsx           → wordmark + social links + colophon
  styles.css               → dark-luxury tokens + fonts + grain util
```

## Sections

1. **Nav** — Wordmark left, section links right, availability dot
2. **Hero** — "Favour Emmanuel" oversized parallax wordmark, role eyebrow, tagline, two magnetic CTAs (View Work / Get in Touch), scroll cue
3. **About** — Two-column editorial: portrait slot + bio paragraphs, skills grouped under 4 capability headings (AI & Prompt, Platforms, LLM Training, Automation)
4. **Work** — 6 hover-reveal cards in asymmetric 2-col layout, each card reveals project metadata on hover (warm amber accent line draws in)
5. **Services** — 4 pillars: Prompt Systems · LLM Evaluation · AI Workflow Automation · Team Training. Numbered editorial style
6. **Insights** — 3 placeholder essay cards (thoughts on prompt engineering)
7. **Contact** — Web3Forms POST with key wired, success/error states via sonner toast, magnetic submit
8. **Footer** — Large wordmark, LinkedIn + Instagram links, year + "Built with care"

## Technical notes

- All sections in `src/routes/index.tsx` (single page); smooth-scroll anchors
- Framer Motion for reveals + parallax; GSAP not needed at moderate intensity
- Web3Forms posts directly from client to `https://api.web3forms.com/submit` (no backend needed)
- Custom cursor disabled on touch devices via `matchMedia('(pointer: fine)')`
- Update root `head()` meta: title "Favour Emmanuel — AI Prompt Engineer", description from tagline
- Replace placeholder index.tsx entirely

## What's deliberately not included

- No hero carousel, no generic 3-col card grid, no purple gradients, no Lucide-decorated feature lists
- No backend / Lovable Cloud (form is direct-to-Web3Forms)
- No CMS, no blog routing (Insights is static placeholders for now)

Ready to build on approval.