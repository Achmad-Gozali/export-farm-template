# ProductProcessingSection Specification

## Overview
- **Target file:** `src/components/ProductProcessingSection.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-04-product-processing.jpg`
- **Interaction model:** scroll-triggered fade-in

## DOM Structure
```
<section class="py-[100px]">
  <div class="container mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
    <div>
      <p class="italic font-script">Grown With Utmost Care</p>
      <h2>Organic Product Processing</h2>
      <p>Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem que laudantium, totam rem dolorem lorem ipsum est sit amet.</p>
      <ul>
        <li>2002 Nemo enim ipsam voluptatem esit''</li>
        <li>2009 Temporibus autem quibusdam ofics''</li>
        <li>2012 Lorem ipsum dolor sit amet''</li>
      </ul>
      <h5>Quality Awards</h5>
      <Image src="/images/quality-awards.png" width={300} height={71} />
    </div>
    <div class="bg-white p-[10px]">
      <Image src="/images/product-processing.jpg" width={900} height={716} className="w-full h-auto" />
    </div>
  </div>
</section>
```
Note: the "photo collage" look (girl+cow scene plus farmer+milk-churn scene both visible together) is baked into a **single** source JPEG (`product-processing.jpg`, 900×716) — do not attempt to build it as two separately-positioned overlapping `<Image>` elements; it is one image asset framed in a white padded card.

## Computed Styles

### Section
- padding: 100px top/bottom (responsive `py-16 md:py-20 lg:py-[100px]`)
- background: transparent (page background)

### Eyebrow ("Grown With Utmost Care")
- font-family: Cormorant (`font-script`), italic, 18px

### Heading ("ORGANIC PRODUCT PROCESSING")
- font-family: Raleway, 30px, weight 500, letter-spacing 3.5px, uppercase (source "Organic Product Processing" + CSS uppercase)

### Body paragraph
- font-family: Raleway, 15px (approx, matches list-item size), color rgba(0,0,0,0.61)

### List items (timeline-style, each prefixed with a bullet)
- font-family: Raleway, 15px, color rgba(0,0,0,0.61)
- Rendered as a simple bulleted list (`list-disc pl-5` or a custom small-dot bullet), one item per line

### "Quality Awards" sub-heading
- font-family: Raleway, 24px, weight 500, letter-spacing 3.5px, uppercase

### Quality awards image
- `public/images/quality-awards.png`, intrinsic 300×71 — this single PNG already contains all 4 medal/ribbon icon glyphs side by side (it is a flat sprite image, not 4 separate icons) — render as one `<Image>`, do not rebuild as 4 separate icon components.

### Photo frame (right column)
- White background, small uniform padding (~10px) around the image, no border-radius, no shadow — a simple white "mat" border around the photo.
- Image: `public/images/product-processing.jpg`, intrinsic 900×716, `w-full h-auto`.

## States & Behaviors
- Scroll fade-in (use `useReveal`), text column and image column can reveal together or with a slight stagger.

## Assets
- `public/images/quality-awards.png` (300×71)
- `public/images/product-processing.jpg` (900×716)

## Text Content (verbatim)
- Eyebrow: "Grown With Utmost Care"
- Heading: "Organic Product Processing"
- Paragraph: "Sed ut perspiciatis aperiam unde omnis istetus error volupta dolorem que laudantium, totam rem dolorem lorem ipsum est sit amet."
- List: "2002 Nemo enim ipsam voluptatem esit''" / "2009 Temporibus autem quibusdam ofics''" / "2012 Lorem ipsum dolor sit amet''" (the trailing `''` double-quote-like marks are present in the source copy — keep them verbatim)
- Sub-heading: "Quality Awards"

## Responsive Behavior
- **Desktop (≥768px):** 2-column grid, text left / photo right.
- **Mobile (<768px):** stack to 1 column, text first then photo (or photo first — either is acceptable; source likely keeps DOM order so text-first is safest default).
