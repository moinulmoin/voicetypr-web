import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Suspense } from "react";

import { SuccessModal } from "../components/SuccessModal";
import LandingV2 from "../components/landing-v2/LandingV2";
import { getAllFreeTools } from "@/lib/free-tools";

// Preview-only route — keep it out of search until it's promoted to `/`.
export const metadata: Metadata = {
  title: "Voicetypr — Landing v2 (preview)",
  robots: { index: false, follow: false },
};

export default async function NewLandingPage() {
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get("affonso_referral")?.value || "";
  const referrer = (await headers()).get("referer") || "";

  const footerTools = getAllFreeTools().map((tool) => ({
    label: tool.shortTitle,
    href: `/tools/${tool.slug}`,
  }));

  return (
    <>
      <LandingV2
        affonsoReferral={affonsoReferral}
        referrer={referrer}
        footerTools={footerTools}
      />
      <Suspense>
        <SuccessModal />
      </Suspense>
    </>
  );
}
