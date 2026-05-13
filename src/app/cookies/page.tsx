import type { Metadata } from 'next'
import Link from 'next/link'
import { MediaDistroPageLayout, MediaDistroSection } from '@/components/marketing/media-distro-page-layout'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/cookies',
    title: `Cookie Policy — ${SITE_CONFIG.name}`,
    description: `How ${SITE_CONFIG.name} uses cookies and similar technologies on this marketing site and related tools.`,
  })
}

export default function CookiesPage() {
  return (
    <MediaDistroPageLayout
      eyebrow="Legal"
      title="Cookie Policy"
      subtitle="A clear view of the cookies and local storage we use to keep the site reliable, secure, and easy to navigate."
      wide
    >
      <p className="text-xs text-neutral-500">Last updated: April 23, 2026</p>

      <div className="mt-10 space-y-0">
        <MediaDistroSection title="Overview">
          <p>
            Like most modern sites, {SITE_CONFIG.name} uses small text files and similar technologies (&ldquo;cookies&rdquo;)
            to remember preferences, protect forms, and understand aggregate traffic. This page describes what runs on
            our public marketing pages—not third-party publisher sites where your placements may appear.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Strictly necessary">
          <p>
            These cookies are required for core functionality such as load balancing, security (for example CSRF
            protection where implemented), and remembering privacy choices. They cannot be switched off in our systems
            without breaking basic features.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Functional">
          <p>
            Functional cookies remember choices you make—like theme or language when we expose those controls—so you
            do not have to reconfigure them on every visit. They do not track you across unrelated websites.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Analytics">
          <p>
            We may use first-party or privacy-oriented analytics to see which pages are visited, approximate geography,
            and technical errors. Where required, we gate analytics behind consent banners and only enable measurement
            after you opt in.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Third parties">
          <p>
            Embedded content (for example a hosted video or map) may set its own cookies governed by that provider&apos;s
            policy. We limit embeds on marketing pages and review vendors periodically.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Managing cookies">
          <p>
            Use your browser settings to block or delete cookies. You can also install industry opt-out tools where
            available. Blocking strictly necessary cookies may affect site stability. For questions, see{' '}
            <Link href="/privacy" className="font-semibold text-[#FF9500] hover:underline">
              Privacy Policy
            </Link>{' '}
            or{' '}
            <Link href="/contact" className="font-semibold text-[#FF9500] hover:underline">
              Contact
            </Link>
            .
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Updates">
          <p>We will revise this policy when our stack or legal obligations change. Check the date above when you revisit.</p>
        </MediaDistroSection>
      </div>
    </MediaDistroPageLayout>
  )
}
