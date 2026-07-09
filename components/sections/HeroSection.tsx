'use client'

import React from 'react'
import { MashedBackground } from '@/components/layouts/MashedBackground'
import { AmbientParticles } from '@/components/layouts/AmbientParticles'
import { AudioWaveform, AudioWaveformHorizontal } from '@/components/layouts/AudioWaveform'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 md:pt-32 pb-20">
      <MashedBackground variant="mesh-1" intensity="medium" animated>
        <AmbientParticles count={7} color="plum" intensity="medium" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left column: Text content */}
            <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="space-y-6 md:space-y-8">
                {/* Decorative badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200/40 bg-rose-50/20">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
                  <span className="text-sm md:text-base text-purple-700 font-medium">
                    New Episode Every Week
                  </span>
                </div>

                {/* Main headline */}
                <div className="space-y-3 md:space-y-4">
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-cocoa">
                    Clarity in the{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-500">
                      Chaos
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
                    Expert parenting conversations for modern mothers navigating motherhood, career, and self.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Listen Now
                  </button>
                  <button className="px-8 py-4 border-2 border-purple-200 text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300">
                    Watch Episodes
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-8 md:gap-12 pt-8 border-t border-rose-100/40">
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-purple-600">50+</p>
                    <p className="text-sm text-muted-foreground">Episodes</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-rose-500">100K+</p>
                    <p className="text-sm text-muted-foreground">Listeners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Decorative visual */}
            <div className="lg:col-span-5 relative h-96 md:h-full hidden lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Masked circular background with glow */}
                <div className="relative w-full h-full max-w-sm">
                  {/* Radial glow backdrop */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-purple-200/40 to-transparent blur-3xl glow-radial" />

                  {/* Main content circle */}
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-rose-100/30 to-purple-100/20 backdrop-blur-sm border border-rose-200/30 overflow-hidden">
                    {/* Waveform graphic inside */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-purple-700 mb-2">Playing Now</p>
                        <h3 className="font-serif text-2xl font-bold text-cocoa">
                          Finding Your Voice
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">with Sneha & Guests</p>
                      </div>

                      <div className="w-full h-16 flex items-center justify-center">
                        <AudioWaveform lines={20} height="48px" color="plum" animate />
                      </div>

                      <button className="px-6 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors">
                        Play Episode
                      </button>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-transparent rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative waveform divider */}
          <div className="mt-20 md:mt-32 -mx-4 md:-mx-6 lg:-mx-8">
            <AudioWaveformHorizontal animate className="opacity-40 h-12" />
          </div>
        </div>
      </MashedBackground>
    </section>
  )
}
