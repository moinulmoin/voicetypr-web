"use client";

import { useEffect, useState } from "react";
import { getLatestReleaseDMG } from "@/app/lib/github";

export function useLatestRelease() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        setIsLoading(true);
        const url = await getLatestReleaseDMG();
        if (url) {
          setDownloadUrl(url);
        } else {
          setError("Could not fetch latest release");
        }
      } catch (err) {
        setError("Failed to fetch latest release");
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestRelease();
  }, []);

  return { downloadUrl, isLoading, error };
}