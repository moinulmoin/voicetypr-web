"use client";

import { downloadURL } from "@/lib/utils";

export function useLatestRelease() {
  return { downloadUrl: downloadURL, isLoading: false };
}
