"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { submitVoteReminder } from "@/lib/submit-vote-reminder"
import { getGoogleCalendarVoteUrl, voteIcsPath } from "@/lib/vote-calendar"

export function ActionHub() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const raw = new FormData(form).get("email")
    const email = typeof raw === "string" ? raw.trim() : ""

    setStatus("loading")
    setMessage("")

    const result = await submitVoteReminder(email)

    if (result.ok) {
      setStatus("success")
      setMessage("You're in—we'll remind you when polls open.")
      form.reset()
    } else {
      setStatus("error")
      setMessage(result.error)
    }
  }

  const googleUrl = getGoogleCalendarVoteUrl()

  return (
    <section
      id="action-hub"
      aria-labelledby="action-hub-heading"
      className="bg-primary py-20 text-white md:py-24"
      tabIndex={-1}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2
            id="action-hub-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl"
          >
            Don&apos;t Let Your Voice Get Lost.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-blue-100 md:text-xl">
            Voting happens entirely online. Set a reminder now so you don&apos;t
            miss your window.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-sm font-semibold tracking-wide text-blue-100 uppercase">
              When to vote
            </p>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-white md:text-lg">
              <li>
                <span className="font-semibold text-blue-100">Polls open:</span>{" "}
                Monday, April 20 at 8:00 AM
              </li>
              <li>
                <span className="font-semibold text-blue-100">
                  Polls close:
                </span>{" "}
                Thursday, April 23 at 4:00 PM
              </li>
            </ul>
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:justify-start">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-2 border-white bg-transparent text-white hover:bg-white/15 hover:text-white"
              >
                <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                  Add to Google Calendar
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 border-2 border-white bg-white font-semibold text-primary hover:bg-blue-50"
              >
                <a href={voteIcsPath} download>
                  Download .ics (Apple &amp; Outlook)
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-sm font-semibold tracking-wide text-blue-100 uppercase">
              Email reminder
            </p>
            <form
              className="mt-4 w-full max-w-md space-y-3 md:max-w-none"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <label htmlFor="action-hub-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="action-hub-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your.email@student.chaffey.edu"
                  className="min-h-12 min-w-0 flex-1 rounded-lg border-0 bg-white px-4 py-3 text-base text-gray-900 shadow-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="h-12 shrink-0 border-0 bg-yellow-400 px-6 font-bold text-black hover:bg-yellow-500 disabled:opacity-60 sm:px-8"
                >
                  {status === "loading" ? "Sending…" : "Remind Me to Vote"}
                </Button>
              </div>
              <p
                className="min-h-5 text-left text-sm text-blue-100"
                role="status"
                aria-live="polite"
              >
                {status === "success" || status === "error"
                  ? message
                  : "\u00a0"}
              </p>
            </form>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-sm leading-relaxed text-blue-100/90 md:mt-16">
          Paid for by Michael Zeta for Student Senator. Remember to review the
          official CCSG voting portal on April 20.
        </p>
      </div>
    </section>
  )
}
