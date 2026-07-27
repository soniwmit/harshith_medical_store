import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Mail,
  User,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full font-sans bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bento-card bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-8 sm:p-12 border-slate-800 text-center space-y-4">
          <div className="pill-bento mx-auto">GET IN TOUCH</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Harshith Medical Store
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visit our store at Kinjar - Kurtha Rd near Union Bank, or send us a message directly.
          </p>
        </div>
      </section>

      {/* Main Content Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="bento-card space-y-2">
              <div className="flex items-center gap-2 text-[#0A8F6A] font-bold">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>Store Address</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pl-7">
                {BUSINESS_INFO.address.fullAddress}
              </p>
              <p className="text-[#0A8F6A] dark:text-emerald-400 font-bold pl-7 text-xs">
                Landmark: Near Union Bank
              </p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bento-card space-y-2">
              <div className="flex items-center gap-2 text-[#0A58CA] font-bold">
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call & WhatsApp Contact</span>
              </div>
              <div className="pl-7 space-y-1">
                <p className="font-extrabold text-slate-900 dark:text-white text-lg">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline">
                    09931616480
                  </a>
                </p>
                <p className="text-slate-500 text-xs">
                  Available daily for medicine inquiries, stock checks & WhatsApp orders.
                </p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bento-card space-y-2">
              <div className="flex items-center gap-2 text-[#0A8F6A] font-bold">
                <Clock className="w-5 h-5 shrink-0" />
                <span>Working Hours</span>
              </div>
              <div className="pl-7 text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-bold text-xs">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                <p className="text-[#0A8F6A] font-semibold text-xs">
                  24/7 Emergency Medicine Support on Call
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form Bento Card */}
          <div className="lg:col-span-7 bento-card space-y-6">
            <div>
              <div className="pill-bento mb-2">QUICK MESSAGE</div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send Us A Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below and our staff will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#0A8F6A] mx-auto" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you for contacting Harshith Medical Store. We will respond to your phone number shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 09931616480"
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your medicine inquiry or question..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-[#0A8F6A] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#0A8F6A] text-white font-bold text-xs hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Google Map Bento Card */}
        <div className="mt-8 space-y-4">
          <div className="bento-card p-2 h-96 overflow-hidden">
            <iframe
              title="Harshith Medical Store Location Map"
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
