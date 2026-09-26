'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { EPISODES, LATEST_EPISODE } from '@/lib/episodes'
import { PlayButton } from '@/components/home/player'

/*
 * "Midnight to morning" — a pinned, scroll-driven 3D story.
 * Scroll progress is split into three phases written to CSS variables:
 *   --a  midnight: search queries appear around the phone
 *   --b  the turn: queries fly past, phone spins into the podcast player, episode ring orbits in
 *   --c  morning: dawn rises, final call to action
 * All motion lives in globals.css (.mtm-*) as calc() over these variables.
 */

const QUERIES = [
  { q: 'why won’t my toddler eat anything green', x: -200, y: -190, z: 60 },
  { q: 'is sleep training cruel', x: 230, y: -120, z: 120 },
  { q: 'how much screen time is too much', x: -230, y: 30, z: 160 },
  { q: 'puberty mood swings normal?', x: 250, y: 90, z: 40 },
  { q: 'healthy tiffin ideas that kids actually eat', x: -150, y: 220, z: 100 },
  { q: 'am I doing this right', x: 170, y: 230, z: 200 },
]

// One card per slot on the orbit — prefer episodes with a named expert
const RING = EPISODES.filter((e) => e.guest).slice(0, 8)

const TOPIC_TINT: Record<string, string> = {
  'Food & Nutrition': 'bg-brand-soft text-brand-strong',
  'Emotions & Behaviour': 'bg-sky-soft text-sky-strong',
  'School & Learning': 'bg-sage-soft text-sage',
  'Mum Life': 'bg-brand-soft text-plum',
}

// Deterministic star field so server and client markup match
const STARS = Array.from({ length: 48 }, (_, i) => ({
  left: (i * 37.7) % 100,
  top: (i * 61.3) % 70,
  size: (i % 3) + 1,
  delay: (i % 7) * 0.6,
}))

const clamp = (n: number) => Math.min(1, Math.max(0, n))

function clockAt(p: number) {
  const minutes = 2 * 60 + 47 + Math.round(p * (7 * 60 - 167)) // 2:47 → 7:00
  const h = Math.floor(minutes / 60)
  return `${h}:${String(minutes % 60).padStart(2, '0')} AM`
}

