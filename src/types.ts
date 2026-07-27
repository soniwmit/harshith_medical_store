export type PageId = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact' | 'order';

export interface MedicineProduct {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  dosageForm: string; // e.g. Tablet, Syrup, Capsule, Device
  requiresPrescription: boolean;
  priceEstimate?: string;
  inStock: boolean;
  popular?: boolean;
  image: string;
  uses: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  features: string[];
  image: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  count: string;
  iconName: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'products' | 'devices' | 'shelves';
  imageUrl: string;
  caption: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  requiresPrescription: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  category: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  workingHours: {
    days: string;
    hours: string;
    emergency: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  googleMapEmbedUrl: string;
}
