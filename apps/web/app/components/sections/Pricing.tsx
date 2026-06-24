import { cookies, headers } from 'next/headers';
import PricingCards from '@/components/PricingCards';
import { Section, Container } from '@/components/marketing/section';

export default async function Pricing() {
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get('affonso_referral')?.value || '';
  const referrer = (await headers()).get('referer') || '';

  return (
    <Section id="pricing">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-balance font-sans text-[clamp(2.25rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-foreground">
            Pay{" "}
            <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              once
            </em>
            , keep{" "}
            <em className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              writing
            </em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose 1, 2, or 4 devices. Lifetime license. No subscription.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-5xl">
          <PricingCards
            affonsoReferral={affonsoReferral}
            referrer={referrer}
            eventPrefix="pricing"
          />
        </div>
      </Container>
    </Section>
  );
}
