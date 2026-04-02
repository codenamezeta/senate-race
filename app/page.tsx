import { ActionHub } from "@/components/ActionHub"
import { CandidateProfile } from "@/components/CandidateProfile"
import { FAQ } from "@/components/FAQ"
import { Hero } from "@/components/Hero"
import { ProblemSolution } from "@/components/ProblemSolution"
import { ValueProps } from "@/components/ValueProps"

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
      <ValueProps />
      <ProblemSolution />
      <CandidateProfile />
      <FAQ />
      <ActionHub />
    </main>
  )
}
