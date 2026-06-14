import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Voicetypr",
  description:
    "How Voicetypr handles license, purchase, support, analytics, and optional formatting data.",
  alternates: { canonical: "https://voicetypr.com/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy — Voicetypr",
    description:
      "Local transcription by default, plus clear disclosures for licensing, support, analytics, and optional text formatting.",
    url: "https://voicetypr.com/privacy",
    siteName: "Voicetypr",
    type: "article",
  },
};

const sectionClass = "mt-12";
const h2Class =
  "font-sans text-[clamp(21px,2vw,28px)] font-semibold leading-[1.2] tracking-[-0.01em] text-editorial-ink mb-4";
const h3Class =
  "font-sans font-semibold text-[16px] mt-6 mb-2 text-editorial-ink";
const pClass = "text-editorial-ink-2 text-[15px] leading-[1.7]";
const ulClass = "list-disc pl-5 mt-2 space-y-1.5 text-editorial-ink-2 text-[15px] leading-[1.7]";

export default function PrivacyPage() {
  return (
    <>
      <header className="mb-12 pb-2">
        <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-editorial-ink-3">Policy · privacy</span>
        <h1 className="mt-3 mb-3 font-sans text-[clamp(34px,4.2vw,50px)] font-semibold leading-[1.08] tracking-[-0.02em] text-editorial-ink">
          Privacy Policy
        </h1>
        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-editorial-ink-3">
          Last Updated: May 22, 2026
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className={h2Class}>1. Introduction</h2>
        <p className={pClass}>
          Ideaplexa LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use Voicetypr (&ldquo;the Software&rdquo;).
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>2. Information We Collect</h2>

        <h3 className={h3Class}>2.0 Controller</h3>
        <p className={pClass}>
          Ideaplexa LLC is the data controller for website and license data. Contact: support@voicetypr.com
        </p>

        <h3 className={h3Class}>2.1 Device Information</h3>
        <ul className={ulClass}>
          <li>Device hash or device identifier used for trials, activation, validation, and abuse prevention</li>
          <li>App version</li>
          <li>Operating system type and version</li>
          <li>Device name, if provided during license activation</li>
        </ul>

        <h3 className={h3Class}>2.2 License Information</h3>
        <ul className={ulClass}>
          <li>License key (when activated)</li>
          <li>Activation status</li>
          <li>Trial period dates</li>
        </ul>

        <h3 className={h3Class}>2.3 Purchase Information</h3>
        <p className={pClass}>
          Payment processing is handled by Polar.sh. We receive and store the purchase and license information needed to issue licenses, manage device limits, process refunds, and provide support. We do not store credit card or payment card details.
        </p>

        <h3 className={h3Class}>2.4 Cookies and online identifiers</h3>
        <p className={pClass}>
          See our <Link href="/cookies" className="text-editorial-ink underline-offset-4 hover:underline">Cookie Policy</Link> for details on cookie categories and purposes. Non&#8209;essential cookies load only with your consent.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>3. Local and Optional Network Processing</h2>

        <h3 className={h3Class}>3.1 Local transcription and local usage data</h3>
        <p className={pClass}>Voicetypr normally transcribes voice on your device using local models. Local app data may include:</p>
        <ul className={ulClass}>
          <li>Usage streaks and daily activity</li>
          <li>Transcription history stored by the app on your device</li>
          <li>Words transcribed count</li>
          <li>Time saved estimates</li>
          <li>Audio or video files you choose to transcribe locally</li>
        </ul>
        <p className={`${pClass} mt-3`}>
          This local app data is stored on your device. It is not sent to our servers unless you choose to send diagnostics, contact support, or enable an optional network feature.
        </p>

        <h3 className={h3Class}>3.2 Optional AI formatting and network features</h3>
        <p className={pClass}>
          If you enable AI formatting presets, Voicetypr may send the transcribed text, not the original audio, to the AI provider you configure. If you explicitly enable an optional non-local transcription mode, audio may be sent as part of that opt-in workflow. These features are separate from the default local transcription workflow.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>4. Information We DO NOT Collect by Default</h2>
        <ul className={ulClass}>
          <li>Raw voice recordings during normal local transcription</li>
          <li>Audio or video files you process locally</li>
          <li>Personal files or documents on your computer</li>
          <li>Browsing history</li>
          <li>Your full transcription history, unless you choose to send diagnostics or enable an optional provider workflow</li>
        </ul>
        <p className={`${pClass} mt-4`}>
          <strong className="text-editorial-ink">Local transcription is the default. Optional AI formatting can send text only when you enable it, and support reports can include the diagnostic details you choose to submit.</strong>
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>5. Purposes and Legal Bases (GDPR)</h2>
        <ul className={ulClass}>
          <li>License and trial management — <em>Performance of contract</em></li>
          <li>Fraud prevention and security — <em>Legitimate interests</em></li>
          <li>Customer support — <em>Performance of contract</em> or <em>Legitimate interests</em></li>
          <li>Analytics — <em>Legitimate interests</em>; OpenPanel is used for website analytics</li>
          <li>Marketing/attribution — <em>Consent</em> (loaded only with consent)</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>6. Data Storage and Security</h2>
        <ul className={ulClass}>
          <li>License, trial, and support data is stored with service providers we use to operate Voicetypr</li>
          <li>We use reasonable technical and organizational security measures</li>
          <li>Access is limited to authorized personnel and service providers who need it to operate, secure, or support the product</li>
          <li>Where data is transferred internationally, we rely on appropriate safeguards where required</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>7. Data Retention</h2>
        <ul className={ulClass}>
          <li>License and purchase records: retained while needed to provide the license, handle refunds, prevent abuse, and meet legal or tax obligations</li>
          <li>Trial and device records: retained as needed for trial enforcement, license validation, fraud prevention, and support</li>
          <li>Support and bug reports: retained as needed to respond, debug, and improve the product</li>
          <li>Consent records: retained so we can remember your cookie choices</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>8. Third-Party Services</h2>
        <p className={pClass}>We use the following third-party services:</p>
        <ul className={ulClass}>
          <li><strong className="text-editorial-ink">Polar.sh:</strong> Checkout, payment processing, license key generation, activation, refunds, and customer/license records</li>
          <li><strong className="text-editorial-ink">Database and hosting providers:</strong> Infrastructure for license validation, trials, and website/API operation</li>
          <li><strong className="text-editorial-ink">OpenPanel:</strong> Website analytics</li>
          <li><strong className="text-editorial-ink">Google Tag Manager &amp; Affonso:</strong> Marketing/attribution and metrics; Affonso runs in consent mode and marketing cookies are only enabled with consent</li>
          <li><strong className="text-editorial-ink">Discord:</strong> Delivery of support, bug, and crash reports you submit through the app</li>
          <li><strong className="text-editorial-ink">Optional AI providers:</strong> If you enable AI formatting, text may be sent to the provider you configure, such as OpenAI, Anthropic, Google Gemini, or an OpenAI-compatible endpoint</li>
        </ul>
        <p className={`${pClass} mt-3`}>These services have their own privacy policies and data practices.</p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>9. Your Rights</h2>
        <p className={pClass}>
          Depending on your location, you may have the right to access, rectify, erase, restrict, object to processing, or request portability of your personal data. You can also withdraw consent at any time for consent&#8209;based processing.
        </p>
        <p className={`${pClass} mt-3`}>
          To exercise rights, contact: <a href="mailto:support@voicetypr.com" className="text-editorial-ink underline-offset-4 hover:underline">support@voicetypr.com</a>. You may also lodge a complaint with your local supervisory authority in the EU/EEA.
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
          Voicetypr is intended for users aged 13 and older. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us.
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
        <p className={`${pClass} mt-3 bg-editorial-surface-2 p-4 font-mono text-[14px]`}>
          Ideaplexa LLC<br />
          30 N Gould St Ste N<br />
          Sheridan, WY 82801<br />
          United States<br />
          Email: <a href="mailto:support@voicetypr.com" className="text-editorial-ink underline-offset-4 hover:underline">support@voicetypr.com</a>
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>14. California (CCPA/CPRA)</h2>
        <p className={pClass}>
          We disclose categories such as identifiers (license/account), commercial information (purchase), and device data for operational purposes. We do not sell personal information. To exercise California rights or send a &ldquo;Do Not Sell/Share&rdquo; request, contact <a href="mailto:support@voicetypr.com" className="text-editorial-ink underline-offset-4 hover:underline">support@voicetypr.com</a>.
        </p>
      </section>
    </>
  );
}
