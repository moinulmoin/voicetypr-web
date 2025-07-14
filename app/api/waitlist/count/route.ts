import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const redis = Redis.fromEnv()

export async function GET() {
  try {
    const count = await redis.scard("waitlist:emails")
    return NextResponse.json({ count: count || 0 })
  } catch (error) {
    console.error("Error fetching waitlist count:", error)
    return NextResponse.json({ count: 0 })
  }
}