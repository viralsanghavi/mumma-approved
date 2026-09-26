'use client'

import { useEffect, useRef } from 'react'

const SEATS = 10 // a circle is 8–12 mums; the last seat is left open for the visitor

/**
 * Decorative orbit over the Silent Room photo: mums "take their seats" around
 * a circle when it scrolls into view, then the circle turns slowly.
 * One seat stays empty and is labelled "Your seat".
 */
export function SilentCircle() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = ''
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} aria-hidden className="sc">
      <div className="sc-ring">
        {Array.from({ length: SEATS }, (_, i) => {
          const open = i === SEATS - 1
          return (
            <span
              key={i}
              className="sc-seat"
              style={{ '--angle': `${i * (360 / SEATS) - 90}deg`, '--delay': `${0.15 + i * 0.09 + (open ? 0.35 : 0)}s` } as React.CSSProperties}
            >
              <span className={open ? 'sc-dot sc-dot-open' : 'sc-dot'} />
              {open && (
                <span className="sc-label-upright">
                  <span className="sc-label">Your seat</span>
                </span>
              )}
            </span>
          )
        })}
      </div>
      <div className="sc-core">
        <span className="font-serif text-3xl leading-none font-light text-on-plum sm:text-4xl">8–12</span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-on-plum-muted uppercase">mums · one circle</span>
      </div>
    </div>
  )
}
