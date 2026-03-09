"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { staggerItem, staggerContainer } from "@/components/motion/variants";
import { StaggerReveal, Reveal } from "@/components/motion/reveal";

const BOOK_SERVICES = [
  { id: "skin",          label: "Skin Care" },
  { id: "laser_women",   label: "Women Laser" },
  { id: "laser_men",     label: "Men Laser" },
  { id: "injectables",   label: "Injectables" },
  { id: "hair",          label: "Hair" },
  { id: "skin_boosters", label: "Skin Boosters" },
  { id: "dermatology",   label: "Dermatology" },
  { id: "other",         label: "Other" },
];

const WHATSAPP = "966551234567";

function buildMessage(data: { name: string; phone: string; service: string; notes: string }) {
  return [
    "Hello Aveline, I'd like to book an appointment.",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    data.notes ? `Notes: ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

const inputClass =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)]/70 transition-all duration-300 font-sans";

export default function EnBookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const serviceLabel = BOOK_SERVICES.find((s) => s.id === serviceId)?.label ?? serviceId;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !serviceId) return;
    const msg = buildMessage({ name, phone, service: serviceLabel, notes });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <>
      <AvelineNavbar locale="en" />
      <main dir="ltr" className="min-h-screen bg-[var(--background)]">
        {/* Page header */}
        <section className="relative bg-[var(--background2)] py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(198,169,107,0.07),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <Link
                href="/en"
                className="inline-flex items-center gap-2 text-sm text-[var(--gold)] mb-8 hover:opacity-75 transition-opacity font-sans group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                Home
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase font-sans">
                  Book Appointment
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-[var(--foreground)] text-pretty">
                Book Your Visit
              </h1>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-xl leading-relaxed font-sans">
                Fill in your details and we'll get back to you instantly via WhatsApp to confirm your appointment.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form section */}
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-6">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-[var(--gold)]/30 bg-[var(--card)] p-12 text-center space-y-5 shadow-[0_8px_60px_rgba(0,0,0,0.08)]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mx-auto h-20 w-20 rounded-full bg-[rgba(198,169,107,0.10)] border border-[var(--gold)]/30 grid place-items-center"
                  >
                    <CheckCircle size={32} className="text-[var(--gold)]" />
                  </motion.div>
                  <h2 className="text-3xl font-serif text-[var(--foreground)]">Request Sent</h2>
                  <p className="text-[var(--muted)] leading-relaxed font-sans">
                    WhatsApp has been opened to confirm your appointment. Our team will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-8 py-3 rounded-full border border-[var(--gold)] text-sm font-semibold text-[var(--gold)] hover:bg-[rgba(198,169,107,0.08)] transition-all duration-300 font-sans"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10 space-y-8 shadow-[0_8px_60px_rgba(0,0,0,0.08)]"
                >
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold text-[var(--foreground)] font-sans"
                      htmlFor="name"
                    >
                      Full Name <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className={inputClass}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold text-[var(--foreground)] font-sans"
                      htmlFor="phone"
                    >
                      Phone Number <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input
                      id="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className={inputClass}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Service picker */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[var(--foreground)] font-sans">
                      Desired Service <span className="text-[var(--gold)]">*</span>
                    </label>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-2"
                    >
                      {BOOK_SERVICES.map((s, i) => {
                        const isLast =
                          i === BOOK_SERVICES.length - 1 &&
                          BOOK_SERVICES.length % 2 !== 0;
                        return (
                          <motion.button
                            key={s.id}
                            type="button"
                            variants={staggerItem}
                            onClick={() => setServiceId(s.id)}
                            className={[
                              "rounded-xl px-3 py-3 text-sm border transition-all duration-300 font-sans",
                              isLast ? "col-span-2" : "",
                              serviceId === s.id
                                ? "bg-[var(--gold)] text-white border-[var(--gold)] shadow-[0_0_20px_rgba(198,169,107,0.30)] font-semibold"
                                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)]/40 hover:text-[var(--foreground)] bg-[var(--background)]",
                            ].join(" ")}
                          >
                            {s.label}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <label
                      className="text-sm font-semibold text-[var(--foreground)] font-sans"
                      htmlFor="notes"
                    >
                      Notes{" "}
                      <span className="text-[var(--muted)] text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any additional details..."
                      rows={3}
                      className={`${inputClass} resize-none`}
                      suppressHydrationWarning
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!name.trim() || !phone.trim() || !serviceId}
                    whileHover={
                      name.trim() && phone.trim() && serviceId ? { scale: 1.01 } : {}
                    }
                    whileTap={
                      name.trim() && phone.trim() && serviceId ? { scale: 0.98 } : {}
                    }
                    suppressHydrationWarning
                    className={[
                      "w-full rounded-full py-4 text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 font-sans",
                      name.trim() && phone.trim() && serviceId
                        ? "bg-[var(--gold)] text-white shadow-[0_4px_24px_rgba(198,169,107,0.35)] hover:shadow-[0_6px_40px_rgba(198,169,107,0.5)]"
                        : "bg-[var(--secondary)] text-[var(--muted)] cursor-not-allowed",
                    ].join(" ")}
                  >
                    <MessageCircle size={16} />
                    Send via WhatsApp
                  </motion.button>

                  <p className="text-center text-xs text-[var(--muted)] font-sans">
                    Or call us directly at{" "}
                    <a
                      href="tel:+966551234567"
                      className="font-semibold text-[var(--gold)] hover:opacity-80 transition inline-flex items-center gap-1"
                    >
                      <Phone size={11} />
                      <span>+966 55 123 4567</span>
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer locale="en" />
      <AvelineChatWidget locale="en" />
    </>
  );
}
