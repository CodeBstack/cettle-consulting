"use client";

import { useEffect, type ReactNode } from "react";
import { animate, inView, stagger, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const REVEAL_TARGETS =
  "h1, h2, article, ul > li, [class*='grid'] > a, [data-motion-item]";

export function MotionShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "body > main > section, body > main > div, body > main > article, body > main section",
      ),
    ).filter(
      (section, index, items) =>
        items.indexOf(section) === index &&
        !items.some(
          (parent) => parent !== section && parent.contains(section),
        ),
    );
    const cleanups = sections.map((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(32px)";

      return inView(
        section,
        () => {
          animate(
            section,
            { opacity: 1, y: 0 },
            { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          );

          const targets = Array.from(
            section.querySelectorAll<HTMLElement>(REVEAL_TARGETS),
          ).slice(0, 12);

          if (targets.length > 0) {
            animate(
              targets,
              { opacity: [0, 1], y: [18, 0] },
              {
                duration: 0.55,
                delay: stagger(0.07, { startDelay: 0.08 }),
                ease: [0.22, 1, 0.36, 1],
              },
            );
          }
        },
        { amount: 0.12, margin: "0px 0px -8% 0px" },
      );
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname, reduceMotion]);

  return children;
}
