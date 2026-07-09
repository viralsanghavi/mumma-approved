import React from 'react'

interface AsymmetricalGridProps {
  children: React.ReactNode
  className?: string
}

/**
 * AsymmetricalGrid - Creates editorial-style overlapping grid layouts
 * with flexible column spans and absolute positioning for depth effects
 */
export function AsymmetricalGrid({ children, className = '' }: AsymmetricalGridProps) {
  return (
    <div
      className={`
        grid gap-6 md:gap-8 lg:gap-12
        grid-cols-1 md:grid-cols-3 lg:grid-cols-12
        auto-rows-max relative
        ${className}
      `}
    >
      {children}
    </div>
  )
}

interface GridItemProps {
  children: React.ReactNode
  colSpan?: 'full' | 'half' | 'third' | 'two-thirds' | number
  rowSpan?: number
  className?: string
  delay?: number
}

/**
 * GridItem - Individual grid cell with animation support
 */
export function GridItem({
  children,
  colSpan = 'half',
  rowSpan = 1,
  className = '',
  delay = 0,
}: GridItemProps) {
  const spanMap = {
    full: 'col-span-1 md:col-span-3 lg:col-span-12',
    half: 'col-span-1 md:col-span-3 lg:col-span-6',
    third: 'col-span-1 md:col-span-1 lg:col-span-4',
    'two-thirds': 'col-span-1 md:col-span-2 lg:col-span-8',
  }

  const colSpanClass = typeof colSpan === 'number' ? `lg:col-span-${colSpan}` : spanMap[colSpan]

  return (
    <div
      className={`
        ${colSpanClass}
        ${rowSpan > 1 ? `row-span-${rowSpan}` : ''}
        animate-fade-in
        ${className}
      `}
      style={{
        animationDelay: `${delay * 50}ms`,
      }}
    >
      {children}
    </div>
  )
}
