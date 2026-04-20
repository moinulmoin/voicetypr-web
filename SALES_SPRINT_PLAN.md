# VoiceTypr Sales Sprint — 6-Week Plan to $100k Run-Rate

Owner: Moin
Sprint start: 2026-04-18
Revenue target: $100k in 6 months = **$16.7k/month average**

This doc **supersedes** `MARKETING_STRATEGY.md` (8mo old) and `LANDING_PAGE_OPTIMIZATION.md` (7mo old). Those docs were aspirational, not implemented — no SEO pages shipped, no single-offer pricing change made, no repositioning done. This plan takes what's directionally right from both and commits to a dependency-correct execution order.

## Diagnosis (verified against primary sources)

The problem is not marketplaces. At current $35/$56/$98 AOV, hitting $100k requires too many individual buyers. The real constraints, in priority order:

1. **No tier-awareness in the product.** Polar knows the plan at checkout. It's persisted nowhere. The validate API returns `{ valid: boolean }` only. The desktop app hardcodes `license_type: "pro"` (`voicetypr/src-tauri/src/commands/license.rs:261,333`). Plus/Max customers today get the same in-app experience as Pro. Team packs are literally unshippable until this data model exists.
2. **Plus's 2-device limit may be silently unenforced.** `voicetypr-web/lib/constants.ts:6-8` defines `devicesPerLicense: 1` and `devicesPerMaxLicense: 4`. There is no Plus constant. How are Plus activations capped today? Unclear.
3. **Permanent 30% "flash sale"** (`voicetypr-web/lib/pricing.ts:16`) with countdown timer that resets on revisit. Sale is the real price. Diminishing return.
4. **SEO keywords exist on `/download` metadata** ("superwhisper alternative", "wispr flow alternative", "Cursor voice typing") **with zero route files**. Keywords alone don't rank.
5. **Windows installer is unsigned** (`voicetypr/src-tauri/tauri.conf.json:64` uses ad-hoc `-`). "Unknown Publisher" warning kills conversion. Fixing this is $120–800/yr depending on cert path.
6. **Affiliate presence is a footer link to affonso.io.** No landing page, no commission-tier clarity, no creator kit. Creator outreach converts poorly from cold.

## Competitive position (verified 2026-04-18)

| Product | Model | Lifetime option? |
|---|---|---|
| Wispr Flow | $15/mo monthly, $12/mo annual | **No** |
| Aqua Voice | $8/mo annual | **No** |
| Superwhisper | $8.49/mo, $84.99/yr, **$249.99 lifetime** | Yes (cross-platform Mac/Win/iOS) |
| VoiceTypr | $35/$56/$98 lifetime | Yes, cheapest in category |

Correct framing: **"cheapest offline lifetime voice-to-text"** — not "the only lifetime." VoiceTypr Max at $98 is 61% cheaper than Superwhisper Lifetime at $249.99. That's a defensible edge.

## The Math

Plan splits revenue across four channels. Assumes pricing stays at $35/$56/$98 Weeks 1–3, moves to list-price = current-sale-price ($50/$80/$140) by Week 4 once the "fake sale" is retired.

| Channel | Monthly target | Revenue |
|---|---|---|
| Direct sales (website) | 90 × $65 avg | $5,850 |
| Affiliate/creator driven | 60 × $65, net 30% commission | $2,730 net |
| Team packs | 6 × $499 | $2,994 |
| SEO-page driven | 50 × $70 avg | $3,500 |
| Marketplace overflow (optional, Month 4+) | 40 × $30 net | $1,200 |
| **Total** | | **~$16.3k/mo** |

If any one channel underperforms by 50%, the others cover. No channel alone is load-bearing. That's the point of the mix.

## Sequencing (dependency-correct)

Execution order matters. This is not the plan's original order. It's the order that unblocks the next thing.

### Week 1 — Sales-direct assets that ship without backend changes

- [ ] `/affiliate` page (tiered commissions 25/35/40%, creator kit, apply CTA) — **unblocks creator outreach**
- [ ] `/wispr-flow-alternative` SEO page — **unblocks organic search capture**
- [ ] This plan doc shipped and old docs marked superseded

**Moin ships in parallel:** start creator outreach list (20 names), draft 30/90s demo scripts, pick a code-signing cert vendor.

### Week 2 — Tier plumbing + trust foundation

Everything below is a single vertical slice that must ship together:

- [ ] Prisma: add `plan: enum`, `maxDevices: int` on License
- [ ] Polar webhook: map `productId` → plan, persist on `order.created`
- [ ] `/api/v1/license/validate`: return `plan` and `maxDevices`
- [ ] Desktop `license.rs`: stop hardcoding `"pro"`, read from API
- [ ] Desktop `AccountSection.tsx`: show actual tier
- [ ] Windows code-signing CI scaffold (ready for cert arrival)

**Moin ships in parallel:** buy code-signing cert (Azure Trusted Signing if Ideaplexa is 3+ yrs old, else Sectigo OV), record 3 demo videos, send first 10 creator outreach emails.

### Week 3 — Pricing fix + more SEO

