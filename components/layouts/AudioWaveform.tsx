import React from 'react'

interface AudioWaveformProps {
  animate?: boolean
  lines?: number
  height?: string
  color?: 'plum' | 'rose' | 'gold'
  className?: string
}

/**
 * AudioWaveform - SVG-based waveform graphic suggesting voice/connection
 * Can be static or animated with optional staggered motion
 */
export function AudioWaveform({
  animate = true,
  lines = 40,
  height = '64px',
  color = 'plum',
  className = '',
}: AudioWaveformProps) {
  const colorMap = {
    plum: '#9b7b9b',
    rose: '#d28c96',
    gold: '#d9b469',
  }

  // Generate waveform bars with varying heights
  const generateWaveform = () => {
    const bars = []
    const center = lines / 2

    for (let i = 0; i < lines; i++) {
      const distanceFromCenter = Math.abs(i - center)
      const normalizedDistance = distanceFromCenter / center
      const heightFactor = Math.cos((normalizedDistance * Math.PI) / 2)
      const barHeight = Math.max(0.1, heightFactor)

      bars.push({
        x: (i / lines) * 100,
        height: barHeight,
        delay: i * 0.03,
      })
    }

    return bars
  }

  const waveform = generateWaveform()
  const barWidth = 100 / lines * 0.7

  return (
    <svg
      viewBox={`0 0 ${lines * 12} 100`}
      height={height}
      className={`${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {waveform.map((bar, idx) => (
        <g key={idx}>
          <rect
            x={bar.x / (lines / (lines * 12))}
            y={50 - (bar.height * 40)}
            width={barWidth * 1.2}
            height={bar.height * 80}
            fill={colorMap[color]}
            opacity="0.6"
            rx="1"
            className={animate ? 'animate-pulse-subtle' : ''}
            style={{
              animationDelay: `${bar.delay}s`,
              transition: 'all 0.3s ease-out',
            }}
          />
        </g>
      ))}

      {/* Glow effect */}
      <defs>
        <filter id="waveformGlow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

/**
 * AudioWaveformHorizontal - Wide horizontal waveform for headers/decorative use
 */
export function AudioWaveformHorizontal({
  animate = true,
  className = '',
}: {
  animate?: boolean
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 400 60"
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Waveform bars */}
      {Array.from({ length: 40 }).map((_, i) => {
        const distFromCenter = Math.abs(i - 20) / 20
        const height = Math.cos((distFromCenter * Math.PI) / 2) * 25 + 5
        return (
          <rect
            key={i}
            x={i * 10}
            y={30 - height / 2}
            width="8"
            height={height}
            fill="rgba(155, 115, 155, 0.4)"
            rx="1"
            className={animate ? 'animate-pulse-subtle' : ''}
            style={{
              animationDelay: `${i * 0.05}s`,
            }}
          />
        )
      })}
    </svg>
  )
}
