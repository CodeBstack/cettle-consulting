"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroBackgrounds } from "@/data/site";
import { Button } from "./Button";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + heroBackgrounds.length) % heroBackgrounds.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => go(index + 1), 3500);
    return () => window.clearInterval(timer);
  }, [index, go]);

  return (
    <section className="relative h-[720px] overflow-hidden lg:h-[836px]">
      {heroBackgrounds.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          priority={i === 0}
          unoptimized
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent" />

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] items-center px-6 lg:px-[148px]">
        <div className="max-w-[600px] text-white">
          <h1 className="font-display text-[40px] leading-[1.22] font-light tracking-tight sm:text-[48px]">
            Communication that carries{" "}
            <span className="text-lime">weight.</span>
          </h1>
          <p className="mt-[31px] max-w-[403px] text-[14px] leading-[1.65] font-normal text-white">
            Cettle Consulting helps organisations, executives, and institutions
            communicate with authority, build leadership that holds under
            pressure, and convene the audiences that move their business
            forward.
          </p>
          <div className="mt-[31px] flex flex-wrap gap-[31px]">
            <Button variant="mid" className="h-10 min-w-[186px] text-[16px]">
              Contact Us
            </Button>
            <Button href="/#services" variant="ghost" className="h-10 min-w-[193px] text-[16px]">
              Explore our practices
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center gap-2">
        {heroBackgrounds.map((item, i) => (
          <button
            key={item.src}
            type="button"
            aria-label={`Show background ${i + 1}`}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-lime" : "w-3 bg-white/55 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
