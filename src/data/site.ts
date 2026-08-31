export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
  { href: "/#work", label: "Work" },
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
    copy: "Strategic planning, market entry, and operational excellence.",
    icon: "chart" as const,
    featured: true,
  },
  {
    title: "Leadership and Executive Development",
    copy: "Build leaders who can carry the strategy in public and in the room.",
    icon: "head" as const,
    featured: false,
  },
  {
    title: "Brand and Audience Strategy",
    copy: "Be positioned deliberately, not by default.",
    icon: "network" as const,
    featured: false,
  },
  {
    title: "Events and Convening",
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

export const insights = [
  {
    slug: "own-the-message",
    author: "Cettle Team",
    category: "Reputation",
    date: "12 Aug 2026",
    title: "Own the message before someone else writes it for you",
    excerpt:
      "Silence is not neutrality. In a crowded information market, the organisation that waits to be described will be described by its least generous observer.",
    image: "/images/insight-photo-1.jpg",
  },
  {
    slug: "leadership-under-pressure",
    author: "Cettle Team",
    category: "Leadership",
    date: "28 Jul 2026",
    title: "What holds when the room is watching",
    excerpt:
      "Leadership communication fails in the gap between prepared remarks and the first unscripted question. That gap is designable.",
    image: "/images/insight-photo-2.jpg",
  },
  {
    slug: "rooms-that-matter",
    author: "Cettle Team",
    category: "Convening",
    date: "04 Jul 2026",
    title: "Not every gathering is a convening",
    excerpt:
      "A conference fills a hall. A convening changes who is in the room, what they are allowed to say, and what happens after they leave.",
    image: "/images/insight-photo-3.jpg",
  },
  {
    slug: "reputation-as-asset",
    author: "Cettle Team",
    category: "Reputation",
    date: "18 Jun 2026",
    title: "Reputation is a commercial asset, not a press function",
    excerpt:
      "When the public standing of the organisation is part of the P&L, communication has to be run with the same discipline as operations.",
    image: "/images/insight-photo-4.jpg",
  },
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
