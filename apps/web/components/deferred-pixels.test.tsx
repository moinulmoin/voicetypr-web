// @vitest-environment jsdom

import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { DeferredPixels } from './deferred-pixels';

const CONSENT_COOKIE = 'vt_consent';
(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;


function clearCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function setMarketingConsent() {
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify({ necessary: true, marketing: true, timestamp: Date.now() })
  )}; path=/`;
}

function renderDeferredPixels() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<DeferredPixels />);
  });

  return root;
}

describe('DeferredPixels', () => {
  let root: Root | undefined;

  beforeEach(() => {
    clearCookie(CONSENT_COOKIE);
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    window.requestIdleCallback = ((callback: IdleRequestCallback) => {
      callback({ didTimeout: false, timeRemaining: () => 0 });
      return 1;
    }) as typeof window.requestIdleCallback;
    window.cancelIdleCallback = vi.fn() as typeof window.cancelIdleCallback;
    window.affonsoConsentGranted = vi.fn(() => Promise.resolve(true));
    delete window.gtag;
    window.dataLayer = [];
  });

  afterEach(() => {
    if (root) {
      act(() => root?.unmount());
      root = undefined;
    }
    clearCookie(CONSENT_COOKIE);
    vi.restoreAllMocks();
  });

  it('does not load marketing scripts before consent', () => {
    root = renderDeferredPixels();

    expect(document.querySelector('script[data-voicetypr-affonso="true"]')).toBeNull();
    expect(document.querySelector('script[data-voicetypr-gtm="true"]')).toBeNull();
    expect(window.dataLayer).toEqual([]);
    expect(window.gtag).toBeUndefined();
    expect(window.affonsoConsentGranted).not.toHaveBeenCalled();
  });

  it('loads and grants consent when existing marketing consent exists', () => {
    setMarketingConsent();

    root = renderDeferredPixels();

    expect(document.querySelector('script[data-voicetypr-affonso="true"]')).not.toBeNull();
    expect(document.querySelector('script[data-voicetypr-gtm="true"]')).not.toBeNull();
    expect(
      document.querySelector<HTMLScriptElement>('script[data-voicetypr-affonso="true"]')
        ?.dataset.cookie_duration
    ).toBe('30');
    expect(window.dataLayer[1]).toEqual([
      'consent',
      'update',
      {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      },
    ]);
    expect(window.affonsoConsentGranted).toHaveBeenCalledTimes(1);
  });

  it('loads and grants consent after consent-changed marketing event', () => {
    root = renderDeferredPixels();

    act(() => {
      window.dispatchEvent(
        new CustomEvent('voicetypr:consent-changed', {
          detail: { necessary: true, marketing: true, timestamp: Date.now() },
        })
      );
    });

    expect(document.querySelector('script[data-voicetypr-affonso="true"]')).not.toBeNull();
    expect(document.querySelector('script[data-voicetypr-gtm="true"]')).not.toBeNull();
    expect(window.dataLayer).toContainEqual([
      'consent',
      'update',
      {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      },
    ]);
    expect(window.affonsoConsentGranted).toHaveBeenCalledTimes(1);
  });
});
