import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/data/work";

export function WorkCard({
  item,
  featured = false,
}: {
  item: WorkItem;
  featured?: boolean;
}) {
  return (
    <Link href={`/work/${item.slug}`} className="group relative block overflow-hidden">
      <div className={`relative ${featured ? "aspect-[16/7] min-h-[280px] lg:min-h-[420px]" : "aspect-[16/10] min-h-[240px]"}`}>
        <Image
          src={item.cover}
          alt=""
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes={featured ? "100vw" : "50vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div
          className={`absolute inset-x-0 bottom-0 p-6 lg:p-8 ${
            featured ? "max-w-[840px]" : "max-w-none"
          }`}
        >
          <h3
            className={`font-semibold text-white ${
              featured
                ? "text-[22px] leading-snug lg:text-[28px]"
                : "text-[18px] leading-snug lg:text-[20px]"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-white/85 lg:text-[14px]">
            {item.excerpt}
          </p>
          <span className="mt-3 inline-block text-[13px] font-medium text-white underline underline-offset-4">
            Read more
          </span>
        </div>
      </div>
    </Link>
  );
}
