import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 })
    }

    const segmentId = process.env.RESEND_SEGMENT_ID?.trim()

    // Global Contacts (dashboard: Audience → Contacts, URL /audience). Segments
    // are separate lists; pass RESEND_SEGMENT_ID so new signups also appear there.
    // Custom properties only work if you created the keys in Resend first
    // (see https://resend.com/docs/dashboard/audiences/properties ).
    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
      properties: {
        source: "campaign_website",
      },
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }

    if (!data?.id) {
      return Response.json(
        { error: "Could not create contact in Resend." },
        { status: 502 }
      )
    }

    return Response.json({ success: true, data })
  } catch {
    return Response.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
