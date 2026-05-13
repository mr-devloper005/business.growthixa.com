import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Guest posts & publisher outreach',
  },
  footer: {
    tagline: 'Premium content distribution',
  },
  hero: {
    badge: 'Guest posting network',
    title: ['Strategic placements on sites your audience already trusts.', 'Premium inventory, clear reporting, fast turnaround.'],
    description:
      'High-authority guest posts, transparent pricing, and reporting built for agencies and in-house SEO teams.',
    primaryCta: {
      label: 'Browse latest posts',
      href: '/business',
    },
    secondaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    searchPlaceholder: 'Search posts',
    focusLabel: 'Latest',
    featureCardBadge: 'editor note',
    featureCardTitle: 'Recent updates appear directly on the homepage.',
    featureCardDescription:
      'The homepage works as a clean front page so new posts stay visible without decorative sections getting in the way.',
  },
  home: {
    metadata: {
      title: 'Guest post distribution & high-authority backlinks',
      description:
        'Scale SEO-safe guest posting with vetted publishers, niche-relevant placements, and live-link reporting.',
      openGraphTitle: 'Guest post distribution & high-authority backlinks',
      openGraphDescription:
        'Premium guest post placements, DA/DR-focused inventory, and fast turnaround for agencies and brands.',
      keywords: ['guest posts', 'link building', 'SEO outreach', 'publisher network', 'backlinks', 'content distribution'],
    },
    introBadge: 'Distribution',
    introTitle: 'A focused partner for editorial placements and measurable SEO outcomes.',
    introParagraphs: [
      'This template is designed for sites that publish straightforward updates and want the homepage to behave like a clean front page rather than a product landing page.',
      'Posts are visible immediately, archives stay easy to scan, and the reading page keeps the focus on the article itself.',
      'The interface is intentionally simple so the site feels usable, familiar, and fast to update.',
    ],
    sideBadge: 'What it prioritizes',
    sidePoints: [
      'Recent posts directly on the homepage.',
      'Simple archive layout with sidebar search and recent items.',
      'Readable article pages without comments or extra modules.',
      'A publishing-first structure that stays easy to maintain.',
    ],
    primaryLink: {
      label: 'Open archive',
      href: '/business',
    },
    secondaryLink: {
      label: 'Contact desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Get in touch',
    title: 'Use this template when publishing regular updates matters more than visual effects.',
    description:
      'A straightforward layout for announcements, media coverage, partner updates, and newsroom-style content.',
    primaryCta: {
      label: 'Contact us',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View archive',
      href: '/business',
    },
  },
  taskSectionHeading: 'Latest posts',
  taskSectionDescriptionSuffix: 'Read the newest published updates.',
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
    title: 'Publisher updates',
    description: 'Notes from the network—placement tips, policy updates, and campaign guidance.',
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
    title: 'Publisher updates',
    paragraphs: [
      'Short updates from our editorial and partnerships team—placement quality, niche coverage, and what to expect when campaigns go live.',
      'Scan headlines for quick guidance, or open a post for the full brief. No galleries or thumbnails—just readable text.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
