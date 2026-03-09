"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer({ locale }: { locale: "ar" | "en" }) {
  const isAr = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const quickLinks = isAr
    ? [
        { href: "/",         label: "الرئيسية" },
        { href: "/services", label: "خدماتنا" },
        { href: "/doctors",  label: "الأطباء" },
        { href: "/offers",   label: "العروض" },
        { href: "/book",     label: "احجز موعد" },
        { href: "/contact",  label: "اتصل بنا" },
      ]
    : [
        { href: "/en",          label: "Home" },
        { href: "/en/services", label: "Services" },
        { href: "/en/doctors",  label: "Doctors" },
        { href: "/en/offers",   label: "Offers" },
        { href: "/en/book",     label: "Book Now" },
        { href: "/en/contact",  label: "Contact" },
      ];

  const services = isAr
    ? ["خدماتنا", "رقم الهاتف", "قبل/بعد", "الأطباء", "احجز موعد", "اتصل بنا"]
    : ["Services", "Phone", "Before/After", "Doctors", "Book Now", "Contact Us"];

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter,   label: "X",         href: "#" },
    { icon: Youtube,   label: "YouTube",   href: "#" },
    { icon: Facebook,  label: "Facebook",  href: "#" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1C1810 0%, #141008 100%)" }}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Gold top line */}
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#C6A96B_40%,#C6A96B_60%,transparent)]" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="flex flex-col mb-1">
                <span className="font-serif text-2xl tracking-[0.15em] text-[var(--gold)]">
                  {isAr ? "أفيلين" : "AVELINE"}
                </span>
                <span className="font-serif text-sm tracking-[0.15em] text-white/60">
                  {isAr ? "AVELINE" : "أفيلين"}
                </span>
                <span className="font-serif text-xs tracking-[0.25em] text-white/40 uppercase mt-0.5">
                  {isAr ? "CLINIC" : "عيادة تجميلية"}
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-sans mb-6">
              {isAr
                ? "Aveline brand ckelo centres brand duoory hennsinen pollets for a luxury Saudi medical beauty center."
                : "Aveline brand centres bringing luxury Saudi medical beauty standards to the world."}
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-8 w-8 rounded-full border border-white/15 grid place-items-center text-white/50 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm text-white mb-5 tracking-wide">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors duration-200 font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-sm text-white mb-5 tracking-wide">
              {isAr ? "خدماتنا" : "Services"}
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors duration-200 cursor-default font-sans">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm text-white mb-5 tracking-wide">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+966 55 123 4567", href: "tel:+966551234567" },
                { icon: MapPin, text: isAr ? "Riyadh" : "Riyadh", href: undefined },
                { icon: Clock, text: isAr ? "السبت – الخميس: 9ص – 10م" : "Sat – Thu: 9AM – 10PM", href: undefined },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex gap-3 items-start">
                  <Icon size={13} className="text-[var(--gold)] mt-0.5 shrink-0" />
                  {href ? (
                    <a href={href} className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors font-sans" dir="ltr">
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-white/50 font-sans">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30 font-sans">
          <p suppressHydrationWarning>
            {isAr
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()} أفيلين`
              : `© ${new Date().getFullYear()} Aveline Clinics. All Rights Reserved.`}
          </p>
          <p className="text-white/20">
            {isAr
              ? "All Rights Reserved © Aveline Clinic"
              : "جميع الحقوق محفوظة © عيادة أفيلين"}
          </p>
        </div>
      </div>
    </footer>
  );
}
