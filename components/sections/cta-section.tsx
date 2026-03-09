"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, ChevronDown } from "lucide-react";

const BEFORE_AFTER_IMAGES = [
  { src: "/images/before-after/ba-1.jpg", alt: "Before & After 1" },
  { src: "/images/before-after/ba-2.jpg", alt: "Before & After 2" },
  { src: "/images/before-after/ba-3.jpg", alt: "Before & After 3" },
  { src: "/images/before-after/ba-4.jpg", alt: "Before & After 4" },
  { src: "/images/before-after/ba-5.jpg", alt: "Before & After 5" },
  { src: "/images/before-after/ba-6.jpg", alt: "Before & After 6" },
];

const SERVICES_AR = [
  "الهايدرافيشل", "ليزر نساء", "ليزر رجال",
  "بوتكس وفيلر", "إبر النضارة", "ديرمابن",
];
const SERVICES_EN = [
  "Hydrafacial", "Women Laser", "Men Laser",
  "Botox & Filler", "Skin Boosters", "Dermapen",
];

const inputCls =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--gold)] transition-all duration-300 font-sans";

export function CtaSection({ locale }: { locale: "ar" | "en"; phoneText?: string }) {
  const isAr = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const serviceList = isAr ? SERVICES_AR : SERVICES_EN;
  const isReady = name && phone && service;

  return (
    <section
      className="relative bg-[var(--background)] py-20 overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT — before/after mosaic */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-2 rounded-3xl overflow-hidden"
          >
            {BEFORE_AFTER_IMAGES.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-[rgba(198,169,107,0.15)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 33vw, 16vw"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback gradient tile */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6A96B]/20 to-[#9A7D47]/30 flex items-center justify-center">
                  <span className="text-[var(--gold)]/40 text-xs font-serif">{i + 1}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT — dark booking card */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-3xl p-8 md:p-10 flex flex-col gap-6"
            style={{ background: "linear-gradient(145deg, #1C1810 0%, #2A2218 100%)" }}
          >
            {/* Heading */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
                  {isAr ? "احجزي الآن" : "Book Now"}
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white">
                {isAr ? "احجزي استشارتك" : "Book Your Consultation"}
              </h2>
            </div>

            {/* Form grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                className={inputCls}
                placeholder={isAr ? "الاسم" : "Full Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={inputCls}
                placeholder={isAr ? "رقم الهاتف" : "Phone Number"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                dir="ltr"
              />

              {/* Service select */}
              <div className="relative">
                <select
                  className={`${inputCls} appearance-none pr-8 cursor-pointer`}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="" disabled>
                    {isAr ? "الخدمة المفضلة" : "Preferred Service"}
                  </option>
                  {serviceList.map((s) => (
                    <option key={s} value={s} className="bg-[#1C1810] text-white">{s}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute top-1/2 -translate-y-1/2 end-3 text-white/40 pointer-events-none" />
              </div>

              <input
                className={inputCls}
                placeholder={isAr ? "التاريخ" : "Preferred Date"}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </div>

            {/* Submit */}
            <Link
              href={isAr ? "/book" : "/en/book"}
              className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 ${
                isReady
                  ? "bg-[var(--gold)] text-white shadow-[0_4px_20px_rgba(198,169,107,0.40)] hover:bg-[var(--gold-dark)]"
                  : "bg-[var(--gold)]/80 text-white cursor-pointer"
              }`}
            >
              <Phone size={15} />
              {isAr ? "تأكيد الحجز" : "Confirm Booking"}
            </Link>

            {/* Quick contact */}
            <p className="text-center text-xs text-white/50 font-sans">
              {isAr ? "أو اتصل بنا مباشرة على " : "Or call us directly at "}
              <a href="tel:+966551234567" className="text-[var(--gold)] font-bold hover:opacity-80" dir="ltr">
                +966 55 123 4567
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
