import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((entry) => entry.slug === slug);
  return { title: item?.title ?? "Insight" };
}

export default async function InsightArticle({ params }: Props) {
  const { slug } = await params;
  const item = insights.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-[820px] px-6 py-16 lg:py-20">
      <Link href="/insights" className="text-[13px] font-medium text-navy">
        ← Insights
      </Link>
      <p className="mt-8 text-[12px] tracking-[0.14em] text-muted uppercase">{item.category}</p>
      <h1 className="mt-3 font-display text-[36px] leading-tight font-semibold tracking-tight lg:text-[48px]">
        {item.title}
      </h1>
      <p className="mt-4 text-[14px] text-muted">{item.date}</p>
      <div className="relative mt-10 h-[360px] overflow-hidden">
        <Image src={item.image} alt="" fill className="object-cover" sizes="820px" />
      </div>
      <p className="mt-10 text-[17px] leading-8 text-heading/85">{item.excerpt}</p>
      <p className="mt-6 text-[17px] leading-8 text-heading/85">
        Cettle works with organisations that already know the work is good — and still find themselves
        explained badly. The fix is not more noise. It is a tighter story, a steadier leadership voice,
        and rooms designed for the decisions that matter.
      </p>
    </article>
  );
}
