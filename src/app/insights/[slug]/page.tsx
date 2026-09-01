import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { InsightCard, InsightMeta } from "@/components/InsightCard";
import { ChevronLeftSmall } from "@/components/icons";
import { getInsight, getNextInsight, insights } from "@/data/site";
import { NewsletterCta } from "@/components/NewsletterCta";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  return { title: item?.title ?? "Insight" };
}

export default async function InsightArticle({ params }: Props) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();

  const next = getNextInsight(slug);
  const [lead, beforeQuote, afterQuote, closing] = item.body;

  const filtered = slug
  ? insights.filter((item) => item.slug !== slug)
  : insights;
  

const popular =
filtered.length > 4 ? filtered.slice(filtered.length > 7 ? 3 : 1, 10) : [];
// console.log(slug,filtered.length,popular);


  return (
    <>
    <div className="bg-[#f5f5f5]">
      <article className="site-pad pt-12 pb-20 lg:pt-16 lg:pb-28">
          <InsightMeta label={item.label} date={item.date} />
        <div className="flex flex-col-reverse lg:flex-row mt-10 items-start justify-between gap-6">
          <h1 className="mt6 font-display max-w-[820px] text-[24px] leading-[1.2] font-semibold tracking-tight text-heading lg:text-[40px]">
          {item.title}
        </h1>
          <Button
            href="/insights"
            variant="outline"
            className="h-10 shrink-0 gap-2 self-end lg:self-start rounded-[6px] px-4 text-[13px] font-medium text-[#6b6b6b]"
          >
            <ChevronLeftSmall />
            Back to insight
          </Button>
        </div>

       

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[24px] bg-surface lg:mt-10">
          <Image
            src={item.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 980px, 100vw"
          />
        </div>

        <div className="mt-10 max-w[820px] lg:mt-12">
          {item.excerpt ? (
            <p className="text-[12px] leading-[1.85] text-[#6b6b6b] lg:text-[14px]">
              {item.excerpt}
            </p>
          ) : null}
          {beforeQuote ? (
            <p className="mt-6 text-[12px] leading-[1.85] text-[#6b6b6b] lg:text-[14px]">
              {beforeQuote}
            </p>
          ) : null}

          <blockquote className="my-12 max-w-[830px] border-l-[4px] border-[#7C4EE4] py-1 pl-6 lg:pl8">
            <p className="font-display text-[16px] leading-[1.45] text-[#666666] italic lg:text-[22px]">
              {item.quote.text}
            </p>
            <footer className="mt-4 text-[14px] font-medium text-[#6b6b6b]">
              — {item.quote.attribution}
            </footer>
          </blockquote>

          {afterQuote ? (
            <p className="text-[12px] leading-[1.85] text-[#6b6b6b] lg:text-[14px]">
              {afterQuote}
            </p>
          ) : null}
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[16px] bg-surface lg:mt-14">
          <Image
            src={item.secondaryImage}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 980px, 100vw"
          />
        </div>

        <div className="mt-10 max-w[820px]">
          {closing ? (
            <p className="text-[12px] leading-[1.85] text-[#6b6b6b] lg:text-[14px]">
              {closing}
            </p>
          ) : null}
          <Button
            href={`/insights/${next.slug}`}
            className="mt-10 h-10 min-w-[128px] rounded-[4px]"
          >
            Read Next
          </Button>
        </div>
      </article>


    </div>

    {popular.length > 0 ? (
        <section className="bg-white">
          <div className="site-pad py-16 lg:py-20">
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
