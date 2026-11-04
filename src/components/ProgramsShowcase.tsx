import { useState } from 'react';
import { IMAGES } from '../data/schoolData';
import { Sparkles, CheckCircle2, ArrowRight, BookOpen, Heart, Award, Compass } from 'lucide-react';

interface ProgramsShowcaseProps {
  onOpenEnquiry: () => void;
}

export function ProgramsShowcase({ onOpenEnquiry }: ProgramsShowcaseProps) {
  const [activeLevel, setActiveLevel] = useState<'early' | 'lower' | 'upper'>('early');

  const programs = [
    {
      id: 'early',
      title: 'Early Years & Kindergarten',
      grades: 'Playgroup, PP1, PP2 (Ages 3–5)',
      description: 'A warm, sensorial, play-rich environment where young minds develop basic numeracy, phonetic literacy, self-expression, and social empathy in a secure setting.',
      highlights: [
        'Interactive phonics, storytelling & vocabulary growth',
        'Fine and gross motor development through guided play',
        'Sensory exploration and creative art expression',
        'Nurturing Christian-inspired moral foundation'
      ],
      image: IMAGES.outdoor,
      imageAlt: 'Young learners at Mt. Ararat Shinners exploring nature outdoors'
    },
    {
      id: 'lower',
      title: 'Lower Primary Education',
      grades: 'Grades 1, 2, and 3 (Ages 6–8)',
      description: 'Strengthening fundamental literacy and numerical mastery through guided enquiry, project-based tasks, environmental studies, and collaborative peer learning.',
      highlights: [
        'Competency-based core literacy and numeracy fluency',
        'Environmental activities & early scientific investigation',
        'Creative arts, music appreciation, and cultural expression',
        'Character education: respect, diligence, and stewardship'
      ],
      image: IMAGES.classroom,
      imageAlt: 'Lower primary learners seated at classroom wooden desks with literacy books'
    },
    {
      id: 'upper',
      title: 'Upper Primary & Junior Prep',
      grades: 'Grades 4, 5, and 6 (Ages 9–11+)',
      description: 'Fostering analytical thinking, independent research habits, advanced computational skills, and leadership readiness for junior school transition.',
      highlights: [
        'Deep conceptual application in Science, Math & Languages',
        'Collaborative team assignments and public speaking',
        'Practical digital skills and library research sanctuary',
        'Mentorship for holistic academic confidence and discipline'
      ],
      image: IMAGES.library,
      imageAlt: 'Upper primary student reading an inspiring book in the library'
    }
  ];

  const currentProgram = programs.find((p) => p.id === activeLevel) || programs[0];

  return (
    <section id="programs" className="py-24 sm:py-32 bg-white dark:bg-[#031910] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F2F3F2] dark:border-[#084c31]">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              Academic Levels & Curriculum
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              Structured Pathways for Every Stage.
            </h2>
          </div>
        </div>

        {/* Level Switcher Buttons */}
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {programs.map((prog) => (
            <button
              key={prog.id}
              type="button"
              onClick={() => setActiveLevel(prog.id as any)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeLevel === prog.id
                  ? 'bg-[#087A50] text-white shadow-md scale-102'
                  : 'bg-[#F8F9F8] dark:bg-[#073322] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7]/50 dark:border-[#0d5538] hover:border-[#087A50]'
              }`}
            >
              <span>{prog.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Program Showcase Card */}
        <div className="mt-8 rounded-3xl border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-[#F8F9F8] dark:bg-[#073322] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch transition-colors">
          {/* Left Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-[#094d31] text-[#075638] dark:text-emerald-300 text-xs font-bold tracking-wide mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                <span>{currentProgram.grades}</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight">
                {currentProgram.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#252B28]/80 dark:text-[#E2E8F0]/85 leading-relaxed">
                {currentProgram.description}
              </p>

              {/* Highlights List */}
              <div className="mt-6 pt-6 border-t border-[#F2F3F2] dark:border-[#084c31] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#087A50] dark:text-emerald-400">
                  Key Curriculum Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProgram.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#252B28]/80 dark:text-[#E2E8F0]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#087A50] dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#087A50] text-white hover:bg-[#075638] transition-colors shadow-xs cursor-pointer"
              >
                <span>Enquire for {currentProgram.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-200">
            <img
              src={currentProgram.image}
              alt={currentProgram.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
