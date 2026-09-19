import React, { useState, useEffect } from 'react';
import { Clock, Hourglass, Calendar, Sparkles } from 'lucide-react';
import { JourneyConfig } from '../types';
import { calculateTimeElapsed, toBengaliNumber, TimeElapsed } from '../utils/formatters';

interface JourneyCounterProps {
  config: JourneyConfig;
  useBengaliDigits: boolean;
}

export const JourneyCounter: React.FC<JourneyCounterProps> = ({ config, useBengaliDigits }) => {
  const [elapsed, setElapsed] = useState<TimeElapsed>(() =>
    calculateTimeElapsed(config.departureIsoDate)
  );

  useEffect(() => {
    // Initial calculate
    setElapsed(calculateTimeElapsed(config.departureIsoDate));

    // Update every second
    const interval = setInterval(() => {
      setElapsed(calculateTimeElapsed(config.departureIsoDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [config.departureIsoDate]);

  const formatNum = (n: number) => {
    const pad = n < 10 ? `0${n}` : `${n}`;
    return useBengaliDigits ? toBengaliNumber(pad) : pad;
  };

  const counterUnits = [
    {
      id: 'years',
      labelBn: 'বছর',
      labelEn: 'Years',
      value: formatNum(elapsed.years),
      subtext: 'স্মৃতিময় বছর',
    },
    {
      id: 'months',
      labelBn: 'মাস',
      labelEn: 'Months',
      value: formatNum(elapsed.months),
      subtext: 'ঋতু পরিবর্তনের মাস',
    },
    {
      id: 'days',
      labelBn: 'দিন',
      labelEn: 'Days',
      value: formatNum(elapsed.days),
      subtext: 'অপেক্ষার দিন',
    },
    {
      id: 'hours',
      labelBn: 'ঘণ্টা',
      labelEn: 'Hours',
      value: formatNum(elapsed.hours),
      subtext: 'শ্রমে ঘেরা প্রহর',
    },
    {
      id: 'minutes',
      labelBn: 'মিনিট',
      labelEn: 'Minutes',
      value: formatNum(elapsed.minutes),
      subtext: 'স্মৃতির চারণা',
    },
    {
      id: 'seconds',
      labelBn: 'সেকেন্ড',
      labelEn: 'Seconds',
      value: formatNum(elapsed.seconds),
      isLive: true,
      subtext: 'প্রতিটি স্পন্দন',
    },
  ];

  return (
    <section id="counter" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1126] via-[#070d1e] to-[#050811] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-sans-bn mb-4">
            <Hourglass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>লাইভ সময় গণনা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-bn text-neutral-100 mb-3 tracking-tight">
            বাড়ি ছাড়ার পর কেটে গেছে…
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-sans-bn leading-relaxed">
            {config.departureDateBangla} থেকে শুরু করে আজ এই মুহূর্ত পর্যন্ত প্রতিটি সেকেন্ড দূরে থাকার এক একটি দীর্ঘশ্বাস।
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {counterUnits.map((unit) => (
            <div
              key={unit.id}
              className="relative group p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center text-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.12)]"
            >
              {unit.isLive && (
                <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
              )}

              {/* Number Value */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-amber-200/90 tracking-tight my-1">
                {unit.value}
              </div>

              {/* Label in Bengali & English */}
              <div className="flex flex-col items-center mt-1">
                <span className="text-sm sm:text-base font-semibold font-sans-bn text-amber-300">
                  {unit.labelBn}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-300 uppercase tracking-wider">
                  {unit.labelEn}
                </span>
              </div>

              {/* Subtle poetic note */}
              <div className="mt-2 text-[10px] text-neutral-300 font-sans-bn hidden sm:block">
                {unit.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Summary Ribbon */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/20 via-neutral-900/40 to-amber-950/20 border border-amber-500/20 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-sans-bn">যাত্রার সূচনা মুহূর্ত:</p>
              <p className="text-sm sm:text-base font-medium text-neutral-200 font-sans-bn">
                {config.departureDateBangla} ({config.departureDate}) — {config.fromCityBangla} থেকে {config.toCityBangla}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-amber-300 font-mono text-xs sm:text-sm">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>
              মোট প্রায়{' '}
              <strong className="text-amber-200 font-bold">
                {useBengaliDigits ? toBengaliNumber(elapsed.totalDays) : elapsed.totalDays}
              </strong>{' '}
              দিন প্রবাসে
            </span>
          </div>
        </div>

        {/* Poetic reminder */}
        <div className="text-center mt-6 text-xs sm:text-sm text-neutral-400 font-sans-bn flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400/60" />
          <span>দিন যায়, মাস পেরিয়ে বছর আসে— কিন্তু বাড়ির মাটির টান একবিন্দুও মলিন হয় না।</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400/60" />
        </div>
      </div>
    </section>
  );
};
