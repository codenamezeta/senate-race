import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-border/70 bg-background py-20 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
          <div className="text-left">
            <p className="mb-4 text-xs font-semibold tracking-[0.12em] text-foreground/70 uppercase sm:text-sm">
              Chaffey College Student Government Elections: April 20–23
            </p>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              You&apos;re already doing the hard work. Let&apos;s make this
              campus <span className="text-primary">work for you</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-800 md:text-xl md:leading-relaxed dark:text-zinc-300">
              Between core classes, shifts at work, and real life, student
              government is probably the last thing on your mind. My name is
              Michael Zeta, and I&apos;m running for Student Senator to be your
              supporter, not your boss. Find out how 60 seconds of voting can
              protect your hustle.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-lg border-transparent bg-yellow-400 px-6 text-base font-bold text-black shadow-sm hover:bg-yellow-300 sm:w-auto"
              >
                <a href="#whys">Why Your Vote Matters</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-lg border-gray-300 bg-gray-50 text-base font-semibold text-foreground hover:bg-gray-100 sm:w-auto dark:border-zinc-600 dark:bg-zinc-800/60 dark:hover:bg-zinc-800"
              >
                <a href="#action-hub">Remind Me to Vote</a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-x-2 -inset-y-2 rounded-2xl bg-primary/20 md:-inset-x-3 md:-inset-y-3 md:translate-x-4 md:translate-y-4"
            />
            <figure className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 shadow-black/15 ring-black/5 dark:ring-white/10">
              <div className="relative aspect-4/5 w-full bg-muted">
                <Image
                  src="/michael-hero.jpg"
                  alt="Michael Zeta, candidate for Student Senator"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
