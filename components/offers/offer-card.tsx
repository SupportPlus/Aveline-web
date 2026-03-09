"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Offer, Locale } from "@/content/offers";
import { formatSar } from "@/lib/helpers";
import Link from "next/link";
import { Phone } from "lucide-react";

// Map offer category → a subtle tint overlay color for the image
const CATEGORY_TINT: Record<string, string> = {
  laser_women: "rgba(200,130,180,0.45)",
  laser_men: "rgba(80,120,200,0.40)",
  skin: "rgba(198,169,107,0.38)",
  injectables: "rgba(180,100,100,0.38)",
  packages: "rgba(198,169,107,0.42)",
  hair: "rgba(100,160,130,0.38)",
  default: "rgba(198,169,107,0.38)",
};

export function OfferCard({ offer, locale, onBook }: { offer: Offer; locale: Locale; onBook?: (o: Offer) => void }) {
  const isAr = locale === "ar";
  const t = <T extends { ar: string; en: string }>(x: T) => (isAr ? x.ar : x.en);
  const tint = CATEGORY_TINT[offer.category] ?? CATEGORY_TINT.default;

  return (
    <motion.div
      dir={isAr ? "rtl" : "ltr"}
      whileHover={{ y: -4, boxShadow: "0 0 50px rgba(198,169,107,0.20)" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] flex flex-col h-full"
    >
      {/* ── Top image block ── */}
      <div className="relative h-52 overflow-hidden">
        {/* Clinic interior photo */}
        <Image
          src={offer.image?.src ?? "/images/clinic-interior.jpg"}
          alt={offer.image ? t(offer.image.alt) : ""}
          fill
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Category tint overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(160deg, ${tint} 0%, rgba(10,10,10,0.55) 100%)` }}
        />

        {/* Bottom fade to card bg */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--card)] to-transparent" />

        {/* Gold shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent" />

        {/* Campaign badge */}
        {offer.isSeasonal && offer.campaignLabel && (
          <div className="absolute top-3 start-3">
            <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-bold bg-black/40 text-[var(--gold)] border border-[var(--gold)]/50 backdrop-blur-sm">
              {t(offer.campaignLabel)}
            </span>
          </div>
        )}

        {/* Discount badge */}
        {typeof offer.discountPercent === "number" && (
          <div className="absolute top-3 end-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-black bg-[var(--gold)] text-white shadow-[0_0_20px_rgba(198,169,107,0.5)]">
              -{offer.discountPercent}%
            </span>
          </div>
        )}

        {/* Offer title overlay on image */}
        <div className="absolute bottom-4 start-4 end-4">
          <h3 className="font-serif text-base text-white drop-shadow-md leading-snug">
            {t(offer.title)}
          </h3>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-5 flex flex-col flex-1 gap-4">
        {offer.description && (
          <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">{t(offer.description)}</p>
        )}

        {/* Included */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-semibold mb-2 font-sans">
            {isAr ? "الخدمات المشمولة" : "Included Services"}
          </p>
          <ul className="space-y-1.5">
            {(isAr ? offer.included.ar : offer.included.en).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[var(--muted)] font-sans">
                <span className="mt-2 h-1 w-1 rounded-full bg-[var(--gold)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-[var(--border)] mt-auto flex items-end justify-between gap-2">
          <div>
            {offer.oldPriceSar && (
              <p className="text-xs text-[var(--muted)] line-through font-sans mb-0.5">
                {formatSar(offer.oldPriceSar)} SAR
              </p>
            )}
            <p className="text-2xl font-black text-[var(--gold)] font-sans">
              {formatSar(offer.priceSar)}{" "}
              <span className="text-sm font-semibold text-[var(--foreground)]">SAR</span>
            </p>
          </div>
          {offer.validUntil && (
            <p className="text-xs text-[var(--muted)] text-end font-sans">
              {isAr ? "ساري حتى" : "Valid until"}<br />
              <span className="text-[var(--foreground)]">{offer.validUntil}</span>
            </p>
          )}
        </div>

        {/* CTA */}
        <Link
          href={isAr ? "/book" : "/en/book"}
          onClick={() => onBook?.(offer)}
          className="group w-full flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold bg-[var(--gold)] text-white hover:bg-[var(--gold-dark)] transition-all duration-300 shadow-[0_4px_16px_rgba(198,169,107,0.30)] hover:shadow-[0_6px_28px_rgba(198,169,107,0.45)]"
        >
          <Phone size={13} />
          {isAr ? "احجز العرض" : "Book Offer"}
        </Link>
      </div>
    </motion.div>
  );
}
