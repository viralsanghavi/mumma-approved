import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mumma Approved - Parenting Conversations for Modern Mothers',
  description: 'Expert parenting podcast for modern Indian mothers. Clarity in the chaos: real conversations about motherhood, identity, and living authentically.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Mumma Approved - Parenting Conversations',
    description: 'Expert parenting podcast for modern Indian mothers.',
    type: 'website',
    url: 'https://mumma-approved.vercel.app',
    images: [
      {
        url: 'https://mumma-approved.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fffcfb',
  colorScheme: 'light',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
