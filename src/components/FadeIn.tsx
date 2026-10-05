"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  // Only animate when we know the user allows motion (false).
  // null (SSR/hydration) and true (prefers-reduced-motion) stay static/visible.
  const allowMotion = reduceMotion === false;

  return (
    <motion.div
      className={className}
      initial={allowMotion ? { opacity: 0, y: 12 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={
        allowMotion
          ? { duration: 0.4, delay, ease: "easeOut" }
          : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  );
}
