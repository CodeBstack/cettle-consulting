export const workCategories = [
  "Reputation and Crisis",
  "Leadership",
  "Communication",
  "Brand and Audience",
  "Events and Convening",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export type WorkItem = {
  slug: string;
  category: WorkCategory;
  label: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  cover: string;
  gallery: [string, string, string, string];
};

export const workItems: WorkItem[] = [
  {
    slug: "naec-chevron-capacity-training",
    category: "Events and Convening",
    label: "EVENTS",
    date: "18 March 2023",
    title: "How to make a Game look more attractive with New VR & AI Technology",
    excerpt:
      "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
    body: [
      "The Association of Energy Correspondents of Nigeria needed a day that did more than fill a hall. The brief was a room in which correspondents could hear a serious argument about the energy landscape, ask unscripted questions, and leave with language they would actually file.",
      "Cettle designed the guest architecture, the run of show, and the briefing so Dr. Charles Ebereonwu’s session could hold under live questions. The result was not a highlight reel. It was a convening the association still cites when it talks about what a serious room looks like.",
    ],
    cover: "/images/work-event-group.jpg",
    gallery: [
      "/images/work-event-group.jpg",
      "/images/work-event-podium.jpg",
      "/images/work-event-close.jpg",
      "/images/practice-events-hero.png",
    ],
  },
  {
    slug: "national-lender-reputation-reset",
    category: "Reputation and Crisis",
    label: "REPUTATION",
    date: "12 August 2026",
    title: "National lender, reputation reset",
    excerpt:
      "Silence is not neutrality. The organisation that waits to be described will be described by its least generous observer.",
    body: [
      "A national lender had a public that no longer trusted the sentence on the website. Communication was still parked with the person who wrote the statement.",
      "We treated reputation as a commercial asset: diagnosis, message architecture, spokespeople, and a crisis drawer that had already been opened in a drill. The story stopped being drafted in public.",
    ],
    cover: "/images/hero-work.png",
    gallery: [
      "/images/hero-work.png",
      "/images/process-1.jpg",
      "/images/cap-3.jpg",
      "/images/about-hero.jpg",
    ],
  },
  {
    slug: "energy-group-executive-voice",
    category: "Leadership",
    label: "LEADERSHIP",
    date: "28 July 2026",
    title: "Energy group, executive voice",
    excerpt:
      "Leadership communication fails in the gap between prepared remarks and the first unscripted question. That gap is designable.",
    body: [
      "The executive team could run the business. They could not yet carry it in a hostile or technical room without the body betraying the sentence.",
      "We pressure-tested a point of view, built a voice they would actually use, and rehearsed until presence was not performance. Interviews stopped being a lottery.",
    ],
    cover: "/images/hero-work.png",
    gallery: [
      "/images/hero-work.png",
      "/images/process-2.jpg",
      "/images/team-charles.jpg",
      "/images/practice-studio.png",
    ],
  },
  {
    slug: "professional-services-narrative",
    category: "Communication",
    label: "COMMUNICATION",
    date: "2 June 2026",
    title: "Professional services, one spine for every room",
    excerpt:
      "Ask five members of staff what the business does and you get five answers, all of them partly right.",
    body: [
      "Inconsistent language had been treated as a branding issue. It was a system problem: nobody had decided which version was true when the versions competed.",
      "A message architecture settled that argument. Product stories, leadership interviews, and crisis notes now come from the same spine without sounding identical.",
    ],
    cover: "/images/practice-comms.jpg",
    gallery: [
      "/images/practice-comms.png",
      "/images/cap-1.jpg",
      "/images/process-3.jpg",
      "/images/hero-4.jpg",
    ],
  },
  {
    slug: "brand-by-design",
    category: "Brand and Audience",
    label: "BRAND",
    date: "21 May 2026",
    title: "Be positioned deliberately, not by default",
    excerpt:
      "Most brands are the residue of last year’s campaigns. Audience strategy is the decision to be known for something specific.",
    body: [
      "Default positioning looked busy and did not compound. The organisation spoke to everyone and meant little to the people who could say yes.",
      "We narrowed the audience, sharpened the claim, and wrote the proof that makes it expensive to copy — language that survives a sceptical buyer and a staff member who has been there longer than the campaign.",
    ],
    cover: "/images/practice-brand.jpg",
    gallery: [
      "/images/practice-brand.jpg",
      "/images/cap-2.jpg",
      "/images/hero-3.jpg",
      "/images/mission-sphere.jpg",
    ],
  },
  {
    slug: "industry-summit-flagship",
    category: "Events and Convening",
    label: "CONVENING",
    date: "4 July 2026",
    title: "Industry summit, flagship convening",
    excerpt:
      "A conference fills a hall. A convening changes who is in the room, what they are allowed to say, and what happens after they leave.",
    body: [
      "The same budget can produce a forgettable conference or a day that still gets cited a year later. The difference is not production value. It is intent.",
      "We designed the guest list, the agenda as an argument, and the follow-through — introductions, a published argument, and a date for the next decision.",
    ],
    cover: "/images/practice-events.jpg",
    gallery: [
      "/images/practice-events-hero.png",
      "/images/work-event-group.jpg",
      "/images/work-event-podium.jpg",
      "/images/work-event-close.jpg",
    ],
  },
];

export function getWork(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getNextWork(slug: string) {
  const index = workItems.findIndex((item) => item.slug === slug);
  if (index === -1) return workItems[0];
  return workItems[(index + 1) % workItems.length];
}
