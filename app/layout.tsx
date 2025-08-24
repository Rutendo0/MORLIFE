import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import ScrollToTop from "@/components/scroll-to-top"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: "MOLIFE Medical Services - Digital Healthcare Solutions",
    template: "%s | MOLIFE Medical Services"
  },
  description: "Professional healthcare services in Zimbabwe. Online consultations, general practice, psychology services, and telemedicine. Book your appointment today.",
  keywords: ["healthcare", "telemedicine", "online consultation", "Zimbabwe", "medical services", "psychology", "general practitioner", "MOLIFE"],
  authors: [{ name: "MOLIFE Medical Services" }],
  creator: "MOLIFE Medical Services",
  publisher: "MOLIFE Medical Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://molife-medical.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MOLIFE Medical Services - Digital Healthcare Solutions",
    description: "Professional healthcare services in Zimbabwe. Online consultations, general practice, psychology services, and telemedicine.",
    url: 'https://molife-medical.vercel.app',
    siteName: 'MOLIFE Medical Services',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'MOLIFE Medical Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MOLIFE Medical Services - Digital Healthcare Solutions",
    description: "Professional healthcare services in Zimbabwe. Online consultations, general practice, psychology services, and telemedicine.",
    images: ['/images/logo.jpg'],
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

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MOLIFE" />
      </head>
      <body className={inter.className}>
        {children}
        <ScrollToTop />
        <CookieConsent />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'white',
              border: '1px solid #e2e8f0',
              color: '#1e293b',
            },
          }}
        />
      </body>
    </html>
  )
}