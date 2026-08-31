import Image from "next/image";

const PRACTICES = [
  {
    title: "Communication and Reputation",
    body: "Corporate communication, crisis communication, public relations, media relations, reputation management, stakeholder engagement",
    image: "/images/practice-comms.png",
    alt: "Hand holding a megaphone through a circular cutout",
  },
  {
    title: "Leadership and Executive Development",
    body: "Leadership training, executive coaching, executive speech writing, executive interview and media preparation, professional development training, entrepreneurship training",
    image: "/images/practice-leadership.png",
    alt: "Chess king among fallen pieces",
  },
  {
    title: "Events and Convening",
    body: "Conference and summit management, workshops and seminars, corporate and stakeholder events, speaker curation, run of show and production management",
    image: "/images/practice-events.png",
    alt: "Circular auditorium seating",
  },
  {
    title: "Brand and Audience Strategy",
    body: "Brand positioning, message architecture, audience research, audience engagement, internal communication",
    image: "/images/practice-brand.png",
    alt: "Black spheres clustered around a light",
  },
];

function PracticeCard({
  title,
  body,
  image,
  alt,
}: (typeof PRACTICES)[number]) {
  return (
    <article className="overflow-hidden bg-navy-deep">
      <div className="px-7 py-8 md:px-8 md:py-9">
        <h3 className="text-[24px] font-semibold leading-snug text-lime md:text-[26px]">{title}</h3>
        <p className="mt-4 text-[14px] leading-6 text-white/90 md:text-[15px]">{body}</p>
      </div>
      <div className="relative h-[180px] grayscale md:h-[210px]">
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
    </article>
  );
}

export function Practices() {
  return (
    <section id="practices" className="bg-white">
      <div className="site-pad py-16 md:py-24">
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-4 inset-y-8 hidden rounded-sm border border-dashed border-black/20 md:block" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
            <div className="md:pr-8">
              <PracticeCard {...PRACTICES[0]} />
            </div>
            <div className="md:pt-2">
              <h2 className="mb-10 max-w-[420px] text-[40px] font-semibold leading-[1.12] tracking-[-0.03em] text-navy md:mb-12 md:text-[58px]">
                Four practices, built
                <br />
                to work <span className="font-medium text-together">together.</span>
              </h2>
              <PracticeCard {...PRACTICES[1]} />
            </div>
            <div className="relative md:pl-16">
              <span
                aria-hidden
                className="absolute top-[-48px] left-6 hidden h-[72px] border-l border-dashed border-black/25 md:block"
              />
              <PracticeCard {...PRACTICES[2]} />
            </div>
            <div>
              <PracticeCard {...PRACTICES[3]} />
            </div>
          </div>
          <div className="mt-10">
            <a
              href="/consultation"
              className="inline-flex items-center gap-2 rounded-md bg-black px-7 py-3 text-[15px] font-medium text-white"
            >
              Learn more
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
