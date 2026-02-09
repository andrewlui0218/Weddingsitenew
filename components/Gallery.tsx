import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hk' | 'japan'>('hk');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Generate paths for local images
  const hkPhotos = Array.from({ length: 6 }).map((_, i) => `images/gallery-hk-${i + 1}.jpg`);
  const jpPhotos = Array.from({ length: 6 }).map((_, i) => `images/gallery-jp-${i + 1}.jpg`);

  const currentPhotos = activeTab === 'hk' ? hkPhotos : jpPhotos;

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    // Changed bg-wedding-bg to bg-white/90
    <section id="pre-wedding" className="py-24 bg-white/90 backdrop-blur-sm" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        <div className="text-center mb-12">
          <h3 className="font-serif text-5xl font-bold text-wedding-dark tracking-wider mb-8">Pre-Wedding</h3>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('hk')}
              className={`px-8 py-2 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300
                ${activeTab === 'hk' 
                  ? 'bg-wedding-dark text-white border-wedding-dark shadow-lg scale-105' 
                  : 'bg-white text-wedding-dark border-wedding-dark hover:bg-wedding-dark/10'}
              `}
            >
              Hong Kong
            </button>
            <button
              onClick={() => setActiveTab('japan')}
              className={`px-8 py-2 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300
                ${activeTab === 'japan' 
                  ? 'bg-wedding-dark text-white border-wedding-dark shadow-lg scale-105' 
                  : 'bg-white text-wedding-dark border-wedding-dark hover:bg-wedding-dark/10'}
              `}
            >
              Hokkaido
            </button>
          </div>
        </div>

        <div key={activeTab} className="columns-2 md:columns-3 gap-4 space-y-4">
          {currentPhotos.map((src, index) => (
            <div 
              key={`${activeTab}-${index}`} 
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md group opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 200}ms`, 
                animationDuration: '0.8s',
                animationFillMode: 'forwards' 
              }}
            >
              <img 
                src={src} 
                alt={`Gallery ${activeTab} ${index}`} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-in-out cursor-zoom-in"
                loading="lazy"
                onClick={() => openLightbox(src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full w-full flex justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <i className="fa-solid fa-xmark text-4xl"></i>
            </button>
            <img 
              src={selectedImage} 
              alt="Full view" 
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl animate-zoom-in"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;