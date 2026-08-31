import Image from "next/image";

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
        className={`h-[38px] w-auto ${inverted ? "brightness-0 invert" : ""}`}
        priority
      />
    </span>
  );
}
