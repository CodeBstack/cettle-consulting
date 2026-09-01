import Image from "next/image";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M50.5 16.2C46.2 9.4 38.4 5 29.5 5 16 5 5 16.1 5 29.8S16 54.6 29.5 54.6c8.9 0 16.7-4.4 21-11.2h-9.6c-3.1 4-8 6.4-13.4 6.4-10.2 0-16.6-7.6-16.6-20s6.4-20 16.6-20c5.4 0 10.3 2.5 13.4 6.4h9.6Z"
      />
      <path d="M5 33.8h11.2L11 46.2H5V33.8Z" fill="#b5e61d" />
    </svg>
  );
}

export function Logo({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Cettle Consulting"
        width={168}
        height={48}
        className={
          inverted
            ? "h-8 w-auto max-h-8 max-w-[min(168px,70vw)] object-contain object-left brightness-0 invert mix-blend-screen sm:h-9 sm:max-h-9"
            : "h-8 w-auto max-h-8 max-w-[min(168px,70vw)] object-contain object-left sm:h-9 sm:max-h-9"
        }
        priority
      />
    </span>
  );
}
