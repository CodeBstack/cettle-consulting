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

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 3.2c.4-.4 1-.5 1.5-.3l2.3 1c.5.2.8.7.8 1.2v2.2c0 .5-.3 1-.8 1.2l-1.1.5c.7 1.4 1.7 2.6 3 3.5l.5-1.1c.2-.5.7-.8 1.2-.8h2.2c.5 0 1 .3 1.2.8l1 2.3c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C10.4 17.5 6.5 13.6 5.1 8.2c-.1-.6.1-1.2.5-1.6l1-1.4Z" />
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

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.87 6.48 1.87 12.07c0 5.02 3.68 9.18 8.49 9.93v-7.02H7.9v-2.91h2.46V9.85c0-2.43 1.45-3.77 3.66-3.77 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.58.75-1.58 1.52v1.82h2.69l-.43 2.91h-2.26V22c4.81-.75 8.49-4.91 8.49-9.93Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25Zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75Zm5.13-2.88a1.13 1.13 0 1 1-1.13 1.13 1.13 1.13 0 0 1 1.13-1.13Z" />
    </svg>
  );
}

export function SocialIcon({
  name,
  className = "h-5 w-5",
}: {
  name: "facebook" | "instagram";
  className?: string;
}) {
  if (name === "facebook") return <FacebookIcon className={className} />;
  return <InstagramIcon className={className} />;
}

export function CalendarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronLeftSmall({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none" aria-hidden>
      <path
        d="M9 2.5 4.5 7 9 11.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NewsletterWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 900"
      className={className}
      fill="none"
      aria-hidden
      preserveAspectRatio="xMinYMid slice"
    >
      {Array.from({ length: 14 }, (_, i) => {
        const r = 40 + i * 28;
        return (
          <ellipse
            key={r}
            cx="8"
            cy="450"
            rx={r}
            ry={r * 1.15}
            stroke="currentColor"
            strokeWidth="1.2"
          />
        );
      })}
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
