"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Cpu, Sparkles } from "lucide-react";

const TRUST_BADGES = [
  { icon: ShieldCheck, labelAr: "أطباء معتمدون",  labelEn: "Certified Doctors" },
  { icon: Cpu,         labelAr: "أجهزة معتمدة",   labelEn: "Certified Devices" },
  { icon: Sparkles,    labelAr: "نتائج طبيعية",   labelEn: "Natural Results" },
];

const MARQUEE_ITEMS = [
  "Hydrafacial", "هايدرافيشل", "Laser", "ليزر", "Botox", "بوتكس",
  "Dermapen", "ديرمابن", "Glass Skin", "بشرة زجاجية", "Filler", "فيلر",
  "Hair Mesotherapy", "ميزوثيرابي",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function HeroSection({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";

  return (
    <section
      className="relative overflow-hidden min-h-[90vh]"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Clinic interior background image — faded for both themes */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clinic-interior.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Light mode overlay — ivory gradient fade */}
        <div className="absolute inset-0 dark:hidden" style={{
          background: "linear-gradient(135deg, rgba(247,242,233,0.88) 0%, rgba(239,230,216,0.82) 30%, rgba(247,242,233,0.70) 60%, rgba(239,230,216,0.92) 100%)"
        }} />
        {/* Dark mode overlay — deep black fade like v10 screenshot */}
        <div className="absolute inset-0 hidden dark:block" style={{
          background: "linear-gradient(135deg, rgba(18,18,18,0.92) 0%, rgba(18,18,18,0.80) 40%, rgba(18,18,18,0.70) 60%, rgba(18,18,18,0.95) 100%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12 min-h-[90vh] flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Subtitle line */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
              {isAr ? "عيادة تجميلية فاخرة · الرياض" : "Luxury Aesthetic Clinic · Riyadh"}
            </span>
          </motion.div>

          {/* Arabic headline */}
          <motion.h1 variants={item} className="font-serif leading-[1.15] text-pretty">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--foreground)]">
              {isAr ? "إشراقة طبية..." : "Medical Radiance..."}
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--foreground)] mt-1">
              {isAr ? "بمعايير فاخرة" : "Luxury Standards"}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={item} className="mt-6 text-base sm:text-lg text-[var(--muted)] font-sans leading-relaxed max-w-lg">
            {isAr
              ? "أحدث تقنيات التجميل الطبي والليزر بإشراف أطباء معتمدين — لأنّ جمالك يستحق الأفضل"
              : "The latest medical cosmetic and laser technologies supervised by certified doctors — because your beauty deserves the best"}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link
              href={isAr ? "/book" : "/en/book"}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--gold)] text-white font-bold text-sm tracking-wide hover:bg-[var(--gold-dark)] transition-all duration-300 shadow-[0_4px_24px_rgba(198,169,107,0.40)]"
            >
              {isAr ? "احجزي موعدك الآن" : "Book Now"}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://wa.me/966551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-[var(--foreground)]/20 text-[var(--foreground)] font-semibold text-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 backdrop-blur-sm bg-[var(--card)]/40"
            >
              <MessageCircle size={16} />
              {isAr ? "واتساب" : "WhatsApp"}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-5">
            {TRUST_BADGES.map(({ icon: Icon, labelAr, labelEn }) => (
              <div
                key={labelEn}
                className="flex items-center gap-2.5"
              >
                <div className="h-7 w-7 rounded-full bg-[rgba(198,169,107,0.15)] grid place-items-center shrink-0">
                  <Icon size={13} className="text-[var(--gold)]" />
                </div>
                <span className="text-sm text-[var(--muted)] font-sans">
                  {isAr ? labelAr : labelEn}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling marquee strip */}
      <div className="relative z-10 border-t border-[var(--gold)]/15 overflow-hidden py-3.5 bg-[var(--background)]/60 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 text-[10px] tracking-[0.28em] uppercase text-[var(--muted)] font-sans">
              {text}
              <span className="h-px w-4 bg-[var(--gold)]/50 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
