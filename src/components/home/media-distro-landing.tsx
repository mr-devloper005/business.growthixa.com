import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const accent = '#FF9500'
const charcoal = '#1c1c1e'

const features = [
  {
    title: 'Niche-Relevant Sites',
    description: 'We place your content on platforms that matter to your industry for maximum SEO impact.',
  },
  {
    title: 'Permanent Backlinks',
    description: 'Enjoy long-term benefits with permanent placements that drive consistent traffic.',
  },
  {
    title: 'High Domain Authority',
    description: 'Access our curated list of DA50+ and DR40+ websites to boost your rankings.',
  },
  {
    title: 'Detailed Reporting',
    description: 'Receive comprehensive live-link reports within 24 hours of successful placement.',
  },
] as const

const testimonials = [
  {
    quote:
      'MediaDistro cut our outreach time in half. Placements landed on-topic sites our clients actually care about.',
    name: 'Jordan Ellis',
    company: 'Northline Digital Agency',
  },
  {
    quote:
      'Clear reporting and fast turnaround. Our campaigns finally ship with predictable timelines.',
    name: 'Priya Nandakumar',
    company: 'Summit Growth Partners',
  },
  {
    quote:
      'We scaled guest posting across five verticals without sacrificing quality or compliance.',
    name: 'Marcus Chen',
    company: 'Atlas SEO Collective',
  },
] as const

export function MediaDistroLanding() {
  return (
    <main className="bg-white text-neutral-800">
      <section className="border-b border-neutral-100 bg-[#fafafa] px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="font-display text-[2.25rem] font-semibold leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-[3.25rem]"
            style={{ color: charcoal }}
          >
            Amplify Your Content with Strategic Guest Post Distribution.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Connect with high-authority publishers and boost your SEO with premium backlinks tailored to your niche.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:brightness-95"
              style={{ backgroundColor: accent }}
            >
              Start a campaign
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/updates"
              className="rounded-2xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
            >
              Browse publisher updates
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl">
            Built for measurable distribution outcomes
          </h2>
          <p className="mt-4 text-neutral-600">
            Every placement is vetted for topical fit, editorial quality, and lasting SEO value.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-neutral-200/80 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition hover:border-neutral-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="publishers" className="border-y border-neutral-100 bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col divide-neutral-200 sm:flex-row sm:divide-x">
          {[
            { stat: '5,000+', label: 'Active Publishers' },
            { stat: '24h', label: 'Average Turnaround' },
            { stat: '100%', label: 'Index Guarantee' },
          ].map((row) => (
            <div key={row.label} className="flex flex-1 flex-col items-center px-6 py-6 text-center sm:py-4">
              <p className="text-4xl font-semibold sm:text-5xl" style={{ color: accent }}>
                {row.stat}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{row.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-center font-display text-3xl font-semibold tracking-[-0.02em] text-neutral-900 sm:text-4xl">
          Trusted by Agencies Worldwide
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex h-full flex-col rounded-[1.25rem] border border-neutral-200 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <p className="font-display text-5xl font-semibold leading-none" style={{ color: accent }} aria-hidden>
                &ldquo;
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700 sm:text-[0.95rem]">{t.quote}</p>
              <footer className="mt-6 border-t border-neutral-100 pt-5">
                <p className="font-semibold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-[1.5rem] bg-neutral-100 px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="font-display text-2xl font-semibold text-neutral-900 sm:text-3xl">Ready to scale your reach?</h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Join hundreds of brands amplifying their voice through our network.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white transition hover:brightness-95"
            style={{ backgroundColor: accent }}
          >
            Start Your First Campaign
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  )
}
