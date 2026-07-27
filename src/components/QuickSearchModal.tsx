import React, { useState } from 'react';
import { Search, X, Pill, ShieldAlert, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { MEDICINES_DATABASE } from '../data/pharmacyData';
import { MedicineProduct } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineToOrder: (medicineName: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineToOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Medical Equipment', 'Diabetic Care', 'Baby Products', 'Vitamins'];

  const filteredMedicines = MEDICINES_DATABASE.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.uses.some(u => u.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto font-sans">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6">
        
        {/* Modal Top */}
        <div className="p-5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Search Medicine Availability & Price Estimate
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Type medicine name, health symptom, or brand
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input & Filters */}
        <div className="p-5 space-y-4 border-b border-slate-100 dark:border-slate-800">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              autoFocus
              placeholder="Search e.g. Paracetamol, Cough Syrup, Omron BP, Diabetes..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          {filteredMedicines.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No matching medicines listed in quick index.
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We carry 5,000+ medicines in stock! Send your requirement directly to our pharmacist on WhatsApp.
              </p>
              <button
                onClick={() => {
                  onSelectMedicineToOrder(searchTerm || 'Custom Medicine Inquiry');
                  onClose();
                }}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire "{searchTerm || 'Medicine'}" on WhatsApp</span>
              </button>
            </div>
          ) : (
            filteredMedicines.map((med: MedicineProduct) => (
              <div
                key={med.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-emerald-500 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center shrink-0">
                    <Pill className="w-6 h-6 text-emerald-600" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {med.name}
                      </h4>
                      {med.requiresPrescription ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 flex items-center gap-1">
                          <ShieldAlert className="w-3 h-3" />
                          Prescription Needed
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          OTC
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {med.description}
                    </p>

                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      {med.uses.map(use => (
                        <span key={use} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px]">
                          {use}
                        </span>
                      ))}
                      {med.priceEstimate && (
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 ml-auto">
                          Est: {med.priceEstimate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectMedicineToOrder(med.name);
                    onClose();
                  }}
                  className="w-full sm:w-auto shrink-0 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
