import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const proofItems = ['Mac + Windows', 'Local models', '3-day free trial'];

export default function CTA() {
  return (
    <section className="ed-section !pb-10">
      <div className="ed-container">
        <div className="bg-editorial-surface-2 px-6 py-10 text-center md:px-10 md:py-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
            Ready when you are
          </p>
          <h2 className="mx-auto max-w-4xl text-5xl leading-none tracking-tight md:text-7xl">
            <span className="block">Stop typing.</span>
            <span className="block">Start talking.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-editorial-ink-2">
            Turn rambling voice notes into clean prompts, replies, specs, and docs in the apps you already use.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              data-umami-event="cta-download-click"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition hover:bg-black active:scale-95"
            >
              Download for free
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link
              href="/#pricing"
              data-umami-event="cta-pricing-click"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-editorial-ink transition hover:bg-editorial-bg active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-editorial-ink-3">
            {proofItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
