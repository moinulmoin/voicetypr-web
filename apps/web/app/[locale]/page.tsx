import { cookies, headers } from "next/headers";
import { Suspense } from "react";

import { SuccessModal } from "@/app/components/SuccessModal";
import LandingV2 from "@/app/components/landing-v2/LandingV2";
import { SiteFooter } from "@/components/marketing/site-footer";

export default async function HomePage() {
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get("affonso_referral")?.value || "";
  const referrer = (await headers()).get("referer") || "";

  return (
    <>
      <LandingV2
        affonsoReferral={affonsoReferral}
        referrer={referrer}
        footer={<SiteFooter />}
      />
      <Suspense>
        <SuccessModal />
      </Suspense>
    </>
  );
}
