"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-[150px]">
        <Link href="/" aria-label="Cettle Consulting home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-[41px] lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] text-navy transition-colors ${
                  active ? "font-medium" : "hover:opacity-70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button className="h-10 min-w-[165px] text-[14px]">Book a Consultation</Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={`h-px w-full bg-navy transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-navy transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px] text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full">Book a Consultation</Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
