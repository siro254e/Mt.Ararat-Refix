import { ACADEMIC_CARDS } from '../data/schoolData';
import { BookOpen, Palette, Compass, Users2, ArrowUpRight } from 'lucide-react';

const CARD_ICONS = [BookOpen, Palette, Compass, Users2];

interface AcademicExperienceProps {
  onOpenEnquiry: () => void;
}

export function AcademicExperience({ onOpenEnquiry }: AcademicExperienceProps) {
  return (
    <section id="academics" className="py-24 sm:py-32 bg-white dark:bg-[#031910] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F2F3F2] dark:border-[#084c31]">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              Holistic Educational Approach
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              Nurturing Minds to Inquire, Create, and Lead.
            </h2>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ACADEMIC_CARDS.map((card, idx) => {
            const Icon = CARD_ICONS[idx % CARD_ICONS.length];
            return (
              <div
                key={card.title}
                className="photo-interactive-card group flex flex-col rounded-2xl overflow-hidden border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-white dark:bg-[#073322] hover:border-[#087A50] dark:hover:border-emerald-400 hover:shadow-xl transition-all duration-400"
              >
                {/* Visual Thumbnail with Visible Hover Zoom & Sheen */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="photo-interactive-image w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Luminous sheen streak overlay triggered on hover */}
                  <div className="photo-sheen-overlay" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-75" />
                  

                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white dark:bg-[#073322]">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center mb-4 group-hover:bg-[#087A50] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#252B28] dark:text-[#F2F3F2] group-hover:text-[#087A50] dark:group-hover:text-emerald-300 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#252B28]/75 dark:text-[#E2E8F0]/75 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2F3F2] dark:border-[#084c31] flex items-center justify-between text-xs font-semibold text-[#087A50] dark:text-emerald-400">
                    <span>Learn More</span>
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="p-1 rounded hover:bg-emerald-50 dark:hover:bg-[#094d31] transition-colors cursor-pointer"
                      aria-label={`Enquire about ${card.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
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
