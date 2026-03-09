"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, Droplets, Zap, Sparkles, User, Syringe, Star } from "lucide-react";
import { SERVICES } from "@/content/services";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

const FEATURED_SLUGS = ["hydrafacial", "dermapen", "laser-women", "laser-men", "botox", "filler"];

const DEPT_LABELS: Record<string, { ar: string; en: string }> = {
  skin: { ar: "البشرة", en: "Skin Care" },
  laser_women: { ar: "ليزر نساء", en: "Women Laser" },
  laser_men: { ar: "ليزر رجال", en: "Men Laser" },
  injectables: { ar: "الحقن التجميلي", en: "Injectables" },
  hair: { ar: "الشعر", en: "Hair" },
};

// Unique icon + gradient per service
const SERVICE_VISUALS: Record<string, {
  icon: React.ElementType;
  gradient: string;
  glow: string;
}> = {
  "hydrafacial": { icon: Droplets, gradient: "from-[#e8f4f8] via-[#d0eaf5] to-[#EFE6D8]", glow: "rgba(100,180,220,0.18)" },
  "dermapen": { icon: Zap, gradient: "from-[#f5f0e8] via-[#EFE6D8] to-[#e8dcc8]", glow: "rgba(198,169,107,0.20)" },
  "laser-women": { icon: Sparkles, gradient: "from-[#f8eff5] via-[#f0e0ec] to-[#EFE6D8]", glow: "rgba(200,140,180,0.18)" },
  "laser-men": { icon: User, gradient: "from-[#e8eff8] via-[#d8e8f5] to-[#EFE6D8]", glow: "rgba(100,140,210,0.18)" },
  "botox": { icon: Star, gradient: "from-[#f8f5e8] via-[#f5eecf] to-[#EFE6D8]", glow: "rgba(198,169,107,0.22)" },
  "filler": { icon: Syringe, gradient: "from-[#f5ebe8] via-[#f0ddd8] to-[#EFE6D8]", glow: "rgba(200,130,110,0.16)" },
};

export function FeaturedServicesSection({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";
  const items = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative bg-[var(--background2)] py-24 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Large gold orb */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(198,169,107,0.05)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        {/* Heading */}
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
                {isAr ? "خدماتنا" : "Our Services"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)]">
              {isAr ? "خدماتنا المميزة" : "Featured Services"}
            </h2>
          </div>
          <Link
            href={isAr ? "/services" : "/en/services"}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-300"
          >
            {isAr ? "عرض جميع الخدمات" : "View All Services"}
            <ArrowIcon size={15} />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((service) => {
            const dept = DEPT_LABELS[service.department] ?? { ar: "عناية", en: "Care" };
            const visual = SERVICE_VISUALS[service.slug] ?? {
              icon: Sparkles,
              gradient: "from-[#f5f0e8] via-[#EFE6D8] to-[#e8dcc8]",
              glow: "rgba(198,169,107,0.15)",
            };
            const Icon = visual.icon;

            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link
                  href={isAr ? `/services/${service.slug}` : `/en/services/${service.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(198,169,107,0.15)] h-full"
                >
                  {/* Top visual block */}
                  <div className={`relative h-48 bg-gradient-to-br ${visual.gradient} dark:from-[#1e1e1e] dark:via-[#1a1a1a] dark:to-[#222] overflow-hidden`}>

                    {/* Radial glow */}
                    <div
                      className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(ellipse at 50% 60%, ${visual.glow}, transparent 65%)` }}
                    />

                    {/* Large centered icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* icon glow ring */}
                        <div
                          className="absolute inset-0 rounded-full blur-2xl scale-150 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                          style={{ background: visual.glow }}
                        />
                        <div className="relative h-20 w-20 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-[var(--gold)]/25 grid place-items-center shadow-lg group-hover:scale-105 transition-transform duration-500">
                          <Icon
                            size={32}
                            className="text-[var(--gold)] drop-shadow-sm"
                            strokeWidth={1.25}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Category badge — bottom */}
                    <div className="absolute inset-0 flex items-end p-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase border border-[var(--gold)]/30 text-[var(--gold)] bg-white/70 dark:bg-black/40 backdrop-blur-sm font-sans">
                        {isAr ? dept.ar : dept.en}
                      </span>
                    </div>

                    {/* Corner number */}
                    <span className="absolute top-5 end-5 font-serif text-5xl text-[var(--gold)]/8 leading-none select-none group-hover:text-[var(--gold)]/14 transition-colors duration-500">
                      {String(FEATURED_SLUGS.indexOf(service.slug) + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    <h3 className="font-serif text-lg text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-300">
                      {isAr ? service.title.ar : service.title.en}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed font-sans flex-1">
                      {isAr ? service.intro.ar : service.intro.en}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {(isAr ? service.highlights.ar : service.highlights.en).slice(0, 2).map((h) => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] font-sans">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">
                      {isAr ? "اعرف أكثر" : "Learn More"}
                      <ArrowIcon size={14} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom gold sweep */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
