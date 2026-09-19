import { JourneyConfig, TimelineItem, MemoryPhoto, ThenNowData } from '../types';

export const INITIAL_JOURNEY_CONFIG: JourneyConfig = {
  name: "Shakil",
  nameBangla: "শাকিল",
  departureDate: "11 April 2024",
  departureDateBangla: "১১ এপ্রিল ২০২৪",
  departureIsoDate: "2024-04-11T18:30:00+06:00",
  departureDayNumber: "11",
  departureDayNumberBangla: "১১",
  fromCountry: "Bangladesh",
  fromCountryBangla: "বাংলাদেশ",
  fromCity: "Dhaka",
  fromCityBangla: "ঢাকা",
  fromFlag: "🇧🇩",
  toCountry: "Saudi Arabia",
  toCountryBangla: "সৌদি আরব",
  toCity: "Riyadh",
  toCityBangla: "রিয়াদ",
  toFlag: "🇸🇦",
  websiteTitle: "১১ তারিখ — যেদিন বাড়ি ছেড়ে দূর দেশে পাড়ি দিলাম",
  englishSubtitle: "The Day I Left Home",
  heroTagline: "একটা নতুন জীবনের শুরু…",
  heroStoryText: "সেদিন শুধু একটি বাড়ি ছেড়ে আসিনি, পেছনে রেখে এসেছিলাম আমার পরিচিত পৃথিবী, পরিবার, আপন মানুষ আর অসংখ্য স্মৃতি।",
  quoteBengali: "বাড়ি থেকে দূরে থাকা মানে বাড়িকে ভুলে যাওয়া নয়। বরং দূরে গেলেই বোঝা যায়— বাড়ি আসলে কতটা আপন।",
  quoteEnglish: "Being away from home does not mean forgetting it. Rather, it is only when you are far away that you truly realize how precious home really is.",
  quoteAuthor: "— প্রবাস জীবনের অনুভূতি",
  personalMessageTitle: "নিজের কাছে কিছু কথা",
  personalMessageParagraphs: [
    "জীবনে কিছু সিদ্ধান্ত সহজ হয় না। কখনো কখনো নিজের মানুষদের ছেড়ে দূর দেশে যেতে হয়।",
    "১১ তারিখ আমার জীবনের তেমনই একটি দিন।",
    "সেদিন থেকে শুরু হয়েছিল একটি নতুন অধ্যায়।"
  ],
  finalTitle: "একদিন আবার ফিরবো…",
  finalSubtitle: "কারণ পৃথিবীর যত দূরেই যাই, বাড়ি সবসময় বাড়িই থাকে।",
  finalQuote: "Home is not a place. Home is a feeling.",
  finalQuoteSub: "যেখানে মন থাকে, সেখানেই আসল বাড়ি।"
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "step-1",
    step: "01",
    title: "বাড়ি ছাড়ার দিন",
    dateBadge: "১১ তারিখ",
    icon: "Home",
    location: "গ্রামের বাড়ি / নিজ আঙিনা",
    timeOfDay: "ভোরবেলা",
    description: "বাড়ির দরজা পেরিয়ে যখন বের হয়েছিলাম, তখন জানতাম না সামনে কী অপেক্ষা করছে। শুধু এক বুক প্রত্যাশা আর ফেলে আসা শৈশবের টান ছিল সাথে।",
    reflection: "দরজাটা বন্ধ করার মুহূর্তটা আজও বুকের গভীরে বাজে।"
  },
  {
    id: "step-2",
    step: "02",
    title: "শেষ বিদায়",
    dateBadge: "বিদায়ের মুহূর্ত",
    icon: "Heart",
    location: "পরিবারের উঠোন ও গাড়ি",
    timeOfDay: "সকাল",
    description: "পরিবার, পরিচিত মুখ আর নিজের শহরকে পেছনে রেখে শুরু হলো নতুন যাত্রা। মায়ের ভেজা চোখ আর বাবার শক্ত আলিঙ্গন ছিল যাত্রার সবচেয়ে ভারী পাথেয়।",
    reflection: "কান্না চেপে হাসিমুখে বিদায় নেওয়ার অভিনয়টা ছিল সবচেয়ে কঠিন।"
  },
  {
    id: "step-3",
    step: "03",
    title: "বিমানবন্দর",
    dateBadge: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর",
    icon: "PlaneTakeoff",
    location: "ঢাকা, বাংলাদেশ",
    timeOfDay: "সন্ধ্যা",
    description: "হাতে ছিল কিছু প্রয়োজনীয় জিনিস, মনে ছিল হাজারো চিন্তা আর স্বপ্ন। শেষবারের মতো পেছনের লাউঞ্জের কাঁচের ফাঁক দিয়ে চেনা মাটির দিকে চেয়ে দেখা।",
    reflection: "পাসপোর্টে সিল পড়ার সাথে সাথেই বদলে গেলো আমার চেনা ঠিকানা।"
  },
  {
    id: "step-4",
    step: "04",
    title: "বাংলাদেশ থেকে সৌদি আরব",
    subtitle: "🇧🇩 → 🇸🇦",
    dateBadge: "আকাশে প্রায় ৫ ঘণ্টার যাত্রা",
    icon: "Compass",
    location: "মেঘের দেশে",
    timeOfDay: "মধ্যরাত",
    description: "এক দেশ থেকে আরেক দেশে। এক পরিচিত জীবন থেকে সম্পূর্ণ নতুন এক অধ্যায়ে। জানালার বাইরে অন্ধকার আকাশে জ্বলে থাকা তারার মতোই একা লাগছিল তখন।",
    reflection: "বিমানের ডানার নিচে মিলিয়ে গেল আমার সবুজ দেশ।"
  },
  {
    id: "step-5",
    step: "05",
    title: "সৌদি আরবে নতুন জীবন",
    dateBadge: "প্রথম আগমন",
    icon: "Moon",
    location: "কিং খালিদ আন্তর্জাতিক বিমানবন্দর, রিয়াদ",
    timeOfDay: "ভোর",
    description: "নতুন জায়গা, নতুন মানুষ, নতুন দায়িত্ব— সবকিছুর সঙ্গে ধীরে ধীরে মানিয়ে নেওয়া। এক ভিন্ন ভাষা, মরুভূমির শুষ্ক বাতাস আর নিজের অস্তিত্বের এক নতুন লড়াই।",
    reflection: "প্রতিটি নতুন সকালে পরিবারের গলার আওয়াজ শোনার তীব্র আকাঙ্ক্ষা।"
  },
  {
    id: "step-6",
    step: "06",
    title: "আজ",
    dateBadge: "বর্তমান মুহূর্ত",
    icon: "Clock",
    location: "প্রবাসের কর্মব্যস্ত জীবন",
    timeOfDay: "চলমান",
    description: "সময় চলে যায়। কিন্তু বাড়ির কথা, বাড়ির মানুষ, আর সেই ১১ তারিখ— মনে থেকে যায়। আজ আমি নিজের পায়ে দাঁড়িয়েছি, কিন্তু অন্তরটা রয়ে গেছে ফেলে আসা সেই উঠোনেই।",
    reflection: "দূরত্ব হয়তো বেড়েছে, কিন্তু ভালোবাসার টান আরও প্রগাঢ় হয়েছে।"
  }
];

