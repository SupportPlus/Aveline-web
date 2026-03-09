"use client";

import { useState } from "react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { OfferCard } from "@/components/offers/offer-card";
import { OFFERS } from "@/content/offers";
import type { OfferCategory } from "@/content/offers";

const CATEGORIES: { id: OfferCategory | "all"; labelEn: string }[] = [
  { id: "all", labelEn: "All" },
  { id: "skin", labelEn: "Skin Care" },
  { id: "laser_women", labelEn: "Women Laser" },
  { id: "laser_men", labelEn: "Men Laser" },
  { id: "injectables", labelEn: "Injectables" },
  { id: "skin_boosters", labelEn: "Skin Boosters" },
  { id: "hair", labelEn: "Hair" },
  { id: "packages", labelEn: "Packages" },
];

export default function EnOffersPage() {
  const [active, setActive] = useState<OfferCategory | "all">("all");
  const visible = OFFERS.filter(
    (o) => o.isActive && (active === "all" || o.category === active)
  );

  return (
    <>
      <AvelineNavbar locale="en" />
      <main dir="ltr">
        <section className="bg-[var(--background2)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <h1 className="text-5xl font-semibold text-[var(--foreground)] text-pretty">Our Special Offers</h1>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
              Exclusive packages and offers for our luxury services at special prices. Book now before they expire.
            </p>
          </div>
        </section>

        <section className="bg-background border-b border-border sticky top-[72px] z-10">
          <div className="mx-auto max-w-6xl px-4 py-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={[
                    "px-4 py-2 rounded-xl text-sm font-semibold border transition whitespace-nowrap",
                    active === cat.id
                      ? "bg-[var(--gold)] text-white border-[var(--gold)] shadow-[0_0_14px_rgba(198,169,107,0.30)]"
                      : "border-border text-muted hover:border-[var(--gold)]/50 hover:text-[var(--gold)]",
                  ].join(" ")}
                >
                  {cat.labelEn}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--background)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            {visible.length === 0 ? (
              <div className="text-center py-20 text-[var(--muted)]">No offers in this category right now.</div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} locale="en" />
                ))}
              </div>
            )}
          </div>
        </section>

        <CtaSection locale="en" />
      </main>
      <Footer locale="en" />
      <AvelineChatWidget locale="en" />
    </>
  );
}
