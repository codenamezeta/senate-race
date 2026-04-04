import { ActionHub } from "@/components/ActionHub"
import { CandidateProfile } from "@/components/CandidateProfile"
import { FAQ } from "@/components/FAQ"
import { Feedback } from "@/components/Feedback"
import { Testimonials } from "@/components/Testimonials"
import { Hero } from "@/components/Hero"
import { ProblemAgitation } from "@/components/ProblemAgitation"
import { WhyVote } from "@/components/WhyVote"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Michael Zeta — Student Senator",
  description:
    "Michael Zeta is running for Student Senator at Chaffey College.",
}

export default function Page() {
  return (
    <main className="min-h-svh">
      <Analytics />
      <SpeedInsights />
      <Hero />
      <WhyVote />
      <ProblemAgitation />
      <CandidateProfile />
      <Testimonials />
      <Feedback />
      <FAQ />
      <ActionHub />
    </main>
  )
}
