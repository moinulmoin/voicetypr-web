import { cookies, headers } from "next/headers";
import PricingCards from "@/components/PricingCards";

/**
 * Landing-page pricing section.
 *
 * Server component — reads the Affonso referral cookie + referer header, then
 * hands them to the client-side PricingCards for Polar checkout with proper
 * attribution metadata.
 */
export default async function Pricing() {
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get("affonso_referral")?.value || "";
  const referrer = (await headers()).get("referer") || "";

  return (
    <section className="ed-section" id="pricing">
      <div className="ed-container">
        <span className="ed-eyebrow">pricing · one-time, lifetime</span>
        <h2 className="mb-3 text-5xl leading-[1] tracking-tight md:text-6xl">
          Pay once. <em>Yours forever.</em>
        </h2>
        <p className="mb-12 max-w-[560px] text-[17px] leading-relaxed text-editorial-ink-2">
          No subscription. No update locks. No surprise email in 2027 saying
          we&rsquo;re being acquired and prices are going up. Try free for 3
          days. No card required.
        </p>

        <div className="mx-auto max-w-5xl">
          <PricingCards
            affonsoReferral={affonsoReferral}
            referrer={referrer}
            eventPrefix="pricing"
          />
        </div>

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-editorial-ink-3">
          one payment · all future updates · 7-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
