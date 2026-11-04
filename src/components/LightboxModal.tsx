import { useState, useEffect } from 'react';
import { X, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface LightboxModalProps {
  image: {
    url: string;
    title: string;
    caption: string;
  } | null;
  onClose: () => void;
}

export function LightboxModal({ image, onClose }: LightboxModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (image) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setIsZoomed(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#075638]/95 border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span className="font-heading font-bold text-sm tracking-wide">
              Mt. Ararat Shinners School · Photo Focus
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
              aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              <span className="hidden sm:inline">{isZoomed ? "100%" : "Zoom"}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Box with Interactive Zoom & Smooth Hover Transition */}
        <div
          className={`relative w-full max-h-[66vh] flex items-center justify-center bg-black/50 overflow-hidden cursor-${
            isZoomed ? 'zoom-out' : 'zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={image.url}
            alt={image.title}
            referrerPolicy="no-referrer"
            className={`max-h-[66vh] w-auto max-w-full object-contain transition-transform duration-500 ease-out ${
              isZoomed ? 'scale-135 cursor-zoom-out' : 'hover:scale-103'
            }`}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Caption Area */}
        <div className="w-full p-5 sm:p-6 bg-[#053c27] text-white">
          <h3 className="font-heading font-bold text-base sm:text-lg text-emerald-200">
            {image.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-emerald-50/85 leading-relaxed">
            {image.caption}
          </p>
          <div className="mt-3 flex items-center justify-between text-[12px] text-emerald-300/70 border-t border-white/10 pt-2">
            <span>Kapsoya Estate, Eldoret · Uniform Focus</span>
            <span>Motto: &quot;{SCHOOL_INFO.motto}&quot;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
