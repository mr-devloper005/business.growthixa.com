import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export function MediaDistroPageLayout({
  eyebrow,
  title,
  subtitle,
  children,
  wide,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  wide?: boolean
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarShell />
      <header className="border-b border-neutral-100 bg-[#fafafa] px-4 py-14 sm:px-6 lg:py-18">
        <div className={`mx-auto text-center ${wide ? 'max-w-4xl' : 'max-w-3xl'}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF9500]">{eyebrow}</p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-[2.65rem]">
            {title}
          </h1>
          {subtitle ? <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">{subtitle}</p> : null}
        </div>
      </header>
      <main className={`mx-auto px-4 py-12 sm:px-6 lg:py-16 ${wide ? 'max-w-4xl' : 'max-w-3xl'}`}>{children}</main>
      <Footer />
    </div>
  )
}

export function MediaDistroSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-b border-neutral-100 py-10 last:border-b-0 last:pb-0 first:pt-0">
      <h2 className="font-display text-xl font-semibold tracking-tight text-neutral-900">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">{children}</div>
    </section>
  )
}
