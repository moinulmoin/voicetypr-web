export default function Demo() {
  return (
    <section className="ed-section pt-12 md:pt-16 pb-0">
      <div className="ed-container">
        <div className="ed-eyebrow ed-eyebrow-center mb-6">see it work &middot; 20 seconds</div>
        <div className="mx-auto max-w-5xl">
          <div
            className="relative aspect-[8/5] overflow-hidden rounded-[28px] border border-editorial-line p-4 md:p-5 shadow-[0_30px_60px_-30px_rgba(61,34,12,0.28),0_2px_8px_-2px_rgba(0,0,0,0.06),inset_0_1px_0_#fff]"
            style={{
              background: "linear-gradient(to bottom, #ffffff, #f5ede0)",
            }}
          >
            {/* Accent glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-[25%] h-[85%]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--color-editorial-accent) 30%, transparent), transparent 65%)",
              }}
            />

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/voicetypr-demo-poster.jpg"
              aria-label="VoiceTypr demo — press hotkey, speak, text pastes at the cursor"
              className="relative h-full w-full rounded-[22px] border border-editorial-line object-cover shadow-[0_6px_14px_-6px_rgba(0,0,0,0.1)]"
            >
              <source
                src="https://assets.voicetypr.com/voicetypr-ph-2.mp4#t=0,20"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
