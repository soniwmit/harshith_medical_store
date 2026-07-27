import {
  BusinessInfo,
  CategoryItem,
  FAQItem,
  GalleryItem,
  MedicineProduct,
  ServiceItem,
  Testimonial
} from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Harshith Medical Store',
  legalName: 'Harshith Medical Store & Healthcare Services',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  category: 'Pharmacy | Medical Store',
  phone: '09931616480',
  phoneFormatted: '+91 99316 16480',
  whatsapp: '919931616480',
  whatsappFormatted: '+91 99316 16480',
  address: {
    street: 'Nand Kishor House, 18, Kinjar - Kurtha Rd',
    landmark: 'near Union Bank, Motipur',
    city: 'Motipur / Kurtha',
    district: 'Arwal / Jehanabad Region',
    state: 'Bihar',
    pincode: '804423',
    fullAddress: 'Nand Kishor House, 18, Kinjar - Kurtha Rd, near Union Bank, Motipur, Bihar 804423'
  },
  workingHours: {
    days: 'Monday to Sunday',
    hours: '7:00 AM - 10:00 PM',
    emergency: '24/7 Available for Urgent Medicine Inquiries'
  },
  mapCoordinates: {
    lat: 25.1387,
    lng: 84.7821
  },
  // Clean Google Maps Embed URL centered around Motipur Kinjar-Kurtha Rd
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.281890334816!2d84.7821!3d25.1387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA4JzE5LjMiTiA4NMK0NDYnNTUuNiJF!5e0!3m2!1sen!2sin!4v1689234812345!5m2!1sen!2sin'
};

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: '100% Genuine Medicines',
    description: 'Directly sourced from WHO-GMP certified pharmaceutical distributors and reputable brands.',
    icon: 'ShieldCheck',
    color: 'emerald'
  },
  {
    id: '2',
    title: 'Experienced Staff',
    description: 'Knowledgeable pharmacists ready to guide you on proper dosage, usage, and storage.',
    icon: 'UserCheck',
    color: 'blue'
  },
  {
    id: '3',
    title: 'Affordable Prices',
    description: 'Genuine medicines and healthcare products at fair, transparent, and discounted prices.',
    icon: 'Tag',
    color: 'teal'
  },
  {
    id: '4',
    title: 'Fast Service',
    description: 'Quick counter dispensing and rapid order fulfillment with minimal waiting time.',
    icon: 'Zap',
    color: 'amber'
  },
  {
    id: '5',
    title: 'Prescription Medicines',
    description: 'Complete range of ethical chronic, acute, and specialized prescription formulations.',
    icon: 'FileText',
    color: 'indigo'
  },
  {
    id: '6',
    title: 'Healthcare Products',
    description: 'Wide array of baby care, personal hygiene, skin care, and orthopedic accessories.',
    icon: 'HeartPulse',
    color: 'rose'
  },
  {
    id: '7',
    title: 'Trusted Local Pharmacy',
    description: 'Serving Motipur & Kurtha residents with dedication, integrity, and personal care.',
    icon: 'BuildingStore',
    color: 'cyan'
  },
  {
    id: '8',
    title: 'Easy WhatsApp Support',
    description: 'Order medicines and upload prescriptions instantly via WhatsApp for hassle-free processing.',
    icon: 'MessageSquare',
    color: 'emerald'
  }
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'tablets',
    name: 'Tablets',
    count: '250+ Varieties',
    iconName: 'Pill',
    description: 'Analgesics, antibiotics, antipyretics, and daily chronic medication tablets.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'capsules',
    name: 'Capsules',
    count: '180+ Varieties',
    iconName: 'Capsule',
    description: 'Softgels, gastro-resistant capsules, vitamins, and supplement doses.',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'syrups',
    name: 'Syrups',
    count: '120+ Varieties',
    iconName: 'FlaskConical',
    description: 'Cough syrups, antacids, pediatric solutions, and tonic liquids.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'injection',
    name: 'Injection & IVs',
    count: '90+ Varieties',
    iconName: 'Syringe',
    description: 'Sterile injectable formulations, IV fluids, and clinical ampoules.',
    image: 'https://images.unsplash.com/photo-1579165466511-70e21d47b64d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'medical-equipment',
    name: 'Medical Equipment',
    count: '45+ Devices',
    iconName: 'Stethoscope',
    description: 'BP monitors, glucometers, nebulizers, thermometers, and pulse oximeters.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'protein-supplements',
    name: 'Protein Supplements',
    count: '35+ Brands',
    iconName: 'Activity',
    description: 'Whey protein, nutritional drinks, weight gainers, and stamina formulas.',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Minerals',
    count: '80+ Products',
    iconName: 'Sparkles',
    description: 'Multivitamins, Calcium D3, B-Complex, Vitamin C, and immunity boosters.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'skin-care',
    name: 'Skin Care & Derma',
    count: '60+ Products',
    iconName: 'Smile',
    description: 'Medicated creams, moisturizers, acne gels, and sunscreen lotions.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'baby-products',
    name: 'Baby Care Products',
    count: '75+ Products',
    iconName: 'Baby',
    description: 'Baby food, diapers, wipes, baby soaps, powders, and gentle lotions.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'personal-hygiene',
    name: 'Personal Hygiene',
    count: '90+ Products',
    iconName: 'Sparkle',
    description: 'Hand sanitizers, oral care, feminine hygiene, and disinfectant wipes.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'orthopedic-support',
    name: 'Orthopedic Support',
    count: '40+ Items',
    iconName: 'ShieldAlert',
    description: 'Knee caps, lumbar belts, cervical collars, crepe bandages, and braces.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'diabetic-care',
    name: 'Diabetic Care',
    count: '50+ Items',
    iconName: 'Crosshair',
    description: 'Sugar test strips, lancets, insulin accessories, and sugar-free syrups.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    description: 'Dispensing authentic, verified prescription drugs with accurate dosages.',
    iconName: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    details: [
      'Authentic branded & WHO-GMP generic drugs',
      'Batch-verified and temperature-controlled storage',
      'Guidance on food interactions and dosing schedule',
      'Easy refilling through WhatsApp prescription upload'
    ],
    features: ['100% Genuine', 'Qualified Pharmacist', 'Batch Checked', 'Refill Alerts']
  },
  {
    id: 'otc-medicines',
    title: 'OTC Medicines',
    description: 'Over-the-counter care for common ailments, fever, cold, pain, and acidity.',
    iconName: 'Pill',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80',
    details: [
      'Analgesics, anti-pyretics, cough drops, and throat lozenges',
      'Antacids, ORS hydration salts, and laxative preparations',
      'Topical pain gels, muscle sprays, and antiseptic creams',
      'Prompt recommendations for mild symptoms'
    ],
    features: ['Instant Buying', 'Affordable Options', 'Top Brands', 'Symptom Advice']
  },
  {
    id: 'baby-care',
    title: 'Baby Care Products',
    description: 'Nourishing, dermatologically tested essentials for newborns and toddlers.',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
    details: [
      'Infant milk formulas and cereal nutrition',
      'Ultra-soft diapers, moisture wipes, and rashes cream',
      'Tear-free shampoos, gentle baby oils, and soaps',
      'Baby feeding bottles and pacifiers'
    ],
    features: ['Dermatologist Tested', 'Hypoallergenic', 'Trusted Brands', 'Complete Range']
  },
  {
    id: 'personal-care',
    title: 'Personal Care Products',
    description: 'Daily grooming, skincare, oral hygiene, and wellness products.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    details: [
      'Medicated facewashes, acne soaps, and moisturizing lotions',
      'Oral care pastes, mouthwashes, and specialized toothbrushes',
      'Hair care oils, anti-dandruff solutions, and shampoos',
      'Feminine hygiene products and personal care'
    ],
    features: ['Skin Safe', 'Wide Variety', 'Premium Quality', 'Budget Friendly']
  },
  {
    id: 'diabetic-care',
    title: 'Diabetic Care Essentials',
    description: 'Comprehensive diabetes management products, test kits, and supplements.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600&q=80',
    details: [
      'Glucometers, blood glucose test strips, and lancets',
      'Insulin syringes, pen needles, and cool storage bags',
      'Sugar-free sweeteners and diabetic protein powders',
      'Neuropathy foot creams and special socks'
    ],
    features: ['High Accuracy', 'Complete Range', 'Insulin Supplies', 'Discount Packs']
  },
  {
    id: 'bp-monitors',
    title: 'Blood Pressure Monitors',
    description: 'Digital and manual BP monitoring machines for home cardiovascular care.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    details: [
      'Fully automatic digital arm BP monitors',
      'Compact wrist BP testing meters',
      'Clinical manual aneroid sphygmomanometers',
      'Free demo and cuff size fitting guidance'
    ],
    features: ['Clinically Validated', 'Memory Store', 'Easy To Read', 'Warranty Included']
  },
  {
    id: 'first-aid',
    title: 'First Aid Supplies',
    description: 'Emergency trauma and wound care kits for homes, offices, and vehicles.',
    iconName: 'Cross',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80',
    details: [
      'Sterile cotton rolls, gauze bandages, and micropore tapes',
      'Antiseptic solutions (Betadine, Dettol, Savlon)',
      'Band-aids, burn creams, and wound healing sprays',
      'Ready-made travel and home First Aid boxes'
    ],
    features: ['Emergency Ready', 'Sterile Packed', 'Compact Kits', 'Essential First Choice']
  },
  {
    id: 'surgical-items',
    title: 'Surgical Items',
    description: 'High-grade hospital disposables and medical surgical consumables.',
    iconName: 'Syringe',
    image: 'https://images.unsplash.com/photo-1579165466511-70e21d47b64d?auto=format&fit=crop&w=600&q=80',
    details: [
      'Disposable syringes, IV cannulas, and catheter tubes',
      'Surgical gloves, face masks, caps, and shoe covers',
      'Suture needles, scalpel blades, and surgical scissors',
      'Urine bags, colostomy pouches, and suction sets'
    ],
    features: ['Hospital Grade', 'Sterile Certified', 'Bulk Stock', 'Reliable Supply']
  },
  {
    id: 'health-supplements',
    title: 'Health & Immunity Supplements',
    description: 'Vitamins, minerals, and dietary formulations to boost overall wellness.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
    details: [
      'Calcium + Vitamin D3 for bone and joint strength',
      'Multivitamin capsules with Ginseng and Minerals',
      'Omega-3 Fish Oil and Green Tea extract capsules',
      'Ayurvedic immunity tonic herbs (Chyawanprash, Ashwagandha)'
    ],
    features: ['Daily Energy', 'Nutritional Boost', 'Doctor Approved', 'Natural Extracts']
  },
  {
    id: 'medical-devices',
    title: 'Medical Devices & Diagnostics',
    description: 'Modern diagnostic devices for precise temperature, pulse, and oxygen check.',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80',
    details: [
      'Fingertip pulse oximeters for SpO2 monitoring',
      'Digital infrared forehead thermometers',
      'Ultrasonic nebulizer machines for asthma relief',
      'Steam inhalers and facial vaporizers'
    ],
    features: ['Digital Precision', 'Instant Results', 'User Friendly', 'Long Life']
  },
  {
    id: 'home-care',
    title: 'Home Care Products',
    description: 'Patient mobility aids, invalid care equipment, and bedridden accessories.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    details: [
      'Adult diapers, underpads, and waterproof sheets',
      'Walker frames, walking sticks, and crutches',
      'Air mattresses for anti-bedsore prevention',
      'Hot water bags, ice gel packs, and heating pads'
    ],
    features: ['Comfort First', 'Patient Care', 'Durable Build', 'Ergonomic']
  },
  {
    id: 'orthopedic-care',
    title: 'Orthopedic & Joint Care',
    description: 'Supports, belts, and braces for spine, knee, wrist, and ankle relief.',
    iconName: 'Bone',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    details: [
      'Lumbosacral lumbar support belts for lower back pain',
      'Neoprene knee caps and hinged knee supports',
      'Cervical neck collars and posture correctors',
      'Ankle binders, wrist splints, and sling pouches'
    ],
    features: ['Anatomic Fit', 'Pain Relief', 'Breathable Fabric', 'Doctor Recommended']
  }
];

