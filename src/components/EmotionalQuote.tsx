import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { JourneyConfig } from '../types';

interface EmotionalQuoteProps {
  config: JourneyConfig;
}

export const EmotionalQuote: React.FC<EmotionalQuoteProps> = ({ config }) => {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden flex items-center justify-center">
      {/* Cinematic Animated Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#09142e] to-[#050811] -z-10" />

      {/* Aurora / Nebula subtle glowing light layers */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-600/15 rounded-full blur-[130px] animate-float-slow" />
      </div>

      {/* Decorative top and bottom subtle gold divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Icon Emblem */}
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-amber-500/20 to-transparent border border-amber-500/30 text-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.2)] mb-8">
          <Quote className="w-7 h-7 transform rotate-180" />
        </div>

        {/* The Bengali Emotional Quote */}
        <div className="relative my-4">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-bn font-semibold text-neutral-100 leading-relaxed sm:leading-loose tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            «“{config.quoteBengali}”»
          </blockquote>
        </div>

        {/* English Translation */}
        <div className="mt-8 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-neutral-400 font-sans italic leading-relaxed">
            “{config.quoteEnglish}”
          </p>
        </div>

        {/* Author / Reflection signature */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/40" />
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans-bn text-amber-300 tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{config.quoteAuthor || '— প্রবাস জীবনের উপলব্ধি'}</span>
          </div>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/40" />
        </div>
      </div>
    </section>
  );
};
