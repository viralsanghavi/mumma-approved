'use client'

import React from 'react'
import { MashedBackground } from '@/components/layouts/MashedBackground'
import { AmbientParticles } from '@/components/layouts/AmbientParticles'

export function PlatformCTA() {
  const platforms = [
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'Spotify', icon: '🎵', url: '#' },
    { name: 'Apple Podcasts', icon: '🎙️', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
  ]

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 overflow-hidden">
      <MashedBackground variant="mesh-1" intensity="medium" animated>
        <AmbientParticles count={5} color="rose" intensity="subtle" />

        <div className="max-w-4xl mx-auto text-center relative z-20">
          {/* Header */}
          <div className="mb-12 md:mb-16 space-y-4 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cocoa leading-tight">
              Join the Conversation
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
              New episodes every week. Subscribe on your favorite platform and join thousands of mothers finding clarity and community.
            </p>
          </div>

          {/* Platform buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {platforms.map((platform, idx) => (
              <a
                key={idx}
                href={platform.url}
                className={`
                  p-4 md:p-6 rounded-xl
                  bg-white border border-rose-100/40
                  hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/30
                  transition-all duration-300 hover:translate-y-[-4px]
                  group
                `}
              >
                <div className="text-4xl md:text-5xl mb-3">{platform.icon}</div>
                <p className="font-semibold text-cocoa text-sm md:text-base group-hover:text-purple-600 transition-colors">
                  {platform.name}
                </p>
              </a>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="bg-white rounded-xl p-8 md:p-12 border border-rose-100/50 shadow-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h3 className="font-serif text-2xl font-bold text-cocoa mb-4">
              Never Miss an Episode
            </h3>
            <p className="text-foreground/70 mb-6">
              Get updates on new episodes and exclusive content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </MashedBackground>
    </section>
  )
}
