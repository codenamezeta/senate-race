"use client"

import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { siteNavLinks } from "@/lib/site-nav-links"
import { cn } from "@/lib/utils"

const linkClass =
  "rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none dark:hover:text-blue-400 dark:focus-visible:ring-blue-400"

const mobileLinkClass =
  "block border-b border-border py-4 text-base font-semibold text-foreground transition-colors last:border-b-0 hover:text-primary focus-visible:bg-muted focus-visible:outline-none dark:hover:text-blue-400"

export function SiteNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-xs backdrop-blur-md supports-backdrop-filter:bg-background/75">
      <div className="relative container mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:h-16">
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logos/mz-logo-black.png"
            alt="Michael Zeta — Student Senator"
            width={40}
            height={40}
            className="size-9 sm:size-10 dark:invert"
            priority
          />
          <span className="sr-only">Michael Zeta | Student Senator</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex lg:gap-2"
          aria-label="Page sections"
        >
          {siteNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none md:hidden dark:focus-visible:ring-blue-400"
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <HugeiconsIcon
            icon={open ? Cancel01Icon : Menu01Icon}
            size={22}
            strokeWidth={2}
            aria-hidden
          />
        </button>
      </div>

      <div
        id="site-mobile-nav"
        className={cn(
          "fixed inset-x-0 top-14 z-40 max-h-[min(100dvh-3.5rem,32rem)] overflow-y-auto border-b border-border bg-background shadow-lg sm:top-16 sm:max-h-[min(100dvh-4rem,32rem)] md:hidden",
          open ? "block" : "hidden"
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-4 py-2" aria-label="Page sections">
          {siteNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
