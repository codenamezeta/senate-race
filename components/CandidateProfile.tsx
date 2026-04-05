"use client"

import {
  BridgeIcon,
  HandHelpingIcon,
  Megaphone01Icon,
  Route01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "./ui/button"

const pillars = [
  {
    kicker: "The non-traditional perspective",
    icon: Route01Icon,
    pull: "My path to this campus wasn't a straight line.",
    body: (
      <>
        For over a decade, I worked as a music instructor, helping students find
        their voices. Returning to school for a career change in technology
        project management gave me a deep, personal appreciation for the diverse
        paths we all take. From recent high school graduates to adult learners
        balancing coursework with careers and families,{" "}
        <strong>every student deserves an empathetic advocate.</strong>
      </>
    ),
    align: "left" as const,
    featured: false,
  },
  {
    kicker: "The servant leadership approach",
    icon: HandHelpingIcon,
    pull: "The most effective solutions come from checking your ego at the door.",
    body: (
      <>
        True leadership requires constant practice, humility, and a willingness
        to learn from those around you. I fundamentally believe in servant
        leadership. A true leader &quot;starts with their why,&quot; working
        tirelessly to ensure their team has the tools needed to prosper. My
        &quot;why&quot; is your success.
      </>
    ),
    align: "center" as const,
    featured: true,
  },
  {
    kicker: "Realistic advocacy",
    icon: BridgeIcon,
    pull: "I will not make grand promises that fall outside the scope of student government.",
    body: (
      <>
        I am not going to promise to fix campus parking overnight. What I can
        absolutely promise is my unwavering dedication. As the current VP of the
        Recording Arts Club, I already know how to navigate Chaffey&apos;s
        systems. My goal is to serve as a reliable bridge between you and the
        administration, ensuring your concerns are amplified and acted upon.
      </>
    ),
    align: "right" as const,
    featured: false,
  },
]

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      mq.addEventListener("change", onChange)
      return () => mq.removeEventListener("change", onChange)
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  )
}

function useSectionInView() {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const revealed = inView || reducedMotion

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true)
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  return { ref, revealed, reducedMotion }
}

