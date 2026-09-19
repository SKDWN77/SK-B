export interface JourneyConfig {
  name: string;
  nameBangla: string;
  departureDate: string; // E.g. "11 April 2024"
  departureDateBangla: string; // E.g. "১১ এপ্রিল ২০২৪"
  departureIsoDate: string; // ISO string: "2024-04-11T14:30:00"
  departureDayNumber: string; // "11"
  departureDayNumberBangla: string; // "১১"
  fromCountry: string; // "Bangladesh"
  fromCountryBangla: string; // "বাংলাদেশ"
  fromCity: string; // "Dhaka"
  fromCityBangla: string; // "ঢাকা"
  fromFlag: string; // "🇧🇩"
  toCountry: string; // "Saudi Arabia"
  toCountryBangla: string; // "সৌদি আরব"
  toCity: string; // "Riyadh"
  toCityBangla: string; // "রিয়াদ"
  toFlag: string; // "🇸🇦"
  websiteTitle: string;
  englishSubtitle: string;
  heroTagline: string;
  heroStoryText: string;
  quoteBengali: string;
  quoteEnglish: string;
  quoteAuthor?: string;
  personalMessageTitle: string;
  personalMessageParagraphs: string[];
  finalTitle: string;
  finalSubtitle: string;
  finalQuote: string;
  finalQuoteSub: string;
}

export interface TimelineItem {
  id: string;
  step: string;
  title: string;
  subtitle?: string;
  dateBadge?: string;
  description: string;
  icon: string;
  location?: string;
  timeOfDay?: string;
  reflection?: string;
}

export interface MemoryPhoto {
  id: string;
  title: string;
  caption: string;
  category: 'home' | 'family' | 'journey' | 'bangladesh' | 'saudi' | 'night';
  categoryLabel: string;
  imageUrl: string;
  date?: string;
  location?: string;
}

export interface ThenNowItem {
  icon: string;
  text: string;
  detail?: string;
}

export interface ThenNowData {
  thenTitle: string;
  thenSubtitle: string;
  thenItems: ThenNowItem[];
  nowTitle: string;
  nowSubtitle: string;
  nowItems: ThenNowItem[];
}
