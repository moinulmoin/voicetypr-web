import { createVoicetyprApi } from '@voicetypr/api-core';
import { handle } from 'hono/vercel';
import { after } from 'next/server';

export const voicetyprApiHandler = handle(createVoicetyprApi({ runAfter: after }));
