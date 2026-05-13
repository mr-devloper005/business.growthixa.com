import Link from 'next/link'
import { ArrowRight, Clock, Mail, MessageSquare, Shield } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const accent = '#FF9500'

const lanes = [
  {
    icon: MessageSquare,
    title: 'Campaign planning',
    body: 'Share your URL, niche, anchor preferences, and target markets. We respond with a placement map—not a generic rate card.',
  },
  {
    icon: Shield,
    title: 'Editorial & compliance',
    body: 'Questions about disclosure, sponsored tags, or publisher guidelines? Our partnerships desk coordinates with sites before anything goes live.',
  },
  {
    icon: Mail,
    title: 'Billing & enterprise',
    body: 'Invoicing, bulk orders, and custom SLAs route through the same thread so finance and SEO stay aligned.',
  },
] as const

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <header className="border-b border-neutral-100 bg-[#fafafa] px-4 py-14 sm:px-6 lg:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: accent }}>
            Contact
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
            Let&rsquo;s plan your next placement wave
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
            Whether you are an agency scaling outreach or a brand testing a new vertical, we match you with publishers
            that fit your risk profile and quality bar.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {lanes.map((lane) => (
            <div
              key={lane.title}
              className="rounded-[1.25rem] border border-neutral-200 bg-white p-7 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
            >
              <lane.icon className="h-6 w-6" style={{ color: accent }} aria-hidden />
              <h2 className="mt-4 font-display text-lg font-semibold text-neutral-900">{lane.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{lane.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 rounded-[1.25rem] border border-neutral-200 bg-[#fafafa] px-6 py-5 text-center text-sm text-neutral-600">
          <Clock className="h-5 w-5 shrink-0" style={{ color: accent }} aria-hidden />
          <span>
            <span className="font-semibold text-neutral-900">Typical first reply:</span> one business day for new
            campaigns. Rush reviews available for active partners—note it in your subject line.
          </span>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[1.25rem] border border-neutral-200 bg-[#fafafa] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Campaign desk</p>
              <a href="mailto:campaigns@example.com" className="mt-3 block text-lg font-semibold text-neutral-900 hover:underline" style={{ color: accent }}>
                campaigns@example.com
              </a>
              <p className="mt-2 text-sm text-neutral-600">Briefs, timelines, live-link reporting, and revision requests.</p>
            </div>
            <div className="rounded-[1.25rem] border border-neutral-200 bg-[#fafafa] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Partnerships</p>
              <a href="mailto:partners@example.com" className="mt-3 block text-lg font-semibold hover:underline" style={{ color: accent }}>
                partners@example.com
              </a>
              <p className="mt-2 text-sm text-neutral-600">Publisher onboarding, compliance, and co-marketing.</p>
            </div>
            <p className="text-center text-sm text-neutral-500 lg:text-left">
              Prefer self-serve answers first?{' '}
              <Link href="/faq" className="font-semibold hover:underline" style={{ color: accent }}>
                Read the FAQ
              </Link>{' '}
              or{' '}
              <Link href="/updates" className="font-semibold hover:underline" style={{ color: accent }}>
                publisher updates
              </Link>
              .
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-neutral-200 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
            <h2 className="font-display text-xl font-semibold text-neutral-900">Write to us</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Copy this into your email client—no account required. The more context you include, the faster we can
              route you.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-neutral-800">Subject</dt>
                <dd className="mt-1 rounded-lg border border-neutral-200 bg-[#fafafa] px-3 py-2 font-mono text-xs text-neutral-700">
                  Guest post inquiry — [your brand] — [primary niche]
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-800">Include</dt>
                <dd className="mt-1 text-neutral-600">
                  Target URLs, sample content or tone, DR/DA floor, countries to avoid, and your ideal go-live window.
                </dd>
              </div>
            </dl>
            <a
              href="mailto:campaigns@example.com?subject=Guest%20post%20inquiry"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
              style={{ backgroundColor: accent }}
            >
              Open email draft
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
