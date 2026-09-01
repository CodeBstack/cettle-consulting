"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { workCategories, type WorkCategory } from "@/data/work";

export function WorkFilters({ active }: { active?: WorkCategory }) {
  const chip =
    "inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-5 text-[13px] whitespace-nowrap transition";

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.search && !window.location.hash) return;
    document.getElementById("work-grid")?.scrollIntoView({ block: "start" });
  }, [active]);

  return (
    <div className="-mx-6 flex items-center justify-start gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
      {workCategories.map((category) => {
        const selected = active === category;
        return (
          <Link
            key={category}
            href={
              selected
                ? "/work#work-grid"
                : `/work?category=${encodeURIComponent(category)}#work-grid`
            }
            scroll={false}
            className={`${chip} ${
              selected
                ? "border-white text-white"
                : "border-white/70 text-white/90 hover:border-white"
            }`}
          >
            {selected ? (
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#e11d2e]" />
            ) : null}
            {category}
          </Link>
        );
      })}
      <Link
        href="/work#work-grid"
        scroll={false}
        className={`${chip} ${
          active
            ? "border-white/70 text-white/90 hover:border-white"
            : "border-transparent bg-[#3d6bb3] text-white hover:bg-[#4a7ac4]"
        }`}
      >
        View all
      </Link>
    </div>
  );
}
