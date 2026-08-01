# TeamSection Specification

## Overview
- **Target file:** `src/components/TeamSection.tsx`
- **Screenshots:** `docs/design-references/template23.webekspor.com/desktop-09-team-footer-1.jpg`, `desktop-10-team-footer-2.jpg`
- **Interaction model:** scroll-triggered fade-in, staggered per card (observed: first card visible while later cards still fading in during mid-scroll capture). Section id must be `team-section`.

## DOM Structure
```
<section id="team-section" class="py-20">
  <div class="container mx-auto text-center px-6">
    <p class="italic font-script">Key People</p>
    <h2>Our Best Team</h2>
  </div>
  <div class="container mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
    {team.map(member => (
      <div class="text-center">
        <Image src={member.image} width={280} height={280} className="w-full aspect-square object-cover" />
        <p class="mt-4 font-sans font-medium">{member.name}</p>
        <p class="mt-1 font-script">{member.role}</p>
      </div>
    ))}
  </div>
</section>
```

## Computed Styles

### Section
- padding: 80px top/bottom (responsive `py-12 md:py-16 lg:py-20`)

### Eyebrow ("Key People")
- font-family: Cormorant (`font-script`), italic, 18px

### Heading ("OUR BEST TEAM")
- font-family: Raleway, 30px, weight 500, letter-spacing 3.5px, uppercase (source "Our Best Team" + CSS uppercase), centered

### Member name (e.g. "Tom Fill")
- font-family: Raleway (`font-sans`)
- font-size: 18px
- font-weight: 500
- font-style: normal
- color: rgba(0,0,0,0.8)

### Member role (e.g. "Founder & owner")
- font-family: Cormorant (`font-script`)
- font-size: 16px
- font-weight: 600
- font-style: normal (not italic, despite being Cormorant — verified via computed style)
- color: rgba(0,0,0,0.55)

### Photo
- Square-ish portrait crop, `object-cover`, no border-radius/shadow observed (flat rectangular photo)

## States & Behaviors
- Scroll fade-in, staggered per card (~100-150ms increments) via `useReveal`.

## Assets (4 team members)
1. `public/images/team-tom-fill.jpeg` — "Tom Fill", "Founder & owner"
2. `public/images/team-sam-jack.jpeg` — "Sam Jack", "Harvester"
3. `public/images/team-nick-jon.jpeg` — "Nick Jon", "Farmer"
4. `public/images/team-mark-ten.jpeg` — "Mark Ten", "Harvester"

## Text Content (verbatim)
- Eyebrow: "Key People"
- Heading: "Our Best Team"
- Members as listed above (name / role pairs).

## Responsive Behavior
- **Desktop (≥768px):** 4 columns.
- **Mobile (<768px):** 2 columns (`grid-cols-2`).
