"use client"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { submitVoteReminder } from "@/lib/submit-vote-reminder"
import { FormEvent, useState } from "react"
// import { Megaphone01Icon } from "@hugeicons/core-free-icons"
// import { HugeiconsIcon } from "@hugeicons/react"

const motionEnter = {
  text: "opacity-0 motion-safe:animate-[hero-fade-up_0.75s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100",
  decor:
    "opacity-0 motion-safe:animate-[hero-fade-up_1s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100",
  frame:
    "opacity-0 motion-safe:animate-[hero-slide-from-right_0.9s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100",
  portrait:
    "opacity-0 motion-safe:animate-[hero-image-pop_1.05s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none motion-reduce:opacity-100",
} as const

export function Hero() {
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
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-x-hidden overflow-y-clip bg-background pt-8 pb-0 md:pt-12"
    >
      {/* Bottom wash: ties the portrait edge to the section boundary */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-52 bg-linear-to-t from-primary/50 via-primary/5 to-transparent md:h-64 dark:from-primary/25 dark:via-primary/10"
      />

      {/* Full-hero geometric decor (behind content) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className={`absolute top-[6%] right-[-12%] h-[min(42vw,22rem)] w-[min(42vw,22rem)] rotate-[-8deg] rounded-[2rem] border-2 border-primary/20 bg-primary/4 md:right-[-6%] md:h-[min(36vw,26rem)] md:w-[min(36vw,26rem)] ${motionEnter.decor} motion-safe:[animation-delay:60ms]`}
        />
        <div
          className={`absolute top-[28%] left-[4%] md:left-[6%] ${motionEnter.decor} motion-safe:[animation-delay:120ms]`}
        >
          <div className="motion-safe:animate-[hero-shape-drift_7s_ease-in-out_infinite] motion-safe:[animation-delay:1.35s] motion-reduce:animate-none">
            <div className="size-14 rotate-45 border-2 border-accent/45 md:size-20" />
          </div>
        </div>
        <div
          className={`absolute bottom-[18%] left-[-18%] h-[min(55vw,24rem)] w-[min(55vw,24rem)] rounded-full border-2 border-primary/15 md:left-[-10%] ${motionEnter.decor} motion-safe:[animation-delay:60ms]`}
        />
        <div
          className={`absolute top-[40%] right-[8%] h-24 w-px bg-linear-to-b from-transparent via-primary/35 to-transparent md:right-[14%] ${motionEnter.decor} motion-safe:[animation-delay:200ms]`}
        />
        <div
          className={`absolute top-[52%] right-[12%] h-px w-20 bg-linear-to-r from-transparent via-accent/50 to-transparent md:right-[18%] ${motionEnter.decor} motion-safe:[animation-delay:260ms]`}
        />
        <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]">
          <div
            className={`absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-primary)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-primary)_8%,transparent)_1px,transparent_1px)] bg-size-[28px_28px] ${motionEnter.decor} motion-safe:[animation-delay:20ms]`}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center px-4 lg:grid-cols-3 lg:gap-12 xl:grid-cols-2">
        {/* <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12 lg:grid-cols-3 lg:gap-14"> */}
        <div className="lg:col-span-2 xl:col-span-1">
          <p
            className={`text-xs font-semibold tracking-[0.12em] text-primary/80 uppercase sm:text-sm ${motionEnter.text} motion-safe:[animation-delay:50ms]`}
          >
            Chaffey College Student Government Elections: April 20–23
          </p>
          <h1
            id="hero-heading"
            className={`font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl ${motionEnter.text} motion-safe:[animation-delay:140ms]`}
          >
            Your money. Your rights. Your education. Don&apos;t let someone else
            <span className="text-primary"> call the shots</span>.
          </h1>
          <p
            className={`my-6 max-w-4xl text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-relaxed ${motionEnter.text} motion-safe:[animation-delay:240ms]`}
          >
            Between core classes, shifts at work, and real life, voting in a
            student election is probably the last thing on your mind. My name is{" "}
            <strong className="font-bold text-primary">Michael Zeta</strong>,
            and I want to be <em>your</em> supporter, not your boss. I’m here to
            show you exactly why taking just 60 seconds to cast a ballot online
            is the easiest way to protect your money, your rights, and your
            hustle.
          </p>
          {/* <Button
            asChild
            variant="default"
            size="lg"
            className="mx-auto mb-6 h-12 border-accent/40 px-6 font-semibold text-primary-foreground lg:mr-auto lg:ml-0"
          >
            <a href="#feedback">
              <HugeiconsIcon
                icon={Megaphone01Icon}
                size={28}
                strokeWidth={1.5}
                aria-hidden
              />
              <span>Tell me what you need</span>
            </a>
          </Button> */}
          <p className="dark:text-blue-7d00 w-full px-1 text-left text-sm leading-relaxed font-semibold text-primary/75">
            Receive a reminder when polls open.
          </p>
          <form
            className={`flex w-full flex-col gap-3 space-y-3 md:flex-row md:items-stretch ${motionEnter.text} motion-safe:[animation-delay:340ms]`}
            onSubmit={handleSubmit}
          >
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
              className="mx-0 min-h-12 min-w-0 flex-1 rounded-lg border-0 bg-white p-3 text-base text-gray-900 shadow-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="h-12 shrink-0 border-0 bg-accent px-6 font-bold text-black hover:bg-yellow-500 disabled:opacity-60 sm:px-8"
            >
              {status === "loading" ? "Sending…" : "Remind Me to Vote!"}
            </Button>

            <p
              className="min-h-5 text-left text-sm text-blue-100"
              role="status"
              aria-live="polite"
            >
              {status === "success" || status === "error" ? message : "\u00a0"}
            </p>
          </form>
          <p className="-mt-2 w-full px-1 text-left text-xs text-muted-foreground">
            Your info is never shared
          </p>
        </div>

        {/* Portrait: md+ fills row height and pins to bottom so feet align with section; no inner overflow clip (was cutting hair) */}
        <div className="relative col-span-1 flex min-h-0 w-full flex-col overflow-visible">
          <div className="relative mx-auto w-full max-w-[min(100%,24rem)] shrink-0 sm:max-w-[min(100%,28rem)] md:ml-auto md:w-[min(100%,34rem)] md:max-w-none lg:w-[min(100%,40rem)]">
            {/* Rear “plate” — reads as depth, not a crop box around the cutout */}
            <div
              aria-hidden
              className={`pointer-events-none absolute bottom-1 left-[8%] z-0 aspect-3/4 w-[70%] max-w-sm rotate-[2.5deg] rounded-[1.75rem] border-2 border-primary/25 bg-muted/40 shadow-lg ring-1 ring-primary/10 sm:bottom-2 sm:left-[10%] md:bottom-4 md:left-[14%] dark:bg-muted/25 ${motionEnter.frame} motion-safe:[animation-delay:180ms]`}
            />
            <div
              aria-hidden
              className={`pointer-events-none absolute bottom-0 left-[5%] z-0 h-[min(52%,18rem)] w-[76%] max-w-md rounded-[1.5rem] border border-dashed border-primary/20 sm:left-[6%] md:h-[min(58%,20rem)] ${motionEnter.frame} motion-safe:[animation-delay:220ms]`}
            />

            <figure
              className={`relative z-10 mx-auto w-full ${motionEnter.portrait} motion-safe:[animation-delay:320ms]`}
            >
              {/* Tall box + object-bottom: large portrait; section overflow-y-clip catches drop-shadow past border — avoid overflow-hidden here (clips head with scale/transform) */}
              <div className="relative h-[min(58vh,28rem)] w-full sm:h-[min(62vh,30rem)] md:h-[min(68vh,40rem)] lg:h-[min(72vh,44rem)]">
                <Image
                  src="/images/popout-3.png"
                  alt="Michael Zeta, candidate for Student Senator"
                  fill
                  className="object-contain object-bottom filter-[drop-shadow(0_18px_36px_color-mix(in_oklab,var(--color-primary)_34%,transparent))]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 42vw"
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
