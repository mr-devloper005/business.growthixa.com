import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, Mic, Newspaper, Shield, TrendingUp, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `About | ${SITE_CONFIG.name}`,
  description:
    'Learn about the Growthixa Newsroom — our mission, our team, and our commitment to accurate, timely press releases and media coverage.',
}

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const values = [
  {
    icon: Shield,
    title: 'Accuracy First',
    description:
      'Every press release and announcement is reviewed and verified by our communications team before going live.',
  },
  {
    icon: Globe,
    title: 'Transparent Communication',
    description:
      'Stakeholders, journalists, and the public deserve clear, unfiltered access to official Growthixa information.',
  },
  {
    icon: TrendingUp,
    title: 'Timely Updates',
    description:
      'Our team publishes official statements and releases as quickly as possible after events occur.',
  },
  {
    icon: Users,
    title: 'Media Partnership',
    description:
      'We support journalists with press credentials, media kits, and direct access to our communications team.',
  },
]

const stats = [
  { value: '500+', label: 'Press Releases' },
  { value: '50+', label: 'Media Outlets' },
  { value: '24h', label: 'Response Time' },
  { value: '100%', label: 'Verified News' },
]

const team = [
  {
    name: 'Communications',
    role: 'Press & Media Relations',
    description: 'Handles all press inquiries, media credentials, and official statement requests.',
  },
  {
    name: 'Editorial Desk',
    role: 'Content & Publishing',
    description: 'Writes, reviews, and publishes all press releases and corporate announcements.',
  },
  {
    name: 'Investor Relations',
    role: 'Financial Communications',
    description: 'Manages financial disclosures, earnings updates, and investor-facing communications.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: navy }}>
      <NavbarShell />

      {/* Hero */}
      <header
        className="relative overflow-hidden px-4 py-14 sm:px-6 lg:py-20"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
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
            <Newspaper className="h-3.5 w-3.5" />
            About the Newsroom
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.6rem]">
            The Official Growthixa Press & Media Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {SITE_CONFIG.name} is the authoritative source for official press releases, executive announcements, and verified media coverage — published directly by the Growthixa communications team.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">

        {/* Mission + Stats */}
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: violet }}>
              Our Mission
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl" style={{ color: navy }}>
              Keeping the world informed about Growthixa
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              The Growthixa Newsroom exists to provide journalists, analysts, investors, and the public with direct, unfiltered access to official company news. We cut through the noise and deliver information straight from the source.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              From product launches and executive appointments to financial disclosures and partnership announcements — every significant development at Growthixa is documented here first.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/press-releases"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
              >
                Browse Press Releases
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-[#f8f4ff]"
                style={{ borderColor: 'rgba(71,19,150,0.2)', color: navy }}
              >
                Media Inquiries
              </Link>
            </div>
          </div>

          {/* Stats panel */}
          <div
            className="grid grid-cols-2 gap-3 rounded-[1.25rem] p-6"
            style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1rem] p-5 text-center"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mt-12 border-t pt-10" style={{ borderColor: 'rgba(71,19,150,0.1)' }}>
          <div className="mb-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: violet }}>
              What We Stand For
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em]" style={{ color: navy }}>
              Our editorial principles
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[1rem] border p-5 transition hover:shadow-sm"
                style={{ borderColor: 'rgba(71,19,150,0.12)' }}
              >
                <div
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ background: 'rgba(177,59,255,0.1)' }}
                >
                  <item.icon className="h-4 w-4" style={{ color: violet }} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold" style={{ color: navy }}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-12 border-t pt-10" style={{ borderColor: 'rgba(71,19,150,0.1)' }}>
          <div className="mb-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: violet }}>
              Our Team
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em]" style={{ color: navy }}>
              The people behind the newsroom
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-500">
              Our communications, editorial, and investor relations teams work together to ensure every release is accurate, timely, and complete.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[1rem] border p-5"
                style={{ borderColor: 'rgba(71,19,150,0.12)' }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-3 font-display text-base font-bold" style={{ color: navy }}>
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: violet }}>
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="mt-12 overflow-hidden rounded-[1.25rem] px-6 py-10 text-center sm:px-10 sm:py-12"
          style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <Mic className="h-3.5 w-3.5" />
            Media Contact
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Are you a journalist or media professional?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Our press team is available for interview requests, press credentials, official statements, and media kit downloads.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: violet }}
            >
              Contact Press Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Download Media Kit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
