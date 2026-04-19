import Link from "next/link";

const productLinks = [
  { label: "Download", href: "/download", internal: true },
  { label: "Pricing", href: "/#pricing", internal: true },
  { label: "Changelog", href: "/#pricing", internal: true },
  { label: "Affiliates", href: "/affiliate", internal: true },
] as const;

const companyLinks = [
  {
    label: "Founder · Moinul Moin",
    href: "https://twitter.com/immoinulmoin",
    internal: false,
    page: "founder",
  },
  {
    label: "@Ideaplexa",
    href: "https://ideaplexa.com",
    internal: false,
    page: "ideaplexa",
  },
  {
    label: "Support",
    href: "mailto:support@voicetypr.com",
    internal: false,
    page: "support",
  },
  {
    label: "GitHub",
    href: "https://github.com/moinulmoin/voicetypr",
    internal: false,
    page: "github",
  },
] as const;

const trustLinks = [
  { label: "Privacy", href: "/privacy", internal: true, page: "privacy" },
  { label: "Terms", href: "/terms", internal: true, page: "terms" },
  { label: "Cookies", href: "/cookies", internal: true, page: "cookies" },
  {
    label: "Open source · GitHub",
    href: "https://github.com/moinulmoin/voicetypr",
    internal: false,
    page: "github",
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-editorial-line bg-editorial-bg">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-10 pb-8 pt-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] max-md:px-5">
        {/* Column 1 — Brand */}
        <div>
          <Link href="/" className="mb-3.5 flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-editorial-ink font-mono text-[13px] font-semibold text-white">
              V
            </span>
            <span className="font-serif text-[22px] tracking-[-0.01em]">
              VoiceTypr
            </span>
          </Link>
          <p className="mb-2.5 max-w-[280px] text-sm leading-[1.55] text-editorial-ink-2">
            The offline AI voice-to-text app for founders and builders. Mac
            &amp; Windows.
          </p>
          <p className="text-xs text-editorial-ink-3">
            by{" "}
            <a
              href="https://ideaplexa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-editorial-ink-2 underline underline-offset-2"
              data-umami-event="footer-parent-company-click"
            >
              Ideaplexa
            </a>
          </p>
        </div>

        {/* Column 2 — Product */}
        <div>
          <h5 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
            Product
          </h5>
          <ul className="m-0 list-none p-0 text-sm">
            {productLinks.map((link) => (
              <li key={link.label} className="py-1.5 text-editorial-ink-2">
                <Link
                  href={link.href}
                  data-umami-event="footer-link-click"
                  data-umami-event-page={link.label.toLowerCase()}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Company */}
        <div>
          <h5 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
            Company
          </h5>
          <ul className="m-0 list-none p-0 text-sm">
            {companyLinks.map((link) => (
              <li key={link.label} className="py-1.5 text-editorial-ink-2">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="footer-link-click"
                  data-umami-event-page={link.page}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Trust */}
        <div>
          <h5 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
            Trust
          </h5>
          <ul className="m-0 list-none p-0 text-sm">
            {trustLinks.map((link) => (
              <li key={link.label} className="py-1.5 text-editorial-ink-2">
                {link.internal ? (
                  <Link
                    href={link.href}
                    data-umami-event="footer-link-click"
                    data-umami-event-page={link.page}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-umami-event="footer-link-click"
                    data-umami-event-page={link.page}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mx-auto flex max-w-[1240px] items-center justify-between border-t border-editorial-line px-10 pt-6 text-xs text-editorial-ink-3 max-md:px-5">
        <span>&copy; 2026 VoiceTypr &middot; Ideaplexa</span>
        <span>Made without a keyboard.</span>
      </div>
    </footer>
  );
}
