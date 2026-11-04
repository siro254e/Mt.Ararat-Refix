import { MapPin, Clock, Phone, Sparkles, SunMedium, ShieldCheck, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface TopUtilityBarProps {
  isNightMode?: boolean;
  onToggleNightMode?: () => void;
  onOpenEnquiry?: () => void;
}

export function TopUtilityBar({
  isNightMode = false,
  onToggleNightMode,
  onOpenEnquiry
}: TopUtilityBarProps) {
  return (
    <div
      className={`hidden md:block text-xs border-b transition-colors duration-300 relative z-50 ${
        isNightMode
          ? 'bg-[#03150e] text-emerald-200/90 border-[#084c31]'
          : 'bg-[#075638] text-white/90 border-[#053c27]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Verified Location & Landmark */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{SCHOOL_INFO.location.estate}, {SCHOOL_INFO.location.town}</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Next to Silas Police Station</span>
            </div>
            <a
              href="tel:0724570169"
              className="hidden xl:flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>0724 570 169</span>
            </a>
            <a
              href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>WhatsApp: {SCHOOL_INFO.contactPlaceholders.whatsapp}</span>
            </a>
            <div className="hidden 2xl:flex items-center gap-1.5 text-emerald-100/80">
              <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Mon – Fri: 7:30 AM – 4:30 PM</span>
            </div>
          </div>

          {/* Right: Quick Actions & Theme Switch */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:inline-flex items-center gap-1.5 text-emerald-200/90 font-medium text-[12px]">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              <span>Motto: &quot;{SCHOOL_INFO.motto}&quot;</span>
            </div>

            {onToggleNightMode && (
              <button
                type="button"
                onClick={onToggleNightMode}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[12px] font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Toggle theme mode"
              >
                {isNightMode ? (
                  <>
                    <SunMedium className="w-3 h-3 text-amber-300" />
                    <span>Daylight</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3 text-emerald-300" />
                    <span>Night Sky</span>
                  </>
                )}
              </button>
            )}

            {onOpenEnquiry && (
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="text-[12px] font-semibold text-emerald-300 hover:text-white underline underline-offset-2 cursor-pointer"
              >
                Admissions Desk
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
