import { QuoteUpIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const placeholders = [
  {
    quote:
      "Working on a semester-long group project with Michael showed me what true teamwork looks like. Even while balancing his own heavy schedule, he was always the first to step up, organize our workflow, and make sure everyone's ideas were included. He understands the daily grind of community college students better than anyone.",
    attribution: "Melissa Perez · Theater Major",
  },
  {
    quote:
      "As Vice President of our club, Michael never makes it about his own ego. He always starts by asking what resources we need for our projects and then actually follows through with the administration to get them. He’s exactly the kind of grounded, highly organized leader the Student Senate needs right now.",
    attribution: "Christine Diaz · CRAC President",
  },
  {
    quote:
      "I have worked with Michael on several complex technical projects, and his ability to actively listen, adapt, and solve problems is unmatched. He doesn't just manage tasks, he genuinely cares about the long-term success of the people he's working with. I have no doubt he will bring that same relentless advocacy to CCSG.",
    attribution: "Sharon Alton · Professor of English & Critical Thinking",
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-20 border-y border-accent/50 bg-accent py-16 sm:scroll-mt-24 md:py-20 dark:border-accent/35 dark:bg-accent/15"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-primary-foreground/80 uppercase">
            Endorsements
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-pretty text-primary-foreground md:text-4xl"
          >
            Voices from Campus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-primary-foreground/85 md:text-lg">
            Real quotes from students and faculty. Hear what they have to say
            about Michael Zeta.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-6 md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
          {placeholders.map((item) => (
            <li key={item.attribution}>
              <figure className="flex h-full flex-col rounded-2xl border border-foreground/12 bg-background/95 p-6 shadow-md backdrop-blur-sm dark:border-border/80 dark:bg-card/95 dark:shadow-lg">
                <div
                  className="mb-4 text-primary dark:text-blue-400"
                  aria-hidden
                >
                  <HugeiconsIcon
                    icon={QuoteUpIcon}
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-muted-foreground italic md:text-[0.95rem] md:leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm font-semibold text-foreground not-italic">
                  {item.attribution}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
