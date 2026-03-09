"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp, staggerContainer } from "./variants";
import type { Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  threshold = 0.1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const v: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object }).transition ?? {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export function StaggerReveal({ children, className, threshold = 0.1 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}
