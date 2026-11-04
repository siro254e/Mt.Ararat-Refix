import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { Maximize2, Sparkles, Filter } from 'lucide-react';

interface GalleryProps {
  onSelectImage: (image: { url: string; title: string; caption: string }) => void;
}

export function Gallery({ onSelectImage }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Classroom', 'Discovery', 'Arts', 'Library'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F8F9F8] dark:bg-[#041f14] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              Visual Prospectus & Life in Pictures
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              Captured Moments of Excellence & Joy.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#252B28]/75 dark:text-[#E2E8F0]/75 max-w-xl text-balance">
              Explore authentic school moments that showcase our green uniform identity, our inspiring learning environments, and the radiant smiles of our students.
            </p>
          </div>

        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.id}
                onClick={() =>
                  onSelectImage({
                    url: item.image,
                    title: item.title,
                    caption: item.caption,
                  })
                }
                className={`photo-interactive-card group relative rounded-2xl overflow-hidden border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-white dark:bg-[#073322] shadow-xs hover:shadow-2xl transition-all duration-400 cursor-pointer ${
                  isFeatured && activeCategory === 'All' ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${isFeatured && activeCategory === 'All' ? 'h-80 sm:h-96' : 'h-72'}`}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="photo-interactive-image w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:contrast-105"
                  />
                  
                  {/* Luminous sheen streak overlay triggered on hover */}
                  <div className="photo-sheen-overlay" />

                  {/* Subtle hover scrim */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-400" />

                  {/* Expand Icon with animated pop */}
                  <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#087A50] transition-all duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
