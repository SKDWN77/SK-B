import React from 'react';
import { Heart, Compass, ArrowUp } from 'lucide-react';
import { JourneyConfig } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  config: JourneyConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050b] border-t border-white/[0.08] py-12 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Story tag */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <Logo className="w-8 h-8" withGlow={true} />
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-100 text-base font-sans tracking-wide">
                  SK Live journey
                </span>
                <span className="text-xs text-neutral-400 font-sans">•</span>
                <span className="text-xs text-amber-300 font-serif-bn">
                  {config.departureDateBangla}
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 font-sans-bn">
              একটি জীবনের গল্প — ফেলে আসা ভিটেমাটি থেকে নতুন স্বপ্নের দেশে
            </p>
          </div>

          {/* Main Footer Requirements */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-1.5 text-sm text-neutral-200 font-sans">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/80 animate-pulse" />
              <span>for</span>
              <span className="font-semibold text-amber-300 font-serif-bn">{config.nameBangla}</span>
            </div>

            <p className="text-xs text-neutral-300 font-sans mt-1.5 flex items-center gap-2">
              <span>My Journey — {config.fromCountry} {config.fromFlag} → {config.toCountry} {config.toFlag}</span>
            </p>

            <p className="text-[11px] text-neutral-400 font-mono mt-1">
              © {currentYear} • All memories preserved with love
            </p>
          </div>
        </div>

        {/* Quick bottom divider and return to top */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between text-xs text-neutral-400 font-sans-bn">
          <span>{config.departureDateBangla} এর চিরসবুজ স্মৃতি</span>
          <button
            onClick={scrollToTop}
            className="hover:text-amber-300 transition-colors flex items-center gap-1 text-neutral-400 hover:underline"
          >
            <span>উপরে চলুন</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
