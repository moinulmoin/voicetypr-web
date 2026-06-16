// @vitest-environment jsdom

import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import CookieConsent from './cookie-consent';

const CONSENT_COOKIE = 'vt_consent';
const GEO_COOKIE = 'vt_geo_requires_consent';
(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function clearCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match && match[2] ? decodeURIComponent(match[2]) : null;
}

function renderCookieConsent() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<CookieConsent />);
  });

  return root;
}

describe('CookieConsent', () => {
  let root: Root | undefined;

  beforeEach(() => {
    document.body.innerHTML = '';
    clearCookie(CONSENT_COOKIE);
    clearCookie(GEO_COOKIE);
  });

  afterEach(() => {
    if (root) {
      act(() => root?.unmount());
      root = undefined;
    }
    clearCookie(CONSENT_COOKIE);
    clearCookie(GEO_COOKIE);
    vi.restoreAllMocks();
  });

  it('does not server-render a dead dismiss button before hydration', () => {
    expect(renderToString(<CookieConsent />)).not.toContain('Okay');
  });

  it('hides immediately and stores marketing consent when accepted', () => {
    const consentChanged = vi.fn();
    window.addEventListener('voicetypr:consent-changed', consentChanged);

    root = renderCookieConsent();
    const button = document.querySelector<HTMLButtonElement>('button');

    expect(button?.textContent).toBe('Okay');

    act(() => {
      button?.click();
    });

    expect(document.querySelector('button')).toBeNull();
    expect(JSON.parse(getCookie(CONSENT_COOKIE) ?? '{}')).toMatchObject({
      necessary: true,
      marketing: true,
    });
    expect(consentChanged).toHaveBeenCalledTimes(1);

    window.removeEventListener('voicetypr:consent-changed', consentChanged);
  });

  it('auto-consents without showing the banner when geo does not require consent', () => {
    document.cookie = `${GEO_COOKIE}=false; path=/`;

    root = renderCookieConsent();

    expect(document.querySelector('button')).toBeNull();
    expect(JSON.parse(getCookie(CONSENT_COOKIE) ?? '{}')).toMatchObject({
      necessary: true,
      marketing: true,
    });
  });
});
