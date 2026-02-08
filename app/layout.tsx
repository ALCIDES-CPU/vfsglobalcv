import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'VisaAssist Pro | Trusted Visa Appointment Services',
  description:
    'Professional visa appointment booking assistance. Schedule your visa appointment with confidence through our secure, trusted platform.',
}

export const viewport: Viewport = {
  themeColor: '#1a3a5c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
