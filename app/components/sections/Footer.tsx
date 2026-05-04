import Link from "next/link";

const productLinks = [
  { label: "Download", href: "/download", internal: true },
  { label: "Pricing", href: "/#pricing", internal: true },
  { label: "Use cases", href: "/use-cases", internal: true },
  { label: "Blog", href: "/blog", internal: true },
  { label: "Changelog", href: "/changelog", internal: true },
  {
    label: "Releases",
    href: "https://github.com/moinulmoin/voicetypr/releases",
    internal: false,
  },
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
    <footer className="relative border-t border-editorial-line bg-editorial-bg">
      {/* Giant editorial wordmark — anchors the page close */}
      <div className="mx-auto max-w-[1240px] px-10 pt-16 pb-12 max-md:px-5 max-md:pt-10">
        <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
          <Link
            href="/"
            className="font-serif text-[clamp(60px,10vw,180px)] leading-[0.85] tracking-[-0.04em] text-editorial-ink transition-colors hover:text-editorial-accent"
          >
            VoiceTypr
          </Link>
          <p className="max-w-[280px] text-right text-sm leading-[1.5] text-editorial-ink-2 max-md:text-left">
            The offline AI voice-to-text app for founders and builders.
            <br />
            Mac &amp; Windows, pay once.
          </p>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-10 pb-10 md:grid-cols-4 max-md:px-5">
        <div>
          <span className="font-mono text-[12px] tracking-[0.08em] text-editorial-ink-3">
            by{" "}
            <a
              href="https://ideaplexa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-editorial-ink-2 underline underline-offset-2 transition-colors hover:text-editorial-accent"
              data-umami-event="footer-parent-company-click"
            >
              Ideaplexa
            </a>
          </span>
        </div>

        <div>
          <h5 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">
            Product
          </h5>
          <ul className="m-0 list-none p-0 text-sm">
            {productLinks.map((link) => (
              <li key={link.label} className="py-1.5 text-editorial-ink-2">
                {link.internal ? (
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-editorial-ink"
                    data-umami-event="footer-link-click"
                    data-umami-event-page={link.label.toLowerCase()}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-editorial-ink"
                    data-umami-event="footer-link-click"
                    data-umami-event-page={link.label.toLowerCase()}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

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
                  className="transition-colors hover:text-editorial-ink"
                  data-umami-event="footer-link-click"
                  data-umami-event-page={link.page}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

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
                    className="transition-colors hover:text-editorial-ink"
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
                    className="transition-colors hover:text-editorial-ink"
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
      <div className="mx-auto flex max-w-[1240px] items-center justify-between border-t border-editorial-line px-10 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-editorial-ink-3 max-md:flex-col max-md:gap-2 max-md:px-5">
        <span>&copy; 2026 VoiceTypr &middot; Ideaplexa</span>
        <span>made without a keyboard</span>
      </div>
    </footer>
  );
}
