import type { Metadata } from 'next'
import './globals.css'
import CookieConsent from '@/components/cookie-consent'
import Preloader from '@/components/preloader'

export const metadata: Metadata = {
  title: 'Efe Tıp | En Parlak Günleri Geri Getiriyoruz | Modern Laboratuvar Çözümleri',
  description: 'Efe Tıp ile yenilikçi laboratuvar ekipmanları ve modern tıbbi cihazlar. En parlak günleri geri getirmek için ileri teknoloji çözümleri sunuyoruz.',
  keywords: 'Efe Tıp, laboratuvar, tıbbi cihazlar, laboratuvar ekipmanları, modern laboratuvar çözümleri, tıbbi teknoloji',
  authors: [{ name: 'Efe Tıp' }],
  creator: 'Efe Tıp',
  publisher: 'Efe Tıp',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://efetip.com.tr'),
  openGraph: {
    title: 'Efe Tıp | En Parlak Günleri Geri Getiriyoruz',
    description: 'Efe Tıp ile yenilikçi laboratuvar ekipmanları ve modern tıbbi cihazlar. En parlak günleri geri getirmek için ileri teknoloji çözümleri sunuyoruz.',
    url: 'https://efetip.com.tr',
    siteName: 'Efe Tıp',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Efe Tıp | En Parlak Günleri Geri Getiriyoruz',
    description: 'Efe Tıp ile yenilikçi laboratuvar ekipmanları ve modern tıbbi cihazlar.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body>
        <Preloader />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
