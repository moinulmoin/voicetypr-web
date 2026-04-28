import { NextRequest, NextResponse } from 'next/server';
import {
  getCorsHeaders,
  withCorsHeaders,
  createSuccessResponse,
  createErrorResponse,
  handleInternalError,
  handleValidationError,
} from '@/lib/api-utils';
import { ERROR_MESSAGES, ErrorCode } from '@/lib/constants';
import { redis } from '@/lib/redis';
import { bugReportRequestSchema, type BugReportRequest } from '@/lib/types';

// Per-device is the normal limit; per-IP is a harder backstop because device IDs are client supplied.
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const RATE_LIMIT_MAX_REPORTS = 5;
const RATE_LIMIT_MAX_IP_REPORTS = 20;
const DISCORD_WAIT_QUERY = 'wait=true';
const MAX_REQUEST_BYTES = 100_000;
const RATE_LIMIT_SCRIPT = redis.createScript<number>(`
  redis.call('SET', KEYS[1], 0, 'EX', ARGV[1], 'NX')
  local n = redis.call('INCR', KEYS[1])
  return n
`);

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return withCorsHeaders(createErrorResponse(ErrorCode.PAYLOAD_TOO_LARGE, 413));
    }

    const bodyText = await request.text();
    if (Buffer.byteLength(bodyText, 'utf8') > MAX_REQUEST_BYTES) {
      return withCorsHeaders(createErrorResponse(ErrorCode.PAYLOAD_TOO_LARGE, 413));
    }

    let body: unknown;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return withCorsHeaders(
        NextResponse.json(
          {
            success: false,
            error: ErrorCode.PARAMETER_VALIDATION_ERROR,
            message: 'Invalid JSON.',
          },
          { status: 400 }
        )
      );
    }
    const validationResult = bugReportRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return withCorsHeaders(handleValidationError(validationResult.error));
    }

    const report = validationResult.data;
    const rateLimit = await checkRateLimit(request, report);

    if (!rateLimit.allowed) {
      return withCorsHeaders(
        NextResponse.json(
          {
            success: false,
            error: ErrorCode.RATE_LIMITED,
            message: ERROR_MESSAGES[ErrorCode.RATE_LIMITED],
          },
          { status: 429, headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_SECONDS) } }
        )
      );
    }

    await sendDiscordReport(report);

    return withCorsHeaders(createSuccessResponse({ delivered: true }, 'Report submitted'));
  } catch (error) {
    return withCorsHeaders(handleInternalError(error));
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: getCorsHeaders() });
}

async function checkRateLimit(request: NextRequest, report: BugReportRequest): Promise<{ allowed: boolean }> {
  const ipAddress = getClientIp(request);
  const rawDeviceId = report.environment.deviceId || 'unknown-device';
  const deviceId = normalizeRateLimitPart(rawDeviceId);
  const ipPart = normalizeRateLimitPart(ipAddress);
  const deviceKey = `bug-report:rate:${ipPart}:${deviceId}`;
  const ipKey = `bug-report:rate:${ipPart}`;

  const [deviceCount, ipCount] = await Promise.all([
    RATE_LIMIT_SCRIPT.eval([deviceKey], [String(RATE_LIMIT_WINDOW_SECONDS)]),
    RATE_LIMIT_SCRIPT.eval([ipKey], [String(RATE_LIMIT_WINDOW_SECONDS)]),
  ]);

  return {
    allowed: deviceCount <= RATE_LIMIT_MAX_REPORTS && ipCount <= RATE_LIMIT_MAX_IP_REPORTS,
  };
}

function getClientIp(request: NextRequest): string {
  // Vercel/CDN sets this for production traffic; direct clients can spoof it, so Redis
  // also keys by the client-provided device ID and uses an IP-only backstop.
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return (
    forwardedFor ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    'unknown-ip'
  );
}

function normalizeRateLimitPart(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9_.-]/g, '_').slice(0, 128) || 'unknown';
}

