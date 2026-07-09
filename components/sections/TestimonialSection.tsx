'use client'

import React from 'react'

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Mumma Approved helped me realize I wasn't alone in my struggles. Hearing other mothers being so honest was liberating.",
      author: 'Priya M.',
      role: 'Working Mother of 2',
    },
    {
      quote: 'Finally, a podcast that treats motherhood as a real, complex journey. Not preachy, just real conversations.',
      author: 'Anjali K.',
      role: 'New Mom',
    },
    {
      quote: "The wisdom shared here is practical and immediately applicable. I listen to every episode twice.",
      author: 'Meera L.',
      role: 'Mother & Therapist',
    },
    {
      quote: "A space where I can be myself. No judgment, just understanding. It's become part of my self-care routine.",
      author: 'Sneha R.',
      role: 'Stay-at-Home Mom',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-warm-ivory via-blush-nude/20 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cocoa mb-4">
            What Listeners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real words from the mothers in our community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group animate-fade-in"
              style={{ animationDelay: `${idx * 75}ms` }}
            >
              <div
                className={`
                  p-8 h-full rounded-xl bg-white
                  border border-rose-100/40
                  hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/20
                  transition-all duration-300 hover:translate-y-[-2px]
                  relative overflow-hidden
                `}
              >
                {/* Quote mark decoration */}
                <div className="text-5xl font-serif text-purple-600/20 mb-4">❝</div>

                {/* Quote text */}
                <p className="font-serif text-lg text-cocoa/90 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div className="pt-6 border-t border-rose-100/30">
                  <p className="font-semibold text-cocoa">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>

                {/* Hover glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* More testimonials CTA */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300">
            Read More Stories
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
