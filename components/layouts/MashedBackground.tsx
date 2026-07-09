import React from 'react'

interface MashedBackgroundProps {
  children?: React.ReactNode
  variant?: 'mesh-1' | 'mesh-2' | 'radial'
  intensity?: 'subtle' | 'medium' | 'strong'
  animated?: boolean
  className?: string
}

/**
 * MashedBackground - Layered mesh gradient with optional animation
 * Creates an artistic, overlapping color plane effect
 */
export function MashedBackground({
  children,
  variant = 'mesh-1',
  intensity = 'subtle',
  animated = false,
  className = '',
}: MashedBackgroundProps) {
  const intensityClasses = {
    subtle: 'opacity-40',
    medium: 'opacity-60',
    strong: 'opacity-80',
  }

  const variantStyles = {
    'mesh-1': 'bg-gradient-to-br from-rose-100/30 via-purple-100/20 to-amber-100/10',
    'mesh-2': 'bg-gradient-radial from-rose-200/20 via-transparent to-transparent',
    radial: 'bg-radial from-purple-100/25 to-transparent',
  }

  return (
    <div
      className={`
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Animated background layer */}
      <div
        className={`
          absolute inset-0
          ${variantStyles[variant]}
          ${intensityClasses[intensity]}
          ${animated ? 'animate-pulse-subtle' : ''}
          pointer-events-none
          z-0
        `}
      />

      {/* Secondary mesh accent */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-t from-rose-50/10 via-transparent to-transparent
          ${animated ? 'animate-pulse-subtle' : ''}
          pointer-events-none
          z-0
          mix-blend-multiply
        `}
        style={{
          animationDelay: animated ? '1s' : undefined,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
