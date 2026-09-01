import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { firstServicePath, practiceDetails } from "@/data/practices";

function PracticeCard({
  slug,
  title,
  cardBody,
  image,
  imageAlt,
  cardMin,
}: (typeof practiceDetails)[number]) {
  return (
    <Link
      href={`/services/${slug}`}
      className={`group relative block w-full overflow-hidden bg-navy-deep ${cardMin}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover grayscale transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/45 to-navy-deep/20" />
      <div className="relative z-10 max-w-[420px] px-7 py-8 md:px-8 md:py-9">
        <h3 className="text-[22px] leading-snug font-semibold text-lime md:text-[26px]">{title}</h3>
        <p className="mt-4 text-[13px] leading-6 text-white/95 md:text-[14px]">{cardBody}</p>
      </div>
    </Link>
  );
}

export function Practices() {
  const [comms, leadership, events, brand] = practiceDetails;

  return (
    <section id="practices" className="bg-[#f6f6f6]">
      <div className="site-pad py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-x-10 md:gap-y-0">
          <div>
            <PracticeCard {...comms} />
          </div>
          <div>
            <h2 className="mb-10 max-w-[440px] text-[36px] leading-[1.12] font-semibold tracking-[-0.03em] text-navy md:mb-12 md:text-[52px]">
              Four practices, built
              <br />
              <span className="font-medium text-together">to work</span> together.
            </h2>
            <PracticeCard {...leadership} />
          </div>
          <div className="relative md:mt-10 md:ml-14">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-10 hidden h-[calc(100%+64px)] w-[calc(100%+24px)] border border-dashed border-black/25 md:block"
            />
            <PracticeCard {...events} />
          </div>
          <div className="md:mt-10">
            <PracticeCard {...brand} />
          </div>
        </div>
        <div className="mt-10 md:mt-12">
          <Button href={firstServicePath} variant="dark" arrow className="h-[38px] text-[12.5px] font-bold">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
