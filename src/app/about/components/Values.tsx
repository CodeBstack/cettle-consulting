function ValueIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="4" height="16" rx="0.5" fill="#4b5563" />
      <path d="M9 5h10M9 10h8M9 15h6" stroke="#4b5563" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const VALUES = [
  {
    title: "Excellence",
    body: "We would rather deliver late and right than early and thin.",
    highlight: true,
  },
  {
    title: "Growth",
    body: "Every engagement should leave your team more capable than we met them.",
  },
  {
    title: "Integrity",
    body: "We tell clients what we would not do, including when the answer is not to hire us.",
  },
  {
    title: "Collaboration",
    body: "We work inside your team, not above it.",
  },
  {
    title: "Innovation",
    body: "We test new formats and retire what stops working, including our own material.",
  },
  {
    title: "Impact",
    body: "We agree what success looks like before we start, then measure it at the end.",
  },
];

export function Values() {
  return (
    <section className="bg-mist">
      <div className="site-pad py-16 md:py-20">
        <h2 className="mb-10 text-[28px] font-semibold text-navy md:text-[32px]">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {VALUES.map((item, index) => (
            <article
              key={item.title}
              className={`border-b border-black/10 px-6 py-10 sm:px-10 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${item.highlight ? "bg-lime-card" : "bg-transparent"}`}
            >
              <ValueIcon />
              <h3 className="mt-5 text-[22px] font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 max-w-[420px] text-[16px] leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
