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

function IconBitcoin() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6.1 2.2v1.3M9.2 2.2v1.3M6.1 12.5v1.3M9.2 12.5v1.3M5.2 3.5h4.1c1.5 0 2.6.9 2.6 2.2 0 1-.5 1.7-1.4 2 .9.2 1.6 1.1 1.6 2.2 0 1.5-1.2 2.4-2.9 2.4H5.2V3.5Z"
        stroke="white"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M5.2 8h4.4" stroke="white" strokeWidth="1.45" />
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
    icon: <IconBitcoin />,
    fit: "Building capability across a team rather than buying execution",
    tone: "grey" as const,
  },
];

export function HowToWork() {
  return (
    <section id="work" className="bg-paper">
      <div className="site-pad py-16 md:py-24">
        <h2 className="text-center text-[36px] font-semibold tracking-[-0.03em] text-heading md:text-[52px]">
          How to work with us.
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[15px] text-muted md:text-[17px]">
          Three ways in. Every one of them is scoped in writing before work begins
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {WAYS.map((way) => (
            <article
              key={way.titleTop}
              className={`flex min-h-[400px] flex-col px-7 py-8 md:min-h-[460px] md:px-8 md:py-9 ${
                way.tone === "green" ? "bg-lime-mid" : "bg-chip"
              }`}
            >
              <div className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-navy">
                {way.icon}
              </div>
              <h3 className="text-[30px] leading-[1.08] font-semibold tracking-[-0.03em] text-heading md:text-[36px]">
                {way.titleTop}
                <br />
                {way.titleBot}
              </h3>
              <p className="mt-5 text-[14px] leading-6 text-heading/80 md:text-[15px]">{way.body}</p>
              <div className="mt-auto pt-10">
                <div className="mb-4 bg-lime-bar px-3 py-2 text-[13px] font-medium text-heading">
                  Best for
                </div>
                <p className="text-[14px] leading-5 text-heading/85">{way.fit}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
