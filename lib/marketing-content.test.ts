import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { downloadDiscoveryLinks, getContextualUseCaseLinks, getRelatedGuidesForUseCase, offlineWindowsRelatedGuides, voiceTypingRelatedGuides } from './seo-discovery';
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
  'app/voicetyper/page.tsx',
  'app/best/[slug]/page.tsx',
  'app/alternative/[slug]/page.tsx',
  'components/PricingCards.tsx',
  'public/llms.txt',
  'public/pricing.md',
  'public/accessibility.md',
  'public/windows-dictation.md',
  'app/hipaa-compliant-dictation/page.tsx',
  'app/zero-knowledge/page.tsx',
  'app/air-gapped/page.tsx',
  'app/gdpr-compliant/page.tsx',
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
  '10 devices',
  '10 machines',
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
      expect(page.decisionSupport?.decisionCriteria.length, `${page.slug} should define decision criteria`).toBeGreaterThanOrEqual(3);
      expect(page.decisionSupport?.competitorNotes.length, `${page.slug} should define competitor notes`).toBeGreaterThanOrEqual(3);
      expect(page.decisionSupport?.faq.length, `${page.slug} should define buyer FAQs`).toBeGreaterThanOrEqual(3);
    }
  });

  it('gives every alternative page switch guidance', () => {
    for (const page of alternativePages) {
      expect(page.switchGuide, `${page.slug} should define switch guidance`).toBeDefined();
      expect(page.switchGuide?.voiceTyprIf.length, `${page.slug} should define Voicetypr fit`).toBeGreaterThanOrEqual(2);
      expect(page.switchGuide?.otherIf.length, `${page.slug} should define incumbent fit`).toBeGreaterThanOrEqual(1);
      expect(page.switchGuide?.notes?.length, `${page.slug} should define comparison notes`).toBeGreaterThanOrEqual(2);
    }
  });

  it('maps every use case page to related guides', () => {
    for (const useCase of getAllUseCases()) {
      expect(getRelatedGuidesForUseCase(useCase.slug).length, `${useCase.slug} should have related guides`).toBeGreaterThan(0);
    }
  });

  it('gives every use case page contextual in-body links', () => {
    for (const useCase of getAllUseCases()) {
      const links = getContextualUseCaseLinks(useCase.slug);

      expect(links.length, `${useCase.slug} should have contextual links`).toBeGreaterThan(0);
      for (const link of links) {
        expect(link.href, `${useCase.slug} contextual link should point to a use case`).toMatch(/^\/use-cases\//);
        expect(link.context.trim().length, `${useCase.slug} contextual link should explain the fit`).toBeGreaterThan(10);
      }
    }
  });

  it('keeps the VoiceTyper capture page aligned with GSC queries', () => {
    const page = readFileSync(join(repoRoot, 'app/voicetyper/page.tsx'), 'utf8');

    expect(page).toContain('voice typer app');
    expect(page).toContain('voicetyper pricing');
    expect(page).toContain('voicetyper cost');
    expect(page).toContain('FAQPage');
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
