"use client"

import { useState, type FormEvent } from "react"
import { submitVoteReminder } from "@/lib/submit-vote-reminder"
import { getGoogleCalendarVoteUrl, voteIcsPath } from "@/lib/vote-calendar"

import {
  FlashIcon,
  Megaphone01Icon,
  Money03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { ReactNode } from "react"
import { Button } from "./ui/button"

const blocks: readonly {
  step: string
  theme: string
  icon: typeof Money03Icon
  hook: string
  spotlight?: boolean
  body: ReactNode
}[] = [
  {
    step: "01",
    theme: "Financial return",
    icon: Money03Icon,
    hook: "You've Already Paid. Get Your Money's Worth.",
    body: (
      <>
        <p>
          Every semester, a portion of your tuition goes into a massive pool of
          student fees. If you think that money only goes to clubs or events you
          don&apos;t attend, <strong>think again.</strong>
        </p>
        <p>
          <strong>
            Student government decides how thousands of dollars are spent.
          </strong>{" "}
          If you don&apos;t vote,{" "}
          <strong>you are letting someone else spend your money.</strong>
        </p>
        <p>
          Vote to fund the grants, resources, and campus support systems that{" "}
          <strong>actually help you survive the semester.</strong>
        </p>
      </>
    ),
  },
  {
    step: "02",
    theme: "The law",
    icon: Megaphone01Icon,
    hook: "The '9+1 Rights': Your Legal Megaphone.",
    spotlight: true,
    body: (
      <>
        <p>
          Did you know{" "}
          <strong>the State of California legally guarantees</strong> community
          college students a voice in major policy decisions? It&apos;s called
          the <strong>&quot;9+1 Rights&quot;</strong>, and it covers everything
          from grading policies to student codes of conduct and campus fees.
        </p>
        <p>
          The law exists because administrators shouldn&apos;t make rules
          without asking the people who actually have to live by them.{" "}
          <strong>Student government is your megaphone</strong> in those rooms.
        </p>
      </>
    ),
  },
  {
    step: "03",
    theme: "The daily grind",
    icon: FlashIcon,
    hook: "Protecting Your Work-Life-School Balance.",
    body: (
      <>
        <p>
          Whether you&apos;re a recent high school graduate or an adult learner
          working full-time, the{" "}
          <strong>&quot;Chaffey hustle&quot; is exhausting.</strong>
        </p>
        <p>
          You need leaders who understand that struggle and will advocate for
          flexible resources, better accessibility, and real mental health
          support.
        </p>
        <p>
          <strong>Voting puts people in place</strong> who will fight to make
          your daily life easier, not harder.
        </p>
      </>
    ),
  },
]

export function WhyVote() {
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
      id="whys"
      aria-labelledby="whys-heading"
      className="scroll-mt-20 border-b border-border/70 sm:scroll-mt-24"
      tabIndex={-1}
    >
      <div className="relative overflow-hidden bg-primary py-12 text-primary-foreground md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.18em] text-accent uppercase sm:text-sm">
            Why vote?
          </p>
          <h2
            id="whys-heading"
            className="mt-6 text-center font-heading text-3xl font-extrabold tracking-tight text-balance md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
          >
            Why Your Vote Actually Matters
            <br />
            <span className="text-xl font-normal md:text-2xl lg:text-base lg:leading-[1.12]">
              And What It Costs If You Don&apos;t
            </span>
          </h2>
        </div>
      </div>

      <div className="relative bg-linear-to-tl from-primary/10 to-transparent">
        {/* <div className="absolute top-0 right-0 left-0 z-20 h-60 bg-linear-to-b from-primary to-transparent" /> */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-50 h-[2px] bg-linear-to-r from-transparent via-accent to-transparent opacity-80 dark:via-accent/90 dark:opacity-100"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-24">
          <ol className="flex flex-col gap-14 md:gap-20 lg:gap-24">
            {blocks.map((item) => (
              <li key={item.step} className="relative">
                <div className="grid items-start gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
                  <div className="relative md:col-span-4 lg:col-span-3">
                    <span
                      className="block font-heading text-7xl font-black tracking-tighter text-primary/[0.14] tabular-nums select-none sm:text-8xl dark:text-primary/25"
                      aria-hidden
                    >
                      {item.step}
                    </span>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-foreground shadow-xs dark:border-accent/30 dark:bg-accent/20 dark:text-yellow-200"
                        aria-hidden
                      >
                        <HugeiconsIcon
                          icon={item.icon}
                          size={26}
                          strokeWidth={1.5}
                        />
                      </span>
                      <span className="text-xs font-bold tracking-[0.12em] text-primary uppercase">
                        {item.theme}
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-8 lg:col-span-9">
                    <article
                      className={
                        item.spotlight
                          ? "rounded-2xl border-2 border-accent/60 bg-accent/[0.07] p-6 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)] md:p-8 lg:p-9 dark:border-accent/45 dark:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.65)]"
                          : "border-l-4 border-accent pl-6 md:pl-8"
                      }
                    >
                      <h3 className="font-heading text-xl font-extrabold tracking-tight text-pretty text-foreground sm:text-2xl md:text-[1.65rem] md:leading-snug">
                        {item.hook}
                      </h3>
                      <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed dark:text-zinc-300">
                        {item.body}
                      </div>
                    </article>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center gap-x-6 px-4 pb-12 text-center md:items-start lg:flex-row xl:max-w-7xl xl:gap-x-12 xl:px-3">
          <div className="flex w-full max-w-2xl flex-1 flex-col items-center space-y-2 text-center">
            <p className="mx-auto text-sm font-semibold tracking-wide text-primary uppercase">
              Voting is now open!
            </p>
            <Button
              asChild
              className="mx-auto h-12 w-full shrink-0 border-0 bg-accent px-6 font-bold text-black hover:bg-yellow-500 disabled:opacity-60 sm:px-8"
            >
              <a
                href="https://chaffeycollegehspartnerships.formstack.com/forms/ballot_2627"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vote Now!
              </a>
            </Button>
            {/* <p className="text-xs text-muted-foreground">
              Enter your email address to receive a reminder when polls open.
            </p> */}
            {/* <form className="w-full" onSubmit={handleSubmit}>
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
                  placeholder="your.email@example.com"
                  className="min-h-12 min-w-0 flex-1 rounded-lg border-0 bg-white px-4 py-3 text-base text-gray-900 shadow-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="h-12 shrink-0 border-0 bg-primary px-6 font-bold text-primary-foreground hover:bg-blue-700 disabled:opacity-60 sm:px-8"
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
            </form> */}
          </div>
          <div className="hidden flex-col items-center space-y-2 text-center md:items-start md:text-left">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              When to vote
            </p>
            <p className="text-xs text-muted-foreground">
              Voting polls open on Monday, April 20 at 8:00 AM and close on
              Thursday, April 23 at 4:00 PM.
            </p>
            <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:justify-start">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 sm:px-8"
              >
                <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                  Add to Google Calendar
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 bg-accent px-6 text-black hover:bg-yellow-500 sm:px-8"
              >
                <a href={voteIcsPath} download>
                  Download .ics (Apple &amp; Outlook)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
