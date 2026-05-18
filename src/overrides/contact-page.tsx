'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const orgTypes = [
  'News / Media Outlet',
  'Magazine / Publication',
  'Podcast / Broadcast',
  'PR / Communications Agency',
  'Independent Journalist',
  'Investor / Analyst',
  'Other',
]

const subjects = [
  'Press Inquiry',
  'Interview Request',
  'Press Credentials',
  'Official Statement',
  'Media Kit Request',
  'Partnership',
  'Other',
]

export function ContactPageOverride() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white" style={{ color: navy }}>
      <NavbarShell />

      {/* Header */}
      <header
        className="px-4 py-12 sm:px-6 lg:py-16"
        style={{ background: `linear-gradient(135deg, ${navy} 0%, ${purple} 100%)` }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
            Reach out to our press team for inquiries, interview requests, or media resources.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">

          {/* Form */}
          <div
            className="rounded-[1.25rem] border bg-white p-8 shadow-sm"
            style={{ borderColor: 'rgba(71,19,150,0.12)' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
                >
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold" style={{ color: navy }}>
                  Message sent!
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold" style={{ color: navy }}>
                      Contact Name <span style={{ color: violet }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                      style={{
                        borderColor: 'rgba(71,19,150,0.18)',
                        color: navy,
                        // @ts-ignore
                        '--tw-ring-color': violet,
                      }}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold" style={{ color: navy }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 000 000 0000"
                      className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                      style={{ borderColor: 'rgba(71,19,150,0.18)', color: navy }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold" style={{ color: navy }}>
                    Email <span style={{ color: violet }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@outlet.com"
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: 'rgba(71,19,150,0.18)', color: navy }}
                  />
                </div>

                {/* Help text */}
                <p className="text-sm font-semibold" style={{ color: navy }}>
                  Help us understand your needs a little more.
                </p>

                {/* Row 2 — selects */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold" style={{ color: navy }}>
                      Type of organisation <span style={{ color: violet }}>*</span>
                    </label>
                    <select
                      required
                      className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                      style={{ borderColor: 'rgba(71,19,150,0.18)', color: navy }}
                      defaultValue=""
                    >
                      <option value="" disabled>Please select</option>
                      {orgTypes.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold" style={{ color: navy }}>
                      Subject — how may we help? <span style={{ color: violet }}>*</span>
                    </label>
                    <select
                      required
                      className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                      style={{ borderColor: 'rgba(71,19,150,0.18)', color: navy }}
                      defaultValue=""
                    >
                      <option value="" disabled>Please select</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold" style={{ color: navy }}>
                    Message / Comment <span style={{ color: violet }}>*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry, outlet, audience, and deadline..."
                    className="w-full resize-none rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{ borderColor: 'rgba(71,19,150,0.18)', color: navy }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-2xl py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
                  style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
                >
                  Submit Now
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="space-y-5">
            <div
              className="rounded-[1.25rem] border p-6"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: violet }}>
                Response Time
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Monday to Friday<br />
                One business day for new inquiries.<br />
                Rush reviews available for active partners.
              </p>
            </div>

            <div
              className="rounded-[1.25rem] border p-6"
              style={{ borderColor: 'rgba(71,19,150,0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: violet }}>
                Quick Links
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="/press-releases" className="font-medium transition hover:opacity-70" style={{ color: navy }}>
                    → Browse Press Releases
                  </a>
                </li>
                <li>
                  <a href="/faq" className="font-medium transition hover:opacity-70" style={{ color: navy }}>
                    → Read the FAQ
                  </a>
                </li>
                <li>
                  <a href="/about" className="font-medium transition hover:opacity-70" style={{ color: navy }}>
                    → About the Newsroom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
