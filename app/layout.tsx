import type { Metadata } from 'next'
import './globals.css'
import GoogleTag from './GoogleTag'

export const metadata: Metadata = {
  title: 'Wall Panels Calgary & Edmonton | Supply & Installation | Panelopia',
  description:
    'WPC slat panels, marble-effect panels, acoustic panels and designer wallpaper, supplied, delivered and professionally installed across Calgary and Edmonton. Get a free quote.',
  metadataBase: new URL('https://panelopia.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Wall Panels Calgary & Edmonton | Supply & Installation | Panelopia',
    description:
      'WPC slat panels, marble-effect panels, acoustic panels and designer wallpaper, supplied, delivered and professionally installed across Calgary and Edmonton.',
    siteName: 'Panelopia',
    images: [{ url: '/images/showcase-wpc-slat-fireplace.jpg', width: 1200, height: 900 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleTag />
        {children}
      </body>
    </html>
  )
}
