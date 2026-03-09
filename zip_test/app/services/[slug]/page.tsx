import { SERVICES } from "@/content/services";
import ServiceDetailPageClient from "./client-page";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServiceDetailPageClient params={params} />;
}
