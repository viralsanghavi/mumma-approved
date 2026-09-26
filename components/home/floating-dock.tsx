'use client'

import { useEffect, useState } from 'react'
import { PLATFORMS, SOCIALS } from '@/lib/episodes'
import { BrandIcon } from './brand-icon'

const GROUPS = [
  { label: 'Follow', links: SOCIALS },
  { label: 'Listen', links: PLATFORMS.filter((p) => !SOCIALS.some((s) => s.url === p.url)) },
]

/**
 * Glass dock with social + podcast links. Appears once the hero has scrolled away and
 * steps aside while the Listen section or footer (which already show these links) is on screen.
 */
export function FloatingDock() {
  const [pastHero, setPastHero] = useState(false)
  const [linksOnScreen, setLinksOnScreen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    const targets = [document.getElementById('listen'), document.querySelector('footer')].filter(Boolean) as Element[]
    const onScreen = new Set<Element>()

    const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0.05 })
    const linksObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)))
      setLinksOnScreen(onScreen.size > 0)
    })

    if (hero) heroObserver.observe(hero)
    targets.forEach((t) => linksObserver.observe(t))
    return () => {
      heroObserver.disconnect()
      linksObserver.disconnect()
    }
  }, [])

  const visible = pastHero && !linksOnScreen
  let i = 0

  return (
    <nav
      aria-label="Follow and listen"
      data-visible={visible}
      inert={!visible}
      className="dock group/dock fixed z-[90] max-2xl:bottom-[max(12px,env(safe-area-inset-bottom))] max-2xl:left-1/2 max-2xl:-translate-x-1/2 2xl:top-1/2 2xl:right-5 2xl:-translate-y-1/2"
    >
      <div className="dock-panel flex items-center gap-1 rounded-full border border-white/60 bg-white/55 p-1.5 shadow-[0_18px_50px_rgba(58,30,44,0.18),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl backdrop-saturate-150 2xl:flex-col 2xl:gap-1.5 2xl:p-2">
        {GROUPS.map((group, g) => (
          <div key={group.label} className="contents">
            {g > 0 && <span aria-hidden className="mx-0.5 h-6 w-px bg-plum/15 2xl:mx-0 2xl:my-0.5 2xl:h-px 2xl:w-6" />}
            <span className="sr-only">{group.label}</span>
            {group.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${group.label} on ${link.name}`}
                title={link.name}
                style={{ '--i': i++ } as React.CSSProperties}
                className="dock-item group/item relative grid size-10 place-items-center rounded-full text-plum transition-[background-color,color,scale,translate] duration-300 ease-[var(--ease-out)] hover:scale-125 hover:bg-white hover:text-brand-strong hover:shadow-md focus-visible:scale-125 focus-visible:bg-white 2xl:size-11 max-2xl:hover:-translate-y-1 2xl:hover:-translate-x-1"
              >
                <BrandIcon name={link.name} className="size-[18px] 2xl:size-5" />
                <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-plum px-3 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 transition-opacity group-hover/item:opacity-100 group-focus-visible/item:opacity-100 2xl:block">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}
