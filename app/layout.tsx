import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
})

export const metadata: Metadata = {
  title: "Plutas Lab - AI Experimental Lab",
  description:
    "An AI experimental lab by developer friends in Bangalore, exploring repeatable business models and solving real-world problems through innovation and collaboration.",
  generator: 'v0.app',
  icons: {
    icon: '/3433f2f3-1f5e-400c-97cf-f3d61b73a009.jpg',
    shortcut: '/3433f2f3-1f5e-400c-97cf-f3d61b73a009.jpg',
    apple: '/3433f2f3-1f5e-400c-97cf-f3d61b73a009.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${instrumentSerif.variable} antialiased`} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
