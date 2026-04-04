import {
  FlashIcon,
  Megaphone01Icon,
  Money03Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import type { ReactNode } from "react"

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

      <div className="relative bg-background">
        {/* <div className="absolute top-0 right-0 left-0 z-20 h-60 bg-linear-to-b from-primary to-transparent" /> */}
        <div
          className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-accent/55 to-transparent"
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
      </div>
    </section>
  )
}
