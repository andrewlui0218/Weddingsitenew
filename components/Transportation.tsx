import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Transportation: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Define paths for local images with "images/" prefix
  const mapImage = "images/transport-map.jpg";
  const guideImage = "images/transport-guide.jpg";

  return (
    <section id="transportation" className="py-20 bg-gray-50" ref={ref}>
      <div className={`max-w-5xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-center font-serif text-5xl font-bold text-wedding-dark tracking-wider mb-12">
          Transportation
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            {/* Removed aspect-[4/3] to allow natural image height */}
            <div className="relative overflow-hidden rounded-xl bg-gray-200">
              <img src={mapImage} alt="Direction Map" className="w-full h-auto" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-2 text-center font-semibold text-wedding-dark">
                Location Map
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
             {/* Removed aspect-[4/3] to allow natural image height */}
             <div className="relative overflow-hidden rounded-xl bg-gray-200">
               <img src={guideImage} alt="Transport Guide" className="w-full h-auto" />
               <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-2 text-center font-semibold text-wedding-dark">
                Transport Guide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;