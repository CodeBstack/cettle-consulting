"use client";

import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import { isValidEmail } from "@/lib/formValidation";
import { submitSiteForm } from "@/lib/submitForm";
import { ArrowRight } from "./icons";

function restoreMobileViewport() {
  const focused = document.activeElement;
  if (focused instanceof HTMLElement) focused.blur();

  const meta = document.querySelector('meta[name="viewport"]');
  if (!meta) return;

  const previous = meta.getAttribute("content") ?? "width=device-width, initial-scale=1";
  meta.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1");
  window.setTimeout(() => {
    meta.setAttribute("content", previous);
  }, 400);
}

export function ContactForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sent) return;
    restoreMobileViewport();
    const node = panelRef.current;
    const id = window.setTimeout(() => {
      node?.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(id);
  }, [sent]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    restoreMobileViewport();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) {
      setError("Please enter your name.");
      setPending(false);
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setPending(false);
      return;
    }
    if (!service) {
      setError("Please enter the service you need.");
      setPending(false);
      return;
    }
    if (!message) {
      setError("Please enter a message.");
      setPending(false);
      return;
    }

    try {
      await submitSiteForm({
        name,
        email,
        service,
        message,
        subject: `Cettle Consulting enquiry from ${name}`,
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setPending(false);
    }
  }

  const onDark = tone === "dark";

  if (sent) {
    return (
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`scroll-mt-28 outline-none ${onDark ? "text-white" : "text-heading"}`}
      >
        <h3 className="font-display text-[28px] font-medium">Thank you.</h3>
        <p className={`mt-3 text-[16px] leading-7 ${onDark ? "text-white/75" : "text-muted"}`}>
          We have your note. A member of the Cettle team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div ref={panelRef} className="scroll-mt-28">
      <form onSubmit={onSubmit} noValidate className="relative space-y-5">
        <Field label="Name" name="name" type="text" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
        <Field
          label="The service you need:"
          name="service"
          type="text"
          autoComplete="off"
          placeholder="e.g. Communication and Reputation"
          required
        />
        <label className="block">
          <span className="text-[13.5px] text-[#999fae]">
            Message<span className="text-[#eb5757]">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={4}
            autoComplete="off"
            className="mt-1 w-full border border-[#e0e0e0] bg-white px-3 py-2 text-[16px] leading-6 text-heading outline-none focus:border-navy"
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
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  inputMode,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: "text" | "email";
  required?: boolean;
  inputMode?: "text" | "email";
  autoComplete?: string;
  placeholder?: string;
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
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1 h-11 w-full border border-[#e0e0e0] bg-white px-3 text-[16px] text-heading outline-none focus:border-navy"
      />
    </label>
  );
}
