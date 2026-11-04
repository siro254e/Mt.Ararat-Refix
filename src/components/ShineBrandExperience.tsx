import { Sparkles, SunMedium, ArrowRight } from 'lucide-react';

interface ShineBrandExperienceProps {
  onOpenEnquiry: () => void;
}

export function ShineBrandExperience({ onOpenEnquiry }: ShineBrandExperienceProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#087A50] text-white overflow-hidden">
      {/* Plaid Subtle Texture on Deep Emerald */}
      <div className="absolute inset-0 bg-plaid-dark opacity-40 pointer-events-none" />

      {/* Radiant Sunbeam & Animated Light Sweep */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Light Sweep Sheen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine-sweep" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Sun Icon and Motto Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
          <SunMedium className="w-4 h-4 text-emerald-300" />
          <span>The School Motto · Mt. Ararat Shinners School</span>
        </div>

        {/* Large Signature Motto Typography */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <p className="font-heading font-semibold text-lg sm:text-2xl md:text-3xl text-emerald-200 tracking-wide uppercase">
            &ldquo;Excellence Is a Habit Not an Act&rdquo;
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white text-balance drop-shadow-md">
            SHINE EVERY DAY.
          </h2>
        </div>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-xl md:text-2xl text-emerald-50/95 font-light max-w-2xl leading-relaxed text-balance">
          Every lesson is an opportunity. Every challenge is a chance to grow. Excellence is built through daily dedication and character.
        </p>

        {/* Decorative Plaid-inspired Divider Line */}
        <div className="mt-10 mb-8 flex items-center justify-center gap-3 w-48">
          <div className="h-px bg-white/30 flex-grow" />
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <div className="h-px bg-white/30 flex-grow" />
        </div>

        {/* Action Button leading to Admissions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-white text-[#075638] hover:bg-emerald-50 active:scale-98 transition-all shadow-lg cursor-pointer"
          >
            <span>Begin Your Child&apos;s Admission Journey</span>
            <ArrowRight className="w-4 h-4 text-[#087A50]" />
          </button>
        </div>

        {/* Location subtitle */}
        <div className="mt-6 text-xs text-emerald-200/80 font-medium">
          Kapsoya Estate, Eldoret · Serving Learners with Excellence & Dedication
        </div>
      </div>
    </section>
  );
}