async function sendDiscordReport(report: BugReportRequest): Promise<void> {
  const webhookUrl = process.env.DISCORD_BUG_REPORT_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('DISCORD_BUG_REPORT_WEBHOOK_URL is not configured');
  }

  if (!webhookUrl.startsWith('https://discord.com/api/webhooks/')) {
    throw new Error('DISCORD_BUG_REPORT_WEBHOOK_URL must be a Discord webhook URL');
  }

  const fullReport = formatFullReport(report);
  const payload = {
    username: 'VoiceTypr Reports',
    content: report.kind === 'crash' ? 'New VoiceTypr crash report' : 'New VoiceTypr bug report',
    allowed_mentions: { parse: [] },
    embeds: [buildDiscordEmbed(report)],
    attachments: [
      {
        id: 0,
        filename: 'voicetypr-report.txt',
        description: 'Full bounded VoiceTypr report including latest log excerpt',
      },
    ],
  };

  const formData = new FormData();
  formData.append('payload_json', JSON.stringify(payload));
  formData.append(
    'files[0]',
    new Blob([fullReport], { type: 'text/plain; charset=utf-8' }),
    'voicetypr-report.txt'
  );

  const separator = webhookUrl.includes('?') ? '&' : '?';
  const response = await fetch(`${webhookUrl}${separator}${DISCORD_WAIT_QUERY}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => '');
    throw new Error(`Discord webhook failed with ${response.status}: ${responseText.slice(0, 500)}`);
  }
}

function buildDiscordEmbed(report: BugReportRequest) {
  const environment = report.environment;
  const title = report.kind === 'crash' ? 'VoiceTypr crash report' : 'VoiceTypr bug report';
  const description = report.kind === 'crash'
    ? truncate(redactDiagnosticText(report.crash.errorMessage), 1_000)
    : truncate(redactDiagnosticText(report.message), 1_000);

  return {
    title,
    description,
    color: report.kind === 'crash' ? 0xef4444 : 0x3b82f6,
    fields: [
      { name: 'App Version', value: truncate(environment.appVersion, 1_024), inline: true },
      { name: 'Platform', value: truncate(`${environment.platform} ${environment.osVersion}`, 1_024), inline: true },
      { name: 'Architecture', value: truncate(environment.architecture, 1_024), inline: true },
      { name: 'Model', value: truncate(environment.currentModel || 'None', 1_024), inline: true },
      { name: 'Contact', value: truncate(formatContact(report), 1_024), inline: true },
      { name: 'Log', value: truncate(formatLogSummary(report), 1_024), inline: false },
    ],
    timestamp: environment.timestamp,
  };
}

function formatContact(report: BugReportRequest): string {
  // Contact is intentionally not redacted; it is the reply path the user chose to provide.
  const parts = [];
  if (report.name) parts.push(report.name);
  if (report.email) parts.push(report.email);
  return parts.length > 0 ? parts.join(' / ') : 'Not provided';
}

function formatLogSummary(report: BugReportRequest): string {
  const latestLog = report.latestLog;
  const source = latestLog.fileName || 'No file';
  const truncation = latestLog.truncated ? 'truncated' : 'not truncated';
  const status = latestLog.statusNote ? ` — ${latestLog.statusNote}` : '';
  return `${source} (${latestLog.content.length} chars, ${truncation})${status}`;
}

function formatFullReport(report: BugReportRequest): string {
  const lines: string[] = [];

  lines.push(`# VoiceTypr ${report.kind === 'crash' ? 'Crash' : 'Bug'} Report`);
  lines.push('');

  if (report.name || report.email) {
    lines.push('## Contact');
    if (report.name) lines.push(`Name: ${report.name}`);
    if (report.email) lines.push(`Email: ${report.email}`);
    lines.push('');
  }

  if (report.kind === 'manual') {
    lines.push('## Message');
    lines.push(redactDiagnosticText(report.message));
    lines.push('');
  } else {
    if (report.message) {
      lines.push('## User Message');
      lines.push(redactDiagnosticText(report.message));
      lines.push('');
    }

    lines.push('## Crash');
    lines.push(`Error: ${redactDiagnosticText(report.crash.errorMessage)}`);
    if (report.crash.errorStack) {
      lines.push('');
      lines.push('### Stack');
      lines.push(redactDiagnosticText(report.crash.errorStack));
    }
    if (report.crash.componentStack) {
      lines.push('');
      lines.push('### Component Stack');
      lines.push(redactDiagnosticText(report.crash.componentStack));
    }
    lines.push('');
  }

  lines.push('## Environment');
  lines.push(`App Version: ${report.environment.appVersion}`);
  lines.push(`Platform: ${report.environment.platform}`);
  lines.push(`OS Version: ${report.environment.osVersion}`);
  lines.push(`Architecture: ${report.environment.architecture}`);
  lines.push(`Current Model: ${report.environment.currentModel || 'None'}`);
  lines.push(`Device ID: ${report.environment.deviceId || 'Unknown'}`);
  lines.push(`Timestamp: ${report.environment.timestamp}`);
  lines.push('');

  lines.push('## Latest App Log');
  if (report.latestLog.fileName) lines.push(`Source: ${report.latestLog.fileName}`);
  if (report.latestLog.statusNote) lines.push(`Status: ${report.latestLog.statusNote}`);
  if (report.latestLog.truncated) lines.push('Note: log was truncated before submission.');
  lines.push('');
  lines.push(redactDiagnosticText(report.latestLog.content) || '(No log content)');

  return lines.join('\n');
}

function redactDiagnosticText(value: string): string {
  return value
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[REDACTED_EMAIL]')
    .replace(/\b(?:sk|sk-ant|ghp|gho|github_pat)[_-][A-Za-z0-9_-]{16,}\b/g, '[REDACTED_TOKEN]')
    .replace(/\bsk-[A-Za-z0-9_-]{20,}\b/g, '[REDACTED_TOKEN]')
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, '[REDACTED_AWS_KEY]')
    .replace(/\bhf_[A-Za-z0-9]{32,}\b/g, '[REDACTED_TOKEN]')
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]{16,}\b/gi, 'Bearer [REDACTED_TOKEN]')
    .replace(/\b(api[_-]?key|access[_-]?token|refresh[_-]?token|secret|license[_-]?key)\b\s*[:=]\s*[^\s,;]+/gi, '$1=[REDACTED_SECRET]')
    .replace(/\/Users\/[^/\s]+/g, '/Users/[REDACTED_USER]')
    .replace(/\/home\/[^/\s]+/g, '/home/[REDACTED_USER]')
    .replace(/\/root\//g, '/[REDACTED_USER]/')
    .replace(/[A-Za-z]:\\Users\\[^\\\s]+/g, '[REDACTED_DRIVE]:\\Users\\[REDACTED_USER]');
}

function truncate(value: string, maxLength: number): string {
  return value.length <= maxLength ? value : `${value.slice(0, maxLength - 1)}…`;
}