- [ ] Retire the 30% "flash sale" infra (decide: real time-bounded sales, or set list = current sale, delete countdown)
- [ ] `/superwhisper-alternative` SEO page
- [ ] `/voice-input-for-cursor` use-case page
- [ ] In-app upgrade CTA ("You have Pro → Upgrade to Plus")

**Moin:** approve the pricing-fix decision, ship 10 more creator outreach emails, run ProductHunt prep checklist.

### Week 4 — Team packs launch

- [ ] Create Team 10 ($499) + Team 25 ($999) products in Polar
- [ ] Prisma: add `Team` model, migrate data
- [ ] `/teams` page — B2B positioning, one invoice, lifetime, no subscription
- [ ] Team checkout flow validated end-to-end

**Moin:** identify 20 target accounts (AI agencies, dev shops, startup studios), draft cold-email template, start outreach.

### Week 5 — Distribution: Microsoft Store + remaining SEO

- [ ] `/aqua-voice-alternative` + `/offline-dictation-app-for-windows` SEO pages
- [ ] Microsoft Store: add `msix` target, submit for review (approval takes 1–2 weeks so start now)
- [ ] In-app affiliate entry point ("Refer VoiceTypr, earn 25%")

**Moin:** Product Hunt re-launch with "voice input for AI builders" angle, respond to review comments.

### Week 6 — Polish + decide marketplaces

- [ ] Analytics review: which SEO pages converted, which creators landed sales, which tier is growing fastest
- [ ] **Decide** on AppSumo/DealFuel based on Weeks 1–5 data — only if direct channels haven't met $8k+/mo run-rate. Marketplace is backup fuel, not primary.
- [ ] Setapp application — **only if** direct Mac channel is saturating (Setapp cannibalizes lifetime sales)

## Decisions already made

1. **Keep the tier ladder (Pro/Plus/Max), add Team packs.** Not going to the single-offer simplification from `LANDING_PAGE_OPTIMIZATION.md`. The ladder is already shipping, customers are buying it, retrofitting to a single offer would alienate existing Plus/Max buyers.
2. **Kill the "flash sale" dark pattern by Week 3.** Either make sales real and time-bounded, or make current sale price the list price. A permanent 30% "sale" is a trust cost, not a conversion lever.
3. **Free-download + license activation for Microsoft Store.** Not Store-paid. Keeps own-commerce (100% revenue), preserves one-license-across-Mac-Windows story.
4. **Deprioritize Setapp.** A Setapp user is a lost $98–140 lifetime sale. Revisit only when direct-Mac channel is saturating.
5. **Marketplaces (AppSumo/DealFuel/PitchGround) are overflow, not strategy.** Decision deferred to Week 6. DealMirror is dead on arrival at $50 cap.

## Split of ownership

**Claude (code-side):**
- All pages in `voicetypr-web` (/affiliate, /teams, SEO pages)
- Prisma schema + migrations
- Polar webhook wiring
- License API response shape
- Desktop app tier plumbing
- Windows signing CI scaffold
- `tauri.conf.json` MSIX config

**Moin (external):**
- Creator outreach (actual emails, calls, DMs)
- Code-signing cert purchase + vendor eligibility check
- Polar product creation (Team 10, Team 25 SKUs, pricing update)
- Product Hunt re-launch
- Review/testimonial capture
- Target-account list for Team sales
- Microsoft Store account setup (one-time)
- Setapp/AppSumo applications (deferred)

## Factual claims I made that you should verify yourself

- Azure Trusted Signing eligibility requires company 3+ yrs old (source: Microsoft docs, confirm for Ideaplexa LLC before buying).
- Polar's webhook payload shape for `order.created` includes `productId` and `metadata` (source: @polar-sh/sdk typings — verify by logging a real order before wiring the persist logic).
- ~~Affonso supports per-product commission rates (source: Affonso docs — confirm they can do 25/35/40% tiers without custom engineering).~~ **VERIFIED 2026-04-18:** Affonso is the locked-in affiliate platform. All three tiers (25% default group rate, 35% via individual commission rate with `incentive_length: time_limited` + `length_value: 60 days`, 40% via short-duration individual override for launch-week partners) are natively supported. Per-product rates (higher % on Max) also native. Unique coupon codes per affiliate: native. Polar integration: native (already wired via `affonso_referral` metadata in `components/PricingCards.tsx:80-91`). Cookie window: program-configurable 1–365 days. Affonso subscription cost: $15–$149/mo depending on plan tier — a fixed operational cost to budget for.

## What would make me stop this plan and restart

- Discovery that Polar doesn't pass `productId` on the webhook in a usable form → re-architect tier persistence via checkout metadata.
- Ideaplexa LLC can't get Azure Trusted Signing AND EV cert cost exceeds budget → defer Microsoft Store to Month 3+, ship unsigned with a prominent trust section instead.
- Creator outreach in Week 1–2 gets 0% response rate → pause outreach work, rebuild the angle before scaling.

---

Live status in `todo://` task list. Revenue tracked weekly against $16.7k/mo target.
