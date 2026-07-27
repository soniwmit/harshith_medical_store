import React from 'react';
import {
  ShieldCheck,
  Heart,
  Target,
  Award,
  Users,
  Building,
  Clock,
  Phone,
  MessageSquare,
  Sparkles,
  Quote
} from 'lucide-react';
import { BUSINESS_INFO, STORE_MILESTONES, GALLERY_IMAGES } from '../data/pharmacyData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenOrderModal }) => {
  return (
    <div className="w-full font-sans bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors py-8">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bento-card bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-8 sm:p-12 border-slate-800 text-center space-y-4">
          <div className="pill-bento mx-auto">ABOUT OUR BUSINESS</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Harshith Medical Store
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted community pharmacy providing 100% genuine medicines, expert guidance, and fast healthcare delivery in Motipur & Kinjar - Kurtha Rd.
          </p>
        </div>
      </section>

      {/* Business Story Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          <div className="lg:col-span-7 bento-card justify-between space-y-6 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="pill-bento">OUR FOUNDATION</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Serving Motipur & Kurtha Region With Integrity
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Located at <strong>Nand Kishor House, 18, Kinjar - Kurtha Rd, near Union Bank, Motipur, Bihar 804423</strong>, Harshith Medical Store was founded with a singular purpose: to ensure that every family in our region has access to authentic, high-quality, and affordable medicines.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the years, we have grown into Motipur’s most trusted pharmacy by strictly adhering to pharmaceutical storage guidelines, maintaining 100% batch traceability, and offering personalized patient care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h4 className="font-extrabold text-[#0A58CA] dark:text-blue-400 text-2xl">5,000+</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Satisfied Local Families</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h4 className="font-extrabold text-[#0A8F6A] dark:text-emerald-400 text-2xl">100%</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Genuine WHO-GMP Drugs</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bento-card p-2 overflow-hidden h-80 lg:h-auto min-h-[300px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                alt="Harshith Medical Store Front"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl text-white text-xs border border-slate-700">
                <p className="font-bold">Store Premises at Kinjar - Kurtha Rd</p>
                <p className="text-[11px] text-slate-400">Near Union Bank, Motipur, Bihar 804423</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="pill-bento mx-auto">GUIDING PRINCIPLES</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Mission, Vision & Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bento-card space-y-3">
            <div className="icon-circle-bento">
              <Target className="w-5 h-5 text-[#0A58CA]" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Our Mission</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              To safeguard community health by dispensing genuine, batch-verified pharmaceuticals and offering accessible healthcare products at affordable rates.
            </p>
          </div>

          <div className="bento-card space-y-3">
            <div className="icon-circle-bento">
              <Sparkles className="w-5 h-5 text-[#0A8F6A]" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Our Vision</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              To be Motipur and Kurtha’s premier healthcare partner, known for complete pharmacy reliability and emergency responsiveness.
            </p>
          </div>

          <div className="bento-card space-y-3">
            <div className="icon-circle-bento">
              <Heart className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Core Values</h3>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 font-medium">
              <li>• 100% Genuine Medicine Guarantee</li>
              <li>• Patient Empathy & Respect</li>
              <li>• Honest & Transparent Pricing</li>
              <li>• Cold-Chain Drug Safety</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bento-card bg-slate-900 text-white p-8 border-slate-800 space-y-6 relative overflow-hidden">
          <Quote className="w-12 h-12 text-emerald-500/20 absolute top-6 right-6" />
          
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800">
              FOUNDER'S MESSAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              "Your Health Is Our Responsibility"
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "When we started Harshith Medical Store at Nand Kishor House near Union Bank, our goal was simple: to make sure local families never have to worry about counterfeit or expired medicines. We personally check every batch and ensure that proper refrigerator storage is maintained for life-saving drugs like insulins and vaccines. Thank you for placing your trust in us."
          </p>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white text-sm">Harshith Kumar & Management</h4>
              <p className="text-xs text-emerald-400">Harshith Medical Store, Motipur</p>
            </div>

            <button
              onClick={onOpenOrderModal}
              className="px-5 py-2.5 rounded-full bg-[#0A8F6A] text-white font-bold text-xs hover:bg-teal-700 transition-colors"
            >
              Connect on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <div className="pill-bento mx-auto">MILESTONES</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Journey Of Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STORE_MILESTONES.map((m) => (
            <div key={m.year} className="bento-card space-y-2">
              <span className="pill-bento text-[10px]">
                {m.year}
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm pt-1">
                {m.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
