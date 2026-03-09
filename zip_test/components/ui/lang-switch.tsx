"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LangSwitch({ locale }: { locale: "ar" | "en" }) {
  const pathname = usePathname();

  const toEn = pathname.startsWith("/en")
    ? pathname
    : `/en${pathname === "/" ? "" : pathname}`;
  const toAr = pathname.startsWith("/en")
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname;

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href={toAr}
        className={`transition ${locale === "ar" ? "text-[#C6A96B] font-semibold" : "text-[#B5B5B5] hover:text-[#C6A96B]"}`}
      >
        AR
      </Link>
      <span className="text-[#B5B5B5]/40">|</span>
      <Link
        href={toEn}
        className={`transition ${locale === "en" ? "text-[#C6A96B] font-semibold" : "text-[#B5B5B5] hover:text-[#C6A96B]"}`}
      >
        EN
      </Link>
    </div>
  );
}
