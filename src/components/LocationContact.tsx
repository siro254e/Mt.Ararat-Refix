import { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Copy,
  Check,
  MessageCircle,
  ZoomIn,
  ZoomOut,
  Eye,
  Layers,
  LocateFixed,
  Maximize2,
  Minimize2,
  RotateCcw,
  Compass
} from 'lucide-react';

interface LocationContactProps {
  onOpenEnquiry: () => void;
}

type LandmarkPreset = 'campus' | 'silas' | 'kapsoya';

export function LocationContact({ onOpenEnquiry }: LocationContactProps) {
  const [copied, setCopied] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [mapView, setMapView] = useState<'google' | 'schematic'>('google');
  const [zoomLevel, setZoomLevel] = useState<number>(16);
  const [isStreetView, setIsStreetView] = useState<boolean>(false);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeLandmark, setActiveLandmark] = useState<LandmarkPreset>('campus');
  const [isMapLoading, setIsMapLoading] = useState<boolean>(false);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? '';

  const landmarkQueries: Record<LandmarkPreset, { query: string; center: string; label: string }> = {
    campus: {
      query: 'Silas Police Station, Kapsoya, Eldoret, Kenya',
      center: '0.5230,35.2910',
      label: 'Mt. Ararat Shinners Campus'
    },
    silas: {
      query: 'Silas Police Post, Kapsoya, Eldoret, Kenya',
      center: '0.5232,35.2905',
      label: 'Silas Police Station Landmark'
    },
    kapsoya: {
      query: 'Kapsoya Estate, Eldoret, Kenya',
      center: '0.5210,35.2930',
      label: 'Kapsoya Estate Area'
    }
  };

  const currentLandmark = landmarkQueries[activeLandmark];

  // Google Maps embed: uses the keyed Embed API when a key is configured,
  // otherwise falls back to the keyless /maps?output=embed endpoint.
  const embedMapUrl = isStreetView && apiKey
    ? `https://www.google.com/maps/embed/v1/streetview?key=${apiKey}&location=${currentLandmark.center}&heading=215&pitch=5&fov=85`
    : apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(
        currentLandmark.query
      )}&center=${currentLandmark.center}&zoom=${zoomLevel}&maptype=${mapType}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(
        currentLandmark.query
      )}&z=${zoomLevel}&t=${mapType === 'satellite' ? 'k' : 'm'}&output=embed`;

  const handleZoomIn = () => {
    setIsMapLoading(true);
    setZoomLevel((prev) => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setIsMapLoading(true);
    setZoomLevel((prev) => Math.max(prev - 1, 12));
  };

  const handleToggleStreetView = () => {
    setIsMapLoading(true);
    setIsStreetView((prev) => !prev);
  };

  const handleToggleMapType = () => {
    setIsMapLoading(true);
    setMapType((prev) => (prev === 'roadmap' ? 'satellite' : 'roadmap'));
  };

  const handleResetMap = () => {
    setIsMapLoading(true);
    setZoomLevel(16);
    setIsStreetView(false);
    setMapType('roadmap');
    setActiveLandmark('campus');
  };

  const handleSelectLandmark = (landmark: LandmarkPreset) => {
    setIsMapLoading(true);
    setActiveLandmark(landmark);
  };

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText('0.5230° N, 35.2910° E');
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Silas Police Station, Kapsoya, Eldoret, Kenya'
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SCHOOL_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Kapsoya Estate Eldoret Silas Police Station Kenya'
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white dark:bg-[#031910] transition-colors duration-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-widest text-[#087A50] dark:text-emerald-400 uppercase mb-2">
            Location & Campus Visits
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#252B28] dark:text-[#F2F3F2] tracking-tight text-balance">
            Come Visit Us.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252B28]/80 dark:text-[#E2E8F0]/80 leading-relaxed text-balance">
            We welcome prospective parents and guardians to tour our classrooms, meet our teaching team, and experience the warm, purposeful atmosphere at Mt. Ararat Shinners School.
          </p>
        </div>

        {/* 2-Column Split: Interactive Location Details & Schematic Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Location Details & Contact Placeholders */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Official Address Card */}
              <div className="p-6 rounded-2xl bg-[#F8F9F8] dark:bg-[#073322] border border-[#C6C9C7]/50 dark:border-[#0d5538] shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#087A50] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#252B28] dark:text-[#F2F3F2]">
                      School Campus Location
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#075638] dark:text-emerald-300">
                      Mt. Ararat Shinners School
                    </p>
                    <p className="text-xs text-[#252B28]/80 dark:text-[#E2E8F0]/80 mt-0.5">
                      Kapsoya Estate, Eldoret, Kenya
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100/70 dark:bg-[#094d31] text-[#075638] dark:text-emerald-200 text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                      <span>Next to Silas Police Station</span>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#052618] border border-[#C6C9C7] dark:border-[#0d5538] text-[#252B28] dark:text-[#F2F3F2] hover:bg-slate-50 dark:hover:bg-[#084c31] transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#087A50]" />
                            <span className="text-[#087A50]">Address Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>

                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#087A50] text-white hover:bg-[#075638] transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Contact & Office Hours */}
              <div className="p-6 rounded-2xl bg-[#F8F9F8] dark:bg-[#073322] border border-[#C6C9C7]/50 dark:border-[#0d5538] shadow-xs space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2] uppercase tracking-wider">
                      Administration Office Hours
                    </h4>
                    <p className="text-xs text-[#252B28]/80 dark:text-[#E2E8F0]/80 mt-0.5">
                      {SCHOOL_INFO.contactPlaceholders.officeHours}
                    </p>
                    <p className="text-[12px] text-[#252B28]/60 dark:text-[#E2E8F0]/60 mt-0.5">
                      Saturday visits by prior appointment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#F2F3F2] dark:border-[#084c31]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2] uppercase tracking-wider">
                      Direct Telephone
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-emerald-200 font-mono mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <a
                        href="tel:0724570169"
                        className="font-bold text-[#087A50] dark:text-emerald-300 hover:underline transition-colors"
                      >
                        0724 570 169
                      </a>
                      <span className="text-slate-300 dark:text-emerald-300">·</span>
                      <a
                        href="tel:0743901978"
                        className="font-bold text-[#087A50] dark:text-emerald-300 hover:underline transition-colors"
                      >
                        0743 901 978
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Direct Chat */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#F2F3F2] dark:border-[#084c31]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366] dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2] uppercase tracking-wider">
                        WhatsApp Enquiries
                      </h4>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Chat Online
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2.5">
                      <a
                        href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold font-mono text-[#087A50] dark:text-emerald-300 hover:underline"
                      >
                        {SCHOOL_INFO.contactPlaceholders.whatsapp}
                      </a>
                      <a
                        href={SCHOOL_INFO.contactPlaceholders.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-semibold bg-[#075E54] hover:bg-[#054d45] text-white shadow-xs transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {SCHOOL_INFO.contactPlaceholders.email && (
                  <div className="flex items-start gap-3 pt-3 border-t border-[#F2F3F2] dark:border-[#084c31]">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-[#094d31] text-[#087A50] dark:text-emerald-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2] uppercase tracking-wider">
                        Official Email
                      </h4>
                      <a
                        href={`mailto:${SCHOOL_INFO.contactPlaceholders.email}`}
                        className="text-xs text-slate-600 dark:text-emerald-300/80 font-mono mt-0.5 hover:underline"
                      >
                        {SCHOOL_INFO.contactPlaceholders.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-5 rounded-2xl bg-[#075638] text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-emerald-200">
                  Ready to visit our school?
                </div>
                <div className="text-xs text-emerald-50/80 mt-0.5">
                  Book a campus orientation or enquiry call.
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-white text-[#075638] hover:bg-emerald-50 transition-colors shrink-0 cursor-pointer"
              >
                Book Visit
              </button>
            </div>
          </div>

          {/* Right Column: Custom Interactive Schematic Map of Kapsoya Estate & Silas Police Station */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl border border-[#C6C9C7]/50 dark:border-[#0d5538] bg-[#F8F9F8] dark:bg-[#073322] overflow-hidden flex flex-col flex-grow shadow-xs">
              {/* Map Bar with View Switcher */}
              <div className="p-3.5 sm:p-4 bg-white dark:bg-[#052618] border-b border-[#F2F3F2] dark:border-[#084c31] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#087A50] animate-pulse" />
                  <span className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2]">
                    Kapsoya Estate, Eldoret
                  </span>
                  <span className="hidden sm:inline-block text-[12px] text-slate-500 dark:text-emerald-300/70 font-mono">
                    · Next to Silas Police Station
                  </span>
                </div>

                {/* View Switcher: Live Google Map vs Schematic Guide */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-[#073322] rounded-lg border border-[#C6C9C7]/40 dark:border-[#0d5538] text-[12px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setMapView('google')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      mapView === 'google'
                        ? 'bg-[#087A50] text-white shadow-xs'
                        : 'text-slate-600 dark:text-emerald-200/80 hover:text-[#087A50] dark:hover:text-white'
                    }`}
                  >
                    Live Google Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapView('schematic')}
                    className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      mapView === 'schematic'
                        ? 'bg-[#087A50] text-white shadow-xs'
                        : 'text-slate-600 dark:text-emerald-200/80 hover:text-[#087A50] dark:hover:text-white'
                    }`}
                  >
                    Campus Scheme
                  </button>
                </div>
              </div>

              {/* Map Canvas / Embed Container */}
              <div
                className={`relative flex-grow flex items-center justify-center transition-all duration-300 ${
                  isExpanded ? 'min-h-[580px] sm:min-h-[640px]' : 'min-h-[420px]'
                } bg-slate-100 dark:bg-[#03150e] overflow-hidden`}
              >
                {mapView === 'google' && (
                  <iframe
                    id="google-maps-embed-frame"
                    title="Mt. Ararat Shinners School Location Map"
                    width="100%"
                    height="100%"
                    className={`w-full h-full transition-all duration-300 ${
                      isExpanded ? 'min-h-[580px] sm:min-h-[640px]' : 'min-h-[420px]'
                    } border-0`}
                    style={{ border: 0 }}
                    loading="lazy"
                    allow="geolocation; fullscreen; accelerometer; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={embedMapUrl}
                    onLoad={() => setIsMapLoading(false)}
                  />
                )}

                {mapView === 'google' && isMapLoading && (
                  <div className="absolute inset-0 z-10 bg-slate-900/10 dark:bg-black/25 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-opacity">
                    <div className="px-3.5 py-1.5 rounded-lg bg-white/95 dark:bg-[#041c12]/95 border border-[#C6C9C7]/60 dark:border-[#0d5538] shadow-md text-xs font-semibold text-[#087A50] dark:text-emerald-300 flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-[#087A50] border-t-transparent rounded-full animate-spin" />
                      <span>Updating map view...</span>
                    </div>
                  </div>
                )}

                {mapView === 'google' && (
                  /* Floating Campus Landmark Pin Overlay (Top-Left) */
                  <div className="absolute top-3 left-3 z-20 pointer-events-auto max-w-[260px] sm:max-w-xs">
                    <div className="p-3 rounded-xl bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md border border-[#C6C9C7]/80 dark:border-[#0d5538] shadow-lg text-left">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#087A50] animate-pulse" />
                        <h4 className="text-xs font-bold text-[#252B28] dark:text-[#F2F3F2] truncate">
                          Mt. Ararat Shinners School
                        </h4>
                      </div>
                      <p className="text-[12px] text-slate-600 dark:text-emerald-200/80 mt-0.5 leading-snug">
                        Kapsoya Estate · Next to Silas Police Station
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-[#084c31] flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={handleCopyCoordinates}
                          className="text-[11px] font-mono font-medium text-slate-500 dark:text-emerald-300/80 hover:text-[#087A50] dark:hover:text-emerald-200 flex items-center gap-1 cursor-pointer"
                          title="Copy GPS coordinates"
                        >
                          {copiedCoords ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedCoords ? 'Copied' : '0.5230° N, 35.2910° E'}</span>
                        </button>
                        <a
                          href={directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#087A50] hover:bg-[#075638] text-white text-[11px] font-bold transition-colors shadow-xs"
                        >
                          <Navigation className="w-2.5 h-2.5" />
                          <span>Directions</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {mapView === 'google' && (
                  /* Interactive Floating Map Controls (Top-Right) */
                  <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 pointer-events-auto">
                    {/* Street View 360 Panorama Button */}
                    <button
                      type="button"
                      onClick={handleToggleStreetView}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer border ${
                        isStreetView
                          ? 'bg-amber-400 text-slate-900 border-amber-300 ring-2 ring-amber-400/40'
                          : 'bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md text-[#252B28] dark:text-[#F2F3F2] border-[#C6C9C7]/80 dark:border-[#0d5538] hover:bg-slate-50 dark:hover:bg-[#073322]'
                      }`}
                      title={isStreetView ? 'Return to Standard Map View' : 'Switch to 360° Street View Panorama'}
                      aria-label={isStreetView ? 'Return to Standard Map View' : 'Switch to 360° Street View Panorama'}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isStreetView ? 'Exit 360°' : 'Street View'}</span>
                    </button>

                    {/* Map Layer Switcher (Roadmap vs Satellite) */}
                    {!isStreetView && (
                      <button
                        type="button"
                        onClick={handleToggleMapType}
                        className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7]/80 dark:border-[#0d5538] hover:bg-slate-50 dark:hover:bg-[#073322] shadow-md transition-all cursor-pointer"
                        title="Toggle Satellite / Road Map view"
                        aria-label="Toggle Satellite / Road Map view"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                        <span className="capitalize">{mapType === 'roadmap' ? 'Satellite' : 'Road'}</span>
                      </button>
                    )}

                    {/* Re-center / Reset Map Focus */}
                    <button
                      type="button"
                      onClick={handleResetMap}
                      className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7]/80 dark:border-[#0d5538] hover:bg-slate-50 dark:hover:bg-[#073322] shadow-md transition-all cursor-pointer"
                      title="Re-center onto Mt. Ararat Shinners Campus"
                      aria-label="Re-center onto Mt. Ararat Shinners Campus"
                    >
                      <LocateFixed className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                      <span>Center</span>
                    </button>

                    {/* Zoom In & Out Controls */}
                    {!isStreetView && (
                      <div className="flex flex-col rounded-lg bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md border border-[#C6C9C7]/80 dark:border-[#0d5538] shadow-md overflow-hidden">
                        <button
                          type="button"
                          onClick={handleZoomIn}
                          disabled={zoomLevel >= 20}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-[#073322] text-[#252B28] dark:text-[#F2F3F2] disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-b border-[#F2F3F2] dark:border-[#084c31] cursor-pointer flex items-center justify-center"
                          title="Zoom In"
                          aria-label="Zoom in on map"
                        >
                          <ZoomIn className="w-4 h-4 text-[#087A50] dark:text-emerald-400" />
                        </button>
                        <div className="py-0.5 text-[11px] font-mono font-bold text-center text-slate-500 dark:text-emerald-300/80 bg-slate-50/70 dark:bg-[#052618]/70 select-none">
                          {zoomLevel}x
                        </div>
                        <button
                          type="button"
                          onClick={handleZoomOut}
                          disabled={zoomLevel <= 12}
                          className="p-2 hover:bg-slate-100 dark:hover:bg-[#073322] text-[#252B28] dark:text-[#F2F3F2] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center justify-center"
                          title="Zoom Out"
                          aria-label="Zoom out on map"
                        >
                          <ZoomOut className="w-4 h-4 text-[#087A50] dark:text-emerald-400" />
                        </button>
                      </div>
                    )}

                    {/* Expand / Minimize Height Toggle */}
                    <button
                      type="button"
                      onClick={() => setIsExpanded((prev) => !prev)}
                      className="flex items-center justify-center p-2 rounded-lg text-xs font-semibold bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md text-[#252B28] dark:text-[#F2F3F2] border border-[#C6C9C7]/80 dark:border-[#0d5538] hover:bg-slate-50 dark:hover:bg-[#073322] shadow-md transition-all cursor-pointer"
                      title={isExpanded ? 'Collapse map viewport' : 'Expand map viewport'}
                      aria-label={isExpanded ? 'Collapse map viewport' : 'Expand map viewport'}
                    >
                      {isExpanded ? (
                        <Minimize2 className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                      ) : (
                        <Maximize2 className="w-3.5 h-3.5 text-[#087A50] dark:text-emerald-400" />
                      )}
                    </button>
                  </div>
                )}

                {mapView === 'google' && (
                  /* Landmark Presets Bar (Bottom-Right / Bottom-Left) */
                  <div className="absolute bottom-3 left-3 right-3 sm:left-auto z-20 pointer-events-auto flex items-center gap-1.5 p-1 rounded-xl bg-white/95 dark:bg-[#041c12]/95 backdrop-blur-md border border-[#C6C9C7]/80 dark:border-[#0d5538] shadow-md text-[12px] overflow-x-auto">
                    <span className="text-[11px] font-bold text-slate-400 dark:text-emerald-400/60 uppercase tracking-wider px-1.5 hidden sm:inline">
                      Focus:
                    </span>
                    {(['campus', 'silas', 'kapsoya'] as LandmarkPreset[]).map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleSelectLandmark(preset)}
                        className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer whitespace-nowrap text-xs ${
                          activeLandmark === preset
                            ? 'bg-[#087A50] text-white shadow-xs'
                            : 'text-slate-600 dark:text-emerald-200/80 hover:bg-slate-100 dark:hover:bg-[#073322]'
                        }`}
                      >
                        {preset === 'campus'
                          ? '🏫 Campus'
                          : preset === 'silas'
                          ? '📍 Silas Post'
                          : '🏘️ Kapsoya Estate'}
                      </button>
                    ))}
                  </div>
                )}

                {mapView === 'schematic' && (
                  /* SVG Schematic Blueprint */
                  <div className="w-full h-full p-6 sm:p-8 flex items-center justify-center bg-radial from-emerald-50/40 to-slate-100 dark:from-[#052618] dark:to-[#03150e]">
                    <svg
                      viewBox="0 0 600 400"
                      className="w-full h-full max-h-[360px] drop-shadow-sm select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Subtle Grid Lines */}
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C6C9C7" strokeWidth="0.5" opacity="0.4" />
                        </pattern>
                      </defs>
                      <rect width="600" height="400" fill="url(#grid)" />

                      {/* Eldoret Town Direction Road */}
                      <path
                        d="M 20 280 Q 200 240 380 200 T 580 140"
                        stroke="#C6C9C7"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 20 280 Q 200 240 380 200 T 580 140"
                        stroke="#FFFFFF"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="10 8"
                      />
                      <text x="35" y="315" fill="#64748b" fontSize="11" fontWeight="600">
                        ← From Eldoret CBD / Uganda Road
                      </text>
                      <text x="460" y="130" fill="#64748b" fontSize="11" fontWeight="600">
                        To Kapsoya Phase 2 →
                      </text>

                      {/* Branch Road to Silas Police Post & School */}
                      <path
                        d="M 330 215 L 330 80"
                        stroke="#C6C9C7"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 330 215 L 330 80"
                        stroke="#FFFFFF"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <text x="345" y="165" fill="#64748b" fontSize="10" fontWeight="500">
                        Silas Access Road
                      </text>

                      {/* Landmark 1: Silas Police Station */}
                      <g transform="translate(180, 70)">
                        <rect width="130" height="75" rx="8" fill="#FFFFFF" stroke="#075638" strokeWidth="1.5" />
                        <rect x="0" y="0" width="130" height="6" rx="3" fill="#075638" />
                        <circle cx="20" cy="32" r="8" fill="#075638" />
                        <text x="17" y="36" fill="#FFFFFF" fontSize="11" fontWeight="bold">P</text>
                        <text x="36" y="28" fill="#075638" fontSize="11" fontWeight="bold">Silas Police Post</text>
                        <text x="36" y="44" fill="#64748b" fontSize="9">Official Landmark</text>
                        <text x="14" y="64" fill="#087A50" fontSize="9" fontWeight="600">Kapsoya Police Station</text>
                      </g>

                      {/* Landmark 2: Mt. Ararat Shinners School (Prominent Highlight) */}
                      <g transform="translate(360, 50)">
                        <rect width="190" height="105" rx="12" fill="#087A50" stroke="#053c27" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(8,122,80,0.25))" />
                        <rect x="8" y="8" width="174" height="89" rx="8" fill="#075638" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="34" cy="38" r="14" fill="#FFFFFF" />
                        <text x="27" y="43" fill="#087A50" fontSize="13" fontWeight="bold">MAS</text>
                        <text x="56" y="34" fill="#FFFFFF" fontSize="12" fontWeight="bold">Mt. Ararat Shinners</text>
                        <text x="56" y="49" fill="#A7F3D0" fontSize="10" fontWeight="600">School Campus</text>
                        <text x="18" y="72" fill="#FFFFFF" fontSize="9" opacity="0.9">Next to Silas Police Station</text>
                        <text x="18" y="86" fill="#FDE047" fontSize="7.5" fontWeight="bold">&quot;Excellence Is a Habit Not an Act, Shine EveryDay&quot;</text>
                      </g>

                      {/* Connecting Direction Arrow between Silas Station and School */}
                      <path
                        d="M 315 105 L 350 105"
                        stroke="#087A50"
                        strokeWidth="3"
                        strokeDasharray="4 4"
                      />
                      <polygon points="353,105 345,101 345,109" fill="#087A50" />
                      <text x="295" y="125" fill="#087A50" fontSize="9" fontWeight="bold">
                        Directly Adjacent
                      </text>
                    </svg>
                  </div>
                )}
              </div>

              {/* Directions Instructions Bottom Strip */}
              <div className="p-4 bg-white dark:bg-[#052618] border-t border-[#F2F3F2] dark:border-[#084c31] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-600 dark:text-emerald-100/80">
                  <span className="font-semibold text-[#252B28] dark:text-white">Directions:</span> From Eldoret Town, take the Kapsoya Estate road towards Silas Police Station. The school is directly next to the station.
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#087A50] dark:text-emerald-400 hover:underline whitespace-nowrap"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
