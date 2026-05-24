import { cookies, headers } from 'next/headers';
import PricingCards from '@/components/PricingCards';

export default async function Pricing() {
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get('affonso_referral')?.value || '';
  const referrer = (await headers()).get('referer') || '';

  return (
    <section className="ed-section" id="pricing">
      <div className="ed-container">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Pay once, keep <em>writing</em>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
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

      </div>
    </section>
  );
}
