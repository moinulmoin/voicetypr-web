import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

// Use Upstash Redis instance from environment variables
const redis = Redis.fromEnv()

// Revalidate this route every hour to keep count reasonably fresh
export const revalidate = 3600

export async function GET() {
  try {
    // `waitlist:emails` is the Redis set where emails are stored (see joinWaitlist action)
    const count = await redis.scard("waitlist:emails")

    return NextResponse.json({ count })
  } catch (error) {
    console.error("Error fetching waitlist count:", error)
    // On error, still respond with 0 so the frontend can handle gracefully
    return NextResponse.json({ count: 0 }, { status: 500 })
  }
}