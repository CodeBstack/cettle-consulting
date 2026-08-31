"use client";

import Image from "next/image";
import { useState } from "react";
import { audiences } from "@/data/site";
import { Button } from "./Button";

export function WhoWeWorkWith() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="bg-line">
      <div className="mx-auto max-w-[1440px] px-6 py-[59px] lg:px-[150px] lg:py-[39px] lg:pb-[39px]">
        <h2 className="font-display text-[36px] leading-tight font-light text-navy">
          Who we work with.
        </h2>
        <div className="mt-[38px] grid lg:grid-cols-[584px_555px] lg:gap-px">
          <div className="relative min-h-[280px] overflow-hidden lg:h-[320px]">
            <Image
              src={current.image}
              alt=""
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(min-width: 1024px) 584px, 100vw"
            />
            <p className="absolute bottom-8 left-8 font-display text-[20px] font-semibold text-surface">
              {current.title}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-2.5">
            {audiences.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex gap-3 px-5 py-5 text-left transition-colors duration-300 ${
                    selected ? "bg-navy text-white" : "bg-surface-2 text-navy"
                  }`}
                >
                  <span className={`mt-0.5 shrink-0 ${selected ? "text-lime" : "text-navy"}`}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                      <path
                        d="M7 13.5 12 8.5l5 5M7 17.5 12 12.5l5 5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-display text-[20px] font-semibold leading-7">
                      {item.title}
                    </span>
                    <span
                      className={`mt-1 block text-[12px] leading-4 font-light ${
                        selected ? "text-white" : "text-navy"
                      }`}
                    >
                      {item.copy}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <Button href="/about" variant="dark" arrow className="mt-[38px] h-[38px] text-[12.5px] font-bold">
          Learn more
        </Button>
      </div>
    </section>
  );
}
