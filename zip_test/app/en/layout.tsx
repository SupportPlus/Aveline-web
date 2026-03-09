import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aveline Clinic | Skin, Laser & Hair Care in Riyadh",
  description:
    "Discover the latest skin care, laser and hair treatments at Aveline Clinic in Riyadh, supervised by certified doctors.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
