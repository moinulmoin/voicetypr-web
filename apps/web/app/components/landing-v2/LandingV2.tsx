'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import {
  BASE_PRICES,
  formatPrice,
  PUBLIC_PLAN_KEYS,
  type PublicPlanKey,
} from '@voicetypr/api-core/pricing';
import { productIds, redirectToCheckout } from '@/lib/checkout';
import { downloadHrefForOs, useDetectedOs } from '@/lib/use-os';
import { Bi, injectBrandIcons } from './brand-icons';
import { Brandmark } from '@/components/marketing/brandmark';
import DownloadButton from './DownloadButton';
import type { ReactNode } from 'react';

interface LandingV2Props {
  affonsoReferral: string;
  referrer: string;
  footer: ReactNode;
}

/* ---------- Static content ---------- */

const TWEETS = [
  { c: "I switched from Wispr Flow because I didn't want another monthly subscription, and I needed something that works on both Mac and Windows. Voicetypr ticks both boxes. One payment, no ongoing costs, exactly what I was looking for.", n: 'Catherine E.', sub: 'Email', src: 'gmail', col: '#8b6f7d' },
  { c: 'This is an amazing product. I purchased the max plan to show my appreciation for you not being a SaaS. Thanks again for a great product.', n: 'James H.', sub: 'Email', src: 'gmail', col: '#54514c' },
  { c: "The app is incredible, I did not expect it to be so fast while fully offline! I don't know how you did it, but you did an amazing job!", n: 'Stephen K. L.', sub: 'GitHub', src: 'github', col: '#6f7d8b' },
  { c: 'Coming from Wispr Flow, it makes a lot of sense, doing faster transcription using local AI models and having full privacy at this price. I really love using this.', n: 'Alex B.', sub: 'Email', src: 'gmail', col: '#b08760' },
  { c: "I've really fallen in love with your app. Real privacy on Windows and the lightweight feel of the software is just great.", n: 'Mathieu B.', sub: 'Email', src: 'gmail', col: '#7d8b6f' },
  { c: "I'm really impressed with Voicetypr on Windows. It's a game-changer for my workflow, and I'd happily purchase a license soon.", n: 'Andreas K.', sub: 'Email', src: 'gmail', col: '#a3845c' },
  { c: "I love the app. It's really useful. I love the fact that you can select your own models. It's well designed and overall works really well. Kudos.", n: 'Mark V.', sub: 'Email', src: 'gmail', col: '#6f7d8b' },
  { c: 'It works quite well. I went ahead and bought the license because I want to support you. The price is reasonable and I want to thank you.', n: 'Wtin J.', sub: 'Email', src: 'gmail', col: '#8b857b' },
  { c: "Great software for local voice transcription. So you can accelerate your speed at working / coding. It's available for Windows and Mac.", n: 'Alaska', sub: '@alaska12345_', src: 'x', col: '#54514c' },
  { c: 'Vibe coders gonna love this.', n: 'Paul Li', sub: '@PaulTheLi', src: 'x', col: '#18181a' },
] as const;

const NAV = [
  { href: '/#features', key: 'features' },
  { href: '/#pricing', key: 'pricing' },
  { href: '/#faq', key: 'faq' },
  { href: '/use-cases', key: 'useCases' },
] as const;

