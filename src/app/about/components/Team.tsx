import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ArrowRight } from "@/components/icons";

const TEAM = [
  {
    name: "Charles Ebereonwu, PhD",
    title: "Principal Consultant and Trainer at CETTLE CONSULTING NIGERIA LIMITED.",
    image: "/images/team-charles.png",
    alt: "Portrait of Charles Ebereonwu",
  },
  {
    name: "Princess Anyanwu.",
    title: "Executive Assistant to Dr Charles",
    image: "/images/team-princess.png",
    alt: "Portrait of Princess Anyanwu",
  },
];

export function Team() {
  return (
    <section className="bg-lime-soft">
      <div className="site-pad grid items-start gap-10 py-16 md:grid-cols-[1fr_1.15fr] md:gap-12 md:py-20">
        <div className="md:pt-2">
          <p className="text-[13px] font-light tracking-wide text-[#1B2A4A] md:text-[14px]">
            The team
          </p>
          <h2 className="mt-3 max-w-[360px] font-display text-[36px] leading-[1.15] font-light text-[#1B2A4A] md:text-[48px] md:leading-[1.0]">
            The people doing the work.
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TEAM.map((person) => (
              <article key={person.name} className="flex flex-col overflow-hidden bg-navy">
                <div className="relative aspect-[4/5] bg-navy">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    sizes="(min-width: 768px) 280px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col bg-lime px-5 py-5">
                  <h3 className="min-h-[3rem] text-[18px] leading-snug font-semibold text-navy md:text-[20px]">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 font-medium text-navy/85">
                    {person.title}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-between gap-3 px-5 text-[14px] font-semibold tracking-wide text-white transition hover:opacity-95"
                  style={{
                    background: "linear-gradient(90deg, #1b2a4a 0%, #91bc0d 55%, #b5e61d 100%)",
                  }}
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button href="/contact" variant="navy" className="h-11 min-w-[186px] px-6 text-[14px] font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
