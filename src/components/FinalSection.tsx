import React from 'react';
import { Home, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { JourneyConfig } from '../types';

interface FinalSectionProps {
  config: JourneyConfig;
}

export const FinalSection: React.FC<FinalSectionProps> = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 sm:py-40 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Cinematic Golden Sunrise / Horizon Dawn Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#0b162f] to-[#121c38] -z-10" />

      {/* Dawn / Golden Return Glow at the bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[380px] bg-gradient-to-t from-amber-500/15 via-rose-500/10 to-transparent blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle House Silhouette at the horizon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none">
        <svg
          className="w-48 sm:w-64 h-auto"
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="50,55 100,20 150,55" fill="#fbbf24" opacity="0.6" />
          <rect x="65" y="55" width="70" height="25" fill="#050811" />
          <rect x="80" y="60" width="14" height="14" rx="2" fill="#f59e0b" opacity="0.9" />
          <rect x="105" y="58" width="16" height="22" fill="#020409" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        {/* Emblem */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-amber-400/20 to-amber-600/5 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_35px_rgba(245,158,11,0.3)] mb-8">
          <Home className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
        </div>

        {/* Large Text: “একদিন আবার ফিরবো…” */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif-bn text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-amber-200 tracking-tight mb-6">
          {config.finalTitle}
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-200 font-sans-bn max-w-2xl leading-relaxed mb-10">
          “{config.finalSubtitle}”
        </p>

        {/* Home is not a place quote */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md max-w-lg mx-auto mb-12 shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-rose-400 mb-2">
            <Heart className="w-5 h-5 fill-rose-500/40 text-rose-400 animate-pulse" />
          </div>
          <p className="text-lg sm:text-xl font-serif text-neutral-100 italic tracking-wide">
            {config.finalQuote}
          </p>
          <p className="text-xs sm:text-sm font-sans-bn text-amber-300/80 mt-2">
            {config.finalQuoteSub}
          </p>
        </div>

        {/* Return to Top Button */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-500/40 text-neutral-300 hover:text-amber-200 transition-all duration-300 text-sm font-sans-bn shadow-lg"
        >
          <ArrowUp className="w-4 h-4 text-amber-400 group-hover:-translate-y-1 transition-transform" />
          <span>শুরুর স্মৃতিকথায় ফিরে যান</span>
        </button>
      </div>
    </section>
  );
};
