import { Logo } from "./Logo";

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 1.8c-2.9 0-5.2 2.2-5.2 5.1 0 3.8 5.2 9.3 5.2 9.3s5.2-5.5 5.2-9.3c0-2.9-2.3-5.1-5.2-5.1Z"
        stroke="#b5e61d"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="6.8" r="1.6" stroke="#b5e61d" strokeWidth="1.5" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2.2 9 16 2.5 12.2 15.5 8.4 10.2 2.2 9Z" stroke="#b5e61d" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.4 10.2 16 2.5" stroke="#b5e61d" strokeWidth="1.5" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2.4" y="3.6" width="13.2" height="12" rx="1.4" stroke="#b5e61d" strokeWidth="1.5" />
      <path d="M2.4 7.2h13.2M6 2.4v2.4M12 2.4v2.4" stroke="#b5e61d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Twitter", href: "https://x.com" },
  { label: "Linkedin", href: "https://www.linkedin.com" },
];

const FOOT_NAV = ["Home", "About", "Project", "Feedback", "Blog", "Contact"];

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="site-pad pt-16 pb-8 md:pt-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-[48px] font-semibold leading-[1.05] tracking-[-0.04em] text-lime md:text-[96px] md:leading-[0.98]">
              Want to Start
              <br />
              a Project?
            </h2>
            <a
              href="mailto:info@cettle.com"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-white px-5 py-3 text-[15px] font-medium text-navy"
            >
              Book a consultation
              <span aria-hidden>→</span>
            </a>
          </div>
          <ul className="space-y-3 text-[18px] md:pt-3 md:text-right">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-lime">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-16 space-y-4 text-[15px] md:mt-20 md:text-[17px]">
          <li className="flex items-start gap-3">
            <span className="mt-0.5">
              <PinIcon />
            </span>
            <span>Morningside 3, Michelle Court, Millennium Homes, Oniru, Victoria Island, Lagos.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5">
              <SendIcon />
            </span>
            <span>
              <a href="mailto:info@cettle.com" className="hover:text-lime">
                info@cettle.com
              </a>
              <span className="mx-3 hidden sm:inline" />
              {"  "}
              <a href="tel:+2349068000571" className="hover:text-lime">
                0906 800 0571
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5">
              <CalIcon />
            </span>
            <span>Monday to Friday, 9:00 to 17:00 | Saturday by appointment.</span>
          </li>
        </ul>

        <div className="mt-16 flex flex-col gap-6 md:mt-20 md:flex-row md:items-center md:justify-between">
          <Logo invert />
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[16px]" aria-label="Footer">
            {FOOT_NAV.map((item) => (
              <a key={item} href={item === "Contact" ? "#contact" : "/"} className="hover:text-lime">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 h-px w-full bg-white" />
      </div>
    </footer>
  );
}
