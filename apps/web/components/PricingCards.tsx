'use client';

import { BASE_PRICES, PLANS, PUBLIC_PLAN_KEYS, formatPrice, type PublicPlanKey } from '@voicetypr/api-core/pricing';
import { productIds, redirectToCheckout } from '@/lib/checkout';
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
    redirectToCheckout(productId, { affonsoReferral, referrer });
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-4 shadow-sm">
      <div className="grid gap-4 rounded-3xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-muted p-6 md:p-8">
          <div>
            <div className="mb-5 text-sm text-muted-foreground">
              {`${selected.devices} ${selected.devices === 1 ? 'device' : 'devices'} · lifetime license`}
            </div>
            <p className="mb-10 text-sm font-semibold leading-relaxed text-foreground">
              Pick 1, 2, or 4 devices. Pay once, keep using it.
            </p>

            <div className="text-center tracking-tight text-foreground">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="text-sm font-semibold text-sage">
                  Discounted for you
                </span>
                <span className="text-2xl font-semibold text-muted-foreground line-through md:text-3xl">
                  {formatPrice(V2_PRICES[selected.key])}
                </span>
              </div>
              <span className="inline-flex items-end justify-center gap-3 leading-none">
                <span className="font-sans text-6xl font-bold tracking-tight md:text-7xl">
                  {formatPrice(BASE_PRICES[selected.key])}
                </span>
                <span className="pb-1 text-base font-normal text-muted-foreground">/ once</span>
              </span>
            </div>
            </div>

          <div>
            <div className="overflow-hidden rounded-xl border border-border bg-muted p-1.5">
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
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-card hover:text-foreground',
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
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              Need more devices or buying for your team?{' '}
              <a
                href="mailto:support@voicetypr.com?subject=Team%20licensing"
                className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-sage"
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
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
            >
              Buy once — {formatPrice(BASE_PRICES[selected.key])}
            </button>
            <p className="mt-3 text-center text-[13px] text-muted-foreground">
              Secure checkout · 7-day money-back guarantee · no subscription
            </p>
          </div>


        </div>

        <div className="flex h-full items-center p-2 md:p-4">
          <div className="w-full max-w-sm">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-foreground">
              <Check className="h-4 w-4 text-sage" />
              Everything included
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-dashed border-border bg-muted p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Coming next
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                Built on top of what you already own — included as we ship them.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {roadmapFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm"
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
