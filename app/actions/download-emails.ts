"use server";

import { redis } from "@/lib/redis";
import { serverActionIpLimiter } from "@/lib/rate-limit";
import { getClientIpFromHeaders } from "@/lib/get-client-ip";

export async function saveDownloadEmail(prevState: any, formData: FormData) {
  const ip = await getClientIpFromHeaders();
  const { success } = await serverActionIpLimiter.limit(ip);
  if (!success) {
    return { success: false, error: 'Too many requests. Please try again later.' };
  }

  const email = formData.get('email') as string;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  try {
    await redis.hset("download_emails", {
      [email]: new Date().toISOString()
    });
    await redis.expire('download_emails', 365 * 24 * 60 * 60); // 1 year sliding
    return { success: true, message: "Email saved" };
  } catch (error) {
    console.error("Failed to save email:", error);
    return { success: false, error: "Failed to save email" };
  }
}