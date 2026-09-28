"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/Button";
import { ArrowRight, ChevronLeft } from "@/components/icons";

type Paragraph = {
  lead?: string;
  text: string;
};

type Person = {
  id: string;
  name: string;
  title: string;
  image: string;
  alt: string;
  heading?: string;
  paragraphs: Paragraph[];
};

const READ_MORE_BAR = "linear-gradient(90deg, #1b2a4a 0%, #91bc0d 55%, #b5e61d 100%)";

const TEAM: Person[] = [
  {
    id: "charles-ebereonwu",
    name: "Charles Ebereonwu, PhD",
    title: "Principal Consultant and Trainer at CETTLE CONSULTING NIGERIA LIMITED.",
    image: "/images/team-charles-card.png",
    alt: "Portrait of Charles Ebereonwu",
    heading:"Principal Consultant and Trainer at CETTLE CONSULTING NIGERIA LIMITED.",
    paragraphs: [
      {
        // lead: "Principal Consultant and Trainer at CETTLE CONSULTING NIGERIA LIMITED.",
        text: "With nearly 30 years of professional experience spanning banking, oil & gas, corporate communications, governance, internal control, fraud examination, media relations, and executive leadership.",
      },
      {
        text: "He spent 25 years with TotalEnergies, including 17 years in corporate communication, where he held senior roles covering internal and external communication, external relations, and country-wide communication across TotalEnergies companies in Nigeria. His experience includes corporate communication strategy, crisis communication, media relations, stakeholder engagement, executive speech writing and coaching, conferences and exhibitions, and team leadership.",
      },
      {
        text: "He now works with corporate organizations, professional associations, training institutions, and universities as a consultant, trainer, and educationist, helping organizations strengthen communication, develop impactful leadership, and maximize stakeholder and shareholder value.",
      },
      {
        text: "He holds a BSc in Accounting, MSc in Financial Management, PhD in International Business Management (Entrepreneurship & Innovation), and a LEAD Executive Leadership certification from Stanford Graduate School of Business.",
      },
      {
        text: "He is also a published author of poetry and fiction, with works including Burdens of Solitude, Beyond the Storm, Another Me, Lost Laurel, and This Sugar is Coated with Quinine. He is a Fellow of the Institute of Management Consultants (FIMC) and the National Institute of Credit Administration (FICA), among other professional affiliations.",
      },
    ],
  },
  {
    id: "princess-anyanwu",
    name: "Princess Anyanwu.",
    title: "Executive Assistant to Dr Charles",
    image: "/images/team-princess-card.png",
    alt: "Portrait of Princess Anyanwu",
    heading: "Product, Strategy & Creative Solutions Professional",
    paragraphs: [
      {
        text: "Princess Anyanwu is a solutions-driven professional with experience across product strategy, brand identity, creative design, project management, and customer experience.",
      },
      {
        text: "At Cettle Consulting, she combines strategic thinking and creative execution to translate business objectives and customer needs into practical, effective solutions. Her experience includes product management, workflow improvement, stakeholder coordination, brand communication, and cross-functional collaboration.",
      },
      {
        text: "With a strong eye for detail and a customer-focused mindset, Princess is passionate about understanding challenges, identifying opportunities, and developing solutions that improve processes, communication, and overall business outcomes. She brings a collaborative approach to projects, working closely with teams and stakeholders to move ideas from concept to execution.",
      },
      {
        text: "She holds a Bachelor's Degree in Hospitality and Tourism Management and a Leadership Certificate from Hopeway Leadership School. Princess brings a strong commitment to clarity, collaboration, innovation, and continuous improvement to every project she supports.",
      },
    ],
  },
];

function PortraitCard({ person }: { person: Person }) {
  return (
    <article className="grid w-full grid-cols-[minmax(118px,42%)_1fr] overflow-hidden bg-navy sm:block sm:w-[210px]">
      <div className="relative min-h-[156px] sm:aspect-[11/10] sm:min-h-0">
        <Image
          src={person.image}
          alt={person.alt}
          fill
          sizes="(min-width: 640px) 210px, 42vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col sm:contents">
        <div className="flex flex-1 flex-col justify-center bg-lime px-3.5 py-3 sm:block sm:py-3.5">
          <h3 className="text-[15px] leading-[1.2] font-semibold text-navy sm:text-[16px]">{person.name}</h3>
          <p className="mt-1.5 text-[11px] leading-[1.35] font-medium text-navy">{person.title}</p>
        </div>
      </div>
    </article>
  );
}

const PANEL_EASE = [0.22, 1, 0.36, 1] as const;

