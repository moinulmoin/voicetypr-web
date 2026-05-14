import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const trustPeople = ["CE", "AB", "MV", "SK", "PL"];

export default function HeroSection() {
  return (
    <section className="ed-section ed-section-hero !pt-36 md:!pt-48 !pb-10 relative overflow-hidden">
      <div className="ed-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center justify-center">
            <div className="ed-eyebrow">offline dictation app</div>
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter">
            Type by talking,
            <br />
            in every app you use.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-editorial-ink-2 md:text-lg">
            <strong className="font-semibold text-editorial-ink">
              Offline voice-to-text for Mac and Windows.
            </strong>{" "}
            ~150 words a minute. Pay once, yours forever.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/download"
              data-umami-event="hero-download-click"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-editorial-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Download for free
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
            <Link
              href="/#pricing"
              data-umami-event="hero-pricing-click"
              className="inline-flex h-12 items-center rounded-md border border-editorial-line bg-white px-5 text-sm font-medium text-editorial-ink shadow-sm transition duration-300 ease-out hover:bg-editorial-surface-2 active:scale-95"
            >
              Buy lifetime license
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-editorial-ink-2">
            <div className="flex -space-x-2">
              {trustPeople.map((person, index) => (
                <span
                  key={person}
                  className="grid h-7 w-7 place-items-center rounded-full border border-white bg-editorial-surface-2 text-xs font-medium text-editorial-ink shadow-sm"
                  style={{ zIndex: trustPeople.length - index }}
                >
                  {person}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current stroke-0" />
              ))}
            </div>
            <div>
              <span className="font-semibold text-editorial-ink">Loved by people switching from Wispr Flow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
