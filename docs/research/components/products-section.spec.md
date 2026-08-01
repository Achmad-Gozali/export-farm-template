# ProductsSection Specification

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshots:** `docs/design-references/template23.webekspor.com/desktop-05-organic-products-heading.jpg`, `docs/design-references/template23.webekspor.com/desktop-06-product-cards.jpg`
- **Interaction model:** scroll-triggered fade-in. Section id must be `product-section` (nav anchor `#product-section`).

## DOM Structure
```
<section id="product-section" class="pt-20">
  <div class="container mx-auto text-center px-6">
    <p class="italic font-script">Most Popular Products</p>
    <h2>Organic Products</h2>
    <p>Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem que laudantium, totam rem.</p>
  </div>
  <div class="container mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-6 pb-20">
    {products.map(p => (
      <div class="bg-white text-center px-6 pt-10 pb-10">
        <Image src={p.image} width={280} height={280} className="mx-auto h-[220px] w-auto object-contain" />
        <h3 class="mt-8">{p.name}</h3>
        <p class="mt-2">{p.description}</p>
      </div>
    ))}
  </div>
</section>
```

## Computed Styles

### Section
- padding-top: 80px, padding-bottom: 0 on the heading block (add ~80px bottom padding to the overall section after the card grid, since the source's card grid sits in the next DOM sibling but visually reads as one continuous section)

### Eyebrow ("Most Popular Products")
- font-family: Cormorant (`font-script`), italic, 18px

### Heading ("ORGANIC PRODUCTS")
- font-family: Raleway, 30px, weight 500, letter-spacing 3.5px, uppercase (source "Organic Products" + CSS uppercase), centered

### Intro paragraph
- font-family: Raleway, ~15-16px, color rgba(0,0,0,0.61), centered, single line, max-width constrained (~500-600px, centered)

### Product card
- background: white
- no border, no visible shadow, no border-radius (flat white card, per screenshot: pure white rectangle on the `#f5f5f5` page background, giving a subtle contrast without an explicit shadow)
- content centered (text-align: center)
- generous vertical padding (~40px top/bottom based on screenshot proportions)

### Product image
- Centered, contained within the card (`object-contain`), roughly 200-240px visual height, product on white/transparent background (studio product photography)

### Product title (e.g. "MILK")
- font-family: Raleway
- font-size: 20px
- font-weight: 500
- letter-spacing: 2.5px
- color: `rgb(51, 75, 53)` — a dark forest green (add this as a new token if useful, e.g. inline `text-[#334b35]`)
- text-transform: uppercase (source titles are normal-case "Milk"/"Kefir"/etc., CSS uppercases)

### Product description
- font-family: Raleway, ~14-15px, color rgba(0,0,0,0.61), 2-line wrap, centered

## States & Behaviors
- Scroll fade-in for the whole grid, staggered per card (~100ms increments) via `useReveal`.
- Note: the source site also wires each card to a "quick view" modal (Premium Addons Modal Box) triggered on click/image, but its content is unpopulated Lorem-ipsum placeholder text ("Product Name" + generic paragraph) with no real product data — per the "real content only" principle, **do not build this modal**; just render the cards as static content.

## Assets (4 products)
1. `public/images/product-milk.jpeg` — "Milk"
2. `public/images/product-kefir.jpeg` — "Kefir"
3. `public/images/product-goat-cheese.jpeg` — "Goat Cheese"
4. `public/images/product-butter.jpeg` — "Butter"

All 4 share the identical description text (verbatim, source content, not a mistake): "Ballan wrasse climbing gourami amur pike Arctic char."

## Text Content (verbatim)
- Eyebrow: "Most Popular Products"
- Heading: "Organic Products"
- Intro paragraph: "Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem que laudantium, totam rem."
- Card titles: Milk / Kefir / Goat Cheese / Butter
- Card description (all 4): "Ballan wrasse climbing gourami amur pike Arctic char."

## Responsive Behavior
- **Desktop (≥768px):** 4 columns.
- **Mobile (<768px):** 2 columns (`grid-cols-2`).
