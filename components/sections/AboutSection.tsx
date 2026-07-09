'use client'

import React from 'react'

export function AboutSection() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024

  return (
    <section style={{ padding: isMobile ? '80px 16px' : isTablet ? '100px 40px' : '120px 60px', background: '#FDFDFD', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(229, 150, 172, 0.08), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6E6E73', marginBottom: '24px' }}>
          About
        </div>

        <h2 style={{ fontFamily: 'var(--ff-serif)', fontSize: isMobile ? '32px' : isTablet ? '42px' : '56px', fontWeight: 300, lineHeight: 1.15, color: '#2C2C2C', marginBottom: '32px' }}>
          Real answers for real mothers
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '20px', fontWeight: 400, color: '#2C2C2C', marginBottom: '16px' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.8, color: '#6E6E73', marginBottom: '16px' }}>
              Every mum deserves good information. Not just the lucky ones who know the right people. Mumma Approved exists to democratize access to expert guidance on motherhood, parenting, health, and wellbeing.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '20px', fontWeight: 400, color: '#2C2C2C', marginBottom: '16px' }}>
              What We Cover
            </h3>
            <ul style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.8, color: '#6E6E73', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>• Child health, nutrition & development</li>
              <li style={{ marginBottom: '8px' }}>• Parenting strategies & challenges</li>
              <li style={{ marginBottom: '8px' }}>• Maternal wellbeing & mental health</li>
              <li style={{ marginBottom: '8px' }}>• Education & learning</li>
              <li>• Building authentic motherhood</li>
            </ul>
          </div>
        </div>

        <div style={{ padding: '32px', background: '#FFF8FA', border: '1px solid rgba(229, 150, 172, 0.15)', borderRadius: '20px' }}>
          <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '18px', fontWeight: 400, color: '#2C2C2C', marginBottom: '12px' }}>
            Why Mumma Approved?
          </h3>
          <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: 400, lineHeight: 1.8, color: '#6E6E73' }}>
            Every guest is handpicked for their expertise and authenticity. No fluff, no sponsored advice—just real conversations with doctors, nutritionists, educators, and wellness experts. Because motherhood is complicated, and you deserve clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
