import Image from "next/image";
import { Button } from "@/components/Button";

export function WorkHero() {
  return (
    <section className="bg-navy">
      <div className="relative">
        <div className="relative h-[420px] overflow-hidden lg:h-[560px]">
          <Image
            src="/images/works-hero.jpg"
            alt="Hands using a tablet in a dimly lit office"
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="100vw"
          />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-auto absolute right-0 bottom-0 w-[min(100%,920px)] translate-y-[38%] bg-white px-8 py-10 sm:px-12 lg:w-[62%] lg:px-16 lg:py-14">
            <p className="text-[15px] font-semibold text-navy">Works/Events</p>
            <h1 className="mt-4 max-w-[640px] text-[28px] leading-[1.2] font-medium tracking-[-0.02em] text-navy sm:text-[36px] lg:text-[44px]">
              What we were asked to solve, what we did, and what changed
            </h1>
            <Button
              href="/contact"
              className="mt-8 h-11 w-fit min-w-[196px] rounded-[3px] px-6 text-[14px]"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[150px] lg:h-[200px]" aria-hidden />
    </section>
  );
}
