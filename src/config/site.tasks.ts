export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press Releases',
    route: '/press-releases',
    description: 'Official press releases, announcements, and media coverage from Growthixa.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/press-releases',
} as const
