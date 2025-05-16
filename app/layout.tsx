import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MobileContactBar from "@/components/mobile-contact-bar"
import LogoLoadingScreen from "@/components/logo-loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Heir Wise Probate - Trusted Legal Representation",
    template: "%s | Heir Wise Probate",
  },
  description: "Dedicated attorneys specializing in probate law, estate planning, and inheritance matters.",
  keywords: [
    "probate law",
    "estate planning",
    "inheritance",
    "attorneys",
    "legal services",
    "will contests",
    "trust administration",
  ],
  authors: [{ name: "Heir Wise Probate" }],
  creator: "Heir Wise Probate",
  publisher: "Heir Wise Probate",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://heirwise.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heir Wise Probate - Trusted Legal Representation",
    description: "Dedicated attorneys specializing in probate law, estate planning, and inheritance matters.",
    url: "https://heirwise.com",
    siteName: "Heir Wise Probate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heir Wise Probate - Trusted Legal Representation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heir Wise Probate - Trusted Legal Representation",
    description: "Dedicated attorneys specializing in probate law, estate planning, and inheritance matters.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-scales.png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#c6a848",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-scales.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LogoLoadingScreen />
          <div className="pt-16 md:pt-20">{children}</div>
          <MobileContactBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
