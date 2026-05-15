import type { SVGProps } from "react";
import Link from "next/link";


function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.46 12.41c-.02-2.09 1.72-3.1 1.8-3.15-1-1.43-2.53-1.63-3.06-1.65-1.28-.13-2.52.75-3.17.75-.67 0-1.67-.73-2.75-.71-1.4.02-2.7.82-3.42 2.08-1.48 2.56-.38 6.32 1.04 8.39.71 1.02 1.54 2.15 2.62 2.11 1.06-.04 1.45-.68 2.73-.68 1.27 0 1.63.68 2.75.66 1.14-.02 1.86-1.02 2.55-2.04.82-1.17 1.15-2.33 1.16-2.39-.03-.01-2.23-.85-2.25-3.37ZM14.36 6.25c.58-.73.97-1.72.86-2.72-.84.04-1.9.58-2.5 1.3-.54.64-1.02 1.68-.9 2.67.95.07 1.93-.52 2.54-1.25Z"
      />
    </svg>
  );
}

function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M3 5.1 10.5 4v7H3V5.1Zm8.6-1.25L21 2.5V11h-9.4V3.85ZM3 12h7.5v7L3 17.9V12Zm8.6 0H21v8.5l-9.4-1.35V12Z" />
    </svg>
  );
}


export default function HeroSection() {
  return (
    <section className="ed-section ed-section-hero relative overflow-hidden !pt-32 !pb-10 md:!pt-44">
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-[min(68rem,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,150,93,0.18),transparent_68%)] blur-2xl" />

      <div className="ed-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl lg:text-8xl">
            Type by{" "}
            <em>talking</em>
            <br />
            in every app you use
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-editorial-ink-2 md:text-lg">
            <span className="block font-semibold text-editorial-ink">
              Offline AI voice-to-text for{' '}
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap align-baseline">
                <AppleIcon className="h-4 w-4" />
                macOS
              </span>{' '}
              and{' '}
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap align-baseline">
                <WindowsIcon className="h-4 w-4" />
                Windows
              </span>
              .
            </span>
            <span className="mt-1 block">
              Speak naturally. Type faster. Pay once, use it forever.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              data-umami-event="hero-download-click"
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white shadow-[0_14px_28px_rgba(24,24,26,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-black active:translate-y-0 active:scale-95"
            >
              Download for free
            </Link>
            <Link
              href="/#pricing"
              data-umami-event="hero-pricing-click"
              className="inline-flex h-12 items-center rounded-md border border-editorial-line bg-white/85 px-5 text-sm font-medium text-editorial-ink shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-editorial-surface active:translate-y-0 active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>

          <div className="mt-7 text-sm text-editorial-ink-2">
            <span className="font-semibold text-editorial-ink">Built for founders, builders, and AI power users who type all day</span>
          </div>
        </div>
      </div>
    </section>
  );
}
