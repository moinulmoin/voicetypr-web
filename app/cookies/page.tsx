export default function CookiesPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 23, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p>
            We use cookies and similar technologies to run essential site features and, with your consent, to understand
            how the website is used. You can change your preferences anytime via “Manage cookies” in the footer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Categories</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Necessary</strong> — required for core functionality (e.g., your cookie preference). These cannot be turned off.
            </li>
            <li>
              <strong>Marketing</strong> — optional attribution/ads pixels (e.g., Google Tag Manager, Affonso) used to measure conversions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Cookies we set</h2>
          <p className="mb-3">This table lists the primary cookies the site may store in your browser.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Category</th>
                  <th className="text-left p-2">Purpose</th>
                  <th className="text-left p-2">Duration</th>
                  <th className="text-left p-2">Provider</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-mono">vt_consent</td>
                  <td className="p-2">Necessary</td>
                  <td className="p-2">Stores your cookie consent preferences.</td>
                  <td className="p-2">Up to 6 months</td>
                  <td className="p-2">voicetypr.com</td>
                </tr>
                <tr>
                  <td className="p-2 font-mono">Various (third‑party)</td>
                  <td className="p-2">Marketing</td>
                  <td className="p-2">Attribution/ads conversion measurement via Google Tag Manager and Affonso.</td>
                  <td className="p-2">Up to provider settings</td>
                  <td className="p-2">Google/Affonso (third‑party)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">If you reject Marketing, we do not load marketing scripts. A minimal Google Tag Manager noscript iframe may still be present for basic container functionality, but we configure it to avoid setting marketing cookies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Managing consent</h2>
          <p>You can accept all, reject, or tailor preferences using the banner or the <em>Manage cookies</em> link in the footer.</p>
        </section>
      </div>
    </div>
  );
}
