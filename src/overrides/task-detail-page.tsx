import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 5)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <section className="border-b border-neutral-100 bg-[#fafafa] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9500]">
            {String(content.category || 'Update')}
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-500">
            <Link href="/" className="hover:text-[#FF9500]">
              Home
            </Link>
            <span aria-hidden>·</span>
            <Link href="/updates" className="hover:text-[#FF9500]">
              Updates
            </Link>
            <span aria-hidden>·</span>
            <span className="text-neutral-400">This article</span>
          </div>
        </div>
      </section>
      <main className="mx-auto grid max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article>
          <div className="rounded-[1rem] border border-neutral-200 bg-[#fafafa] px-5 py-4 text-sm text-neutral-600">
            <span className="font-medium text-neutral-900">
              {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="mx-2 text-neutral-300">·</span>
            <span>by {post.authorName || 'Editorial desk'}</span>
          </div>
          <div className="prose prose-neutral prose-lg mt-10 max-w-none">
            <RichContent html={html} />
          </div>
          <div className="mt-12 grid gap-0 overflow-hidden rounded-[1.25rem] border border-neutral-200 md:grid-cols-2">
            {recent.slice(0, 2).map((item, index) => (
              <Link
                key={item.id}
                href={`/updates/${item.slug}`}
                className="border-neutral-200 p-6 transition hover:bg-[#fafafa] md:border-r md:last:border-r-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {index === 0 ? 'Previous' : 'Next'}
                </p>
                <p className="mt-3 text-base font-medium leading-snug text-neutral-900">{item.title}</p>
              </Link>
            ))}
          </div>
        </article>
        <aside className="space-y-6">
          <div className="rounded-[1.25rem] border border-neutral-200 bg-[#fafafa] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">More updates</p>
            <div className="mt-4 space-y-3">
              {recent.map((item) => (
                <Link key={item.id} href={`/updates/${item.slug}`} className="block text-sm text-neutral-700 hover:text-[#FF9500]">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="block rounded-[1.25rem] border border-[#FF9500]/30 bg-[#FF9500]/8 p-6 text-center text-sm font-semibold text-neutral-900 transition hover:bg-[#FF9500]/12"
          >
            Need placements for this niche? Talk to the desk.
          </Link>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
