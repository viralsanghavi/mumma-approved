'use client'

import React from 'react'

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
    community: [
      { label: 'Join Community', href: '#' },
      { label: 'Suggest a Topic', href: '#' },
      { label: 'Partner with Us', href: '#' },
      { label: 'Submit Story', href: '#' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Credits', href: '#' },
    ],
  }

  return (
    <footer className="bg-cocoa/5 border-t border-rose-100/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4 animate-fade-in">
            <h3 className="font-serif text-2xl font-bold text-cocoa">
              Mumma<br />Approved
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clarity in the chaos. Expert conversations for modern mothers.
            </p>
            <div className="flex gap-3 pt-2">
              {['Instagram', 'YouTube', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-rose-100/50 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                  aria-label={platform}
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${(Object.keys(footerLinks).indexOf(category) + 1) * 50}ms` }}>
              <p className="text-sm font-semibold text-cocoa uppercase tracking-widest mb-4">
                {category === 'company' ? 'Company' : category === 'community' ? 'Community' : 'Legal'}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-rose-100/30 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Mumma Approved. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with 💜 for modern mothers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
