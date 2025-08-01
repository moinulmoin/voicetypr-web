export interface ReleaseAssets {
  intel?: string;
  silicon?: string;
}

export async function getLatestReleaseAssets(): Promise<ReleaseAssets> {
  // Fallback URL for the first release
  const FALLBACK_URL = process.env.NEXT_PUBLIC_DOWNLOAD_URL!

  try {
    const response = await fetch('https://api.github.com/repos/moinulmoin/voicetypr/releases/latest', {
      next: { revalidate: 24 * 3600 }, // Cache for 24 hours
      headers: {
        'Accept': 'application/vnd.github.v3+json',
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

    const release = await response.json();

    const assets: ReleaseAssets = {};

    // Find Intel DMG asset (x64)
    const intelAsset = release.assets?.find((asset: any) =>
      asset.name.includes('x64') && asset.name.endsWith('.dmg')
    );
    if (intelAsset?.browser_download_url) {
      assets.intel = intelAsset.browser_download_url;
    }

    // Find Silicon/ARM DMG asset (aarch64)
    const siliconAsset = release.assets?.find((asset: any) =>
      asset.name.includes('aarch64') && asset.name.endsWith('.dmg')
    );
    if (siliconAsset?.browser_download_url) {
      assets.silicon = siliconAsset.browser_download_url;
    }

    // If no assets found, return fallback
    if (!assets.intel && !assets.silicon) {
      console.log('No DMG assets found in latest release. Using fallback URL.');
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