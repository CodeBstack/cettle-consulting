export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services/communication-and-reputation", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/work", label: "Work" },
] as const;

export const officialEmails = [
  {
    label: "Charlesebereonwu@cettleconsulting.com",
    href: "mailto:charlesebereonwu@cettleconsulting.com",
  },
  {
    label: "Princessanyanwu@cettleconsulting.com",
    href: "mailto:princessanyanwu@cettleconsulting.com",
  },
  {
    label: "Info@cettleconsulting.com",
    href: "mailto:info@cettleconsulting.com",
  },
] as const;

export const contactInbox = "ssamuelolumide@gmail.com";

export const officePhone = {
  label: "0906 800 0571",
  href: "tel:+2349068000571",
} as const;

export const socialLinks = [
  {
    label: "Facebook",
    icon: "facebook" as const,
    href: "https://www.facebook.com/share/18zA95sx1e/?mibextid=wwXIfr",
  },
  {
    label: "Instagram",
    icon: "instagram" as const,
    href: "https://www.instagram.com/cettleconsulting/",
  },
] as const;

export const heroBackgrounds = [
  { src: "/images/hero-1.jpg", alt: "Glass and steel architecture against a blue sky" },
  { src: "/images/hero-2.jpg", alt: "Looking up into a dark architectural dome" },
  { src: "/images/hero-3.jpg", alt: "White geometric building facade" },
  { src: "/images/hero-4.jpg", alt: "Dark vertical architectural fins at dusk" },
];

export const pillars = [
  {
    title: "Consulting",
    copy: "We diagnose the communication and reputation problem before anyone writes a word.",
  },
  {
    title: "Training",
    copy: "We build the capability so your team stops needing us for the routine work.",
  },
  {
    title: "Convening",
    copy: "We produce the events where your positioning is proved in public.",
  },
];

export const frictionPoints = [
  "The message is unclear. Ask five members of staff what the business does and you get five answers, all of them partly right.",
  "The leaders avoid the microphone. Interviews, town halls, and investor rooms are treated as risks to survive instead of platforms to use.",
  "The crisis arrives before the plan. The response gets drafted in public, under pressure, by whoever is available.",
];

export const practices = [
  {
    title: "Communication and Reputation",
    slug: "communication-and-reputation",
    copy: "Strategic planning, market entry, and operational excellence.",
    icon: "chart" as const,
    featured: true,
  },
  {
    title: "Leadership and Executive Development",
    slug: "leadership-and-executive-development",
    copy: "Build leaders who can carry the strategy in public and in the room.",
    icon: "head" as const,
    featured: false,
  },
  {
    title: "Brand and Audience Strategy",
    slug: "brand-and-audience-strategy",
    copy: "Be positioned deliberately, not by default.",
    icon: "network" as const,
    featured: false,
  },
  {
    title: "Events and Convening",
    slug: "events-and-convening",
    copy: "Bring the right people into one room and make it count.",
    icon: "tree" as const,
    featured: false,
  },
];

export const processSteps = [
  {
    title: "Diagnose",
    copy: "We start with what is actually happening. How you are perceived, what your people say when you are not in the room, and where the message breaks. One to two weeks.",
    image: "/images/process-1.jpg",
  },
  {
    title: "Design",
    copy: "We build the strategy, the message architecture, the curriculum, or the run of show. You see the plan before anyone spends money on execution.",
    image: "/images/process-2.jpg",
  },
  {
    title: "Deliver",
    copy: "We execute, or we train your team to execute. Both routes are scoped and priced before we start.",
    image: "/images/process-3.jpg",
  },
  {
    title: "Embed",
    copy: "We hand over documented systems rather than verbal advice, then review at an agreed interval.",
    image: "/images/process-4.jpg",
  },
];

export const audiences = [
  {
    title: "Corporates and institutions",
    copy: "You have a brand, a board, and a public. You need all three saying the same thing.",
    image: "/images/building.jpg",
  },
  {
    title: "Executives and senior professionals",
    copy: "You are already good at the work. The next level is being understood, quoted, and followed.",
    image: "/images/building.jpg",
  },
  {
    title: "Associations, agencies, and event owners",
    copy: "You have an audience to convene and a reputation riding on how the day runs.",
    image: "/images/building.jpg",
  },
];

export const stats = [
  { value: "2.3k+", label: "Years of combined practice" },
  { value: "1200", label: "Professionals trained" },
  { value: "20+", label: "Events & conferences delivered" },
  { value: "12+", label: "Sectors served" },
];

