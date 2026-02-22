import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const OWNER_EMAIL = "andrewbeaver@live.ca";

const VALID_SUBJECTS = [
  "Job Opportunity",
  "Freelance Inquiry",
  "Collaboration",
  "General Question",
] as const;

type ValidSubject = (typeof VALID_SUBJECTS)[number];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidSubject(value: string): value is ValidSubject {
  return (VALID_SUBJECTS as readonly string[]).includes(value);
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status });
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  // ── 1. Parse body ──────────────────────────────────────────────────────
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  // ── 2. Server-side validation ───────────────────────────────────────────
  const fieldErrors: Record<string, string> = {};

  if (!name || typeof name !== "string" || !name.trim()) {
    fieldErrors.name = "Name is required.";
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    fieldErrors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    fieldErrors.email = "Please provide a valid email address.";
  }

  if (!subject || typeof subject !== "string" || !subject.trim()) {
    fieldErrors.subject = "Subject is required.";
  } else if (!isValidSubject(subject)) {
    fieldErrors.subject = "Invalid subject value.";
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    fieldErrors.message = "Message is required.";
  } else if (message.trim().length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json({ error: "Validation failed.", fieldErrors }, 422);
  }

  // ── 3. Guard: require API key ───────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set.");
    return json(
      { error: "Email service is not configured. Please try again later." },
      503
    );
  }

  // ── 4. Send email via Resend ────────────────────────────────────────────
  const resend = new Resend(apiKey);

  const safeName = (name as string).trim();
  const safeEmail = (email as string).trim();
  const safeSubject = subject as ValidSubject;
  const safeMessage = (message as string).trim();

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [OWNER_EMAIL],
      replyTo: safeEmail,
      subject: `[${safeSubject}] from ${safeName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
          <h2 style="font-size:18px;font-weight:700;margin-bottom:4px">
            New portfolio message
          </h2>
          <p style="font-size:13px;color:#64748b;margin-top:0;margin-bottom:24px">
            Submitted via andrewbeaver.dev
          </p>

          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:8px 0;width:90px;color:#64748b;vertical-align:top">
                From
              </td>
              <td style="padding:8px 0;font-weight:600">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;vertical-align:top">
                Reply to
              </td>
              <td style="padding:8px 0">
                <a href="mailto:${safeEmail}" style="color:#4f46e5">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;vertical-align:top">
                Subject
              </td>
              <td style="padding:8px 0">${safeSubject}</td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0" />

          <p style="font-size:14px;line-height:1.7;white-space:pre-wrap">${safeMessage}</p>
        </div>
      `,
      text: `From: ${safeName} <${safeEmail}>\nSubject: ${safeSubject}\n\n${safeMessage}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return json({ error: "Failed to send email. Please try again." }, 502);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return json(
      { error: "An unexpected error occurred. Please try again later." },
      500
    );
  }
}

// ── Reject all other methods ────────────────────────────────────────────────
export async function GET() {
  return json({ error: "Method not allowed." }, 405);
}
