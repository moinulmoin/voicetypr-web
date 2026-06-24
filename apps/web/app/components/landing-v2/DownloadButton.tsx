'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Bi } from './brand-icons';

export const MS_STORE_URL =
  'https://apps.microsoft.com/store/detail/9P8J3X9B2JG6?cid=DevShareMTwPCS';

type OS = 'mac' | 'windows' | 'other';

const OPTIONS = [
  { id: 'macos-silicon', label: 'macOS', sub: 'Apple Silicon', icon: 'apple', href: '/download?platform=macos-silicon' },
  { id: 'macos-intel', label: 'macOS', sub: 'Intel', icon: 'apple', href: '/download?platform=macos-intel' },
  { id: 'windows', label: 'Windows', sub: '.exe', icon: 'windows', href: '/download?platform=windows' },
  { id: 'store', label: 'Microsoft Store', sub: '', icon: 'msstore', href: MS_STORE_URL, external: true },
] as const;

const ITEM_CLASS =
  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted';

function ItemBody({ icon, label, sub, external }: { icon: string; label: string; sub: string; external?: boolean }) {
  return (
    <>
      <Bi name={icon} className="shrink-0 text-lg text-muted-foreground" />
      <span>
        <b className="font-semibold">{label}</b>
        {sub ? <span className="font-normal text-muted-foreground"> ({sub})</span> : null}
      </span>
      {external ? <Bi name="arrow" className="ml-auto text-xs text-muted-foreground" /> : null}
    </>
  );
}

export default function DownloadButton() {
  const [os, setOs] = useState<OS>('other');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setOs(ua.includes('windows') ? 'windows' : /mac|iphone|ipad/.test(ua) ? 'mac' : 'other');
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const primary =
    os === 'windows'
      ? { label: 'Download for Windows', icon: 'windows' as const, href: '/download?platform=windows' }
      : os === 'mac'
        ? { label: 'Download for macOS', icon: 'apple' as const, href: '/download?platform=macos-silicon' }
        : { label: 'Download for Mac & PC', icon: 'apple' as const, href: '/download' };

  return (
    <div className="relative inline-flex items-stretch align-middle" ref={ref}>
      <Link
        href={primary.href}
        data-track="hero-download-click"
        className="inline-flex h-12 items-center gap-2.5 rounded-l-xl bg-primary px-5 text-sm font-semibold tracking-tight text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Bi name={primary.icon} className="text-lg" />
        {primary.label}
      </Link>
      <button
        type="button"
        aria-label="More download options"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex w-11 items-center justify-center rounded-r-xl border-l border-primary-foreground/20 bg-primary text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Bi name="chevron" className={`text-base transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-40 mt-2 grid min-w-64 gap-0.5 rounded-2xl border border-border bg-popover p-1.5 shadow-xl"
        >
          {OPTIONS.map((opt) =>
            'external' in opt && opt.external ? (
              <a
                key={opt.id}
                role="menuitem"
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                data-track="download-option"
                data-track-platform={opt.id}
                className={ITEM_CLASS}
              >
                <ItemBody icon={opt.icon} label={opt.label} sub={opt.sub} external />
              </a>
            ) : (
              <Link
                key={opt.id}
                role="menuitem"
                href={opt.href}
                onClick={() => setOpen(false)}
                data-track="download-option"
                data-track-platform={opt.id}
                className={ITEM_CLASS}
              >
                <ItemBody icon={opt.icon} label={opt.label} sub={opt.sub} />
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}
