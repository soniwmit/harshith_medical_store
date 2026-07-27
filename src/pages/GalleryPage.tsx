import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryItem } from '../types';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'devices', label: 'Medical Equipment' },
    { id: 'products', label: 'Products & Wellness' },
  ];

  const filteredImages = GALLERY_IMAGES.filter(img => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  return (
    <div className="w-full font-sans bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors py-8">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bento-card bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white p-8 sm:p-12 border-slate-800 text-center space-y-4">
          <div className="pill-bento mx-auto">VISUAL TOUR</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Store Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a look inside our clean, well-indexed store premises at Kinjar - Kurtha Rd, Motipur.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        
        {/* Category Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bento-card group p-2 cursor-pointer overflow-hidden transition-all duration-300"
            >
              <div className="h-64 w-full overflow-hidden rounded-2xl relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">{item.caption}</p>
                    </div>
                    <div className="p-2 rounded-full bg-[#0A8F6A] text-white shadow-md shrink-0">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bento-card bg-slate-900 text-white border-slate-800 p-2 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black rounded-xl">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-4 text-white">
              <h3 className="font-bold text-lg">{selectedImage.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
