// OG Image mappings for social sharing
export const SERVICE_OG_IMAGES: Record<string, string> = {
  "blocked-drains": "https://manchesterblockeddrains.co.uk/og/blocked-drains-og.jpg",
  "drain-unblocking": "https://manchesterblockeddrains.co.uk/og/drain-unblocking-og.jpg",
  "cctv-drain-surveys": "https://manchesterblockeddrains.co.uk/og/cctv-surveys-og.jpg",
  "drain-jetting": "https://manchesterblockeddrains.co.uk/og/drain-jetting-og.jpg",
  "emergency-drain-services": "https://manchesterblockeddrains.co.uk/og/emergency-drains-og.jpg",
};

export const LOCATIONS_OG_IMAGE = "https://manchesterblockeddrains.co.uk/og/locations-og.jpg";
export const DEFAULT_OG_IMAGE = "https://manchesterblockeddrains.co.uk/og/manchesterblockeddrains-og.jpg";

export function getServiceOgImage(serviceSlug: string): string {
  return SERVICE_OG_IMAGES[serviceSlug] || DEFAULT_OG_IMAGE;
}
