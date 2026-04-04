"use client"

import { BubbleChatIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const inputClass =
  "w-full min-h-11 rounded-lg border border-input bg-background px-3.5 py-2.5 text-base text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none dark:bg-background/80"

export function Feedback() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [statusMessage, setStatusMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get("name") ?? "").trim()
    const email = String(fd.get("email") ?? "").trim()
    const message = String(fd.get("message") ?? "").trim()

    if (!message) {
      setStatus("error")
      setStatusMessage("Please add a message so I know what to work on.")
      return
    }

    setStatus("loading")
    setStatusMessage("")

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || undefined, email: email || undefined, message }),
      })

      let data: { error?: string } = {}
      try {
        data = (await res.json()) as { error?: string }
      } catch {
        /* ignore */
      }

      if (!res.ok) {
        setStatus("error")
        setStatusMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Try again in a moment."
        )
        return
      }

      setStatus("success")
      setStatusMessage("Got it. I read every note—thank you for trusting me with it.")
      form.reset()
    } catch {
      setStatus("error")
      setStatusMessage("Something went wrong. Try again in a moment.")
    }
  }

  return (
    <section
      id="feedback"
      aria-labelledby="feedback-heading"
      className="scroll-mt-20 border-y border-border/60 bg-background py-16 sm:scroll-mt-24 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase dark:text-blue-400">
              Be heard
            </p>
            <div className="mt-4 flex items-start gap-4">
              <div
                className="hidden shrink-0 text-primary/35 sm:block dark:text-blue-400/40"
                aria-hidden
              >
                <HugeiconsIcon icon={BubbleChatIcon} size={48} strokeWidth={1.25} />
              </div>
              <div>
                <h2
                  id="feedback-heading"
                  className="font-heading text-3xl font-extrabold tracking-tight text-foreground text-pretty md:text-4xl"
                >
                  Put me to work. Tell me what you need.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Earlier, when I said a representative&apos;s only job is to ask
                  what you need and then go figure out how to make it happen. I
                  meant it. Whether it&apos;s a frustrating campus policy, a club
                  funding issue, or just something that makes the daily hustle
                  harder than it needs to be, drop it here. You can always come
                  back to this page to speak your mind.
                </p>
              </div>
            </div>
          </div>

          <Card className="border-border/80 bg-card shadow-md dark:border-border dark:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="font-heading text-lg font-bold text-foreground">
                Message Michael
              </CardTitle>
              <CardDescription>
                Straight to my inbox—no ticket queue, no corporate script.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="feedback-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name{" "}
                    <span className="font-normal text-muted-foreground">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="feedback-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your Name (Optional)"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="feedback-email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email{" "}
                    <span className="font-normal text-muted-foreground">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="feedback-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your Email (If you want me to follow up)"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="feedback-message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Your message
                  </label>
                  <textarea
                    id="feedback-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind? What should CCSG be fighting for?"
                    className={`${inputClass} min-h-[140px] resize-y py-3`}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="h-12 w-full border-0 bg-accent font-bold text-black shadow-sm hover:bg-yellow-500 disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
                >
                  {status === "loading" ? "Sending…" : "Send to Michael"}
                </Button>
                <p
                  className="min-h-5 text-sm text-muted-foreground"
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" || status === "error"
                    ? statusMessage
                    : "\u00a0"}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
