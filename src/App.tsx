import React, { useState, useEffect } from 'react';
import { JourneyConfig } from './types';
import { INITIAL_JOURNEY_CONFIG, TIMELINE_DATA, MEMORY_PHOTOS, THEN_AND_NOW_DATA } from './data/journey';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyCounter } from './components/JourneyCounter';
import { Timeline } from './components/Timeline';
import { MemoryGallery } from './components/MemoryGallery';
import { EmotionalQuote } from './components/EmotionalQuote';
import { JourneyMap } from './components/JourneyMap';
import { ThenNow } from './components/ThenNow';
import { PersonalMessage } from './components/PersonalMessage';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { StoryEditorModal } from './components/StoryEditorModal';

export default function App() {
  const [config, setConfig] = useState<JourneyConfig>(() => {
    try {
      const saved = localStorage.getItem('shakil_journey_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_JOURNEY_CONFIG;
  });

  const [useBengaliDigits, setUseBengaliDigits] = useState<boolean>(true);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  const handleSaveConfig = (updated: JourneyConfig) => {
    setConfig(updated);
    try {
      localStorage.setItem('shakil_journey_config', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleToggleDigits = () => {
    setUseBengaliDigits((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-neutral-100 flex flex-col font-sans-bn selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar
        config={config}
        useBengaliDigits={useBengaliDigits}
        onToggleDigits={handleToggleDigits}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Hero Section */}
        <Hero config={config} useBengaliDigits={useBengaliDigits} />

        {/* Live Journey Counter */}
        <JourneyCounter config={config} useBengaliDigits={useBengaliDigits} />

        {/* Vertical Cinematic Timeline */}
        <Timeline
          items={TIMELINE_DATA}
          departureDayNumberBangla={config.departureDayNumberBangla}
        />

        {/* Filterable Photo Memory Gallery with Lightbox */}
        <MemoryGallery photos={MEMORY_PHOTOS} />

        {/* Large Emotional Quote Section */}
        <EmotionalQuote config={config} />

        {/* Visual Animated Flight Path & Journey Map */}
        <JourneyMap config={config} />

        {/* Then & Now Comparison Cards */}
        <ThenNow data={THEN_AND_NOW_DATA} />

        {/* Personal Message / Letter Section */}
        <PersonalMessage
          config={config}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* Cinematic Final / Ending Section */}
        <FinalSection config={config} />
      </main>

      {/* Footer */}
      <Footer config={config} />

      {/* Story Editor Dialog */}
      <StoryEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
