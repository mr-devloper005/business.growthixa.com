import type { Metadata } from 'next'
import Link from 'next/link'
import { MediaDistroPageLayout, MediaDistroSection } from '@/components/marketing/media-distro-page-layout'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/faq',
    title: `FAQ — ${SITE_CONFIG.name}`,
    description: 'Answers about guest post distribution, timelines, reporting, and working with our publisher network.',
  })
}

const faqBlocks = [
  {
    title: 'What does a typical engagement look like?',
    body: (
      <>
        <p>
          You send a brief (niche, URLs, anchor guidance, quality floor). We propose a shortlist of publishers, confirm
          editorial fit, then schedule drafts and live dates. You receive live links and indexing notes in one report
          per wave—no scattered spreadsheets.
        </p>
      </>
    ),
  },
  {
    title: 'How do you vet publishers?',
    body: (
      <>
        <p>
          We review topical relevance, editorial standards, outbound link patterns, and historical stability. Sites
          that rely on obvious link schemes or thin syndication do not make the cut. You always see the destination
          before we lock a placement.
        </p>
      </>
    ),
  },
  {
    title: 'Can we approve content before it goes live?',
    body: (
      <>
        <p>
          Yes. Most teams want a client review step; we build that into the timeline. Rush jobs may narrow revision
          rounds—call that out when you write in so we can set expectations with the desk and the publisher.
        </p>
      </>
    ),
  },
  {
    title: 'What reporting do we receive?',
    body: (
      <>
        <p>
          After placements go live you get URLs, publication dates, and any sponsored or disclosure language used on
          page. If your workflow needs CSV or a shared tracker, mention it in your first email and we will mirror it.
        </p>
      </>
    ),
  },
  {
    title: 'Do you work with agencies only?',
    body: (
      <>
        <p>
          We support agencies, in-house SEO teams, and founders. The process is the same: clear brief, transparent
          inventory, and a single thread for questions. Enterprise teams often add a legal review step—we accommodate
          that in scheduling.
        </p>
      </>
    ),
  },
  {
    title: 'What if a link drops or a page changes?',
    body: (
      <>
        <p>
          Tell the campaign desk with the original URL. We trace the change with the publisher and either restore
          parity or propose a replacement from the same tier, depending on the agreement in place for that wave.
        </p>
      </>
    ),
  },
] as const

export default function FaqPage() {
  return (
    <MediaDistroPageLayout
      eyebrow="Support"
      title="Frequently asked questions"
      subtitle="Straight answers about guest post distribution, quality control, and how we work with brands and agencies."
    >
      <p className="text-xs text-neutral-500">Last updated: April 23, 2026</p>
      <div className="mt-8 space-y-2">
        {faqBlocks.map((block) => (
          <MediaDistroSection key={block.title} title={block.title}>
            {block.body}
          </MediaDistroSection>
        ))}
      </div>
      <div className="mt-12 rounded-[1.25rem] border border-neutral-200 bg-[#fafafa] p-8 text-center">
        <p className="font-display text-lg font-semibold text-neutral-900">Still unsure?</p>
        <p className="mt-2 text-sm text-neutral-600">Send the brief anyway—we would rather steer you early than fix a mismatch late.</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          style={{ backgroundColor: '#FF9500' }}
        >
          Contact the desk
        </Link>
      </div>
    </MediaDistroPageLayout>
  )
}
