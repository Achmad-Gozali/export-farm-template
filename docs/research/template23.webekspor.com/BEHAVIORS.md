# Behaviors — template23.webekspor.com

## Header / Navigation
- `position: fixed`, `top: 0`, `z-index: 99`, background **transparent** (`rgba(0,0,0,0)`) at all scroll positions — confirmed via computed style at scroll 0 and scroll 400. No scroll-triggered background/shadow change detected (no sticky-solidify behavior).
- Nav text color is white while over the hero image; since the header is fixed and transparent for the whole page, text readability over light sections (About, Gallery, etc.) is intentionally sacrificed by the original template (nav simply overlaps content, common Elementor/Astra full-page-template pattern) — replicate as-is per pixel-perfect mandate.
- Logo is a raster PNG (`elispor` script wordmark), not text — treat as an image asset.

## Global entrance animation (applies to nearly every section)
- Elementor adds `class="... animated fadeIn"` plus `data-settings='{"_animation":"fadeIn","_animation_delay":100}'` to headings/text/image widgets. This is a **scroll-into-view fade-in**, not click or hover driven.
- Implementation: IntersectionObserver per element/group, threshold ≈0.2, `rootMargin: "0px 0px -10% 0px"`. On enter: opacity 0→1, translateY(16px)→0, duration 600-800ms ease-out, with the observed ~100ms stagger delay for elements later in a group (e.g., team cards, gallery cards).
- Apply once (don't re-trigger fade-out on scroll back up) — matches Elementor default (`_animation` fires once).

## Hero Slider (`home-section`)
- Built with Nextend Smart Slider (`n2-ss-1`, class `n2-ss-loaded`). Two slides, both currently showing the same alpine-meadow photo and same headline copy ("The Taste Of Nature" / "NATURAL, FRESH AND LOCALLY SOURCED"), differentiated only by an invisible "slider 1" / "slider 2" label (screen-reader-ish text, not visibly distinct).
- Pagination dots bottom-center (`●` for active in white, `○`/dim for inactive).
- **Interaction model: time-driven** (auto-advancing carousel). Exact interval/easing not independently confirmed in this session — implement a standard 6-7s autoplay crossfade with dot pagination, since visual content is identical between the two captured slides.
- Full-bleed image, dark text-shadow/overlay-free (text sits directly on image, so pick a translucent scrim or rely on image's natural contrast — original has no visible dark gradient overlay, text is bare white/light-gray with letter-spacing).

## Gallery Section
- 4-up image grid (Premium Addons "premium-gallery"). Each card: full-bleed photo, bottom-left overlay caption with two lines — small category label ("Farm"/"Livestock") above a bold title ("Funny Lamb", "Herd of cows", "Farm work"). Text sits on a subtle bottom gradient scrim for legibility.
- Standard behavior for this plugin/pattern: image scales up slightly on hover (`transform: scale(1.05)`, overflow hidden on card, transition ~300-400ms) — not independently confirmed live but is this component's conventional behavior; implement as a reasonable default and flag as inferred.

## Product Processing Section
- Layered photo composition: a large background photo (girl + cow) with a second, smaller photo (farmer + milk churn) absolutely positioned overlapping its bottom-right corner, both inset in a white padded card frame. This is a 2-image layered composite — do not collapse into one image.
- "Quality Awards" row: 4 outlined medal/ribbon icon glyphs in a row inside a bordered box.

## Product Cards Section
- 4 equal-width cards (Milk, Kefir, Goat Cheese, Butter), white background, product photo centered/top, uppercase title, 2-line gray description below. Standard card hover treatment (subtle lift + shadow) expected; not independently confirmed live.

## "We try to Create the Best Products" Banner
- Full-bleed photo (cow herd) section with centered white heading text (2 lines) directly on the image — no card, no button. This is the same fadeIn-on-scroll pattern as everything else (confirmed via `data-settings` on the heading element, delay 100ms).

## Team Section
- 4 team member cards in a row, each: portrait photo (top), name (serif italic small caps style — Cormorant), role/title below in muted gray. Cards fade in with a stagger (observed: first card visible while later cards still at opacity ~0 during mid-scroll capture, consistent with per-widget entrance-animation delay stacking).

## Footer
- 3-column layout: (1) "webekspor" wordmark logo (two-tone: "web" in dark, "ekspor" in accent blue `rgb(1,112,185)`) + blurb paragraph + 3 circular social icons (Facebook/Instagram/YouTube, outline style, `border: 0.8px solid rgba(43,43,43,0.81)`, transparent fill); (2) Address block; (3) Contact Us block with phone/fax/email rows, each preceded by a small icon.
- Below the 3 columns: a full-width divider and centered copyright line, background is the same warm cream (`rgb(243,238,233)`) as other alternating sections.
- Static, no special scroll/hover behavior observed beyond standard link hover (assume underline/color shift on social icon hover — not independently confirmed).

## Floating WhatsApp Button
- Fixed bottom-right on every section, circular, green `rgb(37,211,102)`, white WhatsApp glyph, `border-radius: 24px` (fully round at its size), presumably opens a `wa.me` link on click. Persists across entire scroll range (confirmed present in every captured screenshot).

## No click-driven tabs/accordions found
DOM sweep for `role="tab"`/tab-panel patterns and a full-page text/element scan found none. All state changes on this page are either time-driven (hero slider) or scroll-driven (entrance animations). No modal, dropdown, or accordion interactions were present in the rendered DOM.

## Known Testing Gap
Hover states (gallery zoom, card lift, social icon hover, nav link hover) and the hero slider's exact autoplay timing were **not independently verified via live hover/wait testing** in this session due to time constraints — the values above are documented as best-practice inferences consistent with the plugins in use (Premium Addons gallery, Elementor cards, Nextend Smart Slider) and flagged accordingly. Builders should use tasteful, standard transition values (200-400ms ease) for these and the user/QA pass can adjust if the live site differs.
