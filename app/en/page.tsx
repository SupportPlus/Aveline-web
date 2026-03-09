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

export default function EnHomePage() {
  return (
    <>
      <AvelineNavbar locale="en" />
      <main>
        <HeroSection locale="en" />
        <DepartmentsSection locale="en" />
        <FeaturedServicesSection locale="en" />
        <OffersSection locale="en" limit={3} />
        <DoctorsSection locale="en" />
        <WhyUsSection locale="en" />
        <TestimonialsSection locale="en" />
        <CtaSection locale="en" />
      </main>
      <Footer locale="en" />
      <AvelineChatWidget locale="en" />
    </>
  );
}
