import { DOCTORS } from "@/content/doctors";
import DoctorProfilePageClient from "./client-page";

export function generateStaticParams() {
    return DOCTORS.map((doctor) => ({
        slug: doctor.slug,
    }));
}

export default function DoctorProfilePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    return <DoctorProfilePageClient params={params} />;
}
