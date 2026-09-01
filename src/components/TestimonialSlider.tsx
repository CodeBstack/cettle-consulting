"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/site";
import { ChevronLeft, ChevronRight } from "./icons";

const arrowBtn =
  "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-lime text-ink shadow-sm transition hover:bg-lime-dark sm:h-12 sm:w-12";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <section className="bg-surface">
      <div className="site-pad py-12 sm:py-[68px] lg:py-20">
        <div className="text-center">
          <span className="inline-flex rounded-[6px] bg-[#d4f06e]/35 px-3 py-[7px] text-[12px] font-medium text-lime-dark">
            Testimonials
          </span>
          <h2 className="mx-auto mt-4 max-w-[714px] font-display text-[26px] leading-[1.2] font-bold tracking-tight text-[#2d3139] sm:text-[32px] lg:text-[40px]">
            What people say after working with us
          </h2>
          <p className="mx-auto mt-3 max-w-[36rem] text-[14px] leading-6 text-muted-2 sm:text-[16px] lg:text-[20px]">
            Some of the most memorable reviews we heard consulting
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className={`${arrowBtn} left-0 -translate-x-1/2`}
          >
            <ChevronLeft className="h-5 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className={`${arrowBtn} right-0 translate-x-1/2`}
          >
            <ChevronRight className="h-5 w-4" />
          </button>

          <article className="relative overflow-hidden rounded-[20px] border-t-4 border-black bg-white px-10 pt-12 pb-8 shadow-[0_8px_40px_rgba(16,24,40,0.06)] sm:px-16 sm:pt-14 sm:pb-10 lg:px-20">
            <div className="absolute top-0 left-1/2 flex h-8 w-[min(200px,calc(100%-2rem))] -translate-x-1/2 items-center justify-center rounded-b-[10px] bg-navy sm:h-[38px] sm:w-[min(236px,calc(100%-2rem))]">
              <span className="text-[13px] tracking-[0.2em] text-white sm:text-[15px]">★★★★★</span>
            </div>
            <p
              key={item.name}
              className="animate-fade-up text-center text-[14px] leading-[1.7] text-[#2d3139] sm:text-[16px] lg:text-[18px]"
            >
              {item.quote}
            </p>
            <div className="mt-6 flex flex-col items-center sm:mt-8">
              <Image
                src={item.avatar}
                alt=""
                width={60}
                height={60}
                className="h-12 w-12 rounded-full object-cover sm:h-[60px] sm:w-[60px]"
              />
              <p className="mt-3 text-center text-[12px] font-semibold text-[#2d3139]">{item.name}</p>
              <p className="max-w-[22rem] text-center text-[10px] leading-4 text-muted-2 sm:max-w-none">
                {item.role}
              </p>
              <div className="mt-5 flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition ${
                      i === index ? "h-2 w-2 bg-navy" : "h-1.5 w-1.5 bg-gray-4"
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
