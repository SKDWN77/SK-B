import React, { useState } from 'react';
import { Plane, Compass, Navigation, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { JourneyConfig } from '../types';

interface JourneyMapProps {
  config: JourneyConfig;
}

export const JourneyMap: React.FC<JourneyMapProps> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'flight' | 'details'>('flight');

  return (
    <section id="map" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#070e22] to-[#050811] -z-10" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-sans-bn mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>আকাশ পথের পথরেখা</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-bn text-neutral-100 mb-4 tracking-tight">
            দেশান্তর — বাংলাদেশ থেকে সৌদি আরব
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-sans-bn leading-relaxed">
            কয়েক হাজার মাইলের আকাশ পথ। যে পথ দিয়ে চোখের পলকে পেছনের চেনা প্রিয় দেশকে বিদায় জানিয়ে পা রাখা হয়েছিল সম্পূর্ণ অচেনা বালুকাময় প্রান্তরে।
          </p>
        </div>

        {/* Cinematic Animated Flight Route Canvas Card */}
        <div className="relative rounded-3xl bg-[#060c1c]/90 border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle Radar Background Grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* SVG Flight Route Graphic */}
          <div className="relative w-full aspect-[16/9] max-h-[420px] flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 900 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Radar Rings centered near the route */}
              <circle cx="450" cy="200" r="180" stroke="rgba(245, 158, 11, 0.05)" strokeWidth="1" />
              <circle cx="450" cy="200" r="120" stroke="rgba(245, 158, 11, 0.08)" strokeWidth="1" />
              <circle cx="450" cy="200" r="60" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1" />

              {/* Geographic Contour Lines (Stylized abstract coastlines) */}
              <path
                d="M 100 280 Q 200 240 260 320 T 320 380"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 600 120 Q 680 180 720 280 T 800 350"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Defs for gradients & markers */}
              <defs>
                <linearGradient id="flightGrad" x1="180" y1="280" x2="720" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Curved Flight Path Trajectory */}
              {/* Origin (Bangladesh/Dhaka) at right ~720,240 ; Destination (Saudi/Riyadh) at left ~180,180 (orienting east-to-west) */}
              {/* Or standard left-to-right representation for timeline flow: BD on left (160,260) -> Saudi on right (740,160) */}
              <path
                id="flightPathArc"
                d="M 160 260 C 300 80, 600 60, 740 160"
                stroke="url(#flightGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow)"
              />

              {/* Animated dashed flight line on top */}
              <path
                d="M 160 260 C 300 80, 600 60, 740 160"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 12"
                fill="none"
                className="flight-path-animated"
                opacity="0.85"
              />

              {/* Waypoint altitude marker in middle */}
              <circle cx="450" cy="115" r="4" fill="#fbbf24" />
              <text x="450" y="95" textAnchor="middle" fill="#fde68a" fontSize="11" fontFamily="monospace" letterSpacing="1">
                FLIGHT LEVEL 350 • 35,000 FT
              </text>

              {/* Origin Node: Bangladesh 🇧🇩 (left) */}
              <g transform="translate(160, 260)">
                <circle r="22" fill="#10b981" opacity="0.15" className="animate-ping" />
                <circle r="14" fill="#042f2e" stroke="#10b981" strokeWidth="2.5" />
                <circle r="5" fill="#34d399" />
              </g>

              {/* Destination Node: Saudi Arabia 🇸🇦 (right) */}
              <g transform="translate(740, 160)">
                <circle r="22" fill="#38bdf8" opacity="0.15" className="animate-ping" style={{ animationDelay: '1s' }} />
                <circle r="14" fill="#0c2d48" stroke="#38bdf8" strokeWidth="2.5" />
                <circle r="5" fill="#bae6fd" />
              </g>
            </svg>

            {/* Flying Airplane Element with smooth keyframe animation */}
            <div
              className="absolute pointer-events-none transition-all"
              style={{
                top: '25%',
                left: '48%',
                transform: 'translate(-50%, -50%) rotate(12deg)',
              }}
            >
              <div className="relative p-2.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-float-slow">
                <Plane className="w-6 h-6 transform rotate-45 text-amber-200" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              </div>
            </div>

            {/* Node Card Overlay: From Bangladesh */}
            <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-8 p-3 sm:p-4 rounded-2xl bg-black/75 border border-emerald-500/30 backdrop-blur-md shadow-xl text-left max-w-[190px] sm:max-w-[220px]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                From: {config.fromCountry}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl">{config.fromFlag}</span>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-neutral-100 font-sans-bn leading-tight">
                    {config.fromCountryBangla} ({config.fromCityBangla})
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono">
                    DAC • ২৪.৮° N, ৯০.৪° E
                  </p>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-emerald-300/80 font-sans-bn">
                স্মৃতির চেনা নীড় ও জন্মমাটি
              </div>
            </div>

            {/* Node Card Overlay: To Saudi Arabia */}
            <div className="absolute top-4 sm:top-8 right-2 sm:right-8 p-3 sm:p-4 rounded-2xl bg-black/75 border border-sky-500/30 backdrop-blur-md shadow-xl text-left max-w-[190px] sm:max-w-[220px]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 block mb-1">
                To: {config.toCountry}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl">{config.toFlag}</span>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-neutral-100 font-sans-bn leading-tight">
                    {config.toCountryBangla} ({config.toCityBangla})
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono">
                    RUH • ২৪.৭° N, ৪৬.৭° E
                  </p>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-sky-300/80 font-sans-bn">
                নতুন অধ্যায় ও কর্মসংস্থান
              </div>
            </div>
          </div>

          {/* Stats & Flight Information Bar */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider block">
                Flight Distance
              </span>
              <span className="text-base sm:text-lg font-bold text-amber-300 font-mono">
                ~4,850 km
              </span>
              <span className="text-[11px] text-neutral-400 font-sans-bn block">
                (প্রায় ৩,০১৫ মাইল)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider block">
                Approx Flight Time
              </span>
              <span className="text-base sm:text-lg font-bold text-neutral-200 font-sans-bn">
                ৫ ঘণ্টা ৩০ মিনিট
              </span>
              <span className="text-[11px] text-neutral-400 font-sans-bn block">
                নন-স্টপ আকাশ পথ
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider block">
                Time Zone Shift
              </span>
              <span className="text-base sm:text-lg font-bold text-neutral-200 font-mono">
                -3 Hours
              </span>
              <span className="text-[11px] text-neutral-400 font-sans-bn block">
                (সৌদি আরবে ৩ ঘণ্টা পিছিয়ে)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[11px] text-neutral-400 font-mono uppercase tracking-wider block">
                Flight Altitude
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                35,000 ft
              </span>
              <span className="text-[11px] text-neutral-400 font-sans-bn block">
                মেঘের ওপরের নিঃসঙ্গতা
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
