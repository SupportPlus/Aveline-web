import type { OfferCategory } from "@/content/offers";

export type Locale = "ar" | "en";

export type ServiceId =
  | "hydrafacial"
  | "dermapen"
  | "glass-skin"
  | "scalp-cleansing"
  | "laser-women"
  | "laser-men"
  | "botox"
  | "filler"
  | "skin-boosters"
  | "exosome"
  | "hair-meso";

export type Service = {
  id: ServiceId;
  slug: string;
  department: OfferCategory;
  title: { ar: string; en: string };
  intro: { ar: string; en: string };
  highlights: { ar: string[]; en: string[] };
  details: {
    ar: {
      whatIsIt: string;
      whoIsItFor: string[];
      benefits: string[];
      steps: string[];
      duration: string;
      sessions: string;
      downtime: string;
      notes?: string[];
      faq?: { q: string; a: string }[];
    };
    en: {
      whatIsIt: string;
      whoIsItFor: string[];
      benefits: string[];
      steps: string[];
      duration: string;
      sessions: string;
      downtime: string;
      notes?: string[];
      faq?: { q: string; a: string }[];
    };
  };
  offerIds: string[];
  image?: { src: string; alt: { ar: string; en: string } };
};

export const SERVICES: Service[] = [
  {
    id: "hydrafacial",
    slug: "hydrafacial",
    department: "skin",
    title: { ar: "الهايدرافيشل", en: "Hydrafacial" },
    intro: {
      ar: "تنظيف عميق وترطيب فوري للبشرة بتقنية متقدمة تمنحك إشراقة صحية من أول جلسة.",
      en: "A deep cleansing and instant hydration treatment that boosts glow from the very first session.",
    },
    highlights: {
      ar: ["تنظيف وتقشير لطيف", "ترطيب عميق", "مناسب لمعظم أنواع البشرة"],
      en: ["Cleanse + gentle exfoliation", "Deep hydration", "Suitable for most skin types"],
    },
    details: {
      ar: {
        whatIsIt:
          "الهايدرافيشل هو جلسة عناية متقدمة تعتمد على خطوات متكاملة من التنظيف والتقشير اللطيف واستخلاص الشوائب والترطيب العميق باستخدام تقنيات آمنة ومعتمدة. الجلسة مناسبة لمعظم أنواع البشرة وتساعد على تحسين ملمس البشرة ومظهرها بشكل ملحوظ.",
        whoIsItFor: ["البشرة الباهتة وغير المشرقة", "الرؤوس السوداء والمسام المسدودة", "المسام الواسعة", "البشرة الجافة أو المرهقة"],
        benefits: ["إشراقة ونضارة فورية", "تنظيف عميق للمسام", "تحسين ملمس البشرة", "ترطيب وتهدئة فعّال", "مناسب قبل المناسبات"],
        steps: ["تنظيف البشرة بلطف", "تقشير لطيف لإزالة الخلايا الميتة", "استخلاص الشوائب والرؤوس السوداء", "تغذية بالسيروم المرطّب", "حماية نهائية بالكريم"],
        duration: "30–60 دقيقة",
        sessions: "جلسة كل 2–4 أسابيع حسب تقييم الأخصائية",
        downtime: "لا يوجد توقف عادةً – تستطيعين مواصلة يومك بعدها مباشرة",
        faq: [
          { q: "هل يناسب البشرة الحساسة؟", a: "نعم في الغالب، ويتم تعديل الخطوات حسب نوع البشرة وتقييم الأخصائية." },
          { q: "متى تظهر النتيجة؟", a: "تظهر النتيجة عادةً من أول جلسة مع تحسن تراكمي مع الجلسات المتتالية." },
          { q: "هل يمكنني وضع المكياج بعده؟", a: "يُفضَّل الانتظار بضع ساعات بعد الجلسة." },
          { q: "كم عدد الجلسات الموصى بها؟", a: "جلسة كل 2–4 أسابيع حسب حالة البشرة." },
          { q: "هل هو مؤلم؟", a: "الجلسة مريحة جدًا وغير مؤلمة." },
        ],
      },
      en: {
        whatIsIt:
          "Hydrafacial is an advanced skin care session combining cleansing, gentle exfoliation, extraction, and deep hydration using safe, certified technology. Suitable for most skin types, it visibly improves skin texture and appearance.",
        whoIsItFor: ["Dull, lackluster skin", "Blackheads and clogged pores", "Large pores", "Dry or tired-looking skin"],
        benefits: ["Instant glow and radiance", "Deep pore cleansing", "Smoother skin texture", "Effective hydration and soothing", "Great pre-event treatment"],
        steps: ["Gentle skin cleanse", "Soft exfoliation to remove dead cells", "Extraction of impurities and blackheads", "Infusion of hydrating serum", "Final protective layer"],
        duration: "30–60 minutes",
        sessions: "Every 2–4 weeks based on specialist assessment",
        downtime: "Usually none – you can continue your day immediately after",
        faq: [
          { q: "Is it suitable for sensitive skin?", a: "Yes, in most cases. Steps are customized after assessment." },
          { q: "When will I see results?", a: "Often after the very first session, with cumulative improvement." },
          { q: "Can I wear makeup after?", a: "It is best to wait a few hours after the session." },
          { q: "How many sessions are recommended?", a: "One session every 2–4 weeks depending on your skin condition." },
          { q: "Is it painful?", a: "The session is very comfortable and painless." },
        ],
      },
    },
    offerIds: ["skin-professional-plus", "skin-professional-vip"],
  },
  {
    id: "dermapen",
    slug: "dermapen",
    department: "skin",
    title: { ar: "ديرمابن", en: "Dermapen" },
    intro: {
      ar: "تقنية تحفيز الكولاجين لتحسين آثار الحبوب والمسام والملمس العام للبشرة.",
      en: "A collagen-stimulation technique that improves acne marks, pores, and overall skin texture.",
    },
    highlights: {
      ar: ["تحفيز كولاجين طبيعي", "تحسين آثار الحبوب", "نتائج تراكمية مستدامة"],
      en: ["Natural collagen boost", "Improves acne marks", "Sustainable cumulative results"],
    },
    details: {
      ar: {
        whatIsIt:
          "الديرمابن هو جلسة ميكرونيدلينج (إبر دقيقة) تستخدم جهازًا معتمدًا لتحفيز الكولاجين الطبيعي في البشرة وتجديدها من الداخل. يمكن دمجها مع ميزوثيرابي لنتائج أفضل حسب الحالة.",
        whoIsItFor: ["آثار الحبوب والبثور", "المسام الواسعة", "التصبغات السطحية", "الملمس غير المتجانس"],
        benefits: ["تحسين ملمس البشرة", "تقليل آثار الحبوب", "تجديد البشرة من الداخل", "دعم نضارة البشرة وحيويتها"],
        steps: ["تنظيف وتعقيم البشرة", "تخدير موضعي عند الحاجة", "جلسة الديرمابن", "تطبيق سيرومات مهدئة ومغذية", "تعليمات العناية بعد الجلسة"],
        duration: "45–75 دقيقة",
        sessions: "3–6 جلسات حسب الحالة والنتيجة المطلوبة",
        downtime: "احمرار بسيط لمدة 24–72 ساعة",
        faq: [
          { q: "هل هو مؤلم؟", a: "يتم تخدير البشرة قبل الجلسة للتخفيف من الانزعاج." },
          { q: "متى تظهر النتيجة؟", a: "تبدأ النتائج بالظهور بعد الجلسة الثانية أو الثالثة." },
          { q: "هل يمكن دمجه مع ميزوثيرابي؟", a: "نعم، ويُوصى بذلك في كثير من الحالات." },
        ],
      },
      en: {
        whatIsIt:
          "Dermapen is a microneedling session using a certified device to stimulate natural collagen production and renew skin from within. It can be combined with mesotherapy for enhanced results.",
        whoIsItFor: ["Acne marks and scars", "Large pores", "Mild pigmentation", "Uneven skin texture"],
        benefits: ["Smoother skin texture", "Reduced acne marks", "Skin renewal from within", "Improved radiance and vitality"],
        steps: ["Cleanse and disinfect skin", "Topical numbing if needed", "Dermapen session", "Soothing and nourishing serums", "Post-session care instructions"],
        duration: "45–75 minutes",
        sessions: "3–6 sessions depending on condition",
        downtime: "Mild redness for 24–72 hours",
        faq: [
          { q: "Is it painful?", a: "Topical numbing is applied before the session to minimize discomfort." },
          { q: "When will I see results?", a: "Results typically start showing after the 2nd or 3rd session." },
          { q: "Can it be combined with mesotherapy?", a: "Yes, and it is often recommended for better results." },
        ],
      },
    },
    offerIds: ["skin-dermapen-meso", "pkg-ramadan-beauty", "pkg-eid-glow"],
  },
  {
    id: "glass-skin",
    slug: "glass-skin",
    department: "skin",
    title: { ar: "جلسة البشرة الزجاجية", en: "Glass Skin Facial" },
    intro: {
      ar: "جلسة مستوحاة من روتين العناية الكورية تمنح ترطيبًا عميقًا ولمعانًا صحيًا للبشرة.",
      en: "A Korean-inspired treatment for deep hydration and a healthy glassy glow.",
    },
    highlights: {
      ar: ["ترطيب فائق", "إشراقة فورية", "مثالية قبل المناسبات"],
      en: ["Deep hydration", "Instant glow", "Perfect pre-event"],
    },
    details: {
      ar: {
        whatIsIt:
          "جلسة عناية مركّزة مستوحاة من مفهوم البشرة الكورية (Glass Skin) تركّز على الترطيب العميق وتهدئة البشرة وتحسين مظهرها بشكل سريع ومذهل.",
        whoIsItFor: ["البشرة الجافة أو المرهقة", "قبل المناسبات والأحداث المهمة", "البشرة الباهتة"],
        benefits: ["إشراقة وتوهج فوري", "ترطيب عميق ومكثّف", "تهدئة وتلطيف البشرة", "تحسين الملمس العام"],
        steps: ["تنظيف لطيف", "تقشير خفيف", "تطبيق أقنعة ترطيب وتغذية", "حماية وإنهاء"],
        duration: "45–60 دقيقة",
        sessions: "حسب الحاجة – يمكن إجراؤها قبل المناسبات أو كجلسات دورية",
        downtime: "لا يوجد",
        faq: [
          { q: "هل تناسب البشرة الدهنية؟", a: "نعم، تتم تعديل المنتجات المستخدمة حسب نوع البشرة." },
          { q: "كم تدوم النتائج؟", a: "عادةً أسبوع إلى أسبوعين مع العناية المنزلية المناسبة." },
        ],
      },
      en: {
        whatIsIt:
          "An intensive care session inspired by the Korean Glass Skin concept, focusing on deep hydration, soothing, and quick visible improvement — ideal before special occasions.",
        whoIsItFor: ["Dry or tired-looking skin", "Before events or occasions", "Dull complexion"],
        benefits: ["Instant glow and luminosity", "Deep, intensive hydration", "Soothing and calming effect", "Overall texture improvement"],
        steps: ["Gentle cleanse", "Light exfoliation", "Hydrating and nourishing masks", "Protection and finish"],
        duration: "45–60 minutes",
        sessions: "As needed – before events or as periodic sessions",
        downtime: "None",
        faq: [
          { q: "Is it suitable for oily skin?", a: "Yes, products are adjusted based on your skin type." },
          { q: "How long do results last?", a: "Usually one to two weeks with proper home care." },
        ],
      },
    },
    offerIds: ["skin-glass-skin"],
  },
  {
    id: "scalp-cleansing",
    slug: "scalp-cleansing",
    department: "skin",
    title: { ar: "تنظيف فروة الرأس", en: "Scalp Deep Cleansing" },
    intro: {
      ar: "جلسة تنظيف عميق لفروة الرأس تساعد في تقليل التراكمات وتحسين بيئة الشعر وصحته.",
      en: "A deep scalp cleansing session to reduce buildup and support a healthier hair environment.",
    },
    highlights: {
      ar: ["تنظيف التراكمات", "تهدئة فروة الرأس", "دعم صحة الشعر"],
      en: ["Removes buildup", "Soothes scalp", "Supports hair health"],
    },
    details: {
      ar: {
        whatIsIt:
          "جلسة عناية متخصصة بفروة الرأس تساعد على تنظيف المسام وإزالة التراكمات ودعم بيئة صحية لنمو الشعر، وقد تُدمج مع تقييم للحالة حسب الاحتياج.",
        whoIsItFor: ["الفروة الدهنية الزائدة", "القشرة والحكة", "تراكم بقايا منتجات الشعر", "ضعف جودة فروة الرأس"],
        benefits: ["تحسين بيئة فروة الرأس", "تقليل التراكمات والقشرة", "إحساس بالانتعاش والنظافة", "دعم النمو الصحي للشعر"],
        steps: ["تقييم سريع لحالة الفروة", "تنظيف عميق ومتخصص", "تهدئة وترطيب الفروة", "تعليمات العناية المنزلية"],
        duration: "30–45 دقيقة",
        sessions: "جلسات دورية حسب الحالة",
        downtime: "لا يوجد",
      },
      en: {
        whatIsIt:
          "A specialized scalp care session that cleanses pores, removes buildup, and supports a healthy environment for hair growth. Can include a quick assessment based on individual needs.",
        whoIsItFor: ["Oily scalp", "Dandruff and itching", "Product buildup", "Poor scalp condition"],
        benefits: ["Healthier scalp environment", "Reduced buildup and dandruff", "Fresh and clean feeling", "Supports healthy hair growth"],
        steps: ["Quick scalp assessment", "Deep specialized cleansing", "Soothing and moisturizing", "Home care advice"],
        duration: "30–45 minutes",
        sessions: "Periodic sessions as needed",
        downtime: "None",
      },
    },
    offerIds: ["skin-scalp-clean"],
  },
  {
    id: "laser-women",
    slug: "laser-women",
    department: "laser_women",
    title: { ar: "ليزر إزالة الشعر للنساء", en: "Women Laser Hair Removal" },
    intro: {
      ar: "جلسات ليزر آمنة وفعّالة لتقليل نمو الشعر بخطة مخصصة تناسب نوع بشرتك.",
      en: "Safe and effective laser sessions with a personalized plan tailored to your skin type.",
    },
    highlights: {
      ar: ["نتائج تراكمية وطويلة الأمد", "جلسات سريعة", "خطة حسب التقييم"],
      en: ["Cumulative long-term results", "Quick sessions", "Assessment-based plan"],
    },
    details: {
      ar: {
        whatIsIt:
          "إزالة الشعر بالليزر عبر جلسات منتظمة لتقليل نمو الشعر تدريجيًا مع مراعاة نوع البشرة والشعر وتحقيق أفضل النتائج.",
        whoIsItFor: ["إزالة شعر الجسم بشكل دائم", "تقليل النمو بالمناطق المختلفة", "حل طويل الأمد ومريح"],
        benefits: ["تقليل ملحوظ في نمو الشعر", "نعومة دائمة", "التخلص من تهيج الحلاقة", "توفير الوقت والجهد"],
        steps: ["تقييم البشرة والشعر", "تحديد المناطق المطلوبة", "جلسة الليزر", "إرشادات ما بعد الجلسة"],
        duration: "10–60 دقيقة حسب المنطقة",
        sessions: "6–10 جلسات عادةً حسب الحالة",
        downtime: "احمرار بسيط ومؤقت",
        faq: [
          { q: "هل الليزر آمن للبشرة الداكنة؟", a: "نستخدم أجهزة مناسبة لجميع ألوان البشرة حسب التقييم." },
          { q: "كيف أستعد للجلسة؟", a: "يُنصح بحلاقة المنطقة قبل الجلسة بيوم وتجنب التشمس." },
          { q: "هل الجلسات مؤلمة؟", a: "تُستخدم تقنيات تبريد لتقليل الانزعاج." },
        ],
      },
      en: {
        whatIsIt:
          "Laser hair removal through regular sessions to gradually reduce hair growth, with each plan tailored to skin and hair type for best results.",
        whoIsItFor: ["Permanent body hair reduction", "Reduction in various areas", "Long-term, comfortable solution"],
        benefits: ["Noticeable hair reduction", "Lasting smoothness", "Eliminates shaving irritation", "Saves time and effort"],
        steps: ["Skin and hair assessment", "Area selection", "Laser session", "Post-session guidance"],
        duration: "10–60 minutes depending on area",
        sessions: "Typically 6–10 sessions",
        downtime: "Temporary mild redness",
        faq: [
          { q: "Is it safe for darker skin tones?", a: "We use devices suitable for all skin tones based on assessment." },
          { q: "How should I prepare?", a: "Shave the area one day before and avoid sun exposure." },
          { q: "Are sessions painful?", a: "Cooling technology is used to minimize discomfort." },
        ],
      },
    },
    offerIds: [
      "laser-women-3-full", "laser-women-3-mini", "laser-women-full",
      "laser-women-mini", "laser-women-3-small", "laser-women-small",
      "laser-women-large", "laser-women-upper-lip",
    ],
  },
  {
    id: "laser-men",
    slug: "laser-men",
    department: "laser_men",
    title: { ar: "ليزر إزالة الشعر للرجال", en: "Men Laser Hair Removal" },
    intro: {
      ar: "جلسات ليزر للرجال مع خيارات فل بدي ومناطق متعددة وتحديد الذقن.",
      en: "Men laser sessions including full body, multiple areas, and beard shaping.",
    },
    highlights: {
      ar: ["فل بدي وميني بدي", "مناطق صغيرة وكبيرة", "تحديد الذقن والخط"],
      en: ["Full body & mini body", "Small/large areas", "Beard shaping"],
    },
    details: {
      ar: {
        whatIsIt:
          "جلسات ليزر مصممة خصيصًا للرجال لتقليل نمو الشعر تدريجيًا مع خيارات متعددة تناسب الاحتياجات المختلفة.",
        whoIsItFor: ["إزالة شعر الجسم", "تحديد خط الذقن واللحية", "تقليل النمو في مناطق محددة"],
        benefits: ["تقليل نمو الشعر", "نتائج طويلة الأمد", "راحة أكبر من الطرق التقليدية"],
        steps: ["تقييم", "جلسة الليزر", "تهدئة", "إرشادات بعد الجلسة"],
        duration: "10–60 دقيقة حسب المنطقة",
        sessions: "6–10 جلسات عادةً",
        downtime: "احمرار بسيط مؤقت",
        faq: [
          { q: "هل يناسب تحديد الذقن؟", a: "نعم، لدينا بروتوكول خاص لتحديد خط الذقن واللحية." },
          { q: "كم عدد الجلسات؟", a: "يتراوح بين 6 و10 جلسات حسب الحالة." },
        ],
      },
      en: {
        whatIsIt:
          "Men-focused laser sessions to gradually reduce hair growth with flexible area options suited to various needs.",
        whoIsItFor: ["Body hair reduction", "Beard shaping and definition", "Targeted area reduction"],
        benefits: ["Reduced hair growth", "Long-lasting results", "More comfort than traditional methods"],
        steps: ["Assessment", "Laser session", "Soothing", "Aftercare instructions"],
        duration: "10–60 min depending on area",
        sessions: "Typically 6–10 sessions",
        downtime: "Temporary mild redness",
        faq: [
          { q: "Is it suitable for beard shaping?", a: "Yes, we have a specialized protocol for beard and jaw line definition." },
          { q: "How many sessions are needed?", a: "Between 6 and 10 sessions depending on the case." },
        ],
      },
    },
    offerIds: [
      "laser-men-full-body", "laser-men-full-body-3", "laser-men-small-area",
      "laser-men-large-area", "laser-men-beard-3", "laser-men-3-small-areas",
    ],
  },
  {
    id: "botox",
    slug: "botox",
    department: "injectables",
    title: { ar: "البوتكس", en: "Botox" },
    intro: {
      ar: "حل فعّال لتخفيف خطوط التعبير وإبراز ملامح أكثر هدوءًا وشبابًا بشكل طبيعي تمامًا.",
      en: "An effective solution to soften expression lines and enhance naturally youthful features.",
    },
    highlights: {
      ar: ["نتيجة طبيعية تمامًا", "إجراء سريع وغير جراحي", "تعافٍ بسيط جدًا"],
      en: ["Completely natural result", "Quick non-surgical procedure", "Minimal downtime"],
    },
    details: {
      ar: {
        whatIsIt:
          "البوتكس إجراء غير جراحي يساعد على إرخاء العضلات المسؤولة عن خطوط التعبير، مما يمنح مظهرًا أكثر هدوءًا وشبابًا وفق تقييم دقيق من الطبيب.",
        whoIsItFor: ["خطوط الجبهة الأفقية", "خطوط حول العين (ذيل الغراب)", "خط ما بين الحاجبين", "الرغبة في تحسين الملامح بشكل طبيعي"],
        benefits: ["تقليل خطوط التعبير", "مظهر أكثر شبابًا وإشراقًا", "نتائج طبيعية عند التطبيق الصحيح", "يدوم عدة أشهر"],
        steps: ["تقييم وجهي شامل مع الطبيب", "تحديد نقاط الحقن بدقة", "الحقن بإبرة دقيقة", "تعليمات ما بعد الإجراء"],
        duration: "10–20 دقيقة",
        sessions: "حسب الحاجة – تُكرر كل 3–6 أشهر",
        downtime: "بسيط جدًا – يمكنك العودة لحياتك الطبيعية فورًا تقريبًا",
        faq: [
          { q: "هل هو آمن؟", a: "نعم عند تطبيقه بواسطة طبيب متخصص ومعتمد." },
          { q: "متى تظهر النتيجة؟", a: "تبدأ بالظهور خلال 3–7 أيام وتكتمل خلال أسبوعين." },
          { q: "هل سأبدو طبيعيًا؟", a: "نعم، الهدف دائمًا نتيجة طبيعية تحافظ على تعابير وجهك." },
          { q: "هل يمكن دمجه مع الفيلر؟", a: "نعم، الدمج شائع ويعطي نتائج ممتازة." },
          { q: "كم يدوم التأثير؟", a: "عادةً 3–6 أشهر حسب الشخص ومنطقة الحقن." },
        ],
      },
      en: {
        whatIsIt:
          "Botox is a non-surgical procedure that relaxes targeted muscles responsible for expression lines, resulting in a calmer, more youthful appearance based on careful physician assessment.",
        whoIsItFor: ["Forehead horizontal lines", "Crow's feet around eyes", "Frown lines between eyebrows", "Desire for natural facial refinement"],
        benefits: ["Softened expression lines", "More youthful, radiant look", "Natural results when properly applied", "Effects last several months"],
        steps: ["Comprehensive facial assessment with doctor", "Precise injection point marking", "Fine needle injection", "Post-procedure care instructions"],
        duration: "10–20 minutes",
        sessions: "As needed – repeated every 3–6 months",
        downtime: "Minimal – you can return to normal activities almost immediately",
        faq: [
          { q: "Is it safe?", a: "Yes, when performed by a certified specialist physician." },
          { q: "When will I see results?", a: "They begin appearing within 3–7 days and are complete within two weeks." },
          { q: "Will I look natural?", a: "Yes, the goal is always a natural result that preserves your expressions." },
          { q: "Can it be combined with filler?", a: "Yes, combining is common and gives excellent results." },
          { q: "How long does the effect last?", a: "Typically 3–6 months depending on the person and injection area." },
        ],
      },
    },
    offerIds: ["inj-upper-botox-1ml", "inj-full-face-botox", "pkg-eid-glow", "pkg-ramadan-beauty"],
  },
  {
    id: "filler",
    slug: "filler",
    department: "injectables",
    title: { ar: "الفيلر", en: "Filler" },
    intro: {
      ar: "تعزيز ملامح الوجه واستعادة الحجم الطبيعي بشكل متوازن وطبيعي تمامًا.",
      en: "Enhance facial features and restore natural volume in a perfectly balanced, natural way.",
    },
    highlights: {
      ar: ["تعريف الملامح", "نتائج فورية", "خطة مخصصة لوجهك"],
      en: ["Feature definition", "Immediate results", "Face-tailored plan"],
    },
    details: {
      ar: {
        whatIsIt:
          "الفيلر حقن مواد تعبئة طبية معتمدة لتحسين مناطق محددة مثل الشفاه والخدود وخطوط الوجه، حسب تقييم دقيق من الطبيب لضمان نتيجة طبيعية ومتوازنة.",
        whoIsItFor: ["استعادة الحجم المفقود", "تعريف الشفاه والخدود", "تحسين خطوط الوجه", "تحسين التناسق العام"],
        benefits: ["نتائج فورية وواضحة", "توازن في الملامح", "تحسين الشكل العام بطريقة طبيعية"],
        steps: ["تقييم وجهي دقيق", "تحديد المناطق المستهدفة", "الحقن بطريقة احترافية", "تعليمات ما بعد الإجراء"],
        duration: "20–40 دقيقة",
        sessions: "حسب الحاجة",
        downtime: "تورم بسيط محتمل لبضعة أيام",
        faq: [
          { q: "هل الفيلر آمن؟", a: "نعم عند استخدام مواد معتمدة وتطبيقها بواسطة طبيب متخصص." },
          { q: "كم يدوم؟", a: "يتراوح بين 9–18 شهرًا حسب المادة والمنطقة." },
          { q: "هل يبدو طبيعيًا؟", a: "نعم، الهدف دائمًا نتيجة طبيعية ومتوازنة." },
        ],
      },
      en: {
        whatIsIt:
          "Filler uses certified medical dermal fillers to enhance targeted areas such as lips, cheeks, or facial contours — based on careful physician assessment to ensure a natural, balanced result.",
        whoIsItFor: ["Restoring lost volume", "Lip and cheek enhancement", "Facial line improvement", "Overall harmony improvement"],
        benefits: ["Immediate, visible results", "Balanced features", "Natural-looking overall enhancement"],
        steps: ["Precise facial assessment", "Targeted area planning", "Professional injection", "Aftercare instructions"],
        duration: "20–40 minutes",
        sessions: "As needed",
        downtime: "Possible mild swelling for a few days",
        faq: [
          { q: "Is filler safe?", a: "Yes, when certified materials are used by a specialist physician." },
          { q: "How long does it last?", a: "Between 9–18 months depending on the material and area." },
          { q: "Will it look natural?", a: "Yes, the goal is always a natural and balanced result." },
        ],
      },
    },
    offerIds: ["inj-filler-1ml", "pkg-eid-glow", "pkg-ramadan-beauty"],
  },
  {
    id: "skin-boosters",
    slug: "skin-boosters",
    department: "skin_boosters",
    title: { ar: "إبر النضارة", en: "Skin Boosters" },
    intro: {
      ar: "جلسات نضارة متقدمة لتحسين الترطيب العميق والمرونة والإشراقة بناءً على تقييم الطبيب.",
      en: "Advanced booster sessions to improve deep hydration, elasticity, and radiance.",
    },
    highlights: {
      ar: ["ترطيب عميق ومكثف", "تحسين المرونة والإشراقة", "نتائج تراكمية مستدامة"],
      en: ["Deep intensive hydration", "Better elasticity and glow", "Sustainable cumulative results"],
    },
    details: {
      ar: {
        whatIsIt:
          "إبر النضارة هي حقن متخصصة تُحدد حسب تقييم الطبيب لتحسين جودة البشرة ومظهرها العام بشكل تدريجي ومستدام.",
        whoIsItFor: ["البشرة الجافة أو المفقودة للمرونة", "البهتان وعدم الإشراقة", "تحسين جودة البشرة العامة", "الملمس غير المتجانس"],
        benefits: ["ترطيب عميق ومستدام", "إشراقة طبيعية", "تحسين الملمس والمرونة", "مظهر أكثر صحة وحيوية"],
        steps: ["تقييم طبي دقيق", "اختيار النوع المناسب", "الحقن بتقنية متخصصة", "تعليمات ما بعد الإجراء"],
        duration: "20–40 دقيقة",
        sessions: "جلسات متباعدة حسب التقييم",
        downtime: "بسيط",
        faq: [
          { q: "ما الفرق بين إبر النضارة والفيلر؟", a: "الفيلر يضيف حجمًا، أما إبر النضارة فتحسّن جودة البشرة من الداخل." },
          { q: "كم تدوم النتيجة؟", a: "تتراوح بين 6–12 شهرًا حسب النوع والحالة." },
        ],
      },
      en: {
        whatIsIt:
          "Skin boosters are specialized injections determined by physician assessment to improve overall skin quality gradually and sustainably.",
        whoIsItFor: ["Dry or inelastic skin", "Dullness and lack of glow", "General skin quality improvement", "Uneven texture"],
        benefits: ["Deep, lasting hydration", "Natural radiance", "Better texture and elasticity", "Healthier, more vibrant appearance"],
        steps: ["Precise medical assessment", "Suitable type selection", "Specialized injection technique", "Aftercare instructions"],
        duration: "20–40 minutes",
        sessions: "Spaced sessions based on assessment",
        downtime: "Minimal",
        faq: [
          { q: "What is the difference between skin boosters and filler?", a: "Filler adds volume, while skin boosters improve skin quality from within." },
          { q: "How long do results last?", a: "Between 6–12 months depending on type and condition." },
        ],
      },
    },
    offerIds: ["sb-premium-mix", "sb-calcium", "sb-starting", "sb-water-tightening", "pkg-ramadan-beauty"],
  },
  {
    id: "exosome",
    slug: "exosome",
    department: "hair",
    title: { ar: "إكسوزوم للشعر", en: "Hair Exosome" },
    intro: {
      ar: "خيار متقدم لدعم صحة الشعر وتحسين كثافته بأحدث تقنيات العلاج.",
      en: "An advanced option to support hair health and improve density using the latest treatment techniques.",
    },
    highlights: {
      ar: ["دعم كثافة الشعر", "خطة علاجية متخصصة", "نتائج تراكمية"],
      en: ["Supports hair density", "Specialized treatment plan", "Cumulative results"],
    },
    details: {
      ar: {
        whatIsIt:
          "الإكسوزوم جلسة علاج متقدمة للشعر تُحدد حسب تقييم الحالة وقد تُدمج مع علاجات داعمة لتحقيق أفضل النتائج في دعم نمو الشعر وكثافته.",
        whoIsItFor: ["تساقط الشعر والخف", "ضعف كثافة الشعر", "الرغبة في تحسين جودة الشعر وصحته"],
        benefits: ["دعم النمو الصحي للشعر", "تحسين الكثافة والحيوية", "تحسين المظهر العام للشعر"],
        steps: ["تقييم الحالة بدقة", "وضع خطة العلاج المناسبة", "تطبيق البروتوكول الصحيح", "متابعة ومراجعة النتائج"],
        duration: "حسب البروتوكول المحدد",
        sessions: "حسب الحالة",
        downtime: "بسيط",
      },
      en: {
        whatIsIt:
          "Hair exosome is an advanced treatment session determined after assessment; may be combined with supportive therapies for optimal hair growth and density results.",
        whoIsItFor: ["Hair fall and thinning", "Low hair density", "Desire to improve hair quality and health"],
        benefits: ["Supports healthier hair growth", "Improved density and vitality", "Better overall hair appearance"],
        steps: ["Detailed condition assessment", "Personalized treatment plan", "Protocol application", "Follow-up and result review"],
        duration: "Depends on protocol",
        sessions: "Depends on condition",
        downtime: "Minimal",
      },
    },
    offerIds: ["hair-exosome", "hair-exosome-5ml"],
  },
  {
    id: "hair-meso",
    slug: "hair-mesotherapy",
    department: "hair",
    title: { ar: "ميزوثيرابي للشعر", en: "Hair Mesotherapy" },
    intro: {
      ar: "جلسات تغذية ودعم لفروة الرأس لتحسين صحة الشعر بناءً على تقييم المختص.",
      en: "Scalp nourishment sessions to support healthier hair based on specialist assessment.",
    },
    highlights: {
      ar: ["تغذية فروة الرأس", "خطة جلسات مخصصة", "مناسب لحالات متعددة"],
      en: ["Scalp nourishment", "Custom session plan", "Suitable for various conditions"],
    },
    details: {
      ar: {
        whatIsIt:
          "ميزوثيرابي الشعر جلسات حقن متخصصة لتغذية فروة الرأس ودعم صحة الشعر وفق خطة تُحدد بعد التقييم الدقيق.",
        whoIsItFor: ["تساقط الشعر", "ضعف الشعر وهشاشته", "الرغبة في تحسين جودة الشعر"],
        benefits: ["دعم فروة الرأس وتغذيتها", "تحسين جودة الشعر وقوته", "نتائج تراكمية مستدامة"],
        steps: ["تقييم دقيق", "تحديد البروتوكول المناسب", "جلسة الميزوثيرابي", "متابعة النتائج"],
        duration: "30–45 دقيقة",
        sessions: "حسب التقييم",
        downtime: "بسيط",
      },
      en: {
        whatIsIt:
          "Hair mesotherapy provides specialized scalp injection sessions to nourish and support hair health, based on a plan set after careful assessment.",
        whoIsItFor: ["Hair fall", "Weak or brittle hair", "Desire to improve hair quality"],
        benefits: ["Scalp nourishment and support", "Better hair quality and strength", "Sustainable cumulative results"],
        steps: ["Precise assessment", "Protocol selection", "Mesotherapy session", "Result follow-up"],
        duration: "30–45 minutes",
        sessions: "Based on assessment",
        downtime: "Minimal",
      },
    },
    offerIds: ["hair-meso-filler"],
  },
];
