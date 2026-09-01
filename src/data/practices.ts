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
        body: "Programmes that put language, judgement, and presence under pressure so the team can carry the strategy in public.",
      },
      {
        title: "Executive coaching.",
        body: "One-to-one work with senior leaders on voice, stance, and the rooms that actually mint reputation.",
      },
      {
        title: "Executive speech writing.",
        body: "Remarks that sound like the person who has to deliver them, built from a point of view rather than a template.",
      },
      {
        title: "Interview and media preparation.",
        body: "Rehearsal for the first unscripted question, on camera and off, including hostile and technical formats.",
      },
      {
        title: "Professional development training.",
        body: "Cohort programmes for managers and specialists who need a recognisable voice inside the organisation.",
      },
      {
        title: "Entrepreneurship training.",
        body: "Founders and operators learning to pitch, brief a room, and hold a narrative through growth and difficulty.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Audit",
          body: "We watch how the leader currently shows up — remarks, interviews, and the gap between the script and the first question.",
        },
        {
          title: "Architecture",
          body: "A stance, not a script: the claims they will own, the language they will actually use, and what they will never say.",
        },
        {
          title: "Activation",
          body: "Rehearsal, coaching, and live rooms. We stay close until the body does not betray the sentence.",
        },
        {
          title: "Review",
          body: "After the high-stakes moment, we debrief what held and what still needs work before the next one.",
        },
      ],
    },
    deliverables: [
      "Personal message architecture and voice notes the leader can use without us in the room",
      "Speech and interview pack for the next high-stakes appearance",
      "Rehearsal recordings and a marked-up run of questions",
      "On-camera notes and a short protocol for the comms team supporting them",
      "A 90-day presence plan: rooms, cadence, and what success looks like",
    ],
    audience: [
      "Executives who are already good at the work and still unexplained in public.",
      "Leadership teams heading into a listing, a crisis, or a strategy reset.",
      "Founders and specialists asked to become the face of the organisation.",
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
        body: "End-to-end production of flagship days, from guest architecture to the follow-through after the lights go down.",
      },
      {
        title: "Workshops and seminars.",
        body: "Smaller rooms designed around a decision, a skill, or a relationship that would not form in a plenary.",
      },
      {
        title: "Corporate and stakeholder events.",
        body: "Town halls, investor days, and regulator-facing sessions where the organisation has to speak with one voice.",
      },
      {
        title: "Speaker curation.",
        body: "The right people in the right order, with briefs that make the conversation possible rather than decorative.",
      },
      {
        title: "Run of show.",
        body: "Timing, seating, who opens, who is not invited, and how you close — treated as strategy, not logistics.",
      },
      {
        title: "Production management.",
        body: "Stage, crew, and capture that serve the argument of the day instead of competing with it.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Audit",
          body: "We map the audience, the decision the day must produce, and why the last gathering did not.",
        },
        {
          title: "Architecture",
          body: "Guest list, agenda as an argument, and a run of show that makes the right conversations possible.",
        },
        {
          title: "Activation",
          body: "We produce the day, or we train your team to produce it, with the same standard of intent.",
        },
        {
          title: "Review",
          body: "Mapped introductions, a published argument, and a date for the next decision — not only a highlight reel.",
        },
      ],
    },
    deliverables: [
      "Convening brief: purpose, guest architecture, and the decision the day must produce",
      "Full run of show, speaker briefs, and seating logic",
      "On-the-ground production and capture, or a trained internal team to run it",
      "Follow-through pack: introductions, published argument, and next dates",
      "A debrief against the brief, not against production value",
    ],
    audience: [
      "Institutions that cannot afford a room that only looks important.",
      "Associations and event owners with an audience to convene and a reputation on the day.",
      "Corporates using a summit, retreat, or town hall to move a real decision.",
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
        body: "A narrower audience than marketing usually wants, a sharper claim than legal usually likes, and the proof that makes it expensive to copy.",
      },
      {
        title: "Message architecture.",
        body: "What we lead with, what we never claim, and how product, leadership, and crisis notes come from the same spine.",
      },
      {
        title: "Audience research.",
        body: "How you are actually heard — internally, in the market, and under pressure — before anyone writes a campaign.",
      },
      {
        title: "Audience engagement.",
        body: "The rooms, cadence, and proof that turn a position into the sentence other people use when they explain you.",
      },
      {
        title: "Internal communication.",
        body: "So five members of staff stop giving five answers, all of them partly right.",
      },
      {
        title: "Narrative system.",
        body: "Language that can survive a sceptical buyer, a journalist, and a staff member who has been there longer than the campaign.",
      },
    ],
    engagement: {
      studio: "/images/practice-studio.png",
      photo: "/images/practice-laptop.png",
      steps: [
        {
          title: "Audit",
          body: "We listen to how the organisation is introduced when it is not in the room, and where the versions compete.",
        },
        {
          title: "Architecture",
          body: "Audience, claim, and proof — written so the website, the interview, and the town hall stop contradicting each other.",
        },
        {
          title: "Activation",
          body: "We roll the language into the channels that matter, or we train the people who have to carry it.",
        },
        {
          title: "Review",
          body: "We check whether the sentence other people use to explain you has actually changed.",
        },
      ],
    },
    deliverables: [
      "Positioning platform: who you are for, what you are willing to be known for, and the proof",
      "Message architecture for product, leadership, and pressure",
      "Audience map and engagement cadence",
      "Internal language kit so staff can be held to a standard",
      "A 90-day rollout plan with owners, not a slide that nobody opens",
    ],
    audience: [
      "Brands that are the residue of last year’s campaigns.",
      "Organisations speaking to everyone and meaning little to the people who can say yes.",
      "Teams whose story changes depending on who is in the meeting.",
    ],
  },
];

export function getPractice(slug: string) {
  return practiceDetails.find((item) => item.slug === slug);
}

export function getNextPractice(slug: string) {
  const index = practiceDetails.findIndex((item) => item.slug === slug);
  if (index === -1) return practiceDetails[0];
  return practiceDetails[(index + 1) % practiceDetails.length];
}
