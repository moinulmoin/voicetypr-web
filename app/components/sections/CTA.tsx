import Link from 'next/link';

const proofItems = ['Mac + Windows', 'Local transcription by default', 'Pay once'];

export default function CTA() {
  return (
    <section className="ed-section ed-section-glow !pb-10">
      <div className="ed-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-editorial-ink px-6 py-12 text-center text-white shadow-[0_32px_100px_rgba(24,24,26,0.22)] md:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#d4965d]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-white/55">
              Ready when you are
            </p>
            <h2 className="mx-auto max-w-4xl text-5xl leading-none tracking-tight !text-white md:text-7xl">
              <span className="block">Stop typing.</span>{' '}
              <span className="block">Start shipping.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-white/70">
              Try VoiceTypr free for 3 days. Dictate into the apps you already use, with local transcription by default and no subscription.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/download"
                data-umami-event="cta-download-click"
                className="inline-flex h-12 items-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface active:scale-95"
              >
                Download free trial
              </Link>
              <Link
                href="/#pricing"
                data-umami-event="cta-pricing-click"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 text-sm font-medium text-white transition hover:bg-white/14 active:scale-95"
              >
                See pricing
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-white/50">
              {proofItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
