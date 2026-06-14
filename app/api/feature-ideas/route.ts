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
  const webhookUrl = getFeatureIdeasWebhookUrl();

  if (!webhookUrl) {
    throw new Error('DISCORD_FEATURE_IDEAS_WEBHOOK_URL or DISCORD_BUG_REPORT_WEBHOOK_URL is not configured');
  }

  if (!webhookUrl.startsWith('https://discord.com/api/webhooks/')) {
    throw new Error('Feature idea Discord webhook URL must be a Discord webhook URL');
  }

  const page = request.headers.get('referer') || 'Unknown page';
  const payload = {
    username: 'Voicetypr Ideas',
    content: 'New Voicetypr feature idea',
    allowed_mentions: { parse: [] },
    embeds: [
      {
        title: 'Voicetypr feature request',
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

function getFeatureIdeasWebhookUrl(): string | undefined {
  return process.env.DISCORD_FEATURE_IDEAS_WEBHOOK_URL || process.env.DISCORD_BUG_REPORT_WEBHOOK_URL;
}

function truncate(value: string, maxLength: number): string {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;
}
