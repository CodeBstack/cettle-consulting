import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { practices } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        image="/images/hero-1.jpg"
      />
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <h2 className="font-display max-w-[720px] text-[32px] leading-tight font-semibold tracking-tight lg:text-[42px]">
          Three practices. One standard of seriousness.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {practices.map((practice) => (
            <article key={practice.title} className="border border-line p-8">
              <h3 className="font-display text-[24px] font-semibold text-navy">{practice.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-muted">{practice.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Button>Contact Us</Button>
        </div>
      </section>
    </>
  );
}
