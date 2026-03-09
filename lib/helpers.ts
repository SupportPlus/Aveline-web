import { SERVICES, type Service } from "@/content/services";
import { OFFERS, type Offer } from "@/content/offers";
import { DOCTORS, type Doctor } from "@/content/doctors";

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOffersForService(service: Service): Offer[] {
  return OFFERS.filter(
    (o) => o.isActive && service.offerIds.includes(o.id)
  );
}

export function getFeaturedOffers(limit = 6): Offer[] {
  return OFFERS.filter((o) => o.isActive && o.featured).slice(0, limit);
}

export function getSeasonalOffers(): Offer[] {
  return OFFERS.filter((o) => o.isActive && o.isSeasonal);
}

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return DOCTORS.find((d) => d.slug === slug);
}

export function getDoctorsForService(serviceSlug: string): Doctor[] {
  return DOCTORS.filter((d) => d.services.includes(serviceSlug));
}

export function formatSar(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}
