export default function FounderNote() {
  return (
    <section className="ed-section" id="founder">
      <div className="ed-container max-w-[760px] mx-auto">
        <div className="bg-editorial-surface border border-editorial-line rounded-[18px] p-10 md:p-11">
          <div className="ed-eyebrow" style={{ marginBottom: 20 }}>
            a note from the founder
          </div>

          <h3 className="font-serif text-[clamp(28px,2.6vw,38px)] leading-[1.15] mb-5 text-editorial-ink tracking-[-0.01em]">
            &ldquo;I built VoiceTypr because paying $15/month for basic dictation
            didn&rsquo;t feel right.&rdquo;
          </h3>

          <p className="text-editorial-ink-2 text-[16px] leading-[1.65] mb-3">
            I type for 12+ hours a day. Most tools locked me into a subscription
            or felt like legacy software. VoiceTypr is fast, offline, and
            processes your voice fully on your machine.
          </p>

          <p className="text-editorial-ink-2 text-[16px] leading-[1.65] mb-6">
            Try it free for 3 days. See if it actually saves you time. (Spoiler:
            it does.)
          </p>

          <div className="flex items-center gap-3">
            {/* Fallback avatar — avoids external image host config drift */}
            <div className="w-11 h-11 rounded-full bg-editorial-accent text-white grid place-items-center font-serif text-[22px]">
              M
            </div>
            <div className="leading-tight">
              <a
                href="https://twitter.com/immoinulmoin"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-editorial-ink hover:underline"
                data-umami-event="founder-twitter-click"
              >
                Moinul Moin
              </a>
              <div className="text-xs text-editorial-ink-3">
                Solo founder · VoiceTypr ·{" "}
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
