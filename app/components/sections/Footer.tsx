import Link from 'next/link';
import { GitHub, Gmail, XformerlyTwitter } from '@/components/icons';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Download', href: '/download', internal: true },
      { label: 'Pricing', href: '/#pricing', internal: true },
      { label: 'Use cases', href: '/use-cases', internal: true },
      { label: 'Blog', href: '/blog', internal: true },
      { label: 'Changelog', href: '/changelog', internal: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Ideaplexa', href: 'https://ideaplexa.com' },
      { label: 'Support', href: 'mailto:support@voicetypr.com' },
      { label: 'GitHub', href: 'https://github.com/moinulmoin/voicetypr' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Privacy', href: '/privacy', internal: true },
      { label: 'Terms', href: '/terms', internal: true },
      { label: 'Cookies', href: '/cookies', internal: true },
    ],
  },
] as const;

const socialLinks = [
  { label: 'Twitter/X', href: 'https://twitter.com/immoinulmoin', Icon: XformerlyTwitter },
  { label: 'GitHub', href: 'https://github.com/moinulmoin/voicetypr', Icon: GitHub },
  { label: 'Email', href: 'mailto:support@voicetypr.com', Icon: Gmail },
] as const;

export default function Footer() {
  return (
    <footer className="bg-editorial-bg py-14">
      <div className="ed-container">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight text-editorial-ink">
              VoiceTypr
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-editorial-ink-2">
              Offline AI voice-to-text for founders and builders. Local models, every-app input, Mac and Windows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-8 items-center gap-2 rounded-md border border-editorial-line bg-white px-3 text-xs font-medium text-editorial-ink-2 shadow-sm transition-colors hover:text-editorial-ink"
                  data-umami-event="footer-social-click"
                  data-umami-event-page={label.toLowerCase()}
                  aria-label={label}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h5 className="mb-3 text-xs font-medium uppercase tracking-widest text-editorial-ink-3">
                {column.title}
              </h5>
              <ul className="space-y-2 text-sm text-editorial-ink-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {'internal' in link && link.internal ? (
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
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 text-xs text-editorial-ink-3 md:flex-row">
          <span>© 2026 VoiceTypr</span>
          <span>Offline voice-to-text for macOS & Windows</span>
        </div>
      </div>
    </footer>
  );
}
