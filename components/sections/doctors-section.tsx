"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { DOCTORS } from "@/content/doctors";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

export function DoctorsSection({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative bg-[var(--background2)] py-24 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(198,169,107,0.04)_0%,transparent_70%)]" />

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
                {isAr ? "فريقنا الطبي" : "Medical Team"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)]">
              {isAr ? "نخبة أطبائنا" : "Our Elite Doctors"}
            </h2>
          </div>
          <Link
            href={isAr ? "/doctors" : "/en/doctors"}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-300"
          >
            {isAr ? "عرض جميع الأطباء" : "View All Doctors"}
            <ArrowIcon size={15} />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DOCTORS.slice(0, 3).map((doctor) => (
            <motion.div key={doctor.slug} variants={staggerItem}>
              <div className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--gold)]/40 hover:shadow-[0_4px_32px_rgba(198,169,107,0.10)] transition-all duration-500">
                {/* Top avatar strip */}
                <div className="relative h-36 bg-[var(--background)] overflow-hidden flex items-end p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(198,169,107,0.08),transparent_60%)]" />

                  {/* Avatar circle */}
                  <div className="relative h-16 w-16 rounded-full bg-[var(--secondary)] border-2 border-[var(--gold)]/40 group-hover:border-[var(--gold)] transition-colors duration-400 overflow-hidden shadow-[0_0_20px_rgba(198,169,107,0.15)]">
                    {doctor.image?.src ? (
                      <Image
                        src={doctor.image.src}
                        alt={isAr ? doctor.image.alt.ar : doctor.image.alt.en}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <span className="absolute inset-0 grid place-items-center font-serif text-2xl text-[var(--gold)]">
                        {(isAr ? doctor.name.ar : doctor.name.en).charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Rating badge */}
                  <div className="absolute top-4 end-4 flex items-center gap-1 bg-[var(--card)]/90 border border-[var(--gold)]/30 rounded-full px-2.5 py-1 backdrop-blur-sm">
                    <Star size={11} className="fill-[var(--gold)] text-[var(--gold)]" />
                    <span className="text-xs font-bold text-[var(--gold)]">{doctor.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="font-serif text-base text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-300">
                      {isAr ? doctor.name.ar : doctor.name.en}
                    </h3>
                    <p className="text-xs text-[var(--gold)] mt-0.5 font-sans">
                      {isAr ? doctor.title.ar : doctor.title.en}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-[var(--muted)] shrink-0" />
                    <span className="text-xs text-[var(--muted)] font-sans">
                      {(isAr ? doctor.branches.ar : doctor.branches.en).join(", ")}
                    </span>
                  </div>

                  {/* Experience */}
                  <span className="inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(198,169,107,0.07)] border border-[var(--gold)]/15 text-[10px] tracking-widest uppercase text-[var(--gold)] font-sans">
                    {doctor.experienceYears}+ {isAr ? "سنة خبرة" : "yrs exp."}
                  </span>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {(isAr ? doctor.tags.ar : doctor.tags.en).slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)] font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <Link
                      href={isAr ? `/doctors/${doctor.slug}` : `/en/doctors/${doctor.slug}`}
                      className="rounded-full border border-[var(--gold)] px-3 py-2.5 text-xs font-bold text-[var(--gold)] text-center hover:bg-[rgba(198,169,107,0.08)] transition-all duration-300"
                    >
                      {isAr ? "الملف" : "Profile"}
                    </Link>
                    <Link
                      href={isAr ? "/book" : "/en/book"}
                      className="rounded-full bg-[var(--gold)] px-3 py-2.5 text-xs font-bold text-white text-center hover:bg-[var(--gold-dark)] transition-all duration-300 shadow-[0_2px_12px_rgba(198,169,107,0.30)]"
                    >
                      {isAr ? "احجز" : "Book"}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
