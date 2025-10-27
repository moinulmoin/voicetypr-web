export default function CookiesPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <div className="space-y-6 text-base leading-relaxed">
        <p className="text-muted-foreground">Last updated: October 27, 2025</p>

        <p>
          We keep cookies simple. We set one necessary cookie (<span className="font-mono">vt_consent</span>) to remember
          your choice on the banner. If you accept, third‑party marketing tags (via Google Tag Manager) may set their own
          cookies for attribution. If you don’t accept, they won’t load.
        </p>

        <p>
          You can clear or block cookies anytime in your browser settings. Removing the
          <span className="px-1 font-mono">vt_consent</span> cookie will show the banner again.
        </p>
      </div>
    </div>
  );
}
