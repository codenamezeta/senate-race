import type { Metadata } from "next"
import { Outfit, Noto_Sans } from "next/font/google"

import "./globals.css"
import { SiteNav } from "@/components/SiteNav"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const notoSansHeading = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Michael Zeta | Candidate for Chaffey College Student Senator",
  description:
    "I'm Michael Zeta, running for Student Senator at Chaffey College for the 2026-2027 academic year. Learn how I plan to protect your 9+1 rights, manage student fees, and be a peer—not a politician.",
  keywords: [
    "Michael Zeta",
    "Chaffey College",
    "CCSG Elections",
    "Student Senator",
    "Rancho Cucamonga",
    "Chaffey Student Government",
    "2026 CCSG Elections",
  ],
  openGraph: {
    title: "Michael Zeta for Student Senator",
    description:
      "Protecting your money, your rights, and your hustle at Chaffey College. Polls open online April 20-23.",
    url: "https://michaelzeta.com",
    siteName: "Michael Zeta Campaign",
    images: [
      {
        url: "/images/preview.png", // Use your best logo or headshot here for link previews
        width: 512,
        height: 512,
        alt: "Michael Zeta Campaign Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/favicons/favicon.ico" },
      {
        url: "/images/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/images/favicons/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-pt-20 scroll-smooth antialiased sm:scroll-pt-24",
        "font-sans",
        outfit.variable,
        notoSansHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SiteNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
