import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Link2, Mail, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPostBySlug, fetchTaskPosts, buildPostUrl } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { SITE_CONFIG } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const isValidImageUrl = (value?: string | null) =>
  typeof value === 'string' && (value.startsWith('/') || /^https?:\/\//i.test(value))

const getContent = (post: SitePost) => {
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  return content as Record<string, unknown>
}

const getImageUrls = (post: SitePost, content: Record<string, unknown>) => {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaImages = media.map((item) => item?.url).filter((url): url is string => isValidImageUrl(url))
  const contentImages = Array.isArray(content.images)
    ? content.images.filter((url): url is string => typeof url === 'string' && isValidImageUrl(url))
    : []
  const merged = [...mediaImages, ...contentImages]
  if (merged.length) return merged
  if (isValidImageUrl(content.logo as string)) return [content.logo as string]
  return [] as string[]
}

const getCategoryLabel = (post: SitePost, content: Record<string, unknown>) => {
  const raw =
    (typeof content.category === 'string' && content.category.trim()) ||
    (Array.isArray(post.tags) ? post.tags.find((tag) => typeof tag === 'string' && tag !== 'mediaDistribution') : '') ||
    ''
  if (!raw || typeof raw !== 'string') return 'Press releases'
  const normalized = normalizeCategory(raw)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || raw.trim()
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const related = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true }))
    .filter((item) => item.slug !== slug)
    .slice(0, 4)

  const content = getContent(post)
  const rawBody =
    (typeof content.body === 'string' && content.body.trim()) ||
    (typeof content.description === 'string' && content.description.trim()) ||
    post.summary ||
    ''
  const html = formatRichHtml(rawBody, '')
  const images = getImageUrls(post, content)
  const hero = images[0]
  const archivePath = SITE_CONFIG.taskViews.mediaDistribution || '/updates'
  const categoryLabel = getCategoryLabel(post, content)
  const categorySlug = normalizeCategory(categoryLabel)
  const pageUrl = `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${buildPostUrl('mediaDistribution', post.slug)}`
  const shareText = encodeURIComponent(post.title)
  const shareUrl = encodeURIComponent(pageUrl)
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''

  return (
    <div className="min-h-screen bg-white" style={{ color: navy }}>
      <NavbarShell />

      <article className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
        {/* Breadcrumb */}
        <nav className="text-xs font-medium" style={{ color: 'rgba(9,0,64,0.5)' }}>
          <Link href="/" className="transition hover:opacity-100" style={{ color: purple }}>
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href={archivePath} className="transition hover:opacity-100" style={{ color: purple }}>
            Press Releases
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href={`${archivePath}?category=${categorySlug}`} className="transition hover:opacity-100" style={{ color: purple }}>
            {categoryLabel}
          </Link>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <div className="min-w-0">
            {/* Category badge */}
            <span
              className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
              style={{ background: violet }}
            >
              {categoryLabel}
            </span>

            <h1
              className="mt-4 font-display text-3xl font-bold leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-[2.35rem]"
              style={{ color: navy }}
            >
              {post.title}
            </h1>

            {date ? (
              <div className="mt-4 text-sm" style={{ color: 'rgba(9,0,64,0.5)' }}>
                <span>{date}</span>
                {post.authorName ? <span className="ml-3">by {post.authorName}</span> : null}
              </div>
            ) : null}

            {/* Share buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(71,19,150,0.2)] bg-white text-[#090040] shadow-sm transition hover:border-[#471396] hover:bg-[#471396] hover:text-white"
                aria-label="Share on X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(71,19,150,0.2)] bg-white text-[#090040] shadow-sm transition hover:border-[#471396] hover:bg-[#471396] hover:text-white"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(71,19,150,0.2)] bg-white text-[#090040] shadow-sm transition hover:border-[#471396] hover:bg-[#471396] hover:text-white"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(71,19,150,0.2)] bg-white text-[#090040] shadow-sm transition hover:border-[#471396] hover:bg-[#471396] hover:text-white"
                aria-label="Email this release"
              >
                <Mail className="h-4 w-4" />
              </a>
              <span
                className="inline-flex items-center gap-1 rounded-full border border-dashed border-[rgba(71,19,150,0.2)] px-3 py-2 text-xs text-[rgba(9,0,64,0.5)]"
              >
                <Link2 className="h-3.5 w-3.5" />
                {pageUrl.replace(/^https?:\/\//, '')}
              </span>
            </div>

            {hero ? (
              <div
                className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] shadow-sm"
                style={{ border: '1px solid rgba(71,19,150,0.12)' }}
              >
                <ContentImage src={hero} alt={post.title} fill className="object-cover" priority />
              </div>
            ) : null}

            <RichContent html={html} className="article-content mt-10 max-w-none text-[1.05rem] leading-[1.75]" />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:pt-2">
            <div
              className="rounded-[1.25rem] border bg-white p-6 shadow-sm"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ color: violet }}
              >
                More Releases
              </p>
              <ul className="mt-4 space-y-4">
                {related.map((item) => (
                  <li key={item.id} className="border-b pb-4 last:border-b-0 last:pb-0" style={{ borderColor: 'rgba(71,19,150,0.08)' }}>
                    <Link
                      href={buildPostUrl('mediaDistribution', item.slug)}
                      className="block text-sm font-semibold leading-snug transition hover:opacity-70"
                      style={{ color: navy }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media inquiries */}
            <div
              className="rounded-[1.25rem] p-6 text-white"
              style={{ background: `linear-gradient(135deg, ${navy}, ${purple})` }}
            >
              <p className="font-display text-base font-bold">Media Inquiries</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                For interview requests or official statements, contact our communications team.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:opacity-80"
                style={{ color: violet }}
              >
                Contact press team →
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  )
}
