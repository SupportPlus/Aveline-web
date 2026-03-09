"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { Reveal, StaggerReveal } from "@/components/motion/reveal";
import { staggerItem } from "@/components/motion/variants";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    titleAr: "الهاتف",
    valueAr: "+966 55 123 4567",
    href: "tel:+966551234567",
  },
  {
    icon: Mail,
    titleAr: "البريد الإلكتروني",
    valueAr: "info@aveline-clinic.com",
    href: "mailto:info@aveline-clinic.com",
  },
  {
    icon: MapPin,
    titleAr: "الموقع",
    valueAr: "الرياض، المملكة العربية السعودية",
    href: null,
  },
  {
    icon: Clock,
    titleAr: "ساعات العمل",
    valueAr: "السبت – الخميس: 9 ص – 10 م",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <AvelineNavbar locale="ar" />
      <main dir="rtl" className="bg-[var(--background)]">
        {/* Header */}
        <section className="relative bg-[var(--background2)] py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(198,169,107,0.07),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">تواصل معنا</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[var(--foreground)] text-pretty">
                نحن هنا لمساعدتك
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
                تواصلي معنا عبر أي قناة تناسبك وسيرد عليك فريقنا في أقرب وقت
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_ITEMS.map(({ icon: Icon, titleAr, valueAr, href }) => (
                <motion.div
                  key={titleAr}
                  variants={staggerItem}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7
                             hover:border-[var(--gold)]/40 hover:shadow-[0_0_40px_rgba(198,169,107,0.08)]
                             transition-all duration-500 flex flex-col gap-4 items-center text-center"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/20 grid place-items-center group-hover:border-[var(--gold)]/40 transition-colors duration-300">
                    <Icon size={22} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-2 font-sans">
                      {titleAr}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--gold)] transition-colors duration-200 font-sans"
                      >
                        {valueAr}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-[var(--foreground)] font-sans">{valueAr}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* WhatsApp CTA block */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="relative rounded-3xl border border-[var(--gold)]/20 bg-[var(--card)] overflow-hidden p-12 md:p-16 text-center shadow-[0_0_80px_rgba(198,169,107,0.05)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(198,169,107,0.06),transparent_60%)]" />
                <div className="relative">
                  <div className="mx-auto h-px w-14 bg-[var(--gold)] mb-8" />
                  <h2 className="text-3xl md:text-4xl font-serif text-[var(--foreground)] mb-5">
                    تواصل أسرع عبر واتساب
                  </h2>
                  <p className="text-[var(--muted)] max-w-lg mx-auto mb-10 leading-relaxed font-sans">
                    للاستفسارات السريعة والحجز الفوري، تواصلي معنا عبر واتساب وسيرد عليك فريقنا في أقرب وقت
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="https://wa.me/966551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[var(--gold)] text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(198,169,107,0.35)] hover:shadow-[0_0_50px_rgba(198,169,107,0.5)] transition-shadow duration-300 font-sans"
                    >
                      <MessageCircle size={16} />
                      تواصل عبر واتساب
                    </motion.a>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-[var(--gold)] text-[var(--gold)] font-semibold text-sm hover:bg-[rgba(198,169,107,0.08)] transition-colors duration-300 font-sans"
                      >
                        نموذج الحجز
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale="ar" />
      <AvelineChatWidget locale="ar" />
    </>
  );
}
