/** Pacific times (PDT, UTC−7) for April 2026 — online voting window. */
const GOOGLE_DATES = "20260420T150000Z/20260423T230000Z"

const title = "Chaffey CCSG — Vote (Online)"
const location = "Online"
const details =
  "A friendly Reminder from <strong>Michael Zeta for Student Senator</strong>: Polls Open on Mon Apr 20, 8:00 AM – Thu Apr 23, 4:00 PM Pacific. Use the official CCSG student voting portal when polls open."

export const voteIcsPath = "/chaffey-vote-2026.ics" as const

export function getGoogleCalendarVoteUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: GOOGLE_DATES,
    location,
    details,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
