"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReleaseAssets } from "@/app/lib/github";

function detectPlatform(): "windows" | "macos" | "unknown" {
  const ua = (typeof navigator !== "undefined" ? navigator.userAgent : "").toLowerCase();
  if (ua.includes("windows")) return "windows";
  if (ua.includes("mac")) return "macos";
  return "unknown";
}

function pickPrimaryUrl(platform: "windows" | "macos" | "unknown", assets: ReleaseAssets) {
  if (platform === "windows" && assets.windows) return { url: assets.windows, label: "Windows" };
  if (platform === "macos" && (assets.silicon || assets.intel)) {
    // Prefer Silicon; Intel as fallback
    return { url: assets.silicon || assets.intel!, label: "macOS" };
  }
  const url = assets.silicon || assets.intel || assets.windows || process.env.NEXT_PUBLIC_DOWNLOAD_URL;
  const label = url === assets?.windows ? "Windows" : "macOS";
  return { url, label };
}

export default function OSPrimaryButton({ assets }: { assets: ReleaseAssets }) {
  const platform = detectPlatform();
  const primary = pickPrimaryUrl(platform, assets);

  if (!primary.url) return null;

  return (
    <Button asChild size="lg" className="group/btn" data-umami-event="download-click" data-umami-event-platform={platform}>
      <Link href={primary.url} target="_blank" rel="noopener">
        Download for {primary.label}
      </Link>
    </Button>
  );
}
