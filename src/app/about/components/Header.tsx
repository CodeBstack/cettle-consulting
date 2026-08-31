"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/", label: "About", active: true },
  { href: "#practices", label: "Services" },
  { href: "#work", label: "Insights" },
  { href: "#contact", label: "Contact" },
  { href: "#practices", label: "Work" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="site-pad flex h-20 items-center justify-between gap-6">
        <Logo compact />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[17px] leading-none ${
                item.active ? "font-semibold text-navy" : "font-medium text-navy/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden bg-navy px-5 py-3 text-[15px] font-medium text-white sm:inline-flex"
        >
          Book a Consultation
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
            <span className="block h-0.5 w-5 bg-navy" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-navy/10 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-navy px-4 py-3 text-center text-white"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
