# ContactFooterSection Specification

## Overview
- **Target file:** `src/components/ContactFooterSection.tsx`
- **Screenshots:** `docs/design-references/template23.webekspor.com/desktop-09-team-footer-1.jpg`, `desktop-10-team-footer-2.jpg`
- **Interaction model:** static (no scroll animation confirmed needed here, though applying the standard `useReveal` fade-in is fine for consistency)
- **Important correction from initial page-mapping:** what the source site calls `#contact-section` is actually the *entire visual footer* (logo + blurb + socials / Address / Contact Us), not a separate "contact info" block followed by a distinct footer. A separate, much smaller `<footer id="colophon">` element below it holds only the copyright line, with background `rgb(254, 246, 232)`. Build this as ONE component covering both.

## DOM Structure
```
<section id="contact-section" class="py-16" style="background-color: #f3eee9">
  <div class="container mx-auto grid md:grid-cols-3 gap-12 px-6">
    <div>
      <Image src="/images/logo-webekspor-footer.png" width={555} height={91} className="h-10 w-auto" />
      <p class="mt-4">Showcase your natural produce, garden, healthy food store & more with Bottanika, a theme with a fresh look especially made for organic lifestyle enthusiasts.</p>
      <div class="mt-4 flex gap-3">
        <SocialIcon icon={Facebook} /> <SocialIcon icon={Instagram} /> <SocialIcon icon={Youtube} />
      </div>
    </div>
    <div>
      <h5>Address</h5>
      <p>Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150</p>
    </div>
    <div>
      <h5>Contact Us</h5>
      <div class="flex items-center gap-2"><Phone size={16}/> 0813 3456 78</div>
      <div class="flex items-center gap-2"><Printer size={16}/> 021 1231 3123</div>
      <div class="flex items-center gap-2"><Mail size={16}/> mail@example.com</div>
    </div>
  </div>
</section>
<footer style="background-color: #fef6e8" class="py-6 text-center text-sm">
  Copyright © {new Date().getFullYear()} Web Ekspor Design. All Rights Reserved.
</footer>
```

## Computed Styles

### Contact section
- background-color: `#f3eee9` (the site's cream token — `bg-secondary` / `bg-cream`)
- padding: ~60-80px vertical (source measured 60px top / 80px bottom on the contact-columns portion; use `py-16` as a clean middle ground)

### Logo (footer wordmark, distinct from the header script logo)
- `public/images/logo-webekspor-footer.png`, intrinsic 555×91 — two-tone wordmark "web" (dark) + "ekspor" (blue `#0170b9`) baked into the image itself
- Render at a modest height, e.g. `h-8` or `h-10`, `w-auto`

### Blurb paragraph
- font-family: Manrope
- font-size: 16px
- color: rgba(43,43,43,0.82)
- line-height: 28.8px (1.8 ratio)

### Social icons (Facebook, Instagram, YouTube — use `lucide-react` icons)
- 44×44px circle, `border-radius: 50%`
- border: 0.8px solid rgba(43,43,43,0.81)
- transparent background, icon color matches border tone (dark gray/black)
- Use `lucide-react`'s `Facebook`, `Instagram`, `Youtube` icons at ~18-20px inside the circle.

### Column headings ("Address", "Contact Us")
- font-family: Raleway
- font-size: 20px
- font-weight: 500
- letter-spacing: 2px

### Address text
- Standard body paragraph styling (Raleway, ~15-16px, muted color) — matches other body-text treatment on the page (`--body-text` token)

### Contact rows (phone / fax / email)
- Each row: a small icon (`lucide-react` `Phone`, `Printer`, `Mail` respectively — matches source's `fas fa-phone-square-alt`, `fas fa-print`, `fas fa-envelope`) + text, inline, small gap
- Standard body text styling

### Footer (copyright bar)
- background-color: `#fef6e8` (a very light warm cream, slightly different from the section above it — distinct token, not the same as `--cream`)
- padding: small vertical padding (e.g. `py-6`)
- text: centered, small font-size (~14px), muted color

## States & Behaviors
- Static — no special scroll/hover behavior confirmed beyond a standard `hover:opacity-80` on social icons and contact links as a tasteful default.

## Assets
- `public/images/logo-webekspor-footer.png` (555×91)

## Text Content (verbatim)
- Blurb: "Showcase your natural produce, garden, healthy food store & more with Bottanika, a theme with a fresh look especially made for organic lifestyle enthusiasts."
- Address heading: "Address"
- Address body: "Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150"
- Contact heading: "Contact Us"
- Contact rows: "0813 3456 78" / "021 1231 3123" / "mail@example.com"
- Copyright: "Copyright © {current year} Web Ekspor Design. All Rights Reserved." — use `new Date().getFullYear()` for the year rather than hardcoding, since this is a live template.
- Social links: use `href="#"` placeholders (no real social URLs were captured — do not fabricate them).

## Responsive Behavior
- **Desktop (≥768px):** 3-column grid as captured.
- **Mobile (<768px):** stack to 1 column, logo/blurb/socials first, then Address, then Contact Us.
