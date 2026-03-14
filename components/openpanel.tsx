"use client";

import { OpenPanelComponent } from "@openpanel/nextjs";

export const OpenPanel = () => {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <OpenPanelComponent
      clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
      apiUrl={process.env.NEXT_PUBLIC_OPENPANEL_API_URL!}
      scriptUrl={process.env.NEXT_PUBLIC_OPENPANEL_CDN_URL!}
      trackScreenViews={true}
      trackOutgoingLinks={true}
      trackAttributes={true}
    />
  );
};
