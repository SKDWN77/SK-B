import React from 'react';
import { Home, Heart, PlaneTakeoff, Compass, Moon, Clock, MapPin, Sparkles } from 'lucide-react';
import { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
  departureDayNumberBangla: string;
}

const getTimelineIcon = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return <Home className="w-5 h-5 text-amber-300" />;
    case 'Heart':
      return <Heart className="w-5 h-5 text-rose-400" />;
    case 'PlaneTakeoff':
      return <PlaneTakeoff className="w-5 h-5 text-sky-400" />;
    case 'Compass':
      return <Compass className="w-5 h-5 text-amber-400" />;
    case 'Moon':
      return <Moon className="w-5 h-5 text-indigo-300" />;
    case 'Clock':
      return <Clock className="w-5 h-5 text-emerald-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-amber-300" />;
  }
};

export const Timeline: React.FC<TimelineProps> = ({ items, departureDayNumberBangla }) => {
  return (
    <section id="timeline" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#080d1e] to-[#050811] -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-sans-bn mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>স্মৃতির পদচিহ্ন</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-bn text-neutral-100 mb-4 tracking-tight">
            সেই যাত্রার গল্প
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-sans-bn max-w-xl mx-auto leading-relaxed">
            স্মৃতির পাতায় আঁকা এক অবিস্মরণীয় দিন— {departureDayNumberBangla} তারিখ থেকে শুরু হয়ে আজকের এই বর্তমান পর্যন্ত।
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Vertical central glowing line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500/40 via-amber-400/20 to-amber-500/50 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#080d1e] border-2 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getTimelineIcon(item.icon)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-14 sm:ml-0 w-[calc(100%-3.5rem)] sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:pr-4 text-left sm:text-right' : 'sm:pl-4 text-left'
                    }`}
                  >
                    <div className="group p-5 sm:p-7 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-amber-500/30 backdrop-blur-md transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                      {/* Step & Date Tag */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'sm:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                          ধাপ {item.step}
                        </span>
                        {item.dateBadge && (
                          <span className="text-xs text-neutral-400 font-sans-bn bg-white/[0.03] px-2.5 py-0.5 rounded-full border border-white/5">
                            {item.dateBadge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-100 font-serif-bn mb-2 group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>

                      {/* Location & Time tag if present */}
                      {(item.location || item.timeOfDay) && (
                        <div
                          className={`flex items-center gap-2 text-xs text-amber-400/80 mb-3 font-sans-bn ${
                            isEven ? 'sm:justify-end' : 'justify-start'
                          }`}
                        >
                          {item.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                          )}
                          {item.timeOfDay && (
                            <span className="text-neutral-500">• {item.timeOfDay}</span>
                          )}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm sm:text-base text-neutral-300 font-sans-bn leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Personal Reflection Quote */}
                      {item.reflection && (
                        <div className="mt-4 pt-3 border-t border-white/[0.06]">
                          <p className="text-xs sm:text-sm text-neutral-400 font-sans-bn italic">
                            “{item.reflection}”
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
