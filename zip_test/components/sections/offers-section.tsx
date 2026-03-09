"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { OfferCard } from "@/components/offers/offer-card";
import { getFeaturedOffers } from "@/lib/helpers";
import type { Locale } from "@/content/offers";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

export function OffersSection({ locale, limit = 3 }: { locale: Locale; limit?: number }) {
  const isAr = locale === "ar";
  const offers = getFeaturedOffers(limit);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative bg-[var(--background)] py-24 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Gold gradient orb */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(198,169,107,0.06)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
                {isAr ? "عروض حصرية" : "Exclusive Offers"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)]">
              {isAr ? "عروضنا الخاصة" : "Our Special Offers"}
            </h2>
          </div>
          <Link
            href={isAr ? "/offers" : "/en/offers"}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-300"
          >
            {isAr ? "عرض جميع العروض" : "View All Offers"}
            <ArrowIcon size={15} />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={staggerItem}>
              <OfferCard offer={offer} locale={locale} onBook={() => {}} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
