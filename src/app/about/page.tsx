import type { Metadata } from "next";
import Image from "next/image";
import { AboutIntro } from "./components/AboutIntro";
import { VisionMission } from "./components/VisionMission";
import { Values } from "./components/Values";
import { Team } from "./components/Team";
import { Practices } from "./components/Practices";
import { HowToWork } from "./components/HowToWork";
// import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutIntro />
        <VisionMission />
        <Values />
        <Team />
        <Practices />
        <HowToWork/>
      </main>
      {/* <PageHero
        label="About us"
        image="/images/about-hero.jpg"
      />
      <section className="-mt-24 pb-0">
        <div className="mx-auto max-w-[980px] bg-white px-6 py-14 shadow-[0_20px_80px_rgba(16,24,40,0.08)] lg:px-16 lg:py-20">
          <h2 className="font-display text-[32px] leading-tight font-semibold tracking-tight text-navy lg:text-[44px]">
            Good work keeps losing to better communication. We started Cettle to change that.
          </h2>
          <p className="mt-5 max-w-[640px] text-[16px] leading-7 text-muted">
            Cettle Consulting Limited is a communication, leadership, and convening consultancy based in Victoria Island, Lagos, working with clients across Nigeria and beyond.
          </p>
          <div className="relative mt-10 h-[340px] overflow-hidden lg:h-[420px]">
            <Image
              src="/images/about-office.jpg"
              alt="Two professionals reviewing work on a screen"
              fill
              className="object-cover"
              sizes="980px"
            />
          </div>
        </div>
      </section>
      <section className="bg-navy pt-32 pb-20 text-white">
        <div className="mx-auto max-w-[980px] px-6 lg:px-0">
          <p className="font-display text-[28px] leading-snug font-medium">
            We work at the point where language, leadership, and rooms decide whether an organisation is believed.
          </p>
        </div>
      </section> */}
    </>
  );
}
