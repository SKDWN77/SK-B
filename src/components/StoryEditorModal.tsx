import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sparkles } from 'lucide-react';
import { JourneyConfig } from '../types';
import { INITIAL_JOURNEY_CONFIG } from '../data/journey';
import { toBengaliNumber } from '../utils/formatters';

interface StoryEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: JourneyConfig;
  onSave: (updated: JourneyConfig) => void;
}

export const StoryEditorModal: React.FC<StoryEditorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<JourneyConfig>(config);
  const [justSaved, setJustSaved] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof JourneyConfig, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateChange = (isoValue: string) => {
    try {
      const d = new Date(isoValue);
      if (!isNaN(d.getTime())) {
        const day = d.getDate();
        const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const monthNamesBn = [
          'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
          'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
        ];
        const monthEn = monthNames[d.getMonth()];
        const monthBn = monthNamesBn[d.getMonth()];
        const yearEn = d.getFullYear();
        const yearBn = toBengaliNumber(yearEn);
        const dayBn = toBengaliNumber(day);

        setFormData((prev) => ({
          ...prev,
          departureIsoDate: isoValue,
          departureDate: `${day} ${monthEn} ${yearEn}`,
          departureDateBangla: `${dayBn} ${monthBn} ${yearBn}`,
          departureDayNumber: `${day}`,
          departureDayNumberBangla: dayBn,
        }));
      }
    } catch {
      // ignore
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setJustSaved(true);
    setTimeout(() => {
      setJustSaved(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    setFormData(INITIAL_JOURNEY_CONFIG);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl my-8 rounded-3xl bg-[#080e1c] border border-white/15 p-6 sm:p-8 shadow-2xl text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif-bn text-neutral-100">
                গল্পের তথ্য পরিবর্তন করুন
              </h3>
              <p className="text-xs text-neutral-400 font-sans">
                Customize the name, dates, locations, and personal message in real time
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-5 text-sm font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
                নাম (বাংলা)
              </label>
              <input
                type="text"
                value={formData.nameBangla}
                onChange={(e) => handleChange('nameBangla', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="যেমন: শাকিল"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Name (English)
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="e.g. Shakil"
                required
              />
            </div>
          </div>

          {/* Departure Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
                বাড়ি ছাড়ার তারিখ (Date Picker)
              </label>
              <input
                type="datetime-local"
                value={formData.departureIsoDate.substring(0, 16)}
                onChange={(e) => handleDateChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors font-mono text-xs"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
                তারিখের প্রদর্শন লেখা (বাংলা)
              </label>
              <input
                type="text"
                value={formData.departureDateBangla}
                onChange={(e) => handleChange('departureDateBangla', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors"
                placeholder="১১ এপ্রিল ২০২৪"
              />
            </div>
          </div>

          {/* From Country & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
                উৎপত্তিস্থল (From City, Country)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.fromCityBangla}
                  onChange={(e) => handleChange('fromCityBangla', e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
                  placeholder="ঢাকা"
                />
                <input
                  type="text"
                  value={formData.fromCountryBangla}
                  onChange={(e) => handleChange('fromCountryBangla', e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
                  placeholder="বাংলাদেশ"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
                গন্তব্য (To City, Country)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.toCityBangla}
                  onChange={(e) => handleChange('toCityBangla', e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
                  placeholder="রিয়াদ"
                />
                <input
                  type="text"
                  value={formData.toCountryBangla}
                  onChange={(e) => handleChange('toCountryBangla', e.target.value)}
                  className="w-1/2 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 text-xs"
                  placeholder="সৌদি আরব"
                />
              </div>
            </div>
          </div>

          {/* Hero Story Text */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
              হিরো সেকশনের মূল অনুভূতি বাক্য
            </label>
            <textarea
              rows={2}
              value={formData.heroStoryText}
              onChange={(e) => handleChange('heroStoryText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors font-sans-bn text-xs leading-relaxed"
            />
          </div>

          {/* Personal Message Paragraph 1 */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5 font-sans-bn">
              নিজের কাছে কিছু কথা (চিঠির প্রথম অংশ)
            </label>
            <textarea
              rows={2}
              value={formData.personalMessageParagraphs[0]}
              onChange={(e) => {
                const updated = [...formData.personalMessageParagraphs];
                updated[0] = e.target.value;
                setFormData((p) => ({ ...p, personalMessageParagraphs: updated }));
              }}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-amber-400 transition-colors font-sans-bn text-xs leading-relaxed"
            />
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-neutral-300 text-xs flex items-center gap-1.5 transition-colors font-sans-bn"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>পূর্বাবস্থায় ফেরান (Reset)</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white text-xs transition-colors"
              >
                বাতিল
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)] font-sans-bn"
              >
                {justSaved ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>সংরক্ষিত হয়েছে!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>পরিবর্তন সংরক্ষণ করুন</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
