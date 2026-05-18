import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open the press release for the full announcement.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
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

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 6)

  return (
    <div className="min-h-screen bg-white" style={{ color: navy }}>
      <NavbarShell />

      {/* Page header */}
      <header
        className="px-4 py-14 sm:px-6 lg:py-18"
        style={{
          background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)`,
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <FileText className="h-3.5 w-3.5" />
            Official Newsroom
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
            Press Releases & Announcements
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Official press releases, executive announcements, and verified media coverage from Growthixa — updated as news breaks.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* Main releases list */}
          <div className="space-y-0">
            <div
              className="divide-y rounded-[1.5rem] border overflow-hidden"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              {posts.map((post, index) => (
                <article
                  key={post.id}
                  className="p-7 transition hover:bg-[#faf8ff]"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                      style={{ background: index === 0 ? violet : purple }}
                    >
                      {getCategoryLabel(post)}
                    </span>
                    {post.publishedAt ? (
                      <span className="text-xs text-neutral-400">{formatDate(post.publishedAt)}</span>
                    ) : null}
                    {post.authorName ? (
                      <span className="text-xs text-neutral-400">by {post.authorName}</span>
                    ) : null}
                  </div>

                  <h2 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl" style={{ color: navy }}>
                    <Link
                      href={`/press-releases/${post.slug}`}
                      className="transition hover:opacity-70"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {excerpt(post.summary)}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/press-releases/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                      style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
                    >
                      Read Full Release
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:pt-2">
            {/* Quick scan */}
            <div
              className="rounded-[1.5rem] border p-6"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ color: violet }}
              >
                Quick Scan
              </p>
              <p className="mt-1 text-xs text-neutral-500">Jump to a recent headline</p>
              <div className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: 'rgba(71,19,150,0.08)' }}>
                {recent.map((post) => (
                  <Link
                    key={post.id}
                    href={`/press-releases/${post.slug}`}
                    className="block text-sm font-semibold leading-snug transition hover:opacity-70"
                    style={{ color: navy }}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Media inquiries */}
            <div
              className="rounded-[1.5rem] p-6 text-white"
              style={{ background: `linear-gradient(135deg, ${navy}, ${purple})` }}
            >
              <p className="font-display text-base font-bold">Media Inquiries</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                For interview requests, press credentials, or official statements, contact our communications team.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:opacity-80"
                style={{ color: violet }}
              >
                Contact press team →
              </Link>
            </div>

            {/* Media kit */}
            <div
              className="rounded-[1.5rem] border p-6"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <p className="font-display text-base font-bold" style={{ color: navy }}>Media Kit</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Download logos, brand assets, and executive headshots for editorial use.
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

      <Footer />
    </div>
  )
}
