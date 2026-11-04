import { PILLARS, IMAGES, SCHOOL_INFO } from '../data/schoolData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F8F9F8] dark:bg-[#041f14] transition-colors duration-400 relative overflow-hidden">
      {/* Decorative Plaid-inspired Grid Elements */}
      <div className="absolute inset-0 bg-plaid-subtle opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
            About Our School · Eldoret
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
            A Place to Grow. A Place to Shine.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#252B28]/80 dark:text-[#E2E8F0]/80 leading-relaxed text-balance">
            At Mt. Ararat Shinners School, we believe every learner deserves an opportunity to discover their abilities, develop confidence, and build a strong foundation for the future.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Photography with Frame Details & Visible Hover Motion */}
          <div className="lg:col-span-6 relative">
            <div className="photo-interactive-card relative rounded-2xl overflow-hidden border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-white dark:bg-[#073322] group cursor-pointer shadow-sm">
              <div className="relative h-[400px] sm:h-[480px] overflow-hidden">
                <img
                  src={IMAGES.aboutUs}
                  alt="Pupils at Mt. Ararat Shinners School actively participating in group learning"
                  referrerPolicy="no-referrer"
                  className="photo-interactive-image w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108 group-hover:rotate-0.5"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Luminous sheen streak overlay triggered on hover */}
                <div className="photo-sheen-overlay" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-85" />


              </div>
              </div>

            {/* Subtle decorative plaid offset line */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-48 h-48 border-2 border-dashed border-[#087A50]/20 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Three Feature Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-6 rounded-xl bg-white dark:bg-[#073322] border border-[#C6C9C7]/30 dark:border-[#0d5538] shadow-xs hover:border-[#087A50]/50 dark:hover:border-emerald-500 transition-all hover:shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading font-extrabold text-xs text-[#087A50] dark:text-emerald-300 tracking-wider bg-emerald-50 dark:bg-[#094d31] px-2 py-0.5 rounded">
                      {pillar.number}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-[#252B28] dark:text-[#F2F3F2]">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="text-xs font-medium text-[#075638] dark:text-emerald-400 mb-1.5">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm text-[#252B28]/80 dark:text-[#E2E8F0]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* School Values & Uniform Heritage Note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#252B28]/70 dark:text-emerald-200/80">
              <CheckCircle2 className="w-4 h-4 text-[#087A50] dark:text-emerald-400 shrink-0" />
              <span>
                Uniform Identity: Dark green, white and grey — with checked green everyday wear in Primary and a formal blazer and tie in Junior School.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
