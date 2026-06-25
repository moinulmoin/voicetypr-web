'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import {
  BASE_PRICES,
  formatPrice,
  PUBLIC_PLAN_KEYS,
  type PublicPlanKey,
} from '@/lib/pricing';
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

const FAQS: Array<[string, string]> = [
  ['Does Voicetypr work on Windows?', 'Yes, Windows 10 and later. Download the .exe installer, run it, and you’re set. We ship Mac and Windows as first-class platforms.'],
  ['Windows says “Unknown Publisher,” is it safe?', 'Yes. SmartScreen shows that because I don’t have a Microsoft code-signing cert yet (they cost $200–$300/year and I’m keeping solo-founder costs lean). Click More info → Run anyway.'],
  ['Can I try Voicetypr for free?', 'Yes, 3-day free trial, no card required. When the trial ends, buy a lifetime license only if it saves you time. Purchases include a 7-day money-back guarantee.'],
  ['Does it work in Gmail, Slack, ChatGPT, and other apps?', 'Yes. Click where you want text, hold your hotkey, and speak. Voicetypr pastes into Gmail, Slack, Notion, Word, ChatGPT, Cursor, anywhere you type.'],
  ['Is my voice data private?', 'Yes. Voicetypr uses offline dictation by default, so transcription happens on your machine. Optional cleaner-text features work on the final text, not your voice recording.'],
  ['How does the AI cleanup work?', 'It’s optional. Connect your own OpenAI, Anthropic, or Gemini key and Voicetypr turns rough dictation into clean prompts, emails, notes, even code. It only ever sends the text, never your audio, and you can leave it off entirely.'],
  ['What are the system requirements?', 'macOS Ventura 13+ with Apple Silicon recommended, Intel Mac supported, or Windows 10+. Minimum 4 GB RAM.'],
  ['How many devices can I use?', 'Pick 1, 2, or 4 activations when you buy. Switch machines anytime within your limit. Need a team license? Email support@voicetypr.com.'],
  ['What does lifetime mean?', 'One price, yours forever. No subscription, no card on file. Updates we ship come with it, and Voicetypr keeps working on the version you own.'],
  ['What languages does Voicetypr support?', '99+ languages including English, Spanish, French, German, Hindi, and Japanese, with automatic detection.'],
  ['Does it use my GPU on Windows?', 'On Windows, Voicetypr uses your graphics chip when it can for faster transcription. If not, it uses your processor, and it still works.'],
];

const PRICE_FEATURES = [
  'On-device dictation, offline by default',
  'Works in every app with a text cursor',
  'Global hotkey, push-to-talk, toggle modes',
  'AI formatting that cleans up your speech',
  'Cloud models too — Groq, Deepgram, OpenAI',
  'Network transcription across your devices',
  'CLI & Agent API for scripts and AI agents',
  'Audio and video file transcription',
  'Searchable local transcript history',
  'macOS 13+ and Windows 10+',
  'Direct support from the founder',
];

