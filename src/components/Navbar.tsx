import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, SunMedium, MapPin, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface NavbarProps {
  onOpenEnquiry: () => void;
  activeSection: string;
  isNightMode?: boolean;
  onToggleNightMode?: () => void;
}

export function Navbar({
  onOpenEnquiry,
  activeSection,
  isNightMode = false,
  onToggleNightMode,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Academics', href: '#academics' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'School Life', href: '#school-life' },
    { label: 'Community', href: '#community' },
    { label: 'Uniforms', href: '#uniforms' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Utility Bar (Inspired by Fairmonts International School benchmark) */}
        <div
          className={`hidden md:block text-xs border-b transition-all duration-300 ${
            isScrolled
              ? 'h-0 py-0 opacity-0 overflow-hidden pointer-events-none'
              : isNightMode
              ? 'bg-[#031910]/95 backdrop-blur-md text-emerald-200/90 border-[#084c31] py-2 opacity-100'
              : 'bg-[#053c27]/90 backdrop-blur-md text-white/90 border-white/10 py-2 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>{SCHOOL_INFO.location.estate}, Eldoret</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>Next to Silas Police Station</span>
              </div>
              <a
                href="tel:+254724570169"
                className="flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>0724 570 169</span>
              </a>
              <a
                href="tel:+254743901978"
                className="hidden xl:flex items-center gap-1.5 text-emerald-100 hover:text-white transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>0743 901 978</span>
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
            </div>

            <div className="flex items-center gap-4">
              {onToggleNightMode && (
                <button
                  type="button"
                  onClick={onToggleNightMode}
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[12px] font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label={`Switch to ${isNightMode ? 'Daylight' : 'Night Sky'} theme`}
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

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="text-[12px] font-semibold text-emerald-300 hover:text-white underline underline-offset-2 cursor-pointer"
              >
                Admissions Desk
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? isNightMode
                ? 'bg-[#041c12]/95 backdrop-blur-md border-b border-[#084c31] shadow-md py-3 text-[#F2F3F2]'
                : 'bg-white/95 backdrop-blur-md border-b border-[#F2F3F2] shadow-xs py-3 text-[#252B28]'
              : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 text-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 md:gap-8">
              {/* Brand Wordmark & Crest */}
              <a
                href="#"
                className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-xs ${
                    isScrolled ? 'bg-white ring-1 ring-[#087A50]/15' : 'bg-white/95 ring-1 ring-white/40'
                  }`}
                >
                  <SchoolLogo className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight leading-none group-hover:text-[#087A50] transition-colors">
                    Mt. Ararat Shinners
                  </span>
                  <span
                    className={`text-[10px] sm:text-[11px] tracking-normal mt-0.5 font-medium ${
                      isScrolled
                        ? isNightMode
                          ? 'text-emerald-300'
                          : 'text-slate-500'
                        : 'text-emerald-200'
                    }`}
                  >
                    Excellence Is a Habit Not an Act, Shine Every Day
                  </span>
                </div>
              </a>

              {/* Main Desktop Navigation Links */}
              <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 text-[13px] font-medium tracking-tight">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                        isScrolled
                          ? isActive
                            ? 'text-emerald-500 font-semibold'
                            : isNightMode
                            ? 'text-[#E2E8F0]/80 hover:text-emerald-300'
                            : 'text-[#252B28]/80 hover:text-[#087A50]'
                          : isActive
                          ? 'text-white font-semibold'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#087A50] rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Right Action Cluster */}
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                {/* Shine Mode Toggle Button (Compact) */}
                {onToggleNightMode && (
                  <button
                    type="button"
                    onClick={onToggleNightMode}
                    className={`px-2.5 py-1.5 rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap ${
                      isScrolled
                        ? isNightMode
                          ? 'bg-[#073824] text-emerald-200 border border-[#0d6945] hover:bg-[#094d31]'
                          : 'bg-emerald-50 text-[#075638] border border-emerald-200/80 hover:bg-emerald-100'
                        : 'bg-white/15 text-white border border-white/20 hover:bg-white/25 backdrop-blur-xs'
                    }`}
                    aria-label={isNightMode ? 'Switch to Light Mode' : 'Switch to Night Sky Shine Mode'}
                    title={isNightMode ? 'Switch to Light Mode' : 'Switch to Night Sky Shine Mode'}
                  >
                    {isNightMode ? (
                      <>
                        <SunMedium className="w-3.5 h-3.5 text-amber-300" />
                        <span className="hidden sm:inline">Light</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                        <span className="hidden sm:inline">Night Sky</span>
                      </>
                    )}
                  </button>
                )}

                {/* Primary Admissions CTA */}
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-[#087A50] hover:bg-[#075638] active:scale-98 transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* Mobile Drawer Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`xl:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                    isScrolled
                      ? isNightMode
                        ? 'text-[#F2F3F2] hover:bg-[#073824]'
                        : 'text-[#252B28] hover:bg-[#F2F3F2]'
                      : 'text-white hover:bg-white/10'
                  }`}
                  aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] p-6 shadow-2xl flex flex-col justify-between transition-colors overflow-y-auto ${
              isNightMode
                ? 'bg-[#041c12] text-[#F2F3F2] border-l border-[#084c31]'
                : 'bg-white text-[#252B28]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div
                className={`flex items-center justify-between pb-5 border-b ${
                  isNightMode ? 'border-[#084c31]' : 'border-[#F2F3F2]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-white p-0.5 flex items-center justify-center shadow-xs">
                    <SchoolLogo className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-sm leading-tight">
                      Mt. Ararat Shinners
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-emerald-500 font-medium">
                      Excellence Is a Habit Not an Act, Shine Every Day
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-1.5 rounded-lg cursor-pointer ${
                    isNightMode
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-500 hover:text-black'
                  }`}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div
                className={`py-3 text-[12px] flex items-center gap-1.5 ${
                  isNightMode ? 'text-emerald-300' : 'text-slate-600'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#087A50] shrink-0" />
                <span>Kapsoya Estate · Next to Silas Police Station</span>
              </div>

              <nav className="flex flex-col gap-1 mt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isNightMode
                        ? 'hover:bg-[#073824] hover:text-emerald-300 text-slate-200'
                        : 'hover:bg-[#F2F3F2] hover:text-[#087A50] text-[#252B28]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div
              className={`pt-6 border-t space-y-3.5 ${
                isNightMode ? 'border-[#084c31]' : 'border-[#F2F3F2]'
              }`}
            >
              {onToggleNightMode && (
                <button
                  type="button"
                  onClick={() => {
                    onToggleNightMode();
                  }}
                  className={`w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                    isNightMode
                      ? 'bg-[#073824] text-emerald-200 border-[#0d6945]'
                      : 'bg-[#F8F9F8] text-[#075638] border-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isNightMode ? (
                      <SunMedium className="w-4 h-4 text-amber-300" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                    )}
                    <span>Theme: {isNightMode ? 'Night Sky' : 'Primary Light'}</span>
                  </span>
                  <span className="text-[11px] text-emerald-500 uppercase tracking-wider font-bold">
                    Switch
                  </span>
                </button>
              )}

              <a
                href="tel:+254724570169"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#087A50] hover:bg-[#075638] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 0724 570 169</span>
              </a>

              <a
                href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#075E54] hover:bg-[#054d45] text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {SCHOOL_INFO.contactPlaceholders.whatsapp}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#087A50] hover:bg-[#075638] text-white text-sm font-semibold transition-colors shadow-xs cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p
                className={`text-center text-xs font-medium px-4 ${
                  isNightMode ? 'text-emerald-400/80' : 'text-slate-500'
                }`}
              >
                Motto: &quot;{SCHOOL_INFO.motto}&quot;
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
