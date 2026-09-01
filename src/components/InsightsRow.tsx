"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { insights } from "@/data/site";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "./icons";

function teaser(text: string, max = 88) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

export function InsightsRow() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 4;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-insight-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="bg-[#e9ecef]">
      <div className="py-14 lg:pt-[65px] lg:pb-[58px]">
        <div className="flex items-center justify-between px-6 lg:px-[150px]">
          <h2 className="font-display text-[28px] font-light text-black sm:text-[32px] lg:text-[36px]">
            Read our insights
          </h2>
          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Previous insights"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-[0_1px_4px_rgba(16,24,40,0.08)] disabled:text-navy/25 sm:h-[42px] sm:w-[42px]"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next insights"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-[0_1px_4px_rgba(16,24,40,0.08)] disabled:text-navy/25 sm:h-[42px] sm:w-[42px]"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-8 pl-6 sm:mt-9 lg:pl-[150px]">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pr-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                data-insight-card
                className="group w-[min(280px,calc(100vw-3.5rem))] shrink-0 snap-start sm:w-[min(320px,42vw)] lg:w-[min(340px,calc((100vw-150px-5rem)/3.35))]"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-surface">
                  <Image
                    src={item.image}
                    alt={item.slug}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 82vw"
                  />
                </div>
                <span className="mt-4 inline-flex rounded-full border border-[#d4d4d4] bg-[#ececec] px-3 py-[5px] text-[11px] leading-none text-[#5f5f5f]">
                  {item.author}
                </span>
                <h3 className="mt-3 line-clamp-2 text-[16px] leading-snug font-semibold text-black lg:text-[17px]">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-6 text-[13px] leading-5 font-light text-[#707070] lg:text-[14px]">
                  {teaser(item.excerpt)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 px-6 sm:mt-9 lg:px-[150px]">
          <Button href="/insights" variant="dark" arrow className="h-[38px] text-[12.5px] font-bold">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
