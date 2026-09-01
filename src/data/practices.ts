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
        title: "Corporate communication strategy.",
        body: "Message architecture, internal and external alignment, communication calendars, and a spokesperson protocol that names who speaks on what.",
      },
      {
        title: "Crisis communication.",
        body: "Risk mapping, scenario playbooks, pre approved holding statements, live response support, and post incident review.",
      },
      {
        title: "Public relations.",
        body: "Narrative development, media outreach, feature placement, and press materials that editors can actually use.",
      },
      {
        title: "Media relations and media training.",
        body: "Journalist relationships, interview preparation, and on camera coaching for the people who will face the questions.",
      },
      {
        title: "Reputation management.",
        body: "Perception audits, monitoring, response frameworks, and recovery planning.",
      },
      {
        title: "Stakeholder engagement.",
        body: "Mapping and prioritisation, then engagement plans for regulators, communities, investors, and staff.",
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
        title: "Leadership training.",
        body: "Cohort programmes for emerging, middle, and senior leaders, built around your actual operating context rather than a generic curriculum.",
      },
      {
        title: "Executive coaching.",
        body: "One to one engagements over an agreed cycle, with defined objectives and a written close out.",
      },
      {
        title: "Executive speech writing.",
        body: "Keynotes, town halls, board addresses, and launch remarks written in the executive's own voice.",
      },
      {
        title: "Executive interviews and media preparation.",
        body: "Message discipline, difficult question handling, and on camera presence.",
      },
      {
        title: "Professional development training.",
        body: "Business writing, presentation, negotiation, client management, and internal communication.",
      },
      {
        title: "Entrepreneurship training.",
        body: "For founder led businesses, accelerators, and business support programmes.",
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
        title: "Conference and summit management.",
        body: "Theme and narrative, programme design, speaker curation, and full production management.",
      },
      {
        title: "Workshops and seminars.",
        body: "One to one engagements over an agreed cycle, with defined objectives and a written close out.",
      },
      {
        title: "Corporate and stakeholder events.",
        body: "Launches, town halls, annual general meetings, and partner engagements.",
      },
      {
        title: "Speaker curation and briefing.",
        body: "The right voices, briefed properly, so that sessions build on each other instead of repeating.",
      },
      {
        title: "Run of show and production management.",
        body: "Minute by minute direction, vendor coordination, and on the day command.",
      },
      {
        title: "Post event reporting and content.",
        body: "The recordings, quotes, and insights turned into assets you use for the next twelve months.",
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
      "Message architecture document, covering core narrative, proof points, and approved language",
      "Crisis communication playbook with scenarios, holding statements, and an escalation chain",
      "Spokesperson protocol naming who speaks on which subject",
      "Media list and outreach plan",
      "Perception baseline report and quarterly review against it",
    ],
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
        title: "Brand positioning.",
        body: "Category definition, differentiation, and the decision about what you will not be.",
      },
      {
        title: "Message architecture.",
        body: "The core narrative, the supporting proof points, and the language your whole organisation uses.",
      },
      {
        title: "Audience research and segmentation.",
        body: "Who is actually buying, what they believe now, and what would have to change.",
      },
      {
        title: "Audience engagement strategy.",
        body: "Channel selection, content direction, and a cadence your team can sustain.",
      },
      {
        title: "Internal communication and adoption.",
        body: "Positioning fails when staff have not been briefed. We treat internal rollout as part of the work, not as an afterthought.",
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
