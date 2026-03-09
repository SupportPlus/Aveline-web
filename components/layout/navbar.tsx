"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Phone, MapPin } from "lucide-react";

type Locale = "ar" | "en";

const drawerVariants = {
  closed: { opacity: 0, x: "100%" },
  open:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, x: "100%", transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } },
};

export function AvelineNavbar({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = isAr
    ? [
        { href: "/",         label: "الرئيسية" },
        { href: "/services", label: "خدماتنا" },
        { href: "/doctors",  label: "الأطباء" },
        { href: "/offers",   label: "العروض" },
        { href: "/contact",  label: "اتصل بنا" },
      ]
    : [
        { href: "/en",          label: "Home" },
        { href: "/en/services", label: "Services" },
        { href: "/en/doctors",  label: "Doctors" },
        { href: "/en/offers",   label: "Offers" },
        { href: "/en/contact",  label: "Contact" },
      ];

  const bookHref  = isAr ? "/book" : "/en/book";
  const langHref  = isAr ? "/en" : "/";
  const langLabel = isAr ? "EN" : "ع";

  return (
    <>
      {/* Top info strip */}
      <div className="relative z-50 bg-[var(--background2)] border-b border-[var(--border)] text-[var(--muted)] text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="tel:+966551234567" className="flex items-center gap-1.5 hover:text-[var(--gold)] transition-colors duration-200">
              <Phone size={11} className="text-[var(--gold)]" />
              <span dir="ltr">+966 55 123 4567</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={11} className="text-[var(--gold)]" />
              {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
            </span>
          </div>
          <span className="hidden sm:block">
            {isAr ? "السبت – الخميس: 9 ص – 10 م" : "Sat – Thu: 9 AM – 10 PM"}
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        dir={isAr ? "rtl" : "ltr"}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--background2)]/95 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-[var(--border)]"
            : "bg-[var(--background)]/80 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href={isAr ? "/" : "/en"} className="flex flex-col leading-none shrink-0 group">
            <span className="font-serif text-xl tracking-[0.2em] gold-shimmer">AVELINE</span>
            <span className="text-[9px] tracking-[0.3em] text-[var(--muted)] uppercase font-sans mt-0.5 group-hover:text-[var(--gold)] transition-colors duration-300">
              {isAr ? "عيادة تجميلية" : "Aesthetic Clinic"}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-300 group font-sans"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Lang switch */}
            <Link
              href={langHref}
              className="h-8 w-10 rounded-full border border-[var(--border)] grid place-items-center text-xs font-semibold text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300"
            >
              {langLabel}
            </Link>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8 rounded-full border border-[var(--border)] grid place-items-center text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300"
                aria-label="toggle theme"
                suppressHydrationWarning
              >
                {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
              </button>
            )}

            {/* Book CTA */}
            <Link
              href={bookHref}
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--gold)] text-white text-sm font-bold tracking-wide hover:bg-[var(--gold-dark)] transition-all duration-300 shadow-[0_2px_16px_rgba(198,169,107,0.35)]"
            >
              <Phone size={12} />
              {isAr ? "احجزي الآن" : "Book Now"}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden h-9 w-9 rounded-full border border-[var(--border)] grid place-items-center text-[var(--foreground)] hover:border-[var(--gold)] transition-all duration-300"
              aria-label="menu"
              suppressHydrationWarning
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={17} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col px-8 pt-32 pb-12 overflow-y-auto"
            dir={isAr ? "rtl" : "ltr"}
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-4xl font-serif text-[var(--foreground)] hover:text-[var(--gold)] transition-colors duration-200 border-b border-[var(--border)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                href={bookHref}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[var(--gold)] text-white font-bold tracking-wide text-lg shadow-[0_4px_24px_rgba(198,169,107,0.4)]"
              >
                <Phone size={18} />
                {isAr ? "احجزي موعدك الآن" : "Book Your Appointment"}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex items-center gap-4 text-sm text-[var(--muted)]"
            >
              <a href="tel:+966551234567" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                <Phone size={14} className="text-[var(--gold)]" />
                <span dir="ltr">+966 55 123 4567</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
