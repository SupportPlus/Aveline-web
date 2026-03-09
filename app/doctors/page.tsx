"use client";

import Link from "next/link";
import { Star, MapPin, ArrowLeft } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { staggerItem } from "@/components/motion/variants";
import { DOCTORS } from "@/content/doctors";
import { motion } from "framer-motion";

export default function DoctorsPage() {
  return (
    <>
      <AvelineNavbar locale="ar" />
        <main dir="rtl" className="bg-[var(--background)]">
        {/* Header */}
        <section className="relative bg-[var(--background2)] py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(198,169,107,0.07),transparent_65%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">فريقنا الطبي</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[var(--foreground)] text-pretty">
                نخبة أطبائنا
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
                فريق من أبرز المتخصصين في الطب التجميلي والجلدي بخبرات واسعة وشهادات معتمدة
              </p>
            </Reveal>
          </div>
        </section>

        {/* Doctors grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <StaggerReveal className="grid gap-6 sm:grid-cols-2">
              {DOCTORS.map((doctor) => (
                <motion.div
                  key={doctor.slug}
                  variants={staggerItem}
                  className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] overflow-hidden
                             hover:border-[var(--gold)]/40 hover:shadow-[0_0_60px_rgba(198,169,107,0.08)]
                             transition-all duration-500"
                >
                  {/* Top accent bar */}
                  <div className="h-0.5 w-0 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />

                  <div className="p-7 flex gap-6 items-start">
                    {/* Avatar */}
                    <div className="h-24 w-24 rounded-2xl bg-[var(--background)] border border-[var(--gold)]/25
                                    overflow-hidden shrink-0 group-hover:border-[var(--gold)]/50
                                    transition-colors duration-300 shadow-[0_0_20px_rgba(198,169,107,0.05)]">
                      {doctor.image?.src ? (
                        <img src={doctor.image.src} alt={doctor.image.alt.ar} className="h-full w-full object-cover" />
                      ) : (
                        <span className="h-full w-full grid place-items-center text-3xl font-serif text-[var(--gold)] font-bold select-none">
                          {doctor.name.ar.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-[rgba(198,169,107,0.08)] text-[var(--gold)] font-semibold border border-[var(--gold)]/20 font-sans">
                          {doctor.experienceYears}+ سنة خبرة
                        </span>
                        <div className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/20 text-[var(--gold)] font-semibold font-sans">
                          <Star size={11} className="fill-[var(--gold)]" />
                          {doctor.rating}
                        </div>
                      </div>

                      <h2 className="font-serif text-xl text-[var(--foreground)] text-balance group-hover:text-[var(--gold)] transition-colors duration-300">
                        {doctor.name.ar}
                      </h2>
                      <p className="text-sm text-[var(--gold)] mt-1 font-sans">{doctor.title.ar}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin size={12} className="text-[var(--muted)] shrink-0" />
                        <span className="text-xs text-[var(--muted)] font-sans">{doctor.branches.ar.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="px-7 pb-4 flex flex-wrap gap-2">
                    {doctor.tags.ar.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="px-7 pb-7 grid grid-cols-2 gap-3">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="group/btn flex items-center justify-center gap-2 rounded-full border border-[var(--gold)] px-4 py-2.5 text-sm font-semibold text-[var(--gold)] hover:bg-[rgba(198,169,107,0.08)] transition-all duration-300 font-sans"
                    >
                      الملف الشخصي
                      <ArrowLeft size={13} className="group-hover/btn:-translate-x-0.5 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="/book"
                      className="flex items-center justify-center rounded-full bg-[var(--gold)] px-4 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(198,169,107,0.25)] hover:shadow-[0_0_35px_rgba(198,169,107,0.45)] transition-shadow duration-300 font-sans"
                    >
                      احجز موعد
                    </Link>
                  </div>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        <CtaSection locale="ar" />
      </main>
      <Footer locale="ar" />
      <AvelineChatWidget locale="ar" />
    </>
  );
}
