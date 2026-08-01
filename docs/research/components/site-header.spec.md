# SiteHeader + WhatsAppButton Specification

## Overview
- **Target files:** `src/components/SiteHeader.tsx`, `src/components/WhatsAppButton.tsx`
- **Screenshot:** `docs/design-references/template23.webekspor.com/desktop-01-hero.jpg` (header visible at top)
- **Interaction model:** static (no scroll-triggered background change — confirmed via computed style at scroll 0 and scroll 400, header stays `background: transparent` the whole page)

## DOM Structure — SiteHeader
```
<header> (fixed, top:0, full width, transparent bg, z-index 99, height 70px)
  <div class="container mx-auto flex items-center justify-between px-6 h-full">
    <a href="/"><img src="/images/logo-elispor.png" /></a>  -- script wordmark "elispor", intrinsic 90x54
    <nav class="hidden md:flex items-center gap-0">
      <a href="#home-section">Home</a>
      <a href="#about-section">About Us</a>
      <a href="#gallery-section">Gallery</a>
      <a href="#product-section">Product</a>
      <a href="#team-section">Team</a>
      <a href="#contact-section">Contact</a>
    </nav>
    <!-- mobile: hamburger icon (lucide `Menu`) toggling a slide-down/drawer nav below md breakpoint -->
  </div>
</header>
```

## Computed Styles

### Header container
- position: fixed
- top: 0
- height: 70px
- background-color: transparent (rgba(0,0,0,0)) — always, all sections
- z-index: 99
- width: 100%

### Logo image
- intrinsic size: 90 × 54 (use Next `<Image>` with these dims, `priority`)
- rendered height in header: ~40-44px (scale down proportionally, vertically centered)

### Nav link
- font-family: Raleway (`font-sans` in this project)
- font-size: 15px
- font-weight: 400
- color: white (`#ffffff`) — since header is transparent over the hero photo which is the only place nav is typically read; keep white per source (pixel-perfect mandate), even though this reduces contrast over lighter sections further down — that is the source site's actual behavior.
- letter-spacing: normal
- text-transform: none
- padding: 0 20px (horizontal spacing between items)

## States & Behaviors
- No scroll-based background/shadow change (verified).
- Standard link hover: assume a subtle opacity/underline shift (not independently confirmed live) — use `hover:opacity-80 transition-opacity`.
- Mobile: below `md` (768px), collapse nav into a hamburger menu (lucide `Menu`/`X` icons), since the source uses Astra's `stack-on-mobile` nav class.

## Assets
- `public/images/logo-elispor.png` (90×54 script wordmark, transparent bg, white script text — visible only on dark/photo backgrounds)

## Text Content (verbatim)
Home / About Us / Gallery / Product / Team / Contact

## Responsive Behavior
- **Desktop (≥768px):** horizontal nav as shown, all 6 links inline, right-aligned.
- **Mobile (<768px):** nav links collapse behind a hamburger toggle; logo stays left-aligned.

---

# WhatsAppButton Specification

## Overview
- **Target file:** `src/components/WhatsAppButton.tsx`
- **Interaction model:** static, always-visible fixed floating action button on every section.

## DOM Structure
```
<a href="#" aria-label="Chat on WhatsApp" class="fixed bottom-[25px] right-[25px] z-[10001] flex items-center justify-center w-[54px] h-[54px] rounded-full bg-whatsapp shadow-lg">
  <WhatsAppIcon className="w-7 h-7 text-white" />
</a>
```
Import `WhatsAppIcon` from `src/components/icons.tsx` (already created).

## Computed Styles
- position: fixed; bottom: 25px; right: 25px; z-index: 10001 (use a very high z-index, above all page content)
- circle: 54px × 54px, border-radius: 50%
- background-color: `#25d366` (`--color-whatsapp` token, already defined in globals.css)
- icon: white, centered, roughly 28px

## States & Behaviors
- No animation/pulse observed — static circle.
- Hover: assume subtle scale-up (`hover:scale-105 transition-transform`) as a tasteful default (not independently confirmed live).
- href: use `#` as placeholder (no real phone number was captured; do not fabricate a WhatsApp number — leave it as a non-functional anchor or `href="#"`).

## Responsive Behavior
- Same position/size at all breakpoints (fixed floating buttons typically don't change).
