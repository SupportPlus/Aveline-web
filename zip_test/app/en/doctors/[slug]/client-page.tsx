"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { Star, MapPin, Award, CheckCircle } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { getDoctorBySlug } from "@/lib/helpers";
import { SERVICES } from "@/content/services";
import { DOCTORS } from "@/content/doctors";

export default function EnDoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const doctorServices = SERVICES.filter((s) => doctor.services.includes(s.slug));

  return (
    <>
      <AvelineNavbar locale="en" />
      <main dir="ltr" className="bg-[var(--background)]">
        <section className="bg-[var(--background2)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Link href="/en/doctors" className="inline-flex items-center gap-1.5 text-sm text-[var(--gold)] hover:opacity-80 transition mb-6">
              &larr; Back to Doctors
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="h-32 w-32 rounded-3xl bg-[var(--card)] border border-[var(--gold)]/40 overflow-hidden shrink-0 shadow-[0_4px_32px_rgba(198,169,107,0.15)]">
                {doctor.image?.src ? (
                  <img src={doctor.image.src} alt={doctor.image.alt.en} className="h-full w-full object-cover" />
                ) : (
                  <span className="h-full w-full grid place-items-center text-5xl font-serif font-bold text-[var(--gold)]">{doctor.name.en.charAt(0)}</span>
                )}
              </div>
              <div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-[rgba(198,169,107,0.10)] text-[var(--gold)] font-semibold border border-[var(--gold)]/20">
                    {doctor.experienceYears}+ Years Experience
                  </span>
                  <div className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-[rgba(198,169,107,0.10)] border border-[var(--gold)]/20 text-[var(--gold)] font-semibold">
                    <Star size={12} className="fill-[var(--gold)]" /> {doctor.rating}
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif text-[var(--foreground)] text-pretty">{doctor.name.en}</h1>
                <p className="mt-2 text-lg text-[var(--gold)]">{doctor.title.en}</p>
                <div className="flex items-center gap-2 mt-3">
                  <MapPin size={14} className="text-[var(--muted)] shrink-0" />
                  <span className="text-sm text-[var(--muted)]">{doctor.branches.en.join(", ")}</span>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link href="/en/book" className="rounded-full bg-[var(--gold)] px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(198,169,107,0.35)] hover:opacity-95 transition">
                    Book Appointment
                  </Link>
                  <a href="https://wa.me/966551234567" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--gold)] px-8 py-3 text-sm font-semibold text-[var(--gold)] hover:bg-[rgba(198,169,107,0.08)] transition">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--background)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-4">About</h2>
                  <p className="text-[var(--muted)] leading-relaxed">{doctor.bio.en}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-4">Specializations</h2>
                  <div className="flex flex-wrap gap-3">
                    {doctor.tags.en.map((tag) => (
                      <span key={tag} className="px-3.5 py-1.5 text-sm rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/30 text-[var(--gold)]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {doctor.certifications.en.length > 0 && (
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={16} className="text-[var(--gold)]" />
                      <span className="font-serif text-[var(--foreground)]">Certifications</span>
                    </div>
                    <ul className="space-y-2.5">
                      {doctor.certifications.en.map((cert) => (
                        <li key={cert} className="flex gap-2 text-sm text-[var(--muted)]">
                          <CheckCircle size={14} className="text-[var(--gold)] mt-0.5 shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <div className="font-serif text-[var(--foreground)] mb-4">Branches</div>
                  <ul className="space-y-2">
                    {doctor.branches.en.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-[var(--muted)]">
                        <MapPin size={14} className="text-[var(--gold)] mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {doctorServices.length > 0 && (
          <section className="bg-[var(--background2)] py-16">
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px w-14 bg-[var(--gold)] mb-6" />
              <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">Services Offered</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {doctorServices.map((service) => (
                  <Link key={service.slug} href={`/en/services/${service.slug}`} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-[var(--gold)]/50 hover:shadow-[0_4px_16px_rgba(198,169,107,0.10)] transition-all duration-300">
                    <div className="font-serif text-[var(--foreground)] mb-1">{service.title.en}</div>
                    <div className="text-sm text-[var(--muted)] leading-relaxed">{service.intro.en}</div>
                    <div className="mt-3 text-xs text-[var(--gold)] font-semibold">View Details &rarr;</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaSection locale="en" />
      </main>
      <Footer locale="en" />
      <AvelineChatWidget locale="en" />
    </>
  );
}
