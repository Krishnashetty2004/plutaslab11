import type React from "react"
import type { Metadata, Viewport } from "next"
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
  title: {
    default: "Plutas Lab - AI Experimental Lab",
    template: "%s | Plutas Lab"
  },
  description:
    "An AI experimental lab by developer friends in Bangalore, exploring repeatable business models and solving real-world problems through innovation and collaboration.",
  keywords: [
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Bangalore",
    "Tech Lab",
    "Innovation",
    "Startup",
    "Builders Night",
    "Developer Community",
    "Tech Events",
    "AI Research",
    "Experimental Lab"
  ],
  authors: [{ name: "Plutas Lab Team" }],
  creator: "Plutas Lab",
  publisher: "Plutas Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://plutaslab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plutaslab.com',
    title: 'Plutas Lab - AI Experimental Lab',
    description: 'An AI experimental lab by developer friends in Bangalore, exploring repeatable business models and solving real-world problems through innovation and collaboration.',
    siteName: 'Plutas Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plutas Lab - AI Experimental Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plutas Lab - AI Experimental Lab',
    description: 'An AI experimental lab by developer friends in Bangalore, exploring repeatable business models and solving real-world problems through innovation and collaboration.',
    images: ['/og-image.jpg'],
    creator: '@plutaslab',
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
  category: 'technology',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
