'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import YourMoneySection from '@/components/YourMoneySection';
import OnePlatformSection from '@/components/OnePlatformSection';
import ShopFavsSection from '@/components/ShopFavsSection';
import IndividualJourneySection from '@/components/IndividualJourneySection';
import BusinessJourneySection from '@/components/BusinessJourneySection';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';

export default function HomePage() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const [journeyMode, setJourneyMode] = useState('all'); // 'all' | 'individuals' | 'businesses'

  const handleOpenAuth = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const handleSwitchMode = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleSelectJourney = (mode) => {
    setJourneyMode(mode);
    // Smooth scroll down slightly to view content
    const targetElement = document.getElementById(
      mode === 'individuals' ? 'individual-content' : mode === 'businesses' ? 'business-content' : 'platform'
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Site Navigation Header */}
      <Navbar 
        onOpenAuth={handleOpenAuth} 
        journeyMode={journeyMode}
        onSelectJourney={handleSelectJourney}
      />

      <main id="main-content">
        {/* SECTION 01: HERO */}
        <Hero 
          onOpenAuth={handleOpenAuth}
          journeyMode={journeyMode}
          setJourneyMode={handleSelectJourney}
        />

        {/* Dynamic Journey Views for Individuals & Businesses */}
        {journeyMode === 'individuals' && (
          <IndividualJourneySection 
            onOpenAuth={handleOpenAuth}
            onSelectJourney={handleSelectJourney}
          />
        )}

        {journeyMode === 'businesses' && (
          <BusinessJourneySection 
            onOpenAuth={handleOpenAuth}
            onSelectJourney={handleSelectJourney}
          />
        )}

        {journeyMode === 'all' && (
          <>
            {/* SECTION 02: ONE PLATFORM FOR GLOBAL PAYMENTS */}
            <YourMoneySection onSelectJourney={handleSelectJourney} />

            {/* SECTION 03: INTERNATIONAL PAYMENTS & FX */}
            <OnePlatformSection />

            {/* SECTION 04: TRUST, VISIBILITY & DIGITAL EXPERIENCE (with FAQs) */}
            <ShopFavsSection 
              onOpenAuth={handleOpenAuth}
              onSelectJourney={handleSelectJourney}
            />
          </>
        )}
      </main>

      {/* SECTION 05: FOOTER */}
      <Footer />

      {/* Interactive Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={handleCloseAuth}
        onSwitchMode={handleSwitchMode}
      />
    </>
  );
}
