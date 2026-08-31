import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/data/site";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        image="/images/insight-2.jpg"
      />
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((item) => (
            <Link key={item.slug} href={`/insights/${item.slug}`} className="group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
              </div>
              <p className="mt-4 text-[12px] tracking-[0.14em] text-muted uppercase">{item.category}</p>
              <h2 className="mt-2 font-display text-[22px] leading-snug font-semibold">{item.title}</h2>
              <p className="mt-3 text-[14px] leading-6 text-muted">{item.excerpt}</p>
              <p className="mt-4 text-[13px] font-medium text-navy">Read more</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
