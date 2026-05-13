import type { Metadata } from 'next'
import Link from 'next/link'
import { MediaDistroPageLayout, MediaDistroSection } from '@/components/marketing/media-distro-page-layout'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/terms',
    title: `Terms of Service — ${SITE_CONFIG.name}`,
    description: `Terms governing use of ${SITE_CONFIG.name} guest post distribution services, campaigns, and publisher network access.`,
  })
}

export default function TermsPage() {
  return (
    <MediaDistroPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      subtitle={`These terms apply when you access ${SITE_CONFIG.name}, request placements, or work with our team on distribution campaigns.`}
      wide
    >
      <p className="text-xs text-neutral-500">Last updated: April 23, 2026</p>

      <div className="mt-10 space-y-0">
        <MediaDistroSection title="Agreement">
          <p>
            By using the site, sending a campaign brief, or purchasing services, you agree to these terms and to the
            policies linked here (including our{' '}
            <Link href="/privacy" className="font-semibold text-[#FF9500] hover:underline">
              Privacy Policy
            </Link>
            ). If you sign a separate order form or master services agreement, that document controls where it
            conflicts with these general terms.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Services">
          <p>
            {SITE_CONFIG.name} coordinates guest post and content distribution across third-party publishers. We
            provide matchmaking, editorial coordination, and reporting—not a guarantee of search rankings, traffic, or
            revenue outcomes. Publisher acceptance, publication dates, and on-page presentation remain subject to
            each site&apos;s editorial discretion.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Acceptable use">
          <ul className="list-disc space-y-2 pl-5">
            <li>No illegal, deceptive, hateful, or malware-laden content.</li>
            <li>No harassment of publishers, staff, or other clients.</li>
            <li>No attempts to manipulate our systems, impersonate others, or scrape our inventory without permission.</li>
            <li>Accurate disclosure of sponsored or affiliate relationships where required by law or publisher policy.</li>
          </ul>
        </MediaDistroSection>

        <MediaDistroSection title="Client responsibilities">
          <p>
            You confirm you have rights to any assets you supply, that claims in your content are substantiated where
            needed, and that placements you request comply with applicable advertising and disclosure rules. You will
            respond to reasonable revision requests within the windows we set so campaigns stay on schedule.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Fees and payment">
          <p>
            Fees are quoted per campaign or per agreement. Unless otherwise stated, invoices are due on the schedule
            in your contract. Late payment may pause work and incur finance charges where permitted. Taxes are added
            where required.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Warranties disclaimer">
          <p>
            Services are provided &ldquo;as is&rdquo; to the maximum extent permitted by law. We disclaim implied
            warranties of merchantability, fitness for a particular purpose, and non-infringement except where
            disclaimers are not allowed.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Limitation of liability">
          <p>
            To the extent permitted by law, neither party is liable for indirect, incidental, special, consequential,
            or punitive damages, or for loss of profits, goodwill, or data arising from these terms. Our aggregate
            liability arising out of or relating to services in any twelve-month period is limited to the fees you paid
            for those services in that period unless a higher cap is set in a signed agreement.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Indemnity">
          <p>
            You will defend and indemnify {SITE_CONFIG.name} and its team against third-party claims arising from your
            content, your instructions, or your breach of these terms, except to the extent caused by our wilful
            misconduct.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Confidentiality">
          <p>
            Non-public pricing, publisher lists, and performance data are confidential. Both parties will use
            reasonable care to protect shared information and only disclose what law or professional advisers require.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Suspension and termination">
          <p>
            We may suspend or terminate access for material breach, legal risk, or abuse. You may stop using services
            according to your contract&apos;s exit terms. Sections that should survive termination (fees owed,
            confidentiality, liability limits) remain in effect.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Governing law">
          <p>
            Unless your contract specifies otherwise, these terms are governed by the laws named in your order form,
            without regard to conflict-of-law rules. Courts in that jurisdiction have exclusive venue, except where
            consumer rules require otherwise.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Changes">
          <p>
            We may update these terms periodically. Continued use after the effective date constitutes acceptance of the
            revised terms for new orders; existing contracts remain governed by their signed version until renewed.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Contact">
          <p>
            <Link href="/contact" className="font-semibold text-[#FF9500] hover:underline">
              Contact the desk
            </Link>{' '}
            for contractual questions or to request a PDF copy of these terms.
          </p>
        </MediaDistroSection>
      </div>
    </MediaDistroPageLayout>
  )
}
