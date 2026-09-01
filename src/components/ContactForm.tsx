"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "./icons";

const CONTACT_TO = "ssamuelolumide@gmail.com";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") ?? "").trim()) {
      setSent(true);
      setPending(false);
      return;
    }

    
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          website,
          message,
          _subject: `Cettle Consulting enquiry from ${name}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      });

      const text = await response.text();
      let result: { success?: string | boolean; message?: string } = {};
      try {
        result = JSON.parse(text) as typeof result;
      } catch {
        throw new Error("Could not send your message. Please try again.");
      }

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message ?? "Could not send your message.");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="text-white">
        <h3 className="font-display text-[28px] font-medium">Thank you.</h3>
        <p className="mt-3 text-[15px] leading-7 text-white/75">
          We have your note. A member of the Cettle team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <Field label="Name" name="name" required />
      <Field label="email" name="email" type="email" required />
      <Field label="Website" name="website" />
      <label className="block">
        <span className="text-[13.5px] text-[#999fae]">
          Message<span className="text-[#eb5757]">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full border border-[#e0e0e0] bg-white px-3 py-2 text-[14px] text-heading outline-none focus:border-navy"
        />
      </label>
      {error ? <p className="text-[13px] text-[#eb5757]">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-[38px] items-center gap-2.5 rounded-[3px] bg-ink px-4 text-[12.5px] font-bold text-white transition hover:bg-black disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit"}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[13.5px] text-[#999fae]">
        {label}
        {required ? <span className="text-[#eb5757]">*</span> : null}
      </span>
      <input
        required={required}
        type={type}
        name={name}
        className="mt-1 h-10 w-full border border-[#e0e0e0] bg-white px-3 text-[14px] text-heading outline-none focus:border-navy"
      />
    </label>
  );
}
