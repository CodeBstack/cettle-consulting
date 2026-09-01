import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { officePhone, officialEmails, socialLinks } from "@/data/site";
import { PhoneIcon, SocialIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="bg-navy">
      <div className="site-pad grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="text-white">
          <h1 className="font-display text-[40px] font-semibold tracking-tight lg:text-[52px]">
            Contact us
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-7 text-white/75">
            Tell us what is at stake. We will tell you whether Cettle is the right room for it.
          </p>
          <div className="mt-10 space-y-6 text-[15px] leading-7 text-white/80">
            <p>
              Victoria Island
              <br />
              Lagos, Nigeria
            </p>
            <p className="space-y-1">
              {officialEmails.map((email) => (
                <a key={email.href} href={email.href} className="block hover:text-lime">
                  {email.label}
                </a>
              ))}
            </p>
            <p>
              <a href={officePhone.href} className="inline-flex items-center gap-2 hover:text-lime">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                {officePhone.label}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-lime"
                >
                  <SocialIcon name={item.icon} />
                  {item.label}
                </a>
              ))}
            </p>
          </div>
        </div>
        <ContactForm tone="dark" />
      </div>
    </section>
  );
}