function TeamModal({ person, onClose }: { person: Person; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    closeRef.current?.focus({ preventScroll: true });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[80]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: [
            "linear-gradient(90deg, rgba(232, 242, 255, 0.45) 0%, rgba(176, 208, 240, 0.14) 38%, rgba(18, 72, 168, 0.1) 100%)",
            "url(/images/team-modal-bg.png)",
          ].join(", "),
          backgroundPosition: "center, right center",
          backgroundSize: "cover, cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0.12 : 0.35, ease: PANEL_EASE }}
      />
      <div
        ref={scrollRef}
        className="relative z-10 h-full overflow-y-auto overscroll-contain"
        onMouseDown={onClose}
      >
        <div className="flex min-h-full items-start justify-center px-4 py-8 sm:items-center sm:px-6 sm:py-14">
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="w-full max-w-[920px]"
          onMouseDown={(event) => event.stopPropagation()}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.985 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.42, ease: PANEL_EASE }}
        >
          <h2 id={titleId} className="mb-5 text-[18px] leading-none sm:mb-6 sm:text-[20px]">
            <span className="font-semibold text-[#1D1D1D]">About</span>{" "}
            <span className="font-normal text-[#1d1d1d]/60">{person.name}</span>
          </h2>
          <div className="bg-white px-5 py-6 sm:px-8 sm:py-7 lg:px-9 lg:pt-7 lg:pb-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <PortraitCard person={person} />
              <div className="min-w-0 flex-1 max-w-[653px]">
                {person.heading ? (
                  <p className="mb3 text-[14px] leading6 font-semibold text-[#838C95]">
                    {person.heading}
                  </p>
                ) : null}
                <div className="space-y-1.5 text-[11px] leading-[1.65] text-[#838C95]">
                  {person.paragraphs.map((paragraph) => (
                    <p key={paragraph.text}>
                      {paragraph.lead ? (
                        <span className="font-semibold text-[#6d767e]">{paragraph.lead}</span>
                      ) : null}
                      {paragraph.text}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex justifycenter">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-8 items-center gap-1.5 rounded-[3px] bg-black px-3 text-[12px] font-medium text-white transition hover:bg-[#1a1a1a]"
              >
                <ChevronLeft className="h-3 w-3" />
                Back
              </button>
            </div>
              </div>
            </div>
           
          </div>
        </motion.div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function Team() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocus = useRef(false);
  const active = TEAM.find((person) => person.id === activeId) ?? null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    restoreFocus.current = true;
    setActiveId(null);
  }, []);

  function finishClose() {
    if (!restoreFocus.current) return;
    restoreFocus.current = false;
    triggerRef.current?.focus();
  }

  function open(personId: string, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveId(personId);
  }

  return (
    <section className="bg-lime-soft">
      <div className="site-pad grid items-start gap-10 py-16 md:grid-cols-[1fr_1.15fr] md:gap-12 md:py-20">
        <div className="md:pt-2">
          <p className="text-[13px] font-light tracking-wide text-[#1B2A4A] md:text-[14px]">
            The team
          </p>
          <h2 className="mt-3 max-w-[360px] font-display text-[36px] leading-[1.15] font-light text-[#1B2A4A] md:text-[48px] md:leading-[1.0]">
            The people doing the work.
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TEAM.map((person) => (
              <article
                key={person.id}
                className="grid h-[443px] max-h-[443px] grid-rows-[minmax(0,1fr)_176px_48px] overflow-hidden bg-navy"
              >
                <div className="relative min-h-0 bg-navy">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    sizes="(min-width: 768px) 280px, 90vw"
                    className="object-cover object-top"
                  />
                </div>
                
                <div className="flex max-h[176px] flex-col bg-lime px-4 pt-4 md:px-5">
                  <h3 className="min-h-[2.6em] text-[18px] leading-snug font-semibold text-navy md:text-[20px]">
                    {person.name}
                  </h3>
                  <p className="mt1.5 line-clamp-3 text-[11px] leading[1.5] font-normal text-navy/85 md:text-[14px] mdleading-6">
                    {person.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(event) => open(person.id, event.currentTarget)}
                  className="inline-flex h-12 w-full cursor-pointer items-center justify-between gap-3 px-5 text-left text-[14px] font-semibold tracking-wide text-white transition hover:opacity-95"
                  style={{ background: READ_MORE_BAR }}
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                </button>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button href="/contact" variant="navy" className="h-11 min-w-[186px] px-6 text-[14px] font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence onExitComplete={finishClose}>
        {mounted && active ? <TeamModal key={active.id} person={active} onClose={close} /> : null}
      </AnimatePresence>
    </section>
  );
}
