"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Cpu, Leaf } from "lucide-react";
import { staggerContainer, staggerItem } from "@/components/motion/variants";

const TOP_FEATURES = [
  { icon: Leaf,  labelAr: "نتائج طبيعية",  labelEn: "Natural Results",         subAr: "Natural Results",         subEn: "Natural Results" },
  { icon: Cpu,   labelAr: "أطباء متخصصون", labelEn: "Specialist Doctors",       subAr: "Specialist Doctors",      subEn: "Specialist Doctors" },
  { icon: Award, labelAr: "أجهزة معتمدة عالمياً", labelEn: "Global Certified Devices", subAr: "Global Certified Devices", subEn: "Global Certified Devices" },
];

const CHECKLIST = [
  { ar: "تجربة مخصصة لكِ",       en: "A personalized experience for you" },
  { ar: "بيئة طبية آمنة وفاخرة", en: "A safe and luxurious medical environment" },
  { ar: "استخدام أحدث التقنيات العالمية", en: "Using the latest global technologies" },
];

export function WhyUsSection({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="relative py-24 overflow-hidden bg-[var(--background)]"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
              {isAr ? "التزامنا بالتميز" : "Our Commitment"}
            </span>
            <span className="h-px w-8 bg-[var(--gold)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--foreground)]">
            {isAr ? "التزامنا بالتميز" : "Our Commitment to Excellence"}
          </h2>
          <p className="mt-3 text-[var(--muted)] font-sans max-w-lg mx-auto text-sm leading-relaxed">
            {isAr
              ? "التزامنا بالتميز المتصل بالمعايير الطبية ولبينات الإنسان ومنتوبات النسا من تقنيات متقدمة ونتائج طبيعية مخصصة لجمالك."
              : "Our commitment to excellence blends international medical standards with advanced technology and personalized natural results for you."}
          </p>
        </motion.div>

        {/* 3 feature badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {TOP_FEATURES.map(({ icon: Icon, labelAr, labelEn, subAr, subEn }) => (
            <motion.div
              key={labelEn}
              variants={staggerItem}
              className="flex items-center gap-4 bg-[var(--card)] rounded-2xl border border-[var(--border)] px-6 py-5 hover:border-[var(--gold)]/35 hover:shadow-[0_4px_24px_rgba(198,169,107,0.12)] transition-all duration-400"
            >
              <div className="h-12 w-12 rounded-full bg-[rgba(198,169,107,0.10)] border border-[var(--gold)]/20 grid place-items-center shrink-0">
                <Icon size={20} className="text-[var(--gold)]" />
              </div>
              <div>
                <p className="font-serif text-sm text-[var(--foreground)] font-semibold">
                  {isAr ? labelAr : labelEn}
                </p>
                <p className="text-[11px] text-[var(--muted)] font-sans mt-0.5">
                  {isAr ? subAr : subEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column: image left, content right */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Clinic interior image */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          >
            <Image
              src="/images/clinic-interior.jpg"
              alt={isAr ? "داخل عيادة أفيلين الفاخرة" : "Aveline luxury clinic interior"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--gold)] rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--gold)] rounded-br-3xl" />
          </motion.div>

          {/* Text + checklist */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
                {isAr ? "لماذا أفيلين؟" : "Why Aveline?"}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--foreground)] mb-4">
              {isAr ? "لماذا أفيلين؟" : "Why Choose Aveline?"}
            </h3>
            <p className="text-[var(--muted)] font-sans text-sm leading-relaxed mb-8">
              {isAr
                ? "لأن أفيلين؟ لأن أفيلين؟ اس أعكس القيمات الوقف. ونمد برساموون عدل على أن المرشيرد بعدم إرجاء والقائمة العائدي."
                : "Because Aveline reflects our commitment to you. We provide expert care with the highest standards of luxury and precision."}
            </p>

            <ul className="space-y-4">
              {CHECKLIST.map(({ ar, en }) => (
                <li key={en} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-[var(--foreground)] font-sans text-sm font-medium">
                    {isAr ? ar : en}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
