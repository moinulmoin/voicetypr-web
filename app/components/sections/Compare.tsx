export default function Compare() {
  const headers = ["Criterion", "Wispr Flow", "SuperWhisper", "Dragon", "VoiceTypr"];

  const rows: { c: string; v: string[] }[] = [
    {
      c: "Price",
      v: ["$180 / yr", "$85 / yr", "$500 once + upgrades", "from $50 \u00B7 once"],
    },
    {
      c: "Platforms",
      v: ["macOS only", "macOS only", "Windows only", "macOS + Windows"],
    },
    {
      c: "Works offline",
      v: ["\u2014 cloud only", "partial", "yes", "always \u00B7 100%"],
    },
    {
      c: "Audio privacy",
      v: ["uploaded", "local + sync", "local", "never leaves device"],
    },
    {
      c: "Lifetime updates",
      v: ["no", "while subscribed", "paid per version", "free, forever"],
    },
    {
      c: "Model footprint",
      v: ["n/a · cloud", "~1 GB", "~4 GB+", "~140 MB – 3 GB"],
    },
  ];

  const footer: { c: string; v: string[] } = {
    c: "2-year cost vs VoiceTypr",
    v: ["+$310", "+$120", "+$450 (plus upgrades)", "baseline \u00B7 from $50"],
  };

  return (
    <section className="ed-section">
      <div className="ed-container">
        <div className="bg-editorial-ink text-white rounded-[28px] p-6 sm:p-10 md:p-14">
          <div
            className="ed-eyebrow"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            the math, plainly
          </div>
          <h2 className="font-serif text-[clamp(40px,4.2vw,62px)] leading-[1] mb-7 max-w-[760px] text-white">
            Why pay more, <em>for less?</em>
          </h2>
          <p className="text-[#b3aa9a] text-[17px] max-w-[520px] mb-10 leading-[1.5]">
            VoiceTypr is one payment. The others want a monthly tab open on your
            AmEx forever. Here&apos;s the honest gap, in a single table.
          </p>

          {/* VS table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[640px] rounded-[18px] overflow-hidden border border-white/10 bg-white/[0.03] text-[14.5px] grid grid-cols-[1.4fr_1fr_1fr_1fr_1.15fr] mx-4 sm:mx-0">
            {/* Header row — uses display:contents so grid children align */}
            <div className="contents">
              {headers.map((h, i) => (
                <div
                  key={h}
                  className={
                    i === 4
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
                {r.v.slice(0, 3).map((cell, j) => (
                  <div
                    key={j}
                    className="px-5 py-4 flex items-center leading-[1.45] border-t border-white/[0.07] text-white/[0.78]"
                  >
                    {cell}
                  </div>
                ))}
                <div className="px-5 py-4 flex items-center leading-[1.45] border-t border-white/[0.07] bg-editorial-accent text-white font-medium">
                  {r.v[3]}
                </div>
              </div>
            ))}

            {/* Footer row */}
            <div className="contents">
              <div className="px-5 py-5 flex items-center leading-[1.45] bg-white/[0.04] font-medium text-white/90">
                {footer.c}
              </div>
              {footer.v.slice(0, 3).map((cell, j) => (
                <div
                  key={j}
                  className="px-5 py-5 flex items-center leading-[1.45] bg-white/[0.04] font-medium text-white/[0.78]"
                >
                  {cell}
                </div>
              ))}
              <div
                className="px-5 py-5 flex items-center leading-[1.45] font-medium text-white"
                style={{
                  background:
                    "color-mix(in_oklch, var(--color-editorial-accent) 85%, #000)",
                }}
              >
                {footer.v[3]}
              </div>
            </div>
            </div>
          </div>

          {/* Savings summary */}
          <p className="text-center mt-6 text-sm text-white/70">
            After 1 year:{" "}
            <strong className="text-[#9dd6af]">save $35&ndash;$450</strong>{" "}
            &nbsp;&middot;&nbsp; After 2 years:{" "}
            <strong className="text-[#9dd6af]">save $120&ndash;$550+</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
