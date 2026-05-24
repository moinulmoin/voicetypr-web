import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="ed-section ed-section-hero relative overflow-hidden !pt-32 !pb-10 md:!pt-44">
      <div className="pointer-events-none absolute left-1/2 top-28 h-72 w-[min(68rem,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,150,93,0.18),transparent_68%)] blur-2xl" />

      <div className="ed-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-5xl text-5xl leading-tight tracking-tighter md:text-7xl lg:text-8xl font-serif-hero">
            Speak where you type
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-editorial-ink-2 md:text-lg">
            <span className="block font-semibold text-editorial-ink">
              Replace typing with your voice in the apps you already use.
            </span>
            <span className="mt-1 block">
              Cursor, Claude, ChatGPT, Slack, Gmail, docs, and more. Offline dictation by default. No subscription.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              data-umami-event="hero-download-click"
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white shadow-[0_14px_28px_rgba(24,24,26,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-black active:translate-y-0 active:scale-95"
            >
              Download free trial
            </Link>
            <Link
              href="/#pricing"
              data-umami-event="hero-pricing-click"
              className="inline-flex h-12 items-center rounded-md border border-editorial-line bg-white/85 px-5 text-sm font-medium text-editorial-ink shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-editorial-surface active:translate-y-0 active:scale-95"
            >
              Get lifetime license
            </Link>
          </div>

          <p className="mt-6 text-sm font-medium text-editorial-ink-2">
            3-day free trial <span className="text-editorial-ink-3" aria-hidden="true"> · </span>
            Runs on your machine <span className="text-editorial-ink-3" aria-hidden="true"> · </span>
            Mac + Windows <span className="text-editorial-ink-3" aria-hidden="true"> · </span>
            Pay once
          </p>
        </div>
      </div>
    </section>
  );
}
