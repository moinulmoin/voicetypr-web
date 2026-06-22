"use server";

import { redis } from "@/lib/redis";

type SaveDownloadEmailState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function saveDownloadEmail(_prevState: unknown, formData: FormData): Promise<SaveDownloadEmailState> {
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
