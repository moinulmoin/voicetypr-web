# VoiceTypr Design System

This is the single source of truth for VoiceTypr's web design system.
Use this file for landing page work, secondary pages, help/legal surfaces, SEO pages, and future refinements.

## Users

Solo founders, indie hackers, AI power users, and developers whose day is mostly typing English into tools like Cursor, Claude, ChatGPT, docs, email, and chat.

They:
- use VoiceTypr 8–12 hours a day
- work on macOS or Windows
- have strong taste
- dislike marketing language
- have often already tried a cloud dictation tool

The job:
- replace the 80–150 wpm typing bottleneck with voice
- keep privacy intact
- avoid subscriptions
- work inside the apps they already use

## Brand personality

Three words:
- warm
- mechanical
- opinionated

Interpretation:
- Warm: founder-made, human, direct
- Mechanical: precise, local-first, instrument-like
- Opinionated: pay-once is a real stance, not a timid pricing option

## Voice rules

- Prefer first person when founder context matters
- Prefer concrete numbers over adjectives
- Acknowledge tradeoffs honestly
- No marketing-slop verbs like transform, unleash, elevate, game-changing
- No emoji in UI or marketing copy
- No overly clever copywriting
- Use short, direct, literal language
- Avoid filler subtext that repeats the section headline

## Current visual direction

The site is now more restrained than the original green-accent brief.
The homepage is the reference.
Secondary pages must align to it.

### What the site should feel like

- near-white
- sharp
- quiet
- product-first
- typographic
- confident
- lightly warm, not beige

### What the site should not feel like

- generic AI SaaS
- editorial cosplay
- luxury cosplay
- green-accented everywhere
- over-boxed
- noisy with separators and rules
- decorated just to look cool

## Palette

Use the current implementation as the real baseline.

Primary roles:
- background: almost-white, only slightly warm
- surface: white
- utility surface: very light neutral gray
- ink: off-black
- muted ink: soft gray
- borders: quiet ash gray
- accent: effectively neutral / black-led unless a very specific reason exists

Rules:
- do not drift into obvious beige or paper-stock warmth
- do not reintroduce strong green as a frequent UI accent
- green should not become the personality of the interface
- if an accent is not necessary, use ink or muted ink instead

## Typography

### Families
- Sans default: Geist / system sans behavior
- Serif accent: Instrument Serif only as a rare punctuation move
- Mono: system mono only when genuinely useful

### Rules
- Sans leads the system
- Serif is used sparingly, not as the default style of the site
- One serif move can make a section feel expensive; repeating it everywhere makes it fake
- Display headings should not end with decorative punctuation
- Internal punctuation is okay only when it improves cadence

### Where serif is allowed
- hero title emphasis like `<em>talking</em>`
- rare brand-moment titles like pricing / CTA / founder if truly earned
- not across every internal section title
- not as the default style of legal/help/SEO pages

## Layout rhythm

- prefer spacing over borders
- prefer one strong section idea over many weak ones
- avoid repeating the same card shell too often
- avoid symmetrical generic 3-card rows unless content truly needs it
- use asymmetry only when it earns clarity
- sections should breathe, but not feel empty

## Border and container rules

- Do not add borders to every section, every row, every footer strip, every card, every dropdown
- If spacing already separates content, skip the rule
- If a rule exists only because it was easy to add, remove it
- Avoid nested boxes inside boxes inside boxes
- Pricing, FAQ, footer, dropdowns, and help surfaces are the first places to watch for over-bordering

## Header rules

- top-of-page header should not have an underline border
- scrolled header can become compact and floating
- keep the non-sticky Download button visible and real
- remove unnecessary brand extras from the header
- hover menus should feel clean, not bordered and over-separated

## Hero rules

- hero should remain mostly typographic and product-first
- no stars / fake review tropes
- trust proof should stay quiet
- do not overload hero with icons or decorative junk
- use one serif accent at most, not multiple tricks

## CTA rules

- one centered composition is preferred
- headline should break into exactly two lines:
  - Stop typing.
  - Start talking.
- CTA should become stronger by proportion and composition, not by random dark slabs or fake UI props
- avoid extra artifact boxes unless they truly add proof

## Founder rules

- remove unnecessary heading chrome like “A note from the founder.” when it feels too literal
- keep founder block centered overall
- only the text inside the attribution block aligns left
- when a real founder photo is available, use it there first

## Testimonials rules

- prefer masonry/content-height over equal-height proof cards
- source icons are enough
- remove “via email” / “via GitHub” style clutter
- proof should feel believable, not marketed

## FAQ rules

- do not box every question
- numbering + spacing usually does enough
- only use rules when they genuinely improve scanability

## Footer rules

- keep it simple
- avoid double-border treatment
- footer is not where brand theater should happen

## Icons and visuals

Use icons and visual assets when they improve recognition, scanning, or proof.
Do not use them as filler.

Good uses:
- app-target logos/icons
- source markers in testimonial cards
- workflow step cues
- product proof
- founder photo when available

Bad uses:
- random hero icons
- decorative icon spam in compare/FAQ/footer nav
- icons added only to make something feel “cool”

## Eyebrow system

- Eyebrows should be quieter than before
- They should support section structure, not dominate it
- Avoid oversized square markers and loud accent behavior
- Use them once per section, not repeatedly inside the same scene
- Secondary pages should not overuse eyebrow treatment compared to the homepage

## Download button rule

- Download buttons no longer need arrow-icon sockets by default
- Prefer simpler buttons unless the icon adds actual clarity
- Do not keep icon containers just because they used to exist

## Secondary-page alignment rules

All secondary pages must inherit the homepage feel.
That means:
- more sans-led headings
- less decorative serif
- less accent/green usage
- less border noise
- calmer CTA treatment
- cleaner dropdowns and help/legal surfaces
- same button language and UI tone as the homepage

Secondary pages must not feel like a previous design era.

## Review checklist before shipping

- Is any border present only because it was easy to add?
- Is any copy trying too hard to sound smart?
- Is any subtext repeating the section headline?
- Did the CTA get stronger because of layout, not louder contrast?
- Did the header stay clean in both top and scrolled states?
- Did a dropdown gain unnecessary chrome?
- Did a proof area become more believable, not more marketed?
- Did serif get used sparingly enough?
- Did accent color stay restrained enough?
- Does this page still feel like the same site as the homepage?
