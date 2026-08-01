# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-01-hero.jpg`
- **Interaction model:** time-driven (auto-rotating slider). Section id must be `home-section` (nav anchors link to `#home-section`).

## DOM Structure
```
<section id="home-section" class="relative w-full h-screen max-h-[770px] overflow-hidden">
  <!-- slide (crossfades to next slide automatically every ~7s) -->
  <div class="absolute inset-0">
    <Image src="/images/hero-slide-1.jpeg" fill className="object-cover" priority />
  </div>
  <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <p class="font-script italic">The Taste Of Nature</p>
    <h1>Natural, fresh and<br/>locally sourced</h1>
  </div>
  <!-- pagination dots, bottom-center -->
  <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
    <button aria-label="Slide 1" /> <button aria-label="Slide 2" />
  </div>
</section>
```

## Computed Styles

### Section / slider
- height: ~770px on a 1536px-wide viewport (roughly 50vh-ish full-bleed banner; implement as `h-[70vh] min-h-[500px] max-h-[770px]` or similar responsive full-bleed hero, `w-full overflow-hidden relative`)
- Full-bleed background photo, `object-fit: cover`, no dark gradient/scrim overlay detected — text sits directly on the image (original alpine meadow photo has enough natural contrast in the middle band where text sits).

### Eyebrow ("The Taste Of Nature")
- font-family: Cormorant (`font-script` in this project)
- font-size: 22px
- font-style: italic
- font-weight: 600
- color: white (#ffffff)
- margin-bottom: small gap before heading (~8-12px)

### Heading ("NATURAL, FRESH AND LOCALLY SOURCED")
- font-family: Raleway (`font-sans`)
- font-size: 60px (desktop) — scale down responsively, e.g. `text-3xl sm:text-4xl md:text-5xl lg:text-[60px]`
- font-weight: 500
- color: white (#ffffff)
- letter-spacing: 8px (very wide tracking — use `tracking-[0.2em]` or custom)
- line-height: 72px (1.2 ratio)
- text-transform: uppercase
- text-align: center
- Wraps to 2 lines: "NATURAL, FRESH AND" / "LOCALLY SOURCED" (source text content is actually lowercase "natural, fresh and locally sourced" with CSS `text-transform: uppercase` — write the JSX content in normal case and let `uppercase` class do the transform, matching source markup convention)

### Pagination dots
- Bottom-center, small horizontal row, 2 dots (one per slide)
- Active dot: solid white filled circle (~8-10px)
- Inactive dot: dim/outline white circle, lower opacity (~40-50%)
- Not a clickable requirement to be pixel-exact on the hit-area size — a simple `w-2 h-2 rounded-full` pair with `bg-white` (active) / `bg-white/40` (inactive) is a faithful recreation.

## States & Behaviors
- **Two slides**, both showing the same alpine-meadow-and-farmhouse photo (`hero-slide-1.jpeg` and `hero-slide-2.jpeg` — visually near-identical, both downloaded to `public/images/`) with identical eyebrow/heading text. Auto-advance between the two on a timer (~6-7s), crossfade transition (~800ms opacity fade). Implement with a simple `useState` + `setInterval` client component, or `useEffect` timer — no external carousel library needed for just 2 slides.
- Clicking a dot jumps to that slide and resets the autoplay timer.
- No manual arrow/chevron controls were found in the DOM — dots only.

## Assets
- `public/images/hero-slide-1.jpeg` (1920px wide)
- `public/images/hero-slide-2.jpeg` (1920px wide)

## Text Content (verbatim)
- Eyebrow: "The Taste Of Nature"
- Heading: "Natural, fresh and locally sourced" (rendered uppercase via CSS)

## Responsive Behavior
- **Desktop (≥1024px):** heading ~60px, full 2-line layout as captured.
- **Tablet/Mobile:** scale heading down substantially (e.g. `text-3xl` ~30-36px at mobile) to avoid line-wrap breaking mid-word; keep centered, keep full-bleed photo with `object-cover`; reduce section height proportionally (e.g. `h-[60vh]` on mobile) since a 770px-tall hero on a 390px-wide screen would be disproportionate. This adaptation is a reasonable responsive judgment call — live mobile screenshots were not obtainable in this environment (see `docs/research/template23.webekspor.com/PAGE_TOPOLOGY.md` "Known Gaps").
