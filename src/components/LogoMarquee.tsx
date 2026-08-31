import { partners } from "@/data/site";

function Mark({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-8 text-[#9aa3ad]">
      <svg viewBox="0 0 28 28" className="h-7 w-7" fill="currentColor" aria-hidden>
        <circle cx="14" cy="14" r="13" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 18.5c2.2-4.8 4.4-7.2 6-7.2s3.8 2.4 6 7.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="14" cy="9" r="2.1" />
      </svg>
      <span className="font-display text-[18px] font-semibold tracking-[-0.02em]">
        {name}
      </span>
    </span>
  );
}

export function LogoMarquee() {
  const row = [...partners, ...partners];

  return (
    <div className="overflow-hidden border-y border-line bg-[#f3f3f3]">
      <div className="flex animate-marquee items-center gap-10 py-5 whitespace-nowrap">
        {row.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-10">
            <Mark name={name} />
            <span className="text-lg text-[#c5c9ce]" aria-hidden>
              +
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
