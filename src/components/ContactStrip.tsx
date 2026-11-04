import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

const PHONES = [
  { label: '0724 570 169', href: 'tel:+254724570169' },
  { label: '0743 901 978', href: 'tel:+254743901978' }
];

/**
 * Contact band shown immediately after the hero so phone, WhatsApp and campus
 * details are visible near the top of the page on both mobile and desktop.
 */
export function ContactStrip() {
  return (
    <section
      aria-label="Contact Mt. Ararat Shinners School"
      className="relative z-20 border-b border-[#E4E7E5] bg-white transition-colors duration-400 dark:border-[#084c31] dark:bg-[#031910]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-[#E4E7E5] sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-[#084c31]">
          {/* Phone */}
          <div className="flex items-start gap-3.5 py-5 sm:pr-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087A50] dark:bg-[#094d31] dark:text-emerald-300">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
                Call the school office
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-semibold text-[#252B28] dark:text-[#F2F3F2]">
                {PHONES.map((phone, index) => (
                  <span key={phone.href} className="flex items-center gap-2">
                    {index > 0 && <span className="text-emerald-600/40 dark:text-emerald-400/40">·</span>}
                    <a
                      href={phone.href}
                      className="font-mono transition-colors hover:text-[#087A50] dark:hover:text-emerald-300"
                    >
                      {phone.label}
                    </a>
                  </span>
                ))}
              </div>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Monday – Friday, 7:30 AM – 4:30 PM
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3.5 py-5 transition-colors hover:bg-emerald-50/60 sm:px-6 dark:hover:bg-[#073322]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#075E54] dark:bg-[#094d31] dark:text-[#25D366]">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
                WhatsApp admissions
              </div>
              <div className="mt-1 font-mono text-sm font-semibold text-[#252B28] dark:text-[#F2F3F2]">
                {SCHOOL_INFO.contactPlaceholders.whatsapp}
              </div>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Fastest reply on school days
              </p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-emerald-600/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-emerald-400/60" />
          </a>

          {/* Visit */}
          <a
            href="#contact"
            className="group flex items-start gap-3.5 py-5 transition-colors hover:bg-emerald-50/60 sm:pl-6 dark:hover:bg-[#073322]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087A50] dark:bg-[#094d31] dark:text-emerald-300">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
                Visit the campus
              </div>
              <div className="mt-1 text-sm font-semibold text-[#252B28] dark:text-[#F2F3F2]">
                Kapsoya Estate, Eldoret
              </div>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Next to Silas Police Station
              </p>
            </div>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-emerald-600/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-emerald-400/60" />
          </a>
        </div>
      </div>
    </section>
  );
}
