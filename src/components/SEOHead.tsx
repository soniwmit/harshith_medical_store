import React, { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data/pharmacyData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  pageType?: 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'faq';
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://harshith-medical-store.vercel.app',
  pageType = 'home',
}) => {
  const defaultTitle = `${BUSINESS_INFO.name} | Pharmacy in Kinjar - Kurtha Rd, Motipur, Bihar`;
  const defaultDesc = `Harshith Medical Store - Your trusted pharmacy in Motipur, Bihar. 100% genuine medicines, prescription upload, WhatsApp ordering, baby care & medical equipment at affordable prices. Call 09931616480.`;
  const defaultKeywords = `Harshith Medical Store, Pharmacy in Motipur, Medical Store Kinjar Kurtha Rd, Chemist near Union Bank Motipur, Genuine Medicines Bihar 804423, Online Medicine WhatsApp Kurtha, Medical Equipment Motipur, Prescription Medicines Bihar`;

  const metaTitle = title ? `${title} | ${BUSINESS_INFO.name}` : defaultTitle;
  const metaDesc = description || defaultDesc;
  const metaKeywords = keywords || defaultKeywords;

  useEffect(() => {
    // Update Document Title
    document.title = metaTitle;

    // Helper to update or create meta tags
    const setMetaTag = (nameOrProperty: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMetaTag('description', metaDesc);
    setMetaTag('keywords', metaKeywords);
    setMetaTag('author', BUSINESS_INFO.name);

    // OpenGraph
    setMetaTag('og:title', metaTitle, true);
    setMetaTag('og:description', metaDesc, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:site_name', BUSINESS_INFO.name, true);
    setMetaTag('og:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', metaTitle);
    setMetaTag('twitter:description', metaDesc);
    setMetaTag('twitter:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD Schema
    const schemaId = 'seo-json-ld';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const localPharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${canonicalUrl}/#pharmacy`,
      'name': BUSINESS_INFO.name,
      'legalName': BUSINESS_INFO.legalName,
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
      'telephone': BUSINESS_INFO.phoneFormatted,
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': BUSINESS_INFO.address.street,
        'addressLocality': 'Motipur',
        'addressRegion': 'Bihar',
        'postalCode': BUSINESS_INFO.address.pincode,
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': BUSINESS_INFO.mapCoordinates.lat,
        'longitude': BUSINESS_INFO.mapCoordinates.lng
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '07:00',
          'closes': '22:00'
        }
      ],
      'url': canonicalUrl,
      'sameAs': [
        `https://wa.me/${BUSINESS_INFO.whatsapp}`
      ]
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    const combinedSchemas = [localPharmacySchema, faqSchema];
    schemaScript.text = JSON.stringify(combinedSchemas);

  }, [metaTitle, metaDesc, metaKeywords, canonicalUrl, pageType]);

  return null;
};
