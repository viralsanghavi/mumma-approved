import React from 'react'

interface AmbientParticlesProps {
  count?: number
  color?: 'plum' | 'rose' | 'gold'
  intensity?: 'subtle' | 'medium' | 'high'
  className?: string
}

/**
 * AmbientParticles - Floating glow elements with subtle motion
 * Creates an ethereal, layered depth effect
 */
export function AmbientParticles({
  count = 5,
  color = 'plum',
  intensity = 'subtle',
  className = '',
}: AmbientParticlesProps) {
  const colorStyles = {
    plum: 'from-purple-300/20 to-purple-500/5',
    rose: 'from-rose-300/20 to-rose-500/5',
    gold: 'from-amber-300/20 to-amber-500/5',
  }

  const intensityValues = {
    subtle: { blur: 40, glow: 20 },
    medium: { blur: 60, glow: 30 },
    high: { blur: 80, glow: 40 },
  }

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 4 + 6,
    delay: Math.random() * 2,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`
            absolute rounded-full
            bg-gradient-to-br ${colorStyles[color]}
            animate-float
          `}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            filter: `blur(${intensityValues[intensity].blur}px)`,
            boxShadow: `0 0 ${intensityValues[intensity].glow}px rgba(155, 115, 155, 0.3)`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  )
}
