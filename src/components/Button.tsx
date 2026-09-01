
import Link from "next/link";
import { ArrowRight } from "./icons";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "navy" | "mid" | "dark" | "ghost" | "white" | "outline";
  className?: string;
  arrow?: boolean;
};

const styles = {
  navy: "bg-navy text-white hover:bg-navy-deep",
  mid: "bg-navy-mid text-white hover:bg-navy",
  dark: "bg-ink text-white hover:bg-black",
  ghost:
    "border border-white/90 bg-transparent text-white hover:bg-white hover:text-navy",
  white: "bg-white text-ink hover:bg-surface",
  outline:
    "border border-[#cfcfcf] bg-transparent text-navy hover:border-navy",
};

export function Button({
  href = "/contact",
  children,
  variant = "navy",
  className = "",
  arrow = false,
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex h-10 items-center justify-center gap-2.5 rounded-[3px] px-[13px] text-[13.5px] font-medium tracking-wide transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow ? <ArrowRight className="h-3.5 w-3.5" /> : null}
    </Link>
  );
}
