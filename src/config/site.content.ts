import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Official Newsroom & Press Releases',
  },
  footer: {
    tagline: 'Your source for official Growthixa news and announcements.',
  },
  hero: {
    badge: 'Official Newsroom',
    title: ['Breaking news, press releases, and official announcements from Growthixa.', 'Stay informed with verified media coverage and executive updates.'],
    description:
      'The authoritative source for Growthixa press releases, media coverage, investor relations, and brand announcements.',
    primaryCta: {
      label: 'Browse Press Releases',
      href: '/press-releases',
    },
    secondaryCta: {
      label: 'Media Inquiries',
      href: '/contact',
    },
    searchPlaceholder: 'Search press releases',
    focusLabel: 'Latest',
    featureCardBadge: 'breaking news',
    featureCardTitle: 'Latest press releases appear directly on the homepage.',
    featureCardDescription:
      'Our newsroom is updated in real time so journalists and stakeholders always have access to the most current information.',
  },
  home: {
    metadata: {
      title: 'Growthixa Newsroom — Official Press Releases & Media Coverage',
      description:
        'Access official press releases, executive announcements, media coverage, and investor news from Growthixa.',
      openGraphTitle: 'Growthixa Newsroom — Official Press Releases & Media Coverage',
      openGraphDescription:
        'The official Growthixa newsroom. Press releases, media coverage, executive statements, and brand announcements.',
      keywords: ['press releases', 'media coverage', 'newsroom', 'announcements', 'investor relations', 'Growthixa news'],
    },
    introBadge: 'Newsroom',
    introTitle: 'The official source for Growthixa news, press releases, and media resources.',
    introParagraphs: [
      'Welcome to the Growthixa Newsroom — your authoritative destination for official press releases, executive announcements, and verified media coverage.',
      'Journalists, analysts, and stakeholders can access the latest news, download media assets, and connect with our communications team directly from this hub.',
      'All content is published and verified by the Growthixa communications team to ensure accuracy and timeliness.',
    ],
    sideBadge: 'What you will find here',
    sidePoints: [
      'Official press releases and corporate announcements.',
      'Executive statements and leadership commentary.',
      'Media kit downloads including logos and brand assets.',
      'Investor relations updates and financial news.',
    ],
    primaryLink: {
      label: 'View All Press Releases',
      href: '/press-releases',
    },
    secondaryLink: {
      label: 'Media Inquiries',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Media Inquiries',
    title: 'Need official information or media assets? Our communications team is ready.',
    description:
      'For press inquiries, interview requests, or media kit downloads, reach out to our communications desk directly.',
    primaryCta: {
      label: 'Contact Press Team',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View Press Releases',
      href: '/press-releases',
    },
  },
  taskSectionHeading: 'Latest Press Releases',
  taskSectionDescriptionSuffix: 'Read the newest official announcements and media coverage.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press Releases',
    description: 'Official press releases, announcements, and media coverage from Growthixa.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Press Releases',
    paragraphs: [
      'Official press releases, executive announcements, and verified media coverage from the Growthixa communications team.',
      'Browse by category or date to find the information you need. All releases are published directly by our team and available for media use.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Media Inquiries', href: '/contact' },
    ],
  },
}
