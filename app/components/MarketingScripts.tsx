"use client";

import { useEffect, useState } from "react";

export function MarketingScripts() {
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    // Check consent on client side only
    const rawConsent = document.cookie
      .split('; ')
      .find(row => row.startsWith('vt_consent='))
      ?.split('=')[1];
    
    if (rawConsent) {
      try {
        const parsed = JSON.parse(decodeURIComponent(rawConsent));
        setMarketingAllowed(!!parsed?.marketing);
      } catch {}
    }
  }, []);

  if (!marketingAllowed) return null;

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WT5KZRJM"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}