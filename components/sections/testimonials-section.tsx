"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

const TESTIMONIALS = [
  {
    nameAr: "سارة م.",
    nameEn: "Sarah M.",
    serviceAr: "هايدرافيشل",
    serviceEn: "Hydrafacial",
    textAr: "تجربة رائعة وفريق محترف جدًا. البشرة أصبحت مشرقة ونضرة من أول جلسة. أنصح بشدة.",
    textEn: "Amazing experience and a very professional team. My skin glowed from the very first session. Highly recommend.",
    rating: 5,
  },
  {
    nameAr: "ريم ع.",
    nameEn: "Reem A.",
    serviceAr: "ليزر نساء",
    serviceEn: "Women Laser",
    textAr: "خدمة ممتازة وأجهزة حديثة. النتائج رائعة والموظفات محترفات جدًا وودودات.",
    textEn: "Excellent service and modern devices. Fantastic results, and the staff are very professional and welcoming.",
    rating: 5,
  },
  {
    nameAr: "نورة خ.",
    nameEn: "Noura K.",
    serviceAr: "بوتكس وفيلر",
    serviceEn: "Botox & Filler",
    textAr: "النتيجة طبيعية جدًا وجميلة. الطبيبة خبيرة ومتمكنة ودقيقة في عملها. سأعود بالتأكيد.",
    textEn: "The result is very natural and beautiful. The doctor is highly skilled and precise. I will definitely return.",
    rating: 5,
  },
  {
    nameAr: "لينا ص.",
    nameEn: "Lina S.",
    serviceAr: "إبر النضارة",
    serviceEn: "Skin Boosters",
    textAr: "لاحظت فرقًا كبيرًا في ترطيب البشرة وإشراقتها بعد الجلسة الأولى. مكان نظيف وفاخر.",
    textEn: "I noticed a huge difference in skin hydration and glow after the first session. Clean and luxurious place.",
    rating: 5,
  },
];

export function TestimonialsSection({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative bg-[var(--background2)] py-24 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(198,169,107,0.04)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
              {isAr ? "آراء عميلاتنا" : "Client Stories"}
            </span>
            <span className="h-px w-8 bg-[var(--gold)]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)]">
            {isAr ? "ماذا تقول عميلاتنا؟" : "What Our Clients Say"}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.nameEn}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col gap-4 hover:border-[var(--gold)]/25 hover:shadow-[0_4px_24px_rgba(198,169,107,0.10)] transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[var(--gold)]/15 group-hover:text-[var(--gold)]/25 transition-colors duration-400" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 font-sans">
                {isAr ? `"${t.textAr}"` : `"${t.textEn}"`}
              </p>

              <div className="pt-3 border-t border-[var(--border)]">
                <p className="font-serif text-sm text-[var(--foreground)]">
                  {isAr ? t.nameAr : t.nameEn}
                </p>
                <p className="text-xs text-[var(--gold)] mt-0.5 font-sans">
                  {isAr ? t.serviceAr : t.serviceEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
