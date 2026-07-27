import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Search,
  Menu,
  X,
  MapPin,
  Clock,
  ShieldCheck,
  Moon,
  Sun,
  FileUp,
  Cross
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenOrderModal: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenOrderModal,
  darkMode,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full font-sans sticky top-0 z-40 transition-all duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Nand Kishor House, 18, Kinjar - Kurtha Rd, near Union Bank, Motipur</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
              <span>Open Daily: 7:00 AM - 10:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 hover:text-emerald-400 font-semibold transition-colors bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700"
              title="Click to Call"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>09931616480</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 shadow-xs'
        } border-b border-slate-200/80 dark:border-slate-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Business Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0A58CA] text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              H
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-[#0A58CA] dark:group-hover:text-blue-400 transition-colors">
                  Harshith Medical Store
                </span>
                <span className="hidden sm:inline-flex items-center gap-0.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#0A8F6A]/10 text-[#0A8F6A] dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <ShieldCheck className="w-3 h-3 text-[#0A8F6A]" />
                  VERIFIED
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                Kinjar - Kurtha Rd, Motipur
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-semibold text-sm">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-full transition-all ${
                    active
                      ? 'bg-[#0A58CA]/10 text-[#0A58CA] dark:bg-blue-900/40 dark:text-blue-300 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A58CA] dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 px-3.5 py-2 rounded-full text-xs font-bold transition-colors"
              title="Search Medicines"
            >
              <Search className="w-3.5 h-3.5 text-[#0A58CA]" />
              <span>Search Meds</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-full flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A58CA]" />
              <span>09931616480</span>
            </a>

            {/* Upload Prescription / WhatsApp Order Modal Launcher */}
            <button
              onClick={onOpenOrderModal}
              className="flex items-center gap-1.5 bg-[#0A8F6A] hover:bg-teal-700 text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md shadow-teal-600/20 hover:scale-[1.02]"
            >
              <FileUp className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              title="Search Medicines"
            >
              <Search className="w-5 h-5 text-emerald-600" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2.5 px-3 rounded-lg text-sm font-medium text-left transition-colors ${
                    active
                      ? 'bg-emerald-600 text-white font-semibold'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenOrderModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-semibold text-sm shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Medicine Order</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 py-3 rounded-xl font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>Call Now: 09931616480</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
