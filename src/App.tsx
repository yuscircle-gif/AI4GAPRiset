/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionSection } from './components/SolutionSection';
import { WorkflowSection } from './components/WorkflowSection';
import { InteractiveGapSimulator } from './components/InteractiveGapSimulator';
import { BonusStackSection } from './components/BonusStackSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { ImagePreviewModal } from './components/ImagePreviewModal';
import { BRAND_INFO, trackInitiateCheckout } from './data/landingData';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);

  const handleOpenCheckout = () => {
    // 1. Fire Meta Pixel event (SejutaPXID - 1081809303168090)
    trackInitiateCheckout();
    
    // 2. Open Lynk.id checkout page in a new window/tab
    window.open(BRAND_INFO.checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleOpenImagePreview = () => {
    setIsImagePreviewOpen(true);
  };

  const handleCloseImagePreview = () => {
    setIsImagePreviewOpen(false);
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Halo Admin BiruDaun Corp, saya ingin bertanya seputar E-Book Unlock Research Potential dan 3 Bonus Eksklusif.');
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar onClaimClick={handleOpenCheckout} />

      {/* 2. NAVBAR (Top Bar Contract: 3-Zone Exhaustive) */}
      <Navbar onCtaClick={handleOpenCheckout} />

      {/* 3. HERO SECTION */}
      <HeroSection 
        onCtaClick={handleOpenCheckout} 
        onImageClick={handleOpenImagePreview} 
      />

      {/* 4. PAIN POINT & AGITATION SECTION */}
      <PainPointsSection />

      {/* 5. THE SOLUTION / UNVEILING SECTION */}
      <SolutionSection />

      {/* 6. STEP-BY-STEP WORKFLOW PREVIEW */}
      <WorkflowSection />

      {/* INTERACTIVE GAP SIMULATOR (Tangible Proof & Engagement) */}
      <InteractiveGapSimulator onUnlockClick={handleOpenCheckout} />

      {/* 7. VALUE STACK & BONUS SECTION (Bagian Kritis Penentu Konversi) */}
      <BonusStackSection onClaimClick={handleOpenCheckout} />

      {/* 8. PRICING & OFFER BOX SECTION */}
      <PricingSection onOrderClick={handleOpenCheckout} />

      {/* 9. RISK REVERSAL / FAQ & TESTIMONIALS SECTION */}
      <FaqSection />

      {/* 10. FINAL URGENCY & CLOSING CTA */}
      <FinalCtaSection 
        onCtaClick={handleOpenCheckout} 
        onWhatsAppClick={handleWhatsAppChat} 
      />

      {/* 11. FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
      />

      <ImagePreviewModal 
        isOpen={isImagePreviewOpen} 
        onClose={handleCloseImagePreview}
        onOrderClick={handleOpenCheckout}
      />
    </div>
  );
}
