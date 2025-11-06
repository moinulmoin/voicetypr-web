import { cookies, headers } from "next/headers";
import Pricing from "./Pricing";

export default async function PricingServer() {
  const cookieStore = await cookies();
  const affonsoReferral = cookieStore.get("affonso_referral")?.value || "";

  const referrer = (await headers()).get("referer") || "";

  return <Pricing affonsoReferral={affonsoReferral} referrer={referrer} />;
}
