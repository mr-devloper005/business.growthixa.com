export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'oi5hfd1ofx',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Growthixa Newsroom',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Official Press Releases & Media Coverage',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'The official newsroom for Growthixa — press releases, media coverage, executive announcements, and brand news.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'business.growthixa.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://business.growthixa.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
