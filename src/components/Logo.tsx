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
        className={
          inverted
            ? "h-8 w-auto max-h-8 object-contain object-left brightness-0 invert mix-blend-screen sm:h-9 sm:max-h-9"
            : "h-8 w-auto max-h-8 object-contain object-left sm:h-9 sm:max-h-9"
        }
        priority
      />
    </span>
  );
}
