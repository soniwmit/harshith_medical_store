/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Apply dark mode class to html document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // SEO Props mapping per page
  const seoDetails: Record<PageId, { title: string; description: string; canonicalUrl: string }> = {
    home: {
      title: 'Harshith Medical Store | Trusted Pharmacy in Kinjar - Kurtha Rd, Motipur, Bihar',
      description: 'Harshith Medical Store is Motipur’s leading pharmacy for 100% genuine medicines, prescription uploads, baby care, surgical supplies & WhatsApp orders near Union Bank.',
      canonicalUrl: 'https://harshithmedicalstore.com/'
    },
    about: {
      title: 'About Us | Harshith Medical Store Motipur',
      description: 'Learn about Harshith Medical Store in Motipur, Bihar. Serving families with genuine WHO-GMP medicines, certified staff, and cold-chain insulin care.',
      canonicalUrl: 'https://harshithmedicalstore.com/about'
    },
    services: {
      title: 'Healthcare Services & Products | Harshith Medical Store',
      description: 'Explore prescription medicines, OTC drugs, baby care, diabetic glucometers, BP monitors, and surgical equipment at Harshith Medical Store.',
      canonicalUrl: 'https://harshithmedicalstore.com/services'
    },
    gallery: {
      title: 'Store Gallery | Harshith Medical Store Motipur',
      description: 'Photos of Harshith Medical Store premises, medicine shelves, medical devices, and store front at Kinjar - Kurtha Rd, near Union Bank.',
      canonicalUrl: 'https://harshithmedicalstore.com/gallery'
    },
    testimonials: {
      title: 'Customer Reviews & Ratings | Harshith Medical Store',
      description: 'Read reviews from local Motipur & Kurtha residents trusting Harshith Medical Store for authentic medicines and fast WhatsApp delivery.',
      canonicalUrl: 'https://harshithmedicalstore.com/testimonials'
    },
    faq: {
      title: 'Frequently Asked Questions | Harshith Medical Store',
      description: 'Find answers to common pharmacy questions about medicine availability, store hours, WhatsApp prescription uploads & local delivery.',
      canonicalUrl: 'https://harshithmedicalstore.com/faq'
    },
    contact: {
      title: 'Contact Us & Location Map | Harshith Medical Store',
      description: 'Contact Harshith Medical Store at Nand Kishor House, 18, Kinjar - Kurtha Rd, near Union Bank, Motipur, Bihar 804423. Call 09931616480.',
      canonicalUrl: 'https://harshithmedicalstore.com/contact'
    },
    order: {
      title: 'WhatsApp Medicine Order & Prescription Upload | Harshith Medical Store',
      description: 'Order genuine medicines online or upload your doctor’s prescription directly to Harshith Medical Store on WhatsApp.',
      canonicalUrl: 'https://harshithmedicalstore.com/order'
    }
  };

  const currentSeo = seoDetails[currentPage] || seoDetails.home;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors selection:bg-emerald-500 selection:text-white">
      
      {/* SEO Head Injection */}
      <SEOHead
        title={currentSeo.title}
        description={currentSeo.description}
        canonicalUrl={currentSeo.canonicalUrl}
      />

      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenOrderModal={() => handleOpenOrderModal('')}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page View Router */}
      <main className="flex-1">
        {(currentPage === 'home' || currentPage === 'testimonials' || currentPage === 'faq') && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearch={() => setIsSearchModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenOrderModal={() => handleOpenOrderModal('')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'order' && (
          <div className="py-12 px-4 max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Click the button below to launch our easy prescription & medicine order form.
            </p>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold shadow-xl hover:bg-emerald-700"
            >
              Open Order Form
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOrderModal={() => handleOpenOrderModal('')}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenOrderModal={() => handleOpenOrderModal('')}
      />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectMedicineToOrder={(med) => handleOpenOrderModal(med)}
      />

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
