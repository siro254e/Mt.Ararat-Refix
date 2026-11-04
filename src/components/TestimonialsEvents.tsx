import { useState } from 'react';
import { Quote, Calendar, Clock, MapPin, Sparkles, Star, ChevronRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

interface TestimonialsEventsProps {
  onOpenEnquiry: () => void;
}

export function TestimonialsEvents({ onOpenEnquiry }: TestimonialsEventsProps) {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'calendar'>('testimonials');

  const testimonials = [
    {
      id: 'test-1',
      parent: 'Dr. Faith Chepchirchir',
      relation: 'Parent to Grade 3 & PP2 Learners',
      location: 'Kapsoya, Eldoret',
      quote:
        'The transformation in our children’s confidence since joining Mt. Ararat Shinners School has been extraordinary. Their teachers do not simply teach; they genuinely nurture and mentor. The school motto "Excellence Is a Habit Not an Act, Shine Every Day" is lived out in the classroom and at home.',
      rating: 5,
      highlight: 'Dedicated, caring teachers and moral foundation'
    },
    {
      id: 'test-2',
      parent: 'David & Mercy Komen',
      relation: 'Parents to Grade 5 Learner',
      location: 'Elgon View / Kapsoya, Eldoret',
      quote:
        'What gave us complete peace of mind is the serene and highly secure environment right next to Silas Police Station. The emerald uniform instills a remarkable sense of dignity and discipline in the children.',
      rating: 5,
      highlight: 'Secure campus environment & character development'
    },
    {
      id: 'test-3',
      parent: 'Grace Wanjiku Kiprop',
      relation: 'Parent to Grade 1 Learner',
      location: 'Eldoret East',
      quote:
        'The Competency-Based Curriculum is handled with hands-on creativity. From reading sessions in the library to outdoor science discovery, our daughter looks forward to school every single morning.',
      rating: 5,
      highlight: 'Hands-on CBC learning & reading culture'
    }
  ];

  const calendarEvents = [
    {
      id: 'event-1',
      date: 'Term 1 Ongoing',
      title: 'Ongoing Term Admissions & Campus Assessment',
      time: '8:00 AM – 3:30 PM (Weekdays)',
      category: 'Admissions',
      location: 'Main Administration Block, Kapsoya',
      desc: 'Open assessment and registration for Playgroup, PP1, PP2, and Grades 1 through 6. Prospective families are warmly welcomed.'
    },
    {
      id: 'event-2',
      date: 'Upcoming Month',
      title: 'Parent-Teacher Consultation & Academic Review Day',
      time: '9:00 AM – 1:00 PM',
      category: 'Academic',
      location: 'School Assembly Hall & Classrooms',
      desc: 'One-on-one progress discussions between parents and class teachers reviewing learner portfolios, character milestones, and literacy assessments.'
    },
    {
      id: 'event-3',
      date: 'Annual Term Fixture',
      title: 'Inter-House Co-Curricular & Talent Showcase',
      time: '9:30 AM – 3:00 PM',
      category: 'School Life',
      location: 'Green Sports Grounds, Mt. Ararat Shinners',
      desc: 'Celebration of learner talents across expressive arts, choral verse, athletics, chess, and scientific creative models.'
    },
    {
      id: 'event-4',
      date: 'Community Outreach',
      title: 'Kapsoya Estate Environmental Clean-up & Tree Planting',
      time: '8:30 AM – 12:00 PM',
      category: 'Service',
      location: 'Kapsoya Vicinity & School Compound',
      desc: 'Teaching environmental stewardship and community responsibility as part of our Christian-inspired social values.'
    }
  ];

  return (
    <section id="community" className="py-24 sm:py-32 bg-[#F8F9F8] dark:bg-[#041f14] transition-colors duration-400 relative overflow-hidden border-t border-[#F2F3F2] dark:border-[#084c31]">
      {/* Background Plaid Pattern */}
      <div className="absolute inset-0 bg-plaid-subtle opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#C6C9C7]/40 dark:border-[#084c31]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community & School Calendar</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              The Heart of Mt. Ararat Shinners.
            </h2>
          </div>
          <p className="text-sm text-[#252B28]/75 dark:text-[#E2E8F0]/75 max-w-md leading-relaxed text-balance">
            Inspired by the community ethos of Kenya&apos;s leading institutions, hear firsthand from Eldoret families and explore our active school calendar.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('testimonials')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'testimonials'
                ? 'bg-[#087A50] text-white shadow-sm'
                : 'bg-white dark:bg-[#073322] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7]/50 dark:border-[#0d5538] hover:border-[#087A50]'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Parent Testimonials</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('calendar')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'calendar'
                ? 'bg-[#087A50] text-white shadow-sm'
                : 'bg-white dark:bg-[#073322] text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7]/50 dark:border-[#0d5538] hover:border-[#087A50]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>School Calendar & Events</span>
          </button>
        </div>

        {/* Content Pane: Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-white dark:bg-[#073322] border border-[#C6C9C7]/40 dark:border-[#0d5538] shadow-xs hover:border-[#087A50] dark:hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#087A50]/30 dark:text-emerald-400/30" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#252B28]/85 dark:text-[#E2E8F0]/90 leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2F3F2] dark:border-[#084c31]">
                  <div className="text-xs font-bold text-[#087A50] dark:text-emerald-300">
                    {item.highlight}
                  </div>
                  <div className="font-heading font-bold text-sm text-[#252B28] dark:text-[#F2F3F2] mt-1">
                    {item.parent}
                  </div>
                  <div className="text-[12px] text-[#252B28]/60 dark:text-[#E2E8F0]/60">
                    {item.relation} · {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content Pane: Calendar Events */}
        {activeTab === 'calendar' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {calendarEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-7 rounded-2xl bg-white dark:bg-[#073322] border border-[#C6C9C7]/40 dark:border-[#0d5538] shadow-xs hover:border-[#087A50] dark:hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 dark:bg-[#094d31] text-[#075638] dark:text-emerald-300">
                      <Calendar className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                      <span>{evt.date}</span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-[#041c12] text-slate-600 dark:text-slate-300">
                      {evt.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#252B28] dark:text-[#F2F3F2] mb-2">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#252B28]/75 dark:text-[#E2E8F0]/80 leading-relaxed mb-4">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2F3F2] dark:border-[#084c31] flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#252B28]/70 dark:text-[#E2E8F0]/70">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Action Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#075638] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Would You Like to Schedule a Personal Campus Tour?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5">
                Our admissions office in Kapsoya Estate next to Silas Police Station is open Monday through Friday.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#075638] hover:bg-emerald-50 text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span>Book Admissions Visit</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
