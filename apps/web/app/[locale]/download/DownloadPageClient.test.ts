import { describe, expect, it } from 'vitest';
import { getDetectedDownloadOptionId } from './DownloadPageClient';

const options = [
  { id: 'macos-silicon' },
  { id: 'macos-intel' },
  { id: 'windows' },
];

describe('getDetectedDownloadOptionId', () => {
  it('prefers the Windows installer for Windows user agents', () => {
    expect(getDetectedDownloadOptionId(options, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)')).toBe('windows');
  });

  it('defaults macOS user agents to the Apple Silicon installer', () => {
    expect(getDetectedDownloadOptionId(options, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)')).toBe('macos-silicon');
  });

  it('does not select a platform when that installer is unavailable', () => {
    expect(getDetectedDownloadOptionId([{ id: 'macos-silicon' }], 'Mozilla/5.0 (Windows NT 10.0)')).toBeNull();
  });
});
