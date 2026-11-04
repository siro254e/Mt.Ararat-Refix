import { useState } from 'react';
import { IMAGES } from '../data/schoolData';
import { Maximize2, Sparkles, BookOpen, Sun, Palette, Music, Drama } from 'lucide-react';

interface SchoolLifeProps {
  onSelectImage: (image: { url: string; title: string; caption: string }) => void;
}

export function SchoolLife({ onSelectImage }: SchoolLifeProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'classroom' | 'outdoor' | 'creative'>('all');

  const lifeMoments = [
    {
      id: 'sl-1',
      type: 'outdoor',
      title: 'Morning Fellowship & Sunshine on the Lawn',
      subtitle: 'Confidence & Joy Every Morning',
      image: IMAGES.schoolLifeFellowship,
      aspect: 'col-span-1 md:col-span-2 row-span-2',
      tag: 'Morning Assembly',
      icon: Sun,
      caption: 'Learners in emerald-green uniform sweaters greeting each new day with prayer, fellowship, and bright aspirations on the school field.'
    },
    {
      id: 'sl-7',
      type: 'creative',
      title: 'Annual Cultural Folk Dance & Drumming Festival',
      subtitle: 'African Percussion & Indigenous Dance',
      image: IMAGES.culturalDance,
      aspect: 'col-span-1 md:col-span-2 row-span-1',
      tag: 'Cultural Music & Dance',
      icon: Music,
      caption: 'Mt. Ararat Shinners pupils performing vibrant traditional drumming, folk dances, and songs under the festival banner "Unity in Diversity".'
    },
    {
      id: 'sl-9',
      type: 'classroom',
      title: 'Interactive Mathematics & Equations Class',
      subtitle: 'Conceptual Mastery & Teacher Mentorship',
      image: IMAGES.classroomMath,
      aspect: 'col-span-1 md:col-span-2 row-span-1',
      tag: 'Mathematics & Logic',
      icon: BookOpen,
      caption: 'Dedicated teacher guiding pupils through mathematical equations in bright, sunlit classrooms overlooking the school courtyard.'
    },
    {
      id: 'sl-2',
      type: 'classroom',
      title: 'Collaborative Group Literacy & Discussion',
      subtitle: 'Guided Classroom Mentorship',
      image: IMAGES.classroom,
      aspect: 'col-span-1 md:col-span-1 row-span-1',
      tag: 'Interactive Learning',
      icon: BookOpen,
      caption: 'Active reading and comprehension round-table discussions where every child contributes their perspective.'
    },
    {
      id: 'sl-8',
      type: 'creative',
      title: 'National Music & Drama Choir Ensemble',
      subtitle: 'Vocal Harmony & Stage Regalia',
      image: IMAGES.culturalChoir,
      aspect: 'col-span-1 md:col-span-1 row-span-1',
      tag: 'Choir & Performance',
      icon: Drama,
      caption: 'Pupils performing in matching traditional cultural costumes with shakers, marimbas, and percussion drums at the music festival.'
    },
    {
      id: 'sl-3',
      type: 'outdoor',
      title: 'Experiential Nature & Science Discovery',
      subtitle: 'Hands-on Highlands Exploration',
      image: IMAGES.outdoor,
      aspect: 'col-span-1 md:col-span-1 row-span-1',
      tag: 'Science & Ecology',
      icon: Sparkles,
      caption: 'Investigating botanical specimens with magnifying glasses in the rich Eldoret highlands environment.'
    },
    {
      id: 'sl-4',
      type: 'creative',
      title: 'Shared Mural Art & Expressive Projects',
      subtitle: 'Teamwork & Vibrant Creativity',
      image: IMAGES.creative,
      aspect: 'col-span-1 md:col-span-1 row-span-1',
      tag: 'Visual Arts',
      icon: Palette,
      caption: 'Children working side-by-side to paint a communal landscape mural depicting Kenya’s rich natural beauty and bright sun.'
    },
    {
      id: 'sl-5',
      type: 'classroom',
      title: 'Quiet Concentration in the Library Sanctuary',
      subtitle: 'Developing Independent Reading Habits',
      image: IMAGES.library,
      aspect: 'col-span-1 md:col-span-1 row-span-1',
      tag: 'Reading Corner',
      icon: BookOpen,
      caption: 'Nurturing deep literacy through a rich selection of storybooks, reference materials, and quiet reflection.'
    },
    {
      id: 'sl-6',
      type: 'outdoor',
      title: 'Outdoor Recreation & Team Fellowship',
      subtitle: 'Energy, Play & Shared Comradeship',
      image: IMAGES.fellowshipLawn,
      aspect: 'col-span-1 md:col-span-1 row-span-1',
      tag: 'Field & Recreation',
      icon: Sun,
      caption: 'Joyful interaction, team games, and active play under the warm Eldoret sun on the school green field.'
    }
  ];

  const filteredMoments = lifeMoments.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="school-life" className="py-24 sm:py-32 bg-[#F8F9F8] dark:bg-[#041f14] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              Daily Student Life · Eldoret
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              Where Growth Happens in Every Moment.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#252B28]/75 dark:text-[#E2E8F0]/75 max-w-xl text-balance">
              From morning fellowship to creative teamwork, library reading, and outdoor discovery, daily life at Mt. Ararat Shinners School is rich, disciplined, and full of joy.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-white dark:bg-[#073322] border border-[#C6C9C7]/50 dark:border-[#0d5538] rounded-xl shadow-xs self-start md:self-end md:flex md:flex-nowrap md:shrink-0 max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#087A50] text-white shadow-xs'
                  : 'text-[#252B28]/70 dark:text-emerald-200/70 hover:text-[#087A50] dark:hover:text-white'
              }`}
            >
              All Moments
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('classroom')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'classroom'
                  ? 'bg-[#087A50] text-white shadow-xs'
                  : 'text-[#252B28]/70 dark:text-emerald-200/70 hover:text-[#087A50] dark:hover:text-white'
              }`}
            >
              Classroom
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('outdoor')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'outdoor'
                  ? 'bg-[#087A50] text-white shadow-xs'
                  : 'text-[#252B28]/70 dark:text-emerald-200/70 hover:text-[#087A50] dark:hover:text-white'
              }`}
            >
              Discovery & Field
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('creative')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === 'creative'
                  ? 'bg-[#087A50] text-white shadow-xs'
                  : 'text-[#252B28]/70 dark:text-emerald-200/70 hover:text-[#087A50] dark:hover:text-white'
              }`}
            >
              Creative Arts
            </button>
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredMoments.map((moment) => (
            <div
              key={moment.id}
              onClick={() =>
                onSelectImage({
                  url: moment.image,
                  title: moment.title,
                  caption: moment.caption
                })
              }
              className={`photo-interactive-card group relative rounded-2xl overflow-hidden border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-white dark:bg-[#073322] shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                activeTab === 'all' ? moment.aspect : 'col-span-1 md:col-span-1'
              }`}
            >
              <img
                src={moment.image}
                alt={moment.title}
                referrerPolicy="no-referrer"
                className="photo-interactive-image w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:contrast-105"
                loading="lazy"
                decoding="async"
              />

              {/* Luminous sheen streak overlay triggered on hover */}
              <div className="photo-sheen-overlay" />

              {/* Subtle hover scrim */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-400" />

              {/* Lightbox Trigger Hint with animated scale and background */}
              <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-[#087A50] transition-all duration-300 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
