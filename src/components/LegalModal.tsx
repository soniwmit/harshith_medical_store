import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Medical Disclaimer'
  };

  const icons = {
    privacy: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    terms: <FileText className="w-6 h-6 text-emerald-600" />,
    disclaimer: <AlertTriangle className="w-6 h-6 text-amber-500" />
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto font-sans">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6">
        
        <div className="p-5 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icons[type]}
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              {titles[type]}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto">
          {type === 'privacy' && (
            <>
              <p>
                At <strong>{BUSINESS_INFO.name}</strong>, we are committed to protecting the personal and medical privacy of our patients and customers in Motipur, Kurtha, and Bihar region.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">1. Information Collection</h4>
              <p>
                When you place an order or upload a doctor’s prescription through our website or WhatsApp interface, we collect details such as your name, contact phone number, address, and medicine requirements solely to fulfill your order.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">2. Confidentiality of Prescriptions</h4>
              <p>
                All uploaded medical prescriptions and medical histories are handled strictly by our certified pharmacists. We do not sell or share customer medical records with any third-party advertisers.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">3. Security Standards</h4>
              <p>
                We use industry-standard encryption protocols to protect your personal contact details during transmission.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By accessing and using the <strong>{BUSINESS_INFO.name}</strong> website or WhatsApp ordering facility, you agree to comply with the following terms:
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">1. Prescription Requirements</h4>
              <p>
                Schedule-H, Schedule-X, and prescription drugs will only be dispensed after physical or digital verification of a valid registered medical practitioner’s prescription.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">2. Pricing & Availability</h4>
              <p>
                Prices and stock availability are subject to batch variations and official pharmaceutical manufacturer MRP guidelines.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">3. Returns & Replacements</h4>
              <p>
                Temperature-sensitive medicines (like insulin and vaccines) cannot be returned once handed over, to ensure cold-chain safety for all patients.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs">
                <strong>Important Notice:</strong> The information contained on this website is for general informational and educational purposes regarding product availability and store location.
              </div>
              <p>
                Information provided on this website does not substitute professional medical advice, diagnosis, or treatment. Always consult a qualified registered physician regarding any medical condition or drug dosage.
              </p>
              <p>
                In case of a medical emergency, please visit the nearest hospital or call emergency medical services immediately.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
