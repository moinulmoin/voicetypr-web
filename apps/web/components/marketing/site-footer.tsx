import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAllFreeTools } from "@/lib/free-tools";
import { Bi } from "@/app/components/landing-v2/brand-icons";
import { Brandmark } from "@/components/marketing/brandmark";
import { LanguageSwitcher } from "@/components/marketing/language-switcher";

type FooterLink = { label: string; href: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "/download" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Mac dictation", href: "/best/mac-dictation" },
      { label: "Offline dictation", href: "/best/offline-dictation" },
      { label: "Windows voice typing", href: "/best/windows-voice-typing" },
      { label: "Voice input for Cursor", href: "/voice-input-for-cursor" },
      { label: "Voice for AI agents", href: "/voice-for-ai-agents" },
      { label: "Network transcription", href: "/network-transcription" },
      { label: "Wispr Flow alternative", href: "/wispr-flow-alternative" },
      { label: "Dictation app", href: "/voice-typing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Support", href: "mailto:support@voicetypr.com", external: true },
      { label: "Ideaplexa", href: "https://ideaplexa.com", external: true },
      { label: "GitHub", href: "https://github.com/moinulmoin/voicetypr", external: true },
      { label: "Affiliate", href: "/affiliate" },
      { label: "Brand kit", href: "/brand" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Refund", href: "/refund" },
      { label: "EULA", href: "/eula" },
      { label: "HIPAA", href: "/hipaa-compliant-dictation" },
      { label: "GDPR", href: "/gdpr-compliant" },
    ],
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = "text-sm text-muted-foreground transition-colors hover:text-foreground";
  if (link.external || link.href.startsWith("mailto:")) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
        data-track="footer-link-click"
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} data-track="footer-link-click">
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  const tools = getAllFreeTools()
    .slice(0, 6)
    .map((t) => ({ label: t.shortTitle, href: `/tools/${t.slug}` }));

  return (
    <footer className="mt-28 pb-12 pt-14 md:mt-32" data-markdown-skip>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 items-start gap-9 md:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
              <Brandmark className="h-6 w-6 shrink-0 text-sage" />
              Voicetypr
            </Link>
            <p className="mt-3.5 max-w-60 text-sm leading-relaxed text-muted-foreground">
              Fast, local voice-to-text for Mac &amp; Windows. Built for founders, builders, and creators.
            </p>
            <div className="mt-5">
              <ThemeToggle />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3.5 text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="grid list-none gap-2.5 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3.5 text-sm font-semibold text-foreground">Free tools</h3>
            <ul className="grid list-none gap-2.5 p-0">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-track="footer-link-click">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-muted-foreground">
          <span>© 2026 Voicetypr · by <a href="https://ideaplexa.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-foreground">Ideaplexa</a></span>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="flex gap-3.5 text-base text-muted-foreground [&_a:hover]:text-foreground">
              <a href="https://twitter.com/moinulmoin" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                <Bi name="x" />
              </a>
              <a href="https://github.com/moinulmoin/voicetypr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Bi name="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
