import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Edit3, Compass, Menu, X } from 'lucide-react';
import { JourneyConfig } from '../types';
import { ambientSound } from '../utils/sound';
import { Logo } from './Logo';

interface NavbarProps {
  config: JourneyConfig;
  useBengaliDigits: boolean;
  onToggleDigits: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  useBengaliDigits,
  onToggleDigits,
  onOpenEditor,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const playing = ambientSound.toggle();
    setIsPlayingAudio(playing);
  };

  const navLinks = [
    { label: 'কাউন্টার', href: '#counter' },
    { label: 'যাত্রার গল্প', href: '#timeline' },
    { label: 'স্মৃতিমালা', href: '#memories' },
    { label: 'পথরেখা', href: '#map' },
    { label: 'তখন ও এখন', href: '#then-now' },
    { label: 'কিছু কথা', href: '#message' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050811]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-gradient-to-b from-[#050811]/90 via-[#050811]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Emblem */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform">
            <Logo className="w-10 h-10" withGlow={true} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-base font-bold text-neutral-100 tracking-wide font-sans group-hover:text-amber-300 transition-colors flex items-center gap-2">
              <span>SK Live journey</span>
              <span className="px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 text-[10px] font-mono tracking-normal uppercase">
                Live
              </span>
            </span>
            <span className="text-[11px] text-neutral-400 font-sans-bn tracking-normal hidden sm:block">
              {config.nameBangla} • {config.departureDateBangla}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm text-neutral-300 font-sans-bn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.05] transition-all text-[13px] lg:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleAudio}
            title={isPlayingAudio ? 'শব্দ বন্ধ করুন' : 'শান্ত আবহ সঙ্গীত চালু করুন'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-sans border transition-all ${
              isPlayingAudio
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'bg-white/[0.04] border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline font-sans-bn text-[12px]">শব্দ চালু</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 opacity-60" />
                <span className="hidden sm:inline font-sans-bn text-[12px]">আবহ সঙ্গীত</span>
              </>
            )}
          </button>

          {/* Numeral display toggle */}
          <button
            onClick={onToggleDigits}
            title="সংখ্যা রূপান্তর (বাংলা / ইংরেজি)"
            className="px-2.5 py-1.5 rounded-full text-xs font-sans border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white transition-colors"
          >
            <span className="font-semibold text-amber-300/90 font-mono">
              {useBengaliDigits ? '১২৩' : '123'}
            </span>
          </button>

          {/* Edit / Customize Journey Button */}
          <button
            onClick={onOpenEditor}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans-bn bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400 text-amber-300 transition-all shadow-[0_0_12px_rgba(245,158,11,0.1)]"
          >
            <Edit3 className="w-3 h-3 text-amber-400" />
            <span>গল্প সাজান</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050811]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2">
          <div className="grid grid-cols-2 gap-2 text-sm font-sans-bn pb-3 border-b border-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-neutral-200 flex items-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenEditor();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-sans-bn"
            >
              <Edit3 className="w-4 h-4" />
              <span>নিজের তথ্য ও তারিখ পরিবর্তন করুন</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
