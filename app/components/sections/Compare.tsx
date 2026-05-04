export default function Compare() {
  const headers = ["Criterion", "Typical dictation app", "VoiceTypr"];

  const rows: { c: string; v: [string, string] }[] = [
    {
      c: "Price",
      v: ["$80\u2013$180 / yr (subscription)", "from $50 \u00B7 once"],
    },
    {
      c: "Platforms",
      v: ["Mac or Windows, rarely both", "macOS + Windows"],
    },
    {
      c: "Works offline",
      v: ["cloud-first, partial at best", "always \u00B7 100%"],
    },
    {
      c: "Audio privacy",
      v: ["uploaded or synced to cloud", "never leaves device"],
    },
    {
      c: "Lifetime updates",
      v: ["subscription, or paid upgrades", "free, forever"],
    },
    {
      c: "Model footprint",
      v: ["cloud-hosted or 1\u20134 GB", "~140 MB \u2013 3 GB"],
    },
  ];

  const footer: { c: string; v: [string, string] } = {
    c: "2-year cost vs VoiceTypr",
    v: ["+$160 to +$360", "baseline \u00B7 from $50"],
  };

  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="bg-editorial-ink text-white rounded-[28px] p-6 sm:p-10 md:p-14">
          <span className="ed-eyebrow ed-eyebrow-dark">
            the math, plainly
          </span>
          <h2 className="font-serif text-[clamp(40px,4.2vw,62px)] leading-[1] mb-7 max-w-[760px] text-white">
            Pay once. Keep your money.
          </h2>
          <p className="text-[#b3aa9a] text-[17px] max-w-[540px] mb-10 leading-[1.5]">
            Most dictation apps charge you every month, forever.
            Here&apos;s the gap, plainly.
          </p>

          {/* VS table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[520px] rounded-[18px] overflow-hidden border border-white/10 bg-white/[0.03] text-[14.5px] grid grid-cols-[1.1fr_1.4fr_1.2fr] mx-4 sm:mx-0">
              {/* Header row — uses display:contents so grid children align */}
              <div className="contents">
                {headers.map((h, i) => (
                  <div
                    key={h}
                    className={
                      i === 2
                        ? "px-5 py-5 bg-editorial-accent text-white font-serif italic text-[17px] normal-case tracking-normal font-normal flex items-center"
                        : "px-5 py-5 uppercase tracking-[0.14em] text-[11px] font-mono font-medium text-white/55 bg-white/[0.025] flex items-center"
                    }
                  >
                    {h}
                  </div>
                ))}
              </div>

              {/* Body rows */}
              {rows.map((r) => (
                <div key={r.c} className="contents">
                  <div className="px-5 py-4 flex items-center leading-[1.45] border-t border-white/[0.07] text-white/90 font-medium">
                    {r.c}
                  </div>
                  <div className="px-5 py-4 flex items-center leading-[1.45] border-t border-white/[0.07] text-white/[0.78]">
                    {r.v[0]}
                  </div>
                  <div className="px-5 py-4 flex items-center leading-[1.45] border-t border-white/[0.07] bg-editorial-accent text-white font-medium">
                    {r.v[1]}
                  </div>
                </div>
              ))}

              {/* Footer row */}
              <div className="contents">
                <div className="px-5 py-5 flex items-center leading-[1.45] bg-white/[0.04] font-medium text-white/90">
                  {footer.c}
                </div>
                <div className="px-5 py-5 flex items-center leading-[1.45] bg-white/[0.04] font-medium text-white/[0.78]">
                  {footer.v[0]}
                </div>
                <div
                  className="px-5 py-5 flex items-center leading-[1.45] font-medium text-white"
                  style={{
                    background:
                      "color-mix(in_oklch, var(--color-editorial-accent) 85%, #000)",
                  }}
                >
                  {footer.v[1]}
                </div>
              </div>
            </div>
          </div>

          {/* Savings summary */}
          <p className="text-center mt-6 text-sm text-white/70">
            After 2 years:{" "}
            <strong className="text-[#9dd6af]">save $110&ndash;$310</strong>
            &nbsp;&middot;&nbsp; Pay once, keep using it forever.
          </p>
        </div>
      </div>
    </section>
  );
}
