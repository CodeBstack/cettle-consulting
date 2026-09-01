import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { InsightCard, InsightMeta } from "@/components/InsightCard";
import { InsightsFilters } from "@/components/InsightsFilters";
import { NewsletterCta } from "@/components/NewsletterCta";
import {
  insightCategories,
  insights,
  type InsightCategory,
} from "@/data/site";

export const metadata: Metadata = { title: "Insights" };

function isCategory(value: string | undefined): value is InsightCategory {
  return insightCategories.includes(value as InsightCategory);
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = isCategory(category) ? category : undefined;
  const filtered = active
    ? insights.filter((item) => item.category === active)
    : insights;

  const featured = filtered[0];
  const recentCards = filtered.slice(1, 4);
  const popular =
    filtered.length > 4 ? filtered.slice(filtered.length > 7 ? 3 : 1, 10) : [];

  return (
    <>
      <section className="bg-[#ececec]">
        <div className="relative">
          <div className="relative h-[420px] overflow-hidden lg:h-[620px]">
            <Image
              src="/images/insights-hero.jpg"
              alt="Analyst reviewing a wall of digital screens"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="100vw"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px] px-6 lg:px-[80px]">
            <div className="pointer-events-auto absolute right-6 bottom-0 w-[min(100%,560px)] translate-y-[18%] bg-white px-8 py-9 lg:right-[80px] lg:px-12 lg:py-12">
              <p className="text-[13px] font-semibold text-navy">Insights</p>
              <h1 className="mt-2 font-display text-[32px] leading-[1.12] font-semibold tracking-tight text-navy lg:text-[42px]">
                Ideas That Move Markets.
              </h1>
              <p className="mt-4 max-w-[440px] text-[14px] leading-6 text-[#8a8a8a]">
                Skip the fluff. Get straight to the strategies, case studies, and
                expert analysis that help you navigate complexity and seize new
                opportunities.
              </p>
              <Button href="#posts" className="mt-7 h-10 min-w-[128px] rounded-[4px]">
                Read More
              </Button>
            </div>
          </div>
        </div>

        <div
          id="posts"
          className="scroll-mt-[88px] mx-auto max-w-[1440px] px-6 pt-28 pb-12 lg:px-[80px] lg:pt-36 lg:pb-16"
        >
          <InsightsFilters active={active} />
        </div>
      </section>

      {featured ? (
        <section className="bg-[#ececec]">
          <div className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-[80px] lg:pb-20">
            <h2 className="text-[22px] font-semibold text-heading lg:text-[26px]">
              Our Recent Post
            </h2>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[460px]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <InsightMeta label={featured.label} date={featured.date} />
                <h3 className="mt-4 font-display text-[24px] leading-[1.25] font-semibold tracking-tight text-heading lg:text-[34px]">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-[480px] text-[14px] leading-7 text-[#7a7a7a]">
                  {featured.excerpt}
                </p>
                {/* {featured.body[0] ? (
                  <p className="mt-4 max-w-[480px] text-[14px] leading-7 text-[#7a7a7a]">
                    {featured.body[0]}
                  </p>
                ) : null} */}
                <Button
                  href={`/insights/${featured.slug}`}
                  className="mt-8 h-10 min-w-[128px] rounded-[4px]"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#ececec] px-6 py-24 text-center">
          <p className="text-[15px] text-muted">No insights in this category yet.</p>
        </section>
      )}

      {recentCards.length > 0 ? (
        <section className="bg-[#ececec]">
          <div className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-[80px]">
            <div className="grid gap-10 md:grid-cols-3 md:gap-8">
              {recentCards.map((item) => (
                <InsightCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {popular.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[80px] lg:py-20">
            <h2 className="font-display text-[26px] font-semibold text-heading lg:text-[32px]">
              Popular Post
            </h2>
            <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {popular.slice(0, 6).map((item) => (
                <InsightCard key={item.slug} item={item} square />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <NewsletterCta />
    </>
  );
}
