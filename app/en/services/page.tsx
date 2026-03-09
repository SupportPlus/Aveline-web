"use client";

import Link from "next/link";
import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";
import { CtaSection } from "@/components/sections/cta-section";
import { SERVICES } from "@/content/services";

const DEPT_LABELS: Record<string, string> = {
  skin: "Skin Care",
  laser_women: "Women Laser",
  laser_men: "Men Laser",
  injectables: "Injectables",
  hair: "Hair",
  dermatology: "Dermatology",
  skin_boosters: "Skin Boosters",
};

export default function EnServicesPage() {
  return (
    <>
      <AvelineNavbar locale="en" />
      <main dir="ltr">
        <section className="bg-[var(--background2)] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="h-px w-14 bg-[var(--gold)] mb-6" />
            <h1 className="text-5xl font-semibold text-[var(--foreground)] text-pretty">Our Services</h1>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
              Discover our full range of medical aesthetic, skin, and hair care services — all delivered by certified specialists.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/en/services/${service.slug}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden
                             hover:border-[#C6A96B]/50 hover:shadow-[0_0_20px_rgba(198,169,107,0.10)]
                             transition-all duration-300 flex flex-col"
                >
                  <div className="h-40 w-full bg-[var(--background)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(198,169,107,0.15),transparent_55%)]" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs px-2.5 py-1 rounded-full border border-[var(--gold)]/40 text-[var(--gold)] bg-[var(--card)]/80">
                        {DEPT_LABELS[service.department] ?? service.department}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1 gap-3">
                    <h2 className="text-base font-semibold text-foreground group-hover:text-[#C6A96B] transition">
                      {service.title.en}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed flex-1">{service.intro.en}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.en.slice(0, 2).map((h) => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#C6A96B] group-hover:opacity-80 transition">
                      View Details &rarr;
                    </div>
                  </div>
                </Link>
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
