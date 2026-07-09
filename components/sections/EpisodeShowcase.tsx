'use client'

import React from 'react'
import { AsymmetricalGrid, GridItem } from '@/components/layouts/AsymmetricalGrid'

export function EpisodeShowcase() {
  const episodes = [
    {
      number: 'EP 47',
      title: 'Finding Your Voice as a Mother',
      guest: 'with Sneha Patel',
      duration: '42 min',
      topic: 'Identity & Self-Worth',
    },
    {
      number: 'EP 46',
      title: 'Work-Life Integration (Not Balance)',
      guest: 'with Dr. Anuradha Singh',
      duration: '38 min',
      topic: 'Career & Motherhood',
    },
    {
      number: 'EP 45',
      title: 'Breaking Generational Patterns',
      guest: 'with Meera Desai',
      duration: '45 min',
      topic: 'Family Dynamics',
    },
    {
      number: 'EP 44',
      title: 'The Screen Time Conversation',
      guest: 'with Priya Sharma',
      duration: '40 min',
      topic: 'Modern Parenting',
    },
    {
      number: 'EP 43',
      title: 'Self-Care Without Guilt',
      guest: 'with Kavya Nair',
      duration: '35 min',
      topic: 'Wellness & Balance',
    },
    {
      number: 'EP 42',
      title: 'Raising Confident Girls',
      guest: 'with Dr. Amrita Roy',
      duration: '41 min',
      topic: 'Child Development',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-rose-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cocoa mb-4">
            Latest Episodes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deep conversations on motherhood, identity, and living authentically.
          </p>
        </div>

        {/* Episodes Grid - Asymmetrical layout */}
        <AsymmetricalGrid>
          {episodes.map((episode, idx) => (
            <GridItem
              key={idx}
              colSpan={idx === 0 ? 'two-thirds' : idx === 1 ? 'third' : idx === 2 ? 'third' : idx === 3 ? 'half' : 'third'}
              delay={idx}
            >
              <div className="group h-full">
                {/* Episode Card */}
                <div
                  className={`
                    relative h-full rounded-xl p-6 md:p-8
                    bg-white border border-rose-100/40
                    hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/30
                    transition-all duration-300 hover:translate-y-[-4px]
                    overflow-hidden
                    ${idx === 0 ? 'lg:row-span-2' : ''}
                  `}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-rose-100/20 rounded-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Episode number */}
                    <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest">
                      {episode.number}
                    </p>

                    {/* Title */}
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-cocoa mb-2 leading-snug">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{episode.guest}</p>
                    </div>

                    {/* Topic badge */}
                    <div className="inline-block px-3 py-1 bg-rose-100/50 rounded-full">
                      <p className="text-xs font-medium text-rose-700">{episode.topic}</p>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center justify-between pt-4 border-t border-rose-100/30">
                      <p className="text-xs text-muted-foreground">{episode.duration}</p>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-rose-500 text-white text-sm rounded-lg font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                        Listen
                      </button>
                    </div>
                  </div>

                  {/* Decorative masked shape */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                </div>
              </div>
            </GridItem>
          ))}
        </AsymmetricalGrid>

        {/* View All CTA */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300">
            View All Episodes
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
