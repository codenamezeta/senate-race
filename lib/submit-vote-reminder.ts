export type SubmitVoteReminderResult =
  | { ok: true }
  | { ok: false; error: string }

export async function submitVoteReminder(
  email: string
): Promise<SubmitVoteReminderResult> {
  const res = await fetch("/api/remind", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  })

  let data: { ok?: boolean; error?: string } = {}
  try {
    data = (await res.json()) as { ok?: boolean; error?: string }
  } catch {
    /* ignore */
  }

  if (!res.ok) {
    return {
      ok: false,
      error:
        typeof data.error === "string"
          ? data.error
          : "Sorry, something went wrong. Please try again later.",
    }
  }

  return { ok: true }
}
