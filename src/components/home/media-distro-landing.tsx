import Link from 'next/link'
import { ArrowRight, Bell, FileText, Globe, Mic, Shield, TrendingUp } from 'lucide-react'

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const features = [
  {
    icon: FileText,
    title: 'Official Press Releases',
    description: 'Access verified, official press releases directly from the Growthixa communications team — no third-party filtering.',
  },
  {
    icon: Bell,
    title: 'Breaking Announcements',
    description: 'Be the first to know about product launches, partnerships, executive changes, and major corporate milestones.',
  },
  {
    icon: Shield,
    title: 'Verified & Accurate',
    description: 'Every release is published and verified by our communications team to ensure factual accuracy and completeness.',
  },
  {
    icon: TrendingUp,
    title: 'Investor Relations',
    description: 'Financial news, earnings updates, and investor-relevant announcements published in a timely and transparent manner.',
  },
] as const

const stats = [
  { stat: '500+', label: 'Press Releases' },
  { stat: '24h', label: 'Response Time' },
  { stat: '50+', label: 'Media Outlets' },
  { stat: '100%', label: 'Verified News' },
]

const testimonials = [
  {
    quote: 'The Growthixa newsroom is our go-to source for accurate, timely information. The press team responds quickly and professionally.',
    name: 'Sarah Mitchell',
    company: 'TechCrunch Editorial',
  },
  {
    quote: 'Clear, well-structured press releases that give us everything we need without the back-and-forth. Exactly what a modern newsroom should be.',
    name: 'James Okafor',
    company: 'Reuters Technology Desk',
  },
  {
    quote: 'We rely on the Growthixa newsroom for investor-grade accuracy. Their financial releases are always on time and complete.',
    name: 'Priya Sharma',
    company: 'Bloomberg Markets',
  },
] as const

export function MediaDistroLanding() {
  return (
    <main className="bg-white" style={{ color: navy }}>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 55%, ${violet} 100%)` }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <Globe className="h-3.5 w-3.5" />
            Official Newsroom
          </span>
          <h1 className="mt-6 font-display text-[2.25rem] font-bold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
            The Official Growthixa Press & Media Hub
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Your authoritative source for official press releases, executive announcements, and verified media coverage from Growthixa.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/press-releases"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:brightness-110"
              style={{ background: violet }}
            >
              Browse Press Releases
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="border-y px-4 py-12 sm:px-6"
        style={{ borderColor: 'rgba(71,19,150,0.1)' }}
      >
        <div className="mx-auto flex max-w-5xl flex-col divide-y sm:flex-row sm:divide-x sm:divide-y-0" style={{ divideColor: 'rgba(71,19,150,0.1)' }}>
          {stats.map((row) => (
            <div key={row.label} className="flex flex-1 flex-col items-center px-6 py-6 text-center sm:py-4">
              <p className="font-display text-4xl font-bold sm:text-5xl" style={{ color: violet }}>
                {row.stat}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{row.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ background: 'rgba(177,59,255,0.1)', color: purple }}
          >
            What we offer
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl" style={{ color: navy }}>
            Built for journalists, analysts, and stakeholders
          </h2>
          <p className="mt-4 text-neutral-500">
            Everything you need to stay informed about Growthixa — accurate, timely, and directly from the source.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border p-8 shadow-sm transition hover:shadow-md"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: 'rgba(177,59,255,0.1)' }}
              >
                <item.icon className="h-5 w-5" style={{ color: violet }} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold" style={{ color: navy }}>{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="px-4 py-16 sm:px-6 lg:py-20"
        style={{ background: 'rgba(248,244,255,0.5)' }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl" style={{ color: navy }}>
            Trusted by Media Professionals
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex h-full flex-col rounded-[1.25rem] border bg-white p-8 shadow-sm"
                style={{ borderColor: 'rgba(71,19,150,0.12)' }}
              >
                <p
                  className="font-display text-5xl font-bold leading-none"
                  style={{ color: violet }}
                  aria-hidden
                >
                  &ldquo;
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">{t.quote}</p>
                <footer className="mt-6 border-t pt-5" style={{ borderColor: 'rgba(71,19,150,0.08)' }}>
                  <p className="font-semibold" style={{ color: navy }}>{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.company}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div
          className="overflow-hidden rounded-[1.5rem] px-6 py-14 text-center sm:px-12 sm:py-16"
          style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <Mic className="h-3.5 w-3.5" />
            Media Contact
          </span>
          <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
            Need official information or a press credential?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Our communications team is available for press inquiries, interview requests, and media kit downloads.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white transition hover:brightness-110"
            style={{ background: violet }}
          >
            Contact Press Team
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  )
}
