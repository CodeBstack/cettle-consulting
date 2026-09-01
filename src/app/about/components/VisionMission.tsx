import Image from "next/image";

function LimeCorner({
  side,
}: {
  side: "right" | "left";
}) {
  return (
    <span
      aria-hidden
      className={`absolute bottom-0 h-[62%] w-[62%] bg-lime ${
        side === "right" ? "right-0" : "left-0"
      }`}
    />
  );
}

export function VisionMission() {
  return (
    <section className="navy-mesh overflow-hidden pt-10 pb-24 md:pt-6 md:pb-32">
      <div className="site-pad space-y-20 md:space-y-28">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16 lg:gap-24">
          <div className="relative pb-3 pr-3">
            <LimeCorner side="right" />
            <div className="relative aspect-square overflow-hidden bg-navy-deep">
              <Image
                src="/images/vision-dart.jpg"
                alt="Dart hitting the bullseye"
                fill
                sizes="(min-width: 768px) 380px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <div className="mb-7 flex items-center gap-5 mr-[calc(-1*clamp(20px,5.55vw,80px))]">
              <h2 className="shrink-0 text-[22px] font-semibold text-lime md:text-[24px]">
                Our Vision
              </h2>
              <span className="h-px flex-1 bg-white/35" />
            </div>
            <p className="max-w-[460px] text-[18px] leading-[1.5] font-light text-white md:text-[22px] md:leading-[1.45]">
              To help businesses and individuals grow through clear communication,
              practical training, and strategic support.
            </p>
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[1fr_minmax(0,420px)] md:gap-16 lg:gap-24">
          <div className="md:order-1 md:text-right">
            <div className="mb-7 flex items-center gap-5 ml-[calc(-1*clamp(20px,5.55vw,80px))]">
              <span className="h-px flex-1 bg-white/35" />
              <h2 className="shrink-0 text-[22px] font-semibold text-lime md:text-[24px]">
                Our Mission
              </h2>
            </div>
            <p className="ml-auto max-w-[460px] text-[18px] leading-[1.5] font-light text-white md:text-[22px] md:leading-[1.45]">
              To become one of Africa&apos;s most trusted consulting firms for
              communication, leadership, and professional development.
            </p>
          </div>
          <div className="relative w-full pb-3 pl-3 md:order-2">
            <LimeCorner side="left" />
            <div className="relative aspect-square overflow-hidden bg-navy-deep">
              <Image
                src="/images/mission-sphere.jpg"
                alt="Polished metallic sphere on concentric rings"
                fill
                sizes="(min-width: 768px) 420px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
