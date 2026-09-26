'use client'

import { useEffect, useRef } from 'react'

/**
 * Writes --parallax (-1 → 1) on the wrapper as it crosses the viewport:
 * -1 when its centre is at the bottom edge, 0 at the middle, 1 at the top.
 * Children use it in transforms. Only listens while on screen; off for reduced motion.
 */
export function Parallax({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const centre = rect.top + rect.height / 2
      const p = Math.min(1, Math.max(-1, 1 - (2 * centre) / window.innerHeight))
      el.style.setProperty('--parallax', p.toFixed(4))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
      } else {
        window.removeEventListener('scroll', onScroll)
      }
    })
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
