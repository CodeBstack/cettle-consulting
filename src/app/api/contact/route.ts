import { NextResponse } from "next/server";

const CONTACT_TO = "ssamuelolumide@gmail.com";

export async function POST(request: Request) {
  let payload: {
    name?: string;
    email?: string;
    website?: string;
    message?: string;
    company?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const website = payload.website?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in name, email, and message." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const subject = `Cettle Consulting enquiry from ${name}`;
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  try {
    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: name,
          name,
          email,
          website,
          message,
          to: CONTACT_TO,
        }),
      });
      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Could not send message.");
      }
    } else {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          website,
          message,
          _subject: subject,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      });
      const data = (await response.json()) as { success?: string; message?: string };
      if (!response.ok || data.success === "false") {
        throw new Error(data.message ?? "Could not send message.");
      }
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Could not send message.";
    return NextResponse.json({ error: detail }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
