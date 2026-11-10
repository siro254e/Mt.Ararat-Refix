import { useState } from 'react';
import { ArrowUp, MapPin, Sparkles, ShieldCheck, Phone, MessageCircle, Youtube, Play, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

export function Footer() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Academic Programs', href: '#programs' },
    { label: 'Learning & Ethos', href: '#academics' },
    { label: 'Meet Our Faculty', href: '#faculty' },
    { label: 'Campus Facilities', href: '#facilities' },
    { label: 'Student Life', href: '#school-life' },
    { label: 'Community & Calendar', href: '#community' },
    { label: 'Uniform Guide', href: '#uniforms' },
    { label: 'Admissions & Enrollment', href: '#admissions' },
    { label: 'Admissions FAQ', href: '#faq' },
    { label: 'Visual Gallery', href: '#gallery' },
    { label: 'Location & Visit', href: '#contact' },
  ];

  return (
    <footer className="bg-[#075638] text-white relative overflow-hidden border-t border-[#053c27]">
      {/* Plaid Dark Texture Background */}
      <div className="absolute inset-0 bg-plaid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Column 1: School Identity & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs">
                <SchoolLogo className="h-full w-full" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white leading-tight">
                  Mt. Ararat Shinners School
                </h3>
                <div className="text-xs text-emerald-300 font-semibold tracking-wider uppercase">
                  Eldoret, Kenya
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed max-w-sm">
              Discover a nurturing learning environment where curiosity grows, confidence flourishes, and every learner is encouraged to shine every day.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-semibold text-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Motto: &quot;{SCHOOL_INFO.motto}&quot;</span>
              </div>
            </div>

            {/* Quick Social Badges */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mb-2">
                Connect on Socials:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={SCHOOL_INFO.socials.youtube1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition-all shadow-xs"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-3.5 h-3.5 fill-white" />
                  <span>YouTube Channel</span>
                </a>
                <a
                  href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold transition-all shadow-xs"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-emerald-100/80 hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location & Campus Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-emerald-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <span>
                  Kapsoya Estate, Eldoret, Kenya
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <span className="font-medium text-white">
                  Next to Silas Police Station
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-mono text-emerald-100">
                  <a href="tel:0724570169" className="hover:text-white transition-colors underline decoration-dotted">0724 570 169</a>
                  <span className="text-emerald-400/60">·</span>
                  <a href="tel:0743901978" className="hover:text-white transition-colors underline decoration-dotted">0743 901 978</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-0.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div className="flex items-center gap-2 text-xs text-emerald-100">
                  <span className="font-semibold text-emerald-200">WhatsApp:</span>
                  <a
                    href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-white hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>{SCHOOL_INFO.contactPlaceholders.whatsapp}</span>
                    <span className="text-[11px] px-1.5 py-0.2 bg-[#075E54] text-white rounded font-sans font-medium">Chat</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-[12px] text-emerald-200/70 leading-relaxed">
                Primary: checked green shirt or dress. Junior: dark green trousers or pleated skirt, white logo shirt, blazer and tie. All uniform items from Saiyat School Uniform Supplies, Kapsovya.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated YouTube Videos & Socials Showcase Section */}
        <div className="py-10 border-b border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-600/20 text-red-200 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Our Socials &amp; Video Highlights</span>
              </div>
              <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Watch Life at Mt. Ararat Shinners on YouTube
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl mt-1">
                Explore our graduation ceremonies, school tours, and academic celebrations through official video coverage.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={SCHOOL_INFO.socials.youtube1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-sm active:scale-98"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHOOL_INFO.youtubeVideos.map((video) => {
              const isPlaying = playingVideoId === video.id;

              return (
                <div
                  key={video.id}
                  className="group rounded-2xl overflow-hidden border border-white/15 bg-[#053c27]/90 shadow-md flex flex-col justify-between transition-all hover:border-emerald-400/40"
                >
                  <div className="relative aspect-video w-full bg-black/70 overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        onClick={() => setPlayingVideoId(video.id)}
                        className="relative w-full h-full cursor-pointer group"
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-115 group-hover:bg-red-600">
                            <Play className="w-6 h-6 fill-white ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                            <Youtube className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                            <span>YouTube Video</span>
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-emerald-200">
                            Click to Play
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                        {video.subtitle}
                      </div>
                      <h5 className="font-heading font-bold text-sm sm:text-base text-white mt-0.5 leading-snug">
                        {video.title}
                      </h5>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                      >
                        <span>Open on YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar with Copyright, Socials & Back to Top */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <div>
            © {new Date().getFullYear()} Mt. Ararat Shinners School. All rights reserved. · Kapsoya Estate, Eldoret.
          </div>

          {/* Socials Link Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-semibold text-emerald-300 mr-1">Socials:</span>
            <a
              href={SCHOOL_INFO.socials.youtube1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-red-600 text-white transition-colors"
              title="Watch PP2 Graduation on YouTube"
            >
              <Youtube className="w-3.5 h-3.5 text-red-400 fill-red-400" />
              <span>PP2 Graduation</span>
            </a>
            <a
              href={SCHOOL_INFO.socials.youtube2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-red-600 text-white transition-colors"
              title="Watch School Showcase on YouTube"
            >
              <Youtube className="w-3.5 h-3.5 text-red-400 fill-red-400" />
              <span>School Showcase</span>
            </a>
            <a
              href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-[#25D366] text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs font-medium"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
