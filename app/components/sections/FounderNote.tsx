import Image from 'next/image';

export default function FounderNote() {
  return (
    <section className="ed-section" id="founder">
      <div className="ed-container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mt-2">
            <blockquote className="text-3xl font-semibold leading-tight tracking-tight text-editorial-ink md:text-5xl">
              “I built VoiceTypr because paying a monthly fee for basic dictation didn’t feel right.”
            </blockquote>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-editorial-ink-2">
              <p>
                I type for 12+ hours a day. Most tools locked me into a subscription or felt like legacy software. VoiceTypr is fast, with offline dictation by default and local transcription on your machine.
              </p>
              <p>
                Try it free for 3 days, no card. (Spoiler: you’ll keep it.)
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-fit items-center gap-3 text-left">
            <Image
              src="https://github.com/moinulmoin.png"
              alt="Moinul Moin"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-editorial-surface-2 object-cover"
            />
            <div className="min-w-0">
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
                  Ideaplexa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
