import { Check, Shirt, Dumbbell, Store, Maximize2 } from 'lucide-react';
import { UNIFORM_GUIDE, IMAGES } from '../data/schoolData';

interface UniformGuideProps {
  onSelectImage?: (image: { url: string; title: string; caption: string }) => void;
}

/**
 * Full uniform guide for Primary and Junior School, including the P.E. kit and
 * the official supplier named by the school.
 */
export function UniformGuide({ onSelectImage }: UniformGuideProps) {
  return (
    <section
      id="uniforms"
      className="relative overflow-hidden border-t border-[#F2F3F2] bg-[#F8F9F8] py-24 transition-colors duration-400 dark:border-[#084c31] dark:bg-[#041f14] sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-plaid-subtle opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
            Dress Code & School Identity
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#252B28] text-balance dark:text-[#F2F3F2] sm:text-4xl lg:text-5xl">
            What Our Learners Wear.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#252B28]/80 text-balance dark:text-[#E2E8F0]/80 sm:text-base">
            Clear uniform guidance for Primary and Junior School, including the official P.E. kit. Every item is purchased from the school&apos;s approved supplier.
          </p>
        </div>

        {/* Featured Real Students Uniform Showcase on School Lawn */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#C6C9C7]/50 bg-white shadow-xs transition-colors dark:border-[#0d5538] dark:bg-[#073322]">
          <div
            onClick={() =>
              onSelectImage?.({
                url: IMAGES.studentsLawn,
                title: 'Official School Uniform & P.E. Kit — Mt. Ararat Shinners School',
                caption:
                  'Mt. Ararat Shinners pupils on the school lawn showcasing the official uniform dress code (collared shirts, striped ties, green trousers, pleated skirts, striped socks) and sports kit.',
              })
            }
            className={`photo-interactive-card group relative block aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-slate-100 text-left ${
              onSelectImage ? 'cursor-pointer' : ''
            }`}
          >
            <img
              src={IMAGES.studentsLawn}
              alt="Smiling students of Mt. Ararat Shinners School standing on the school lawn wearing official school uniforms and sports kit"
              className="photo-interactive-image h-full w-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="photo-sheen-overlay" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-7 text-white sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                  School Dress Code · In Practice
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white mt-1">
                  Smart, Disciplined &amp; United in Green.
                </h3>
                <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-emerald-50/90 leading-relaxed">
                  Our learners on the Kapsoya campus lawn proudly displaying our formal uniform and P.E. sportswear.
                </p>
              </div>
              {onSelectImage && (
                <span className="inline-flex items-center gap-1.5 shrink-0 self-start sm:self-end rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md ring-1 ring-white/30 transition-all group-hover:bg-[#087A50] group-hover:text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Primary & Junior School */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {UNIFORM_GUIDE.levels.map((level) => (
            <article
              key={level.id}
              className="overflow-hidden rounded-2xl border border-[#C6C9C7]/50 bg-white shadow-xs transition-colors dark:border-[#0d5538] dark:bg-[#073322]"
            >
              <div className="flex items-center gap-3.5 border-b border-[#F2F3F2] p-6 dark:border-[#084c31]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087A50] dark:bg-[#094d31] dark:text-emerald-300">
                  <Shirt className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#252B28] dark:text-[#F2F3F2]">
                    {level.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#075638] dark:text-emerald-400">
                    {level.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-[#F2F3F2] dark:divide-[#084c31] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {(['boys', 'girls'] as const).map((gender) => (
                  <div key={gender} className="p-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
                      {gender === 'boys' ? 'Boys' : 'Girls'}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {level[gender].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#252B28]/80 dark:text-[#E2E8F0]/85 sm:text-sm"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#087A50] dark:text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* P.E. Kit & Supplier */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#C6C9C7]/50 bg-white p-6 shadow-xs transition-colors dark:border-[#0d5538] dark:bg-[#073322] sm:p-8 lg:col-span-2">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087A50] dark:bg-[#094d31] dark:text-emerald-300">
                <Dumbbell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#252B28] dark:text-[#F2F3F2]">
                  P.E. Kit
                </h3>
                <p className="text-xs font-semibold text-[#075638] dark:text-emerald-400">
                  Boys & Girls
                </p>
              </div>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {UNIFORM_GUIDE.pe.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-[#252B28]/80 dark:text-[#E2E8F0]/85 sm:text-sm"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#087A50] dark:text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#053c27] bg-[#075638] p-6 text-white shadow-sm sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-plaid-dark opacity-30" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                <Store className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold">Where to Buy</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-100/85">
                All listed uniform items are to be purchased at:
              </p>
              <p className="mt-2 font-heading text-base font-bold text-white">
                {UNIFORM_GUIDE.supplier}
              </p>
              <p className="mt-4 border-t border-white/15 pt-3 text-xs leading-relaxed text-emerald-200/75">
                Uniform requirements are confirmed with the school office during admission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
