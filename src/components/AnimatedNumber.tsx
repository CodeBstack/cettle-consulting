"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

type AnimatedNumberProps = {
  value: string;
  className?: string;
};

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = value.match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
  const numericValue = match ? Number(match[2].replaceAll(",", "")) : 0;
  const decimals = match?.[2].split(".")[1]?.length ?? 0;
  const count = useMotionValue(reduceMotion ? numericValue : 0);
  const display = useTransform(count, (latest) => {
    if (!match) return value;
    const formatted = latest.toFixed(decimals);
    return `${match[1]}${formatted}${match[3]}`;
  });

  useEffect(() => {
    if (!isInView || !match) return;

    if (reduceMotion) {
      count.set(numericValue);
      return;
    }

    const controls = animate(count, numericValue, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, isInView, match, numericValue, reduceMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
