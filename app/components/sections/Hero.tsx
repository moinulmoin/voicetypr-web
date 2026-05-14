import Link from "next/link";

const trustPeople = ["CE", "AB", "MV", "SK", "PL"];

export default function HeroSection() {
  return (
    <section className="ed-section ed-section-hero relative overflow-hidden !pt-32 !pb-10 md:!pt-44">
      <div className="ed-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl lg:text-8xl">
            Type by <em>talking</em>
            <br />
            in every app you use
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
              className="inline-flex h-12 items-center rounded-md bg-editorial-ink px-5 text-sm font-medium text-white transition duration-300 ease-out hover:bg-black active:scale-95"
            >
              Download for free
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
            <span className="hidden h-1 w-1 rounded-full bg-editorial-line-2 sm:block" aria-hidden />
            <div>
              <span className="font-semibold text-editorial-ink">Loved by people switching from Wispr Flow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
