import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const MAX_REQUEST_BYTES = 8_000;
const MAX_IDEA_LENGTH = 1_000;

const featureIdeaSchema = z.object({
  idea: z.string().trim().min(1).max(MAX_IDEA_LENGTH),
});

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json({ success: false, message: 'Message is too large.' }, { status: 413 });
    }

    const bodyText = await request.text();
    if (Buffer.byteLength(bodyText, 'utf8') > MAX_REQUEST_BYTES) {
      return NextResponse.json({ success: false, message: 'Message is too large.' }, { status: 413 });
    }

    let body: unknown;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json({ success: false, message: 'Invalid JSON.' }, { status: 400 });
    }

    const validationResult = featureIdeaSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ success: false, message: 'Write a feature idea first.' }, { status: 400 });
    }

    await sendDiscordFeatureIdea(validationResult.data.idea, request);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Feature idea submission failed:', error);
    return NextResponse.json({ success: false, message: 'Could not send feature idea.' }, { status: 500 });
  }
}

async function sendDiscordFeatureIdea(idea: string, request: NextRequest): Promise<void> {
  const webhookUrl = process.env.DISCORD_FEATURE_IDEAS_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('DISCORD_FEATURE_IDEAS_WEBHOOK_URL is not configured');
  }

  if (!webhookUrl.startsWith('https://discord.com/api/webhooks/')) {
    throw new Error('DISCORD_FEATURE_IDEAS_WEBHOOK_URL must be a Discord webhook URL');
  }

  const page = request.headers.get('referer') || 'Unknown page';
  const payload = {
    username: 'VoiceTypr Ideas',
    content: 'New VoiceTypr feature idea',
    allowed_mentions: { parse: [] },
    embeds: [
      {
        title: 'Feature idea',
        description: truncate(idea, 1_000),
        color: 0xd4965d,
        fields: [
          { name: 'Page', value: truncate(page, 1_024), inline: false },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => '');
    throw new Error(`Discord webhook failed with ${response.status}: ${responseText.slice(0, 500)}`);
  }
}

function truncate(value: string, maxLength: number): string {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
}
