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
        >
          Apple Silicon
        </DropdownMenuItem>
        <DropdownMenuItem 
          onSelect={() => handleDownload(assets.intel)}
        >
          Apple Intel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}