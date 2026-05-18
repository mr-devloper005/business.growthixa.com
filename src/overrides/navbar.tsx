'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const navy = '#090040'
const purple = '#471396'
const violet = '#B13BFF'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Press Releases', href: '/press-releases' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export function NavbarOverride() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: 'rgba(255,255,255,0.97)',
        borderBottom: '1px solid rgba(71,19,150,0.12)',
      }}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/logo.png"
            alt={SITE_CONFIG.name}
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition"
              style={{ color: '#4a4a6a' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = purple)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#4a4a6a')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
          >
            Media Inquiries
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex rounded-xl p-2 transition lg:hidden"
          style={{ color: navy }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div
          className="border-t px-4 py-4 lg:hidden"
          style={{ borderColor: 'rgba(71,19,150,0.1)', background: '#fff' }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium transition"
                style={{ color: navy }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-xl px-3 py-3 text-sm font-semibold text-white transition"
              style={{ background: `linear-gradient(135deg, ${purple}, ${violet})` }}
              onClick={() => setOpen(false)}
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
