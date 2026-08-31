import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { workItems } from "@/data/site";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        image="/images/hero-4.jpg"
      />
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {workItems.map((item) => (
            <article key={item.title} className="group">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
              <p className="mt-4 text-[12px] tracking-[0.14em] text-muted uppercase">{item.category}</p>
              <h2 className="mt-2 font-display text-[24px] font-semibold">{item.title}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
