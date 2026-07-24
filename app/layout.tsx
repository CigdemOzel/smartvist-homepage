import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Smartvist — AI-Powered Identity Verification & Digital Onboarding',
  description:
    'Smartvist builds trust between institutions and their customers with AI-powered identity verification, remote onboarding and KYC automation. Meet the SmartID platform: SDK, Studio and Agent.',
  generator: 'v0.app',
  keywords: [
    'identity verification',
    'digital onboarding',
    'KYC',
    'KYB',
    'biometric verification',
    'liveness detection',
    'NFC verification',
    'SmartID',
    'Smartvist',
  ],
  openGraph: {
    title: 'Smartvist — AI-Powered Identity Verification',
    description:
      'Verify identities in seconds with the SmartID platform. OCR, NFC, face match, liveness and expert video verification in one product.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e56d6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
