import { useState, useEffect } from 'react';
import { FACULTY_MEMBERS, IMAGES } from '../data/schoolData';
import { FacultyMember } from '../types';
import {
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  X,
  ArrowRight,
  Quote,
  CheckCircle2,
  Clock,
  Mail,
  UserCheck
} from 'lucide-react';

interface MeetOurFacultyProps {
  onOpenEnquiry: () => void;
}

export function MeetOurFaculty({ onOpenEnquiry }: MeetOurFacultyProps) {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFaculty(null);
      }
    };
    if (selectedFaculty) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedFaculty]);

  return (
    <section
      id="faculty"
      className="py-24 sm:py-32 bg-white dark:bg-[#031910] transition-colors duration-400 relative overflow-hidden"
    >
      {/* Plaid subtle background pattern */}
      <div className="absolute inset-0 bg-plaid-subtle opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F2F3F2] dark:border-[#084c31]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Educators · Eldoret</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              Meet Our Faculty.
            </h2>
          </div>
        </div>

        {/* Large Faculty Image Showcase fitting the four images spaces */}
        <div className="mt-12 w-full max-w-[1284px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C6C9C7]/60 dark:border-[#0d5538] bg-[#073322] shadow-2xl relative group">
          <div className="relative w-full aspect-[1284/762] max-h-[762px] overflow-hidden bg-[#041c12]">
            <img
              src={IMAGES.faculty}
              alt="Mt. Ararat Shinners School Faculty and Teaching Staff in Eldoret"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-102"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle sheen and gradient */}
            <div className="photo-sheen-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          </div>
        </div>
      </div>

      {/* Faculty Modal Popup for Biography & Credentials */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedFaculty(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="faculty-modal-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#073322] border border-[#C6C9C7]/60 dark:border-[#0d5538] shadow-2xl text-[#252B28] dark:text-[#F2F3F2] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-[#252B28] dark:text-white transition-colors cursor-pointer"
              aria-label="Close profile modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column: Portrait & Quick Stats */}
              <div className="md:col-span-5 bg-emerald-50/50 dark:bg-[#041c12] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#F2F3F2] dark:border-[#084c31]">
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md border-2 border-white dark:border-[#0d5538]">
                    <img
                      src={selectedFaculty.image || IMAGES.faculty}
                      alt={selectedFaculty.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087A50]/10 dark:bg-emerald-900/40 text-[#087A50] dark:text-emerald-300 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{selectedFaculty.experience}</span>
                    </div>

                    <div className="text-xs text-[#252B28]/70 dark:text-[#E2E8F0]/70 font-medium">
                      Department:
                      <div className="font-bold text-[#252B28] dark:text-[#F2F3F2] mt-0.5">
                        {selectedFaculty.department}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-6 pt-5 border-t border-[#C6C9C7]/30 dark:border-[#084c31]">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFaculty(null);
                      onOpenEnquiry();
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#087A50] hover:bg-[#075638] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Schedule Admissions Inquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: In-depth Biography & Credentials */}
              <div className="md:col-span-7 p-6 sm:p-8 sm:pr-10 space-y-6">
                <div>
                  <div className="text-[12px] font-bold tracking-wider text-[#087A50] dark:text-emerald-400 uppercase">
                    Mt. Ararat Shinners Faculty Profile
                  </div>
                  <h3
                    id="faculty-modal-title"
                    className="font-heading font-extrabold text-2xl sm:text-3xl text-[#252B28] dark:text-[#F2F3F2] mt-1"
                  >
                    {selectedFaculty.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#075638] dark:text-emerald-300 mt-1">
                    {selectedFaculty.role}
                  </div>
                </div>

                {/* Personal Quote */}
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-[#094d31]/50 border-l-4 border-[#087A50] dark:border-emerald-400">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-[#087A50] dark:text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#252B28]/85 dark:text-[#E2E8F0]/90 italic leading-relaxed">
                      &ldquo;{selectedFaculty.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#087A50] dark:text-emerald-400 mb-2">
                    Professional Biography
                  </h4>
                  <p className="text-xs sm:text-sm text-[#252B28]/80 dark:text-[#E2E8F0]/85 leading-relaxed">
                    {selectedFaculty.bio}
                  </p>
                </div>

                {/* Academic Credentials & Certifications */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#087A50] dark:text-emerald-400 mb-2.5 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Qualifications & Accreditations</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedFaculty.credentials.map((cred, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#252B28]/85 dark:text-[#E2E8F0]/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Teaching Specialties */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#087A50] dark:text-emerald-400 mb-2.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>Specialties & Core Competencies</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFaculty.specialties.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#041c12] text-[#252B28] dark:text-[#E2E8F0] border border-[#C6C9C7]/40 dark:border-[#0d5538]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
