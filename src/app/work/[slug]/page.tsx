import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkHero } from "@/components/WorkHero";
import { getNextWork, getWork, workItems } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  return { title: item?.title ?? "Work" };
}

export default async function WorkArticle({ params }: Props) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const next = getNextWork(slug);
  const [hero, , third, fourth] = item.gallery;

  return (
    <>
      <WorkHero />
      <section className="bg-navy pb-20 text-white">
        <div className="site-pad">
          <p className="text-right text-[12px] tracking-[0.08em] text-white/70">
            <span className="font-semibold">{item.label}</span>
            <span className="mx-2">·</span>
            <span>{item.date}</span>
          </p>

          <h1 className="mt-8 max-w-[820px] text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] lg:text-[40px]">
            {item.title}
          </h1>
          <div className="mt-8 max-w-[820px] space-y-5 text-[14px] leading-7 text-white/85 md:text-[16px] md:leading-8">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 space-y-3">
            <div className="relative aspect-[16/7] min-h-[240px] overflow-hidden lg:min-h-[380px]">
              <Image
                src={hero}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[hero, third, fourth].map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-end gap-3">
            <Link
              href="/work"
              className="inline-flex h-10 items-center gap-2 rounded-[3px] border border-white px-5 text-[13px] font-medium text-white"
            >
              ← Back
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="inline-flex h-10 items-center gap-2 rounded-[3px] bg-white px-5 text-[13px] font-medium text-navy"
            >
              Next →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
