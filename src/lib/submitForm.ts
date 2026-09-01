import { contactInbox } from "@/data/site";

type SiteFormPayload = {
  name: string;
  email: string;
  message: string;
  subject: string;
  website?: string;
};

export async function submitSiteForm(payload: SiteFormPayload) {
  const body = {
    name: payload.name,
    email: payload.email,
    website: payload.website ?? "",
    message: payload.message,
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    _replyto: payload.email,
  };

  const response = await fetch(`https://formsubmit.co/ajax/${contactInbox}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = JSON.parse(text) as typeof result;
  } catch {
    throw new Error("Could not send. Please try again.");
  }

  if (!response.ok || result.success === false || result.success === "false") {
    throw new Error(result.message ?? "Could not send. Please try again.");
  }
}
