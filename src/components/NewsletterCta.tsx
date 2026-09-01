"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { NewsletterWaves } from "./icons";
import { submitSiteForm } from "@/lib/submitForm";

export function NewsletterCta() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const email = String(new FormData(event.currentTarget).get("email") ?? "").trim();

    try {
      await submitSiteForm({
        name: "Newsletter subscriber",
        email,
        message: `${email} signed up for the Cettle Insights newsletter.`,
        subject: `Cettle newsletter signup: ${email}`,
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not subscribe. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[240px] lg:h-[340px]">
        <Image
          src="/images/insights-newsletter-desk.jpg"
          alt="Professional working at a desk"
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
      </div>

      <div className="relative bg-lime">
        <div className="relative mx-auto max-w-[720px] px-6 py-14 text-center lg:py-[68px]">
          <h2 className="font-display text-[26px] leading-[1.35] font-semibold text-navy lg:text-[34px]">
            Get our stories delivered
            <br />
            From us to your inbox weekly.
          </h2>

          {sent ? (
            <p className="mt-8 text-[16px] text-navy">
              You are on the list. The next briefing will land in your inbox.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-[500px] flex-col gap-2.5 sm:flex-row sm:items-stretch"
            >
              <label className="sr-only" htmlFor="insights-email">
                Your Email
              </label>
              <input
                id="insights-email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="h-12 flex-1 rounded-[4px] bg-white px-4 text-[16px] text-heading outline-none placeholder:text-[#b0b0b0]"
              />
              <button
                type="submit"
                disabled={pending}
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-[4px] bg-navy px-7 text-[14px] font-medium text-white transition hover:bg-navy-deep disabled:opacity-60"
              >
                {pending ? "Sending…" : "Read More"}
              </button>
            </form>
          )}
          {error ? <p className="mt-3 text-[13px] text-red-700">{error}</p> : null}

          <p className="mx-auto mt-5 max-w-[460px] text-[12px] leading-5 text-navy/80">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a response the following day.
          </p>
        </div>
      </div>

      <NewsletterWaves className="pointer-events-none absolute top-0 left-0 h-full w-[220px] text-[#1b2a4a]/35 lg:w-[340px]" />
    </section>
  );
}
