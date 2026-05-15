import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { homepageDiscoveryLinks, homepageProofTracks } from './seo-discovery';
import { seoPages } from './seo-pages';
import { getAllUseCases } from './use-cases';

const repoRoot = process.cwd();

function flattenMarketingCopy(): string {
  return JSON.stringify({
    homepageDiscoveryLinks,
    homepageProofTracks,
    seoPages,
    useCases: getAllUseCases(),
  });
}

describe('marketing content guardrails', () => {
  it('keeps accessibility and Windows claims defensible', () => {
    const copy = flattenMarketingCopy();

    expect(copy).not.toContain('Yes — 100%');
    expect(copy).not.toContain('100% locally');
    expect(copy).not.toContain('No cloud connection needed ever');
    expect(copy).not.toContain('More accurate than Dragon');
    expect(copy).not.toContain('~5× faster than typing');
    expect(copy).not.toContain('leaky bucket');
    expect(copy).not.toContain('disabled users');
  });

  it('publishes AI-readable product context files', () => {
    const requiredFiles = ['llms.txt', 'pricing.md', 'accessibility.md', 'windows-dictation.md'];

    for (const file of requiredFiles) {
      const filePath = join(repoRoot, 'public', file);
      expect(existsSync(filePath), `${file} should exist in public/`).toBe(true);
      expect(readFileSync(filePath, 'utf8').trim().length, `${file} should not be empty`).toBeGreaterThan(300);
    }
  });
});
