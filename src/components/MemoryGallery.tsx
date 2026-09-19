import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, MapPin, Calendar, ZoomIn } from 'lucide-react';
import { MemoryPhoto } from '../types';
import { MEMORY_CATEGORIES } from '../data/journey';

interface MemoryGalleryProps {
  photos: MemoryPhoto[];
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ photos }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const activePhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section id="memories" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#091124] to-[#050811] -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-sans-bn mb-4">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>স্মৃতি গ্যালারি</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-bn text-neutral-100 mb-4 tracking-tight">
            কিছু স্মৃতি কখনো পুরোনো হয় না
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-sans-bn leading-relaxed">
            ছবিগুলো হয়তো ফ্রেমের ভেতর স্থির, কিন্তু এদের প্রতিটি পরতে লুকিয়ে আছে অশ্রু, মায়া, আর নিজের মানুষগুলোর না-বলা ভালোবাসা।
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {MEMORY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSelectedPhotoIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans-bn transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-white/[0.03] border border-white/[0.08] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-500 flex flex-col shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-sans-bn bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                </div>
              </div>

              {/* Caption & Details Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#080e1e]/60 to-[#050811]/90">
                <div>
                  <h3 className="text-lg font-bold font-serif-bn text-neutral-100 group-hover:text-amber-200 transition-colors mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans-bn leading-relaxed line-clamp-2">
                    {photo.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 font-sans-bn">
                  {photo.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400/80" />
                      {photo.location}
                    </span>
                  )}
                  {photo.date && (
                    <span className="flex items-center gap-1 font-sans">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      {photo.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex(null);
            }}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev! > 0 ? prev! - 1 : filteredPhotos.length - 1
              );
            }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-amber-500/20 text-white hover:text-amber-300 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev! < filteredPhotos.length - 1 ? prev! + 1 : 0
              );
            }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-amber-500/20 text-white hover:text-amber-300 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#0a1122] border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 flex items-center justify-center bg-black/70 overflow-hidden max-h-[65vh]">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#080d1a] border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-sans-bn bg-amber-500/20 border border-amber-500/40 text-amber-300">
                  {activePhoto.categoryLabel}
                </span>
                {activePhoto.location && (
                  <span className="text-xs text-neutral-400 font-sans-bn flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {activePhoto.location}
                  </span>
                )}
                {activePhoto.date && (
                  <span className="text-xs text-neutral-400 font-sans">
                    • {activePhoto.date}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-bn text-neutral-100 mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-sans-bn leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
