'use client'

import React from 'react'
import { MashedBackground } from '@/components/layouts/MashedBackground'

export function TrustSection() {
  const platforms = [
    { name: 'Spotify', icon: '🎵' },
    { name: 'Apple Podcasts', icon: '🎙️' },
    { name: 'YouTube', icon: '▶️' },
  ]

  const badges = [
    'Meaningful Conversations',
    'Expert-Led',
    'Emotionally Honest',
    'Practical Advice',
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-warm-ivory via-white to-blush-nude/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cocoa mb-4">
            Trusted by Modern Mothers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Join thousands of listeners finding clarity, courage, and community in conversations about real parenting.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border border-rose-100/50 hover:border-purple-200/50 hover:shadow-lg hover:shadow-purple-100/30 transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <p className="font-semibold text-purple-700">{badge}</p>
            </div>
          ))}
        </div>

        {/* Platform Pills */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
            Available On
          </p>
          <div className="flex flex-wrap gap-3">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white rounded-full border border-rose-100/50 hover:border-purple-300 transition-all duration-300 cursor-pointer animate-fade-in hover:shadow-md"
                style={{ animationDelay: `${(idx + 4) * 50}ms` }}
              >
                <span className="text-lg">{platform.icon}</span>
                <span className="font-medium text-cocoa">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Conversations Teaser */}
        <div className="bg-gradient-to-br from-rose-50/50 to-purple-50/30 rounded-2xl p-8 md:p-12 border border-rose-100/50 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h3 className="font-serif text-2xl font-bold text-cocoa mb-6">Featured Conversations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Balancing Ambition & Motherhood', guest: 'with Priya Sharma' },
              { title: 'Breaking the Perfect Parent Myth', guest: 'with Dr. Anuradha' },
              { title: 'Self-Care Without Guilt', guest: 'with Meera Desai' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg border border-rose-100/40 hover:border-purple-200 hover:shadow-md transition-all duration-300"
              >
                <p className="font-semibold text-cocoa mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.guest}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
