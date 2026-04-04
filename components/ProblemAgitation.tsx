export function ProblemAgitation() {
  return (
    <section
      id="leadership"
      aria-labelledby="pas-heading"
      className="scroll-mt-20 border-b border-border/70 bg-muted py-20 sm:scroll-mt-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14 lg:gap-16">
          <header className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase dark:text-blue-400">
                Don&apos;t You Think?
              </p>
              <h2
                id="faq-heading"
                className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-pretty text-foreground md:max-w-sm md:text-4xl lg:mt-4 lg:text-[2.25rem] lg:leading-tight"
              >
                Student government shouldn&apos;t feel like an exclusive club.
              </h2>
              <div
                className="mt-6 hidden h-1 w-12 rounded-full bg-accent md:block"
                aria-hidden
              />
            </div>
          </header>
          <div className="flex flex-col md:col-span-7">
            <p className="text-xl leading-relaxed font-semibold text-foreground md:text-xl md:leading-relaxed lg:leading-relaxed">
              Let&apos;s be honest about how campus politics usually looks from
              the outside. Too often, student government feels like an exclusive
              club designed for people trying to build their university resumes.
              When leadership roles are treated as shiny titles or popularity
              contests, the actual student body gets left behind. You are out
              here juggling work shifts, heavy course loads, and real-world
              responsibilities, while the people elected to represent you are
              often disconnected from that reality, focusing on their own
              prestige instead of your daily grind.
            </p>

            <div className="mt-14 border-t border-primary/20 pt-12 md:mt-16 md:pt-16 dark:border-primary/30">
              <p className="text-base leading-loose text-foreground/95 md:text-lg md:leading-loose">
                <strong className="font-semibold text-foreground">
                  But this isn&apos;t just annoying—it actually costs you.
                </strong>{" "}
                When ego takes over the Student Senate, the real work stops.
                Your required student fees get quietly funneled into projects or
                events you never see. Worse, when the college administration
                proposes changes to grading, fees, or campus accessibility,
                there is no one in the room willing to push back. Because your
                representatives are too focused on keeping their titles to
                actually fight for your rights, you end up paying the price for
                a broken system, left to navigate the complexities of college
                entirely on your own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
