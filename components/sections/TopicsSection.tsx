'use client'

import React from 'react'

export function TopicsSection() {
  const topics = [
    {
      title: 'Conscious Parenting',
      description: 'Intentional, mindful approaches to raising children',
      icon: '🌱',
    },
    {
      title: 'Emotional Wellbeing',
      description: 'Mental health, stress, and emotional resilience',
      icon: '💜',
    },
    {
      title: 'Early Childhood',
      description: 'Development milestones and parenting young children',
      icon: '👶',
    },
    {
      title: 'Family Dynamics',
      description: 'Relationships, communication, and family patterns',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Body Image & Self-Worth',
      description: 'Personal identity, confidence, and self-love',
      icon: '✨',
    },
    {
      title: 'Modern Parenting',
      description: 'Technology, screen time, and contemporary challenges',
      icon: '📱',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-warm-ivory to-blush-nude/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cocoa mb-4">
            Topics We Explore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From conscious parenting to modern challenges—real conversations on the issues that matter.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div
                className={`
                  p-8 h-full rounded-xl bg-white
                  border border-rose-100/40
                  hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/30
                  transition-all duration-300 hover:translate-y-[-4px]
                  overflow-hidden
                `}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-rose-100/20 rounded-xl" />
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div className="text-4xl">{topic.icon}</div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-cocoa mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-sm font-semibold text-purple-600 hover:text-purple-700">
                      Explore Topic →
                    </button>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-200/10 to-transparent rounded-full blur-xl pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
