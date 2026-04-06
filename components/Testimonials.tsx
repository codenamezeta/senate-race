import { QuoteUpIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const placeholders = [
  {
    quote:
      "I have worked closely with Michael in his role as Vice President of the Recording Arts Club where he has shown himself to be incredibly reliable. Whenever we face a last-minute challenge or need someone to step up and advocate for the club, Michael is always ready to take the lead. He completely checks his ego at the door and focuses on getting the job done. I wholeheartedly endorse him for Student Senator.",
    attribution: (
      <>
        <p className="font-bold">Christine Dias</p>
        <p className="text-sm text-muted-foreground">
          {" "}
          President · Chaffey Recording Arts Club
        </p>
      </>
    ),
  },
  {
    quote:
      "In the theater group, you quickly learn who you can rely on when things get stressful. Michael is always that person. He doesn’t need to be the center of attention; he just wants the whole production to succeed and makes sure everyone has what they need. He's exactly the kind of supportive, grounded leader we need in student government.",
    attribution: (
      <>
        <p className="font-bold">Melissa Perez</p>
        <p className="text-sm text-muted-foreground"> Theater Major</p>
      </>
    ),
  },
  {
    quote:
      "When I was completely overwhelmed with essays for my honors classes, Michael was the first person to step up and help me review my work. He didn't have to take time out of his own busy schedule to do it, but that's just who he is—he genuinely wants to see his peers succeed. He is exactly the kind of advocate Chaffey students need.",
    attribution: (
      <>
        <p className="font-bold">Abby Lynn</p>
        <p className="text-sm text-muted-foreground">
          English Honors Student · Chaffey College
        </p>
      </>
    ),
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
          <p className="text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase">
            Endorsements
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-pretty text-primary-foreground md:text-4xl"
          >
            Voices from Campus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-primary-foreground md:text-lg">
            Real quotes from students and faculty. Hear what they have to say
            about Michael Zeta.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-6 md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
          {placeholders.map((item, index) => (
            <li key={index}>
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
