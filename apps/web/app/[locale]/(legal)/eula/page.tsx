import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "End User License Agreement — Voicetypr",
  description:
    "The license terms for using the Voicetypr software: license grant, device limits, ownership, restrictions, updates, and termination.",
  alternates: { canonical: "https://voicetypr.com/eula" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "End User License Agreement — Voicetypr",
    description:
      "License grant, device limits, ownership, restrictions, updates, and termination for the Voicetypr software.",
    url: "https://voicetypr.com/eula",
    siteName: "Voicetypr",
    type: "article",
  },
};

const sectionClass = "mt-12";
const h2Class =
  "font-sans text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-[1.2] tracking-tight text-foreground mb-4";
const pClass = "text-muted-foreground text-[15px] leading-[1.7]";
const ulClass =
  "list-disc pl-5 mt-2 space-y-1.5 text-muted-foreground text-[15px] leading-[1.7]";
const linkClass = "text-sage underline underline-offset-2";

export default function EulaPage() {
  return (
    <>
      <header className="mb-12 pb-2">
        <h1 className="mb-3 font-sans text-[clamp(2.25rem,4.2vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          End User License Agreement
        </h1>
        <p className="text-sm font-medium text-muted-foreground">
          Last Updated: June 24, 2026
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className={h2Class}>1. This Agreement</h2>
        <p className={pClass}>
          This End User License Agreement (&ldquo;EULA&rdquo;) is a legal agreement between you and Ideaplexa LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) for the Voicetypr software application, including its components, updates, and documentation (&ldquo;the Software&rdquo;). By downloading, installing, activating, or using the Software, you agree to this EULA. If you do not agree, do not install or use the Software. This EULA supplements our <Link href="/terms" className={linkClass}>Terms and Conditions</Link> and <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>2. License Grant</h2>
        <p className={pClass}>
          Subject to your compliance with this EULA, Ideaplexa LLC grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Software for your personal or internal business purposes, on the number of devices covered by your license:
        </p>
        <ul className={ulClass}>
          <li><strong className="text-foreground">1 device:</strong> Activation on one (1) device at a time</li>
          <li><strong className="text-foreground">2 devices:</strong> Activation on two (2) devices simultaneously</li>
          <li><strong className="text-foreground">4 devices:</strong> Activation on four (4) devices simultaneously</li>
          <li><strong className="text-foreground">Additional devices / team licenses:</strong> Activation limit stated at purchase</li>
        </ul>
        <p className={`${pClass} mt-3`}>
          You may deactivate and reactivate your license on different devices as needed within your license limits. The free trial grants a time-limited license as described in Section 4.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>3. Ownership</h2>
        <p className={pClass}>
          The Software is licensed, not sold. Ideaplexa LLC and its licensors retain all right, title, and interest in and to the Software, including all intellectual property rights. This EULA does not grant you any ownership of the Software, and all rights not expressly granted to you are reserved.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>4. Trial License</h2>
        <p className={pClass}>
          We offer a 3-day free trial with access to the Software&rsquo;s features, with no payment information required. The trial license is provided for evaluation and expires automatically at the end of the trial period. After the trial, a valid paid license is required for continued use.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>5. License Restrictions</h2>
        <p className={pClass}>
          Except to the extent applicable law expressly permits otherwise, you agree not to:
        </p>
        <ul className={ulClass}>
          <li>Reverse engineer, decompile, or disassemble the Software, or attempt to derive its source code</li>
          <li>Copy, modify, or create derivative works of the Software</li>
          <li>Rent, lease, lend, sell, sublicense, or otherwise transfer the Software or your license key</li>
          <li>Share, publish, or distribute your license key</li>
          <li>Remove or alter any proprietary notices in the Software</li>
          <li>Use the Software to build or assist in building a competing product, or for any unlawful purpose</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>6. Updates</h2>
        <p className={pClass}>
          Updates we release for the Software are included with your license. Development cadence, features, and release timing may change at our discretion, and we do not guarantee future features or updates. We may, in our sole discretion and at any time, modify, suspend, or discontinue the Software, any feature, or any supporting service, and may pause, slow, or cease active development, for any reason or for no reason and with or without notice. If active development is paused or discontinued, your license remains valid for the latest released version available at that time, which you may continue to use under this EULA. Each update is governed by this EULA unless it is accompanied by separate license terms.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>7. Local, Optional, and Third-Party Components</h2>
        <p className={pClass}>
          The Software transcribes voice locally on your device by default. Certain optional features &mdash; such as AI text formatting or non-local transcription &mdash; connect to third-party services only when you enable them, as described in our <Link href="/privacy" className={linkClass}>Privacy Policy</Link>. The Software may also include third-party or open-source components provided under their own license terms; to the extent of any conflict, those terms govern your use of those components.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>8. Term and Termination</h2>
        <p className={pClass}>
          This EULA is effective until terminated. It terminates automatically if you fail to comply with it, and we may suspend or terminate license services in cases of abuse or fraud. Your license also ends if your purchase is refunded. Upon termination, you must stop using and remove the Software. Sections relating to ownership, restrictions, disclaimers, limitation of liability, and governing law survive termination.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>9. Disclaimer of Warranties</h2>
        <p className={pClass}>
          THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. IDEAPLEXA LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>10. Limitation of Liability</h2>
        <p className={pClass}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL IDEAPLEXA LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE.
        </p>
        <p className={`${pClass} mt-3 text-[13.5px]`}>
          Nothing in this EULA limits liability that cannot be limited under applicable law (for example, liability for fraud, intentional misconduct, or non&#8209;waivable consumer rights).
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>11. Governing Law</h2>
        <p className={pClass}>
          This EULA is governed by the laws of the State of Wyoming, United States, without regard to conflict-of-law principles, as further described in our <Link href="/terms" className={linkClass}>Terms and Conditions</Link>.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>12. Relationship to Other Terms</h2>
        <p className={pClass}>
          This EULA supplements our <Link href="/terms" className={linkClass}>Terms and Conditions</Link>, <Link href="/refund" className={linkClass}>Refund Policy</Link>, and <Link href="/privacy" className={linkClass}>Privacy Policy</Link>. In the event of a conflict regarding purchase, refunds, or use of our services, the Terms and Conditions control; the handling of your data is governed by the Privacy Policy.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>13. Contact</h2>
        <p className={`${pClass} mt-3 rounded-xl border border-border bg-muted p-4 font-mono text-sm`}>
          Ideaplexa LLC<br />
          30 N Gould St Ste N<br />
          Sheridan, WY 82801<br />
          United States<br />
          Email: <a href="mailto:support@voicetypr.com" className={linkClass}>support@voicetypr.com</a>
        </p>
      </section>
    </>
  );
}
