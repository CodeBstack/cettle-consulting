import type { Metadata } from "next";
import { WorkCard } from "@/components/WorkCard";
import { WorkFilters } from "@/components/WorkFilters";
import { WorkHero } from "@/components/WorkHero";
import { workCategories, workItems, type WorkCategory } from "@/data/work";

export const metadata: Metadata = { title: "Work" };

function isCategory(value: string | undefined): value is WorkCategory {
  return workCategories.includes(value as WorkCategory);
}

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = isCategory(category) ? category : undefined;
  const filtered = active
    ? workItems.filter((item) => item.category === active)
    : workItems;

  const featured = filtered[0];
  const rest = filtered.slice(1, 3);

  return (
    <>
      <WorkHero />
      <section className="bg-navy pb-20">
        <div className="site-pad">
          <WorkFilters active={active} />
          {featured ? (
            <div className="mt-12 space-y-6">
              <WorkCard item={featured} featured />
              {rest.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {rest.map((item) => (
                    <WorkCard key={item.slug} item={item} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <p className="mt-16 text-center text-[15px] text-white/70">
              No work in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
