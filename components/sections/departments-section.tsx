"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

/* SVG icons matching the mockup line-art style */
function IconSyringe() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 6l6 6-3 3-6-6 3-3z" />
      <path d="M22 12l6 6" />
      <path d="M14 20l6-6" />
      <path d="M8 26l6-6" />
      <path d="M6 34l4-8 8 4-12 4z" />
      <path d="M18 18l4 4" />
    </svg>
  );
}
function IconLaser() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="16" r="5" />
      <path d="M20 21v10" />
      <path d="M15 26h10" />
      <path d="M8 10l4 3" />
      <path d="M32 10l-4 3" />
      <path d="M20 4V7" />
    </svg>
  );
}
function IconHair() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8c0 6 4 10 6 16" />
      <path d="M20 8c0 6 0 12 0 18" />
      <path d="M26 8c0 6-4 10-6 16" />
      <path d="M11 32h18" />
      <circle cx="20" cy="6" r="2" />
    </svg>
  );
}

const DEPARTMENTS = [
  {
    id: "hair",
    Icon: IconHair,
    labelAr: "الشعر والجلدية",
    labelEnMain: "Hair & Dermatology",
    labelEnSub: "علاجات متقدمة لمشاكل الشعر والبشرة",
    descEn: "Advanced treatments for hair and skin conditions",
    hrefAr: "/services",
    hrefEn: "/en/services",
  },
  {
    id: "laser",
    Icon: IconLaser,
    labelAr: "الليزر والبشرة",
    labelEnMain: "Laser & Skin",
    labelEnSub: "إزالة الشعر وتجديد شباب البشرة",
    descEn: "Hair removal and skin rejuvenation",
    hrefAr: "/services",
    hrefEn: "/en/services",
  },
  {
    id: "botox",
    Icon: IconSyringe,
    labelAr: "البوتوكس والفيلر",
    labelEnMain: "Botox & Fillers",
    labelEnSub: "تحسين الملامح وتقليل التجاعيد بدقة",
    descEn: "Refine features and reduce wrinkles with precision",
    hrefAr: "/services",
    hrefEn: "/en/services",
  },
];

export function DepartmentsSection({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative py-20 overflow-hidden bg-[var(--background2)]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-3"
        >
          {DEPARTMENTS.map(({ id, Icon, labelAr, labelEnMain, labelEnSub, descEn, hrefAr, hrefEn }) => (
            <motion.div key={id} variants={staggerItem}>
              <Link
                href={isAr ? hrefAr : hrefEn}
                className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--gold)]/40 hover:shadow-[0_8px_40px_rgba(198,169,107,0.15)] transition-all duration-500 h-full"
              >
                {/* Icon */}
                <div className="h-16 w-16 rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/20 grid place-items-center text-[var(--gold)] group-hover:bg-[rgba(198,169,107,0.15)] transition-all duration-400">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-serif text-xl text-[var(--foreground)] mb-0.5">
                    {isAr ? labelAr : labelEnMain}
                  </h3>
                  <p className="text-[10px] tracking-widest text-[var(--gold)] uppercase font-sans mb-3">
                    {isAr ? labelEnMain : labelEnMain}
                  </p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                    {isAr ? labelEnSub : descEn}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {isAr ? "اعرف أكثر" : "Learn More"}
                  <ArrowIcon size={13} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
