export type Locale = "ar" | "en";

export type OfferCategory =
  | "dermatology"
  | "skin"
  | "laser_women"
  | "laser_men"
  | "hair"
  | "injectables"
  | "skin_boosters"
  | "packages";

export type Offer = {
  id: string;
  category: OfferCategory;
  title: { ar: string; en: string };
  description?: { ar: string; en: string };
  included: { ar: string[]; en: string[] };
  priceSar: number;
  oldPriceSar?: number;
  discountPercent?: number;
  validUntil?: string;
  isActive: boolean;
  featured?: boolean;
  isSeasonal?: boolean;
  campaignLabel?: { ar: string; en: string };
  image?: { src: string; alt: { ar: string; en: string } };
};

export const OFFERS: Offer[] = [
  // Skin Care
  {
    id: "skin-professional-plus",
    category: "skin",
    title: { ar: "جلسة بروفيشيال بلس", en: "Professional Facial Plus" },
    included: { ar: ["جلسة بروفيشيال بلس"], en: ["Professional Facial Plus session"] },
    priceSar: 299,
    isActive: true,
  },
  {
    id: "skin-professional-vip",
    category: "skin",
    title: { ar: "جلسة بروفيشيال VIP", en: "Professional Facial VIP" },
    included: { ar: ["جلسة بروفيشيال VIP"], en: ["Professional Facial VIP session"] },
    priceSar: 399,
    isActive: true,
  },
  {
    id: "skin-enzyme-arm",
    category: "skin",
    title: { ar: "جلسة أنزيم آرم", en: "Enzyme Arm Session" },
    included: { ar: ["جلسة أنزيم آرم"], en: ["Enzyme arm session"] },
    priceSar: 199,
    isActive: true,
  },
  {
    id: "skin-scalp-clean",
    category: "skin",
    title: { ar: "جلسة تنظيف فروة الرأس", en: "Scalp Deep Cleansing" },
    included: { ar: ["تنظيف عميق لفروة الرأس"], en: ["Deep scalp cleansing"] },
    priceSar: 299,
    isActive: true,
  },
  {
    id: "skin-dermapen-meso",
    category: "skin",
    title: { ar: "ديرمابن + ميزوثيرابي", en: "Dermapen + Mesotherapy" },
    included: { ar: ["ديرمابن", "ميزوثيرابي"], en: ["Dermapen", "Mesotherapy"] },
    priceSar: 499,
    isActive: true,
  },
  {
    id: "skin-glass-skin",
    category: "skin",
    title: { ar: "جلسة البشرة الزجاجية", en: "Glass Skin Facial" },
    included: { ar: ["جلسة البشرة الزجاجية"], en: ["Glass Skin facial"] },
    priceSar: 299,
    isActive: true,
  },
  {
    id: "skin-bundle-599",
    category: "skin",
    title: { ar: "باقة العناية المتقدمة", en: "Advanced Care Bundle" },
    description: {
      ar: "باقة شاملة لعناية متكاملة بالبشرة تشمل أبرز التقنيات الحديثة",
      en: "A comprehensive skin care bundle featuring top modern techniques",
    },
    included: {
      ar: ["ميزوثيرابي", "ديرمابن", "ماسك كولاجين", "هيدرافيشل مجاني"],
      en: ["Mesotherapy", "Dermapen", "Collagen mask", "Free Hydrafacial"],
    },
    priceSar: 599,
    oldPriceSar: 899,
    discountPercent: 33,
    isActive: true,
    featured: true,
  },
  // Men Laser
  {
    id: "laser-men-full-body",
    category: "laser_men",
    title: { ar: "جلسة فل بدي للرجال", en: "Full Body Session (Men)" },
    included: { ar: ["ليزر فل بدي للرجال"], en: ["Men full body laser session"] },
    priceSar: 515,
    isActive: true,
  },
  {
    id: "laser-men-full-body-3",
    category: "laser_men",
    title: { ar: "3 جلسات فل بدي للرجال", en: "3 Full Body Sessions (Men)" },
    included: { ar: ["3 جلسات فل بدي للرجال"], en: ["3 men full body sessions"] },
    priceSar: 1115,
    oldPriceSar: 1545,
    discountPercent: 28,
    isActive: true,
    featured: true,
  },
  {
    id: "laser-men-small-area",
    category: "laser_men",
    title: { ar: "منطقة صغيرة – رجال", en: "Small Area (Men)" },
    included: { ar: ["جلسة منطقة صغيرة للرجال"], en: ["Men small area session"] },
    priceSar: 90,
    isActive: true,
  },
  {
    id: "laser-men-large-area",
    category: "laser_men",
    title: { ar: "منطقة كبيرة – رجال", en: "Large Area (Men)" },
    included: { ar: ["جلسة منطقة كبيرة للرجال"], en: ["Men large area session"] },
    priceSar: 115,
    isActive: true,
  },
  {
    id: "laser-men-beard-3",
    category: "laser_men",
    title: { ar: "3 جلسات تحديد ذقن", en: "3 Beard Shaping Sessions" },
    included: { ar: ["3 جلسات تحديد الذقن"], en: ["3 beard shaping sessions"] },
    priceSar: 245,
    isActive: true,
  },
  {
    id: "laser-men-3-small-areas",
    category: "laser_men",
    title: { ar: "3 مناطق صغيرة – رجال", en: "3 Small Areas (Men)" },
    included: { ar: ["3 مناطق صغيرة للرجال"], en: ["3 small areas for men"] },
    priceSar: 199,
    isActive: true,
  },
  // Women Laser
  {
    id: "laser-women-3-full",
    category: "laser_women",
    title: { ar: "3 جلسات فل بدي – نساء", en: "3 Full Body Sessions (Women)" },
    included: { ar: ["3 جلسات فل بدي للنساء"], en: ["3 full body sessions (women)"] },
    priceSar: 915,
    oldPriceSar: 1245,
    discountPercent: 26,
    isActive: true,
    featured: true,
  },
  {
    id: "laser-women-3-mini",
    category: "laser_women",
    title: { ar: "3 جلسات ميني بدي – نساء", en: "3 Mini Body Sessions (Women)" },
    included: { ar: ["3 جلسات ميني بدي للنساء"], en: ["3 mini body sessions (women)"] },
    priceSar: 815,
    isActive: true,
  },
  {
    id: "laser-women-full",
    category: "laser_women",
    title: { ar: "جلسة فل بدي – نساء", en: "Full Body Session (Women)" },
    included: { ar: ["جلسة فل بدي للنساء"], en: ["Full body session (women)"] },
    priceSar: 415,
    isActive: true,
  },
  {
    id: "laser-women-mini",
    category: "laser_women",
    title: { ar: "جلسة ميني بدي – نساء", en: "Mini Body Session (Women)" },
    included: { ar: ["جلسة ميني بدي للنساء"], en: ["Mini body session (women)"] },
    priceSar: 315,
    isActive: true,
  },
  {
    id: "laser-women-3-small",
    category: "laser_women",
    title: { ar: "3 مناطق صغيرة – نساء", en: "3 Small Areas (Women)" },
    included: { ar: ["3 مناطق صغيرة للنساء"], en: ["3 small areas (women)"] },
    priceSar: 199,
    isActive: true,
  },
  {
    id: "laser-women-small",
    category: "laser_women",
    title: { ar: "منطقة صغيرة – نساء", en: "Small Area (Women)" },
    included: { ar: ["جلسة منطقة صغيرة للنساء"], en: ["Small area session (women)"] },
    priceSar: 90,
    isActive: true,
  },
  {
    id: "laser-women-large",
    category: "laser_women",
    title: { ar: "منطقة كبيرة – نساء", en: "Large Area (Women)" },
    included: { ar: ["جلسة منطقة كبيرة للنساء"], en: ["Large area session (women)"] },
    priceSar: 115,
    isActive: true,
  },
  {
    id: "laser-women-upper-lip",
    category: "laser_women",
    title: { ar: "جلسة ليزر شارب الشفة", en: "Upper Lip Laser" },
    included: { ar: ["ليزر شارب الشفة"], en: ["Upper lip laser"] },
    priceSar: 50,
    isActive: true,
  },
  // Injectables
  {
    id: "inj-filler-1ml",
    category: "injectables",
    title: { ar: "1 مل فيلر", en: "1ml Filler" },
    included: { ar: ["1 مل فيلر"], en: ["1ml filler"] },
    priceSar: 888,
    isActive: true,
  },
  {
    id: "inj-upper-botox-1ml",
    category: "injectables",
    title: { ar: "بوتكس علوي (جبهة وعيون)", en: "Upper Botox (Forehead & Eyes)" },
    included: { ar: ["بوتكس علوي – جبهة وعيون"], en: ["Upper botox (forehead & eyes)"] },
    priceSar: 888,
    isActive: true,
  },
  {
    id: "inj-full-face-botox",
    category: "injectables",
    title: { ar: "بوتكس كامل الوجه", en: "Full Face Botox" },
    description: {
      ar: "حقن بوتكس شاملة لكامل منطقة الوجه لمظهر أكثر شبابًا وطبيعية",
      en: "Full face botox for a younger, natural-looking result",
    },
    included: { ar: ["بوتكس كامل الوجه"], en: ["Full face botox"] },
    priceSar: 1444,
    oldPriceSar: 1800,
    discountPercent: 20,
    isActive: true,
    featured: true,
  },
  // Skin Boosters
  {
    id: "sb-premium-mix",
    category: "skin_boosters",
    title: { ar: "إبر النضارة المميزة", en: "Premium Skin Boosters" },
    included: {
      ar: ["سكالبترا – ريفيرسا – الترا كول – ريستورا"],
      en: ["Sculptra – Reversa – UltraCol – Restora"],
    },
    priceSar: 2888,
    isActive: true,
  },
  {
    id: "sb-calcium",
    category: "skin_boosters",
    title: { ar: "إبر الكالسيوم", en: "Calcium Injections" },
    included: { ar: ["جلسة كالسيوم"], en: ["Calcium session"] },
    priceSar: 1488,
    isActive: true,
  },
  {
    id: "sb-starting",
    category: "skin_boosters",
    title: { ar: "إبر النضارة – تبدأ من", en: "Skin Boosters – Starting From" },
    included: { ar: ["إبر نضارة حسب التقييم"], en: ["Skin booster based on assessment"] },
    priceSar: 888,
    isActive: true,
  },
  {
    id: "sb-water-tightening",
    category: "skin_boosters",
    title: { ar: "الشد المائي", en: "Water Tightening Treatment" },
    included: { ar: ["جلسة شد مائي"], en: ["Water tightening session"] },
    priceSar: 2888,
    isActive: true,
  },
  // Hair
  {
    id: "hair-exosome",
    category: "hair",
    title: { ar: "إكسوزوم للشعر", en: "Hair Exosome Treatment" },
    description: {
      ar: "علاج متقدم لدعم نمو الشعر وتحسين كثافته بتقنية الإكسوزوم الحديثة",
      en: "Advanced hair growth support using modern exosome technology",
    },
    included: { ar: ["جلسة إكسوزوم للشعر"], en: ["Hair exosome session"] },
    priceSar: 3444,
    isActive: true,
    featured: true,
  },
  {
    id: "hair-meso-filler",
    category: "hair",
    title: { ar: "ميزوثيرابي للشعر", en: "Hair Mesotherapy" },
    included: { ar: ["ميزوثيرابي للشعر"], en: ["Hair mesotherapy"] },
    priceSar: 1444,
    isActive: true,
  },
  {
    id: "hair-exosome-5ml",
    category: "hair",
    title: { ar: "5 مل إكسوزوم", en: "5ml Exosome" },
    included: { ar: ["5 مل إكسوزوم"], en: ["5ml exosome"] },
    priceSar: 3444,
    isActive: true,
  },
  // Seasonal
  {
    id: "pkg-eid-glow",
    category: "packages",
    title: { ar: "جلسة إطلالة العيد", en: "Eid Glow Package" },
    description: {
      ar: "باقة شاملة لإطلالة فاخرة في موسم العيد تجمع بوتكس وفيلر وديرمابن",
      en: "A luxury Eid glow package combining botox, filler, and dermapen",
    },
    included: {
      ar: ["بوتكس كامل الوجه", "1 مل فيلر", "ديرمابن مجانًا"],
      en: ["Full face botox", "1ml filler", "Free dermapen"],
    },
    priceSar: 3888,
    oldPriceSar: 5200,
    discountPercent: 25,
    isActive: true,
    featured: true,
    isSeasonal: true,
    campaignLabel: { ar: "رمضان كريم", en: "Ramadan Kareem" },
  },
  {
    id: "pkg-ramadan-beauty",
    category: "packages",
    title: { ar: "باقة الجمال الرمضانية", en: "Ramadan Beauty Package" },
    description: {
      ar: "باقة متكاملة بمناسبة رمضان تشمل ميزو بوتكس وفيلر ونضارة وديرمابن مجاني",
      en: "Full Ramadan beauty bundle with meso botox, filler, skin booster, and free dermapen",
    },
    included: {
      ar: ["ميزو بوتكس", "1 مل فيلر", "إبر نضارة", "ديرمابن مجانًا"],
      en: ["Meso botox", "1ml filler", "Skin booster", "Free dermapen"],
    },
    priceSar: 2444,
    oldPriceSar: 3600,
    discountPercent: 32,
    isActive: true,
    featured: true,
    isSeasonal: true,
    campaignLabel: { ar: "رمضان كريم", en: "Ramadan Kareem" },
  },
];
