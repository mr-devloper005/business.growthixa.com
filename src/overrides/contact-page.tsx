import Link from 'next/link'
import { ArrowRight, Clock, Mail, MessageSquare, Shield, Mic, FileText } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const lanes = [
  {
    icon: MessageSquare,
    title: 'Press Inquiries',
    body: 'For journalists and media professionals seeking official statements, interview requests, or background information on Growthixa news and announcements.',
  },
  {
    icon: Shield,
    title: 'Editorial & Compliance',
    body: 'Questions about press release accuracy, corrections, or editorial guidelines? Our communications desk handles all media-related compliance matters.',
  },
  {
    icon: Mic,
    title: 'Executive Interviews',
    body: 'Request interviews with Growthixa leadership for features, podcasts, or broadcast media. Include your outlet, audience size, and proposed topics.',
  },
] as const

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-white" style={{ color: navy }}>
      <NavbarShell />

      {/* Header */}
      <header
        className="px-4 py-14 sm:px-6 lg:py-18"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <Mail className="h-3.5 w-3.5" />
            Media Contact
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
            Connect with our Press Team
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Whether you are a journalist, analyst, or media professional, our communications team is ready to assist with official information, press credentials, and media resources.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">

        {/* Contact lanes */}
        <div className="grid gap-6 lg:grid-cols-3">
          {lanes.map((lane) => (
            <div
              key={lane.title}
              className="rounded-[1.25rem] border p-7 shadow-sm transition hover:shadow-md"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: 'rgba(177,59,255,0.1)' }}
              >
                <lane.icon className="h-5 w-5" style={{ color: violet }} aria-hidden />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold" style={{ color: navy }}>{lane.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">{lane.body}</p>
            </div>
          ))}
        </div>

        {/* Response time notice */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-4 rounded-[1.25rem] border px-6 py-5 text-center text-sm"
          style={{ borderColor: 'rgba(71,19,150,0.12)', background: 'rgba(248,244,255,0.6)' }}
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ background: 'rgba(177,59,255,0.1)' }}
          >
            <Clock className="h-4 w-4" style={{ color: violet }} aria-hidden />
          </div>
          <span style={{ color: 'rgba(9,0,64,0.7)' }}>
            <span className="font-semibold" style={{ color: navy }}>Typical first reply:</span> one business day for new press inquiries. Urgent requests for breaking news are prioritized — note it in your subject line.
          </span>
        </div>

        {/* Contact details + form */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="space-y-6">

          </div>

          {/* Email template card */}
          <div
            className="rounded-[1.35rem] border bg-white p-8 shadow-[0_12px_40px_rgba(9,0,64,0.06)]"
            style={{ borderColor: 'rgba(71,19,150,0.12)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
              >
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h2 className="font-display text-xl font-bold" style={{ color: navy }}>Write to us</h2>
            </div>
            <p className="mt-3 text-sm text-neutral-500">
              Copy this template into your email client — no account required. The more context you include, the faster we can assist.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold" style={{ color: navy }}>Subject</dt>
                <dd
                  className="mt-1 rounded-lg border px-3 py-2 font-mono text-xs"
                  style={{ borderColor: 'rgba(71,19,150,0.12)', background: 'rgba(248,244,255,0.6)', color: navy }}
                >
                  Press inquiry — [your outlet] — [topic / release date]
                </dd>
              </div>
              <div>
                <dt className="font-semibold" style={{ color: navy }}>Include</dt>
                <dd className="mt-1 text-neutral-500">
                  Your outlet name, publication type, audience size, the specific release or topic, and your deadline.
                </dd>
              </div>
            </dl>
            <a
              href="mailto:press@growthixa.com?subject=Press%20inquiry"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
              style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
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
