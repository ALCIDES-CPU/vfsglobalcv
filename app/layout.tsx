import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, DM_Sans } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata: Metadata = {
  title: "VFS Visa | Agendamento de Visto Profissional",
  description:
    "Assistencia profissional para agendamento de visto. Agende seu visto com confianca atraves da nossa plataforma segura e confiavel.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f2d4a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
