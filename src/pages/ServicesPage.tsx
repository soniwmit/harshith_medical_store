import React from 'react';
import {
  FileCheck,
  Pill,
  Baby,
  Sparkles,
  Activity,
  Heart,
  Cross,
  Syringe,
  Zap,
  Stethoscope,
  ShieldAlert,
  Bone,
  CheckCircle2,
  MessageSquare,
  Phone
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/pharmacyData';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenOrderModal
}) => {
  return (
    <div className="w-full font-sans bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors py-8">
      
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bento-card bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-8 sm:p-12 border-slate-800 text-center space-y-4">
          <div className="pill-bento mx-auto">PHARMACY & HEALTHCARE OFFERINGS</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Healthcare Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive medicine dispensing, medical equipment, surgical supplies, and patient care products at Harshith Medical Store.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bento-card justify-between space-y-4 p-0 overflow-hidden"
            >
              <div>
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white font-extrabold text-base">
                    {srv.title}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-extrabold text-[10px] uppercase tracking-wider text-[#0A8F6A]">
                      SERVICE FEATURES
                    </h4>
                    <ul className="space-y-1.5">
                      {srv.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenOrderModal(`${srv.title} Requirement`)}
                  className="w-full py-3 rounded-full bg-[#0A8F6A] text-white font-bold text-xs hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire / Order {srv.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prescription Upload Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bento-card bg-slate-900 text-white p-8 border-slate-800 text-center space-y-4">
          <div className="pill-bento mx-auto">DOCTOR'S PRESCRIPTION SLIP</div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a Doctor’s Prescription Slip?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Take a clear photo with your phone camera and upload it on WhatsApp. Our certified pharmacist will review the dosages and prepare your order immediately.
          </p>
          <button
            onClick={() => onOpenOrderModal()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A8F6A] hover:bg-teal-700 text-white font-bold text-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Upload Prescription via WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
};
