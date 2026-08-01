# AboutSection Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-02-modern-farming.jpg`
- **Interaction model:** scroll-triggered fade-in (use the shared `useReveal` hook from `src/hooks/useReveal.ts` + `.reveal`/`.reveal-visible` classes from `globals.css`)

## DOM Structure
```
<section id="about-section" class="py-[120px] bg-background">
  <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
    <Image src="/images/about-modern-farming.jpeg" width={1100} height={589} className="w-full h-auto object-cover" />
    <div>
      <p class="italic font-script">Tasty and fresh greens</p>
      <h2>Modern Farming</h2>
      <p>Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem que, totam rem unde omnis.</p>
      <p>Lorem ipsum incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad dolore magna aliqua minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- padding: 120px top and bottom (`py-[120px]`, reduce responsively e.g. `py-16 md:py-24 lg:py-[120px]`)
- background-color: transparent / matches page `--background` (#f5f5f5)

### Image (left column)
- intrinsic 1100×589, `w-full h-auto object-cover`, no border-radius/shadow observed

### Eyebrow ("Tasty and fresh greens")
- font-family: Cormorant (`font-script`)
- font-size: 18px
- font-style: italic
- font-weight: 500
- color: black (#000000)

### Heading ("MODERN FARMING")
- font-family: Raleway (`font-sans`)
- font-size: 30px
- font-weight: 500
- color: black (#000000)
- letter-spacing: 3.5px (`tracking-[0.12em]` approx)
- text-transform: uppercase (source text content is "Modern Farming", CSS uppercases it — write normal case in JSX + `uppercase` class)

### Paragraph 1 (short intro line)
- font-family: Raleway
- font-size: 16px
- font-weight: 400
- color: rgba(0,0,0,0.61) (~`text-black/60` or use `--body-text` token, close enough — #4b4f58 works too)
- line-height: 26px

### Paragraph 2 (longer body text)
- font-family: Raleway
- font-size: 14px
- font-weight: 400
- color: rgba(0,0,0,0.61)
- line-height: 26px

## States & Behaviors
- Standard scroll-into-view fade-in (opacity 0→1, translateY 16px→0) via `useReveal`, applied to the whole right-column text block (or the image and text block separately with a slight stagger, e.g. image first, text 100ms later) — matches the site-wide Elementor entrance-animation pattern documented in `docs/research/template23.webekspor.com/BEHAVIORS.md`.

## Assets
- `public/images/about-modern-farming.jpeg` (1100×589)

## Text Content (verbatim)
- Eyebrow: "Tasty and fresh greens"
- Heading: "Modern Farming"
- Paragraph 1: "Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem que, totam rem unde omnis."
- Paragraph 2: "Lorem ipsum incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad dolore magna aliqua minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."

## Responsive Behavior
- **Desktop (≥768px):** 2-column grid, image left / text right, as captured.
- **Mobile (<768px):** stack to 1 column, image on top full-width, text below, reduced section padding.
