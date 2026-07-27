import React from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  ExternalLink,
  Cross
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/pharmacyData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: () => void;
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenOrderModal,
  onOpenLegalModal,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          
          {/* Column 1: Business Branding */}
          <div className="bento-card bg-slate-900/90 text-slate-300 border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0A8F6A] text-white flex items-center justify-center shadow-lg shadow-teal-900/40">
                <Cross className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight">
                  Harshith Medical Store
                </h3>
                <p className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Pharmacy | Motipur, Bihar
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Serving Motipur, Kurtha, and Kinjar with 100% genuine medicines, baby care products, and health equipment.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A58CA] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors font-extrabold">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="bento-card bg-slate-900/90 text-slate-300 border-slate-800 space-y-4">
            <div className="pill-bento">NAVIGATION</div>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Store' },
                { id: 'services', label: 'Healthcare Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'faq', label: 'Pharmacy FAQs' },
                { id: 'contact', label: 'Contact & Location' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-slate-400 hover:translate-x-1 duration-150 transform font-medium"
                  >
                    <span className="text-[#0A8F6A] text-xs">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div className="bento-card bg-slate-900/90 text-slate-300 border-slate-800 space-y-4">
            <div className="pill-bento">OFFERINGS</div>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A8F6A] shrink-0"></span>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition-colors text-left line-clamp-1 font-medium"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Hours & Map Directions */}
          <div className="bento-card bg-slate-900/90 text-slate-300 border-slate-800 space-y-4">
            <div className="pill-bento">WORKING HOURS</div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0A8F6A]" />
                  Mon - Sun
                </span>
                <span className="text-emerald-400 font-extrabold">7 AM - 10 PM</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Emergency support available 24/7 on call at{' '}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white font-bold underline">
                  09931616480
                </a>
              </p>
            </div>

            <div className="pt-1">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#0A8F6A] hover:text-emerald-300 font-bold underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">{BUSINESS_INFO.name}</strong>. All Rights Reserved. Developed by{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A8F6A] dark:text-emerald-400 hover:underline font-bold"
            >
              WMIT
            </a>
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
            <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegalModal('terms')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegalModal('disclaimer')} className="hover:text-slate-300 transition-colors">
              Medical Disclaimer
            </button>
          </div>

          <p className="flex items-center gap-1 text-slate-500">
            <span>Crafted with care for Motipur Healthcare</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
