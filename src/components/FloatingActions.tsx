import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 font-sans">
      
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center hover:bg-emerald-600 transition-all duration-200 transform hover:scale-110"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-xl border border-slate-700 transition-all transform hover:scale-105"
        title="Call Harshith Medical Store"
      >
        <Phone className="w-5 h-5 text-emerald-400 animate-pulse" />
        <span className="text-xs font-bold hidden sm:inline">Call Store</span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenOrderModal}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 transition-all transform hover:scale-105"
        title="Order Medicines on WhatsApp"
      >
        {/* Pulse Ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>

        <MessageSquare className="w-6 h-6 fill-white stroke-none" />
        <div className="text-left hidden sm:block">
          <p className="text-[10px] uppercase tracking-wider text-emerald-100 font-semibold leading-tight">
            WhatsApp Order
          </p>
          <p className="text-xs font-extrabold leading-tight">Click to Order</p>
        </div>
      </button>

    </div>
  );
};
