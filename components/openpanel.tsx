"use client";

import { OpenPanelComponent } from "@openpanel/nextjs";

export const OpenPanel = () => {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <OpenPanelComponent
      clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
      apiUrl="/api/op"
      scriptUrl="/api/op/op1.js"
      trackScreenViews={true}
      trackOutgoingLinks={true}
      trackAttributes={true}
    />
  );
};