export const testimonials = [
  {
    quote:
      "Dr. Charles Ebereonwu delivered an insightful, engaging, and highly impactful session during our Chevron Capacity Training programme. His depth of knowledge, practical industry expertise, and ability to communicate complex issues clearly left a lasting impression on our members. The feedback we received was overwhelmingly positive, with participants appreciating the valuable perspectives he shared on the evolving energy landscape and the role of effective media coverage. We are grateful for his contribution and look forward to future opportunities to work with him.",
    name: "Ugo Amadi",
    role: "Association of Energy Correspondents of Nigeria (NAEC)",
    avatar: "/images/avatar-ugo.jpg",
  },
  {
    quote:
      "Cettle did not give us a press release. They gave us a way of speaking that survived a difficult quarter and still sounded like us.",
    name: "Adaeze Okonkwo",
    role: "Chief Communications Officer, National lender",
    avatar: "/images/avatar-ugo.jpg",
  },
  {
    quote:
      "The room they built for our leadership retreat was the first time the executive team heard the same story in the same language.",
    name: "Ibrahim Bello",
    role: "Managing Director, Energy group",
    avatar: "/images/avatar-ugo.jpg",
  },
  {
    quote:
      "They treat convening as an operating system, not an event. The audience, the agenda, and the follow-through were designed as one piece of work.",
    name: "Ngozi Amodu",
    role: "Programme Director, Industry association",
    avatar: "/images/avatar-ugo.jpg",
  },
];

export const partners = [
  "Aperture",
  "Northline",
  "Helix",
  "Cascade",
  "Vantage",
  "Orbit",
];



export const workItems = [
  {
    title: "National lender, reputation reset",
    category: "Reputation",
    image: "/images/hero-1.jpg",
  },
  {
    title: "Energy group, executive voice",
    category: "Leadership",
    image: "/images/hero-4.jpg",
  },
  {
    title: "Industry summit, flagship convening",
    category: "Convening",
    image: "/images/insight-photo-3.jpg",
  },
  {
    title: "Professional services, narrative system",
    category: "Communication",
    image: "/images/building.jpg",
  },
];

export const capabilities = [
  {
    title: "Diagnose",
    copy: "We map how an organisation is actually heard — internally, in the market, and in a crisis — before anyone writes a line.",
    image: "/images/process-1.jpg",
  },
  {
    title: "Design",
    copy: "Narrative, voice, and leadership posture are built as a system, not a campaign, so every appearance reinforces the same authority.",
    image: "/images/process-2.jpg",
  },
  {
    title: "Deliver",
    copy: "Media, speeches, stakeholder rooms, and high-stakes moments are executed with the discipline of operators, not observers.",
    image: "/images/process-3.jpg",
  },
  {
    title: "Embed",
    copy: "We leave teams with language, rituals, and judgment they can use when we are no longer in the room.",
    image: "/images/process-4.jpg",
  },
];

export const insightCategories = [
  "Reputation and Crisis",
  "Leadership",
  "Communication",
  "Brand and Audience",
  "Events and Convening",
  "Development"
] as const;

export type InsightCategory = (typeof insightCategories)[number];

export type Insight = {
  slug: string;
  author: string;
  category: InsightCategory;
  label: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  secondaryImage: string;
  body: string[];
  quote: { text: string; attribution: string };
};

