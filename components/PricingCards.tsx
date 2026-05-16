'use client';

import { BASE_PRICES, formatPrice, type PlanKey } from '@/lib/pricing';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useState } from 'react';

interface PricingCardsProps {
  affonsoReferral: string;
  referrer: string;
  eventPrefix?: string;
}

interface DeviceOption {
  key: PlanKey;
  devices: number;
  productId: string | undefined;
}

const deviceOptions: DeviceOption[] = [
  { key: 'pro', devices: 1, productId: process.env.NEXT_PUBLIC_PRO_PRODUCT_ID },
  { key: 'plus', devices: 2, productId: process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID },
  { key: 'max', devices: 4, productId: process.env.NEXT_PUBLIC_MAX_PRODUCT_ID },
  { key: 'team', devices: 10, productId: process.env.NEXT_PUBLIC_TEAM_PRODUCT_ID },
];

const features = [
  'Local/offline transcription models',
  'Faster, smoother local performance',
  'Works anywhere you type',
  'AI formatting with your own API key',
  'macOS 13+ and Windows 10+',
  'Lifetime updates included',
  'Direct support from the founder',
];

export default function PricingCards({
  affonsoReferral,
  referrer,
  eventPrefix = 'pricing',
}: PricingCardsProps) {
  const [selectedKey, setSelectedKey] = useState<PlanKey>('plus');
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
        <div className="flex flex-col rounded-2xl bg-editorial-surface-2 p-6 md:p-8">
          <div className="mb-5 text-sm text-editorial-ink-2">
            {selected.devices} {selected.devices === 1 ? 'device' : 'devices'} · lifetime license
          </div>

          <div className="mb-6 text-6xl font-semibold tracking-tight text-editorial-ink md:text-7xl">
            {formatPrice(BASE_PRICES[selected.key])}
            <span className="ml-3 text-base font-normal text-editorial-ink-3">/ once</span>
          </div>

          <div className="mt-auto overflow-hidden rounded-xl border border-editorial-line bg-editorial-surface-2 p-1.5">
            <div className="grid grid-cols-4 gap-1">
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
                      {option.devices === 1 ? 'device' : 'devices'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => handleCheckout(selected.productId)}
            data-umami-event={`${eventPrefix}-plan-click`}
            data-umami-event-plan={selected.key}
            data-track={`${eventPrefix}-plan-click`}
            data-track-plan={selected.key}
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition hover:bg-black active:scale-95 sm:w-auto"
          >
            Get VoiceTypr for lifetime
          </button>
          <p className="mt-3 text-center text-[13px] text-editorial-ink-3">
            Secure checkout · 7-day money-back guarantee
          </p>


        </div>

        <div className="flex h-full items-center p-2 md:p-4">
          <div className="w-full max-w-sm">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-editorial-ink">
              <Check className="h-4 w-4" />
              Everything included
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-editorial-ink-2">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-editorial-ink" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
