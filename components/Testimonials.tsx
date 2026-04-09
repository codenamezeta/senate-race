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
      "Whatever Michael does, he approaches it with genuine friendliness and compassion. He is an incredible listener who is always willing to step up, assist, or advocate for others when they need it most. I’ve seen so many of our peers go to him for advice because they deeply respect his perspective. He shows exactly the kind of grounded leadership skills we need at Chaffey, and I know he will do an amazing job as our Student Senator.",
    attribution: (
      <>
        <p className="font-bold">Melissa P.</p>
        <p className="text-sm text-muted-foreground">
          Theater Major & Stage Manager · Chaffey College
        </p>
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
  {
    quote:
      "Michael would make an excellent CCSG senator! As a student in my Spanish class, Michael was collaborative, cooperative and showed great determination to achieve his goals!  He values each student's success, so he will be a great advocate for his peers!",
    attribution: (
      <>
        <p className="font-bold">Profesora Hanna</p>
        <p className="text-sm text-muted-foreground">
          Spanish Professor · Chaffey College
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
      className="scroll-mt-20 border-y border-accent/50 bg-accent/50 py-16 sm:scroll-mt-24 md:py-20 dark:border-accent/35 dark:bg-accent/15"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.16em] text-foreground uppercase">
            Endorsements
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-pretty text-foreground md:text-4xl"
          >
            Voices from Campus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-foreground md:text-lg">
            Real quotes from students and faculty. Hear what they have to say
            about Michael Zeta.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-6 md:mt-14 md:grid-cols-2 md:gap-5 lg:gap-3">
          {placeholders.map((item, index) => (
            <li key={index}>
              <figure className="flex h-full flex-col rounded-2xl border border-foreground/12 bg-background/95 px-12 pt-12 pb-6 shadow-md backdrop-blur-sm dark:border-border/80 dark:bg-card/95 dark:shadow-lg">
                <div
                  className="absolute top-3 left-3 mb-4 text-primary dark:text-blue-400"
                  aria-hidden
                >
                  <HugeiconsIcon
                    icon={QuoteUpIcon}
                    size={100}
                    strokeWidth={3}
                    className="opacity-5"
                  />
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground italic md:text-base md:leading-relaxed">
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
