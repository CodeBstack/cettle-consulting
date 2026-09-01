import Link from "next/link";
import { workCategories, type WorkCategory } from "@/data/work";

export function WorkFilters({ active }: { active?: WorkCategory }) {
  const chip =
    "inline-flex h-10 items-center gap-2 rounded-full border px-5 text-[13px] whitespace-nowrap transition";

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {workCategories.map((category) => {
        const selected = active === category;
        return (
          <Link
            key={category}
            href={
              selected
                ? "/work"
                : `/work?category=${encodeURIComponent(category)}`
            }
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
        href="/work"
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
