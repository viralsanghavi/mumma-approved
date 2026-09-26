'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { PLATFORMS, SOCIALS } from '@/lib/episodes'
import { BrandIcon } from './brand-icon'
import { PlayButton } from './player'

const NAV_LINKS = [
  { label: 'Episodes', href: '#episodes' },
  { label: 'About', href: '#about' },
  { label: 'The Silent Room', href: '#the-silent-room' },
  { label: 'Listen', href: '#listen' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? 'border-line bg-bg/95 shadow-[0_4px_24px_rgba(42,26,34,0.06)] backdrop-blur-xl'
          : 'border-transparent bg-bg/70 backdrop-blur-md'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-10">
        <a href="#top" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Mumma Approved"
            width={480}
            height={402}
            priority
            className="h-12 w-auto lg:h-14"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-brand-strong"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center sm:flex">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mumma Approved on ${s.name}`}
                  title={s.name}
                  className="grid size-11 place-items-center rounded-full text-ink-muted transition-colors hover:bg-surface hover:text-brand-strong"
                >
                  <BrandIcon name={s.name} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <PlayButton className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-brand-strong px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-strong-hover sm:px-5">
            <span className="sm:hidden">Play</span>
            <span className="hidden sm:inline">Play latest</span>
          </PlayButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-bg px-4 pt-2 pb-5 sm:px-6 lg:hidden">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-line font-serif text-2xl text-ink hover:text-brand-strong"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-ink-muted uppercase">Follow &amp; listen</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[...SOCIALS, ...PLATFORMS.filter((p) => !SOCIALS.some((s) => s.url === p.url))].map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="grid size-12 place-items-center rounded-full border border-line bg-card text-ink transition-colors hover:border-brand-strong hover:text-brand-strong"
              >
                <BrandIcon name={link.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
