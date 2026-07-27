import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  FileUp,
  Pill,
  UserCheck,
  Tag,
  FileText,
  HeartPulse,
  Building,
  ArrowRight,
  Search,
  Cross,
  Plus,
  ExternalLink,
  Shield
} from 'lucide-react';
import {
  BUSINESS_INFO,
  WHY_CHOOSE_US,
  CATEGORIES,
  SERVICES,
  TESTIMONIALS,
  FAQS,
  WORKING_PROCESS
} from '../data/pharmacyData';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenOrderModal: (medicineName?: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenOrderModal,
  onOpenSearch
}) => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setActiveFaqId(prev => (prev === id ? null : id));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Tag': return <Tag className="w-6 h-6 text-teal-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'BuildingStore': return <Building className="w-6 h-6 text-cyan-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      default: return <Pill className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="w-full font-sans text-slate-900 dark:text-slate-100 bg-[#F8FAFC] dark:bg-slate-950 transition-colors py-8">
      
      {/* 1. HERO BENTO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Main Hero Bento Card (Spans 2 cols, 2 rows on large screens) */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-2 bento-card bento-card-hero p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-blue-200/60 dark:border-emerald-900/60">
            <div className="relative z-10 space-y-4">
              <div className="pill-bento flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>TRUSTED PHARMACY IN KURTHA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black leading-tight text-slate-900 dark:text-white tracking-tight">
                Reliable Healthcare,<br />
                <span className="text-[#0A58CA] dark:text-blue-400">Every Single Day.</span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                100% genuine medicines, surgical supplies, baby care, and daily healthcare essentials delivered with care to the heart of Motipur.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-5 py-2.5 rounded-full bg-[#0A58CA] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={() => onOpenOrderModal()}
                  className="px-5 py-2.5 rounded-full bg-[#0A8F6A] hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.fullAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-white transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0A58CA]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>📍 Kinjar - Kurtha Rd, Motipur</span>
              <span className="text-[#0A8F6A] font-bold">Open Daily: 7 AM - 10 PM</span>
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400/20 dark:bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
          </div>

          {/* Bento Card 2: Prescription Sales */}
          <div className="bento-card">
            <div className="icon-circle-bento">
              <Pill className="w-6 h-6 text-[#0A58CA]" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Prescription Sales</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Authorized stockist of ethical & generic pharmaceuticals with strict batch verification.
            </p>
            <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">Tablets</span>
              <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full">Capsules</span>
              <span className="text-[10px] font-bold bg-[#0A8F6A]/10 text-[#0A8F6A] dark:text-emerald-300 px-2.5 py-1 rounded-full">WHO-GMP</span>
            </div>
          </div>

          {/* Bento Card 3: Motipur Store Location */}
          <div className="bento-card bg-slate-900 dark:bg-slate-900 text-white border-slate-800">
            <div className="icon-circle-bento bg-slate-800">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Motipur Store</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Nand Kishor House, 18, Kinjar - Kurtha Rd, near Union Bank, Motipur, Bihar 804423
            </p>
            <div className="mt-auto pt-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
              >
                <span>View Google Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Bento Card 4: Genuine Stat & Testimonial */}
          <div className="bento-card">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-3xl font-extrabold text-[#0A58CA] dark:text-blue-400">100%</div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Genuine Medicines</p>
              </div>
              <div className="flex text-amber-400 text-sm">★★★★★</div>
            </div>
            <p className="text-xs italic text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              "Most trusted pharmacy in Kurtha Rd. Extremely helpful staff and quick WhatsApp ordering."
            </p>
            <div className="mt-auto pt-3 flex items-center gap-2 border-t border-slate-100 dark:border-slate-800">
              <div className="w-7 h-7 rounded-full bg-[#0A58CA] text-white flex items-center justify-center text-xs font-bold">
                RK
              </div>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Ravi Kumar • Local Resident</span>
            </div>
          </div>

          {/* Bento Card 5: Medical Devices */}
          <div className="bento-card">
            <div className="icon-circle-bento">
              <HeartPulse className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Medical Devices</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Digital BP Monitors, Thermometers, Oximeters & Glucose test kits always in ready stock.
            </p>
          </div>

          {/* Bento Card 6: Our Specialties (Spans 2 cols) */}
          <div className="bento-card md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Our Specialties</h3>
              <span className="pill-bento text-[10px]">IN-STOCK ESSENTIALS</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-1">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 text-center">
                <span className="block text-2xl mb-1">👶</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Baby Care</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 text-center">
                <span className="block text-2xl mb-1">🧼</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Personal Care</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 text-center">
                <span className="block text-2xl mb-1">🩺</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Surgical Supplies</span>
              </div>
            </div>
          </div>

          {/* Bento Card 7: Need Help? Order Support */}
          <div className="bento-card bg-[#0A58CA] text-white border-blue-700">
            <h3 className="text-base sm:text-lg font-bold text-white">Need Medicine Help?</h3>
            <p className="text-xs text-blue-100 mt-1 leading-relaxed">
              Upload prescription or ask for medicine availability and get an instant quote.
            </p>
            <button
              onClick={() => onOpenOrderModal()}
              className="mt-auto w-full py-2.5 bg-white text-[#0A58CA] font-bold rounded-full text-xs shadow-md hover:bg-blue-50 transition-colors"
            >
              Upload Prescription
            </button>
          </div>

        </div>
      </section>

      {/* 2. WHY CHOOSE US BENTO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="pill-bento mx-auto">WHY CHOOSE US</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Health & Safety Is Our Priority
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We combine authentic WHO-GMP certified pharmaceuticals with warm, friendly local service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.id} className="bento-card hover:border-[#0A58CA]/40">
              <div className="icon-circle-bento">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="pill-bento mb-2">EXPLORE CATEGORIES</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Healthcare Products
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-[#0A58CA] dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onOpenOrderModal(`${cat.name} Inquiry`)}
              className="bento-card cursor-pointer hover:-translate-y-1 text-center group p-4"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden mx-auto mb-3 bg-slate-100 p-1 border border-slate-200 dark:border-slate-700">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xs group-hover:text-[#0A58CA] transition-colors line-clamp-1">
                {cat.name}
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mt-1">
                {cat.count}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR SERVICES BENTO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="pill-bento mx-auto">HEALTHCARE SERVICES</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Pharmacy & Wellness Offerings
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From prescription refilling to diabetic glucometers and infant care, we cover all your family’s medical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.slice(0, 6).map((srv) => (
            <div key={srv.id} className="bento-card justify-between space-y-4">
              <div className="space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-700">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {srv.title}
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {srv.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {srv.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenOrderModal(`${srv.title} Inquiry`)}
                className="w-full py-2.5 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-[#0A8F6A] hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire via WhatsApp</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WORKING PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bento-card bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-8 border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800">
              4-STEP EASY PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How To Order Medicines
            </h2>
            <p className="text-xs text-slate-300">
              Hassle-free process whether you visit our counter in Motipur or order from home on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKING_PROCESS.map((proc) => (
              <div
                key={proc.step}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2 text-center"
              >
                <div className="w-9 h-9 rounded-full bg-[#0A8F6A] text-white font-black text-xs flex items-center justify-center mx-auto shadow-sm">
                  {proc.step}
                </div>
                <h3 className="font-bold text-white text-sm">{proc.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{proc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="pill-bento mx-auto">TESTIMONIALS</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Trusted By Local Motipur Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bento-card justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex text-amber-400 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover border border-[#0A8F6A]"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">{t.name}</h4>
                  <p className="text-[10px] text-slate-400">{t.location} • Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ BENTO SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8 space-y-2">
          <div className="pill-bento mx-auto">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Common Inquiries & Support
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bento-card !p-4 cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm">
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0A58CA] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </div>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. LOCATION & MAP BENTO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 bento-card justify-between space-y-6">
            <div>
              <div className="pill-bento mb-3">LOCATION & STORE HOURS</div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Visit Harshith Medical Store
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Located near Union Bank on Kinjar - Kurtha Rd, Motipur.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0A58CA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Address</p>
                  <p className="text-slate-600 dark:text-slate-300">{BUSINESS_INFO.address.fullAddress}</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Timings</p>
                  <p className="text-slate-600 dark:text-slate-300">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 py-2.5 rounded-full bg-[#0A58CA] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 09931616480</span>
              </a>

              <button
                onClick={() => onOpenOrderModal()}
                className="flex-1 py-2.5 rounded-full bg-[#0A8F6A] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-teal-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bento-card p-2 h-96 overflow-hidden">
            <iframe
              title="Harshith Medical Store Google Map Location"
              src={BUSINESS_INFO.googleMapEmbedUrl}
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};
