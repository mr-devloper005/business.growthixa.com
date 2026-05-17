import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


const servicesLinks = [
  { name: 'Guest Posts', href: '/#services' },
  { name: 'Press Releases', href: '/contact' },
  { name: 'Publisher Updates', href: '/updates' },
]

const supportLinks = [
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Cookies', href: '/cookies' },
]

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
]

export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-white text-neutral-700">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-neutral-900">{SITE_CONFIG.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">Your partner in premium content distribution.</p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-neutral-600 underline-offset-4 hover:text-[#FF9500] hover:underline" target="_blank" rel="noopener noreferrer">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#FF9500]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Support</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#FF9500]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#FF9500]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {categories.length ? (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12 border-t border-neutral-100 pt-6 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
      <p
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[120%] -translate-x-1/2 select-none text-center font-display text-[clamp(4rem,18vw,11rem)] font-bold leading-none text-neutral-100"
        aria-hidden
      >
        {SITE_CONFIG.name}
      </p>
    </footer>
  )
}
