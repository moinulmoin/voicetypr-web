import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: checkoutId } = await params

    if (!checkoutId) {
      return NextResponse.json({ error: 'Checkout ID is required' }, { status: 400 })
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