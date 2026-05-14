# VoiceTypr Design Working Notes

This file records concrete design learnings from review rounds so future changes do not repeat the same mistakes.

The durable visual brief remains `.impeccable.md`.
This file is the shorter feedback log for active landing-page decisions.

## Current decisions

- Keep the landing page light-mode-first and only lightly warm.
  - Do not drift into beige or obviously warm paper.
  - Prefer near-neutral off-white backgrounds and quiet ash borders.
- Prefer spacing and rhythm over border noise.
  - Do not add borders to every section, every row, or every footer divider by default.
  - If spacing already separates elements, skip the rule.
- Avoid clever copywriting.
  - No lines like "without the daily rental".
  - No explanatory right-column filler text unless it adds something concrete.
  - Use short, direct, literal copy.
- CTA direction:
  - One centered composition is preferred over split layouts or fake product artifacts.
  - Headline should break into exactly two lines:
    - Stop typing.
    - Start talking.
  - Keep it strong, but not dramatic, glossy, or dark for the sake of contrast.
- Header direction:
  - At the top of the page, no underline border.
  - On scroll, compact floating header is good.
  - Keep the non-sticky Download button visible.
  - Remove unnecessary brand extras like `by Ideaplexa` in the header.
  - Use cases nav can open on hover, but the trigger itself should not look bordered.
  - The dropdown should feel clean, not boxed with multiple separators and borders.
- Hero proof row:
  - Remove five-star badges.
  - Keep proof quieter: initials, short line of trust, no review-star cliché.
- Founder note:
  - Remove the heading `A note from the founder.`
  - Keep the signature block centered overall.
  - Only the text inside the signature block should align left.
- Testimonials:
  - Prefer content-height masonry over equal-height cards.
  - Top-right source icons are enough; remove `via email` / `via GitHub` labels.
- FAQ:
  - Do not box every item.
  - Numbering + spacing is enough unless a divider is truly needed.
- Footer:
  - Avoid double-border treatment.
  - Keep it simple and calm.

## Review checklist before shipping design changes

- Is any border present only because it was easy to add?
- Is any copy trying too hard to sound smart?
- Is any subtext repeating what the section already says?
- Did the CTA get stronger because of layout, or just louder because of contrast?
- Did the header become cleaner in both top and scrolled states?
- Did a dropdown/menu gain unnecessary border chrome?
- Did a proof/testimonial area become more believable, not more "marketed"?
