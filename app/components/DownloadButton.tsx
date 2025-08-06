"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { getLatestReleaseAssets, ReleaseAssets } from "@/app/lib/github";
import { trackTwitterConversion } from "@/lib/twitter-pixel";

// Apple icon component
const AppleIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

// Windows icon component
const WindowsIcon = () => (
  <svg
    className="w-4 h-4 mr-2"
    viewBox="0 0 88 88"
    fill="currentColor"
  >
    <path d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" />
  </svg>
);

export function DownloadButton() {
  const [assets, setAssets] = useState<ReleaseAssets>({});

  useEffect(() => {
    getLatestReleaseAssets().then(setAssets);
  }, []);

  const handleDownload = (url?: string) => {
    if (url) {
      // Track Twitter conversion for download
      trackTwitterConversion('download');
      window.open(url, "_blank");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Download
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem 
          onSelect={() => handleDownload(assets.silicon)}
          disabled={!assets.silicon}
          className="flex items-center"
        >
          <AppleIcon />
          macOS (M series)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => handleDownload(assets.intel)}
          disabled={!assets.intel}
          className="flex items-center"
        >
          <AppleIcon />
          macOS (Intel)
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => handleDownload(assets.windows)}
          disabled={!assets.windows}
          className="flex items-center"
        >
          <WindowsIcon />
          Windows (10+)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}