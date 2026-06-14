'use client';

import { BASE_PRICES, PLANS, PUBLIC_PLAN_KEYS, formatPrice, type PublicPlanKey } from '@/lib/pricing';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';

interface PricingCardsProps {
  affonsoReferral: string;
  referrer: string;
  eventPrefix?: string;
}

interface DeviceOption {
  key: PublicPlanKey;
  devices: number;
  productId: string | undefined;
}

const productIds: Record<PublicPlanKey, string | undefined> = {
  pro: process.env.NEXT_PUBLIC_PRO_PRODUCT_ID,
  plus: process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID,
  max: process.env.NEXT_PUBLIC_MAX_PRODUCT_ID,
};

const deviceOptions: DeviceOption[] = PUBLIC_PLAN_KEYS.map((key) => ({
  key,
  devices: PLANS[key].maxDevices,
  productId: productIds[key],
}));

const V2_PRICES: Record<PublicPlanKey, number> = {
  pro: 59,
  plus: 99,
  max: 149,
};

const includedFeatures = [
  'On-device dictation · offline by default',
  'Works in any app with a text cursor',
  'Global hotkey, push-to-talk, and toggle modes',
  'Audio and video file transcription',
  'Searchable local transcript history',
  'Cleaner emails, notes, and everyday writing',
  'macOS 13+ and Windows 10+',
  'Direct support from the founder',
] as const;

const roadmapFeatures = [
  'Voice translation',
  'Writing profiles',
  'Custom vocabulary',
  'Text replacements',
  'Reusable snippets',
  'Use a stronger machine on your network',
  'AI Agents & Automation',
] as const;

export default function PricingCards({
  affonsoReferral,
  referrer,
  eventPrefix = 'pricing',
}: PricingCardsProps) {
  const [selectedKey, setSelectedKey] = useState<PublicPlanKey>('plus');
  const fallbackOption = deviceOptions[1] as DeviceOption;
  const selected = deviceOptions.find((option) => option.key === selectedKey) ?? fallbackOption;

  const handleCheckout = (productId: string | undefined) => {
    if (!productId) return;

    const metadata: Record<string, string> = {};

    if (typeof window !== 'undefined' && window.openpanel?.getDeviceId) {
      const deviceId = window.openpanel.getDeviceId();
      if (deviceId) metadata.deviceId = deviceId;
    }

    if (affonsoReferral) metadata.affonso_referral = affonsoReferral;
    if (referrer) metadata.referrer = referrer;

    const metadataParam =
      Object.keys(metadata).length > 0
        ? `&metadata=${encodeURIComponent(JSON.stringify(metadata))}`
        : '';

    window.location.assign(`/api/checkout?products=${productId}${metadataParam}`);
  };

  return (
    <div className="rounded-3xl border border-editorial-line bg-white/82 p-4 shadow-sm backdrop-blur">
      <div className="grid gap-4 rounded-3xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-editorial-surface-2 p-6 md:p-8">
          <div>
            <div className="mb-5 text-sm text-editorial-ink-2">
              {`${selected.devices} ${selected.devices === 1 ? 'device' : 'devices'} · lifetime license`}
            </div>
            <p className="mb-10 text-sm font-semibold leading-relaxed text-editorial-ink">
              Pick 1, 2, or 4 devices. Pay once, keep using it.
            </p>

            <div className="text-center tracking-tight text-editorial-ink">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-editorial-ink">
                  Discounted for you
                </span>
                <span className="text-2xl font-semibold text-editorial-ink-3 line-through md:text-3xl">
                  {formatPrice(V2_PRICES[selected.key])}
                </span>
              </div>
              <span className="inline-flex items-end justify-center gap-3 leading-none">
                <span className="text-6xl font-semibold md:text-7xl">
                  {formatPrice(BASE_PRICES[selected.key])}
                </span>
                <span className="pb-1 text-base font-normal text-editorial-ink-3">/ once</span>
              </span>
            </div>
            </div>

          <div>
            <div className="overflow-hidden rounded-xl border border-editorial-line bg-editorial-surface-2 p-1.5">
              <div className="grid grid-cols-3 gap-1">
                {deviceOptions.map((option) => {
                  const active = option.key === selected.key;
                  return (
                    <button
                      key={option.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedKey(option.key)}
                      className={cn(
                        'rounded-lg px-3 py-3 text-center transition active:scale-95',
                        active
                          ? 'bg-editorial-ink text-white'
                          : 'text-editorial-ink-2 hover:bg-white hover:text-editorial-ink',
                      )}
                    >
                      <span className="block text-3xl font-semibold leading-none">{option.devices}</span>
                      <span className="mt-1 block text-xs font-medium uppercase tracking-widest">
                        {option.devices === 1 ? 'Device' : 'Devices'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-editorial-ink-3">
              Need more devices or buying for your team?{' '}
              <a
                href="mailto:support@voicetypr.com?subject=Team%20licensing"
                className="font-medium text-editorial-ink underline decoration-editorial-ink/25 underline-offset-4 transition hover:decoration-editorial-ink"
              >
                Contact us
              </a>
              .
            </p>
          </div>

          <div>
            <button
              onClick={() => handleCheckout(selected.productId)}
              data-track={`${eventPrefix}-plan-click`}
              data-track-plan={selected.key}
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-editorial-ink px-6 text-base font-semibold text-white transition hover:bg-black active:scale-95"
            >
              Buy once — {formatPrice(BASE_PRICES[selected.key])}
            </button>
            <p className="mt-3 text-center text-[13px] text-editorial-ink-3">
              Secure checkout · 7-day money-back guarantee · no subscription
            </p>
          </div>


        </div>

        <div className="flex h-full items-center p-2 md:p-4">
          <div className="w-full max-w-sm">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-editorial-ink">
              <Check className="h-4 w-4" />
              Everything included
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-editorial-ink-2">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-dashed border-editorial-line bg-editorial-surface-2 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-editorial-ink-3">
                Coming next
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-editorial-ink-3">
                Built on top of what you already own — included as we ship them.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {roadmapFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-full border border-editorial-line bg-white px-3 py-1 text-[11px] font-medium text-editorial-ink-2 shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
