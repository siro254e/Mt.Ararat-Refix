import { ArrowDown, MapPin, ArrowRight, ShieldCheck, BookOpen, Users, Compass } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export function Hero({ onOpenEnquiry }: HeroProps) {
  const quickHighlights = [
    {
      icon: ShieldCheck,
      title: 'Safe & Serene Campus',
      subtitle: 'Next to Silas Police Station, Kapsoya'
    },
    {
      icon: BookOpen,
      title: 'CBC Curriculum Excellence',
      subtitle: 'Playgroup to Upper Primary'
    },
    {
      icon: Compass,
      title: 'Christian-Inspired Values',
      subtitle: 'Discipline, Integrity & Respect'
    },
    {
      icon: Users,
      title: 'Attentive Faculty Care',
      subtitle: 'Mentorship to Shine Every Day'
    }
  ];

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#075638]">
      {/* Background Image with Ambient Breathing Animation & Hover Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden group">
        <img
          src={IMAGES.hero}
          alt="Mt. Ararat Shinners School pupils walking together on Eldoret campus in emerald green uniforms"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center animate-ken-burns transition-all duration-1000 ease-out group-hover:scale-110 group-hover:contrast-105"
          fetchPriority="high"
          decoding="async"
        />
        {/* Scrim: dark at the top for the navigation and at the base for the
            highlights banner, opening up through the middle so the photograph
            stays visible behind the headline. */}
        <div className="absolute inset-0 bg-[#041c12]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041c12]/80 via-[#053c27]/10 to-[#04241a]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,28,18,0.35),transparent_65%)]" />

        {/* Plaid subtle overlay pattern on dark */}
        <div className="absolute inset-0 bg-plaid-dark opacity-10 pointer-events-none" />

        {/* Ambient Sunbeam / Light Beam Effect reinforcing "Shine Every Day" */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none animate-gentle-float" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 text-center text-white flex flex-col items-center flex-grow justify-center">

        {/* Official School Lockup */}
        <div className="mb-5 flex items-center justify-center rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-white/50">
          <SchoolLogo variant="full" className="h-auto w-40 sm:w-52" alt="Mt. Ararat Shinners School logo" />
        </div>

        <p className="mb-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-emerald-200">
          Eldoret · Kenya
        </p>

        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] max-w-4xl text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
          Every Child Has a Light.{' '}
          <span className="text-emerald-300 underline decoration-white/30 decoration-wavy decoration-1 underline-offset-8">
            We Help It Shine.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-50/90 max-w-2xl font-light leading-relaxed text-balance">
          {SCHOOL_INFO.supportingText}
        </p>

        {/* CTA Group */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white text-[#075638] hover:bg-emerald-50 active:scale-98 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Explore Our School</span>
            <ArrowRight className="w-4 h-4 text-[#087A50]" />
          </a>

          <button
            type="button"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-[#087A50] hover:bg-[#066140] text-white border border-emerald-400/40 active:scale-98 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Enquire About Admission</span>
          </button>
        </div>

        {/* Location Trust Label */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-200/90 font-medium">
          <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{SCHOOL_INFO.location.fullAddress}</span>
        </div>
      </div>

      {/* Docked Highlights Banner (Reflecting Fairmonts International Benchmark) */}
      <div className="relative z-10 w-full border-t border-white/15 bg-black/35 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickHighlights.map((q, idx) => {
              const Icon = q.icon;
              return (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0 border border-white/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-heading font-bold text-white tracking-tight leading-snug">
                      {q.title}
                    </div>
                    <div className="text-[12px] text-emerald-200/80 leading-tight">
                      {q.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
