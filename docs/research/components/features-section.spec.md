# FeaturesSection Specification ("Grow Organic" 4-up icon row)

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-02b-grow-organic-features.jpg`
- **Interaction model:** scroll-triggered fade-in (use `useReveal` hook, stagger each column ~100ms)

## DOM Structure
```
<section class="py-[100px]" style="background-color: rgba(243,238,233,0.7)">
  <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
    <FeatureCol icon={Sprout} title="Grow Organic" />
    <FeatureCol icon={Shovel} title="Harvest Plan" />
    <FeatureCol icon={Wheat} title="Seed Planting" />
    <FeatureCol icon={Leaf} title="Veggy Care" />
  </div>
</section>
```
Each `FeatureCol` = icon (centered, 60×60) → uppercase title below → description paragraph below that, all center-aligned.

## Computed Styles

### Section
- background-color: `rgba(243,238,233,0.7)` (the site's cream token at 70% opacity — use `bg-secondary/70` or the literal rgba value)
- padding: 100px top/bottom (responsive: `py-12 md:py-20 lg:py-[100px]`)

### Icon
- 60px × 60px, black line-art/outline style (`fill: black` in source, but visually reads as a thin outline icon — a lucide icon at `w-[60px] h-[60px] stroke-[1.25]` in black/`text-foreground` is a faithful substitute). **Note:** the source icons are custom Elementor icon-pack glyphs (hands cupping a sprout / trowel in soil / wheat stalks / leaf sprig), not literally extractable as source SVG in this session — substitute the closest `lucide-react` icons: `Sprout` (Grow Organic), `Shovel` (Harvest Plan), `Wheat` (Seed Planting), `Leaf` (Veggy Care).

### Title (e.g. "GROW ORGANIC")
- font-family: Raleway
- font-size: 18px
- font-weight: 500
- letter-spacing: 3.5px
- color: black
- text-transform: uppercase (source text is normal-case "Grow Organic" etc., CSS uppercases — write normal case + `uppercase` class)
- text-align: center
- margin-top: ~20-24px from icon

### Description paragraph
- font-family: Raleway
- font-size: 15px
- font-weight: 300
- color: rgba(0,0,0,0.61)
- line-height: 26px
- text-align: center
- max-width constrained so it wraps to 2 lines (~220px column width)

## States & Behaviors
- Scroll fade-in, staggered per column (0ms, 100ms, 200ms, 300ms delay via `useReveal(delayMs)`).

## Text Content (verbatim — all 4 columns share the identical description text in the source, which is a known template quirk, not a mistake to fix)
1. **Grow Organic** — "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
2. **Harvest Plan** — "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
3. **Seed Planting** — "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
4. **Veggy Care** — "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"

## Responsive Behavior
- **Desktop (≥768px):** 4 columns in a row, as captured.
- **Mobile (<768px):** 2×2 grid (`grid-cols-2`) is a reasonable adaptation; stacking to 1 column is also acceptable if 2-up feels cramped at very narrow widths.
