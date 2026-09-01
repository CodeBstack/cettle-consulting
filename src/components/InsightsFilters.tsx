"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { insightCategories, type InsightCategory } from "@/data/site";

const chip =
  "inline-flex h-[42px] shrink-0 items-center rounded-[5px] px-[18px] text-[13px] whitespace-nowrap transition";

export function InsightsFilters({
  active,
}: {
  active?: InsightCategory;
}) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.search && !window.location.hash) return;
    document.getElementById("posts")?.scrollIntoView({ block: "start" });
  }, [active]);

  return (
    <div className="-mx-[var(--site-gutter)] flex gap-3 overflow-x-auto px-[var(--site-gutter)] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
      {insightCategories.map((category) => {
        const selected = active === category;
        return (
          <Link
            key={category}
            href={
              selected
                ? "/insights#posts"
                : `/insights?category=${encodeURIComponent(category)}#posts`
            }
            scroll={false}
            className={`${chip} ${
              selected
                ? "bg-navy text-white"
                : "border border-[#d6d6d6] bg-[#ececec] text-navy hover:bg-[#e2e2e2]"
            }`}
          >
            {category}
          </Link>
        );
      })}
      <Link
        href="/insights#posts"
        scroll={false}
        className={`${chip} ${
          active
            ? "border border-[#d6d6d6] bg-[#ececec] text-navy hover:bg-[#e2e2e2]"
            : "bg-navy text-white hover:bg-navy-deep"
        }`}
      >
        View all
      </Link>
    </div>
  );
}
