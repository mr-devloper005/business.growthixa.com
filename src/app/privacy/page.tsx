import type { Metadata } from 'next'
import Link from 'next/link'
import { MediaDistroPageLayout, MediaDistroSection } from '@/components/marketing/media-distro-page-layout'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/privacy',
    title: `Privacy Policy — ${SITE_CONFIG.name}`,
    description: `How ${SITE_CONFIG.name} collects, uses, and protects information when you use our guest post and publisher distribution services.`,
  })
}

export default function PrivacyPage() {
  return (
    <MediaDistroPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle={`This policy explains what we collect, why we collect it, and the choices you have when you interact with ${SITE_CONFIG.name}.`}
      wide
    >
      <p className="text-xs text-neutral-500">Last updated: April 23, 2026</p>

      <div className="mt-10 space-y-0">
        <MediaDistroSection title="Who we are">
          <p>
            {SITE_CONFIG.name} provides content distribution and publisher coordination services. The data controller
            for the marketing site and campaign communications is the entity named on your order form or contract. For
            general enquiries, use the addresses on our{' '}
            <Link href="/contact" className="font-semibold text-[#FF9500] hover:underline">
              contact page
            </Link>
            .
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Information we collect">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-neutral-800">Contact and account details</strong> — name, company, email address,
              phone number, and billing identifiers when you start a campaign or correspond with our desk.
            </li>
            <li>
              <strong className="text-neutral-800">Campaign materials</strong> — briefs, URLs, anchor text preferences,
              draft content, and approvals you share so we can fulfil placements.
            </li>
            <li>
              <strong className="text-neutral-800">Technical data</strong> — IP address, device type, browser version,
              and coarse location derived from standard server logs used for security and abuse prevention.
            </li>
            <li>
              <strong className="text-neutral-800">Cookies and similar technologies</strong> — described in our{' '}
              <Link href="/cookies" className="font-semibold text-[#FF9500] hover:underline">
                Cookie Policy
              </Link>
              .
            </li>
          </ul>
        </MediaDistroSection>

        <MediaDistroSection title="How we use information">
          <ul className="list-disc space-y-2 pl-5">
            <li>To respond to enquiries, prepare quotes, and operate active distribution campaigns.</li>
            <li>To verify publisher fit, document approvals, and maintain an audit trail for compliance questions.</li>
            <li>To invoice, collect payment, and meet tax and accounting obligations.</li>
            <li>To secure our systems, detect fraud, and enforce our acceptable use standards.</li>
            <li>To send operational notices (for example placement confirmations). Marketing messages are separate and optional.</li>
          </ul>
        </MediaDistroSection>

        <MediaDistroSection title="Legal bases (where GDPR applies)">
          <p>
            We rely on performance of a contract for campaign delivery, legitimate interests for securing our network
            and improving match quality, consent where required (such as certain cookies or optional newsletters), and
            legal obligation where the law requires retention or disclosure.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Sharing and processors">
          <p>
            We share information with vetted publishers only to the extent needed to place and attribute content. We
            use infrastructure and communications providers (hosting, email, analytics) who process data on our
            instructions. We do not sell personal information as a product.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Retention">
          <p>
            We keep campaign records for as long as needed to support live placements, warranty periods, and legal
            claims—typically aligned with your contract term plus a limited archive window. Server logs rotate on a
            shorter schedule unless security review requires longer retention.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Your rights">
          <p>
            Depending on your location, you may have rights to access, correct, delete, export, or restrict certain
            processing, and to object to processing based on legitimate interests. To exercise a right, email the desk
            referenced on your agreement or our contact page. You may also lodge a complaint with your local data
            protection authority.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="International transfers">
          <p>
            When publishers or subprocessors are located outside your country, we use appropriate safeguards such as
            standard contractual clauses where required, and we document transfer paths in enterprise agreements on
            request.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Children">
          <p>Our services are directed to businesses and professionals. We do not knowingly collect data from children.</p>
        </MediaDistroSection>

        <MediaDistroSection title="Changes">
          <p>
            We may update this policy to reflect product, legal, or regulatory changes. Material updates will be
            highlighted on this page with a new revision date.
          </p>
        </MediaDistroSection>

        <MediaDistroSection title="Contact">
          <p>
            Questions about privacy? Reach us via{' '}
            <Link href="/contact" className="font-semibold text-[#FF9500] hover:underline">
              Contact
            </Link>{' '}
            and include &ldquo;Privacy&rdquo; in the subject line so we can route your request quickly.
          </p>
        </MediaDistroSection>
      </div>
    </MediaDistroPageLayout>
  )
}
