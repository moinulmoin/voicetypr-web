// Load .env before importing anything that reads process.env at import time
// (@voicetypr/db builds its Prisma client on import, reading DATABASE_URL).
import 'dotenv/config';

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
    // 0.0.0.0/:: aren't browsable — show loopback in the printed URL.
    const shown =
      info.address === '0.0.0.0' || info.address === '::' ? '127.0.0.1' : info.address;
    console.log(`Voicetypr API listening on http://${shown}:${info.port}`);
  }
);
