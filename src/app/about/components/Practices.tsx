import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { firstServicePath, practiceDetails, type PracticeDetail } from "@/data/practices";

const GRID_ORDER = [
  "events-and-convening",
  "communication-and-reputation",
  "leadership-and-executive-development",
  "brand-and-audience-strategy",
] as const;

function PracticeCard({
  slug,
  title,
  cardBody,
  image,
  imageAlt,
}: PracticeDetail) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative block min-h-[240px] overflow-hidden bg-navy-deep sm:min-h-[280px] lg:min-h-[320px]"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/25 transition duration-500 group-hover:from-black/70 group-hover:via-black/40" />
      <div className="relative z-10 flex h-full flex-col px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        <h3 className="max-w-[20rem] text-[20px] leading-snug font-semibold text-lime sm:text-[22px] md:text-[24px] lg:text-[26px]">
          {title}
        </h3>
        <p className="mt-3 max-w-[26rem] text-[12px] leading-[1.55] font-light text-white/95 sm:mt-4 sm:text-[13px] md:text-[14px] md:leading-6">
          {cardBody}
        </p>
      </div>
    </Link>
  );
}

export function Practices() {
  const bySlug = Object.fromEntries(practiceDetails.map((item) => [item.slug, item]));
  const items = GRID_ORDER.map((slug) => bySlug[slug]).filter(Boolean);

  return (
    <section id="practices" className="bg-white">
      <div className="site-pad py-14 sm:py-16 md:py-20 lg:py-24">
        <h2 className="max-w-[34rem] text-[32px] leading-[1.15] font-light tracking-[-0.03em] text-[#1B2A4A] sm:text-[40px] md:max-w-[470px] md:text-[48px] lg:text-[52px]">
          Four practices, built to work{" "}
          <span className="font-light text-together">together.</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-0 md:mt-12">
          {items.map((item) => (
            <PracticeCard key={item.slug} {...item} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12">
          <Button
            href={firstServicePath}
            variant="dark"
            arrow
            className="h-10 min-w-[140px] text-[13px] font-semibold sm:h-[38px] sm:text-[12.5px] sm:font-bold"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
