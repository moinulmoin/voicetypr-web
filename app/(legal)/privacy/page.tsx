import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — VoiceTypr",
  description:
    "How VoiceTypr handles your data. Audio is processed locally on your machine and never leaves the device. GDPR + CCPA compliant.",
  alternates: { canonical: "https://voicetypr.com/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy — VoiceTypr",
    description:
      "Local-first by design. Audio never leaves your machine. Read the full policy.",
    url: "https://voicetypr.com/privacy",
    siteName: "VoiceTypr",
    type: "article",
  },
};

const sectionClass = "mt-10";
const h2Class =
  "font-serif text-[clamp(22px,2.2vw,30px)] leading-[1.15] tracking-[-0.015em] mb-4";
const h3Class =
  "font-sans font-semibold text-[16.5px] mt-6 mb-2 text-editorial-ink";
const pClass = "text-editorial-ink-2 text-[15.5px] leading-[1.65]";
const ulClass = "list-disc pl-6 mt-2 space-y-1.5 text-editorial-ink-2 text-[15.5px] leading-[1.65]";

export default function PrivacyPage() {
  return (
    <>
      <header className="mb-10">
        <span className="ed-eyebrow">policy &middot; privacy</span>
        <h1 className="font-serif text-[clamp(40px,4.5vw,60px)] leading-[1.05] tracking-[-0.025em] mt-2 mb-3">
          Privacy Policy
        </h1>
        <p className="font-sans font-medium uppercase tracking-[0.12em] text-[12.5px] text-editorial-ink-3">
          Last Updated: October 23, 2025
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className={h2Class}>1. Introduction</h2>
        <p className={pClass}>
          Ideaplexa LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use VoiceTypr (&ldquo;the Software&rdquo;).
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>2. Information We Collect</h2>

        <h3 className={h3Class}>2.0 Controller</h3>
        <p className={pClass}>
          Ideaplexa LLC is the data controller for website and license data. Contact: privacy@voicetypr.com
        </p>

        <h3 className={h3Class}>2.1 Device Information</h3>
        <ul className={ulClass}>
          <li>Device hash (anonymized device identifier)</li>
          <li>App version</li>
          <li>Operating system type</li>
        </ul>

        <h3 className={h3Class}>2.2 License Information</h3>
        <ul className={ulClass}>
          <li>License key (when activated)</li>
          <li>Activation status</li>
          <li>Trial period dates</li>
        </ul>

        <h3 className={h3Class}>2.3 Purchase Information</h3>
        <p className={pClass}>
          Payment processing is handled by Polar.sh. We receive only essential info for trial check. We do not store credit card or payment details.
        </p>

        <h3 className={h3Class}>2.4 Cookies and online identifiers</h3>
        <p className={pClass}>
          See our <Link href="/cookies" className="text-editorial-accent hover:underline">Cookie Policy</Link> for details on cookie categories and purposes. Non&#8209;essential cookies load only with your consent.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>3. Local Usage Data</h2>

        <h3 className={h3Class}>3.1 Productivity Statistics</h3>
        <p className={pClass}>VoiceTypr tracks the following data locally on your device only:</p>
        <ul className={ulClass}>
          <li>Usage streaks and daily activity</li>
          <li>Transcription history (stored locally)</li>
          <li>Words transcribed count</li>
          <li>Time saved estimates</li>
        </ul>
        <p className={`${pClass} mt-3`}>
          This data is stored on your device and is never transmitted to our servers. You can export or share these statistics at your discretion.
        </p>

        <h3 className={h3Class}>3.2 Audio/Video File Processing</h3>
        <p className={pClass}>When you upload audio or video files for transcription:</p>
        <ul className={ulClass}>
          <li>Files are processed entirely on your device</li>
          <li>No audio or video data is uploaded to any server</li>
          <li>Files remain in your local system only</li>
          <li>Transcriptions are stored locally in your history</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>4. Information We DO NOT Collect</h2>
        <ul className={ulClass}>
          <li>Voice recordings or transcriptions from our servers</li>
          <li>Text you dictate or type</li>
          <li>Personal files or documents</li>
          <li>Browsing history or app usage patterns</li>
          <li>Audio or video files you upload for transcription</li>
        </ul>
        <p className={`${pClass} mt-4`}>
          <strong className="text-editorial-ink">All voice, audio, and video processing happens locally on your device using on-device models. Your voice, audio, and video files never leave your computer.</strong>
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>5. Purposes and Legal Bases (GDPR)</h2>
        <ul className={ulClass}>
          <li>License and trial management — <em>Performance of contract</em></li>
          <li>Fraud prevention and security — <em>Legitimate interests</em></li>
          <li>Customer support — <em>Performance of contract</em> or <em>Legitimate interests</em></li>
          <li>Analytics (cookieless) — <em>Legitimate interests</em>; no cookies used</li>
          <li>Marketing/attribution — <em>Consent</em> (loaded only with consent)</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>6. Data Storage and Security</h2>
        <ul className={ulClass}>
          <li>License data is stored in secure, encrypted databases</li>
          <li>Servers are located in the European Union (with safeguards for any international transfers, e.g., SCCs)</li>
          <li>We use industry-standard security measures</li>
          <li>Access is limited to authorized personnel only</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>7. Data Retention</h2>
        <ul className={ulClass}>
          <li>Active license data: Retained while license is valid</li>
          <li>Trial data: Retained for fraud prevention purposes</li>
          <li>Activity logs: Retained for 90 days for debugging</li>
          <li>Refunded licenses: Data cleared immediately</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>8. Third-Party Services</h2>
        <p className={pClass}>We use the following third-party services:</p>
        <ul className={ulClass}>
          <li><strong className="text-editorial-ink">Polar.sh:</strong> Payment processing and license key generation</li>
          <li><strong className="text-editorial-ink">Database hosting:</strong> Secure infrastructure for license validation</li>
          <li><strong className="text-editorial-ink">Umami:</strong> Cookieless analytics (no cookies; aggregated usage)</li>
          <li><strong className="text-editorial-ink">Google Tag Manager &amp; Affonso:</strong> Marketing/attribution (only loaded with consent)</li>
        </ul>
        <p className={`${pClass} mt-3`}>These services have their own privacy policies and data practices.</p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>9. Your Rights</h2>
        <p className={pClass}>
          Depending on your location, you may have the right to access, rectify, erase, restrict, object to processing, or request portability of your personal data. You can also withdraw consent at any time for consent&#8209;based processing.
        </p>
        <p className={`${pClass} mt-3`}>
          To exercise rights, contact: <a href="mailto:privacy@voicetypr.com" className="text-editorial-accent hover:underline">privacy@voicetypr.com</a>. You may also lodge a complaint with your local supervisory authority in the EU/EEA.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>10. International Transfers</h2>
        <p className={pClass}>
          Where data is transferred outside your jurisdiction, we use appropriate safeguards such as Standard Contractual Clauses (SCCs).
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>11. Children&apos;s Privacy</h2>
        <p className={pClass}>
          VoiceTypr is intended for users aged 13 and older. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>12. Changes to This Policy</h2>
        <p className={pClass}>
          We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &ldquo;Last Updated&rdquo; date. Continued use of the Software after changes constitutes acceptance.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>13. Contact Us</h2>
        <p className={pClass}>
          For privacy-related questions or concerns:
        </p>
        <p className={`${pClass} mt-3 font-mono text-[14px]`}>
          Ideaplexa LLC<br />
          30 N Gould St Ste N<br />
          Sheridan, WY 82801<br />
          United States<br />
          Email: <a href="mailto:privacy@voicetypr.com" className="text-editorial-accent hover:underline">privacy@voicetypr.com</a>
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>14. California (CCPA/CPRA)</h2>
        <p className={pClass}>
          We disclose categories such as identifiers (license/account), commercial information (purchase), and device data for operational purposes. We do not sell personal information. To exercise California rights or send a &ldquo;Do Not Sell/Share&rdquo; request, contact <a href="mailto:privacy@voicetypr.com" className="text-editorial-accent hover:underline">privacy@voicetypr.com</a>.
        </p>
      </section>
    </>
  );
}
