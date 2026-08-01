# Page Topology — template23.webekspor.com

Single-page site (WordPress + Elementor + Astra theme). Nav links are in-page anchors (`#home-section`, `#about-section`, etc.), not separate routes. One route to build: `/`.

## Global Layout
- Header: fixed/sticky? — Astra `#ast-desktop-header`, transparent over hero, sits at top: 0. Height ~70px desktop.
- Floating WhatsApp button: fixed bottom-right, all sections, green circle (#25d366), z-index high.
- Body background: `#f5f5f5`.
- Max content width: ~1200-1290px (Elementor default `.elementor-section.elementor-section-boxed > .elementor-container` max-width 1140-1200px).

## Sections (top to bottom, desktop pixel offsets from a 1536px-wide capture)

| # | id | approx range (px) | Name | Interaction model |
|---|----|--------------------|------|--------------------|
| 1 | `home-section` | 0–770 | Hero Slider | time-driven (auto-rotating slider) + scroll (nav opacity) |
| 2 | `about-section` | 770–1417 | Modern Farming (image + text, 2-col) | scroll-triggered fade-in |
| 3 | *(unlabeled)* | 1417–1917 | Grow Organic (3-col icon features: Harvest Plan / Seed Planting / Veggy Care) | scroll-triggered fade-in |
| 4 | `gallery-section` | 1917–2652 | Our Gallery (4-up image grid with captions) | scroll fade-in; hover zoom/overlay on cards |
| 5 | *(unlabeled)* | 2652–3348 | Organic Product Processing (text + list + quality-award icons + layered photo composition) | scroll fade-in |
| 6 | `product-section` | 3348–3576 | "Organic Products" heading + intro | scroll fade-in |
| 7 | *(unlabeled, part of product-section flow)* | 3576–4278 | Product cards grid (Milk, Kefir, Goat Cheese, Butter — 4 cards) | scroll fade-in; hover card lift/shadow |
| 8 | *(unlabeled)* | 4278–4858 | "We try to Create the Best Products" full-bleed photo banner with centered heading | scroll fade-in (heading has `animated fadeIn` class, `_animation_delay: 100`) |
| 9 | `team-section` | 4858–5587 | Our Best Team (4 team member cards) | scroll fade-in staggered per card |
| 10 | `contact-section` | 5587–5971 | Contact info (address / contact us columns) | scroll fade-in |
| 11 | *(footer, outside #content)* | 5971–6035 | Site footer (logo, blurb, socials, address, contact, copyright) | static |

## Interaction Model Notes
- **This is an Elementor site**: nearly every widget gets `class="elementor-element ... animated fadeIn"` added via a scroll/waypoint-based entrance animation (`data-settings='{"_animation":"fadeIn","_animation_delay":100}'`). Treat this as the default reveal behavior for almost all text/image blocks unless noted otherwise. Implement as a generic `useInView` + fade/translate-up on scroll (IntersectionObserver, threshold ~0.2, translateY 20px → 0, opacity 0 → 1, duration ~600-800ms ease-out), NOT click-based.
- **Hero is a slider** (Nextend Smart Slider `n2-ss-1`), not a static image — 2 slides ("slider 1"/"slider 2") both showing the same mountain/meadow photo with the same headline text, auto-rotating with dot pagination at bottom-center. Confirm exact autoplay interval not observed live but Smart Slider defaults to ~7s with fade/slide transition.
- **Gallery** uses Premium Addons "premium-gallery" — image cards with a bottom-gradient overlay and two-line caption (category label + title), likely scale/zoom on hover (standard for this plugin).
- No click-driven tabs were found anywhere on this page — confirmed by DOM/text sweep, there are no `role="tab"` or tab-panel patterns present.

## Responsive Breakpoints (derived from site's own CSS media queries — live viewport resize was not testable in this environment)
- Astra theme: mobile `max-width: 544px`, tablet `545–921px`, desktop `>921px`.
- Elementor: `max-width: 767px` (mobile), `768–1024px` (tablet), `>1024px` (desktop).
- **Recommendation for the Next.js rebuild:** use Tailwind's default `md: 768px` / `lg: 1024px` as the practical equivalent — 2-column sections (About, Product Processing) stack to 1 column below `md`; 4-column grids (Gallery, Product cards, Team) go to 2 columns at `md` and 1 column below `sm` (640px).

## Known Gaps
- Live mobile-viewport screenshots could not be captured: the browser automation's `resize_window` call did not actually change `window.innerWidth` in this environment (confirmed via JS — stayed at 1536px after requesting 390px and 400px widths). Responsive behavior above is inferred from the site's own CSS breakpoints rather than visually verified. Flag to user if pixel-perfect mobile fidelity becomes critical — would need a real device/emulator to verify.
