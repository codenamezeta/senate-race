import { QuoteUpIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const placeholders = [
  {
    quote:
      "[Placeholder] Short quote from a fellow student about campus advocacy and feeling heard — real testimonial coming soon.",
    attribution: "Chaffey student · name TBD",
  },
  {
    quote:
      "[Placeholder] Peer perspective on student leadership and follow-through — replace with an actual quote when ready.",
    attribution: "Student leader · name TBD",
  },
  {
    quote:
      "[Placeholder] Faculty or staff line on character, reliability, or how you show up for students — pending approval.",
    attribution: "Professor or staff · name TBD",
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
          <p className="text-xs font-bold tracking-[0.16em] text-foreground/80 uppercase">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-pretty md:text-4xl"
          >
            Voices from campus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            Real quotes from students and faculty are on the way. For now,
            here&apos;s how this section will look once approvals are in.
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
                  <HugeiconsIcon icon={QuoteUpIcon} size={28} strokeWidth={1.5} />
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
