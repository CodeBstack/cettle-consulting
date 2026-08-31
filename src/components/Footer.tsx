import Link from "next/link";
import { CalendarIcon, MailIcon, PinIcon } from "./icons";
import { Button } from "./Button";
import { Logo } from "./Logo";

const socials = ["Instagram", "Behance", "Dribbble", "Twitter", "Linkedin"];
const footerNav = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Feedback" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Blog" },
  { href: "/work", label: "Project" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[104px] lg:py-[64px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-[56px] leading-[1.15] font-light tracking-tight text-lime sm:text-[72px] lg:text-[92px]">
              Want to Start
              <br />a Project?
            </p>
            <Button variant="white" href="/consultation" arrow className="mt-[30px] h-[38px] text-[12.5px] font-bold">
              Book a consultation
            </Button>
          </div>
          <ul className="space-y-2 text-[16.5px] leading-7">
            {socials.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-lime">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[90px] space-y-[13px] text-[14px] leading-5">
          <p className="flex items-start gap-[13px]">
            <PinIcon className="mt-0.5 h-[17px] w-[17px] shrink-0 text-lime" />
            <span>Morningside 3, Michelle Court, Millennium Homes, Oniru, Victoria Island, Lagos.</span>
          </p>
          <p className="flex items-center gap-[9px]">
            <MailIcon className="h-[19px] w-[21px] shrink-0 text-lime" />
            <a href="mailto:info@cettle.com" className="hover:text-lime">
              info@cettle.com
            </a>
            <span>0906 800 0571</span>
          </p>
          <p className="flex items-center gap-[6px]">
            <CalendarIcon className="h-6 w-6 shrink-0 text-lime" />
            <span>Monday to Friday, 9:00 to 17:00 &nbsp;|&nbsp; Saturday by appointment.</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo inverted />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {footerNav.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-lime">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
