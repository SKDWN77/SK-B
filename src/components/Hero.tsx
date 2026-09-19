import React, { useMemo } from 'react';
import { Plane, ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react';
import { JourneyConfig } from '../types';

interface HeroProps {
  config: JourneyConfig;
  useBengaliDigits: boolean;
}

export const Hero: React.FC<HeroProps> = ({ config, useBengaliDigits }) => {
  // Generate random twinkling stars for the night sky
  const stars = useMemo(() => {
    return Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 85,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  const displayedDate = useBengaliDigits
    ? config.departureDateBangla
    : config.departureDate;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Cinematic Night / Travel Atmosphere Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Base deep navy / space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060f] via-[#060b18] to-[#0a1126]" />

        {/* Ambient colored lighting glows (Bangladesh green/gold aura on origin, desert moon indigo on destination) */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-900/15 blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-amber-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[550px] h-[400px] rounded-full bg-blue-900/15 blur-[120px]" />

        {/* Twinkling Stars */}
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white transition-opacity"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `pulseGlow ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

        {/* Subtle Crescent Moon in the distant night sky (Symbol of Saudi Arabia / Middle Eastern Night) */}
        <div className="absolute top-20 right-8 sm:top-24 sm:right-24 opacity-65 flex flex-col items-center">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full shadow-[0_0_35px_rgba(251,191,36,0.25)]">
            <div className="w-full h-full rounded-full border-r-4 border-t-2 border-amber-100/80 -rotate-45" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-200 animate-ping opacity-75" />
          </div>
          <span className="text-[10px] text-amber-200/40 tracking-widest font-mono mt-1 uppercase">
            {config.toCountry}
          </span>
        </div>

        {/* Airplane flight path across the sky */}
        <div className="absolute top-36 left-[-10%] sm:left-[-5%] w-[120%] h-44 opacity-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 160 Q 450 20, 1150 70"
              stroke="rgba(251, 191, 36, 0.4)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className="flight-path-animated"
            />
          </svg>
          {/* Subtle animated airplane along curve */}
          <div className="absolute top-[32px] left-[55%] -translate-x-1/2 -rotate-12 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-float-slow">
            <Plane className="w-6 h-6 transform rotate-45" />
          </div>
        </div>

        {/* Distant City Lights & Horizon Road Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56">
          {/* Subtle Village house silhouette on bottom-left */}
          <div className="absolute bottom-0 left-4 sm:left-16 z-10 opacity-70">
            <svg
              className="w-40 sm:w-56 h-auto"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Roof */}
              <polygon points="20,70 100,25 180,70" fill="#03060f" />
              <polygon points="10,75 100,20 190,75" stroke="#0a1329" strokeWidth="2" />
              {/* House walls */}
              <rect x="35" y="70" width="130" height="50" fill="#03060f" />
              {/* Warm lit window: represents the warm home left behind */}
              <rect
                x="60"
                y="82"
                width="24"
                height="22"
                rx="2"
                fill="#fbbf24"
                className="animate-pulse shadow-[0_0_20px_#f59e0b]"
                opacity="0.85"
              />
              <line x1="72" y1="82" x2="72" y2="104" stroke="#03060f" strokeWidth="1.5" />
              <line x1="60" y1="93" x2="84" y2="93" stroke="#03060f" strokeWidth="1.5" />
              {/* Door */}
              <rect x="110" y="80" width="22" height="40" fill="#02040a" />
              {/* Coconut/Palm tree silhouette representing Bengal */}
              <path
                d="M 175 120 Q 185 60 190 30"
                stroke="#040814"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M 190 30 Q 170 15 155 25"
                stroke="#040814"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 190 30 Q 205 10 225 20"
                stroke="#040814"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 190 30 Q 195 10 200 0"
                stroke="#040814"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute bottom-2 left-6 text-[10px] text-amber-200/50 font-sans-bn">
              চেনা বাড়ির প্রদীপ
            </span>
          </div>

          {/* Road winding forward into the darkness */}
          <svg
            className="w-full h-full absolute bottom-0 opacity-40"
            viewBox="0 0 1000 160"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 200 160 Q 420 120 490 80 T 520 20"
              stroke="#111c38"
              strokeWidth="45"
              strokeLinecap="round"
            />
            <path
              d="M 200 160 Q 420 120 490 80 T 520 20"
              stroke="rgba(251, 191, 36, 0.4)"
              strokeWidth="2"
              strokeDasharray="8 12"
            />
          </svg>

          {/* Horizon mist & distant city amber bokeh lights */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050811] via-[#050811]/80 to-transparent" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center">
        {/* Subtitle / Intro Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:border-amber-500/30 transition-all">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-sans-bn tracking-wide text-amber-200/90 font-medium">
            {config.heroTagline}
          </span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span className="text-xs text-neutral-400 font-sans tracking-wide">
            {config.englishSubtitle}
          </span>
        </div>

        {/* Large Central Heading: "১১ তারিখ" */}
        <div className="relative mb-3">
          <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-600/10 blur-2xl rounded-full -z-10" />
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight font-serif-bn text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-amber-200/80 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            {config.departureDayNumberBangla} তারিখ
          </h1>
        </div>

        {/* Hero Tagline Subtitle: "যেদিন বাড়ি ছেড়ে দূর দেশে পাড়ি দিলাম" */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-200 font-sans-bn max-w-3xl leading-relaxed mb-6">
          যেদিন বাড়ি ছেড়ে দূর দেশে পাড়ি দিলাম
        </h2>

        {/* Journey Route Badge: বাংলাদেশ 🇧🇩 → সৌদি আরব 🇸🇦 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-2 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/40">
          <div className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-neutral-200 font-sans-bn">
            <span className="text-lg">{config.fromFlag}</span>
            <span>{config.fromCountryBangla}</span>
            <span className="text-xs text-neutral-400">({config.fromCityBangla})</span>
          </div>

          <div className="flex items-center gap-1 text-amber-400 px-2">
            <span className="text-xs">───</span>
            <Plane className="w-4 h-4 transform rotate-45 text-amber-300 animate-pulse" />
            <span className="text-xs">───</span>
          </div>

          <div className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-neutral-200 font-sans-bn">
            <span className="text-lg">{config.toFlag}</span>
            <span>{config.toCountryBangla}</span>
            <span className="text-xs text-neutral-400">({config.toCityBangla})</span>
          </div>
        </div>

        {/* Departure Date Prominently Displayed */}
        <div className="mt-5 mb-8 flex items-center justify-center gap-2 text-amber-300/90 font-cinzel text-base sm:text-lg tracking-wider">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="font-semibold">{displayedDate}</span>
          <span className="text-xs px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 font-sans font-normal">
            বিদায়ের ক্ষণ
          </span>
        </div>

        {/* Small Emotional Paragraph */}
        <div className="max-w-2xl mx-auto px-4 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
          <p className="text-base sm:text-lg text-neutral-300 font-sans-bn leading-relaxed text-center font-light italic">
            “{config.heroStoryText}”
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-neutral-400 font-sans">
            <MapPin className="w-3 h-3 text-amber-400/80" />
            <span>স্মৃতিকথক: {config.nameBangla} ({config.name})</span>
          </div>
        </div>

        {/* CTA Button: “আমার গল্প দেখুন ↓” */}
        <div className="mt-10">
          <a
            href="#counter"
            id="hero-scroll-btn"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/40 hover:border-amber-400 text-amber-100 font-sans-bn text-base font-medium shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>আমার গল্প দেখুন</span>
            <ChevronDown className="w-4 h-4 text-amber-300 group-hover:translate-y-1 transition-transform" />
            <span className="absolute -inset-0.5 rounded-full bg-amber-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator at bottom */}
      <div className="relative z-10 text-center flex flex-col items-center pt-8">
        <a
          href="#counter"
          className="text-neutral-300 hover:text-amber-300 transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to Counter"
        >
          <span className="text-[11px] font-sans tracking-widest uppercase text-neutral-300 group-hover:text-amber-300">
            Scroll down
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400/70" />
        </a>
      </div>
    </section>
  );
};
