import Image from "next/image";
import Link from "next/link";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { HeroSlider } from "@/components/HeroSlider";
import { InsightsRow } from "@/components/InsightsRow";
import { LogoTicker } from "@/components/LogoTicker";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { WhoWeWorkWith } from "@/components/WhoWeWorkWith";
import { AngleUp, PracticeIcon } from "@/components/icons";
import {
  frictionPoints,
  pillars,
  practices,
  processSteps,
  stats,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <LogoTicker />

      <section className="bg-white">
        <div className="site-pad grid items-start gap-10 py-[78px] lg:grid-cols-[246px_845px] lg:justify-between">
          <h2 className="font-display max-w-[246px] text-[28px] leading-[1.35] font-semibold text-muted">
            Strategy, training, and execution under one roof.
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            {pillars.map((item, i) => (
              <article
                key={item.title}
                className={`p-2.5 hover:bg-[#e9ecef] hover:cursor-pointer bg-surface`}
              >
                <div className="p-2.5">
                  <h3 className="text-[14px] font-bold text-muted">{item.title}</h3>
                  <p className="mt-2.5 text-[12px] leading-4 font-light text-muted">
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="site-pad pt-16">
          <div className="grid gap-10 lg:grid-cols-[572px_290px] lg:items-start lg:justify-between">
            <h2 className="font-display text-[40px] leading-[1.22] font-light tracking-tight lg:text-[48px]">
              Most organisations are not{" "}
              <span className="text-lime">misunderstood</span> by accident.
            </h2>
            <p className="max-w-[290px] text-[14px] leading-[1.65] font-light">
              They are misunderstood because nobody owns the message, the leaders
              were never trained to carry it, and the moments that mattered were
              left to chance.
            </p>
          </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
          <div className="relative min-h-[260px] w-full overflow-hidden sm:min-h-[320px] lg:min-h-[440px]">
            <Image
              src="/images/misunderstood.jpg"
              alt="Team collaborating around a laptop"
              fill
              className="object-cover object-[center_35%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="grid gap-4 bg-lime sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-navy/10">
            {frictionPoints.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col gap-6 px-6 py-8 text-left transition-colors duration-300 hover:bg-lime-dark sm:px-7 sm:py-10 lg:gap-8 lg:px-8 lg:py-12"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy transition duration-300 group-hover:bg-navy group-hover:text-lime">
                  <AngleUp className="h-6 w-6" />
                </span>
                <h3 className="min-h-[3.4em] font-display text-[16px] leading-snug font-semibold text-navy md:text-[17px]">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.55] font-light text-navy/85 md:text-[14px] md:leading-[1.6]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f8f9fa]">
        <div className="site-pad grid gap-12 py-16 lg:grid-cols-[462px_579px] lg:items-start lg:justify-between">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-[12px] font-light text-ink">Practice areas</p>
              <h2 className="mt-3 font-display max-w-[467px] text-[40px] leading-[1.22] font-light text-ink lg:text-[48px]">
                Driving value through{" "}
                <span className="text-lime">strategic</span> services
              </h2>
              <p className="mt-5 max-w-[338px] text-[16px] leading-[1.5] text-muted">
                Every engagement is built to change how your organisation is heard,
                led, and remembered.
              </p>
            </div>
            <Button href="/services/communication-and-reputation" variant="dark" arrow className="mt-10 w-fit h-[38px] text-[12.5px] font-bold">
              Learn more
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-0">
            {practices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="flex h-[251px] flex-col justify-between bg-white p-[25px] text-left text-navy transition hover:bg-navy-mid hover:text-white hover:opacity-90"
              >
                <PracticeIcon
                  name={item.icon}
                  className="h-[31px] w-[31px]"
                />
                <div>
                  <h3 className="min-h-14 font-display text-[20px] leading-7 font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-4 font-light">
                    {item.copy}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-pad py-16 lg:pt-[59px] lg:pb-[63px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display max-w-[484px] text-[36px] leading-[1.3] font-light text-navy">
              A short, disciplined process. No long discovery for its own sake.
            </h2>
            <p className="text-[12px] font-light text-ink">Four steps.</p>
          </div>
          <div className="mt-[78px] grid gap-4 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.title} className="relative h-[360px] overflow-hidden lg:h-[374px]">
                <Image src={step.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 flex h-[180px] flex-col bg-navy/92 px-7 py-6 text-white">
                  <h3 className="font-display text-[20px] leading-7 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[12px] leading-4 font-light text-white/95">
                    {step.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Button variant="mid" className="mt-7 h-10 min-w-[186px] text-[16px]">
            Contact Us
          </Button>
        </div>
      </section>

      <WhoWeWorkWith />

      <section className="bg-navy">
        <div className="site-pad grid lg:grid-cols-[647px_1fr]">
          <div className="relative min-h-[280px] w-full overflow-hidden lg:h-[653px]">
            <Image
              src="/images/team.jpg"
              alt="Colleagues collaborating"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-between py-14 text-white lg:py-16 lg:pl-12">
            <div>
              <h2 className="font-display max-w-[651px] text-[40px] leading-[1.22] font-light lg:text-[48px]">
                Built on experience that predates the{" "}
                <span className="text-lime">company.</span>
              </h2>
              <p className="mt-5 max-w-[541px] text-[14px] leading-[1.55] font-light">
                Cettle Consulting Limited was registered in 2026. The practice
                behind it was not. This is the track record we bring to the table.
              </p>
            </div>
            <div className="mt-12 grid max-w-[449px] grid-cols-2 gap-x-10 gap-y-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[48px] leading-none font-light text-lime">
                    <AnimatedNumber value={stat.value} />
                  </p>
                  <p className="mt-1 max-w-[169px] text-[14px] font-light text-gray-4">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <InsightsRow />

      <section className="relative overflow-hidden bg-navy">
        <Image
          src="/images/contact-pattern.jpg"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="relative site-pad py-16 lg:py-[50px]">
          <div className="grid bg-white p-8 shadow-sm lg:grid-cols-[350px_382px] lg:items-start lg:justify-between lg:p-12">
            <div>
              <h2 className="font-display text-[40px] font-medium text-black">Contact us</h2>
              <p className="mt-4 max-w-[280px] text-[12px] leading-5 text-[#333]">
                We are committed to processing the information in order to contact
                you and talk about your project.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