export const MEMORY_CATEGORIES = [
  { id: 'all', label: 'সব স্মৃতি', icon: 'Sparkles' },
  { id: 'home', label: '🏠 বাড়ি', icon: 'Home' },
  { id: 'family', label: '👨‍👩‍👦 পরিবার', icon: 'Users' },
  { id: 'journey', label: '✈️ যাত্রা', icon: 'Plane' },
  { id: 'bangladesh', label: '🇧🇩 বাংলাদেশ', icon: 'MapPin' },
  { id: 'saudi', label: '🇸🇦 সৌদি আরব', icon: 'Building2' },
  { id: 'night', label: '🌙 রাতের স্মৃতি', icon: 'Moon' }
] as const;

export const MEMORY_PHOTOS: MemoryPhoto[] = [
  {
    id: "photo-1",
    title: "ফেলে আসা আঙিনা ও বারান্দা",
    caption: "যে বারান্দায় বসে চা খেতে খেতে কত বিকেল কেটে গেছে। আজও বন্ধ চোখে সেই উঠোনের ঘাসের গন্ধ পাই।",
    category: "home",
    categoryLabel: "🏠 বাড়ি",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    date: "১০ এপ্রিল ২০২৪",
    location: "গ্রামের বাড়ি"
  },
  {
    id: "photo-2",
    title: "যাত্রার আগের শেষ সন্ধ্যা",
    caption: "পরিবারের সবার সাথে শেষবারের মতো রাতের খাবার খাওয়া। কেউ কিছু বলছিল না, কিন্তু সবার চোখেই ছিল মৌন আকুলতা।",
    category: "family",
    categoryLabel: "👨‍👩‍👦 পরিবার",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop",
    date: "১০ এপ্রিল ২০২৪ রাত",
    location: "ডাইনিং টেবিল"
  },
  {
    id: "photo-3",
    title: "বোর্ডিং পাস ও প্রবাসের টিকিট",
    caption: "এক টুকরো টিকিট— যা আমাকে নিয়ে চলেছে আমার প্রিয় চেনা মানুষগুলো থেকে কয়েক হাজার মাইল দূরে।",
    category: "journey",
    categoryLabel: "✈️ যাত্রা",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    date: "১১ এপ্রিল ২০২৪",
    location: "ঢাকা বিমানবন্দর টার্মিনাল"
  },
  {
    id: "photo-4",
    title: "বাংলার সবুজ স্নিগ্ধ প্রকৃতি",
    caption: "বৃষ্টিভেজা শ্যামল বাংলা, যেখানে আমার শৈশব ও কৈশোরের প্রতিটি স্মৃতি জড়িয়ে আছে মাটির সাথে।",
    category: "bangladesh",
    categoryLabel: "🇧🇩 বাংলাদেশ",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
    date: "২০২৪ বসন্ত",
    location: "বাংলাদেশ"
  },
  {
    id: "photo-5",
    title: "মেঘের কোল ঘেঁষে উড্ডয়ন",
    caption: "বিমানের জানালায় চোখ রেখে নিচে দেখা যাচ্ছিল জ্বলজ্বলে ঢাকা শহরের বাতি। ধীরে ধীরে তা মিলিয়ে গেল আঁধারে।",
    category: "journey",
    categoryLabel: "✈️ যাত্রা",
    imageUrl: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1200&auto=format&fit=crop",
    date: "১১ এপ্রিল ২০২৪ রাত ৯:৪৫",
    location: "৩৫,০০০ ফুট উচ্চতায়"
  },
  {
    id: "photo-6",
    title: "সৌদি আরবের প্রথম সকাল",
    caption: "নতুন শহর, দূর দিগন্তে আধুনিক স্কাইলাইন আর সোনালী রোদের ঝিলিক। শুরু হলো বেঁচে থাকার নতুন সংগ্রাম।",
    category: "saudi",
    categoryLabel: "🇸🇦 সৌদি আরব",
    imageUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1200&auto=format&fit=crop",
    date: "১২ এপ্রিল ২০২৪",
    location: "রিয়াদ, সৌদি আরব"
  },
  {
    id: "photo-7",
    title: "মায়ের হাতের দোয়ার পরশ",
    caption: "যাত্রার দিন মাথায় মায়ের আশীর্বাদের হাত। আজও ক্লান্তি এলে চোখ বুজে সেই স্পর্শ অনুভব করি।",
    category: "family",
    categoryLabel: "👨‍👩‍👦 পরিবার",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    date: "১১ তারিখ বিদায়বেলা",
    location: "দরজার মুখ"
  },
  {
    id: "photo-8",
    title: "মরুভূমির নীরব সন্ধ্যা ও একাকী তারা",
    caption: "সৌদির বিস্তীর্ণ মরুভূমির ওপর চাঁদের আলো। এই একই চাঁদের নিচে আমার দেশের মানুষগুলোও হয়তো এখন নিদ্রায়।",
    category: "night",
    categoryLabel: "🌙 রাতের স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1200&auto=format&fit=crop",
    date: "নভেম্বর ২০২৪",
    location: "সৌদি আরব"
  },
  {
    id: "photo-9",
    title: "প্রবাসের জানালায় রাতের আলো",
    caption: "কাজের পর নিঃশব্দ ঘরে এক কাপ লাল চা হাতে জানালার বাইরে দেখা। মনে পড়ে যায় বাড়ির উঠোনের গল্পগাথা।",
    category: "night",
    categoryLabel: "🌙 রাতের স্মৃতি",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
    date: "সাম্প্রতিক রাত",
    location: "রিয়াদের বারান্দা"
  }
];

