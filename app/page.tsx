"use client";

import { AvelineNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { FeaturedServicesSection } from "@/components/sections/featured-services-section";
import { OffersSection } from "@/components/sections/offers-section";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { AvelineChatWidget } from "@/components/aveline-chat-widget";

export default function HomePage() {
  return (
    <>
      <AvelineNavbar locale="ar" />
      <main>
        <HeroSection locale="ar" />
        <DepartmentsSection locale="ar" />
        <FeaturedServicesSection locale="ar" />
        <OffersSection locale="ar" limit={3} />
        <DoctorsSection locale="ar" />
        <WhyUsSection locale="ar" />
        <TestimonialsSection locale="ar" />
        <CtaSection locale="ar" />
      </main>
      <Footer locale="ar" />
      <AvelineChatWidget locale="ar" />
    </>
  );
}
