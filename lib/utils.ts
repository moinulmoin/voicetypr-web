import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const downloadURL = "https://github.com/moinulmoin/voicetypr/releases/latest"
