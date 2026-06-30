import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Voicetypr",
  description:
    "Voicetypr's 7-day money-back guarantee: how it works, how to request a refund, and what happens after.",
  alternates: { canonical: "https://voicetypr.com/refund" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Refund Policy — Voicetypr",
    description:
      "A 7-day money-back guarantee on a one-time purchase, plus a free 3-day trial. Here's how refunds work.",
    url: "https://voicetypr.com/refund",
    siteName: "Voicetypr",
    type: "article",
  },
};

const sectionClass = "mt-12";
const h2Class =
  "font-sans text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-[1.2] tracking-tight text-foreground mb-4";
const pClass = "text-muted-foreground text-[15px] leading-[1.7]";
const linkClass = "text-sage underline underline-offset-2";

export default function RefundPage() {
  return (
    <>
      <header className="mb-12 pb-2">
        <h1 className="mb-3 font-sans text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-tight tracking-tight text-foreground">
          Refund Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last Updated: June 24, 2026
        </p>
      </header>

      <section className={sectionClass}>
        <h2 className={h2Class}>1. Our 7-day money-back guarantee</h2>
        <p className={pClass}>
          Voicetypr is a one-time purchase, and we stand behind it with a 7-day money-back guarantee. If Voicetypr isn&rsquo;t the right fit, you can request a full refund within 7 days of your purchase. We also offer a free 3-day trial, so you can run the full app before you ever pay.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>2. How to request a refund</h2>
        <p className={pClass}>
          Email <a href="mailto:support@voicetypr.com" className={linkClass}>support@voicetypr.com</a> from the address you used at checkout, and include your order number or license key. There&rsquo;s no form to fill out and no questions you have to answer &mdash; we&rsquo;ll take care of the rest.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>3. When the 7-day window starts</h2>
        <p className={pClass}>
          The 7-day period starts on your purchase date &mdash; the license issuance date shown on your order confirmation &mdash; regardless of when you download or activate the Software.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>4. After a refund</h2>
        <p className={pClass}>
          Once a refund is issued, your license is deactivated and access to the paid version ends. You&rsquo;re welcome to purchase again whenever you&rsquo;re ready.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>5. Payments and processing</h2>
        <p className={pClass}>
          Payments and refunds are handled by our payment provider, Polar.sh, acting as the merchant of record. Approved refunds are returned to your original payment method. The time it takes to appear depends on your bank or card issuer.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>6. EU consumers</h2>
        <p className={pClass}>
          If you are an EU consumer, by downloading or activating the Software you expressly request immediate performance and acknowledge that you lose the statutory 14-day right of withdrawal for digital content not supplied on a tangible medium. This does not affect our separate 7-day money-back guarantee above, which we offer voluntarily.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>7. Beyond the guarantee</h2>
        <p className={pClass}>
          After the 7-day window, refunds are not guaranteed. That said, if something has gone wrong, please reach out &mdash; we read every message and handle reasonable cases in good faith. We reserve the right to decline refund requests where there is apparent abuse or fraud.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>8. Team and volume licenses</h2>
        <p className={pClass}>
          The 7-day money-back guarantee above applies to individual purchases made directly through our self-serve checkout. Team, volume, and other licenses arranged through our sales or contact flow are custom orders, and their refund terms are those set out in that specific order or agreement &mdash; we&rsquo;ll always put them in writing before you pay, so nothing comes as a surprise. If something goes wrong with a team purchase, email us all the same; we handle reasonable cases in good faith, just as we do for everyone.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>9. Related terms</h2>
        <p className={pClass}>
          This Refund Policy forms part of our <Link href="/terms" className={linkClass}>Terms and Conditions</Link>. For license details see our <Link href="/eula" className={linkClass}>EULA</Link>, and for data practices see our <Link href="/privacy" className={linkClass}>Privacy Policy</Link>.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={h2Class}>10. Contact</h2>
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
