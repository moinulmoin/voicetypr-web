"use server"

import { Redis } from "@upstash/redis"
import { revalidateTag } from "next/cache"

const redis = Redis.fromEnv()

export type FormState = {
  status: "idle" | "success" | "error"
  message?: string
  position?: number
}

export async function joinWaitlist(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const email = formData.get("email") as string

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return {
        status: "error",
        message: "Please enter a valid email address"
      }
    }

    // Try to add email to set - returns 1 if new, 0 if already exists
    const added = await redis.sadd("waitlist:emails", email)

    if (added === 0) {
      return {
        status: "error",
        message: "You're already on the waitlist!"
      }
    }

    // Revalidate the waitlist count cache
    revalidateTag("waitlist-count")

    return {
      status: "success",
      message: "Joined! We'll notify you when VoiceTypr launches.",
    }
  } catch (error) {
    console.error("Waitlist error:", error)
    return {
      status: "error",
      message: "Something went wrong. Please try again."
    }
  }
}