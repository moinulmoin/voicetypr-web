export async function getLatestReleaseDMG(): Promise<string | null> {
  // Fallback URL for the first release
  const FALLBACK_URL = process.env.NEXT_PUBLIC_DOWNLOAD_URL!

  try {
    const response = await fetch('https://api.github.com/repos/moinulmoin/voicetypr/releases/latest', {
      next: { revalidate: 3600 }, // Cache for 1 hour
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
      return FALLBACK_URL;
    }

    const release = await response.json();

    // Find the DMG asset
    const dmgAsset = release.assets?.find((asset: any) =>
      asset.name.endsWith('_universal.dmg')
    );

    if (dmgAsset?.browser_download_url) {
      console.log('Found latest release:', dmgAsset.browser_download_url);
      return dmgAsset.browser_download_url;
    }

    console.log('No DMG asset found in latest release. Using fallback URL.');
    return FALLBACK_URL;
  } catch (error) {
    console.error('Error fetching latest release:', error);
    // Return fallback URL on error
    return FALLBACK_URL;
  }
}