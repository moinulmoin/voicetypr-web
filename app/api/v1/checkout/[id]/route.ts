import { NextRequest, NextResponse } from 'next/server'
import { checkoutStatusIpLimiter, createRateLimitResponse } from '@/lib/rate-limit'
import { getClientIp } from '@/lib/get-client-ip'

const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const ip = getClientIp(request)
    const { success } = await checkoutStatusIpLimiter.limit(ip)
    if (!success) return createRateLimitResponse()

    const { id: checkoutId } = await params

    // UUID validation — return 404 (not 400) to avoid info leakage
    if (!UUID_V4_REGEX.test(checkoutId)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const response = await fetch(
      `${process.env.NODE_ENV !== "production" ? "https://sandbox-api.polar.sh" : "https://api.polar.sh"}/v1/checkouts/${checkoutId}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.POLAR_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch checkout' }, { status: response.status })
    }

    const checkout = await response.json()
    
    // Return only the data we need for tracking
    return NextResponse.json({
      total_amount: checkout.total_amount,
      currency: checkout.currency,
      status: checkout.status
    })

  } catch (error) {
    console.error('Error fetching checkout:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}