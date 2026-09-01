import Link from "next/link";
import { insightCategories, type InsightCategory } from "@/data/site";

const chip =
  "inline-flex h-[42px] items-center rounded-[5px] px-[18px] text-[13px] whitespace-nowrap transition";

export function InsightsFilters({
  active,
}: {
  active?: InsightCategory;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {insightCategories.map((category) => {
        const selected = active === category;
        return (
          <Link
            key={category}
            href={
              selected
                ? "/insights"
                : `/insights?category=${encodeURIComponent(category)}`
            }
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
        href="/insights"
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
