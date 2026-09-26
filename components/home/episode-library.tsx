'use client'

import { useState } from 'react'
import { Check, Play } from 'lucide-react'
import { EPISODES, LATEST_EPISODE, TOPICS, thumbnailUrl, type Episode, type Topic } from '@/lib/episodes'
import { usePlayer } from './player'

const PAGE_SIZE = 8
const LIBRARY = EPISODES.filter((e) => e.id !== LATEST_EPISODE.id)

export function EpisodeLibrary() {
  const { play, watched } = usePlayer()
  const [topic, setTopic] = useState<Topic | 'All'>('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = topic === 'All' ? LIBRARY : LIBRARY.filter((e) => e.topic === topic)
  const shown = filtered.slice(0, visible)
  const remaining = filtered.length - shown.length
  const watchedCount = EPISODES.filter((e) => watched.has(e.id)).length

  return (
    <div>
      <FeaturedEpisode episode={LATEST_EPISODE} watched={watched.has(LATEST_EPISODE.id)} onPlay={() => play(LATEST_EPISODE)} />

      <div className="mt-14 flex flex-col gap-4 sm:mt-16 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-serif text-3xl font-normal text-ink sm:text-4xl">Browse by topic</h3>
          <p className="mt-1 text-base text-ink-muted" aria-live="polite">
            {watchedCount > 0
              ? `You've watched ${watchedCount} of ${EPISODES.length} episodes — keep going.`
              : `${EPISODES.length} conversations with experts who actually know.`}
          </p>
        </div>
      </div>

      <div
        role="group"
        aria-label="Filter episodes by topic"
        className="-mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {(['All', ...TOPICS] as const).map((t) => {
          const active = topic === t
          const count = t === 'All' ? LIBRARY.length : LIBRARY.filter((e) => e.topic === t).length
          return (
            <button
              key={t}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setTopic(t)
                setVisible(PAGE_SIZE)
              }}
              className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-5 text-sm font-medium whitespace-nowrap transition-colors ${
                active
                  ? 'border-plum bg-plum text-on-plum'
                  : 'border-line bg-card text-ink hover:border-brand-strong hover:text-brand-strong'
              }`}
            >
              {t}
              <span className={`text-xs tabular-nums ${active ? 'text-on-plum-muted' : 'text-ink-muted'}`}>{count}</span>
            </button>
          )
        })}
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((ep) => (
          <li key={ep.id}>
            <EpisodeCard episode={ep} watched={watched.has(ep.id)} onPlay={() => play(ep)} />
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-plum/30 px-7 text-sm font-semibold text-plum transition-colors hover:border-brand-strong hover:bg-surface hover:text-brand-strong"
          >
            Show {Math.min(remaining, PAGE_SIZE)} more episodes
          </button>
        </div>
      )}
    </div>
  )
}

function WatchedBadge() {
  return (
    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-card/95 px-2.5 py-1 text-xs font-semibold text-sage shadow-sm">
      <Check className="size-3.5" aria-hidden /> Watched
    </span>
  )
}

function EpisodeCard({ episode, watched, onPlay }: { episode: Episode; watched: boolean; onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-card text-left transition-[transform,box-shadow,border-color] duration-300 ease-(--ease-out) hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_18px_48px_rgba(58,30,44,0.10)]"
    >
      <span className="relative block aspect-video overflow-hidden bg-brand-soft">
        <img
          src={thumbnailUrl(episode.id)}
          alt=""
          loading="lazy"
          width={480}
          height={360}
          className={`size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${watched ? 'opacity-75' : ''}`}
        />
        {watched && <WatchedBadge />}
        <span className="absolute right-3 bottom-3 grid size-11 place-items-center rounded-full bg-card text-brand-strong shadow-md transition-colors group-hover:bg-brand-strong group-hover:text-white">
          <Play className="size-4 translate-x-px fill-current" aria-hidden />
        </span>
      </span>
      <span className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold tracking-[0.12em] text-sky-strong uppercase">{episode.topic}</span>
        <span className="mt-2 line-clamp-3 font-serif text-xl leading-snug font-medium text-ink">{episode.title}</span>
        {episode.guest && <span className="mt-auto pt-3 text-sm text-ink-muted">with {episode.guest}</span>}
      </span>
    </button>
  )
}

function FeaturedEpisode({ episode, watched, onPlay }: { episode: Episode; watched: boolean; onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group grid w-full cursor-pointer overflow-hidden rounded-3xl border border-line bg-card text-left transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(58,30,44,0.12)] md:grid-cols-[1.35fr_1fr]"
    >
      <span className="relative block aspect-video overflow-hidden bg-brand-soft md:aspect-auto md:min-h-[340px]">
        <img
          src={thumbnailUrl(episode.id)}
          alt=""
          width={480}
          height={360}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-plum/50 to-transparent" />
        {watched && <WatchedBadge />}
        <span className="absolute top-1/2 left-1/2 grid size-16 -translate-1/2 place-items-center rounded-full bg-card text-brand-strong shadow-xl transition-transform duration-300 group-hover:scale-110 sm:size-20">
          <Play className="size-6 translate-x-0.5 fill-current sm:size-7" aria-hidden />
        </span>
      </span>
      <span className="flex flex-col justify-center gap-3 p-6 sm:p-8 lg:p-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold tracking-[0.12em] text-brand-strong uppercase">
          <span className="size-1.5 rounded-full bg-brand-strong [animation:pulse-dot_2s_ease-in-out_infinite]" />
          New episode
        </span>
        <span className="font-serif text-3xl leading-tight font-normal text-ink sm:text-4xl">{episode.title}</span>
        {episode.guest && <span className="text-base text-ink-muted">with {episode.guest}</span>}
        <span className="mt-3 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-brand-strong px-6 text-sm font-semibold text-white transition-colors group-hover:bg-brand-strong-hover">
          <Play className="size-4 fill-current" aria-hidden />
          {watched ? 'Watch again' : 'Watch now'}
        </span>
      </span>
    </button>
  )
}
