import { afterEach, describe, expect, it } from 'vitest';
import { detectOs, downloadHrefForOs } from './use-os';

const realUserAgent = navigator.userAgent;

function setUserAgent(ua: string) {
  Object.defineProperty(navigator, 'userAgent', { value: ua, configurable: true });
}

afterEach(() => {
  Object.defineProperty(navigator, 'userAgent', { value: realUserAgent, configurable: true });
});

describe('detectOs', () => {
  it('detects Windows', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    expect(detectOs()).toBe('windows');
  });

  it('detects macOS desktop', () => {
    setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15');
    expect(detectOs()).toBe('mac');
  });

  it('treats iPhone/iPad as mac (Apple build)', () => {
    setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15');
    expect(detectOs()).toBe('mac');
  });

  it('falls back to other for Linux/Android/unknown', () => {
    setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36');
    expect(detectOs()).toBe('other');
  });

  it('prefers Windows even when the UA also mentions a token, never misreads it as mac', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36');
    expect(detectOs()).toBe('windows');
  });
});

describe('downloadHrefForOs', () => {
  it('routes each OS to the correct /download build (explicit param for detected platforms)', () => {
    expect(downloadHrefForOs('windows')).toBe('/download?platform=windows');
    expect(downloadHrefForOs('mac')).toBe('/download?platform=macos-silicon');
    expect(downloadHrefForOs('other')).toBe('/download');
  });
});
