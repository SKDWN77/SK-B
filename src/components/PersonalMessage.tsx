import React from 'react';
import { Feather, Heart, Sparkles, MapPin } from 'lucide-react';
import { JourneyConfig } from '../types';

interface PersonalMessageProps {
  config: JourneyConfig;
  onOpenEditor: () => void;
}

export const PersonalMessage: React.FC<PersonalMessageProps> = ({ config, onOpenEditor }) => {
  return (
    <section id="message" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#070e20] to-[#050811] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-sans-bn mb-3">
            <Feather className="w-3.5 h-3.5 text-amber-400" />
            <span>অন্তর থেকে লেখা চিঠি</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-bn text-neutral-100 tracking-tight">
            {config.personalMessageTitle}
          </h2>
        </div>

        {/* Letter Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Subtle Vintage Watermark / Decorative Corner */}
          <div className="absolute top-6 right-6 text-amber-400/20 pointer-events-none">
            <Feather className="w-12 h-12" />
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-xl text-neutral-200 font-serif-bn leading-relaxed text-left sm:text-justify font-light">
            {config.personalMessageParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  paragraph.includes('১১')
                    ? 'text-amber-200/95 font-semibold text-lg sm:text-2xl border-l-2 border-amber-400/50 pl-4 py-1'
                    : ''
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature & Date */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-neutral-400 font-sans-bn">ইতি—</p>
              <h4 className="text-xl sm:text-2xl font-bold font-serif-bn text-amber-300 tracking-wide">
                {config.nameBangla}
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-0.5">
                {config.name}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-neutral-400 font-sans-bn space-y-1">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{config.toCityBangla}, {config.toCountryBangla}</span>
              </span>
              <span className="font-mono text-neutral-400">
                স্মৃতির তারিখ: {config.departureDateBangla}
              </span>
            </div>
          </div>

          {/* Subtle Edit Trigger */}
          <div className="mt-6 text-center">
            <button
              onClick={onOpenEditor}
              className="text-xs text-neutral-400 hover:text-amber-300 font-sans-bn inline-flex items-center gap-1 transition-colors py-1 px-3 rounded-full hover:bg-white/5"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>এই চিঠি বা তথ্য নিজের মতো সম্পাদনা করতে চান? এখানে চাপুন</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
