import {
  Megaphone01Icon,
  PieChart01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const props = [
  {
    icon: PieChart01Icon,
    title: "Do you know where your campus fees go?",
    body: "Every semester, you pay a College Service fee. Student government decides how that money is spent. Voting ensures the people managing your money actually share your priorities.",
  },
  {
    icon: Megaphone01Icon,
    title: "Who speaks for you when policies change?",
    body: "California law gives students a voice in major college decisions, including grading and fee structures. If a policy makes your life harder, CCSG is your direct line to the administration to fix it.",
  },
  {
    icon: UserGroupIcon,
    title: "Want a campus that feels like more than a waiting room?",
    body: "Student government allocates the funding that keeps campus clubs, events, and initiatives alive. Voting for the right representatives means more support for the communities that make Chaffey worth showing up for.",
  },
] as const

export function ValueProps() {
  return (
    <section
      id="whys"
      aria-labelledby="whys-heading"
      className="border-b border-border/70 bg-primary py-20 md:py-24 dark:bg-zinc-950/80"
      tabIndex={-1}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="whys-heading"
          className="text-center font-heading text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl"
        >
          Your Vote Matters!
        </h2>
        <div className="mt-14 grid gap-14 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
          {props.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/80 bg-background p-6 shadow-sm md:p-7"
            >
              <div
                className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-blue-500/15 dark:text-blue-400"
                aria-hidden
              >
                <HugeiconsIcon icon={item.icon} size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg leading-snug font-bold text-foreground md:text-xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-zinc-300">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
