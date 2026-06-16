import { serve } from '@hono/node-server';
import { app } from './app.js';

const port = Number(process.env.PORT ?? 4000);
const hostname = process.env.HOSTNAME ?? '0.0.0.0';

serve(
  {
    fetch: app.fetch,
    hostname,
    port,
  },
  (info) => {
    console.log(`Voicetypr API listening on http://${info.address}:${info.port}`);
  }
);
