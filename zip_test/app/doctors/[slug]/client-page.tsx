"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { Star, MapPin, Award, CheckCircle, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { staggerItem } from "@/components/motion/variants";
import { getDoctorBySlug } from "@/lib/helpers";
import { SERVICES } from "@/content/services";
import { DOCTORS } from "@/content/doctors";
import { motion } from "framer-motion";

export default function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const doctorServices = SERVICES.filter((s) => doctor.services.includes(s.slug));

  return (
    <>
      <AvelineNavbar locale="ar" />
      <main dir="rtl" className="bg-[var(--background)]">
        {/* Hero */}
        <section className="relative bg-[var(--background2)] py-24 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(198,169,107,0.07),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <Link href="/doctors" className="inline-flex items-center gap-2 text-sm text-[var(--gold)] mb-8 hover:opacity-75 transition-opacity font-sans group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                جميع الأطباء
              </Link>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="h-32 w-32 rounded-3xl bg-[var(--card)] border border-[var(--gold)]/35 overflow-hidden shrink-0 shadow-[0_4px_40px_rgba(198,169,107,0.12)]">
                  {doctor.image?.src ? (
                    <img src={doctor.image.src} alt={doctor.image.alt.ar} className="h-full w-full object-cover" />
                  ) : (
                    <span className="h-full w-full grid place-items-center text-5xl font-serif font-bold text-[var(--gold)] select-none">{doctor.name.ar.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-3 py-1.5 rounded-full bg-[rgba(198,169,107,0.08)] text-[var(--gold)] font-semibold border border-[var(--gold)]/20 font-sans">
                      {doctor.experienceYears}+ سنة خبرة
                    </span>
                    <div className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/20 text-[var(--gold)] font-semibold font-sans">
                      <Star size={11} className="fill-[var(--gold)]" />
                      {doctor.rating}
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] text-pretty">{doctor.name.ar}</h1>
                  <p className="mt-2 text-lg text-[var(--gold)] font-sans">{doctor.title.ar}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <MapPin size={14} className="text-[var(--muted)] shrink-0" />
                    <span className="text-sm text-[var(--muted)] font-sans">{doctor.branches.ar.join(", ")}</span>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/book" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--gold)] text-white text-sm font-bold shadow-[0_4px_24px_rgba(198,169,107,0.35)] hover:shadow-[0_6px_40px_rgba(198,169,107,0.5)] transition-shadow duration-300 font-sans">
                      <Phone size={14} />
                      احجزي موعد
                    </Link>
                    <a href="https://wa.me/966551234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[var(--gold)] text-[var(--gold)] text-sm font-semibold hover:bg-[rgba(198,169,107,0.08)] transition-colors duration-300 font-sans">
                      <MessageCircle size={14} />
                      واتساب
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bio + Sidebar */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-10">
                <Reveal>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">نبذة تعريفية</h2>
                  <p className="text-[var(--muted)] leading-relaxed font-sans">{doctor.bio.ar}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">مجالات التخصص</h2>
                  <div className="flex flex-wrap gap-3">
                    {doctor.tags.ar.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 text-sm rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/25 text-[var(--gold)] font-sans">{tag}</span>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="space-y-5">
                {doctor.certifications.ar.length > 0 && (
                  <Reveal delay={0.15}>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                      <div className="flex items-center gap-2 mb-5">
                        <Award size={15} className="text-[var(--gold)]" />
                        <span className="font-serif text-[var(--foreground)]">الشهادات والمؤهلات</span>
                      </div>
                      <ul className="space-y-3">
                        {doctor.certifications.ar.map((cert) => (
                          <li key={cert} className="flex gap-2.5 text-sm text-[var(--muted)] font-sans">
                            <CheckCircle size={14} className="text-[var(--gold)] mt-0.5 shrink-0" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )}
                <Reveal delay={0.2}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                    <div className="font-serif text-[var(--foreground)] mb-5">الفروع</div>
                    <ul className="space-y-2.5">
                      {doctor.branches.ar.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-[var(--muted)] font-sans">
                          <MapPin size={14} className="text-[var(--gold)] mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        {doctorServices.length > 0 && (
          <section className="bg-[var(--background2)] py-20">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-10">
                  <span className="h-px w-8 bg-[var(--gold)]" />
                  <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">تخصصات</span>
                </div>
                <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">الخدمات المقدمة</h2>
              </Reveal>
              <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {doctorServices.map((service) => (
                  <motion.div key={service.slug} variants={staggerItem}>
                    <Link href={`/services/${service.slug}`} className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-[var(--gold)]/35 hover:shadow-[0_4px_24px_rgba(198,169,107,0.10)] transition-all duration-400">
                      <div className="font-serif text-[var(--foreground)] mb-1.5 group-hover:text-[var(--gold)] transition-colors duration-300">{service.title.ar}</div>
                      <div className="text-sm text-[var(--muted)] leading-relaxed font-sans line-clamp-2">{service.intro.ar}</div>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--gold)] font-semibold font-sans">
                        التفاصيل
                        <ArrowLeft size={11} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </StaggerReveal>
            </div>
          </section>
        )}

        <CtaSection locale="ar" />
      </main>
      <Footer locale="ar" />
      <AvelineChatWidget locale="ar" />
    </>
  );
}
