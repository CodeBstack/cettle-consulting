import Image from "next/image";

const TEAM = [
  {
    name: "Charles Ebereonwu, PhD",
    title: "Principal Consultant and Trainer at CETTLE CONSULTING NIGERIA LIMITED.",
    image: "/images/team-charles.png",
    alt: "Portrait of Charles Ebereonwu",
  },
  {
    name: "Princess Anyanwu.",
    title: "Executive Assistant to Dr Charles",
    image: "/images/team-princess.png",
    alt: "Portrait of Princess Anyanwu",
  },
];

export function Team() {
  return (
    <section className="bg-lime-soft">
      <div className="site-pad grid items-start gap-10 py-16 md:grid-cols-[1fr_1.15fr] md:gap-12 md:py-20">
        <div className="md:pt-2">
          <p className="text-[22px] font-medium text-navy md:text-[28px]">The team</p>
          <h2 className="mt-4 max-w-[280px] text-[40px] font-semibold leading-[1.12] text-navy md:text-[64px] md:leading-[1.08]">
            The people doing the work.
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TEAM.map((person) => (
              <article key={person.name} className="bg-navy">
                <div className="relative aspect-[4/5] bg-navy">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    sizes="(min-width: 768px) 280px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="bg-lime px-5 py-5">
                  <h3 className="text-[20px] font-bold leading-snug text-navy">{person.name}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-navy">{person.title}</p>
                </div>
                <a
                  href="#contact"
                  className="block px-5 py-3 text-[14px] text-white"
                  style={{
                    background: "linear-gradient(90deg, #1b2a4a 0%, #b5e61d 100%)",
                  }}
                >
                  Read More
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <a href="/contact" className="bg-navy px-6 py-3 text-[15px] font-medium text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
