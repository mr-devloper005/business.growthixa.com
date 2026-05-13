import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open the post for the full update.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 5)

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9500]">Publisher updates</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl">
            From the distribution network
          </h1>
          <p className="mt-4 text-neutral-600">
            Editorial notes, policy reminders, and guidance for live campaigns—text only, updated as the network
            evolves.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-neutral-200 pb-12 last:border-b-0">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {String((post.content as { category?: string })?.category || 'Update')}
                </p>
                <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl">
                  {post.title}
                </h2>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-500">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-neutral-800">
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span>by {post.authorName || 'Editorial desk'}</span>
                </div>
                <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-neutral-600">
                  {excerpt(post.summary)}
                </p>
                <div className="mt-8 text-center">
                  <Link
                    href={`/updates/${post.slug}`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#FF9500] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                  >
                    Continue reading
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <aside className="space-y-6 lg:pt-4">
            <div className="rounded-[1.25rem] border border-neutral-200 bg-[#fafafa] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Quick scan</p>
              <p className="mt-2 text-sm text-neutral-600">Jump to a recent headline without scrolling the full archive.</p>
              <div className="mt-5 space-y-3 border-t border-neutral-200 pt-5">
                {recent.map((post) => (
                  <Link key={post.id} href={`/updates/${post.slug}`} className="block text-sm font-medium text-neutral-800 hover:text-[#FF9500]">
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-neutral-200 bg-white p-6 text-sm text-neutral-600">
              <p className="font-semibold text-neutral-900">Planning a campaign?</p>
              <p className="mt-2 leading-relaxed">Share your niche and goals—we map placements to inventory that fits.</p>
              <Link href="/contact" className="mt-4 inline-block font-semibold text-[#FF9500] hover:underline">
                Contact the desk →
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
