"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { EvidenceClass } from "@/content/b2b-data";
import { useLocale } from "./locale-provider";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Progress({ value, label }: { value: number; label?: string }) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label={label || "Progress"}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

export function Badge({
  children,
  tone = "purple",
}: {
  children: ReactNode;
  tone?: "purple" | "green" | "gray" | "amber" | "magenta";
}) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

export function EvidenceBadge({
  type,
  citation,
}: {
  type: EvidenceClass;
  citation?: string;
}) {
  const { isAr } = useLocale();
  const labels: Record<EvidenceClass, { en: string; ar: string }> = {
    VERIFIED: { en: "VERIFIED", ar: "موثّق رسمياً" },
    REPORTED: { en: "REPORTED", ar: "تقرير ثانوي" },
    INFERENCE: { en: "INFERENCE", ar: "استنتاج تحليلي" },
    UNKNOWN: { en: "UNKNOWN", ar: "غير معلن" },
  };
  return (
    <span className={`ev-badge ev-${type.toLowerCase()}`}>
      {isAr ? labels[type].ar : labels[type].en}
      {citation && <small>{citation}</small>}
    </span>
  );
}
