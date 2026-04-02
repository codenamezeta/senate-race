/** Pacific times (PDT, UTC−7) for April 2026 — online voting window. */
const GOOGLE_DATES = "20260420T150000Z/20260423T230000Z"

const title = "Chaffey CCSG — Vote (online)"
const details =
  "Polls: Mon Apr 20, 8:00 AM – Thu Apr 23, 4:00 PM Pacific. Use the official CCSG student voting portal when polls open."

export const voteIcsPath = "/chaffey-vote-2026.ics" as const

export function getGoogleCalendarVoteUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: GOOGLE_DATES,
    details,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
