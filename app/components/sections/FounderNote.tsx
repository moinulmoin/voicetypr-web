export default function FounderNote() {
  return (
    <section className="ed-section" id="founder">
      <div className="ed-container">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-editorial-ink md:text-4xl">
              A note from the founder.
            </h2>
          </div>

          <div className="mt-10">
            <blockquote className="text-3xl font-semibold leading-tight tracking-tight text-editorial-ink md:text-5xl">
              “I built VoiceTypr because paying a monthly fee for basic dictation didn’t feel right.”
            </blockquote>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-editorial-ink-2">
              <p>
                I type for 12+ hours a day. Most tools locked me into a subscription or felt like legacy software. VoiceTypr is fast, offline, and processes your voice fully on your machine.
              </p>
              <p>
                Try it free for 3 days. See if it actually saves you time. (Spoiler: it does.)
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-editorial-surface-2 text-sm font-medium text-editorial-ink">
              M
            </div>
            <div>
              <a
                href="https://twitter.com/immoinulmoin"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-editorial-ink hover:underline"
                data-umami-event="founder-twitter-click"
              >
                Moinul Moin
              </a>
              <div className="text-xs text-editorial-ink-3">
                Solo founder · VoiceTypr ·{' '}
                <a
                  href="https://ideaplexa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  data-umami-event="founder-ideaplexa-click"
                >
                  @Ideaplexa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
