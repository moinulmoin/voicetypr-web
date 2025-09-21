export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8">Last Updated: August 6, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By downloading, installing, or using VoiceTypr ("the Software"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the Software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. License Grant</h2>
          <p>
            Ideaplexa LLC grants you a non-exclusive, non-transferable license to use VoiceTypr. The number of devices you can activate depends on your license tier:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Pro License:</strong> Activation on one (1) device at a time</li>
            <li><strong>Plus License:</strong> Activation on two (2) devices simultaneously</li>
          </ul>
          <p className="mt-4">
            You may deactivate and reactivate your license on different devices as needed within your license limits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Trial Period</h2>
          <p>
            VoiceTypr offers a 3-day free trial with full access to all features. No payment information is required during the trial period. After the trial expires, you must purchase a license to continue using the Software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Purchase and Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>VoiceTypr is sold as a one-time purchase with no recurring fees</li>
            <li>All purchases include future updates for the lifetime of the product</li>
            <li>We offer a 7 day money-back guarantee from the date of purchase</li>
            <li>Refunds will result in immediate license deactivation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Software only for lawful purposes</li>
            <li>Not reverse engineer, decompile, or modify the Software</li>
            <li>Not share, sell, or distribute your license key</li>
            <li>Be at least 13 years of age to use the Software</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data</h2>
          <p>
            VoiceTypr processes all voice data locally on your device. The Software only connects to our servers for license validation, activation, and trial verification. Please review our Privacy Policy for detailed information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Support and Updates</h2>
          <p>
            Support is provided via email. Updates are included with your purchase and will be provided as long as feasible. Ideaplexa LLC reserves the right to discontinue updates or support at its discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
          <p>
            THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. IDEAPLEXA LLC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL IDEAPLEXA LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of Wyoming, United States, without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p>
            Ideaplexa LLC<br />
            30 N Gould St Ste N<br />
            Sheridan, WY 82801<br />
            United States<br />
            Email: support@voicetypr.com
          </p>
        </section>
      </div>
    </div>
  );
}