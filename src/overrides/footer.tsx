import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const pressLinks = [
  { name: 'Press Releases', href: '/press-releases' },
  { name: 'Executive Statements', href: '/press-releases?category=executive' },
  { name: 'Financial News', href: '/press-releases?category=financial' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const supportLinks = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Media Inquiries', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
]

const socialLinks = [
  { name: 'Twitter / X', href: 'https://twitter.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
]

const categoryLinks = [
  { name: 'Corporate News', slug: 'corporate' },
  { name: 'Product Launches', slug: 'product' },
  { name: 'Partnerships', slug: 'partnerships' },
  { name: 'Media Coverage', slug: 'media' },
  { name: 'Executive Statements', slug: 'executive' },
  { name: 'Financial News', slug: 'financial' },
]

export function FooterOverride() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: navy, color: 'rgba(255,255,255,0.75)' }}
    >
      {/* Top gradient accent */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${navy}, ${purple}, ${violet})` }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: violet }}
            >
              Official Newsroom
            </p>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              The authoritative source for official press releases, executive announcements, and verified media coverage from Growthixa.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="underline-offset-4 transition hover:text-white hover:underline"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Press column */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: violet }}
            >
              Press
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {pressLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Support column */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: violet }}
            >
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3
              className="mt-6 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: violet }}
            >
              Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: violet }}
            >
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Static category links */}
        <div className="mt-10 border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: violet }}
          >
            Release Categories
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {categoryLinks.map((cat) => (
              <Link
                key={cat.slug}
                href={`/press-releases?category=${cat.slug}`}
                className="rounded-full border px-3 py-1 text-xs transition hover:border-white/40 hover:text-white"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)' }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 border-t pt-6 text-center text-sm"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
        >
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Official newsroom and press release.
        </div>
      </div>

      {/* Decorative watermark */}
      <p
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[120%] -translate-x-1/2 select-none text-center font-display font-bold leading-none"
        style={{ fontSize: 'clamp(4rem,18vw,11rem)', color: 'rgba(177,59,255,0.04)' }}
        aria-hidden
      >
        {SITE_CONFIG.name}
      </p>
    </footer>
  )
}
