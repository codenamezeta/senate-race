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
    value: "power",
    question: "Do Student Senators actually have any power?",
    answer:
      "Yes. Student government holds the purse strings for club funding and campus events. More importantly, California law guarantees students a voice in major college decisions (the '9+1 rights'). Senators are the ones holding the microphone in those rooms.",
  },
  {
    value: "vote-matters",
    question: "I don't have time for this. Does my single vote really matter?",
    answer:
      "Absolutely. Because campus elections historically have very low turnout, your single vote carries massive weight. Just a handful of votes can completely change the direction of student leadership.",
  },
  {
    value: "promises",
    question: "Are you making a bunch of impossible promises?",
    answer:
      "No. I'm not promising to fix parking overnight or abolish homework. I am promising to be a dedicated, highly organized advocate who will ensure your fees are spent wisely and your concerns are taken straight to the administration.",
  },
  {
    value: "how-vote",
    question: "How and when do I actually vote?",
    answer: (
      <>
        Voting is entirely online. The polls open on Monday, April 20 at 8:00 AM
        and close Thursday, April 23 at 4:00 PM. Check the{" "}
        <a
          href="#action-hub"
          className="font-medium text-foreground underline underline-offset-4 hover:text-primary dark:hover:text-blue-400"
        >
          bottom of this page
        </a>{" "}
        for tools to set a reminder.
      </>
    ),
  },
]

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-border/70 bg-muted/35 py-20 md:py-24 dark:bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-14 xl:gap-16">
          <div className="md:col-span-5 lg:col-span-4 xl:col-span-5">
            <h2
              id="faq-heading"
              className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:max-w-sm md:text-4xl lg:text-[2.25rem] lg:leading-tight"
            >
              Straight Answers to Fair Questions.
            </h2>
          </div>
          <div className="md:col-span-7 lg:col-span-8 xl:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
