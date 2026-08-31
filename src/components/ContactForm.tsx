"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "./icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-navy">
        <h3 className="font-display text-[28px] font-medium">Thank you.</h3>
        <p className="mt-3 text-[15px] leading-7 text-muted">
          We have your note. A member of the Cettle team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name" name="name" required />
      <Field label="email" name="email" type="email" required />
      <Field label="Website" name="website" required />
      <label className="block">
        <span className="text-[13.5px] text-[#999fae]">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full border border-[#e0e0e0] bg-white px-3 py-2 text-[14px] text-heading outline-none focus:border-navy"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-[38px] items-center gap-2.5 rounded-[3px] bg-ink px-4 text-[12.5px] font-bold text-white transition hover:bg-black"
      >
        Submit
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