export const MEDICINES_DATABASE: MedicineProduct[] = [
  {
    id: 'med-1',
    name: 'Paracetamol 650 mg (Dolo / Crocin / Calpol)',
    category: 'Tablets',
    subcategory: 'Antipyretics & Analgesics',
    description: 'Effective fever reducer and mild to moderate pain reliever.',
    dosageForm: 'Tablet',
    requiresPrescription: false,
    priceEstimate: '₹30 - ₹35 / strip',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80',
    uses: ['Fever', 'Headache', 'Bodyache', 'Mild Joint Pain']
  },
  {
    id: 'med-2',
    name: 'Amoxicillin & Potassium Clavulanate (Augmentin / Moxikind CV)',
    category: 'Tablets',
    subcategory: 'Antibiotics',
    description: 'Broad-spectrum antibiotic for bacterial respiratory, ENT, and skin infections.',
    dosageForm: 'Tablet',
    requiresPrescription: true,
    priceEstimate: '₹180 - ₹210 / strip',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=400&q=80',
    uses: ['Bacterial Infections', 'Throat Infection', 'Dental Infection']
  },
  {
    id: 'med-3',
    name: 'Omeprazole & Domperidone (Omez D / Pan D)',
    category: 'Capsules',
    subcategory: 'Gastrointestinal',
    description: 'Relieves hyperacidity, heartburn, gas, and gastroesophageal reflux (GERD).',
    dosageForm: 'Capsule',
    requiresPrescription: true,
    priceEstimate: '₹110 - ₹150 / strip',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80',
    uses: ['Acidity', 'Heartburn', 'Bloating', 'Reflux']
  },
  {
    id: 'med-4',
    name: 'Cough & Cold Syrup (Ascoril / Benadryl / Grilinctus)',
    category: 'Syrups',
    subcategory: 'Respiratory',
    description: 'Soothes wet and dry cough, relieves congestion and bronchial irritation.',
    dosageForm: 'Syrup',
    requiresPrescription: false,
    priceEstimate: '₹95 - ₹140 / bottle',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=400&q=80',
    uses: ['Cough Relief', 'Sore Throat', 'Chest Congestion']
  },
  {
    id: 'med-5',
    name: 'Omron Digital Blood Pressure Monitor (HEM 7120)',
    category: 'Medical Equipment',
    subcategory: 'BP Machine',
    description: 'Fully automatic, Intellisense digital arm blood pressure testing monitor.',
    dosageForm: 'Device',
    requiresPrescription: false,
    priceEstimate: '₹1,950 - ₹2,300',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    uses: ['Home BP Tracking', 'Heart Rate Monitoring', 'Hypertension Check']
  },
  {
    id: 'med-6',
    name: 'Accu-Chek Instant Blood Glucose Meter & Test Strips',
    category: 'Diabetic Care',
    subcategory: 'Glucometer',
    description: 'Easy-to-use blood sugar testing kit with 25 or 50 test strips.',
    dosageForm: 'Device & Strips',
    requiresPrescription: false,
    priceEstimate: '₹1,150 - ₹1,450',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=400&q=80',
    uses: ['Diabetes Blood Sugar Test', 'Daily Glucose Monitoring']
  },
  {
    id: 'med-7',
    name: 'PediaSure / Horlicks / Protinex Health Supplement',
    category: 'Protein Supplements',
    subcategory: 'Nutrition',
    description: 'High-protein nutritional drink mix enriched with 25+ essential vitamins & minerals.',
    dosageForm: 'Powder Jar',
    requiresPrescription: false,
    priceEstimate: '₹420 - ₹680 / jar',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80',
    uses: ['Immunity Support', 'Child Growth', 'Muscle Strength']
  },
  {
    id: 'med-8',
    name: 'Huggies / Pampers Baby Diapers (All Sizes S, M, L, XL)',
    category: 'Baby Products',
    subcategory: 'Baby Care',
    description: 'Ultra-absorbent, leak-proof pants with 12-hour dry technology for infants.',
    dosageForm: 'Pack',
    requiresPrescription: false,
    priceEstimate: '₹350 - ₹850 / pack',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80',
    uses: ['Infant Hygiene', 'Overnight Dryness']
  },
  {
    id: 'med-9',
    name: 'Vitamin C + Zinc Chewable Tablets (Limcee / Celin)',
    category: 'Vitamins',
    subcategory: 'Immunity',
    description: 'Tasty chewable tablets to strengthen natural immunity and collagen formation.',
    dosageForm: 'Chewable Tablet',
    requiresPrescription: false,
    priceEstimate: '₹25 - ₹40 / strip',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80',
    uses: ['Immunity Boost', 'Skin Health', 'Cold Recovery']
  },
  {
    id: 'med-10',
    name: 'Cetaphil / Himalaya Gentle Skin Cleanser & Creams',
    category: 'Skin Care',
    subcategory: 'Dermatology',
    description: 'Dermatologist-recommended non-irritating soothing cleanser for sensitive skin.',
    dosageForm: 'Lotion',
    requiresPrescription: false,
    priceEstimate: '₹280 - ₹550',
    inStock: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    uses: ['Dry Skin Moisture', 'Facial Hygiene', 'Sensitive Skin']
  },
  {
    id: 'med-11',
    name: 'Lumbar Sacral Back Support Belt (Tynor / Flamingo)',
    category: 'Orthopedic Support',
    subcategory: 'Back Care',
    description: 'Ergonomic spinal belt with double pull elastic mechanism for lumbar pain relief.',
    dosageForm: 'Orthopedic Belt',
    requiresPrescription: false,
    priceEstimate: '₹650 - ₹950',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80',
    uses: ['Backache Relief', 'Posture Correction', 'Disc Pain Support']
  },
  {
    id: 'med-12',
    name: 'Fingertip Pulse Oximeter (OLED Display)',
    category: 'Medical Equipment',
    subcategory: 'Diagnostics',
    description: 'Accurate SpO2 blood oxygen saturation level and pulse rate checking device.',
    dosageForm: 'Device',
    requiresPrescription: false,
    priceEstimate: '₹750 - ₹1,100',
    inStock: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80',
    uses: ['SpO2 Check', 'Pulse Rate Monitor']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar Singh',
    location: 'Motipur, Bihar',
    rating: 5,
    comment: 'Harshith Medical Store is the most reliable pharmacy in our area. They always have 100% genuine medicines and the staff is extremely helpful. I ordered my father’s monthly diabetes medicines on WhatsApp and got them instantly.',
    date: '12 June 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Priyanka Kumari',
    location: 'Kinjar - Kurtha Rd',
    rating: 5,
    comment: 'Very polite behavior and genuine pricing. When I couldn’t find a specific pediatric syrup elsewhere in Kurtha, Harshith Medical Store arranged it for me within a few hours. Highly recommended!',
    date: '28 May 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Dr. Amitav Verma',
    location: 'Local Resident, Motipur',
    rating: 5,
    comment: 'As a local practitioner, I trust Harshith Medical Store for my patients. They store cold-chain medicines properly in refrigerator storage and never compromise on drug quality.',
    date: '15 April 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    name: 'Manoj Kumar',
    location: 'Near Union Bank Area',
    rating: 5,
    comment: 'The location near Union Bank is very convenient. I bought an Omron BP monitor from them with proper bill and demonstration. Excellent customer care service!',
    date: '02 March 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    name: 'Sunita Devi',
    location: 'Kurtha',
    rating: 5,
    comment: 'Great range of baby care products like Huggies and Cerelac at wholesale rates. Their WhatsApp ordering feature makes buying medicines so simple for homemakers.',
    date: '20 February 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '6',
    name: 'Sunil Prasad',
    location: 'Nand Kishor House Complex',
    rating: 5,
    comment: 'Clean premises, honest pricing, and genuine WHO-GMP certified medicines. Harshith Medical Store has earned the trust of all local families in Motipur.',
    date: '10 January 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is Harshith Medical Store located?',
    answer: 'Harshith Medical Store is conveniently located at Nand Kishor House, 18, Kinjar - Kurtha Rd, near Union Bank, Motipur, Bihar 804423. You can easily find us right near Union Bank.'
  },
  {
    id: 'faq-2',
    category: 'Ordering',
    question: 'How can I order medicines via WhatsApp?',
    answer: 'Clicking the "WhatsApp Order" button on our website allows you to type your medicine list or upload a photo of your prescription. Our team verifies the stock and gets back to you immediately.'
  },
  {
    id: 'faq-3',
    category: 'Prescription',
    question: 'Do I need a doctor’s prescription to buy medicines?',
    answer: 'Prescription drugs (like antibiotics, schedule-H medications, and psychiatric formulations) strictly require a valid prescription. Over-the-counter (OTC) products, vitamins, and healthcare devices do not require a prescription.'
  },
  {
    id: 'faq-4',
    category: 'Quality',
    question: 'Are all medicines 100% genuine and batch tested?',
    answer: 'Yes! We only stock 100% original, unadulterated medicines sourced directly from authorized pharmaceutical distributors and leading WHO-GMP certified companies.'
  },
  {
    id: 'faq-5',
    category: 'Timings',
    question: 'What are the store working hours?',
    answer: 'Our store is open 7 days a week from 7:00 AM to 10:00 PM. For emergency medicine inquiries after hours, you can reach out via phone at 09931616480.'
  },
  {
    id: 'faq-6',
    category: 'Delivery',
    question: 'Do you offer local medicine delivery in Motipur & Kurtha?',
    answer: 'Yes, we provide fast local delivery and quick store pickup services for residents in Motipur, Kinjar, and Kurtha regions. Contact us on WhatsApp for fast dispatch.'
  },
  {
    id: 'faq-7',
    category: 'Products',
    question: 'Do you sell medical devices like BP monitors and Glucometers?',
    answer: 'Yes, we stock top-tier medical devices including digital BP monitors (Omron), glucometers (Accu-Chek), pulse oximeters, nebulizers, digital thermometers, and steam inhalers with warranty.'
  },
  {
    id: 'faq-8',
    category: 'Payment',
    question: 'What payment methods do you accept at the store?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and major Debit/Credit cards for smooth cashless transactions.'
  },
  {
    id: 'faq-9',
    category: 'Discounts',
    question: 'Do you offer special discounts on monthly chronic medicines?',
    answer: 'Yes! We provide attractive discounts and special packages for patients requiring recurring monthly medicines for Diabetes, Hypertension, Heart care, and Thyroid.'
  },
  {
    id: 'faq-10',
    category: 'Support',
    question: 'Can I check medicine availability before visiting the store?',
    answer: 'Absolutely. You can call us directly at 09931616480 or message us on WhatsApp to confirm drug availability, price, and substitutes before traveling.'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Modern Store Front View',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
    caption: 'Harshith Medical Store front at Kinjar - Kurtha Rd, Motipur.'
  },
  {
    id: 'g-2',
    title: 'Organized Medicine Shelves',
    category: 'shelves',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80',
    caption: 'Clean, systematically indexed medicine shelves for quick dispensing.'
  },
  {
    id: 'g-3',
    title: 'Medical Devices Showcase',
    category: 'devices',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    caption: 'Certified BP machines, glucometers, and nebulizers on display.'
  },
  {
    id: 'g-4',
    title: 'Baby Care & Wellness Counter',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    caption: 'Dedicated baby food, diapering, and gentle skincare section.'
  },
  {
    id: 'g-5',
    title: 'Cold Storage Refrigerator',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    caption: 'Temperature-controlled storage for insulins, vaccines, and biologics.'
  },
  {
    id: 'g-6',
    title: 'First Aid & Surgical Supplies',
    category: 'products',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80',
    caption: 'Trauma bandages, antiseptics, and hospital disposables.'
  }
];

