import Image from "next/image";

export function PageHero({
  label,
  image,
}: {
  label: string;
  image: string;
}) {
  return (
    <section className="relative h-[340px] overflow-hidden lg:h-[420px]">
      <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative mx-auto flex h-full max-w-[1440px] items-start px-6 pt-10 lg:px-12">
        <h1 className="font-display text-[32px] font-semibold tracking-tight text-navy lg:text-[40px]">
          {label}
        </h1>
      </div>
    </section>
  );
}
