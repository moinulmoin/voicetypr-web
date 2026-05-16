import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { downloadDiscoveryLinks, getRelatedGuidesForUseCase, offlineWindowsRelatedGuides, voiceTypingRelatedGuides } from './seo-discovery';
import { alternativePages, seoPages } from './seo-pages';
import { getAllUseCases } from './use-cases';

const repoRoot = process.cwd();
const marketingSourceFiles = [
  'app/components/sections/Compare.tsx',
  'app/components/sections/Features.tsx',
  'app/components/sections/HowItWorks.tsx',
  'app/components/sections/Outcomes.tsx',
  'app/layout.tsx',
  'app/wispr-flow-alternative/page.tsx',
  'app/aqua-voice-alternative/page.tsx',
  'components/PricingCards.tsx',
  'public/llms.txt',
  'public/pricing.md',
  'public/accessibility.md',
  'public/windows-dictation.md',
];

const bannedFragments = [
  'Yes — 100%',
  '100% locally',
  'No cloud connection needed ever',
  'More accurate than Dragon',
  '~5× faster than typing',
  'leaky bucket',
  'disabled users',
  'Your voice never leaves your device',
  'your voice never touches a cloud server',
  'No cloud, no logs, nothing to leak',
  'nothing leaves your laptop',
  'Audio uploaded',
  '10x cheaper than Dragon',
  'raw audio local by default',
  'Raw audio',
];

const bannedPatterns = [
  /\b5×\b/,
  /fully offline/i,
  /more accurate than Dragon/i,
  /no cloud ever/i,
];


function flattenMarketingCopy(): string {
  const structuredCopy = JSON.stringify({
    downloadDiscoveryLinks,
    offlineWindowsRelatedGuides,
    voiceTypingRelatedGuides,
    seoPages,
    alternativePages,
    useCases: getAllUseCases(),
  });

  const sourceCopy = marketingSourceFiles
    .map((file) => readFileSync(join(repoRoot, file), 'utf8'))
    .join('\n');

  return `${structuredCopy}\n${sourceCopy}`;
}

describe('marketing content guardrails', () => {
  it('keeps accessibility and Windows claims defensible', () => {
    const copy = flattenMarketingCopy();

    for (const fragment of bannedFragments) {
      expect(copy).not.toContain(fragment);
    }

    for (const pattern of bannedPatterns) {
      expect(copy).not.toMatch(pattern);
    }
  });

  it('gives every best page buyer decision depth', () => {
    for (const page of seoPages) {
      expect(page.decisionSupport?.searchIntent, `${page.slug} should define search intent`).toBeTruthy();
      expect(page.decisionSupport?.bestFor.length, `${page.slug} should define best-for buyers`).toBeGreaterThanOrEqual(3);
      expect(page.decisionSupport?.notFor.length, `${page.slug} should define not-for buyers`).toBeGreaterThanOrEqual(2);
      expect(page.decisionSupport?.decisionCriteria.length, `${page.slug} should define decision criteria`).toBeGreaterThanOrEqual(3);
      expect(page.decisionSupport?.competitorNotes.length, `${page.slug} should define competitor notes`).toBeGreaterThanOrEqual(3);
      expect(page.decisionSupport?.faq.length, `${page.slug} should define buyer FAQs`).toBeGreaterThanOrEqual(3);
    }
  });

  it('maps every use case page to related guides', () => {
    for (const useCase of getAllUseCases()) {
      expect(getRelatedGuidesForUseCase(useCase.slug).length, `${useCase.slug} should have related guides`).toBeGreaterThan(0);
    }
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
