import React, { useState } from 'react';
import {
  X,
  MessageSquare,
  Phone,
  Upload,
  CheckCircle2,
  FileText,
  Clock,
  User,
  MapPin,
  Pill,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    requiresPrescription: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'Morning (8 AM - 12 PM)'
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        requiresPrescription: true,
        prescriptionFileName: file.name
      }));

      // Create local image preview if image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPrescriptionPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPrescriptionPreview(null);
      }
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.mobileNumber.trim()) {
      alert('Please enter your Customer Name and Phone Number.');
      return;
    }

    const prescriptionText = formData.requiresPrescription
      ? `Yes (${formData.prescriptionFileName || 'Image Attached'})`
      : 'No';

    const formattedMessage = `Hello,
*Harshith Medical Store*

*Customer Name:* ${formData.customerName.trim()}
*Phone:* ${formData.mobileNumber.trim()}
${formData.email ? `*Email:* ${formData.email.trim()}\n` : ''}*Medicine Required:* ${formData.medicineName.trim() || 'Refer to Prescription'}
*Address:* ${formData.address.trim() || 'Store Pickup'}
*Prescription:* ${prescriptionText}
*Preferred Time:* ${formData.preferredDeliveryTime}
*Message / Notes:* ${formData.message.trim() || 'N/A'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;

    setIsSuccessMessage(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccessMessage(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">WhatsApp Order & Prescription Upload</h2>
              <p className="text-xs text-emerald-100 mt-0.5">
                Send your medicine requirements directly to Harshith Medical Store
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        {isSuccessMessage ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Redirecting to WhatsApp...</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Opening WhatsApp with your formatted order details. Our team will verify medicine stock and confirm your order instantly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Customer Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.customerName}
                    onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 09931616480"
                    value={formData.mobileNumber}
                    onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              {/* Delivery Time */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Preferred Delivery / Pickup Time
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.preferredDeliveryTime}
                    onChange={e => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option>Morning (8 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 8 PM)</option>
                    <option>Immediate / Urgent Pickup</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Delivery / Pickup Address
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Street, Landmark, Motipur / Kurtha"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Medicine Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Medicine Name(s) & Quantities
              </label>
              <div className="relative">
                <Pill className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <textarea
                  rows={2}
                  placeholder="e.g. Paracetamol 650mg (2 strips), Cough Syrup (1 bottle)..."
                  value={formData.medicineName}
                  onChange={e => setFormData({ ...formData, medicineName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Prescription Toggle & File Upload */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Do you have a Doctor’s Prescription?
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, requiresPrescription: true })}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      formData.requiresPrescription
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, requiresPrescription: false })}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      !formData.requiresPrescription
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              {formData.requiresPrescription && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Upload Prescription Image / PDF
                  </label>
                  <label className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-800 cursor-pointer hover:bg-emerald-50/50 dark:hover:bg-slate-800/90 transition-colors">
                    <Upload className="w-6 h-6 text-emerald-600 mb-1" />
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium text-center">
                      {formData.prescriptionFileName ? (
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                          Selected: {formData.prescriptionFileName}
                        </span>
                      ) : (
                        'Click or Drag & Drop prescription photo (JPG, PNG, PDF)'
                      )}
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  {prescriptionPreview && (
                    <div className="mt-2 relative w-20 h-20 rounded-lg overflow-hidden border border-slate-300 shadow-sm">
                      <img src={prescriptionPreview} alt="Prescription preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Additional Message / Notes
              </label>
              <textarea
                rows={2}
                placeholder="Any special instructions or substitute preferences..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Directly Instead</span>
              </a>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all transform hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>Send Order via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
