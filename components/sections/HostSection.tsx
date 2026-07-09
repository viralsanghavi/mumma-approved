'use client'

import React from 'react'
import { MashedBackground } from '@/components/layouts/MashedBackground'

export function HostSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/20 to-warm-ivory">
      <MashedBackground variant="mesh-1" intensity="subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image/Visual */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in">
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Masked portrait frame */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-3 border-rose-200/40 glow-radial">
                  {/* Gradient background for portrait area */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-purple-100/30 to-amber-100/20" />

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    👩‍💼
                  </div>

                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent" />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tr from-rose-200/20 to-transparent rounded-full blur-2xl" />

                {/* Glow badge */}
                <div className="absolute bottom-6 left-6 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-rose-100/50 glow-soft">
                  <p className="font-semibold text-sm text-purple-700">Host & Creator</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                  Meet Your Host
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-cocoa">
                  Sneha Patel
                </h2>
                <p className="text-xl text-muted-foreground font-light">
                  Mother, Entrepreneur, Curious Learner
                </p>
              </div>

              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed font-light">
                <p>
                  Sneha is a mother of two and the founder of Mumma Approved—a space dedicated to honest conversations about modern motherhood. With a background in psychology and a decade in social entrepreneurship, she brings both warmth and wisdom to every episode.
                </p>
                <p>
                  She believes that mothers deserve real conversations, not perfect advice. Her mission is to create a community where women feel seen, heard, and supported through the beautiful chaos of motherhood.
                </p>
              </div>

              {/* Key Values */}
              <div className="space-y-3 pt-4">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                  Core Values
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Authenticity', 'Empathy', 'Growth', 'Connection'].map((value, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-rose-100/40 hover:border-purple-200 transition-colors"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-rose-500" />
                      <span className="font-semibold text-cocoa">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social/Connect CTA */}
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Follow Sneha
                </button>
                <button className="px-8 py-3 border-2 border-purple-200 text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </MashedBackground>
    </section>
  )
}
