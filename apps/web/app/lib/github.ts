import { cacheLife, cacheTag } from 'next/cache';

export interface ReleaseAssets {
  intel?: string;
  silicon?: string;
  windows?: string;
}

interface GitHubReleaseAsset {
  name: string;
  browser_download_url?: string;
}

interface GitHubRelease {
  assets?: GitHubReleaseAsset[];
}

const GITHUB_RELEASE_REVALIDATE_SECONDS = 3 * 24 * 3600;
const GITHUB_RELEASE_EXPIRE_SECONDS = 7 * 24 * 3600;

export async function getLatestReleaseAssets(): Promise<ReleaseAssets> {
  'use cache';

  cacheTag('github-release');
  cacheLife({
    revalidate: GITHUB_RELEASE_REVALIDATE_SECONDS,
    expire: GITHUB_RELEASE_EXPIRE_SECONDS,
  });

  // Fallback URL for the first release
  const FALLBACK_URL = process.env.NEXT_PUBLIC_DOWNLOAD_URL!

  try {
    const response = await fetch('https://api.github.com/repos/moinulmoin/voicetypr/releases/latest', {
      // 3-day fallback TTL in case the webhook never fires; the
      // 'github-release' tag is revalidated on-demand by
      // POST /api/webhooks/github when a release event arrives.
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Authenticated requests get 5,000 req/hr instead of 60 req/hr per IP.
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      }
    });

    if (!response.ok) {
      console.error('Failed to fetch latest release, status:', response.status);
      // If 404, the repo might be private or have no releases
      if (response.status === 404) {
        console.log('Repository might be private or have no releases yet. Using fallback URL.');
      }
      return { silicon: FALLBACK_URL };
    }

    const release = (await response.json()) as GitHubRelease;

    const assets: ReleaseAssets = {};

    // Find Intel DMG asset (supports both x64 and x86_64 naming)
    const intelAsset = release.assets?.find((asset) =>
      (asset.name.includes('x64') || asset.name.includes('x86_64')) &&
      asset.name.endsWith('.dmg')
    );
    if (intelAsset?.browser_download_url) {
      assets.intel = intelAsset.browser_download_url;
    }

    // Find Silicon/ARM DMG asset (aarch64)
    const siliconAsset = release.assets?.find((asset) =>
      asset.name.includes('aarch64') && asset.name.endsWith('.dmg')
    );
    if (siliconAsset?.browser_download_url) {
      assets.silicon = siliconAsset.browser_download_url;
    }

    // Find Windows installer (.msi or .exe)
    const windowsAsset = release.assets?.find((asset) =>
      asset.name.includes('x64') && (asset.name.endsWith('.msi') || asset.name.endsWith('.exe'))
    );
    if (windowsAsset?.browser_download_url) {
      assets.windows = windowsAsset.browser_download_url;
    }

    // If no assets found, return fallback
    if (!assets.intel && !assets.silicon && !assets.windows) {
      console.log('No installer assets found in latest release. Using fallback URL.');
      return { silicon: FALLBACK_URL };
    }

    return assets;
  } catch (error) {
    console.error('Error fetching latest release:', error);
    // Return fallback URL on error
    return { silicon: FALLBACK_URL };
  }
}

// Keep the old function for backward compatibility
export async function getLatestReleaseDMG(): Promise<string> {
  const assets = await getLatestReleaseAssets();
  return assets.silicon || assets.intel || process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
}
