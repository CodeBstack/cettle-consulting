export function ArrowRight({ className = "h-[14px] w-[14px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 12" className={className} fill="none" aria-hidden>
      <path
        d="M1 6h12M8 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeft({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden>
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden>
      <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AngleUp({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path d="M8 24 20 12l12 12" stroke="#101828" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PracticeIcon({
  name,
  className = "h-[31px] w-[31px]",
}: {
  name: "chart" | "head" | "network" | "tree";
  className?: string;
}) {
  const stroke = "currentColor";
  if (name === "chart") {
    return (
      <svg viewBox="0 0 32 31" className={className} fill="none" aria-hidden>
        <path d="M4 27h24M8 22v-6M16 22V8M24 22v-10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "head") {
    return (
      <svg viewBox="0 0 32 31" className={className} fill="none" aria-hidden>
        <path
          d="M10 20c0-5 3-9 6.5-9s6.5 4 6.5 9M10 20c-2 1-3 3-3 5h19c0-2-1-4-3-5M16.5 11V8"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="16.5" cy="14" r="1.2" fill={stroke} />
      </svg>
    );
  }
  if (name === "network") {
    return (
      <svg viewBox="0 0 32 31" className={className} fill="none" aria-hidden>
        <circle cx="16" cy="8" r="3" stroke={stroke} strokeWidth="1.6" />
        <circle cx="7" cy="23" r="3" stroke={stroke} strokeWidth="1.6" />
        <circle cx="25" cy="23" r="3" stroke={stroke} strokeWidth="1.6" />
        <path d="m13.5 10.5-6 10M18.5 10.5 24.5 20.5M10 23h12" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 31" className={className} fill="none" aria-hidden>
      <path d="M16 4v23M16 14c6-4 9-4 11-2M16 18c-6-3-9-2-11 0" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-[17px] w-[17px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 21" className={className} fill="currentColor" aria-hidden>
      <path d="M8.5 0C3.8 0 0 3.7 0 8.3c0 5.7 7.4 12.2 7.7 12.5.2.2.5.3.8.3s.6-.1.8-.3c.3-.3 7.7-6.8 7.7-12.5C17 3.7 13.2 0 8.5 0Zm0 11.2A2.9 2.9 0 1 1 8.5 5.4a2.9 2.9 0 0 1 0 5.8Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-[19px] w-[21px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 21 19" className={className} fill="none" aria-hidden>
      <rect x="1" y="3" width="19" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m2 5 8.5 6L19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function StarFour({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
      <path d="M8 0c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6Z" />
    </svg>
  );
}
