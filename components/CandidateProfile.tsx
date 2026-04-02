import {
  ComputerProgramming01Icon,
  Mortarboard01Icon,
  MusicNote02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const experiences = [
  {
    icon: Mortarboard01Icon,
    title: "10+ Years of Teaching",
    description:
      "Decades of mentoring students taught me how to listen actively, adapt to different learning styles, and advocate fiercely for others' success.",
  },
  {
    icon: ComputerProgramming01Icon,
    title: "Freelance Tech Consultant",
    description:
      "Running a web design business requires taking complex problems and building efficient, user-friendly solutions. I bring this same agile, problem-solving mindset to campus issues.",
  },
  {
    icon: MusicNote02Icon,
    title: "VP, Chaffey Recording Arts Club",
    description:
      "Currently serving on a campus executive board, I already know how to navigate Chaffey's club systems, secure funding, and support a team to deliver value to students.",
  },
] as const

export function CandidateProfile() {
  return (
    <section
      id="experience"
      aria-labelledby="candidate-heading"
      className="border-b border-border/70 bg-background py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="candidate-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
          >
            Experience that translates to action.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
            My path to Chaffey wasn&apos;t a straight line. I spent over a
            decade working as a music instructor, helping students find their
            voices. Now, I&apos;ve returned for a career change into Business
            and Technology Project Management. Here is how that experience works
            for you:
          </p>
        </div>

        <ul className="mt-14 grid list-none gap-8 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          {experiences.map((item) => (
            <li key={item.title}>
              <Card className="h-full border-border/80 shadow-sm ring-border/60 transition-shadow hover:shadow-md">
                <CardHeader className="gap-4">
                  <div
                    className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-blue-500/15 dark:text-blue-400"
                    aria-hidden
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={28}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-heading text-lg leading-snug font-bold text-foreground md:text-xl">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
