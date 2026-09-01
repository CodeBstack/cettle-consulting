"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/data/site";
import { ChevronLeft, ChevronRight } from "./icons";

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
      <div className="mx-auto max-w-[1184px] px-6 py-[68px] lg:py-20">
        <div className="text-center">
          <span className="inline-flex rounded-[6px] bg-[#d4f06e]/35 px-3 py-[7px] text-[12px] font-medium text-lime-dark">
            Testimonials
          </span>
          <h2 className="mx-auto mt-4 max-w-[714px] font-display text-[32px] leading-tight font-bold tracking-tight text-[#2d3139] lg:text-[40px]">
            What people say after working with us
          </h2>
          <p className="mt-3 text-[16px] text-muted-2 lg:text-[20px]">
            Some of the most memorable reviews we heard consulting
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-[1075px] px-10 sm:px-14 lg:px-16">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute top-1/2 left-0 z-10 grid h-12 w-12 -translate-x-2 -translate-y-1/2 place-items-center rounded-full bg-lime text-ink shadow-sm transition hover:bg-lime-dark lg:-translate-x-6"
          >
            <ChevronLeft className="h-5 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute top-1/2 right-0 z-10 grid h-12 w-12 translate-x-2 -translate-y-1/2 place-items-center rounded-full bg-lime text-ink shadow-sm transition hover:bg-lime-dark lg:translate-x-6"
          >
            <ChevronRight className="h-5 w-4" />
          </button>

          <article className="relative overflow-hidden rounded-[20px] border-t-4 border-black bg-white px-8 pt-14 pb-10 shadow-[0_8px_40px_rgba(16,24,40,0.06)] lg:px-20">
            <div className="absolute top-0 left-1/2 flex h-[38px] w-[min(236px,calc(100%-2rem))] -translate-x-1/2 items-center justify-center rounded-b-[10px] bg-navy">
              <span className="text-[15px] tracking-[0.2em] text-white">★★★★★</span>
            </div>
            <div className="grid">
              {testimonials.map((entry, i) => (
                <p
                  key={entry.name}
                  className={`col-start-1 row-start-1 text-center text-[16px] leading-[1.7] text-[#2d3139] lg:text-[18px] ${
                    i === index ? "animate-fade-up visible" : "invisible"
                  }`}
                >
                  {entry.quote}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center">
              <Image
                src={item.avatar}
                alt=""
                width={60}
                height={60}
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
              <p className="mt-3 text-[12px] font-semibold text-[#2d3139]">{item.name}</p>
              <p className="text-[10px] text-muted-2">{item.role}</p>
              <div className="mt-5 flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === index ? "bg-navy" : "bg-gray-4"
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
