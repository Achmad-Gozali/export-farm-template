# CtaBanner Specification

## Overview
- **Target file:** `src/components/CtaBanner.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-07b-cta-banner-full.jpg`
- **Interaction model:** scroll-triggered fade-in on the heading text; the background photo itself is a **CSS parallax** (`background-attachment: fixed`), confirmed via computed style.

## DOM Structure
```
<section
  class="relative h-[580px] flex items-center justify-center bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url(/images/cta-cows-banner.jpeg)" }}
>
  <h2 class="text-center text-white px-4">We try to Create<br/>the Best Products</h2>
</section>
```
Implement the parallax with plain CSS `background-attachment: fixed` (Tailwind's `bg-fixed` utility) on the section itself — no JS scroll library needed for this one effect.

## Computed Styles

### Section
- height: 580px (responsive: shrink on smaller screens, e.g. `h-[400px] md:h-[500px] lg:h-[580px]`)
- background-attachment: fixed (parallax)
- background-position: 50% 50% (centered)
- background-size: cover

### Heading
- font-family: Raleway
- font-size: 45px
- font-weight: 600
- color: white
- letter-spacing: 1.6px
- line-height: 54px
- text-align: center
- Wraps to 2 lines: "We try to Create" / "the Best Products"

## States & Behaviors
- Heading fades in on scroll (`useReveal`), consistent with the site's global Elementor entrance-animation pattern (confirmed via `data-settings='{"_animation":"fadeIn","_animation_delay":100}'` on this exact heading element).
- No overlay/scrim on the photo was detected — text sits directly on the image; the cow-herd photo naturally has enough sky/cloud contrast in the middle band where the heading sits.
- **Note on mobile:** `background-attachment: fixed` is often disabled/ignored on iOS Safari and some mobile browsers for performance reasons — this is expected/acceptable, not a bug to work around.

## Assets
- `public/images/cta-cows-banner.jpeg`

## Text Content (verbatim)
- Heading: "We try to Create the Best Products"

## Responsive Behavior
- **Desktop (≥1024px):** 580px tall, 45px heading.
- **Mobile (<768px):** reduce height (e.g. 400px) and heading size (e.g. `text-2xl`/~28px) to keep it proportionate.
