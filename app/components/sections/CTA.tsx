import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const proofItems = ['Mac + Windows', 'Local models', '3-day free trial'];

export default function CTA() {
  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="rounded-3xl bg-editorial-ink p-8 text-white md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-widest text-white/50">
                Yours forever
              </p>
              <h2 className="max-w-3xl text-5xl leading-none tracking-tight text-white md:text-7xl">
                Stop typing. Start talking.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                Turn rambling voice notes into clean prompts, replies, specs, and docs in the apps you already use.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <Link
                  href="/download"
                  data-umami-event="cta-download-click"
                  className="group inline-flex h-12 items-center gap-2 rounded-md bg-white py-2 pl-5 pr-2 text-sm font-medium text-editorial-ink transition hover:bg-editorial-surface-2 active:scale-95"
                >
                  Download for free
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-editorial-ink/10 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </Link>
                <Link
                  href="/#pricing"
                  data-umami-event="cta-pricing-click"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-medium text-white transition hover:bg-white/10 active:scale-95"
                >
                  Buy lifetime license
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-white/45 lg:justify-end">
                {proofItems.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
