"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { OfferCard } from "@/components/offers/offer-card";
import { OFFERS } from "@/content/offers";
import type { OfferCategory } from "@/content/offers";
import { Reveal } from "@/components/motion/reveal";

const CATEGORIES: { id: OfferCategory | "all"; labelAr: string }[] = [
  { id: "all",           labelAr: "الكل" },
  { id: "skin",          labelAr: "البشرة" },
  { id: "laser_women",   labelAr: "ليزر نساء" },
  { id: "laser_men",     labelAr: "ليزر رجال" },
  { id: "injectables",   labelAr: "الحقن التجميلي" },
  { id: "skin_boosters", labelAr: "إبر النضارة" },
  { id: "hair",          labelAr: "الشعر" },
  { id: "packages",      labelAr: "الباقات" },
];

const grid = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function OffersPage() {
  const [active, setActive] = useState<OfferCategory | "all">("all");
  const visible = OFFERS.filter(
    (o) => o.isActive && (active === "all" || o.category === active)
  );

  return (
    <>
      <AvelineNavbar locale="ar" />
      <main dir="rtl" className="bg-[var(--background)]">
        {/* Page header */}
        <section className="relative bg-[var(--background2)] py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(198,169,107,0.07),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">العروض</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[var(--foreground)] text-pretty">
                عروضنا الخاصة
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
                باقات وعروض حصرية بأسعار مميزة — استفيدي الآن قبل انتهاء العرض
              </p>
            </Reveal>
          </div>
        </section>

        {/* Sticky filter tabs */}
        <div className="sticky top-[112px] z-20 bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={[
                    "relative px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 whitespace-nowrap font-sans",
                    active === cat.id
                      ? "bg-[var(--gold)] text-white border-[var(--gold)] shadow-[0_0_20px_rgba(198,169,107,0.30)]"
                      : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)]/40 hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {cat.labelAr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatePresence mode="wait">
              {visible.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-28 text-[var(--muted)] font-sans"
                >
                  لا توجد عروض في هذا القسم حاليًا.
                </motion.div>
              ) : (
                <motion.div
                  key={active}
                  variants={grid}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {visible.map((offer) => (
                    <motion.div key={offer.id} variants={gridItem}>
                      <OfferCard offer={offer} locale="ar" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <CtaSection locale="ar" />
      </main>
      <Footer locale="ar" />
      <AvelineChatWidget locale="ar" />
    </>
  );
}