const DEVICE_LABEL: Record<PublicPlanKey, string> = { pro: '1 device', plus: '2 devices', max: '4 devices' };
const productIds: Record<PublicPlanKey, string | undefined> = {
  pro: process.env.NEXT_PUBLIC_PRO_PRODUCT_ID,
  plus: process.env.NEXT_PUBLIC_PLUS_PRODUCT_ID,
  max: process.env.NEXT_PUBLIC_MAX_PRODUCT_ID,
};
const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/use-cases', label: 'Use cases' },
];

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
  const [plan, setPlan] = useState<PublicPlanKey>('plus');
  const [demoOpen, setDemoOpen] = useState(false);

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
    window.location.assign(`${apiBaseUrl}/api/checkout?products=${productId}${metadataParam}`);
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
      stickyCta?.classList.toggle('show', window.scrollY > 760);
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
      document.removeEventListener('visibilitychange', onVisibility);
      io?.disconnect();
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(([q, a]) => ({
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
                    key={l.label}
                    href={l.href}
                    className="transition-colors hover:text-editorial-ink"
                    data-track="nav-click"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="transition-colors hover:text-editorial-ink"
                    data-track="nav-click"
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </div>
            <Link className="btn btn-primary btn-sm" href="/download" data-track="nav-download-click">
              Download <Bi name="apple" style={{ fontSize: 14, marginLeft: -2 }} />
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-bloom" />
          <div className="vt-container">
            <h1>
              Type with your <em>voice</em>.
            </h1>
            <p className="hero-sub">
              Your brain moves faster than your fingers. Speak, and Voicetypr&apos;s offline voice typing
              drops clean text into any app, about 3× faster than typing.
            </p>
            <div className="hero-cta">
              <div className="hero-actions">
                <DownloadButton />
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDemoOpen(true)}
                  data-track="hero-demo-click"
                  aria-haspopup="dialog"
                >
                  <span className="play-dot" aria-hidden="true"><svg viewBox="0 0 12 12" width="9" height="9" fill="currentColor"><path d="M4.5 3 L9 6 L4.5 9 Z" /></svg></span>
                  Watch the demo
                </button>
              </div>
              <p className="hero-meta">
                Free 3-day trial, <b>no card to start</b>
              </p>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/marc.jpg" alt="Marc Lou, indie hacker" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/will.jpg" alt="Will, creator of JarvX" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/dominik.jpg" alt="Dominik Koch, founder of Notra" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/orcdev.jpg" alt="OrcDev, tech content creator" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/dudu.jpg" alt="Dudu, founder of Toolfolio" width={40} height={40} /></span>
                <span className="avatar relative transition-transform duration-200 hover:z-10 hover:scale-110"><Image src="/avatars/thomas.jpg" alt="Thomas H. Chapin IV, AI engineer" width={40} height={40} /></span>
              </div>
              <p className="trust-text">
                Loved by founders, builders &amp; creators
              </p>
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
                  <span className="hud-state" id="vtHudState">hold to talk</span>
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
              <h2 className="section-h2">
                Up and running in minutes
              </h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">
                Install, pick a model, set a hotkey, then talk. That&apos;s it.
              </p>
            </div>

            <div className="loop rv">
              <div className="loop-node">
                <span className="nb nb-step">1</span>
                <h3>Install</h3>
                <p>Download for Mac or Windows and open it.</p>
              </div>
              <span className="loop-arrow" aria-hidden="true">→</span>
              <div className="loop-node">
                <span className="nb nb-step">2</span>
                <h3>Pick a model</h3>
                <p>Choose a local model: small for speed, large for accuracy.</p>
              </div>
              <span className="loop-arrow" aria-hidden="true">→</span>
              <div className="loop-node">
                <span className="nb nb-step">3</span>
                <h3>Set a hotkey</h3>
                <p>Choose your shortcut, then press and talk in any app.</p>
              </div>
              <span className="loop-arrow" aria-hidden="true">→</span>
              <div className="loop-node">
                <span className="nb nb-step">4</span>
                <h3>Start talking</h3>
                <p>Talk all day and give your fingers a rest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="pt-[128px]" id="features">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">
                More than just dictation
              </h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">
                Local dictation by default. Optional cloud transcription and AI cleanup when you want more.
              </p>
            </div>

            <div className="bento feat-top">
              <article className="feat-card feat-apps span-2 rv">
                <div className="fc-text">
                  <span className="feat-icon bi"><Bi name="apps" /></span>
                  <h3>Talk into every app</h3>
                  <p>One global hotkey drops clean text wherever your cursor sits, no per-app setup, no copy-paste.</p>
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
                  <h3>99+ languages</h3>
                  <p>Automatic detection. Just speak, in any language.</p>
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
                  <h3>Agent CLI &amp; API</h3>
                  <p>Drive Voicetypr from your CLI or scripts — audio in, text or JSON out. Give your AI agents (OpenClaw, Hermes, nanoclaw) ears.</p>
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
                  <h3>Local or cloud, your call</h3>
                  <p>On-device Whisper and Parakeet by default. On a lighter machine, switch to a cloud engine for speed and accuracy.</p>
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
                  <h3>Use a stronger machine</h3>
                  <p>Let a powerful desktop transcribe for a lighter laptop, over your own Wi-Fi.</p>
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
                <h3>Clean it up with AI</h3>
                <p>Bring your own OpenAI, Anthropic, or Gemini key and turn rough dictation into clean prompts, emails, and notes. Text only, never your audio, and always optional.</p>
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

            <p className="mt-16 text-center text-[14px] font-medium text-editorial-ink-3">
              Built for how you actually work
            </p>
            <div className="mt-7 grid grid-cols-4 gap-x-7 gap-y-9 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="keyboard" /></span>Capture your way</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Push-to-talk</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Tap to lock, hands-free</li>
                </ul>
              </div>
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="waveform" /></span>Sharper transcripts</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Custom vocabulary</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Translation</li>
                </ul>
              </div>
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="sparkle" /></span>Formatting &amp; rules</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>6 formatting modes</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Per-app rules</li>
                </ul>
              </div>
              <div>
                <h3 className="t2-head"><span className="bi text-[16px] text-sage"><Bi name="chip" /></span>Workflow &amp; power</h3>
                <ul className="t2-list">
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Audio &amp; video files</li>
                  <li><span className="bi text-[13px] text-sage"><Bi name="check" /></span>Searchable history</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ THE MATH ============ */}
        <section className="pt-[128px]">
          <div className="vt-container">
            <div className="mx-auto max-w-[680px] text-center rv">
              <h2 className="section-h2">
                Get your hours back
              </h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">
                You think faster than you type. Voice typing closes the gap, so ideas land before
                they slip and the hours you lose to the keyboard come back to you.
              </p>
            </div>
            <div className="speed rv" aria-hidden="true">
              <div className="speed-row">
                <span className="speed-label">You, typing</span>
                <span className="speed-track"><span className="speed-fill speed-type" /></span>
                <span className="speed-num">≈ 40 wpm</span>
              </div>
              <div className="speed-row">
                <span className="speed-label">You, talking</span>
                <span className="speed-track"><span className="speed-fill speed-talk" /></span>
                <span className="speed-num">≈ 130 wpm</span>
              </div>
              <p className="speed-foot">
                About <b>3× faster</b> than the keyboard. That gap is the hours you get back.
              </p>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="pt-[128px]" id="testimonials">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">
                Why people switch and stay
              </h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">
                Founders, developers, and creators who type all day.
              </p>
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
              <h2 className="section-h2">
                Pay <em className="not-italic text-sage">once</em>. Keep <em className="not-italic text-sage">forever</em>.
              </h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">
                One license, yours for life. Try it free for 3 days, no card required.
              </p>
            </div>

            <div className="pricing-hero rv">
              <div className="pricing-hero-main">
                <p className="ph-anchor">Most tools charge $10–15 a month, forever. <b>Voicetypr is one payment.</b></p>
                <div className="ph-figure">
                  <span className="now">{formatPrice(BASE_PRICES[plan])}</span>
                  <span className="per">once · {DEVICE_LABEL[plan]}</span>
                </div>
                <div className="ph-pick">
                  {PUBLIC_PLAN_KEYS.map((key) => (
                    <button
                      key={key}
                      type="button"
                      className={key === plan ? 'on' : ''}
                      aria-pressed={key === plan}
                      onClick={() => setPlan(key)}
                    >
                      {DEVICE_LABEL[key]}
                    </button>
                  ))}
                </div>

                <div className="ph-cta">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleCheckout}
                    data-track="pricing-plan-click"
                    data-track-plan={plan}
                  >
                    Buy lifetime · {formatPrice(BASE_PRICES[plan])}
                  </button>
                  <small>Secure checkout · 7-day money-back guarantee</small>
                </div>
              </div>
              <div className="pricing-hero-side">
                <h3>Everything included</h3>
                <ul className="ph-list">
                  {PRICE_FEATURES.map((f) => (
                    <li key={f}><span className="bi"><Bi name="check" /></span>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="pricing-team">
              Need <b>5+ seats</b>?{' '}
              <a href="mailto:support@voicetypr.com?subject=Team%20licensing">Contact us →</a>
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
              <p className="founder-quote">
                “I built Voicetypr because paying a monthly fee for basic dictation didn&apos;t feel right.”
              </p>
              <p className="founder-body">
                I type for 12+ hours a day. Most tools locked me into a subscription or felt like legacy
                software. Voicetypr is fast, offline by default, and runs on your machine. Try it free for
                3 days to see if it actually saves you time.
              </p>
              <p className="founder-sig">
                <b>
                  <a href="https://twitter.com/moinulmoin" target="_blank" rel="noopener noreferrer" data-track="founder-twitter-click">Moinul Moin</a>
                </b>{' '}
                · Solo founder, Voicetypr
              </p>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="pt-[128px]" id="faq">
          <div className="vt-container">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="section-h2">
                Questions, <em className="not-italic text-sage">answered</em>
              </h2>
              <p className="mx-auto mt-[14px] max-w-[540px] text-balance text-[15.5px] leading-[1.6] text-editorial-ink-2">
                Have a different question? Email support@voicetypr.com and we&apos;ll reply within a day.
              </p>
            </div>

            <div className="mx-auto mt-[52px] grid max-w-[980px] grid-cols-2 gap-x-14 gap-y-[34px] max-[720px]:grid-cols-1 max-[720px]:gap-7">
              {FAQS.map(([q, a]) => (
                <div key={q}>
                  <h3 className="mb-[9px] text-[15.5px] font-semibold tracking-[-0.005em] text-editorial-ink">{q}</h3>
                  <p className="text-[14px] leading-[1.62] text-editorial-ink-2">{a}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-[13.5px] text-editorial-ink-2">
              Still have a question?{' '}
              <a className="font-medium text-editorial-ink underline underline-offset-[3px]" href="mailto:support@voicetypr.com" data-track="faq-contact-click">Email support</a>{' '}
              and we&apos;ll
              reply within a day.
            </p>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="pt-[128px]">
          <div className="vt-container">
            <div className="cta-card rv">
              <h3><span className="roman">Stop typing.</span><br />Start <em>talking</em>.</h3>
              <p className="cta-sub">
                Free for 3 days, then it&apos;s yours for good. Works on macOS and Windows.
              </p>
              <Link className="btn btn-primary" href="/download" data-track="cta-download-click">
                <Bi name="apple" />
                Download for Mac &amp; PC
              </Link>
              <p className="cta-fine">macOS 13+ · Windows 10+ · No card for trial</p>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER (shared SiteFooter, passed from page.tsx) ============ */}
      {footer}

      <Link
        id="vtStickyCta"
        href="/download"
        className="sticky-cta"
        data-track="sticky-download-click"
        data-markdown-skip
      >
        Download for Mac &amp; PC
      </Link>

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
              Close ✕
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
