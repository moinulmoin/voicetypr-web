export default function Demo() {
  return (
    <section className="ed-section !pt-0 !pb-16">
      <div className="ed-container">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-editorial-line bg-white p-3 shadow-xl md:p-4">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-editorial-surface-2">
              <video
                controls
                muted
                playsInline
                preload="none"
                poster="/voicetypr-og.png"
                aria-label="VoiceTypr demo — press hotkey, speak, text pastes at the cursor"
                className="h-full w-full object-cover"
              >
                <source
                  src="https://assets.voicetypr.com/voicetypr-ph-2.mp4#t=0,20"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-editorial-ink-3">
            Want the full walkthrough?{" "}
            <a
              href="https://youtu.be/L_yU879QbE4"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="demo-full-walkthrough-click"
              className="text-editorial-ink underline underline-offset-4 transition-colors hover:text-editorial-ink-2"
            >
              Watch on YouTube &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
