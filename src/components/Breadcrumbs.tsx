import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../types';

interface BreadcrumbsProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate }) => {
  if (currentPage === 'home') return null;

  const pageNames: Record<PageId, string> = {
    home: 'Home',
    about: 'About Us',
    services: 'Services & Products',
    gallery: 'Store Gallery',
    testimonials: 'Customer Reviews',
    faq: 'Frequently Asked Questions',
    contact: 'Contact Us',
    order: 'WhatsApp Order Form'
  };

  return (
    <nav className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8 text-sm font-medium text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
          title="Go to Home"
        >
          <Home className="w-4 h-4 text-emerald-600" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        <span className="text-emerald-800 font-semibold">{pageNames[currentPage]}</span>
      </div>
    </nav>
  );
};
