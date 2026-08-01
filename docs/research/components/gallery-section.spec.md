# GallerySection Specification

## Overview
- **Target file:** `src/components/GallerySection.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-03-gallery.jpg`
- **Interaction model:** scroll-triggered fade-in on load; hover zoom on each card image (standard for this gallery pattern — inferred, not independently hover-tested live).

## DOM Structure
```
<section id="gallery-section" class="py-20 bg-white">
  <div class="container mx-auto text-center px-6">
    <p class="italic font-script">Collections</p>
    <h2>Our Gallery</h2>
  </div>
  <div class="mt-16 grid grid-cols-2 md:grid-cols-4">
    {cards.map(card => (
      <div class="relative overflow-hidden aspect-[325/440]">
        <Image src={card.image} fill className="object-cover transition-transform duration-300 hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div class="absolute bottom-6 left-0 right-0 text-center text-white">
          <p class="font-script text-white/90">{card.category}</p>
          <p class="font-sans font-semibold">{card.title}</p>
        </div>
      </div>
    ))}
  </div>
</section>
```

## Computed Styles

### Section
- padding: 80px top/bottom (responsive `py-12 md:py-16 lg:py-20`)
- background-color: white

### Eyebrow ("Collections")
- font-family: Cormorant (`font-script`), italic, font-size: 20px

### Heading ("OUR GALLERY")
- font-family: Raleway
- font-size: 34px
- font-weight: 500
- letter-spacing: 3.5px
- text-transform: uppercase (source text "Our Gallery", CSS-uppercased)
- text-align: center

### Grid + Cards
- 4 columns, no gap between cards (edge-to-edge, `gap-0`)
- Each card: `position: relative`, `overflow: hidden`, image is `325×440` intrinsic aspect ratio (~0.74:1, portrait) — use `aspect-[325/440]`
- Overlay: linear-gradient from transparent (top) to solid black (bottom) — `bg-gradient-to-t from-black/80 via-black/20 to-transparent`, covering roughly the bottom 60% of the card
- Caption block bottom-center-ish (actually bottom-left per screenshot — re-check: captions are centered within each card in the screenshot, roughly bottom-anchored with ~24px bottom padding)

### Category label (e.g. "Farm", "Livestock")
- font-family: Cormorant
- font-size: 18px
- font-weight: 400
- color: rgba(255,255,255,0.89)

### Title (e.g. "Funny Lamb")
- font-family: Raleway
- font-size: 18px
- font-weight: 600
- color: white

## States & Behaviors
- Image hover: scale up slightly (`hover:scale-105`, `transition-transform duration-300`) inside an `overflow-hidden` wrapper — standard for this gallery pattern, not independently confirmed live but a safe, tasteful default.
- Whole gallery fades in on scroll (use `useReveal`).

## Assets (4 cards, note image 1 is reused for cards 1 and 3 — this is the source site's actual content, not a mistake to fix)
1. `public/images/gallery-1-funny-lamb.jpeg` — category "Farm", title "Funny Lamb"
2. `public/images/gallery-2-herd-of-cows.jpeg` — category "Livestock", title "Herd of cows"
3. `public/images/gallery-1-funny-lamb.jpeg` — category "Farm", title "Funny Lamb" (same image as card 1, reused)
4. `public/images/gallery-3-farm-work.jpeg` — category "Farm", title "Farm work"

## Text Content (verbatim)
- Eyebrow: "Collections"
- Heading: "Our Gallery"
- Card captions as listed above.

## Responsive Behavior
- **Desktop (≥768px):** 4 columns.
- **Mobile (<768px):** 2 columns (`grid-cols-2`), cards keep their portrait aspect ratio.
