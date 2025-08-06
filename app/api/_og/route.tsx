import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          position: 'relative',
        }}
      >
        {/* Grid pattern - using divs instead of background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={`h-${i}`}
              style={{
                position: 'absolute',
                top: `${i * 40}px`,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)',
              }}
            />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`v-${i}`}
              style={{
                position: 'absolute',
                left: `${i * 40}px`,
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)',
              }}
            />
          ))}
        </div>
        
        {/* Gradient orbs for depth - subtle */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '20%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent)',
            filter: 'blur(120px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '20%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08), transparent)',
            filter: 'blur(120px)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '60px',
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '50px',
              opacity: 0.8,
              letterSpacing: '-0.5px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            VoiceTypr
          </div>

          {/* Main headline with gradient like landing page */}
          <div
            style={{
              fontSize: '82px',
              fontWeight: '700',
              lineHeight: 0.95,
              marginBottom: '20px',
              background: 'linear-gradient(to right, #ffffff, #6b7280)',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-2px',
            }}
          >
            Ship 3x faster
          </div>
          <div
            style={{
              fontSize: '82px',
              fontWeight: '700',
              lineHeight: 0.95,
              marginBottom: '36px',
              background: 'linear-gradient(to right, #6b7280, #ffffff)',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-2px',
            }}
          >
            with voice
          </div>

          {/* Simple description */}
          <p
            style={{
              fontSize: '22px',
              color: '#6b7280',
              marginBottom: '50px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Voice to text for solo founders & AI power users
          </p>

          {/* Launch offer badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 32px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              boxShadow: '0 10px 40px rgba(168, 85, 247, 0.25)',
            }}
          >
            <span
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'white',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              ✨ Early Bird Launch Offer
            </span>
          </div>

          {/* Bottom features */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '50px',
              fontSize: '16px',
              color: '#4b5563',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            <span>One-time purchase</span>
            <span>•</span>
            <span>No subscription</span>
            <span>•</span>
            <span>100% Private</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}