// Footer columns now live in the shared SiteFooter (passed in via the `footer` prop from page.tsx).

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function LandingV2({ affonsoReferral, referrer, footer }: LandingV2Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  // Default to the lowest tier so the first price shown is $39 (matches the
  // "from $39" framing used across the SEO pages) — lower anchor, more clicks.
  const [plan, setPlan] = useState<PublicPlanKey>('pro');
  const [demoOpen, setDemoOpen] = useState(false);
  const os = useDetectedOs();
  const t = useTranslations('Home');
  const tNav = useTranslations('Nav');
  const faqs = t.raw('faqs') as Array<[string, string]>;
  const priceFeatures = t.raw('priceFeatures') as string[];
  const deviceLabel = (k: PublicPlanKey) =>
    t(k === 'pro' ? 'devicePro' : k === 'plus' ? 'devicePlus' : 'deviceMax');
  const deviceHint = (k: PublicPlanKey) =>
    t(k === 'pro' ? 'deviceHintPro' : k === 'plus' ? 'deviceHintPlus' : 'deviceHintMax');

  // Demo modal: lock scroll, close on Escape, trap focus, restore focus on close.
  useEffect(() => {
    if (!demoOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDemoOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const modal = document.querySelector('.vt-modal');
        if (!modal) return;
        const focusables = modal.querySelectorAll<HTMLElement>(
          'button, a[href], iframe, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus?.();
    };
  }, [demoOpen]);

  const handleCheckout = () => {
    const productId = productIds[plan];
    if (!productId) {
      window.location.assign('/download');
      return;
    }
    redirectToCheckout(productId, { affonsoReferral, referrer });
  };

  /* ---------- Interactions (ported from landing-v2.js) ---------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    const header = root.querySelector('#vtHeader');
    const stickyCta = root.querySelector('#vtStickyCta');
    const onScroll = () => {
      header?.classList.toggle('scrolled', window.scrollY > 12);
      const showCta = window.scrollY > 760;
      stickyCta?.classList.toggle('show', showCta);
      // Mobile: when the Buy-now is up, raise the cookie banner above it so BOTH
      // stay visible — banner on top (tappable), Buy-now below. See .cookie-consent.
      document.body.classList.toggle('vt-sticky-on', showCta);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Pause CSS + JS motion while the tab is hidden (battery friendly).
    const onVisibility = () => root.classList.toggle('vt-paused', document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    onVisibility();
    const whenVisible = () =>
      document.hidden
        ? new Promise<void>((res) => {
            const h = () => {
              if (!document.hidden) {
                document.removeEventListener('visibilitychange', h);
                res();
              }
            };
            document.addEventListener('visibilitychange', h);
          })
        : Promise.resolve();

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rvEls = root.querySelectorAll('.rv');
    let io: IntersectionObserver | undefined;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      rvEls.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              e.target.classList.remove('pre');
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
      );
      const vh = window.innerHeight;
      rvEls.forEach((el) => {
        // Only hide sections still below the fold; anything already on screen stays
        // visible so it never flashes on load or when returning to the tab.
        if (el.getBoundingClientRect().top > vh * 0.9) {
          el.classList.add('pre');
          io?.observe(el);
        } else {
          el.classList.add('in');
        }
      });
    }

    const wait = (ms: number) =>
      new Promise<void>((r) => {
        timers.push(setTimeout(r, ms));
      });
    async function typeText(text: string, el: Element, speed: number) {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled || !el.isConnected) return;
        el.textContent = text.slice(0, i);
        const ch = text[i - 1];
        let d = speed;
        if (ch === ' ') d = speed * 0.55;
        if (ch === '.' || ch === ';' || ch === '—') d = speed * 5;
        await wait(d);
      }
    }

    const wave = root.querySelector('#vtHudWave');
    if (wave && !wave.childElementCount) {
      for (let i = 0; i < 12; i++) {
        const bar = document.createElement('i');
        bar.style.setProperty('--h', `${6 + Math.round(Math.random() * 10)}px`);
        wave.appendChild(bar);
      }
    }

    const hud = root.querySelector('#vtHud');
    const hudState = root.querySelector('#vtHudState');
    const appTitle = root.querySelector('#vtAppTitle');
    const appBody = root.querySelector('#vtAppBody');
    const appRow = root.querySelector('#vtAppRow');

    const APPS = [
      {
        app: 'gmail', icon: 'gmail', title: 'New message — Gmail',
        body:
          '<div class="compose">' +
          '<div class="compose-row"><b>To</b><span>sam@acme.com</span></div>' +
          '<div class="compose-row"><b>Subject</b><span>Tuesday launch</span></div>' +
          '<div class="compose-body"><span class="type-target"></span><span class="caret"></span></div>' +
          '</div>',
        text: "Hi Sam — we're shipping Tuesday. Flagging one risk on the billing migration; can you send the final numbers before standup?",
      },
      {
        app: 'slack', icon: 'slack', title: '#launch — Slack',
        body:
          '<div class="app-slack">' +
          '<div class="sk-head"><span class="bi" data-icon="slack"></span>#launch</div>' +
          '<div class="sk-msg"><span class="sk-avatar">SM</span><div><b>Sam</b><i>9:24 AM</i><p>Can you drop the churn numbers before standup?</p></div></div>' +
          '<div class="sk-input"><span class="type-target"></span><span class="caret"></span></div>' +
          '</div>',
        text: "On it — standup in 5. Bringing the churn numbers and we'll close the pricing question today.",
      },
      {
        app: 'cursor', icon: 'cursor', title: 'main.ts — Cursor',
        body:
          '<div class="app-cursor">' +
          '<div class="cur-head"><span class="bi" data-icon="cursor"></span>main.ts — auth</div>' +
          '<div class="cur-chat"><span class="cur-badge">Ask</span><span class="type-target"></span><span class="caret"></span></div>' +
          '</div>',
        text: 'Refactor the auth flow to use the new session helper, and add tests for the token expiry path.',
      },
      {
        app: 'notion', icon: 'notion', title: 'Q3 Roadmap — Notion',
        body:
          '<div class="app-notion">' +
          '<div class="nt-title">Q3 Roadmap</div>' +
          '<div class="nt-block"><span class="type-target"></span><span class="caret"></span></div>' +
          '</div>',
        text: 'Voice translation ships first this quarter, then writing profiles. Custom vocabulary moves to Q4.',
      },
      {
        app: 'claude', icon: 'claude', title: 'claude — ~/voicetypr',
        body:
          '<div class="app-terminal">' +
          '<div class="tm-row tm-dim"><span class="bi" data-icon="claude"></span>Claude Code · ~/voicetypr</div>' +
          '<div class="tm-row tm-you"><span class="tm-prompt">&gt;</span><span class="tm-text"><span class="type-target"></span><span class="caret"></span></span></div>' +
          '</div>',
        text: 'Add a loading state to the export button and write a test for the empty-list case.',
      },
    ];

    function renderApp(idx: number) {
      const a = APPS[idx];
      if (!a) return null;
      if (appTitle) {
        appTitle.innerHTML = `<span class="bi" data-icon="${a.icon}"></span>${a.title}`;
        injectBrandIcons(appTitle);
      }
      if (appBody) {
        appBody.innerHTML = a.body;
        injectBrandIcons(appBody);
      }
      appRow?.querySelectorAll('.app-icon').forEach((b) =>
        b.classList.toggle('active', (b as HTMLElement).dataset.app === a.app),
      );
      return appBody?.querySelector('.type-target') ?? null;
    }

    async function heroLoop() {
      if (!hud || !appBody) return;
      if (reduceMotion) {
        const first = APPS[0];
        const t = renderApp(0);
        if (t && first) t.textContent = first.text;
        hud.classList.add('recording');
        if (hudState) hudState.textContent = 'listening…';
        return;
      }
      let i = 0;
      while (!cancelled) {
        await whenVisible();
        if (cancelled) return;
        const idx = i % APPS.length;
        const a = APPS[idx];
        const target = renderApp(idx);
        hud.classList.remove('recording');
        if (hudState) hudState.textContent = 'hold to talk';
        await wait(700);
        if (cancelled) return;

        hud.classList.add('recording');
        if (hudState) hudState.textContent = 'listening…';
        await wait(800);
        if (cancelled) return;

        if (hudState) hudState.textContent = 'typing…';
        if (target && a) await typeText(a.text, target, 17);
        if (cancelled) return;

        hud.classList.remove('recording');
        if (hudState) hudState.textContent = 'done ✓';
        await wait(1900);
        i++;
      }
    }
    heroLoop();

    // AI rewriting before → after
    const rwSaid = root.querySelector('#vtRwSaid');
    const rwWritten = root.querySelector('#vtRwWritten');
    if (rwSaid && rwWritten) {
      const REWRITES: Array<[string, string]> = [
        ['um so like can you send me the the report by friday', 'Could you send me the report by Friday?'],
        ['i think we should uh maybe just ship it on tuesday yeah', "Let's plan to ship on Tuesday."],
        ['hey thanks so much really appreciate you helping me out', 'Thanks so much — I really appreciate the help.'],
        ['can we move the the standup to like 3pm instead of 2', 'Can we move standup to 3 PM instead of 2?'],
      ];
      (async function rewriteLoop() {
        if (reduceMotion) {
          const first = REWRITES[0];
          if (first) {
            rwSaid.textContent = first[0];
            rwWritten.textContent = first[1];
          }
          return;
        }
        let i = 0;
        while (!cancelled) {
          await whenVisible();
          if (cancelled) return;
          const pair = REWRITES[i % REWRITES.length];
          if (!pair) {
            i++;
            continue;
          }
          rwSaid.textContent = '';
          rwWritten.textContent = '';
          await wait(250);
          if (cancelled) return;
          await typeText(pair[0], rwSaid, 15);
          if (cancelled) return;
          await wait(420);
          if (cancelled) return;
          await typeText(pair[1], rwWritten, 21);
          if (cancelled) return;
          await wait(2600);
          i++;
        }
      })();
    }

    // Multi-app insertion list
    const faList = root.querySelector('#vtFaList');
    if (faList) {
      const faRows = Array.from(faList.querySelectorAll('.fa-row'));
      const FA_SAMPLES = [
        'Shipping Tuesday — sending the numbers.',
        'On it, standup in five.',
        'Refactor the auth flow and add tests.',
        'Translation ships first this quarter.',
      ];
      faRows.forEach((r, idx) => {
        const typed = r.querySelector('.fa-typed');
        if (typed) typed.textContent = FA_SAMPLES[idx] || '';
      });
      (async function appsLoop() {
        if (reduceMotion) {
          faRows[0]?.classList.add('on');
          return;
        }
        let i = 0;
        while (!cancelled) {
          await whenVisible();
          if (cancelled) return;
          faRows.forEach((r) => r.classList.remove('on'));
          const idx = i % faRows.length;
          const row = faRows[idx];
          const sample = FA_SAMPLES[idx] ?? '';
          const typed = row?.querySelector('.fa-typed');
          row?.classList.add('on');
          if (typed) typed.textContent = '';
          await wait(180);
          if (cancelled) return;
          if (typed) await typeText(sample, typed, 24);
          if (cancelled) return;
          await wait(1700);
          if (typed) typed.textContent = sample;
          i++;
        }
      })();
    }

    // Cycling multilingual greeting
    const flWord = root.querySelector('#vtFlWord');
    const flName = root.querySelector('#vtFlName');
    const flStage = root.querySelector('#vtFlStage');
    if (flWord && flName && flStage && !reduceMotion) {
      const GREETINGS: Array<[string, string]> = [
        ['Hello', 'English'], ['你好', '中文'], ['Hola', 'Español'],
        ['Bonjour', 'Français'], ['Ciao', 'Italiano'], ['こんにちは', '日本語'],
        ['Hallo', 'Deutsch'], ['Olá', 'Português'],
      ];
      let gi = 0;
      intervals.push(
        setInterval(() => {
          if (document.hidden) return;
          flStage.classList.add('swap');
          timers.push(
            setTimeout(() => {
              gi = (gi + 1) % GREETINGS.length;
              const g = GREETINGS[gi];
              if (g) {
                flWord.textContent = g[0];
                flName.textContent = g[1];
              }
              flStage.classList.remove('swap');
            }, 380),
          );
        }, 2000),
      );
    }

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', onScroll);
      document.body.classList.remove('vt-sticky-on');
      document.removeEventListener('visibilitychange', onVisibility);
      io?.disconnect();
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="vt2" ref={rootRef}>
      <script
        type="application/ld+json"
        // JSON-LD built from static strings only.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />

      {/* ============ HEADER ============ */}
      <header className="site-header" id="vtHeader">
        <div className="vt-container flex h-16 items-center justify-between">
          <Link
            className="flex items-center gap-[9px] text-[15px] font-semibold tracking-[-0.01em] text-editorial-ink"
            href="/"
          >
            <Brandmark className="h-[22px] w-[22px] shrink-0 text-sage" />
            Voicetypr
          </Link>
          <nav className="flex items-center gap-7">
            <div className="hidden items-center gap-7 text-[13.5px] text-editorial-ink-2 md:flex">
              {NAV.map((l) =>
                l.href.startsWith('/#') ? (
                  <a
                    key={l.key}
                    href={l.href}
                    className="transition-colors hover:text-editorial-ink"
                    data-track="nav-click"
                  >
                    {tNav(l.key)}
                  </a>
                ) : (
                  <Link
                    key={l.key}
                    href={l.href}
                    className="transition-colors hover:text-editorial-ink"
                    data-track="nav-click"
                  >
                    {tNav(l.key)}
                  </Link>
                ),
              )}
            </div>
            <Link
              className="btn btn-primary btn-sm"
              href={downloadHrefForOs(os)}
              data-track="nav-download-click"
            >
              {tNav('download')}
              {os !== 'other' && (
                <>
                  {' '}
                  <Bi name={os === 'windows' ? 'windows' : 'apple'} style={{ fontSize: 14, marginLeft: -2 }} />
                </>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-bloom" />
          <div className="vt-container">
            <h1>{t.rich('heroTitle', { em: (c) => <em>{c}</em> })}</h1>
            <p className="hero-sub">{t('heroSub')}</p>
            <div className="hero-cta">
              <div className="hero-actions">
                <DownloadButton />
                <a href="#pricing" className="btn btn-buy" data-track="hero-buy-click">
                  {t('heroBuyNow')}
                </a>
              </div>
              <p className="hero-meta">{t.rich('heroTrial', { b: (c) => <b>{c}</b> })}</p>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/marc.jpg" alt="Marc Lou, indie hacker" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/piotr.jpg" alt="Piotr Kulpinski, founder" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/dominik.jpg" alt="Dominik Koch, founder of Notra" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/orcdev.jpg" alt="OrcDev, tech content creator" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/dudu.jpg" alt="Dudu, founder of Toolfolio" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/thomas.jpg" alt="Thomas H. Chapin IV, AI engineer" width={40} height={40} /></span>
              </div>
              <p className="trust-text">{t('heroLovedBy')}</p>
            </div>

            <div className="stage-wrap rv">
              <div className="stage-window">
                <div className="win-bar">
                  <span className="win-dots"><i /><i /><i /></span>
                  <span className="win-title" id="vtAppTitle" />
                </div>
                <div className="app-body" id="vtAppBody" />
              </div>

              <div className="stage-hud-wrap">
                <div className="hud-row">
                  <span className="hud-keys"><kbd>⌘</kbd><kbd>Space</kbd></span>
                  <div className="hud" id="vtHud" aria-hidden="true">
                    <span className="hud-wave" id="vtHudWave" />
                  </div>
                  <span className="hud-state" id="vtHudState">{t('hudHoldToTalk')}</span>
                </div>
              </div>

              <div className="app-row" id="vtAppRow" aria-hidden="true">
                <span className="app-icon active" data-app="gmail" aria-hidden="true"><Bi name="gmail" /></span>
                <span className="app-icon" data-app="slack" aria-hidden="true"><Bi name="slack" /></span>
                <span className="app-icon" data-app="cursor" aria-hidden="true"><Bi name="cursor" /></span>
                <span className="app-icon" data-app="notion" aria-hidden="true"><Bi name="notion" /></span>
                <span className="app-icon" data-app="claude" aria-hidden="true"><Bi name="claude" /></span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ THE LOOP ============ */}
        <section className="pt-[128px]" id="setup">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">{t('setupTitle')}</h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">{t('setupSub')}</p>
            </div>

            <div className="loop rv">
              <div className="loop-node">
                <span className="nb nb-step">1</span>
                <h3>{t('step1Title')}</h3>
                <p>{t('step1Body')}</p>
              </div>
              <span className="loop-arrow" aria-hidden="true">→</span>
              <div className="loop-node">
                <span className="nb nb-step">2</span>
                <h3>{t('step2Title')}</h3>
                <p>{t('step2Body')}</p>
              </div>
              <span className="loop-arrow" aria-hidden="true">→</span>
              <div className="loop-node">
                <span className="nb nb-step">3</span>
                <h3>{t('step3Title')}</h3>
                <p>{t('step3Body')}</p>
              </div>
              <span className="loop-arrow" aria-hidden="true">→</span>
              <div className="loop-node">
                <span className="nb nb-step">4</span>
                <h3>{t('step4Title')}</h3>
                <p>{t('step4Body')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="pt-[128px]" id="features">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">{t('featuresTitle')}</h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">{t('featuresSub')}</p>
            </div>

            <div className="bento feat-top">
              <article className="feat-card feat-apps span-2 rv">
                <div className="fc-text">
                  <span className="feat-icon bi"><Bi name="apps" /></span>
                  <h3>{t('featAppsTitle')}</h3>
                  <p>{t('featAppsBody')}</p>
                </div>
                <div className="fa-list" id="vtFaList" aria-hidden="true">
                  <div className="fa-row"><span className="fa-ico bi"><Bi name="gmail" /></span><span className="fa-app">Gmail</span><span className="fa-line"><span className="fa-typed" /><span className="fa-caret" /></span></div>
                  <div className="fa-row"><span className="fa-ico bi"><Bi name="slack" /></span><span className="fa-app">Slack</span><span className="fa-line"><span className="fa-typed" /><span className="fa-caret" /></span></div>
                  <div className="fa-row"><span className="fa-ico bi"><Bi name="cursor" /></span><span className="fa-app">Cursor</span><span className="fa-line"><span className="fa-typed" /><span className="fa-caret" /></span></div>
                  <div className="fa-row"><span className="fa-ico bi"><Bi name="notion" /></span><span className="fa-app">Notion</span><span className="fa-line"><span className="fa-typed" /><span className="fa-caret" /></span></div>
                </div>
              </article>

              <article className="feat-card feat-lang rv rv-d1">
                <div className="fc-text">
                  <span className="feat-icon bi"><Bi name="globe" /></span>
                  <h3>{t('featLangTitle')}</h3>
                  <p>{t('featLangBody')}</p>
                </div>
                <div className="fl-stage" id="vtFlStage" aria-hidden="true">
                  <span className="fl-word" id="vtFlWord">Hello</span>
                  <span className="fl-name" id="vtFlName">English</span>
                </div>
              </article>
            </div>

            <div className="bento feat-bottom" style={{ marginTop: 14 }}>
              <article className="feat-card feat-scene rv">
                <div className="fc-text">
                  <span className="feat-icon bi"><Bi name="terminal" /></span>
                  <h3>{t('featCliTitle')}</h3>
                  <p>{t('featCliBody')}</p>
                </div>
                <div className="cli-term" aria-hidden="true">
                  <div className="cli-row cli-dim">voicetypr · agent</div>
                  <div className="cli-row"><span className="cli-prompt">$</span>voicetypr transcribe note.wav</div>
                  <div className="cli-out">{'→ "Ship the billing fix today."'}</div>
                </div>
              </article>

              <article className="feat-card feat-scene rv rv-d1">
                <div className="fc-text">
                  <span className="feat-icon bi"><Bi name="cloud" /></span>
                  <h3>{t('featCloudTitle')}</h3>
                  <p>{t('featCloudBody')}</p>
                </div>
                <div className="engine-pick" aria-hidden="true">
                  <span className="eng-row on"><span className="bi"><Bi name="check" /></span>Local · Whisper</span>
                  <span className="eng-row">Soniox · OpenAI</span>
                  <span className="eng-row">Groq · Deepgram</span>
                </div>
              </article>

              <article className="feat-card feat-scene rv rv-d2">
                <div className="fc-text">
                  <span className="feat-icon bi"><Bi name="network" /></span>
                  <h3>{t('featNetworkTitle')}</h3>
                  <p>{t('featNetworkBody')}</p>
                </div>
                <div className="remote-demo" aria-hidden="true">
                  <span className="rd-dev">This laptop</span>
                  <span className="rd-arrow bi"><Bi name="arrow" /></span>
                  <span className="rd-dev rd-strong">Desktop · GPU</span>
                </div>
              </article>
            </div>

            <article className="feat-card feat-rewrite rv" style={{ marginTop: 14 }}>
              <div className="rw-intro">
                <span className="feat-icon bi"><Bi name="sparkle" /></span>
                <h3>{t('featAiTitle')}</h3>
                <p>{t('featAiBody')}</p>
              </div>
              <div className="rw-demo" aria-hidden="true">
                <div className="rw-line rw-said">
                  <span className="rw-tag">Said</span>
                  <span className="rw-text" id="vtRwSaid" />
                </div>
                <div className="rw-flow"><span className="rw-spark bi"><Bi name="sparkle" /></span></div>
                <div className="rw-line rw-written">
                  <span className="rw-tag">Written</span>
                  <span className="rw-text" id="vtRwWritten" /><span className="rw-caret" />
                </div>
              </div>
            </article>

            <p className="mt-16 text-center text-[14px] font-medium text-editorial-ink-3">{t('builtFor')}</p>
            <div className="mt-7 grid grid-cols-4 gap-x-7 gap-y-9 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="keyboard" /></span>{t('t2CaptureTitle')}</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2CaptureA')}</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2CaptureB')}</li>
                </ul>
              </div>
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="waveform" /></span>{t('t2SharperTitle')}</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2SharperA')}</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2SharperB')}</li>
                </ul>
              </div>
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="sparkle" /></span>{t('t2FormatTitle')}</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2FormatA')}</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2FormatB')}</li>
                </ul>
              </div>
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="chip" /></span>{t('t2WorkflowTitle')}</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2WorkflowA')}</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>{t('t2WorkflowB')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ THE MATH ============ */}
        <section className="pt-[128px]">
          <div className="vt-container">
            <div className="mx-auto max-w-[680px] text-center rv">
              <h2 className="section-h2">{t('mathTitle')}</h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">{t('mathSub')}</p>
            </div>
            <div className="speed rv" aria-hidden="true">
              <div className="speed-row">
                <span className="speed-label">{t('speedTyping')}</span>
                <span className="speed-track"><span className="speed-fill speed-type" /></span>
                <span className="speed-num">≈ 40 wpm</span>
              </div>
              <div className="speed-row">
                <span className="speed-label">{t('speedTalking')}</span>
                <span className="speed-track"><span className="speed-fill speed-talk" /></span>
                <span className="speed-num">≈ 130 wpm</span>
              </div>
              <p className="speed-foot">{t.rich('speedFoot', { b: (c) => <b>{c}</b> })}</p>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="pt-[128px]" id="testimonials">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">{t('testimonialsTitle')}</h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">{t('testimonialsSub')}</p>
            </div>

            <div className="tweets">
              {TWEETS.map((t, i) => (
                <article className="tweet" key={i}>
                  <div className="tweet-head">
                    <span className="avatar" style={{ background: t.col }}>{initials(t.n)}</span>
                    <div>
                      <div className="who">{t.n}</div>
                      <div className="handle">{t.sub}</div>
                    </div>
                    <span className="src bi"><Bi name={t.src} /></span>
                  </div>
                  <p>“{t.c}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section className="pt-[128px]" id="pricing">
          <div className="vt-container-narrow">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">{t.rich('pricingTitle', { em: (c) => <em className="not-italic text-sage">{c}</em> })}</h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">{t('pricingSub')}</p>
            </div>

            <div className="pricing-hero rv">
              <div className="pricing-hero-main">
                <p className="ph-anchor">{t.rich('priceAnchor', { b: (c) => <b>{c}</b> })}</p>
                <div className="ph-figure">
                  <span className="now">{formatPrice(BASE_PRICES[plan])}</span>
                  <span className="per">{t('priceOnce', { device: deviceLabel(plan) })}</span>
                </div>
                <p className="ph-pick-label">{t('deviceQuestion')}</p>
                <div className="ph-pick">
                  {PUBLIC_PLAN_KEYS.map((key) => (
                    <button
                      key={key}
                      type="button"
                      className={key === plan ? 'on' : ''}
                      aria-pressed={key === plan}
                      onClick={() => setPlan(key)}
                    >
                      {deviceLabel(key)}
                    </button>
                  ))}
                </div>
                <p className="ph-hint">{deviceHint(plan)}</p>

                <div className="ph-cta">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleCheckout}
                    data-track="pricing-plan-click"
                    data-track-plan={plan}
                  >
                    {t('buyLifetime', { price: formatPrice(BASE_PRICES[plan]) })}
                  </button>
                  <small>{t('secureCheckout')}</small>
                </div>
              </div>
              <div className="pricing-hero-side">
                <h3>{t('everythingIncluded')}</h3>
                <ul className="ph-list">
                  {priceFeatures.map((f) => (
                    <li key={f}><span className="bi"><Bi name="check" /></span>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="pricing-team">
              {t.rich('needSeats', { b: (c) => <b>{c}</b> })}{' '}
              <a href="mailto:support@voicetypr.com?subject=Team%20licensing">{t('contactUs')}</a>
            </p>
          </div>
        </section>

        {/* ============ FOUNDER ============ */}
        <section className="pt-[128px]" id="founder">
          <div className="vt-container">
            <div className="founder-card rv">
              <span className="avatar">
                <Image src="/avatars/moinul.jpg" alt="Moinul Moin, founder & AI engineer at Ideaplexa" width={56} height={56} />
              </span>
              <p className="founder-quote">“{t('founderQuote')}”</p>
              <p className="founder-body">{t('founderBody')}</p>
              <p className="founder-sig">
                <b>
                  <a href="https://twitter.com/moinulmoin" target="_blank" rel="noopener noreferrer" data-track="founder-twitter-click">Moinul Moin</a>
                </b>{' '}
                {t('founderSig')}
              </p>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="pt-[128px]" id="faq">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">{t.rich('faqTitle', { em: (c) => <em className="not-italic text-sage">{c}</em> })}</h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">{t('faqSub')}</p>
            </div>

            <div className="mx-auto mt-[52px] grid max-w-[980px] grid-cols-2 gap-x-14 gap-y-[34px] max-[720px]:grid-cols-1 max-[720px]:gap-7">
              {faqs.map(([q, a]) => (
                <div key={q}>
                  <h3 className="mb-[9px] text-[15.5px] font-semibold tracking-[-0.005em] text-editorial-ink">{q}</h3>
                  <p className="text-[14px] leading-[1.62] text-editorial-ink-2">{a}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-[13.5px] text-editorial-ink-2">
              {t('faqStill')}{' '}
              <a className="font-medium text-editorial-ink underline underline-offset-[3px]" href="mailto:support@voicetypr.com" data-track="faq-contact-click">{t('faqEmailSupport')}</a>{' '}
              {t('faqStillTail')}
            </p>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="pt-[128px]">
          <div className="vt-container">
            <div className="cta-card rv">
              <h3>{t.rich('finalCtaTitle', { em: (c) => <em>{c}</em> })}</h3>
              <p className="cta-sub">{t('finalCtaSub')}</p>
              <Link className="btn btn-primary" href={downloadHrefForOs(os)} data-track="cta-download-click">
                {os === 'windows' ? (
                  <Bi name="windows" />
                ) : os === 'mac' ? (
                  <Bi name="apple" />
                ) : null}
                {os === 'windows'
                  ? t('downloadWindows')
                  : os === 'mac'
                    ? t('downloadMac')
                    : t('downloadBoth')}
              </Link>
              <p className="cta-fine">{t('finalCtaFine')}</p>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER (shared SiteFooter, passed from page.tsx) ============ */}
      {footer}

      {/* Mobile sticky → Buy now (not Download — it's a desktop app, you can't
          install it on a phone; buy here, install on your Mac/PC later). */}
      <a
        id="vtStickyCta"
        href="#pricing"
        className="sticky-cta"
        data-track="sticky-buy-click"
        data-markdown-skip
      >
        {t('heroBuyNow')}
      </a>

      {/* ============ DEMO MODAL ============ */}
      {demoOpen && (
        <div
          className="vt-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Voicetypr demo video"
          onClick={() => setDemoOpen(false)}
        >
          <div className="vt-modal" onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeBtnRef}
              type="button"
              className="vt-modal-close"
              onClick={() => setDemoOpen(false)}
            >
              {t('closeDemo')}
            </button>
            <div className="vt-modal-frame">
              <iframe
                src="https://www.youtube.com/embed/L_yU879QbE4?autoplay=1&rel=0"
                title="Voicetypr demo"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