export const THEN_AND_NOW_DATA: ThenNowData = {
  thenTitle: "তখন",
  thenSubtitle: "ফেলে আসা চেনা জীবন (বাংলাদেশ)",
  thenItems: [
    { icon: "Home", text: "বাড়ির উষ্ণতা", detail: "যেখানে প্রতিটি কোণে ছিল শৈশবের হাসিমুখ আর নির্ভরতার চাদর" },
    { icon: "Users", text: "আপন পরিবার", detail: "একসাথে খাওয়ার টেবিলে বসা, মায়ের স্নেহময় ডাক আর বাবার নিশ্চিন্ত ছায়া" },
    { icon: "MapPin", text: "সবুজ বাংলাদেশ", detail: "নদীর মিষ্টি বাতাস, বর্ষার বৃষ্টি আর চেনা পথের পরিচিত মানুষগুলো" },
    { icon: "Heart", text: "পরিচিত জীবন", detail: "কোনো বড় পিছুটান বা দায়িত্বের পাহাড় ছাড়া নিশ্চিন্ত দিন কাটানো" }
  ],
  nowTitle: "এখন",
  nowSubtitle: "চলমান প্রবাস জীবন (সৌদি আরব)",
  nowItems: [
    { icon: "Building2", text: "সৌদি আরব", detail: "নতুন ভূমি, নতুন পরিবেশ ও অচেনা মরু বাতাসের মাঝে নিজের পথ খোঁজা" },
    { icon: "Briefcase", text: "নতুন দায়িত্ব", detail: "পরিবারের মুখে হাসি ফোটানোর অঙ্গীকার ও কঠিন পরিশ্রমের অঙ্গীকার" },
    { icon: "Globe", text: "নতুন অভিজ্ঞতা", detail: "বিভিন্ন সংস্কৃতির মানুষের সাথে মানিয়ে নেওয়া এবং স্বাবলম্বী হওয়া" },
    { icon: "Target", text: "নতুন স্বপ্ন", detail: "সফল হয়ে একদিন সগৌরবে নিজের প্রিয় দেশে ফিরে যাওয়ার অবিচল আকাঙ্ক্ষা" }
  ]
};
