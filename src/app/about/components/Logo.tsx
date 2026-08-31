type LogoProps = {
  compact?: boolean;
  invert?: boolean;
};

export function Logo({ compact = false, invert = false }: LogoProps) {
  const navy = invert ? "#ffffff" : "#1b2a4a";
  const sub = invert ? "rgba(255,255,255,0.72)" : "#7a8494";
  const size = compact ? 38 : 44;

  return (
    <a href="/" className="flex items-center gap-2.5" aria-label="CETTLE Consulting">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          fill={navy}
          fillRule="evenodd"
          d="M50.5 16.2C46.2 9.4 38.4 5 29.5 5 16 5 5 16.1 5 29.8S16 54.6 29.5 54.6c8.9 0 16.7-4.4 21-11.2h-9.6c-3.1 4-8 6.4-13.4 6.4-10.2 0-16.6-7.6-16.6-20s6.4-20 16.6-20c5.4 0 10.3 2.5 13.4 6.4h9.6Z"
        />
        <path d="M5 33.8h11.2L11 46.2H5V33.8Z" fill="#b5e61d" />
      </svg>
      <span className="leading-[1.05]">
        <span
          className="block font-bold uppercase tracking-[0.18em]"
          style={{ color: navy, fontSize: compact ? 14 : 16 }}
        >
          CETTLE
        </span>
        <span className="block font-normal" style={{ color: sub, fontSize: compact ? 11 : 12 }}>
          Consulting
        </span>
      </span>
    </a>
  );
}
