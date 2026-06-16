import { createRouteHandler } from "@openpanel/nextjs/server";

// Official OpenPanel proxy handler. Serves /op1.js and forwards /track*
// requests to the self-hosted instance, including the real client IP via
// the `openpanel-client-ip` header so device/session identity stays stable.
export const { GET, POST } = createRouteHandler({
  apiUrl: process.env.NEXT_PUBLIC_OPENPANEL_API_URL,
});
