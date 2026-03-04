"use server";

import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = Redis.fromEnv()

export type WaitlistState = {
  success?: boolean;
  error?: string;
  message?: string;
};

export async function subscribeToWaitlist(
  prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  try {
    const email = formData.get("email") as string;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return { success: false, error: "Invalid email address" };
    }

    // Check if email already exists
    const exists = await redis.sismember("waitlist:windows", email);
    if (exists) {
      return { success: false, error: "Email already registered" };
    }

    // Add email to waitlist set
    await redis.sadd("waitlist:windows", email);
    
    // Sliding 1-year TTL for waitlist keys (PII)
    await redis.expire("waitlist:windows", 365 * 24 * 60 * 60);

    // Also store with timestamp
    await redis.hset("waitlist:windows:details", {
      [email]: JSON.stringify({
        email,
        subscribedAt: new Date().toISOString(),
        source: "pricing-page"
      })
    });
    
    // Sliding 1-year TTL for details key (PII)
    await redis.expire("waitlist:windows:details", 365 * 24 * 60 * 60);

    // Increment counter
    await redis.incr("waitlist:windows:count");

    return { success: true, message: "Successfully added to waitlist" };
  } catch (error) {
    console.error("Waitlist subscription error:", error);
    return { success: false, error: "Failed to subscribe. Please try again." };
  }
}
