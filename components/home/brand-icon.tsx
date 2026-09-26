import { Music } from 'lucide-react'
import { siApplepodcasts, siInstagram, siSpotify, siYoutube, siYoutubemusic } from 'simple-icons'

const ICONS: Record<string, { path: string; hex: string }> = {
  Spotify: siSpotify,
  'Apple Podcasts': siApplepodcasts,
  YouTube: siYoutube,
  'YouTube Music': siYoutubemusic,
  Instagram: siInstagram,
}

/** Brand mark for a podcast or social platform. `colored` uses the brand colour, otherwise currentColor. */
export function BrandIcon({ name, className = 'size-5', colored = false }: { name: string; className?: string; colored?: boolean }) {
  const icon = ICONS[name]
  if (!icon) return <Music className={className} aria-hidden />
  return (
    <svg viewBox="0 0 24 24" className={className} fill={colored ? `#${icon.hex}` : 'currentColor'} aria-hidden>
      <path d={icon.path} />
    </svg>
  )
}
