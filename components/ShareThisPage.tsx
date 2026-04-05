"use client"

import { Share01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function getCanShareSnapshot() {
  return (
    typeof navigator !== "undefined" && typeof navigator.share === "function"
  )
}

function subscribe() {
  return () => {}
}

export function ShareThisPage({ className }: { className?: string }) {
  const canShare = useSyncExternalStore(
    subscribe,
    getCanShareSnapshot,
    () => false
  )

  async function handleShare() {
    if (typeof navigator.share !== "function") return
    const url = window.location.href
    const title = document.title || "Michael Zeta for Student Senator"
    try {
      await navigator.share({
        title,
        text: "Student gov voting (Apr 20–23) and how to use your voice—worth a look.",
        url,
      })
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return
    }
  }

  if (!canShare) return null

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className={className || ""}
      onClick={handleShare}
    >
      <HugeiconsIcon icon={Share01Icon} size={20} strokeWidth={1.75} />
      Share this page with others
    </Button>
  )
}
