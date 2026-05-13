import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export const TASK_POST_CARD_OVERRIDE_ENABLED = true

const stripHtml = (value?: string | null) =>
  (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

function excerpt(text?: string | null, max = 160) {
  const t = stripHtml(text)
  if (!t) return ''
  return t.length <= max ? t : `${t.slice(0, max).trimEnd()}…`
}

function categoryLabel(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const cat = content.category
  if (typeof cat === 'string' && cat.trim()) return cat.trim()
  const tag = post.tags?.find((x) => typeof x === 'string')
  return typeof tag === 'string' ? tag : 'Update'
}

export function TaskPostCardOverride({
  post,
  href,
}: {
  post: SitePost
  href: string
  taskKey?: TaskKey
  compact?: boolean
}) {
  const summary = excerpt(post.summary, 200)

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[1.25rem] border border-neutral-200 bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.04)] transition hover:border-[#FF9500]/40 hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)]"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF9500]">{categoryLabel(post)}</p>
      <h3 className="font-display mt-3 text-lg font-semibold leading-snug text-neutral-900 group-hover:text-[#d97706] sm:text-xl">
        {post.title}
      </h3>
      {summary ? <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{summary}</p> : null}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900">
        Read more
        <ArrowUpRight className="h-4 w-4 text-[#FF9500] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </span>
    </Link>
  )
}
