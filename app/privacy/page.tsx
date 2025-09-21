export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8">Last Updated: August 6, 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Ideaplexa LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use VoiceTypr ("the Software").
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-2 mt-4">2.1 Device Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device hash (anonymized device identifier)</li>
            <li>App version</li>
            <li>Operating system type</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-4">2.2 License Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>License key (when activated)</li>
            <li>Activation status</li>
            <li>Trial period dates</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-4">2.3 Purchase Information</h3>
          <p>
            Payment processing is handled by Polar.sh. We receive only essential info for trial check. We do not store credit card or payment details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Local Usage Data</h2>

          <h3 className="text-xl font-semibold mb-2 mt-4">3.1 Productivity Statistics</h3>
          <p>
            VoiceTypr tracks the following data locally on your device only:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usage streaks and daily activity</li>
            <li>Transcription history (stored locally)</li>
            <li>Words transcribed count</li>
            <li>Time saved estimates</li>
          </ul>
          <p className="mt-2">
            This data is stored on your device and is never transmitted to our servers. You can export or share these statistics at your discretion.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Audio File Processing</h3>
          <p>
            When you upload audio files for transcription:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Files are processed entirely on your device</li>
            <li>No audio data is uploaded to any server</li>
            <li>Files remain in your local system only</li>
            <li>Transcriptions are stored locally in your history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information We DO NOT Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Voice recordings or transcriptions from our servers</li>
            <li>Text you dictate or type</li>
            <li>Personal files or documents</li>
            <li>Browsing history or app usage patterns</li>
            <li>Audio files you upload for transcription</li>
          </ul>
          <p className="mt-4">
            <strong>All voice and audio processing happens locally on your device using local AI models. Your voice data and audio files never leave your computer.</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. How We Use Information</h2>
          <p>We use collected information solely for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>License validation and activation</li>
            <li>Trial period management</li>
            <li>Preventing license abuse</li>
            <li>Processing refunds</li>
            <li>Providing customer support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Storage and Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>License data is stored in secure, encrypted databases</li>
            <li>Servers are located in the European Union</li>
            <li>We use industry-standard security measures</li>
            <li>Access is limited to authorized personnel only</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Active license data: Retained while license is valid</li>
            <li>Trial data: Retained for fraud prevention purposes</li>
            <li>Activity logs: Retained for 90 days for debugging</li>
            <li>Refunded licenses: Data cleared immediately</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Polar.sh:</strong> Payment processing and license key generation</li>
            <li><strong>Database hosting:</strong> Secure infrastructure for license validation</li>
          </ul>
          <p className="mt-4">These services have their own privacy policies and data practices.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request information about data we store</li>
            <li>Request deletion of your data</li>
            <li>Deactivate your license at any time</li>
            <li>Opt out of any communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
          <p>
            VoiceTypr is intended for users aged 13 and older. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last Updated" date. Continued use of the Software after changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p>
            For privacy-related questions or concerns:<br /><br />
            Ideaplexa LLC<br />
            30 N Gould St Ste N<br />
            Sheridan, WY 82801<br />
            United States<br />
            Email: privacy@voicetypr.com
          </p>
        </section>
      </div>
    </div>
  );
}