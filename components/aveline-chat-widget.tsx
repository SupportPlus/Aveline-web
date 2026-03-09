"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

type Locale = "ar" | "en";

type ServiceOption = {
  id: string;
  labelAr: string;
  labelEn: string;
};

const SERVICES: ServiceOption[] = [
  { id: "skin",        labelAr: "البشرة",           labelEn: "Skin Care" },
  { id: "laser_women", labelAr: "ليزر نساء",        labelEn: "Women Laser" },
  { id: "laser_men",   labelAr: "ليزر رجال",        labelEn: "Men Laser" },
  { id: "injectables", labelAr: "الحقن التجميلي",   labelEn: "Injectables" },
  { id: "hair",        labelAr: "الشعر",             labelEn: "Hair" },
];

const WHATSAPP_NUMBER = "966551234567";

function buildWhatsAppUrl(params: {
  locale: Locale;
  serviceLabel: string;
  name?: string;
  phone?: string;
  notes?: string;
}) {
  const { locale, serviceLabel, name, phone, notes } = params;
  const lines =
    locale === "en"
      ? [
          "Hello Aveline, I'd like to book an appointment.",
          `Service: ${serviceLabel}`,
          name  ? `Name: ${name}`    : undefined,
          phone ? `Phone: ${phone}`  : undefined,
          notes ? `Notes: ${notes}`  : undefined,
        ]
      : [
          "مرحبًا أفيلين، أود حجز موعد.",
          `الخدمة: ${serviceLabel}`,
          name  ? `الاسم: ${name}`      : undefined,
          phone ? `الجوال: ${phone}`    : undefined,
          notes ? `ملاحظات: ${notes}`   : undefined,
        ];
  const msg = lines.filter(Boolean).join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function AvelineChatWidget({ locale = "ar" }: { locale?: Locale }) {
  const isAr = locale === "ar";
  const [open, setOpen]           = React.useState(false);
  const [serviceId, setServiceId] = React.useState<string | null>(null);
  const [name, setName]           = React.useState("");
  const [phone, setPhone]         = React.useState("");
  const [notes, setNotes]         = React.useState("");

  const service = React.useMemo(
    () => SERVICES.find((s) => s.id === serviceId) ?? null,
    [serviceId]
  );

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const serviceLabel = service ? (isAr ? service.labelAr : service.labelEn) : "";
  const whatsappUrl  = service
    ? buildWhatsAppUrl({ locale, serviceLabel, name: name.trim() || undefined, phone: phone.trim() || undefined, notes: notes.trim() || undefined })
    : null;
  const lastIndex = SERVICES.length - 1;

  const inputClass =
    "w-full rounded-xl bg-[var(--background)] border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold)]/70 transition";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="fixed z-50"
      style={{ bottom: 18, left: isAr ? 18 : undefined, right: isAr ? undefined : 18 }}
    >
      {/* Floating Button */}
      <motion.button
        aria-label={isAr ? "فتح محادثة الحجز" : "Open booking chat"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        suppressHydrationWarning
        className="h-14 w-14 rounded-full bg-[var(--gold)] border border-[var(--gold-dark)]
                   shadow-[0_4px_24px_rgba(198,169,107,0.45)]
                   flex items-center justify-center hover:shadow-[0_6px_40px_rgba(198,169,107,0.6)] transition-shadow duration-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="text-white" size={20} />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="text-white" size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 w-[320px] sm:w-[360px] rounded-2xl bg-[var(--card)]
                       border border-[var(--gold)]/40
                       shadow-[0_8px_60px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--gold)] text-white">
              <div className="font-semibold text-sm">
                {isAr ? "أفيلين | حجز سريع" : "Aveline | Quick Booking"}
              </div>
              <button
                aria-label={isAr ? "إغلاق" : "Close"}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
              {/* Greeting */}
              <div className="rounded-xl bg-[var(--background)] border border-[var(--border)] p-3 text-sm text-[var(--foreground)] leading-relaxed">
                {isAr ? (
                  <>أهلًا بك في أفيلين ✨<br />تحب تحجز أي خدمة؟</>
                ) : (
                  <>Hi! Welcome to Aveline ✨<br />What would you like to book?</>
                )}
              </div>

              {/* Service Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((s, idx) => {
                  const selected   = s.id === serviceId;
                  const isLastOdd  = SERVICES.length % 2 !== 0 && idx === lastIndex;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setServiceId(s.id)}
                      className={[
                        "rounded-xl px-3 py-2 text-sm border transition font-sans",
                        isLastOdd ? "col-span-2" : "",
                        selected
                          ? "bg-[var(--gold)] text-white border-[var(--gold)] shadow-[0_2px_12px_rgba(198,169,107,0.35)]"
                          : "bg-[var(--background)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--gold)]/60",
                      ].join(" ")}
                    >
                      {isAr ? s.labelAr : s.labelEn}
                    </button>
                  );
                })}
              </div>

              {service && (
                <div className="text-xs text-[var(--muted)]">
                  {isAr ? "تم الاختيار: " : "Selected: "}
                  <span className="text-[var(--gold)] font-semibold">{serviceLabel}</span>
                </div>
              )}

              {/* Inputs */}
              <div className="space-y-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isAr ? "الاسم" : "Name"}
                  suppressHydrationWarning
                  className={inputClass}
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isAr ? "رقم الجوال" : "Phone"}
                  suppressHydrationWarning
                  className={inputClass}
                />
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isAr ? "ملاحظات (اختياري)" : "Notes (optional)"}
                  rows={2}
                  suppressHydrationWarning
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappUrl ?? "#"}
                  onClick={(e) => { if (!whatsappUrl) e.preventDefault(); }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "rounded-xl px-3 py-2.5 text-center text-sm font-semibold transition",
                    whatsappUrl
                      ? "bg-[var(--gold)] text-white shadow-[0_2px_12px_rgba(198,169,107,0.35)] hover:opacity-90"
                      : "bg-[var(--background)] text-[var(--muted)] cursor-not-allowed border border-[var(--border)]",
                  ].join(" ")}
                >
                  {isAr ? "واتساب" : "WhatsApp"}
                </a>

                <a
                  href="tel:+966551234567"
                  className="rounded-xl px-3 py-2.5 text-center text-sm font-semibold border border-[var(--gold)]
                             text-[var(--gold)] hover:bg-[rgba(198,169,107,0.08)] transition flex items-center justify-center gap-1.5"
                >
                  <Phone size={14} />
                  {isAr ? "اتصال" : "Call"}
                </a>
              </div>

              {!service && (
                <p className="text-xs text-[var(--muted)] text-center">
                  {isAr
                    ? "اختر خدمة أولاً للمتابعة عبر واتساب"
                    : "Select a service first to continue to WhatsApp"}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
