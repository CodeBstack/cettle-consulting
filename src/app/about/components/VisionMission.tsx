import Image from "next/image";

export function VisionMission() {
  return (
    <section className="navy-mesh pb-24 pt-4">
      <div className="site-pad space-y-16 md:space-y-24">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr] md:gap-16">
          <div className="relative w-full max-w-[360px]">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/vision-dart.png"
                alt="Dart hitting the bullseye"
                fill
                sizes="(min-width: 768px) 360px, 90vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden
              className="absolute -bottom-3 -right-3 h-[72%] w-[72%] border-b-[10px] border-r-[10px] border-lime"
            />
          </div>
          <div>
            <div className="mb-6 flex items-center gap-4">
              <h2 className="shrink-0 text-[23px] font-semibold text-lime">Our Vision</h2>
              <span className="h-px flex-1 bg-white/35" />
            </div>
            <p className="max-w-[440px] text-[20px] leading-[1.45] text-white md:text-[23px]">
              To help businesses and individuals grow through clear communication,
              practical training, and strategic support.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,420px)] md:gap-16">
          <div className="md:order-1 md:text-right">
            <div className="mb-6 flex items-center gap-4">
              <span className="hidden h-px flex-1 bg-white/35 md:block" />
              <h2 className="shrink-0 text-[23px] font-semibold text-lime">Our Mission</h2>
              <span className="h-px flex-1 bg-white/35 md:hidden" />
            </div>
            <p className="ml-auto max-w-[440px] text-[20px] leading-[1.45] text-white md:text-[23px]">
              To become one of Africa&apos;s most trusted consulting firms for
              communication, leadership, and professional development.
            </p>
          </div>
          <div className="relative w-full max-w-[420px] justify-self-end md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/mission-sphere.png"
                alt="Polished metallic sphere on concentric rings"
                fill
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden
              className="absolute -bottom-3 -left-3 h-[72%] w-[72%] border-b-[10px] border-l-[10px] border-lime"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
