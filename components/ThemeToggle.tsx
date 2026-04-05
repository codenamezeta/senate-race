"use client"

import { Moon01Icon, Sun01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  /** Styling for use on the primary (blue) action hub footer */
  variant?: "default" | "onPrimary"
  className?: string
}

export function ThemeToggle({
  variant = "default",
  className,
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const isDark = resolvedTheme === "dark"
  const label = isDark ? "Switch to light mode" : "Switch to dark mode"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
      aria-label={mounted ? label : "Theme"}
      className={cn(
        "inline-flex min-h-11 min-w-30 items-center justify-center gap-2 rounded-lg border-2 px-4 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
        variant === "onPrimary" &&
          "border-white/90 bg-transparent text-white hover:bg-white/15 focus-visible:ring-yellow-300 focus-visible:ring-offset-primary",
        variant === "default" &&
          "border-border bg-background text-foreground hover:bg-muted focus-visible:ring-ring focus-visible:ring-offset-background",
        className
      )}
    >
      {mounted ? (
        <HugeiconsIcon
          icon={isDark ? Sun01Icon : Moon01Icon}
          size={20}
          strokeWidth={1.75}
          className="shrink-0"
        />
      ) : (
        <span className="size-5 shrink-0" aria-hidden />
      )}
      <span className="tabular-nums">
        {mounted ? (isDark ? "Light Mode" : "Dark Mode") : "…"}
      </span>
    </button>
  )
}