export function CandidateProfile() {
  const { ref, revealed, reducedMotion } = useSectionInView()

  return (
    <section
      ref={ref}
      id="experience"
      aria-labelledby="candidate-heading"
      className="relative scroll-mt-20 overflow-hidden border-b border-border/70 bg-background py-20 sm:scroll-mt-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,oklch(0.33_0.25_260/0.14),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,oklch(0.85_0.33_100/0.08),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_80%,oklch(0.33_0.25_260/0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,oklch(0.33_0.25_260/0.35),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,oklch(0.85_0.33_100/0.12),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_80%,oklch(0.33_0.25_260/0.2),transparent_50%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -top-24 -left-40 h-112 w-md rounded-full bg-primary/20 blur-3xl motion-safe:animate-[candidate-blob-drift_26s_ease-in-out_infinite] dark:bg-primary/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-36 bottom-0 h-88 w-88 rounded-full bg-accent/25 blur-3xl motion-safe:animate-[candidate-blob-drift_32s_ease-in-out_infinite] motion-safe:[animation-delay:-6s] dark:bg-accent/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl motion-safe:animate-[candidate-blob-drift_20s_ease-in-out_infinite] motion-safe:[animation-delay:-3s] dark:bg-primary/20"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header
          className={cn(
            "mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center transition-all duration-1000 ease-out motion-reduce:transition-none",
            "lg:max-w-6xl lg:grid-cols-[minmax(0,1fr)_min(260px,28vw)] lg:gap-2 lg:gap-x-14 lg:text-left",
            revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase lg:col-start-1 lg:row-start-1 dark:text-blue-400">
            The solution
          </p>

          <figure className="mx-auto w-full max-w-[220px] justify-self-center sm:max-w-[260px] lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:mx-0 lg:max-w-none lg:self-start lg:justify-self-end">
            <div
              className={cn(
                "relative aspect-4/5 w-full overflow-hidden rounded-3xl border-2 border-primary/70 bg-card/60 bg-linear-to-tl from-primary/50 to-accent/25 shadow-lg ring-1 ring-primary/15 backdrop-blur-sm dark:bg-card/40 dark:ring-primary/25",
                revealed
                  ? "motion-safe:animate-[candidate-portrait-in_0.85s_ease-out_both]"
                  : "opacity-0"
              )}
            >
              <Image
                src="/images/popout-5.png"
                alt="Michael Zeta, candidate for student senator"
                width={520}
                height={650}
                sizes="(max-width: 1024px) 260px, 280px"
                className="h-full w-full object-contain object-bottom px-1 sm:px-2"
                priority={false}
              />
            </div>
          </figure>

          <h2
            id="candidate-heading"
            className="mt-1 font-heading text-3xl font-extrabold tracking-tight text-pretty text-foreground md:text-4xl lg:col-start-1 lg:row-start-2 lg:mt-5 lg:max-w-3xl lg:text-5xl lg:leading-[1.08]"
          >
            Leadership is about support, not a shiny title.
          </h2>
          <blockquote className="mx-auto mb-6 max-w-3xl border-l-4 border-accent py-1 pl-6 text-left text-lg leading-relaxed font-medium text-foreground/90 italic md:text-xl md:leading-relaxed lg:col-start-1 lg:row-start-3 lg:mx-0 lg:mt-8 lg:text-[1.35rem]">
            I believe a representative&apos;s only job is to ask, &apos;
            <strong>What do you need to succeed?</strong>&apos; and then go to
            work figuring out how to make that happen.
          </blockquote>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mr-auto h-12 border-primary/40 px-6 font-semibold text-foreground hover:bg-primary/10 sm:px-8"
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
          </Button>
        </header>

        <div className="mt-16 flex flex-col gap-10 md:mt-20 md:gap-14 lg:gap-16">
          {pillars.map((item, index) => {
            const delayMs = 140 + index * 130
            return (
              <article
                key={item.kicker}
                className={cn(
                  "group relative overflow-hidden transition-all duration-700 ease-out motion-reduce:transition-none",
                  item.align === "left" &&
                    "md:mr-auto md:max-w-[92%] lg:max-w-[88%]",
                  item.align === "right" &&
                    "md:ml-auto md:max-w-[92%] lg:max-w-[88%]",
                  item.align === "center" && "mx-auto w-full max-w-4xl",
                  revealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0",
                  item.featured && "md:scale-[1.02] motion-reduce:md:scale-100"
                )}
                style={{
                  transitionDelay:
                    reducedMotion || !revealed ? "0ms" : `${delayMs}ms`,
                }}
              >
                <div
                  className={cn(
                    "relative rounded-3xl border bg-card/85 p-6 shadow-lg backdrop-blur-md transition-all duration-300 ease-out md:p-8 lg:p-9",
                    "hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0",
                    item.featured
                      ? "border-2 border-accent/70 ring-2 ring-accent/25 ring-offset-2 ring-offset-background dark:border-accent/50 dark:ring-accent/20"
                      : "border-border/70 hover:border-primary/25 dark:border-border dark:hover:border-primary/35"
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                    aria-hidden
                  >
                    <div
                      className={cn(
                        "absolute inset-y-0 -left-[75%] w-1/2 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 dark:via-white/10",
                        "motion-safe:group-hover:animate-[candidate-card-shine_0.95s_ease-out_forwards] motion-safe:group-hover:opacity-100"
                      )}
                    />
                  </div>

                  <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
                    <div
                      className={cn(
                        "relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md md:size-16",
                        item.featured &&
                          "motion-safe:animate-[candidate-icon-pulse_3s_ease-in-out_infinite] motion-reduce:animate-none"
                      )}
                    >
                      <HugeiconsIcon
                        icon={item.icon}
                        size={item.featured ? 32 : 28}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold tracking-[0.14em] text-primary uppercase dark:text-blue-400">
                        {item.kicker}
                      </p>
                      <p className="mt-3 font-heading text-xl leading-snug font-bold text-pretty text-foreground md:text-2xl">
                        <span className="text-accent">&ldquo;</span>
                        {item.pull}
                        <span className="text-accent">&rdquo;</span>
                      </p>
                      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
