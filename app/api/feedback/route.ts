import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body as {
      name?: string
      email?: string
      message?: string
    }

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Student Feedback <feedback@michaelzeta.com>",
      to: "michaelzeta11@gmail.com",
      subject: `New Student Feedback from ${name?.trim() || "Anonymous"}`,
      replyTo: email?.trim() || undefined,
      text: `
        Name: ${name?.trim() || "Anonymous"}
        Email: ${email?.trim() || "Not provided"}

        Message:
        ${message.trim()}
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