export const WORKING_PROCESS = [
  {
    step: '01',
    title: 'Visit Store or Contact',
    description: 'Walk into our store at Kinjar-Kurtha Rd or contact us via Call or WhatsApp.',
    icon: 'Store'
  },
  {
    step: '02',
    title: 'Share Prescription',
    description: 'Provide your doctor’s prescription or list of daily required medicines.',
    icon: 'FileText'
  },
  {
    step: '03',
    title: 'Get Verified Medicines',
    description: 'Our certified staff verifies drug batch, expiry, and packages genuine medicines.',
    icon: 'PackageCheck'
  },
  {
    step: '04',
    title: 'Easy Payment & Handover',
    description: 'Pay via Cash, UPI, or Card and receive your order with complete tax invoice.',
    icon: 'CreditCard'
  }
];

export const STORE_MILESTONES = [
  {
    year: '2018',
    title: 'Store Established',
    description: 'Founded in Motipur to provide genuine and affordable healthcare products to local families.'
  },
  {
    year: '2020',
    title: 'Expanded Product Range',
    description: 'Added cold-chain insulin storage, orthopedic supports, and baby care section.'
  },
  {
    year: '2022',
    title: 'WhatsApp Ordering Launch',
    description: 'Introduced quick digital prescription ordering for senior citizens and local residents.'
  },
  {
    year: '2026',
    title: '5,000+ Happy Families Served',
    description: 'Recognized as the premier trusted medical store in Kurtha & Motipur region.'
  }
];
