"use client"

import type { ReactNode } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items: { value: string; question: string; answer: ReactNode }[] = [
  {
    value: "vote-matters",
    question:
      "I don't have time for this. Does my single vote really matter?",
    answer: (
      <p>
        <strong className="font-bold text-foreground">Absolutely.</strong>{" "}
        Because campus elections historically have very low turnout, your
        single vote carries massive weight. Just a handful of votes can
        completely change the direction of student leadership.
      </p>
    ),
  },
  {
    value: "power",
    question: "Do Student Senators actually have any power?",
    answer: (
      <p>
        Yes. Student government holds the purse strings for club funding and
        campus events. More importantly, California law guarantees students a
        voice in major college decisions (the &quot;9+1 Rights&quot;).
        Senators are the ones holding the microphone in those rooms.
      </p>
    ),
  },
  {
    value: "nine-plus-one-rights",
    question: 'What exactly are the "9+1 Rights"?',
    answer: (
      <p>
        These are 10 specific areas where California law says students must be
        included in the decision-making process. They include grading policies,
        student codes of conduct, academic program changes, and campus fee
        structures. If the college wants to change how you are graded or
        charged, they legally have to go through the Student Senate first.
      </p>
    ),
  },
  {
    value: "promises",
    question: "Are you making a bunch of impossible promises?",
    answer: (
      <p>
        No. I&apos;m not promising to fix parking overnight or abolish
        homework. I am promising to be a dedicated, highly organized advocate
        who will ensure your fees are spent wisely and your concerns are taken
        straight to the administration.
      </p>
    ),
  },
  {
    value: "how-vote",
    question: "How and when do I actually vote?",
    answer: (
      <p>
        Voting is entirely online. The polls open on Monday, April 20 at 8:00 AM
        and close Thursday, April 23 at 4:00 PM. Check the{" "}
        <a
          href="#action-hub"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary dark:hover:text-blue-400"
        >
          bottom of this page
        </a>{" "}
        for tools to set a reminder.
      </p>
    ),
  },
  {
    value: "voting-duration",
    question: "How long does voting actually take?",
    answer: (
      <p>
        <strong className="font-semibold text-foreground">
          Less than 60 seconds.
        </strong>{" "}
        You don&apos;t have to wait in line or fill out a paper ballot.
        Between April 20 and April 23, you simply log into the official
        Chaffey voting portal, click a few buttons, and you&apos;re done. You
        can do it from your phone between classes.
      </p>
    ),
  },
  {
    value: "chaffey-goals",
    question: "What do you actually hope to accomplish at Chaffey?",
    answer: (
      <>
        <p>
          Beyond earning my degree in Business Administration and CIS, my
          primary goal is to actively hone the craft of leadership. Transitioning
          from a classroom teacher to an agile technology project manager
          requires mastering the human element.
        </p>
        <p>
          By serving in CCSG, I want to gain hands-on experience uniting diverse
          teams and navigating complex challenges so I can leave Chaffey as an
          effective, empathetic leader.
        </p>
      </>
    ),
  },
  {
    value: "choose-candidates",
    question: "I don't know anything about the candidates. How do I choose?",
    answer: (
      <p>
        <strong className="font-semibold text-foreground">
          Look for shared values.
        </strong>{" "}
        You don&apos;t need to know a candidate personally to know if they have
        your back. Vote for people who talk about your needs, who have real-world
        experience, and who view the role as a job to do rather than a prize to
        be won.
      </p>
    ),
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 border-b border-border/70 bg-muted/35 py-20 sm:scroll-mt-24 md:py-24 dark:bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-14 xl:gap-16">
          <div className="md:col-span-5 lg:col-span-4 xl:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase dark:text-blue-400">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-pretty md:max-w-sm md:text-4xl lg:mt-4 lg:text-[2.25rem] lg:leading-tight"
              >
                Straight Answers to Fair Questions.
              </h2>
              <div
                className="mt-6 hidden h-1 w-12 rounded-full bg-accent md:block"
                aria-hidden
              />
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8 xl:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-1 shadow-sm backdrop-blur-sm dark:border-border dark:bg-card/40">
              <Accordion type="single" collapsible className="w-full px-3 sm:px-4">
                {items.map((item) => (
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline md:text-lg">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
