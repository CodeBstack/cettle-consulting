"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { insights } from "@/data/site";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "./icons";

export function InsightsRow() {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, insights.length - 3);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(max, i + 1));
  }

  return (
    <section className="overflow-hidden bg-[#e9ecef]">
      <div className="py-16 pl-6 lg:pt-[65px] lg:pb-[58px] lg:pl-[150px]">
        <div className="flex items-center justify-between pr-6 lg:pr-10">
          <h2 className="font-display text-[32px] font-light text-black lg:text-[36px]">
            Read our insights
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous insights"
              onClick={prev}
              disabled={index === 0}
              className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#d8d8d8] text-navy disabled:text-navy/30"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next insights"
              onClick={next}
              disabled={index === max}
              className="grid h-[42px] w-[42px] place-items-center rounded-full bg-white text-navy disabled:text-navy/30"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-9 overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(calc(-${index} * (var(--insight-card) + 1.25rem)))`,
            }}
          >
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/#insights/${item.slug}`}
                className="group w-[var(--insight-card)] shrink-0 max-md:min-w-[300px]"
              >
                <div className="relative h-[175px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="350px"
                  />
                </div>
                <p className="mt-4 text-[9px] font-light text-[#696969]">{item.author}</p>
                <h3 className="mt-1 text-[16px] leading-snug font-medium text-black">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-5 font-light text-[#707070]">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>

        <Button href="/insights" variant="dark" arrow className="mt-9 h-[38px] text-[12.5px] font-bold">
          Learn more
        </Button>
      </div>
    </section>
  );
}
