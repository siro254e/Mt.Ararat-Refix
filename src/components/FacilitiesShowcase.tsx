import { IMAGES, TRANSPORT_INFO } from '../data/schoolData';
import { Sparkles, Building2, BookOpen, Trees, Palette, Dumbbell, Bus, CarFront, CheckCircle2 } from 'lucide-react';

interface FacilitiesShowcaseProps {
  onSelectImage: (image: { url: string; title: string; caption: string }) => void;
}

export function FacilitiesShowcase({ onSelectImage }: FacilitiesShowcaseProps) {
  const facilities = [
    {
      id: 'fac-1',
      title: 'Modern Collaborative Classrooms',
      subtitle: 'Well-ventilated, daylight-flooded instructional spaces',
      desc: 'Ergonomic wooden group desks, organized educational aids, and low pupil-to-teacher ratios that maximize individual attention and participation.',
      image: IMAGES.classroom,
      icon: Building2,
      caption: 'Classrooms at Mt. Ararat Shinners equipped with natural lighting and group learning desks.'
    },
    {
      id: 'fac-2',
      title: 'Dedicated Library Sanctuary',
      subtitle: 'Nurturing deep literacy and independent enquiry',
      desc: 'Extensive age-appropriate African and global literature, reference encyclopedias, and peaceful reading benches for individual study.',
      image: IMAGES.library,
      icon: BookOpen,
      caption: 'Library reading corner stocked with storybooks and educational texts.'
    },
    {
      id: 'fac-3',
      title: 'Highlands Nature & Science Field',
      subtitle: 'Hands-on experiential ecological discovery',
      desc: 'Lush green lawns in Kapsoya where learners observe plant life, weather patterns, and soil science directly with magnifying instruments.',
      image: IMAGES.outdoor,
      icon: Trees,
      caption: 'Outdoor green campus grounds providing hands-on natural science opportunities.'
    },
    {
      id: 'fac-4',
      title: 'Expressive Arts & Creativity Corner',
      subtitle: 'Unlocking imagination and collaborative teamwork',
      desc: 'Dedicated creative art stations for painting, sketching, pottery, and cultural craft projects that celebrate Kenyan heritage and youthful imagination.',
      image: IMAGES.creative,
      icon: Palette,
      caption: 'Art and craft workspace encouraging cooperative mural painting and color exploration.'
    }
  ];

  const transportPhotos = [
    {
      id: 'transport-bus',
      label: 'School Bus',
      image: IMAGES.schoolBus,
      caption: 'School bus used for supervised daily learner pick-up and drop-off around Eldoret.'
    },
    {
      id: 'transport-van',
      label: 'School Van',
      image: IMAGES.schoolVan,
      caption: 'School van serving nearby estates and smaller groups of learners.'
    }
  ];

  return (
    <section id="facilities" className="py-24 sm:py-32 bg-white dark:bg-[#031910] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F2F3F2] dark:border-[#084c31]">
          <div>
            <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
              Campus Environment & Infrastructure
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
              Designed for Wholesome Development.
            </h2>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                onClick={() =>
                  onSelectImage({
                    url: fac.image,
                    title: fac.title,
                    caption: fac.caption
                  })
                }
                className="photo-interactive-card group rounded-2xl overflow-hidden border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-white dark:bg-[#073322] shadow-xs hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="photo-interactive-image w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="photo-sheen-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#252B28] dark:text-[#F2F3F2] group-hover:text-[#087A50] dark:group-hover:text-emerald-300 transition-colors">
                      {fac.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#075638] dark:text-emerald-400 mt-1 mb-2.5">
                      {fac.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#252B28]/75 dark:text-[#E2E8F0]/80 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2F3F2] dark:border-[#084c31] flex items-center justify-between text-xs font-semibold text-[#087A50] dark:text-emerald-400">
                    <span>View Campus Photograph</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* School Transport: Buses & Vans */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#C6C9C7]/50 bg-white shadow-xs transition-colors dark:border-[#0d5538] dark:bg-[#073322]">
          <div className="grid grid-cols-1 gap-px bg-[#C6C9C7]/50 dark:bg-[#0d5538] sm:grid-cols-2">
            {transportPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() =>
                  onSelectImage({
                    url: photo.image,
                    title: `${photo.label} — Mt. Ararat Shinners School`,
                    caption: photo.caption
                  })
                }
                className="group relative block aspect-[16/10] w-full overflow-hidden bg-slate-100 text-left"
                aria-label={`View photograph of the ${photo.label}`}
              >
                <img
                  src={photo.image}
                  alt={`${photo.label} used for school transport at Mt. Ararat Shinners School`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="photo-sheen-overlay" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div className="text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-200">
                      Our Fleet
                    </div>
                    <div className="font-heading text-lg font-bold leading-tight sm:text-xl">
                      {photo.label}
                    </div>
                  </div>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/40 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
                Home–School Connection
              </div>
              <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-[#252B28] dark:text-[#F2F3F2] sm:text-3xl">
                {TRANSPORT_INFO.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#252B28]/75 dark:text-[#E2E8F0]/80">
                {TRANSPORT_INFO.summary}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {TRANSPORT_INFO.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-xs leading-relaxed text-[#252B28]/80 dark:text-[#E2E8F0]/85 sm:text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#087A50] dark:text-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#087A50] hover:underline dark:text-emerald-400"
              >
                <span>Ask the office about routes and charges</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-[#075638] p-6 text-white">
              <div className="pointer-events-none absolute inset-0 bg-plaid-dark opacity-30" />
              <div className="relative flex items-end gap-3 text-emerald-200">
                <Bus className="h-12 w-12" strokeWidth={1.4} />
                <CarFront className="h-8 w-8" strokeWidth={1.4} />
              </div>
              <div className="relative mt-4">
                <div className="font-heading text-lg font-bold">Buses &amp; Vans</div>
                <div className="mt-1 text-xs text-emerald-200/80">
                  Supervised daily school transport for learners across Eldoret.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
