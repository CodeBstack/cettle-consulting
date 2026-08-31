import Image from "next/image";
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
        <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-6 py-[78px] lg:grid-cols-[246px_845px] lg:justify-between lg:px-[80px] xl:px-[80px]">
          <h2 className="font-display max-w-[246px] text-[28px] leading-[1.35] font-semibold text-muted">
            Strategy, training, and execution under one roof.
          </h2>
          <div className="grid sm:grid-cols-3">
            {pillars.map((item, i) => (
              <article
                key={item.title}
                className={`p-2.5 ${i === 1 ? "bg-[#e9ecef]" : "bg-surface"}`}
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
        <div className="mx-auto max-w-[1440px] px-6 pt-16 lg:px-[151px] lg:pt-16">
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
        <div className="mx-auto mt-10 grid max-w-[1440px] lg:grid-cols-[611px_1fr]">
          <div className="relative min-h-[320px] lg:h-[429px]">
            <Image
              src="/images/misunderstood.jpg"
              alt="Team collaborating around a laptop"
              fill
              className="object-cover"
              sizes="611px"
            />
          </div>
          <div className="grid sm:grid-cols-3">
            {frictionPoints.map((copy, i) => (
              <article
                key={copy}
                className={`flex flex-col gap-[43px] p-5 ${
                  i === 1 ? "bg-lime-dark" : "bg-lime"
                }`}
              >
                <AngleUp className="h-10 w-10" />
                <p className="max-w-[185px] text-[12px] leading-[1.5] font-light text-navy">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-[462px_579px] lg:items-start lg:justify-between lg:px-[80px] lg:py-16">
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
            <Button href="/#services" variant="dark" arrow className="mt-10 w-fit h-[38px] text-[12.5px] font-bold">
              Learn more
            </Button>
          </div>
          <div className="grid sm:grid-cols-2">
            {practices.map((item) => (
              <article
                key={item.title}
                className={`flex h-[251px] flex-col justify-between p-[25px] ${
                  item.featured ? "bg-navy-mid text-white" : "bg-white text-navy"
                }`}
              >
                <PracticeIcon
                  name={item.icon}
                  className={`h-[31px] w-[31px] ${item.featured ? "text-white" : "text-navy"}`}
                />
                <div>
                  <h3 className="font-display text-[20px] font-semibold leading-7">{item.title}</h3>
                  <p
                    className={`mt-2 text-[12px] leading-4 font-light ${
                      item.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[152px] lg:pt-[59px] lg:pb-[63px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display max-w-[484px] text-[36px] leading-[1.3] font-light text-navy">
              A short, disciplined process. No long discovery for its own sake.
            </h2>
            <p className="text-[12px] font-light text-ink">Four steps.</p>
          </div>
          <div className="mt-[78px] grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.title} className="relative h-[374px] overflow-hidden">
                <Image src={step.image} alt="" fill className="object-cover" sizes="284px" />
                <div className="absolute inset-x-0 bottom-0 bg-navy/92 px-7 py-6 text-white">
                  <h3 className="font-display text-[20px] font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[12px] leading-4 font-light text-white/95">
                    {step.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Button variant="mid" className="mt-7 h-10 min-w-[186px] text-[16px]">
            Book a Consultation
          </Button>
        </div>
      </section>

      <WhoWeWorkWith />

      <section className="bg-navy">
        <div className="grid lg:grid-cols-[647px_1fr]">
          <div className="relative min-h-[420px] lg:h-[653px]">
            <Image
              src="/images/team.jpg"
              alt="Colleagues collaborating"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-between px-6 py-14 text-white lg:px-12 lg:py-16">
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
                    {stat.value}
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
        <div className="relative mx-auto max-w-[1080px] px-6 py-16 lg:py-[50px]">
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
