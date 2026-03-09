"use client";

import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { DOCTORS } from "@/content/doctors";

export default function EnDoctorsPage() {
  return (
    <>
      <AvelineNavbar locale="en" />
      <main dir="ltr" className="bg-[var(--background)]">
        <section className="bg-[var(--background2)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <h1 className="text-5xl font-serif text-[var(--foreground)] text-pretty">Our Elite Doctors</h1>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
              A team of leading specialists in aesthetic and dermatological medicine with extensive experience and certified credentials.
            </p>
          </div>
        </section>

        <section className="bg-[var(--background)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 sm:grid-cols-2">
              {DOCTORS.map((doctor) => (
                <div key={doctor.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--gold)]/50 hover:shadow-[0_4px_24px_rgba(198,169,107,0.10)] transition-all duration-300">
                  <div className="flex gap-5 p-6">
                    <div className="h-20 w-20 rounded-2xl bg-[var(--secondary)] border border-[var(--gold)]/30 overflow-hidden shrink-0">
                      {doctor.image?.src ? (
                        <img src={doctor.image.src} alt={doctor.image.alt.en} className="h-full w-full object-cover" />
                      ) : (
                        <span className="h-full w-full grid place-items-center text-2xl font-serif text-[var(--gold)] font-bold">{doctor.name.en.charAt(0)}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-[rgba(198,169,107,0.10)] text-[var(--gold)] font-semibold border border-[var(--gold)]/20">
                          {doctor.experienceYears}+ Years Exp.
                        </span>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="fill-[var(--gold)] text-[var(--gold)]" />
                          <span className="text-xs text-[var(--gold)] font-semibold">{doctor.rating}</span>
                        </div>
                      </div>
                      <h2 className="font-serif text-[var(--foreground)] text-balance">{doctor.name.en}</h2>
                      <p className="text-sm text-[var(--gold)] mt-0.5">{doctor.title.en}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <MapPin size={12} className="text-[var(--muted)] shrink-0" />
                        <span className="text-xs text-[var(--muted)]">{doctor.branches.en.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-4 flex flex-wrap gap-2">
                    {doctor.tags.en.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]">{tag}</span>
                    ))}
                  </div>
                  <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                    <Link href={`/en/doctors/${doctor.slug}`} className="rounded-xl border border-[var(--gold)] px-3 py-2.5 text-sm font-semibold text-[var(--gold)] text-center hover:bg-[rgba(198,169,107,0.08)] transition">
                      View Profile
                    </Link>
                    <Link href="/en/book" className="rounded-xl bg-[var(--gold)] px-3 py-2.5 text-sm font-semibold text-white text-center shadow-[0_2px_12px_rgba(198,169,107,0.30)] hover:opacity-95 transition">
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection locale="en" />
      </main>
      <Footer locale="en" />
      <AvelineChatWidget locale="en" />
    </>
  );
}
