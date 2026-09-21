export type PracticeOffer = {
  title: string;
  body: string;
};

export type PracticeDetail = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  image: string;
  heroImage: string;
  heroObject: string;
  imageAlt: string;
  cardBody: string;
  cardMin: string;
  whatWeDo: PracticeOffer[];
  engagement: {
    studio: string;
    photo: string;
    steps: { title: string; body: string }[];
  };
  deliverables: string[];
  deliverablesImage: string;
  audience: string[];
};

export const practiceDetails: PracticeDetail[] = [
  {
    slug: "communication-and-reputation",
    title: "Communication and Reputation",
    headline: "Own the message before someone else writes it for you.",
    summary:
      "Corporate communication, crisis response, media relations, and reputation management for organisations whose public standing is a commercial asset.",
    image: "/images/practice-comms.jpg",
    heroImage: "/images/practice-comms.png",
    heroObject: "object-[center_45%]",
    imageAlt: "Hand holding a megaphone through a circular cutout",
    cardBody:
      "Corporate communication, crisis communication, public relations, media relations, reputation management, stakeholder engagement",
    cardMin: "min-h-[240px] md:min-h-[280px]",
    whatWeDo: [
      {
        title: "Corporate Communication",
        body: "This is about helping a company speak with one clear voice. We help organisations speak right, so that every message, internal or external, builds trust instead of confusion.",
      },
      {
        title: "Crisis Communication",
        body: "Every organisation will face a difficult moment at some point. It could be a mistake, a scandal, an accident, or bad press. What matters most is how you respond in the first few hours. We help businesses prepare ahead of time and guide them calmly through the storm, so they protect their reputation and come out stronger, not weaker.",
      },
      {
        title: "Public Relations / Reputation Management",
        body: "This is about managing how the public sees and feels about a brand. From press releases to media engagement, we help organisations tell their story the right way. The focus is on the identification and segmentation of stakeholders as well as the crafting of specific messages that address the peculiar needs of each stakeholder.",
      },
      {
        title: "Media Relations",
        body: "We help businesses and leaders build genuine, respectful relationships with the press, so their stories get told fairly and accurately. A cordial relationship with the media comes handy during times of crisis. Do not wait for a crisis before nurturing a win-win relationship with the media.",
      },
      {
        title: "Stakeholder / Audience Engagement",
        body: "It is not enough to just talk to your audience; you need to connect with them. We help brands understand what their audience truly cares about and create ways to keep them interested, involved, and loyal over time. This is a critical aspect of stakeholder management.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Audit",
          body: "Audit, one to two weeks. We review existing materials, interview internal stakeholders, and assess how the organisation is currently perceived.",
        },
        {
          title: "Architecture",
          body: "Architecture two to three weeks. We build the core message, the supporting proof points, and the rules for who says what, where.",
        },
        {
          title: "Activation",
          body: "ongoing or fixed. We execute the plan or train your team to run it, depending on the model agreed.",
        },
        {
          title: "Review",
          body: "Review, quarterly. We measure against the perception baseline set in the audit.",
        },
      ],
    },
    deliverables: [
      "Message architecture document, covering core narrative, proof points, and approved language",
      "Crisis communication playbook with scenarios, holding statements, and an escalation chain",
      "Spokesperson protocol naming who speaks on which subject",
      "Media list and outreach plan",
      "Perception baseline report and quarterly review against it",
    ],
    deliverablesImage: "/images/practice-mosaic.jpg",
    audience: [
      "Organisations with a public, a regulator, or a board.",
      "Businesses entering a new market or a funding round.",
      "Institutions that have recently had a bad month in public and do not intend to have another one.",
    ],
  },
  {
    slug: "leadership-and-executive-development",
    title: "Leadership and Executive Development",
    headline: "What holds when the room is watching.",
    summary:
      "Leadership training, executive coaching, executive speech writing, and media preparation for people who already have the record and still need to be heard.",
    image: "/images/practice-leadership.jpg",
    heroImage: "/images/practice-leadership.jpg",
    heroObject: "object-[center_40%]",
    imageAlt: "Chess king among digital icons",
    cardBody:
      "Leadership training, executive coaching, executive speech writing, executive interview and media preparation, professional development training, entrepreneurship training",
    cardMin: "min-h-[240px] md:min-h-[280px]",
    whatWeDo: [
      {
        title: "Leadership Training",
        body: "Good leaders are not made overnight; they are nurtured over time through practice and experience. This training helps organisations prepare leaders who are ready to transform their organisations, maximise shareholder value, and position their organisations to dictate the future of their industry.",
      },
      {
        title: "Executive Coaching",
        body: "Through one-on-one coaching, we help executives build self-awareness, sharpen their leadership style, and navigate the pressures that come with senior roles.",
      },
      {
        title: "Executive Speech Writing",
        body: "The right words, said the right way, can move an audience and shape how a leader is remembered. We craft speeches that reflect the leader's true voice and message, whether for a conference, a company event, or a public address. An effective speech is a key tool of audience engagement and stakeholder management.",
      },
      {
        title: "Executive Interviews",
        body: "An interview can either build a leader's credibility or expose them to unnecessary risk. We prepare executives ahead of media interviews and public appearances, helping them communicate their message clearly and confidently.",
      },
      {
        title: "Professional Development Training",
        body: "We offer training programmes that help individuals build the skills, confidence, and habits needed to advance in their careers while staying relevant in their industries.",
      },
      {
        title: "Entrepreneurship Training",
        body: "Starting and running a business takes more than a good idea; it takes skill, structure, and the right mindset. We help equip intending and existing entrepreneurs with practical tools to plan, manage, and grow their businesses. Entrepreneurship is not the same thing as owning a business, although owning and running a successful business is a key attribute of entrepreneurship.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Needs assessment",
          body: "One week. We establish the current capability level and the gap against what the role now demands.",
        },
        {
          title: "Curriculum design",
          body: "Curriculum design, one to two weeks. Content built around your sector, your cases, and your language.",
        },
        {
          title: "Delivery",
          body: "In house cohorts, open enrolment sessions, or one to one coaching cycles.",
        },
        {
          title: "Measurement",
          body: "Measurement. Pre and post assessment, plus a cohort report to the sponsor.",
        },
      ],
    },
    deliverables: [
      "Bespoke curriculum and facilitator delivery",
      "Participant workbooks and reference materials",
      "Pre and post capability assessment",
      "Cohort report to the programme sponsor, with observations and recommendations",
      "Certificates of completion where required",
    ],
    deliverablesImage: "/images/practice-leadership.jpg",
    audience: [
      "Organisations building a leadership bench.",
      "Human resources and learning teams with a budget and a capability gap.",
      "Individual executives preparing for a bigger platform than the one they currently occupy.",
    ],
  },
  {
    slug: "events-and-convening",
    title: "Events and Convening",
    headline: "Bring the right people into one room and make it count.",
    summary:
      "Conferences, training events, and corporate gatherings planned, produced, and run so that the outcome survives the day",
    image: "/images/practice-events.jpg",
    heroImage: "/images/practice-events-hero.png",
    heroObject: "object-[center_55%]",
    imageAlt: "Circular auditorium seating",
    cardBody:
      "Conference and summit management, workshops and seminars, corporate and stakeholder events, speaker curation, run of show and production management",
    cardMin: "min-h-[280px] md:min-h-[360px]",
    whatWeDo: [
      {
        title: "Events and Conference Management",
        body: "From small workshops to large industry conferences, good events do not happen by accident; they are planned carefully from start to finish. We handle the full process, including logistics, programme design, speaker coordination, and on-the-ground execution, so every event runs smoothly and leaves a lasting impression.",
      },
      {
        title: "Workshops and Seminars",
        body: "We design and organise workshops and seminars that are not just informative but engaging, giving participants real skills they can apply immediately on the job.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Objective setting.",
          body: "What the event has to achieve commercially, stated before any venue is discussed.",
        },
        {
          title: "Programme design",
          body: "Theme, narrative arc, session structure, and speaker map.",
        },
        {
          title: "Production",
          body: "Budget management, vendor selection, logistics, and rehearsal.",
        },
        {
          title: "Delivery and handover",
          body: "On site management, then a post event report with content assets.",
        },
      ],
    },
    deliverables: [
      "Full programme design and run of show",
      "Speaker briefing packs and session maps",
      "Production plan with vendor and logistics coordination",
      "On-site management and minute-by-minute direction",
      "Post-event report with recordings, quotes, and reusable content assets",
    ],
    deliverablesImage: "/images/practice-events.jpg",
    audience: [
      "Associations and professional bodies running an annual conference.",
      "Corporates convening staff, partners, or stakeholders.",
      "Agencies and development organisations with a programme to deliver and a reputation attached to how it runs.",
    ],
  },
  {
    slug: "brand-and-audience-strategy",
    title: "Brand and Audience Strategy",
    headline: "Be positioned deliberately, not by default.",
    summary:
      "Brand positioning, message architecture, audience research, and internal communication for organisations that need to be known for something specific.",
    image: "/images/practice-brand.jpg",
    heroImage: "/images/practice-brand.jpg",
    heroObject: "object-center",
    imageAlt: "Black spheres clustered around a light",
    cardBody:
      "Brand positioning, message architecture, audience research, audience engagement, internal communication",
    cardMin: "min-h-[260px] md:min-h-[320px]",
    whatWeDo: [
      {
        title: "Brand Positioning",
        body: "This is about making sure people understand exactly what makes your brand different and why it matters to them. We work with businesses to define that unique space in the market and communicate it clearly, so customers choose you over anyone else.",
      },
      {
        title: "Stakeholder / Audience Engagement",
        body: "It is not enough to just talk to your audience; you need to connect with them. We help brands understand what their audience truly cares about and create ways to keep them interested, involved, and loyal over time. This is a critical aspect of stakeholder management.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Discovery",
          body: "Discovery, one to two weeks. Internal interviews, competitor review, and audience input.",
        },
        {
          title: "Positioning",
          body: "Positioning, two weeks. Options developed, tested against the market, and a single direction agreed.",
        },
        {
          title: "Articulation",
          body: "Articulation, one to two weeks. Message house, tone guidance, and application examples.",
        },
        {
          title: "Rollout",
          body: "Rollout. Internal briefing, staff adoption materials, and a channel plan.",
        },
      ],
    },
    deliverables: [
      "Positioning statement and rationale",
      "Message house covering core narrative, pillars, and proof points",
      "Audience map with priority segments",
      "Engagement and content framework",
      "Internal briefing pack for staff adoption",
    ],
    deliverablesImage: "/images/practice-brand.jpg",
    audience: [
      "Businesses that have grown past the story they started with.",
      "Firms entering a new market or a new category.",
      "Organisations that have merged, rebranded, or changed leadership and now sound like two companies at once.",
    ],
  },
];

export function servicePath(slug: string) {
  return `/services/${slug}`;
}

export const firstServicePath = servicePath(practiceDetails[0].slug);

export function getPractice(slug: string) {
  return practiceDetails.find((item) => item.slug === slug);
}

export function getNextPractice(slug: string) {
  const index = practiceDetails.findIndex((item) => item.slug === slug);
  if (index === -1) return practiceDetails[0];
  return practiceDetails[(index + 1) % practiceDetails.length];
}
