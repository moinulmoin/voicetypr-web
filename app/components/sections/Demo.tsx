'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Demo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="ed-section relative z-10 !pt-2 !pb-16 md:!-mt-2">
      <div className="ed-container">
        <div className="relative mx-auto max-w-5xl">
          <div className="pointer-events-none absolute -inset-x-8 -inset-y-6 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(212,150,93,0.18),transparent_68%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-editorial-line bg-white/86 p-3 shadow-[0_30px_90px_rgba(78,61,41,0.18)] backdrop-blur md:p-4">
            <div className="relative aspect-[1440/896] overflow-hidden rounded-2xl bg-[#050506]">
              {showVideo ? (
                <video
                  autoPlay
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster="/voicetypr-demo-poster.jpg"
                  aria-label="VoiceTypr demo — press hotkey, speak, text pastes at the cursor"
                  className="h-full w-full object-contain"
                >
                  <source
                    src="https://assets.voicetypr.com/voicetypr-ph-2.mp4#t=0,20"
                    type="video/mp4"
                  />
                </video>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="group relative h-full w-full overflow-hidden"
                  aria-label="Play VoiceTypr demo video"
                >
                  <Image
                    src="/Write.jpg"
                    alt="VoiceTypr poster showing write 3x faster with your voice"
                    fill
                    priority
                    sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
                    className="object-contain opacity-100"
                    unoptimized
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/12" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/18 bg-black/42 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/86 backdrop-blur md:left-5 md:top-5">
                    Watch demo
                  </span>
                  <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/92 text-editorial-ink shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur transition duration-200 group-hover:scale-105 group-hover:bg-white group-active:scale-100">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-7 w-7">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-editorial-ink-3">
            Hold the hotkey, speak naturally, release — polished text appears where your cursor already is.{' '}
            <a
              href="https://youtu.be/L_yU879QbE4"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="demo-full-walkthrough-click"
              className="text-editorial-ink underline underline-offset-4 transition-colors hover:text-editorial-ink-2"
            >
              Watch the full walkthrough &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
