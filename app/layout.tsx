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
