export type Locale = "ar" | "en";

export type Doctor = {
  slug: string;
  name: { ar: string; en: string };
  title: { ar: string; en: string };
  department: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  tags: { ar: string[]; en: string[] };
  bio: { ar: string; en: string };
  certifications: { ar: string[]; en: string[] };
  branches: { ar: string[]; en: string[] };
  services: string[]; // service slugs
  image: { src: string; alt: { ar: string; en: string } };
};

export const DOCTORS: Doctor[] = [
  {
    slug: "fadila-ishaq",
    name: { ar: "فضيلة إسحاق", en: "Fadila Ishaq" },
    title: { ar: "أخصائية تنظيف البشرة", en: "Skin Care Specialist" },
    department: "skin",
    experienceYears: 4,
    rating: 4.9,
    reviewsCount: 0,
    tags: {
      ar: ["هايدرافيشل", "تقييم البشرة", "خطط علاجية مخصصة"],
      en: ["Hydrafacial", "Skin analysis", "Customized treatment plans"],
    },
    bio: {
      ar: "أخصائية تنظيف البشرة فضيلة إسحاق، بخبرة تتجاوز 4 سنوات في مجال العناية الطبية والتجميلية بالبشرة، ومتخصصة في:\n- الهايدرافيشل\n- تقييم البشرة ووضع خطط علاجية مخصصة",
      en: "Skin Care Specialist Fadila Ishaq, with over 4 years of experience in medical and cosmetic skin care, specializing in:\n- Hydrafacial treatments\n- Skin analysis and creating customized treatment plans",
    },
    certifications: {
      ar: [],
      en: [],
    },
    branches: {
      ar: ["الرياض"],
      en: ["Riyadh"],
    },
    services: ["hydrafacial", "dermapen", "glass-skin", "scalp-cleansing"],
    image: {
      src: "/images/doctors/fadila-ishaq.jpg",
      alt: {
        ar: "أخصائية تنظيف البشرة فضيلة إسحاق",
        en: "Skin Care Specialist Fadila Ishaq",
      },
    },
  },
  {
    slug: "salma-hegazy",
    name: { ar: "د. سلمى حجازي", en: "Dr. Salma Hegazy" },
    title: { ar: "نائب أول الأمراض الجلدية", en: "Senior Deputy of Dermatology" },
    department: "dermatology",
    experienceYears: 12,
    rating: 4.9,
    reviewsCount: 0,
    tags: {
      ar: ["البورد المصري في الأمراض الجلدية", "الحقن التجميلي", "علاج الشعر"],
      en: ["Egyptian Board in Dermatology", "Aesthetic Injectables", "Hair Treatments"],
    },
    bio: {
      ar: "د. سلمى حجازي، نائب أول الأمراض الجلدية، حاصلة على البورد المصري في الأمراض الجلدية بخبرة تمتد إلى 12 عامًا في مجال الحقن التجميلي والإجراءات غير الجراحية وعلاج مشاكل الشعر. تتميز بأسلوبها الدقيق وحرصها على تحقيق نتائج طبيعية ومتوازنة لكل عميلة.",
      en: "Dr. Salma Hegazy, Senior Deputy of Dermatology, holder of the Egyptian Board in Dermatology, with 12 years of experience in aesthetic injectables, non-surgical cosmetic procedures, and hair treatments. Known for her precision and commitment to achieving natural, balanced results.",
    },
    certifications: {
      ar: ["البورد المصري في الأمراض الجلدية"],
      en: ["Egyptian Board in Dermatology"],
    },
    branches: {
      ar: ["الرياض – فرع الملقا"],
      en: ["Riyadh – Al Malqa Branch"],
    },
    services: ["botox", "filler", "skin-boosters", "exosome", "hair-meso", "dermapen"],
    image: {
      src: "/images/doctors/salma-hegazy.jpg",
      alt: {
        ar: "د. سلمى حجازي",
        en: "Dr. Salma Hegazy",
      },
    },
  },
];
