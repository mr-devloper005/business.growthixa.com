'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Publishers', href: '/updates' },
  { label: 'Contact', href: '/contact' },
] as const

export function NavbarOverride() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/90 bg-white/95 text-neutral-900 backdrop-blur-md">
      <nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 font-display text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
          {SITE_CONFIG.name}
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden w-[120px] shrink-0 lg:block" aria-hidden />

        <button
          type="button"
          className="inline-flex rounded-xl p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
