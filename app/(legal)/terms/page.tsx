import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — VoiceTypr",
  description:
    "Pay once, lifetime use. License terms, refunds, EU consumer rights, and dispute resolution for VoiceTypr.",
  alternates: { canonical: "https://voicetypr.com/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service — VoiceTypr",
    description:
      "License terms, refunds, EU consumer rights, and dispute resolution.",
    url: "https://voicetypr.com/terms",
    siteName: "VoiceTypr",
    type: "article",
  },
};

const sectionClass = "mt-10";
const h2Class =
  "font-serif text-[clamp(22px,2.2vw,30px)] leading-[1.15] tracking-[-0.015em] mb-4";
const pClass = "text-editorial-ink-2 text-[15.5px] leading-[1.65]";
const ulClass = "list-disc pl-6 mt-2 space-y-1.5 text-editorial-ink-2 text-[15.5px] leading-[1.65]";

export default function TermsPage() {
  return (
    <>
      <header className="mb-10">
        <span className="ed-eyebrow">policy &middot; terms</span>
        <h1 className="font-serif text-[clamp(40px,4.5vw,60px)] leading-[1.05] tracking-[-0.025em] mt-2 mb-3">
          Terms and Conditions
        </h1>
        <p className="font-sans font-medium uppercase tracking-[0.12em] text-[12.5px] text-editorial-ink-3">
          Last Updated: October 23, 2025
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className={h2Class}>1. Agreement to Terms</h2>
        <p className={pClass}>
          By downloading, installing, or using VoiceTypr (&ldquo;the Software&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the Software.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>2. License Grant</h2>
        <p className={pClass}>
          Ideaplexa LLC grants you a non-exclusive, non-transferable license to use VoiceTypr. The number of devices you can activate depends on your license tier:
        </p>
        <ul className={ulClass}>
          <li><strong className="text-editorial-ink">Pro License:</strong> Activation on one (1) device at a time</li>
          <li><strong className="text-editorial-ink">Plus License:</strong> Activation on two (2) devices simultaneously</li>
          <li><strong className="text-editorial-ink">Max License:</strong> Activation on four (4) devices simultaneously</li>
        </ul>
        <p className={`${pClass} mt-3`}>
          You may deactivate and reactivate your license on different devices as needed within your license limits.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>3. Trial Period</h2>
        <p className={pClass}>
          VoiceTypr offers a 3-day free trial with full access to all features. No payment information is required during the trial period. After the trial expires, you must purchase a license to continue using the Software.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>4. Purchase and Refunds</h2>
        <ul className={ulClass}>
          <li>VoiceTypr is sold as a one-time purchase with no recurring fees</li>
          <li>All purchases include future updates for the lifetime of the product</li>
          <li>We offer a 7-day money-back guarantee from the date of purchase</li>
          <li>Refunds will result in immediate license deactivation</li>
        </ul>
        <p className={`${pClass} mt-3`}>
          The 7&#8209;day period starts on the purchase date shown on your order confirmation (license issuance), regardless of when you download or activate.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>4A. EU Right of Withdrawal for Digital Content</h2>
        <p className={pClass}>
          If you are an EU consumer, you acknowledge that by downloading/activating the Software you expressly request immediate performance and confirm you lose the statutory right of withdrawal for digital content not supplied on a tangible medium. This does not affect our separate 7&#8209;day money&#8209;back guarantee described above.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>5. Acceptable Use</h2>
        <p className={pClass}>You agree to:</p>
        <ul className={ulClass}>
          <li>Use the Software only for lawful purposes</li>
          <li>Not reverse engineer, decompile, or modify the Software</li>
          <li>Not share, sell, or distribute your license key</li>
          <li>Be at least 13 years of age to use the Software</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>6. Privacy and Data</h2>
        <p className={pClass}>
          VoiceTypr processes all voice data locally on your device. The Software only connects to our servers for license validation, activation, and trial verification. Please review our <Link href="/privacy" className="text-editorial-accent hover:underline">Privacy Policy</Link> for detailed information.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>6A. Termination and Changes</h2>
        <p className={pClass}>
          We may suspend or terminate access to license services in cases of abuse or fraud. We may update the Software and these Terms; continued use after updates constitutes acceptance.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>7. Support and Updates</h2>
        <p className={pClass}>
          Support is provided via email. Updates are included with your purchase, and our goal is to continue improving the Software over time. That said, development cadence and priorities may change, and we do not guarantee delivery of future features or updates. If active development is paused, your license remains valid for the latest released version available at that time, which you may continue to use under these Terms. Maintenance or compatibility updates may be provided at our discretion.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>7A. Product Direction and Changes</h2>
        <p className={pClass}>
          We continually evaluate what to build next. Accordingly, Ideaplexa LLC reserves the right, in its sole discretion, to modify, suspend, or discontinue any feature or release schedule at any time. Roadmaps are aspirational and may change. Nothing in these Terms obligates us to deliver specific functionality. These decisions do not affect the validity of your license for versions already released to you.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>8. Disclaimer of Warranties</h2>
        <p className={pClass}>
          THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. IDEAPLEXA LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>9. Limitation of Liability</h2>
        <p className={pClass}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL IDEAPLEXA LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE.
        </p>
        <p className={`${pClass} mt-3 text-[13.5px] text-editorial-ink-3`}>
          Nothing in these Terms limits liability that cannot be limited under applicable law (for example, liability for fraud, intentional misconduct, or non&#8209;waivable consumer rights).
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>10. Governing Law</h2>
        <p className={pClass}>
          These Terms shall be governed by the laws of Wyoming, United States, without regard to conflict of law principles.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>11. Venue and Dispute Resolution</h2>
        <p className={pClass}>
          Courts located in Sheridan County, Wyoming shall have exclusive jurisdiction. You agree to first attempt informal resolution by contacting <a href="mailto:support@voicetypr.com" className="text-editorial-accent hover:underline">support@voicetypr.com</a>.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>12. Export Control</h2>
        <p className={pClass}>
          You represent that you are not located in, under control of, or a national or resident of any country or entity subject to U.S. sanctions and agree to comply with applicable export control laws.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>13. Age Requirements</h2>
        <p className={pClass}>
          You must be at least 13 years old to use the Software. Where local law requires a higher age for consent to data processing (e.g., up to 16 in some EU countries), you confirm you meet that age or have parental consent.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>14. Contact Information</h2>
        <p className={`${pClass} font-mono text-[14px]`}>
          Ideaplexa LLC<br />
          30 N Gould St Ste N<br />
          Sheridan, WY 82801<br />
          United States<br />
          Email: <a href="mailto:support@voicetypr.com" className="text-editorial-accent hover:underline">support@voicetypr.com</a>
        </p>
      </section>
    </>
  );
}
