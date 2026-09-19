import React from 'react';
import { Home, Users, MapPin, Heart, Building2, Briefcase, Globe, Target, Sparkles, ArrowRight } from 'lucide-react';
import { ThenNowData } from '../types';

interface ThenNowProps {
  data: ThenNowData;
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return <Home className="w-5 h-5 text-emerald-300" />;
    case 'Users':
      return <Users className="w-5 h-5 text-amber-300" />;
    case 'MapPin':
      return <MapPin className="w-5 h-5 text-emerald-400" />;
    case 'Heart':
      return <Heart className="w-5 h-5 text-rose-400" />;
    case 'Building2':
      return <Building2 className="w-5 h-5 text-sky-400" />;
    case 'Briefcase':
      return <Briefcase className="w-5 h-5 text-amber-400" />;
    case 'Globe':
      return <Globe className="w-5 h-5 text-indigo-300" />;
    case 'Target':
      return <Target className="w-5 h-5 text-emerald-300" />;
    default:
      return <Sparkles className="w-5 h-5 text-amber-300" />;
  }
};

export const ThenNow: React.FC<ThenNowProps> = ({ data }) => {
  return (
    <section id="then-now" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#080f22] to-[#050811] -z-10" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-emerald-700/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-sans-bn mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>জীবনের দুই মেরু</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-bn text-neutral-100 mb-4 tracking-tight">
            তখন ও এখন
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-sans-bn leading-relaxed">
            একই মানুষ, কিন্তু দুই ভিন্ন জীবনের গল্প। একটিতে ফেলে আসা শৈশব ও নির্ভরতা, অন্যটিতে কঠিন বাস্তব ও নতুন স্বপ্নের সংগ্রাম।
          </p>
        </div>

        {/* Side-by-side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Central connecting badge on desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#050811] border-2 border-amber-500/40 items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* CARD 1: তখন (Then) */}
          <div className="relative group rounded-3xl bg-gradient-to-b from-emerald-950/20 via-[#060c18] to-[#040914] border border-emerald-500/20 hover:border-emerald-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
            {/* Header Tag */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  ফেলে আসা দিনগুলি
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-serif-bn text-neutral-100 mt-1">
                  {data.thenTitle}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300 text-xl font-bold font-serif-bn">
                🇧🇩
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans-bn italic mb-6">
              {data.thenSubtitle}
            </p>

            {/* Item List */}
            <div className="space-y-4">
              {data.thenItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-sans-bn text-neutral-200">
                      {item.text}
                    </h4>
                    {item.detail && (
                      <p className="text-xs sm:text-sm text-neutral-400 font-sans-bn mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Card Note */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-center">
              <span className="text-xs text-emerald-400/70 font-sans-bn">
                “যেখানে আমার অস্তিত্বের মূল প্রোথিত ছিল”
              </span>
            </div>
          </div>

          {/* CARD 2: এখন (Now) */}
          <div className="relative group rounded-3xl bg-gradient-to-b from-sky-950/20 via-[#060c18] to-[#040914] border border-sky-500/20 hover:border-amber-500/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
            {/* Header Tag */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  বর্তমান বাস্তব
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-serif-bn text-neutral-100 mt-1">
                  {data.nowTitle}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 text-xl font-bold font-serif-bn">
                🇸🇦
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans-bn italic mb-6">
              {data.nowSubtitle}
            </p>

            {/* Item List */}
            <div className="space-y-4">
              {data.nowItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-950/40 border border-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    {renderIcon(item.icon)}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-sans-bn text-neutral-200">
                      {item.text}
                    </h4>
                    {item.detail && (
                      <p className="text-xs sm:text-sm text-neutral-400 font-sans-bn mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Card Note */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-center">
              <span className="text-xs text-sky-400/70 font-sans-bn">
                “যেখানে ভবিষ্যতের আলো জ্বালানোর সংগ্রাম চলছে”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