export function MidnightToMorning() {
  const rootRef = useRef<HTMLElement>(null)
  const clockRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')

    const set = (p: number, a: number, b: number, c: number) => {
      root.style.setProperty('--p', p.toFixed(4))
      root.style.setProperty('--a', a.toFixed(4))
      root.style.setProperty('--b', b.toFixed(4))
      root.style.setProperty('--c', c.toFixed(4))
      root.dataset.phase = c > 0.55 ? '3' : b > 0.3 ? '2' : '1'
      if (clockRef.current) clockRef.current.textContent = clockAt(p)
    }

    let raf = 0
    const update = () => {
      raf = 0
      const rect = root.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      const p = clamp(-rect.top / travel)
      set(p, clamp((p - 0.02) / 0.26), clamp((p - 0.3) / 0.32), clamp((p - 0.64) / 0.28))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const apply = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (reduce.matches) {
        root.dataset.static = ''
        set(1, 1, 1, 1)
        return
      }
      delete root.dataset.static
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      update()
    }

    apply()
    reduce.addEventListener('change', apply)
    return () => {
      cancelAnimationFrame(raf)
      reduce.removeEventListener('change', apply)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={rootRef} className="mtm" data-phase="1" aria-labelledby="mtm-title">
      <div className="mtm-stage">
        {/* Sky */}
        <div aria-hidden className="mtm-sky-night" />
        <div aria-hidden className="mtm-stars">
          {STARS.map((s, i) => (
            <span
              key={i}
              style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>
        <div aria-hidden className="mtm-moon" />
        <div aria-hidden className="mtm-sky-dawn" />
        <div aria-hidden className="mtm-sun" />

        <div className="mtm-layout mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Story captions — stacked, cross-faded by phase */}
          <div className="mtm-captions">
            <div className="mtm-cap mtm-cap-1">
              <p className="eyebrow !text-brand">Sound familiar?</p>
              <h2 id="mtm-title" className="mt-4 font-serif text-4xl leading-[1.05] font-light text-on-plum sm:text-5xl lg:text-6xl">
                Another tab open. <em className="text-brand">Another half answer.</em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-on-plum-muted sm:text-lg">
                Food, sleep, screens, school. Every mum knows the midnight scroll, and how rarely it ends with a real answer.
              </p>
            </div>

            <div className="mtm-cap mtm-cap-2">
              <p className="eyebrow !text-brand">So Sneha pressed record</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] font-light text-on-plum sm:text-5xl lg:text-6xl">
                She asked the people <em className="text-brand">who actually know.</em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-on-plum-muted sm:text-lg">
                Doctors, nutritionists, educators and wellness experts. {EPISODES.length} honest conversations, hosted by a mum with the same questions as you.
              </p>
            </div>

            <div className="mtm-cap mtm-cap-3">
              <p className="eyebrow">By morning</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] font-light text-ink sm:text-5xl lg:text-6xl">
                Real answers. <em className="text-brand-strong">Mumma approved.</em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
                Swap the midnight search for a conversation with an expert. Free, every week.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PlayButton className="inline-flex min-h-13 whitespace-nowrap cursor-pointer items-center justify-center gap-2.5 rounded-full bg-brand-strong px-7 text-base font-semibold text-white shadow-[0_12px_32px_rgba(176,58,98,0.25)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-strong-hover">
                  Play the latest episode
                </PlayButton>
                <a
                  href="#episodes"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-[1.5px] whitespace-nowrap border-plum/25 bg-card/70 px-7 text-base font-semibold text-plum transition-colors hover:border-brand-strong hover:text-brand-strong"
                >
                  All episodes <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          {/* 3D scene */}
          <div aria-hidden className="mtm-scene">
            <div className="mtm-world">
              {QUERIES.map((item, i) => (
                <span
                  key={item.q}
                  className="mtm-chip"
                  style={{ '--i': i, '--x': `${item.x}px`, '--y': `${item.y}px`, '--z': `${item.z}px` } as React.CSSProperties}
                >
                  <Search className="size-3.5 shrink-0 opacity-70" />
                  {item.q}
                </span>
              ))}

              <div className="mtm-ring">
                {RING.map((ep, i) => (
                  <div key={ep.id} className="mtm-card" style={{ '--i': i } as React.CSSProperties}>
                    <span className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase ${TOPIC_TINT[ep.topic]}`}>
                      {ep.topic}
                    </span>
                    <p className="mt-2 line-clamp-2 font-serif text-sm leading-snug font-medium text-ink sm:text-lg">{ep.title}</p>
                    <p className="mt-1.5 truncate text-xs text-ink-muted">with {ep.guest}</p>
                  </div>
                ))}
              </div>

              <div className="mtm-phone">
                {[-5, -2.5, 0, 2.5].map((z) => (
                  <span key={z} className="mtm-slab" style={{ transform: `translateZ(${z}px)` }} />
                ))}

                <div className="mtm-face mtm-front">
                  {/* Night screen: the search */}
                  <div className="mtm-screen mtm-screen-night">
                    <p className="text-center font-serif text-4xl font-light text-on-plum">2:47</p>
                    <p className="text-center text-[10px] tracking-[0.2em] text-on-plum-muted uppercase">Tuesday</p>
                    <div className="mt-5 flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[11px] text-on-plum">
                      <Search className="size-3 shrink-0" />
                      <span className="truncate">is it normal if my baby…</span>
                      <span className="mtm-caret" />
                    </div>
                    <div className="mt-4 space-y-2">
                      {[80, 64, 72, 50].map((w) => (
                        <span key={w} className="block h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                    <p className="mt-auto text-center text-[10px] text-on-plum-muted">About 1,240,000,000 results</p>
                  </div>

                  {/* Morning screen: the podcast */}
                  <div className="mtm-screen mtm-screen-day">
                    <div className="overflow-hidden rounded-2xl">
                      <img src="/meet-sneha.jpeg" alt="" className="aspect-square w-full object-cover object-top" loading="lazy" />
                    </div>
                    <p className="mt-3 text-[9px] font-semibold tracking-[0.16em] text-brand-strong uppercase">Mumma Approved</p>
                    <p className="mt-1 line-clamp-2 font-serif text-sm leading-tight font-medium text-ink">{LATEST_EPISODE.title}</p>
                    <div className="mt-3 flex h-6 items-center justify-center gap-[3px]">
                      {[8, 14, 20, 12, 18, 24, 14, 10, 20, 16, 8, 12].map((h, i) => (
                        <span
                          key={i}
                          className="w-[3px] rounded-full bg-brand"
                          style={{ height: h, animation: `wave-dance 1.2s ease-in-out ${i * 0.09}s infinite` }}
                        />
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-center">
                      <span className="grid size-10 place-items-center rounded-full bg-brand-strong text-white shadow-md">
                        <svg viewBox="0 0 24 24" className="size-4 translate-x-px fill-current">
                          <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mtm-face mtm-back">
                  <span className="font-serif text-2xl text-white italic">Mumma</span>
                  <span className="text-[10px] font-semibold tracking-[0.3em] text-white/80 uppercase">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clock + scroll hint */}
        <div aria-hidden className="mtm-clock">
          <span className="mtm-clock-dot" />
          <span ref={clockRef}>2:47 AM</span>
        </div>
        <p aria-hidden className="mtm-hint">Scroll</p>
      </div>
    </section>
  )
}
