import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import {
  getNextPractice,
  getPractice,
  practiceDetails,
  servicePath,
} from "@/data/practices";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return practiceDetails.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPractice(slug);
  return { title: item?.title ?? "Practice" };
}

function ClipIcon() {
  return (
    // <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    //   <rect x="6" y="3" width="10" height="3" rx="0.6" stroke="#1b2a4a" strokeWidth="1.5" />
    //   <rect x="4" y="5" width="14" height="14" rx="1.2" stroke="#1b2a4a" strokeWidth="1.5" />
    //   <path d="M7.5 10h7M7.5 13h7M7.5 16h4.5" stroke="#1b2a4a" strokeWidth="1.5" strokeLinecap="round" />
    // </svg>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_90_177)">
<path d="M5.82203 1.16431H1.16441C0.521654 1.16431 0 1.68596 0 2.32871V25.6168C0 26.2596 0.521654 26.7813 1.16441 26.7813H5.82203V1.16431Z" fill="#444444"/>
<path d="M8.15039 1.16431V26.7813H26.7809C27.4237 26.7813 27.9453 26.2596 27.9453 25.6168V2.32871C27.9453 1.68596 27.4237 1.16431 26.7809 1.16431H8.15039ZM12.808 5.82193H16.3012V8.15075H12.808V5.82193ZM16.3012 22.1236H12.808V19.7948H16.3012V22.1236ZM19.7945 17.466H15.1368V15.1372H19.7945V17.466ZM23.2877 12.8084H16.3012V10.4796H23.2877V12.8084Z" fill="#444444"/>
</g>
<defs>
<clipPath id="clip0_90_177">
<rect width="27.9458" height="27.9458" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}


export default async function PracticePage({ params }: Props) {
  const { slug } = await params;
  const item = getPractice(slug);
  if (!item) notFound();

  const next = getNextPractice(slug);

  return (
    <>
      <section className="overflow-hidden bg-[#E6E7E8]">
        <div className="pt-10 lgpt-20 grid lg:grid-cols-2 items-start lg:items-stretch">
          <div className="relative min-h-[260px] w-full overflow-hidden bg-[#1a1a1a] lg:min-h-[680px]">
            <Image
              src={item.heroImage}
              alt={item.imageAlt}
              fill
              priority
              className={`object-cover ${item.heroObject}`}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative flex flex-col items-start pt-12 pr-8 pb-20 pl-8 sm:pl-12 lg:pt-[120px] lg:pr-16 lg:pb-24 lg:pl-[64px] xl:pr-24">
          
            <p className="relative text-[16px] font-semibold text-navy md:text-[18px]">
              {item.title}
            </p>
            <h1 className="relative mt-5 max-w-[540px] text-[36px] leading-[1.12] font-light tracking-[-0.02em] text-[#838C95] sm:text-[44px] lg:text-[56px]">
              {item.headline}
            </h1>
            <p className="relative mt-6 max-w-[420px] text-[14px] leading-[1.7] text-[#707070] md:text-[15px]">
              {item.summary}
            </p>
            <Button
              href="/contact"
              className="relative mt-8 h-11 w-fit min-w-[196px] rounded-[3px] px-6 text-[14px] font-medium"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="navy-mesh">
        <div className="site-pad py-16 md:py-24">
          <h2 className="text-[36px] font-semibold tracking-[-0.03em] text-white md:text-[52px]">
            What we do
          </h2>
          <div className="mt-10 space-y-4">
            {item.whatWeDo.map((offer) => (
              <article key={offer.title} className="bg-[#e8e8e8] px-6 py-7 md:px-10 md:py-8">
                <ClipIcon />
                <h3 className="mt-4 text-[18px] font-semibold text-heading md:text-[20px]">{offer.title}</h3>
                <p className="mt-2 max-w-[820px] text-[14px] leading-6 text-[#4a4a4a] md:text-[15px] md:leading-7">
                  {offer.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="relative h-[180px] overflow-hidden sm:h-[240px] md:h-[300px]">
          <Image
            src={item.engagement.studio}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="site-pad grid items-start gap-10 py-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] md:gap-14 md:py-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface">
            <Image
              src={item.engagement.photo}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-heading md:text-[40px]">
              How the engagement runs
            </h2>
            <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {item.engagement.steps.map((step) => (
                <div key={step.title}>
                  <h3 className="text-[16px] font-semibold text-heading md:text-[18px]">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#4a4a4a] md:text-[14px]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3]">
        <div className="grid lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
          <div className="relative min-h-[220px] lg:min-h-full">
            <Image
              src="/images/practice-mosaic.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="32vw"
            />
          </div>
          <div className="px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-heading md:text-[40px]">
              What you get
            </h2>
            <ul className="mt-8 space-y-4">
              {item.deliverables.map((line, index) => (
                <li key={line}>
                  <p
                    className={`bg-white px-6 py-5 textcenter text-[14px] leading-6 text-heading md:px-10 md:py-6 md:text-[16px]
                       `}
                  >
                    <span
                      className={`inline-block max-w-[36rem]  px-2 py-1`}
                    >
                      {line}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-[#3d5a2a] to-lime" />
        <div className="navy-mesh absolute inset-0 opacity-25 mix-blend-overlay" />
        <div className="relative site-pad flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16">
            <h2 className="shrink-0 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">
              Who this is for
            </h2>
            <p className="max-w-[520px] text-[14px] leading-[1.7] text-white md:text-[15px]">
              {item.audience.join(" ")}
            </p>
          </div>
          <Button
            href={servicePath(next.slug)}
            className="h-11 shrink-0 rounded-[4px] px-6 text-[14px]"
          >
            Other Service
          </Button>
        </div>
      </section>
    </>
  );
}
