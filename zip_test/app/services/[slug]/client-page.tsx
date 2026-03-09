"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { CheckCircle, Clock, Layers, Calendar, ArrowLeft } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { OfferCard } from "@/components/offers/offer-card";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { staggerItem, fadeUp } from "@/components/motion/variants";
import { getServiceBySlug, getOffersForService, getDoctorsForService } from "@/lib/helpers";
import { motion } from "framer-motion";

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const details = service.details.ar;
  const offers = getOffersForService(service);
  const doctors = getDoctorsForService(slug);

  return (
    <>
      <AvelineNavbar locale="ar" />
      <main dir="rtl" className="bg-[var(--background)]">
        {/* Hero */}
        <section className="relative bg-[var(--background2)] py-24 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(198,169,107,0.07),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[var(--gold)] mb-8 hover:opacity-75 transition-opacity font-sans group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                جميع الخدمات
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">{service.department}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[var(--foreground)] text-pretty">
                {service.title.ar}
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
                {service.intro.ar}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {service.highlights.ar.map((h) => (
                  <span key={h} className="px-4 py-1.5 text-sm rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/25 text-[var(--gold)] font-sans">
                    {h}
                  </span>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl">
                {[
                  { icon: Clock, label: "المدة", value: details.duration },
                  { icon: Layers, label: "الجلسات", value: details.sessions },
                  { icon: Calendar, label: "التعافي", value: details.downtime },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 flex gap-3 items-start">
                    <div className="h-9 w-9 rounded-xl bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/20 grid place-items-center shrink-0">
                      <Icon size={16} className="text-[var(--gold)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] font-sans">{label}</div>
                      <div className="text-sm font-semibold text-[var(--foreground)] mt-0.5 font-sans">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-12">
                <Reveal>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">ما هي الخدمة؟</h2>
                  <p className="text-[var(--muted)] leading-relaxed font-sans">{details.whatIsIt}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">لمن هذه الخدمة؟</h2>
                  <ul className="space-y-3">
                    {details.whoIsItFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[var(--muted)] font-sans">
                        <CheckCircle size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.15}>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">خطوات الجلسة</h2>
                  <ol className="space-y-3">
                    {details.steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/30 grid place-items-center shrink-0 text-xs font-bold text-[var(--gold)] font-sans">
                          {i + 1}
                        </span>
                        <span className="text-[var(--muted)] pt-0.5 font-sans">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              </div>
              <div className="space-y-12">
                <Reveal delay={0.2}>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">الفوائد</h2>
                  <div className="grid gap-3">
                    {details.benefits.map((b) => (
                      <div key={b} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 flex gap-3 items-start hover:border-[var(--gold)]/25 transition-colors duration-300">
                        <span className="h-2 w-2 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                        <span className="text-[var(--muted)] font-sans">{b}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
                {details.notes && details.notes.length > 0 && (
                  <Reveal delay={0.25}>
                    <h2 className="text-2xl font-serif text-[var(--foreground)] mb-5">ملاحظات مهمة</h2>
                    <ul className="space-y-2.5">
                      {details.notes.map((n) => (
                        <li key={n} className="text-sm text-[var(--muted)] flex gap-2.5 font-sans">
                          <span className="text-[var(--gold)] mt-0.5">•</span> {n}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {details.faq && details.faq.length > 0 && (
          <section className="bg-[var(--background2)] py-20">
            <div className="mx-auto max-w-4xl px-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-10">
                  <span className="h-px w-8 bg-[var(--gold)]" />
                  <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">أسئلة شائعة</span>
                </div>
                <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">أسئلة شائعة</h2>
              </Reveal>
              <StaggerReveal className="space-y-4">
                {details.faq.map(({ q, a }) => (
                  <motion.div key={q} variants={staggerItem} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)]/25 transition-colors duration-300">
                    <div className="font-serif text-[var(--foreground)] mb-2">{q}</div>
                    <div className="text-sm text-[var(--muted)] leading-relaxed font-sans">{a}</div>
                  </motion.div>
                ))}
              </StaggerReveal>
            </div>
          </section>
        )}

        {/* Doctors */}
        {doctors.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-10">
                  <span className="h-px w-8 bg-[var(--gold)]" />
                  <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">الفريق الطبي</span>
                </div>
                <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">أطباء هذه الخدمة</h2>
              </Reveal>
              <StaggerReveal className="grid gap-5 sm:grid-cols-2">
                {doctors.map((doc) => (
                  <motion.div key={doc.slug} variants={staggerItem} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex gap-5 items-start hover:border-[var(--gold)]/35 transition-colors duration-300">
                    <div className="h-14 w-14 rounded-xl bg-[var(--secondary)] border border-[var(--gold)]/25 grid place-items-center shrink-0">
                      <span className="text-xl font-serif font-bold text-[var(--gold)]">{doc.name.ar.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-serif text-[var(--foreground)]">{doc.name.ar}</div>
                      <div className="text-sm text-[var(--gold)] mt-0.5 font-sans">{doc.title.ar}</div>
                      <Link href={`/doctors/${doc.slug}`} className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--gold)] hover:opacity-75 transition-opacity font-sans">
                        عرض الملف الشخصي
                        <ArrowLeft size={11} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </StaggerReveal>
            </div>
          </section>
        )}

        {/* Offers */}
        {offers.length > 0 && (
          <section className="bg-[var(--background2)] py-20">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <div className="flex items-center gap-3 mb-10">
                  <span className="h-px w-8 bg-[var(--gold)]" />
                  <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">عروض</span>
                </div>
                <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">عروض هذه الخدمة</h2>
              </Reveal>
              <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {offers.map((offer) => (
                  <motion.div key={offer.id} variants={staggerItem}>
                    <OfferCard offer={offer} locale="ar" />
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
