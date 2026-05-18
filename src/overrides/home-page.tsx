import Link from 'next/link'
import { ArrowRight, Bell, BookOpen, FileText, Globe, Mic, Newspaper, Radio, TrendingUp } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

function excerpt(text?: string | null, max = 160) {
  const value = (text || '').trim()
  if (!value) return 'Read the full press release for complete details.'
  return value.length > max ? value.slice(0, max - 3).trimEnd() + '...' : value
}

function formatDate(dateStr?: string | null) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function getCategoryLabel(post: { content?: unknown }) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return typeof content.category === 'string' && content.category.trim() ? content.category.trim() : 'Press Release'
}

const categories = [
  { label: 'Corporate News', icon: Newspaper, href: '/press-releases?category=corporate' },
  { label: 'Product Launches', icon: Bell, href: '/press-releases?category=product' },
  { label: 'Partnerships', icon: Globe, href: '/press-releases?category=partnerships' },
  { label: 'Media Coverage', icon: Radio, href: '/press-releases?category=media' },
  { label: 'Executive Statements', icon: Mic, href: '/press-releases?category=executive' },
  { label: 'Financial News', icon: TrendingUp, href: '/press-releases?category=financial' },
]

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 16, { fresh: true })
  const featured = posts[0]
  const secondary = posts.slice(1, 4)
  const archive = posts.slice(4, 10)

  return (
    <div className="min-h-screen bg-white text-[#090040]">
      <NavbarShell />

      {/* ── HERO ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${navy} 0%, ${purple} 55%, ${violet} 100%)`,
        }}
        className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      >
        {/* decorative grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          aria-hidden
        />
        {/* glow orb */}
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${violet}, transparent 70%)` }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90"
              style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.1)' }}
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ background: violet }}
              />
              Official Newsroom
            </span>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem]">
              {SITE_CONFIG.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Featured release card */}
          {featured ? (
            <div
              className="mt-12 overflow-hidden rounded-[1.5rem]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
                      style={{ background: violet, color: '#fff' }}
                    >
                      {getCategoryLabel(featured)}
                    </span>
                    {featured.publishedAt ? (
                      <span className="text-xs text-white/60">{formatDate(featured.publishedAt)}</span>
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[2rem]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                    {excerpt(featured.summary, 220)}
                  </p>
                  <Link
                    href={`/press-releases/${featured.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                    style={{ background: violet }}
                  >
                    Read Full Release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div
                  className="hidden items-center justify-center p-8 lg:flex"
                  style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <FileText className="h-20 w-20 opacity-20 text-white" />
                </div>
              </div>
            </div>
          ) : null}

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: '500+', label: 'Press Releases' },
              { value: '24h', label: 'Response Time' },
              { value: '50+', label: 'Media Outlets' },
              { value: '100%', label: 'Verified News' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.2rem] p-5 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY QUICK LINKS ── */}
      <section className="border-b px-4 py-8 sm:px-6" style={{ borderColor: 'rgba(71,19,150,0.1)' }}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: purple }}>
              Browse by topic:
            </span>
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(71,19,150,0.2)] px-4 py-1.5 text-xs font-semibold text-[#090040] transition hover:border-[#471396] hover:bg-[#471396] hover:text-white"
              >
                <cat.icon className="h-3.5 w-3.5" />
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* Left: recent releases */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: violet }}
                >
                  Latest Releases
                </p>
                <h2
                  className="mt-1 font-display text-2xl font-bold tracking-[-0.03em]"
                  style={{ color: navy }}
                >
                  Recent Announcements
                </h2>
              </div>
              <Link
                href="/press-releases"
                className="hidden items-center gap-1.5 text-sm font-semibold transition hover:opacity-80 sm:inline-flex"
                style={{ color: purple }}
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Secondary featured — 3 cards in a row */}
            {secondary.length > 0 ? (
              <div className="mb-10 grid gap-5 sm:grid-cols-3">
                {secondary.map((post) => (
                  <Link
                    key={post.id}
                    href={`/press-releases/${post.slug}`}
                    className="group flex flex-col rounded-[1.25rem] border p-5 transition hover:shadow-lg"
                    style={{ borderColor: 'rgba(71,19,150,0.12)' }}
                  >
                    <span
                      className="w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                      style={{ background: purple }}
                    >
                      {getCategoryLabel(post)}
                    </span>
                    <h3
                      className="mt-3 font-display text-base font-bold leading-snug transition group-hover:opacity-80"
                      style={{ color: navy }}
                    >
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-500">
                      {excerpt(post.summary, 100)}
                    </p>
                    {post.publishedAt ? (
                      <p className="mt-3 text-[10px] text-neutral-400">{formatDate(post.publishedAt)}</p>
                    ) : null}
                  </Link>
                ))}
              </div>
            ) : null}

            {/* Archive list */}
            <div
              className="divide-y rounded-[1.5rem] border"
              style={{ borderColor: 'rgba(71,19,150,0.1)', divideColor: 'rgba(71,19,150,0.08)' }}
            >
              {archive.map((post) => (
                <article key={post.id} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-6">
                  <div className="shrink-0">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
                      style={{ background: navy }}
                    >
                      {getCategoryLabel(post)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/press-releases/${post.slug}`}
                      className="font-display text-lg font-bold leading-snug transition hover:opacity-70"
                      style={{ color: navy }}
                    >
                      {post.title}
                    </Link>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {excerpt(post.summary, 140)}
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      {post.publishedAt ? (
                        <span className="text-xs text-neutral-400">{formatDate(post.publishedAt)}</span>
                      ) : null}
                      <Link
                        href={`/press-releases/${post.slug}`}
                        className="text-xs font-semibold transition hover:opacity-70"
                        style={{ color: violet }}
                      >
                        Read release →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/press-releases"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                style={{ background: purple }}
              >
                View all press releases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Media inquiries CTA */}
            <div
              className="overflow-hidden rounded-[1.5rem] p-7"
              style={{
                background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)`,
              }}
            >
              <Mic className="h-8 w-8 text-white/60" />
              <h3 className="mt-4 font-display text-xl font-bold text-white">Media Inquiries</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Journalists and media professionals can reach our communications team directly.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition hover:brightness-110"
                style={{ background: violet, color: '#fff' }}
              >
                Contact Press Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Quick scan — recent headlines */}
            <div
              className="rounded-[1.5rem] border p-6"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ color: purple }}
              >
                Quick Scan
              </p>
              <p className="mt-1 text-xs text-neutral-500">Recent headlines at a glance</p>
              <ul className="mt-5 space-y-4">
                {posts.slice(0, 6).map((post) => (
                  <li key={post.id} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: 'rgba(71,19,150,0.08)' }}>
                    <Link
                      href={`/press-releases/${post.slug}`}
                      className="block text-sm font-semibold leading-snug transition hover:opacity-70"
                      style={{ color: navy }}
                    >
                      {post.title}
                    </Link>
                    {post.publishedAt ? (
                      <p className="mt-1 text-[10px] text-neutral-400">{formatDate(post.publishedAt)}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            {/* Media kit */}
            <div
              className="rounded-[1.5rem] border p-6"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <BookOpen className="h-6 w-6" style={{ color: violet }} />
              <h3 className="mt-3 font-display text-base font-bold" style={{ color: navy }}>
                Media Kit
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Download logos, brand guidelines, and executive headshots for media use.
              </p>
              <Link
                href="/press"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:opacity-70"
                style={{ color: purple }}
              >
                Access media kit →
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* ── BOTTOM CTA BAND ── */}
      <section
        className="px-4 py-16 sm:px-6"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <Globe className="h-3.5 w-3.5" />
            Stay Informed
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
            Get the latest news from Growthixa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Subscribe to our press release feed or follow us on social media for real-time updates on all official announcements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/press-releases"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: violet }}
            >
              Browse All Releases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
