"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { SERVICES } from "@/content/services";
import { StaggerReveal } from "@/components/motion/reveal";
import { staggerItem } from "@/components/motion/variants";

const DEPT_LABELS: Record<string, { ar: string }> = {
  skin:          { ar: "البشرة" },
  laser_women:   { ar: "ليزر نساء" },
  laser_men:     { ar: "ليزر رجال" },
  injectables:   { ar: "الحقن التجميلي" },
  hair:          { ar: "الشعر" },
  dermatology:   { ar: "الجلدية" },
  skin_boosters: { ar: "إبر النضارة" },
};

export default function ServicesPage() {
  return (
    <>
      <AvelineNavbar locale="ar" />
      <main dir="rtl">
        {/* Page header */}
        <section className="relative bg-[var(--background2)] py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(198,169,107,0.07),transparent_65%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">خدماتنا</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[var(--foreground)] text-pretty">
                خدماتنا المتكاملة
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
                اكتشفي مجموعة خدماتنا في الطب التجميلي والعناية بالبشرة والشعر، المقدمة بإشراف أطباء معتمدين
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-[var(--background)] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, i) => (
                <motion.div key={service.id} variants={staggerItem}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,169,107,0.08)] h-full"
                  >
                    {/* Top visual */}
                    <div className="relative h-44 bg-[var(--background)] overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(198,169,107,0.10),transparent_60%)] group-hover:opacity-150 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-end p-5">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase border border-[var(--gold)]/30 text-[var(--gold)] bg-[var(--card)]/80 font-sans">
                          {DEPT_LABELS[service.department]?.ar ?? service.department}
                        </span>
                      </div>
                      <span className="absolute top-5 end-5 font-serif text-5xl text-[var(--gold)]/5 leading-none select-none group-hover:text-[var(--gold)]/10 transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1 gap-3">
                      <h2 className="font-serif text-lg text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-300">
                        {service.title.ar}
                      </h2>
                      <p className="text-sm text-[var(--muted)] leading-relaxed font-sans flex-1">
                        {service.intro.ar}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.ar.slice(0, 2).map((h) => (
                          <span key={h} className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] font-sans">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">
                        اعرف أكثر
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--gold)] group-hover:w-full transition-all duration-700" />
                  </Link>
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
