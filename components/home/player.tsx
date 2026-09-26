'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, ExternalLink, Play, X } from 'lucide-react'
import { EPISODES, nextEpisode, youtubeUrl, type Episode } from '@/lib/episodes'

const WATCHED_KEY = 'ma:watched'

type PlayerContextValue = {
  play: (episode: Episode) => void
  watched: Set<string>
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used inside <PlayerProvider>')
  return ctx
}

function readWatched(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(WATCHED_KEY) ?? '[]'))
  } catch {
    return new Set()
  }
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<Episode | null>(null)
  const [watched, setWatched] = useState<Set<string>>(new Set())

  useEffect(() => setWatched(readWatched()), [])

  const play = useCallback((episode: Episode) => {
    setCurrent(episode)
    setWatched((prev) => {
      const next = new Set(prev).add(episode.id)
      try {
        localStorage.setItem(WATCHED_KEY, JSON.stringify([...next]))
      } catch {}
      return next
    })
  }, [])

  const upNext = current ? nextEpisode(current, watched) : undefined
  const value = useMemo(() => ({ play, watched }), [play, watched])

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <Dialog.Root open={!!current} onOpenChange={(open) => !open && setCurrent(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[200] bg-plum/80 backdrop-blur-sm [animation:overlay-in_.2s_ease-out]" />
          <Dialog.Content
            className="fixed inset-x-0 bottom-0 z-[201] max-h-[92dvh] overflow-y-auto rounded-t-3xl bg-card p-4 shadow-2xl [animation:dialog-in_.3s_var(--ease-out)] sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-[min(920px,calc(100vw-48px))] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-3xl sm:p-6"
            aria-describedby={undefined}
          >
            {current && (
              <>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">{current.topic}</p>
                    <Dialog.Title className="mt-1 font-serif text-2xl leading-tight font-medium text-ink sm:text-3xl">
                      {current.title}
                    </Dialog.Title>
                    {current.guest && <p className="mt-1 text-sm text-ink-muted">with {current.guest}</p>}
                  </div>
                  <Dialog.Close className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-surface text-ink transition-colors hover:bg-brand-soft">
                    <X className="size-5" aria-hidden />
                    <span className="sr-only">Close player</span>
                  </Dialog.Close>
                </div>

                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-plum">
                  <iframe
                    key={current.id}
                    src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={current.title}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="size-full"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {upNext && (
                    <button
                      type="button"
                      onClick={() => play(upNext)}
                      className="group flex min-h-11 cursor-pointer items-center gap-3 rounded-2xl bg-surface p-2 pr-4 text-left transition-colors hover:bg-brand-soft"
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${upNext.id}/mqdefault.jpg`}
                        alt=""
                        width={96}
                        height={54}
                        className="h-[54px] w-24 shrink-0 rounded-lg object-cover"
                      />
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold tracking-[0.12em] text-brand-strong uppercase">Up next</span>
                        <span className="line-clamp-2 text-sm font-medium text-ink">{upNext.title}</span>
                      </span>
                      <ArrowRight className="ml-auto size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </button>
                  )}
                  <a
                    href={youtubeUrl(current.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-ink-muted underline-offset-4 hover:text-brand-strong hover:underline"
                  >
                    Open on YouTube <ExternalLink className="size-4" aria-hidden />
                  </a>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </PlayerContext.Provider>
  )
}

type PlayButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  episodeId?: string
  icon?: boolean
}

/** Opens the in-page player. Defaults to the latest episode. */
export function PlayButton({ episodeId, icon = true, children, ...props }: PlayButtonProps) {
  const { play } = usePlayer()
  const episode = EPISODES.find((e) => e.id === episodeId) ?? EPISODES[0]
  return (
    <button type="button" onClick={() => play(episode)} {...props}>
      {icon && <Play className="size-4 fill-current" aria-hidden />}
      {children}
    </button>
  )
}
