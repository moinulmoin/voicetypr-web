"use server";

import { redis } from "@/lib/redis";

export async function saveDownloadEmail(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email" };
  }

  try {
    await redis.hset("download_emails", {
      [email]: new Date().toISOString()
    });
    return { success: true, message: "Email saved" };
  } catch (error) {
    console.error("Failed to save email:", error);
    return { success: false, error: "Failed to save email" };
  }
}