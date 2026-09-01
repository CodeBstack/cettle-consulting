import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/data/site";

export function InsightMeta({
  label,
  date,
  className = "",
}: {
  label: string;
  date: string;
  className?: string;
}) {
  return (
    <p className={`flex flex-wrap items-center gap-x-4 text-[12px] leading-none ${className}`}>
      <span className="font-semibold tracking-[0.04em] text-[#4a4a4a] uppercase">
        {label}
      </span>
      <span className="text-[#9a9a9a]">{date}</span>
    </p>
  );
}

export function InsightCard({
  item,
  square = false,
}: {
  item: Insight;
  square?: boolean;
}) {
  return (
    <article>
      <Link href={`/insights/${item.slug}`} className="group block">
        <div
          className={`relative overflow-hidden bg-surface ${
            square ? "aspect-square" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <InsightMeta label={item.label} date={item.date} className="mt-4" />
        <h3 className="mt-3 font-display text-[18px] leading-[1.35] font-semibold tracking-tight text-heading lg:text-[20px]">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[14px] leading-[1.7] text-[#7a7a7a]">
          {item.excerpt}
        </p>
        <span className="mt-4 inline-block text-[14px] text-[#2f6fed] underline decoration-[#2f6fed] underline-offset-[3px] transition group-hover:text-navy group-hover:decoration-navy">
          Read More...
        </span>
      </Link>
    </article>
  );
}
