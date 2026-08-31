import { StarFour } from "./icons";

const logos = Array.from({ length: 12 }, (_, i) => i);

export function LogoTicker() {
  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden bg-white">
      <div className="animate-ticker flex w-max items-center gap-[13px] py-[13px] pr-4">
        {items.map((_, i) => (
          <span key={i} className="flex items-center gap-[13px] text-gray-4">
            <span className="inline-flex items-center gap-2 opacity-80">
              <span className="grid h-[17px] w-[17px] place-items-center rounded-full border border-gray-4">
                <span className="h-2 w-2 rounded-full bg-gray-4" />
              </span>
              <span className="text-[13px] font-medium tracking-wide text-gray-4">
                Logospecimen
              </span>
            </span>
            <StarFour className="h-3.5 w-3.5" />
          </span>
        ))}
      </div>
    </div>
  );
}
