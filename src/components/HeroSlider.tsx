"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroBackgrounds } from "@/data/site";
import { Button } from "./Button";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const current = heroBackgrounds[index];
  const isLight = current.theme === "light";

  const go = useCallback((next: number) => {
    setIndex((next + heroBackgrounds.length) % heroBackgrounds.length);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => go(index + 1), 4500);
    return () => window.clearInterval(timer);
  }, [index, go]);

  return (
    <section className="relative h-[min(78vh,640px)] overflow-hidden lg:h-[836px]">
      {heroBackgrounds.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          priority={i === 0}
          unoptimized
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${item.objectPosition} ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ${
          isLight
            ? "bg-gradient-to-r from-white via-white/80 to-transparent"
            : "bg-gradient-to-r from-black/75 via-black/45 to-black/20"
        }`}
      />

      <div className="relative site-pad flex h-full items-center">
        <div className="max-w-[600px]">
          <h1
            className={`font-display text-[36px] leading-[1.18] font-light tracking-tight sm:text-[44px] lg:text-[48px] ${
              isLight ? "text-navy" : "text-white"
            }`}
          >
            Communication that carries{" "}
            <span className="text-lime">weight.</span>
          </h1>
          <p
            className={`mt-7 max-w-[420px] text-[14px] leading-[1.65] font-normal sm:mt-8 ${
              isLight ? "text-[#676d79]" : "text-white"
            }`}
          >
            Cettle Consulting helps organisations, executives, and institutions
            communicate with authority, build leadership that holds under
            pressure, and convene the audiences that move their business
            forward.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 sm:mt-8 sm:gap-[22px]">
            <Button
              href="/contact"
              variant={isLight ? "navy" : "mid"}
              className="h-11 min-w-[186px] px-5 text-[15px] font-medium"
            >
              Contact Us
            </Button>
            {isLight ? (
              <Button
                href="/#services"
                variant="outline"
                className="h-11 min-w-[193px] !border-navy px-5 text-[15px] font-medium text-navy hover:bg-navy hover:text-white"
              >
                Explore our practices
              </Button>
            ) : (
              <Button
                href="/#services"
                variant="ghost"
                className="h-11 min-w-[193px] px-5 text-[15px] font-medium"
              >
                Explore our practices
              </Button>
            )}
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
              i === index
                ? "w-8 bg-lime"
                : isLight
                  ? "w-3 bg-navy/30 hover:bg-navy/55"
                  : "w-3 bg-white/55 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
