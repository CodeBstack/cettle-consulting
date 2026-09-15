import Image from "next/image";

type WhatYouGetProps = {
  image: string;
  imageAlt?: string;
  deliverables: string[];
};

export function WhatYouGet({
  image,
  imageAlt = "",
  deliverables,
}: WhatYouGetProps) {
  return (
    <section className="bg-[#f3f3f3]">
      <div className="grid lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:items-stretch">
        <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px] lg:min-h-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="absolute inset-0 h-full w-full object-cover object-center"
            sizes="(min-width: 1024px) 32vw, 100vw"
          />
        </div>
        <div className="px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-heading md:text-[40px]">
            What you get
          </h2>
          <ul className="mt-8 space-y-4">
            {deliverables.map((line) => (
              <li key={line}>
                <p className="bg-white px-6 py-5 text-[14px] leading-6 text-heading md:px-10 md:py-6 md:text-[16px]">
                  <span className="inline-block max-w-[36rem] px-2 py-1">{line}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
