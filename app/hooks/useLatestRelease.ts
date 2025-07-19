"use client";

import { getLatestReleaseDMG } from "@/app/lib/github";
import { useEffect, useState } from "react";

export function useLatestRelease() {
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestRelease() {
      setIsLoading(true);
      const url = await getLatestReleaseDMG();
      setDownloadUrl(url);
      setIsLoading(false);
    }
    fetchLatestRelease();
  }, []);

  return { downloadUrl, isLoading };
}