export const insights: Insight[] = [
  {
    slug: "how-to-make-a-game",
    author: "Cettle Team",
    category: "Development",
    label: "DEVELOPMENT",
    date: "12 August 2026",
    title: "How to make a Game look more attractive with New VR & AI Technology",
    excerpt:
      "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
    image: "/images/insights-vr-featured.jpg",
    secondaryImage: "/images/insights-vr-car.jpg",
    body: [
      "Most organisations still treat communication as a downstream function: something that happens after the decision, after the deal, after the damage. By then the story is already in circulation, written by whoever had a microphone and a motive.",
      "We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.",
      "More than 3 billion people already benefit from AI-powered features in Google Workspace, whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs. Now, we’re excited to take the next step and bring a limited set of trusted testers a new set of features that makes the process of writing even easier. In Gmail and Google Docs, you can simply type in a topic you’d like to write about, and a draft will be instantly generated for you. So if you’re a manager onboarding a new employee, Workspace saves you the time and effort involved in writing that first welcome email. From there, you can elaborate upon or abbreviate the message or adjust the tone to be more playful or professional — all in just a few clicks. We’ll be rolling out these new experiences to testers in the coming weeks.",
      "We’re so excited by the potential of generative AI, and the opportunities it will unlock — from helping people express themselves creatively, to helping developers build brand new types of applications, to transforming how businesses and governments engage their customers and constituents. Stay tuned for more to come in the weeks and months ahead.",
    ],
    quote: {
      text: "“People worry that computers will get too smart and take over the world, but the real problem is that they’re too stupid and they’ve already taken over the world.”",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "leadership-under-pressure",
    author: "Cettle Team",
    category: "Leadership",
    label: "LEADERSHIP",
    date: "28 July 2026",
    title: "What holds when the room is watching",
    excerpt:
      "Leadership communication fails in the gap between prepared remarks and the first unscripted question. That gap is designable.",
    image: "/images/insights-island.jpg",
    secondaryImage: "/images/process-2.jpg",
    body: [
      "Prepared remarks are the easy part. The work begins when the first unscripted question arrives and the leader has to think, in public, without sounding like they are thinking.",
      "That is not a talent some people have and others do not. It is a designed capability: a point of view that has been pressure-tested, a voice that can survive interruption, and enough rehearsal that the body does not betray the mind.",
      "Boards, investors, regulators, and staff all watch for the same tell — whether the person at the front believes the sentence they just used. If they do not, no amount of media training will paper over it.",
      "We train executives to carry the strategy in language they would actually use. Not a script. A stance.",
    ],
    quote: {
      text: "Presence is not performance. It is the ability to stay in the sentence when the room turns.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "rooms-that-matter",
    author: "Cettle Team",
    category: "Events and Convening",
    label: "CONVENING",
    date: "4 July 2026",
    title: "Not every gathering is a convening",
    excerpt:
      "A conference fills a hall. A convening changes who is in the room, what they are allowed to say, and what happens after they leave.",
    image: "/images/insights-desk.jpg",
    secondaryImage: "/images/process-3.jpg",
    body: [
      "Most events are logistics with a programme attached. The guest list is a spreadsheet. The agenda is a sequence of speakers. The follow-up is a thank-you email and a photograph.",
      "A convening is a different object. It is built around a decision, a relationship, or a shift in who is allowed to speak. The room is designed, not decorated. The run of show is an argument, not a timetable.",
      "That is why the same budget can produce a forgettable conference or a day that still gets cited a year later. The difference is not production value. It is intent, guest architecture, and what you do with the people once they are in the building.",
      "Cettle produces the events where positioning is proved in public — and where the audience, the agenda, and the follow-through are designed as one piece of work.",
    ],
    quote: {
      text: "A conference fills a hall. A convening changes who is in the room, and what happens after they leave.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "reputation-as-asset",
    author: "Cettle Team",
    category: "Reputation and Crisis",
    label: "REPUTATION",
    date: "18 June 2026",
    title: "Reputation is a commercial asset, not a press function",
    excerpt:
      "When the public standing of the organisation is part of the P&L, communication has to be run with the same discipline as operations.",
    image: "/images/insights-soccer.jpg",
    secondaryImage: "/images/process-4.jpg",
    body: [
      "Reputation is still too often parked with the person who writes the statement. That is a category error. The market prices trust. Staff decide whether to stay. Regulators decide how much rope to give. All of that is reputation, and none of it lives in a comms folder.",
      "Treat it like an asset and the work changes. You measure it. You assign owners. You rehearse the moments that can destroy it. You stop confusing activity — posts, appearances, awards — with standing.",
      "The organisations that do this well look quieter from the outside. They are not always in the feed. They are simply harder to misrepresent, because the story is already owned, internally and in the rooms that matter.",
      "That is the standard we hold: communication run with the same seriousness as operations, because the cost of getting it wrong shows up in the same places.",
    ],
    quote: {
      text: "If reputation is on the P&L, it cannot be a side desk. It has to be run.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "voice-in-the-room",
    author: "Cettle Team",
    category: "Communication",
    label: "COMMUNICATION",
    date: "2 June 2026",
    title: "Five people, five answers, one organisation",
    excerpt:
      "Ask five members of staff what the business does and you get five answers, all of them partly right. That is not a copy problem. It is a system problem.",
    image: "/images/cap-1.jpg",
    secondaryImage: "/images/hero-4.jpg",
    body: [
      "Inconsistent language is usually treated as a branding issue: write a better paragraph, print it on a slide, hope it sticks. It does not stick, because nobody has decided which version is true when the versions compete.",
      "A message architecture settles that argument. It says what we lead with, what we never claim, and how a product story, a leadership interview, and a crisis note can come from the same spine without sounding identical.",
      "Once that spine exists, training becomes possible. People can be held to a standard. Interviews stop being a lottery. The website, the annual report, and the town hall stop contradicting each other.",
      "We start with how the organisation is actually heard — internally, in the market, and under pressure — then write the language that can be used when we are no longer in the room.",
    ],
    quote: {
      text: "If the story changes depending on who is speaking, you do not have a story. You have a collection of habits.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "brand-by-design",
    author: "Cettle Team",
    category: "Brand and Audience",
    label: "BRAND",
    date: "21 May 2026",
    title: "Be positioned deliberately, not by default",
    excerpt:
      "Most brands are the residue of last year’s campaigns. Audience strategy is the decision to be known for something specific, by the people who can actually move the work.",
    image: "/images/cap-2.jpg",
    secondaryImage: "/images/hero-3.jpg",
    body: [
      "Default positioning is what happens when you speak to everyone and end up meaning little to the people who can say yes. It looks busy. It does not compound.",
      "Deliberate positioning starts with a narrower audience than marketing usually wants, a sharper claim than legal usually likes, and the discipline to repeat both until they become the way you are introduced when you are not in the room.",
      "That claim has to be true enough to survive a sceptical buyer, a journalist, and a staff member who has been there longer than the campaign. If it only works in a deck, it is not a position. It is a hope.",
      "Cettle builds brand and audience strategy as a system: who you are for, what you are willing to be known for, and the proof that makes the claim expensive to copy.",
    ],
    quote: {
      text: "A position is not a tagline. It is the sentence other people use when they explain you.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "crisis-before-the-headline",
    author: "Cettle Team",
    category: "Reputation and Crisis",
    label: "CRISIS",
    date: "9 May 2026",
    title: "The crisis arrives before the plan. It does not have to.",
    excerpt:
      "The response gets drafted in public, under pressure, by whoever is available. That is a choice. It is a bad one.",
    image: "/images/cap-3.jpg",
    secondaryImage: "/images/about-hero.jpg",
    body: [
      "Crisis work that starts on the day of the incident is already late. The holding statement, the spokespeople, the stakeholder map, and the decision rights should exist in a drawer that has been opened in a drill, not invented on a WhatsApp thread at midnight.",
      "Good crisis counsel is mostly preparation: knowing what you will not say, who must be called before the press, and how the organisation sounds when it is telling the truth at speed.",
      "The organisations that recover fastest are rarely the ones with the cleverest line. They are the ones that already had a chain of command, a fact base, and a leader who had practised being the face of a bad day.",
      "We build that readiness as part of reputation work, not as an add-on after something has already broken in public.",
    ],
    quote: {
      text: "A crisis does not create character. It reveals whether you built any before you needed it.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "convening-that-converts",
    author: "Cettle Team",
    category: "Events and Convening",
    label: "EVENTS",
    date: "24 April 2026",
    title: "Design the day so the audience does the work",
    excerpt:
      "The best rooms are not spectacles. They are engineered so the right people meet, speak, and leave with a next step that would not have existed otherwise.",
    image: "/images/cap-4.jpg",
    secondaryImage: "/images/hero-2.jpg",
    body: [
      "Spectacle is cheap now. Stages, lights, and livestreams are available to anyone with a budget. What is still scarce is a room in which the people who matter actually change what they are going to do on Monday.",
      "That requires a different brief: not “make it impressive”, but “make this conversation possible”. Seating, timing, who opens, who is not invited, and how you close are all strategy, not production details.",
      "Follow-through is part of the design. If the only artefact is a highlight reel, you hosted a show. If there is a mapped set of introductions, a published argument, and a date for the next decision, you hosted a convening.",
      "We produce those days for institutions that cannot afford a room that only looks important.",
    ],
    quote: {
      text: "If nothing is different on Monday, it was not a convening. It was an evening out.",
      attribution: "Cettle Consulting",
    },
  },
  {
    slug: "executive-presence",
    author: "Cettle Team",
    category: "Leadership",
    label: "LEADERSHIP",
    date: "11 April 2026",
    title: "The next level is being understood, quoted, and followed",
    excerpt:
      "You are already good at the work. The constraint is no longer competence. It is whether the people who allocate trust can hear you clearly.",
    image: "/images/building.jpg",
    secondaryImage: "/images/hero-1.jpg",
    body: [
      "Senior professionals often arrive at a ceiling that has nothing to do with the quality of their judgement. They are not quoted. They are not the name that comes up when a panel is being built. They are not followed when they finally take a public position.",
      "That is a communication problem with a leadership shape. The fix is not more content. It is a clearer stake, a voice that can be recognised in a single paragraph, and the discipline to show up in the rooms where reputation is actually minted.",
      "We work with executives who already have the track record and still find themselves explained badly — or not at all. The work is to make the record audible.",
      "Once the voice is in place, media, speeches, and stakeholder rooms stop being risks to survive. They become the way the next chapter is written in public.",
    ],
    quote: {
      text: "Authority that cannot be heard is indistinguishable from authority that does not exist.",
      attribution: "Cettle Consulting",
    },
  },
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}

export function getNextInsight(slug: string) {
  const index = insights.findIndex((item) => item.slug === slug);
  if (index === -1) return insights[0];
  return insights[(index + 1) % insights.length];
}

export function getRelatedInsights(slug: string, count = 3) {
  const current = getInsight(slug);
  const others = insights.filter((item) => item.slug !== slug);
  const same = others.filter((item) => item.category === current?.category);
  const rest = others.filter((item) => item.category !== current?.category);
  return [...same, ...rest].slice(0, count);
}
