"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { CheckCircle, Clock, Layers, Calendar } from "lucide-react";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { OfferCard } from "@/components/offers/offer-card";
import { getServiceBySlug, getOffersForService, getDoctorsForService } from "@/lib/helpers";
import { SERVICES } from "@/content/services";

export default function EnServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const details = service.details.en;
  const offers = getOffersForService(service);
  const doctors = getDoctorsForService(slug);

  return (
    <>
      <AvelineNavbar locale="en" />
      <main dir="ltr" className="bg-[var(--background)]">
        {/* Hero */}
        <section className="bg-[var(--background2)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Link href="/en/services" className="inline-flex items-center gap-1.5 text-sm text-[var(--gold)] hover:opacity-80 transition mb-6">
              &larr; Back to Services
            </Link>
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] text-pretty">{service.title.en}</h1>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl leading-relaxed">{service.intro.en}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.highlights.en.map((h) => (
                <span key={h} className="px-3.5 py-1.5 text-sm rounded-full bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/30 text-[var(--gold)]">{h}</span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock,    label: "Duration",  value: details.duration },
                { icon: Layers,   label: "Sessions",  value: details.sessions },
                { icon: Calendar, label: "Downtime",  value: details.downtime },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 flex gap-3 items-start">
                  <div className="h-10 w-10 rounded-xl bg-[rgba(198,169,107,0.08)] border border-[var(--gold)]/20 grid place-items-center shrink-0">
                    <Icon size={18} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted)]">{label}</div>
                    <div className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[var(--background)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-4">What Is It?</h2>
                  <p className="text-[var(--muted)] leading-relaxed">{details.whatIsIt}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-4">Who Is It For?</h2>
                  <ul className="space-y-2.5">
                    {details.whoIsItFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[var(--muted)]">
                        <CheckCircle size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-4">Session Steps</h2>
                  <ol className="space-y-3">
                    {details.steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-[rgba(198,169,107,0.10)] border border-[var(--gold)]/30 grid place-items-center shrink-0 text-xs font-bold text-[var(--gold)]">{i + 1}</span>
                        <span className="text-[var(--muted)] pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-serif text-[var(--foreground)] mb-4">Benefits</h2>
                  <div className="grid gap-3">
                    {details.benefits.map((b) => (
                      <div key={b} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 flex gap-3 items-start hover:border-[var(--gold)]/25 transition-colors">
                        <span className="h-2 w-2 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                        <span className="text-[var(--muted)]">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {details.faq && details.faq.length > 0 && (
          <section className="bg-[var(--background2)] py-16">
            <div className="mx-auto max-w-4xl px-4">
              <div className="h-px w-14 bg-[var(--gold)] mb-6" />
              <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {details.faq.map(({ q, a }) => (
                  <div key={q} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                    <div className="font-serif text-[var(--foreground)] mb-2">{q}</div>
                    <div className="text-sm text-[var(--muted)] leading-relaxed">{a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Doctors */}
        {doctors.length > 0 && (
          <section className="bg-[var(--background)] py-16">
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px w-14 bg-[var(--gold)] mb-6" />
              <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">Doctors for This Service</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {doctors.map((doc) => (
                  <div key={doc.slug} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 flex gap-4 items-start">
                    <div className="h-14 w-14 rounded-xl bg-[var(--secondary)] border border-[var(--gold)]/30 grid place-items-center shrink-0">
                      <span className="text-xl font-serif font-bold text-[var(--gold)]">{doc.name.en.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-serif text-[var(--foreground)]">{doc.name.en}</div>
                      <div className="text-sm text-[var(--gold)] mt-0.5">{doc.title.en}</div>
                      <Link href={`/en/doctors/${doc.slug}`} className="mt-2 inline-block text-xs text-[var(--gold)] hover:opacity-80 transition">
                        View Profile &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Offers */}
        {offers.length > 0 && (
          <section className="bg-[var(--background2)] py-16">
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px w-14 bg-[var(--gold)] mb-6" />
              <h2 className="text-3xl font-serif text-[var(--foreground)] mb-10">Offers for This Service</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {offers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} locale="en" />
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
