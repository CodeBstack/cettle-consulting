function IconSwap() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 6h10M11 3.5 13.5 6 11 8.5M15 12H5M7 9.5 4.5 12 7 14.5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M9.2 1.5 3.5 9h4.2L6.8 14.5 12.5 7H8.3L9.2 1.5Z" fill="white" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7" cy="6.2" r="2.2" stroke="white" strokeWidth="1.5" />
      <path d="M3.2 14c.4-2.3 2-3.6 3.8-3.6s3.4 1.3 3.8 3.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12.4" cy="6.6" r="1.8" stroke="white" strokeWidth="1.4" />
      <path d="M12 10.6c1.6.2 2.8 1.3 3.2 3.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const WAYS = [
  {
    titleTop: "Advisory",
    titleBot: "retainer",
    body: "Ongoing counsel on a monthly basis. We sit close enough to your leadership to see problems before they become public.",
    fit: "Organisations carrying continuous communication load or reputational exposure",
    icon: <IconSwap />,
    tone: "grey" as const,
  },
  {
    titleTop: "Project",
    titleBot: "engagement",
    body: "Fixed scope, fixed fee, defined end date. A launch, a crisis plan, a repositioning, a conference.",
    fit: "A specific outcome with a deadline attached",
    icon: <IconBolt />,
    tone: "green" as const,
  },
  {
    titleTop: "Training",
    titleBot: "programme",
    body: "Priced per cohort or per day, delivered in house or as open enrolment.",
    fit: "Building capability across a team rather than buying execution",
    icon: <IconUsers />,
    tone: "grey" as const,
  },
];

export function HowToWork() {
  return (
    <section id="work" className="bg-paper">
      <div className="site-pad py-16 md:py-24">
        <h2 className="text-center text-[36px] font-semibold tracking-[-0.03em] text-navy md:text-[56px]">
          How to work with us.
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[16px] text-muted md:text-[18px]">
          Three ways in. Every one of them is scoped in writing before work begins
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {WAYS.map((way) => (
            <article
              key={way.titleTop}
              className={`flex min-h-[420px] flex-col px-7 py-8 md:min-h-[480px] md:px-8 md:py-9 ${
                way.tone === "green" ? "bg-lime-mid" : "bg-chip"
              }`}
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-navy">
                {way.icon}
              </div>
              <h3 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-navy md:text-[40px]">
                {way.titleTop}
                <br />
                {way.titleBot}
              </h3>
              <p className="mt-5 text-[15px] leading-6 text-navy/80">{way.body}</p>
              <div className="mt-auto">
                <div className="mb-4 bg-lime-bar px-3 py-2 text-[13px] font-medium text-navy">
                  Best for
                </div>
                <p className="text-[14px] leading-5 text-navy/85">{way.fit}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
